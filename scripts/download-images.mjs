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
    prompt: 'Generate an image: ultra-realistic modern American suburban two-story home exterior at dusk, two HD outdoor security cameras mounted on brick corners, sleek smart video doorbell glowing blue-white on dark wood front door, professional real estate photography, cinematic blue and navy color grading, sharp photorealistic quality, no text, no logos',
  },
  {
    filename: 'service-camera-install.jpg',
    prompt: 'Generate an image: close-up photorealistic shot of a professional technician in a dark navy uniform installing a black outdoor security camera onto an exterior brick wall, using a cordless drill, bright natural daylight, blurred backyard behind, cinematic depth of field, no text, no logos',
  },
  {
    filename: 'service-doorbell-setup.jpg',
    prompt: 'Generate an image: modern sleek black smart video doorbell mounted on a white door frame of a contemporary American home entrance, glowing blue LED ring around lens, warm porch lighting, evening golden hour, photorealistic product photography style, no text, no logos',
  },
  {
    filename: 'service-wifi-setup.jpg',
    prompt: 'Generate an image: professional home network equipment on a clean desk — a black WiFi router with glowing blue LEDs, ethernet cables neatly connected, a dual monitor behind showing live security camera feeds, dark blue tech ambiance, photorealistic, no text, no logos',
  },
  {
    filename: 'service-support.jpg',
    prompt: 'Generate an image: photorealistic portrait of a friendly professional male customer support agent in his 30s wearing a dark blue polo and a wireless headset, sitting at a modern workstation showing security camera live feeds, soft studio lighting, confident smile, no text, no logos',
  },
  {
    filename: 'technician-working.jpg',
    prompt: 'Generate an image: photorealistic photo of a confident professional male technician in his 30s wearing a dark navy branded uniform and tool belt, smiling at camera while mounting a security camera on an exterior wall, sunny suburban neighborhood background, natural lighting, no text, no logos',
  },
  {
    filename: 'about-team.jpg',
    prompt: 'Generate an image: photorealistic group photo of four professional smart home security technicians — two men and two women — in matching dark blue branded uniforms, standing proudly in front of a white branded service van in a suburban neighborhood, sunny day, diverse team, warm natural lighting, no text, no logos',
  },
  {
    filename: 'team-marcus.jpg',
    prompt: 'Generate an image: professional headshot photo of a confident Black male technician in his mid-30s wearing a clean dark navy uniform shirt, warm professional smile, neutral light grey studio background, soft box lighting, photorealistic portrait, no text, no logos',
  },
  {
    filename: 'team-sarah.jpg',
    prompt: 'Generate an image: professional headshot photo of a young White female network engineer in her early 30s wearing smart business casual grey blazer, warm friendly smile, light grey neutral background, soft studio lighting, photorealistic portrait, no text, no logos',
  },
  {
    filename: 'team-david.jpg',
    prompt: 'Generate an image: professional headshot photo of a Hispanic male tech support specialist in his late 20s wearing a dark navy polo, a wireless headset resting around his neck, confident friendly smile, neutral grey background, professional studio lighting, photorealistic portrait, no text, no logos',
  },
  {
    filename: 'team-priya.jpg',
    prompt: 'Generate an image: professional headshot photo of a South Asian female customer success manager in her early 30s wearing a professional teal blouse, warm genuine smile, modern softly blurred indoor office background with warm tones, professional photography, photorealistic portrait, no text, no logos',
  },
]

async function generateAndSave(item) {
  console.log(`[v0] Generating image: ${item.filename}`)
  try {
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
      console.error(`[v0] API error for ${item.filename}: ${res.status} ${err.slice(0, 200)}`)
      return
    }

    const data = await res.json()
    const imageUrl = data?.choices?.[0]?.message?.content?.trim()

    if (!imageUrl || !imageUrl.startsWith('http')) {
      console.error(`[v0] No valid URL for ${item.filename}. Got:`, imageUrl?.slice(0, 100))
      return
    }

    console.log(`[v0] Image URL for ${item.filename}: ${imageUrl.slice(0, 80)}...`)

    // Download the image
    const imgRes = await fetch(imageUrl, { signal: AbortSignal.timeout(120000) })
    if (!imgRes.ok) {
      console.error(`[v0] Failed to download ${item.filename}: HTTP ${imgRes.status}`)
      return
    }

    const buffer = await imgRes.arrayBuffer()
    const dir = path.resolve('/public/images')
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })
    const outPath = path.join(dir, item.filename)
    fs.writeFileSync(outPath, Buffer.from(buffer))
    console.log(`[v0] Saved: ${outPath} (${Math.round(buffer.byteLength / 1024)}KB)`)
  } catch (e) {
    console.error(`[v0] Exception for ${item.filename}:`, e.message)
  }
}

async function main() {
  console.log(`[v0] Starting generation of ${images.length} images sequentially...`)
  for (const item of images) {
    await generateAndSave(item)
    // Small delay between requests
    await new Promise(r => setTimeout(r, 1500))
  }
  // Verify
  const dir = '/public/images'
  const saved = fs.existsSync(dir) ? fs.readdirSync(dir) : []
  console.log(`[v0] Done! Files in /public/images: ${saved.join(', ')}`)
}

main().catch(e => { console.error('[v0] Fatal:', e); process.exit(1) })
