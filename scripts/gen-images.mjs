import fs from 'fs';
import path from 'path';
import https from 'https';
import http from 'http';

const ENDPOINT = 'https://llm.blackbox.ai/chat/completions';
const HEADERS = {
  'customerId': 'cus_U4nd8l2SPq70aE',
  'Content-Type': 'application/json',
  'Authorization': 'Bearer xxx',
};

const images = [
  { key: 'hero-bg', prompt: 'Modern luxury smart home exterior at night, security cameras mounted on corners, glowing video doorbell on brick wall, blue LED accent lighting, cinematic wide shot, photorealistic, 4k' },
  { key: 'service-camera', prompt: 'Professional security camera installation on suburban home exterior brick wall, wide angle lens, infrared night vision LEDs, blue sky background, photorealistic DSLR photo' },
  { key: 'service-doorbell', prompt: 'Smart video doorbell installed on modern front door frame, sleek black device, visitor pressing button, warm porch lighting, photorealistic lifestyle photo' },
  { key: 'service-wifi', prompt: 'Home network technician setting up router and smart security camera system, clean desk, glowing device indicators, professional setup, photorealistic' },
  { key: 'service-support', prompt: 'Friendly technical support specialist wearing headset at computer desk, screen showing home security camera feed, smiling, bright office, photorealistic' },
  { key: 'why-us-tech', prompt: 'Professional male technician in blue company uniform and tool belt installing security camera on brick wall, smiling confidently, sunny day, photorealistic' },
  { key: 'services-camera-lg', prompt: 'Close-up security camera mounted on home exterior wall, night vision active, blue glow, suburban driveway in background, photorealistic 4k photo' },
  { key: 'services-doorbell-lg', prompt: 'Smart video doorbell installed on modern home entrance door frame, illuminated ring glowing blue, nighttime, photorealistic lifestyle photography' },
  { key: 'services-wifi-lg', prompt: 'Smart home network setup, router connected to security devices with glowing blue indicators, white clean background, tech product photography' },
  { key: 'services-support-lg', prompt: 'Customer support representative with headset, dual monitors showing home security camera live feed, professional help desk environment, photorealistic' },
  { key: 'about-hero', prompt: 'Team of professional smart home security technicians in matching blue uniforms standing in front of branded service van parked outside a suburban home, smiling group photo, photorealistic' },
  { key: 'team-1', prompt: 'Professional male security technician, 30s, blue company uniform, smiling confidently, white studio background, headshot portrait, photorealistic' },
  { key: 'team-2', prompt: 'Professional female network engineer, 30s, business casual attire, smiling warmly, indoor office background softly blurred, headshot portrait, photorealistic' },
  { key: 'team-3', prompt: 'Male tech support specialist, 40s, wearing headset, smiling, professional office background, headshot portrait, photorealistic' },
  { key: 'team-4', prompt: 'Female customer success manager, 30s, professional attire, warm smile, modern office background, headshot portrait, photorealistic' },
];

async function callAPI(prompt) {
  const body = JSON.stringify({
    model: 'replicate/black-forest-labs/flux-1.1-pro',
    messages: [
      { role: 'system', content: 'You are a helpful AI assistant.' },
      { role: 'user', content: `Generate an image: ${prompt}` },
    ],
  });

  return new Promise((resolve, reject) => {
    const url = new URL(ENDPOINT);
    const options = {
      hostname: url.hostname,
      path: url.pathname,
      method: 'POST',
      headers: { ...HEADERS, 'Content-Length': Buffer.byteLength(body) },
    };
    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          const content = json?.choices?.[0]?.message?.content || '';
          // extract URL from content
          const match = content.match(/https?:\/\/[^\s"')]+/);
          resolve(match ? match[0] : null);
        } catch (e) { reject(e); }
      });
    });
    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

async function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    const file = fs.createWriteStream(dest);
    protocol.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        file.close();
        downloadFile(res.headers.location, dest).then(resolve).catch(reject);
        return;
      }
      res.pipe(file);
      file.on('finish', () => { file.close(); resolve(dest); });
    }).on('error', (err) => { fs.unlink(dest, () => {}); reject(err); });
  });
}

const outDir = path.join(process.cwd(), 'public', 'images');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const results = {};

for (const img of images) {
  console.log(`Generating: ${img.key}...`);
  try {
    const imageUrl = await callAPI(img.prompt);
    if (!imageUrl) { console.log(`  No URL for ${img.key}`); continue; }
    console.log(`  URL: ${imageUrl}`);
    const ext = imageUrl.includes('.png') ? 'png' : 'jpg';
    const dest = path.join(outDir, `${img.key}.${ext}`);
    await downloadFile(imageUrl, dest);
    results[img.key] = `/images/${img.key}.${ext}`;
    console.log(`  Saved: ${dest}`);
  } catch (e) {
    console.log(`  Error for ${img.key}: ${e.message}`);
  }
}

fs.writeFileSync(path.join(outDir, 'manifest.json'), JSON.stringify(results, null, 2));
console.log('\nDone! Manifest:', results);
