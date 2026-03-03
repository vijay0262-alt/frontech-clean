import fs from 'fs'
import path from 'path'

const API_URL = 'https://llm.blackbox.ai/chat/completions'
const HEADERS = {
  'customerId': 'cus_U4nd8l2SPq70aE',
  'Content-Type': 'application/json',
  'Authorization': 'Bearer xxx',
}

const images = [
  {
    filename: 'hero-bg.jpg',
    prompt: 'Generate an image: Ultra-realistic modern suburban home exterior at night, multiple HD security cameras mounted on corners and above garage, smart video doorbell glowing blue on front door, dramatic cinematic lighting with deep navy and electric blue tones, sharp 4K quality, professional real estate photography style, no text',
  },
  {
    filename: 'service-camera-install.jpg',
    prompt: 'Generate an image: Professional security camera being installed on the exterior brick wall of a house, close-up of technician in dark blue uniform using a drill, outdoor daytime, clear sky, realistic photo, sharp focus, no text overlay',
  },
  {
    filename: 'service-doorbell-setup.jpg',
    prompt: 'Generate an image: Modern smart video doorbell mounted on a contemporary home front door frame, sleek black device with blue illuminated ring, front porch with soft warm lighting, realistic photo quality, no text',
  },
  {
    filename: 'service-wifi-setup.jpg',
    prompt: 'Generate an image: Close-up of professional smart home network setup on a desk, WiFi router and network switch with glowing blue LED indicators, connected to security camera on monitor showing live feed, dark tech background, professional product photo, no text',
  },
  {
    filename: 'service-support.jpg',
    prompt: 'Generate an image: Friendly professional male tech support agent in a dark blue polo wearing a headset, sitting at a modern desk with dual monitors showing security camera feeds, soft studio lighting, realistic portrait, no text',
  },
  {
    filename: 'technician-working.jpg',
    prompt: 'Generate an image: Professional male technician in a dark navy branded uniform with a tool belt, confidently smiling while installing an outdoor security camera on a brick wall, daytime natural lighting, realistic professional photo, no text',
  },
  {
    filename: 'about-team.jpg',
    prompt: 'Generate an image: Group of four professional smart home security technicians in matching dark blue uniforms, standing proudly in front of a white branded service van, suburban neighborhood background, sunny day, diverse team, realistic professional photo, no text',
  },
  {
    filename: 'team-marcus.jpg',
    prompt: 'Generate an image: Professional headshot of a confident male technician in his 30s wearing a dark blue uniform, smiling, neutral light grey background, realistic portrait photo, no text',
  },
  {
    filename: 'team-sarah.jpg',
    prompt: 'Generate an image: Professional headshot of a female network engineer in her early 30s wearing smart business casual attire, warm confident smile, light grey neutral background, realistic portrait photo, no text',
  },
  {
    filename: 'team-david.jpg',
    prompt: 'Generate an image: Professional headshot of a male tech support specialist in his late 20s wearing a dark navy polo and a headset around his neck, friendly smile, neutral grey background, realistic portrait photo, no text',
  },
  {
    filename: 'team-priya.jpg',
    prompt: 'Generate an image: Professional headshot of a South Asian female customer success manager in her early 30s wearing smart business casual, warm genuine smile, modern office background softly blurred, realistic portrait photo, no text',
  },
]

async function generateImage(item) {
  console.log(`[v0] Generating: ${item.filename}`)
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: HEADERS,
    body: JSON.stringify({
      model: 'replicate/black-forest-labs/flux-1.1-pro',
      messages: [
        { role: 'system', content: 'You are a helpful AI assistant.' },
        { role: 'user', content: item.prompt },
      ],
    }),
    signal: AbortSignal.timeout(300000),
  })

  if (!res.ok) {
    const err = await res.text()
    console.error(`[v0] Failed ${item.filename}: ${res.status} ${err}`)
    return null
  }

  const data = await res.json()
  const imageUrl = data?.choices?.[0]?.message?.content
  if (!imageUrl || !imageUrl.startsWith('http')) {
    console.error(`[v0] No valid URL returned for ${item.filename}:`, imageUrl)
    return null
  }

  console.log(`[v0] Got URL for ${item.filename}: ${imageUrl}`)

  // Download the image
  const imgRes = await fetch(imageUrl, { signal: AbortSignal.timeout(120000) })
  if (!imgRes.ok) {
    console.error(`[v0] Failed to download image for ${item.filename}`)
    return null
  }

  const buffer = await imgRes.arrayBuffer()
  const dir = '/public/images'
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })
  const filePath = path.join(dir, item.filename)
  fs.writeFileSync(filePath, Buffer.from(buffer))
  console.log(`[v0] Saved: ${filePath}`)
  return filePath
}

async function main() {
  console.log(`[v0] Starting generation of ${images.length} images...`)
  // Generate in batches of 3 to avoid rate limits
  for (let i = 0; i < images.length; i += 3) {
    const batch = images.slice(i, i + 3)
    await Promise.all(batch.map(generateImage))
  }
  console.log('[v0] All images generated!')
}

main().catch((e) => {
  console.error('[v0] Fatal error:', e)
  process.exit(1)
})
