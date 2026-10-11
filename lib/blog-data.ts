export interface BlogSection {
  heading: string;
  paragraphs: string[];
  list?: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  description: string;
  date: string; // ISO date
  readTime: string;
  category: string;
  image: { src: string; alt: string };
  sections: BlogSection[];
  relatedSlugs: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'how-to-choose-security-cameras-2026',
    title: 'How to Choose the Right Security Cameras for Your Home in 2026',
    excerpt:
      'Resolution, field of view, night vision, storage — the spec sheet tells only half the story. Here is how to match a camera to the job it actually needs to do.',
    description:
      'A practical 2026 guide to choosing home security cameras — resolution, field of view, night vision, storage options and which features actually matter.',
    date: '2026-02-10',
    readTime: '9 min read',
    category: 'Buying Guide',
    image: {
      src: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=80',
      alt: 'White security camera mounted on the exterior wall of a home',
    },
    sections: [
      {
        heading: 'Start With What You Want to See, Not the Spec Sheet',
        paragraphs: [
          'Most people shop for cameras backwards. They compare megapixel counts and feature lists before answering the only question that matters: what do I need this camera to show me? A camera watching a narrow side gate needs something very different from one covering a wide driveway, and neither necessarily needs the highest resolution on the market.',
          'Walk your property and make a short list of the spots that matter — the front door, the driveway, the back yard, a side entrance. For each spot, note roughly how far the camera will be from the area it watches and whether it sits indoors or out. That five-minute exercise will narrow your options faster than an hour of reading reviews.',
        ],
      },
      {
        heading: 'Resolution: 1080p Is Fine for Most, 4K for Long Distances',
        paragraphs: [
          'For a camera mounted within 20–25 feet of its subject — a porch, a hallway, a garage door — 1080p is honestly enough to identify a face or read a package label. Where resolution earns its keep is distance. If you want to read a license plate 50 feet down the driveway, 4K gives you the pixel density to zoom in after the fact without the image turning to mush.',
          'The hidden cost of 4K is storage and bandwidth. Higher resolution means bigger files and heavier upload traffic, so plan storage accordingly — more on that below.',
        ],
      },
      {
        heading: 'Night Vision: Infrared vs. Color Modes',
        paragraphs: [
          'Standard infrared night vision produces the familiar black-and-white footage. It is reliable and does not disturb anyone. Newer "color night vision" cameras use a built-in spotlight or a larger sensor to capture color detail after dark — genuinely useful for identifying a car color or clothing, but the spotlight can annoy neighbors if it triggers constantly.',
          'If your camera watches a shared space or a fence line, look for models with adjustable or smart-triggered spotlights rather than always-on illumination.',
        ],
      },
      {
        heading: 'Storage: Cloud Subscription vs. Local Recording',
        paragraphs: [
          'Cloud storage is convenient — footage survives even if someone steals the camera — but subscriptions add up across multiple cameras. Local storage (microSD card or an NVR/DVR box) costs more upfront and nothing monthly, though footage disappears with the device if it is taken.',
          'A practical middle ground many homeowners land on: local recording for continuous coverage, with the manufacturer\'s free tier (usually a few hours of rolling cloud clips) for instant alerts. When we design an install, we usually map out the monthly cost across every camera so there are no subscription surprises later.',
        ],
        list: [
          'Cloud: easiest access, monthly fee per camera or per plan',
          'microSD in-camera: cheap, but footage is lost if the camera is removed',
          'NVR/DVR: records everything continuously, one-time cost, more wiring',
          'Hybrid: local recording plus free cloud alerts — best of both for most homes',
        ],
      },
      {
        heading: 'Field of View and Smart Detection',
        paragraphs: [
          'A wider field of view means fewer cameras to cover the same area — 130° to 160° covers most residential needs. Anything wider starts to distort the image at the edges, which matters less than you might think.',
          'More valuable than raw width is smart detection. Person, package, and vehicle detection dramatically cut down on the "tree branch moved" notifications that train everyone to ignore alerts. It is the single feature most worth paying for.',
        ],
      },
      {
        heading: 'When to Get a Professional Opinion',
        paragraphs: [
          'Choosing cameras is the easy half; placing, powering, and connecting them is where installs get complicated — especially multi-camera systems, wired runs, or cameras that need to reach a distant corner of a detached garage. If you want a second set of eyes on your plan, a quick call can save you a return shipment and a Saturday on a ladder.',
        ],
      },
    ],
    relatedSlugs: ['wired-vs-wireless-cameras', 'camera-placement-mistakes', 'wifi-for-security-cameras'],
  },
  {
    slug: 'camera-placement-mistakes',
    title: '7 Camera Placement Mistakes That Leave Blind Spots (And How to Avoid Them)',
    excerpt:
      'The most expensive camera in the world is useless pointed at the wrong spot. These are the placement errors we correct most often on service calls.',
    description:
      'The 7 most common security camera placement mistakes — mounting too high, facing windows, Wi-Fi dead zones — and how to get full coverage of your home.',
    date: '2026-02-24',
    readTime: '8 min read',
    category: 'Planning',
    image: {
      src: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=1200&q=80',
      alt: 'Dome security camera mounted under the eaves of a house',
    },
    sections: [
      {
        heading: '1. Mounting Too High',
        paragraphs: [
          'The instinct is understandable — mount it up high so nobody can grab it. But at 12 feet up, most cameras capture the tops of heads instead of faces. For identification-quality video at an entry point, 7 to 9 feet is the sweet spot: high enough to deter tampering, low enough to actually see who is standing there.',
        ],
      },
      {
        heading: '2. Pointing Directly at a Light Source or Window',
        paragraphs: [
          'A camera facing a bright window, a porch light, or the rising sun will produce silhouettes and washed-out footage. Position cameras so light falls on the subject, not into the lens — and when a bright background is unavoidable, look for models with strong WDR (wide dynamic range), which balances bright and dark areas in the same frame.',
        ],
      },
      {
        heading: '3. Covering Too Much Area With One Camera',
        paragraphs: [
          'One camera assigned to watch the whole front yard ends up watching nothing well. Detail drops off fast with distance. It is better to use two cameras aimed at specific zones — the walkway and the driveway, for example — than one wide shot of everything.',
          'A simple rule: if a person fills less than about 5% of the frame, you will not identify them. Design coverage so the important zone fills the image.',
        ],
      },
      {
        heading: '4. Forgetting About the Wi-Fi Signal at the Mounting Spot',
        paragraphs: [
          'The garage wall or backyard corner where you want a camera is often exactly where your Wi-Fi is weakest — exterior walls, distance, and interference all work against you. Check the signal at the mounting location with your phone before drilling anything. If it is weak, a mesh point or extender solves it before installation day rather than after.',
        ],
      },
      {
        heading: '5. Ignoring the Weather Rating',
        paragraphs: [
          'An indoor-rated camera under a thin porch roof will still collect condensation and eventually fail. Outdoor cameras should carry an IP65 rating or better — IP66 or IP67 for spots that take direct rain or sprinklers. It costs little extra and saves a dead camera within a year.',
        ],
      },
      {
        heading: '6. Blocking the Motion Detection Zone',
        paragraphs: [
          'Bushes, flags, wind chimes, and seasonal decorations trigger motion alerts constantly and wear down your patience until you mute notifications — which defeats the purpose. Aim cameras away from moving foliage, or trim the detection zone in the app so a swaying branch stays out of the active area.',
        ],
      },
      {
        heading: '7. No Plan for Power',
        paragraphs: [
          'Battery cameras are flexible but someone has to recharge them — and a camera mounted under a second-story eave makes that a ladder job every few months. If a power outlet is nearby or you are comfortable with a low-voltage run, a wired or solar-supplemented camera removes a maintenance chore entirely.',
          'When we plan an install, power is usually the deciding factor between "great camera location" and "camera location that will annoy you forever." Think it through before the mount goes up.',
        ],
      },
    ],
    relatedSlugs: ['how-to-choose-security-cameras-2026', 'wifi-for-security-cameras', 'monthly-camera-checkup-checklist'],
  },
  {
    slug: 'wifi-for-security-cameras',
    title: 'Why Your Security Cameras Are Only as Good as Your Wi-Fi',
    excerpt:
      'Dropped feeds, delayed alerts, cameras that show "offline" at the worst moment — almost every reliability complaint traces back to the network, not the camera.',
    description:
      'Dropped camera feeds and "offline" errors usually mean weak Wi-Fi, not a bad camera. How signal, bandwidth and router settings affect camera reliability.',
    date: '2026-03-05',
    readTime: '7 min read',
    category: 'Network',
    image: {
      src: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80',
      alt: 'Close-up of network cables connected to a router',
    },
    sections: [
      {
        heading: 'The Most Common Complaint Has the Same Root Cause',
        paragraphs: [
          'When a camera keeps dropping offline, the camera itself is rarely the problem. In our experience, well over half of "camera offline" calls turn out to be a Wi-Fi signal issue at the mounting location — an exterior wall, a metal appliance, or plain distance sitting between the camera and the router.',
          'The good news: network problems are usually the cheapest problems to solve. A mesh node or extender in the right spot solves what a camera upgrade would not.',
        ],
      },
      {
        heading: 'How Much Bandwidth a Camera Actually Uses',
        paragraphs: [
          'A single 1080p camera streaming continuously uses roughly 1–4 Mbps of upload bandwidth; a 4K camera can take 8–15 Mbps. Upload matters more than download for cameras, and many home internet plans have much slower upload than the headline speed suggests. Four or five cameras on a 10 Mbps upload connection will saturate it — and then everything suffers, not just the cameras.',
          'If your plan is upload-limited, recording to a local NVR instead of streaming everything to the cloud removes most of that pressure.',
        ],
      },
      {
        heading: 'The 2.4 GHz vs. 5 GHz Question',
        paragraphs: [
          'Most cameras use 2.4 GHz Wi-Fi because it travels farther through walls — exactly what an outdoor camera needs. The tradeoff is congestion: microwaves, baby monitors, and half the smart-home devices in your house share that band.',
          'If your router combines both bands under one network name, some cameras struggle to latch onto the right one. Splitting the bands into separate network names (MyWiFi and MyWiFi-5G, for example) eliminates that confusion and is a five-minute change in your router settings.',
        ],
      },
      {
        heading: 'Mesh Networks, Extenders, and Where to Put Them',
        paragraphs: [
          'For whole-property camera coverage, a mesh system is the cleanest answer — one network name, nodes placed so each camera gets a strong signal. A cheap extender works too, but place it halfway between the router and the camera, not right next to the camera; an extender repeating a weak signal just repeats the weakness.',
          'The test is simple: stand at the camera location with your phone on your home Wi-Fi. Two bars is marginal. One bar is a problem that no camera setting will cure.',
        ],
      },
      {
        heading: 'Give Cameras a Reserved Address (And Ideally Their Own Network)',
        paragraphs: [
          'Routers hand out IP addresses dynamically, and occasionally a camera loses its address after a router reboot and goes "offline" until power-cycled. Reserving a static IP for each camera in your router settings makes that vanish.',
          'For households with several cameras, putting them on a dedicated network or VLAN is worthwhile too — it keeps camera traffic separated from everything else and is a modest security improvement. Both are standard parts of the network setups we configure during installs.',
        ],
      },
      {
        heading: 'When the Cameras Are Fine but the Internet Is the Bottleneck',
        paragraphs: [
          'If everything works until someone starts a video call or a game download, your internet connection itself is the constraint. Quality-of-service settings on the router can prioritize camera traffic, and lowering camera bitrate in the app buys breathing room — small adjustments that often end the "random offline" complaints for good.',
        ],
      },
    ],
    relatedSlugs: ['camera-placement-mistakes', 'monthly-camera-checkup-checklist', 'wired-vs-wireless-cameras'],
  },
  {
    slug: 'wired-vs-wireless-cameras',
    title: 'Wired vs. Wireless Security Cameras: An Honest Comparison',
    excerpt:
      'Wireless cameras are easier to install; wired cameras are easier to forget about for ten years. Which tradeoff fits your home?',
    description:
      'Wired vs wireless security cameras compared honestly — reliability, power, installation effort and total cost — to help you pick the right system.',
    date: '2026-03-18',
    readTime: '8 min read',
    category: 'Buying Guide',
    image: {
      src: 'https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=1200&q=80',
      alt: 'Dome security camera mounted on a ceiling indoors',
    },
    sections: [
      {
        heading: 'What "Wireless" Actually Means',
        paragraphs: [
          'Wireless cameras connect to your network over Wi-Fi — but most still need a power cable, which surprises a lot of buyers. Only truly battery-powered models are wire-free end to end. "Wireless" describes the signal, not necessarily the install.',
          'That distinction matters because it changes what "easy installation" really means: a battery cam on a magnet mount is a two-minute job; a plug-in wireless camera still needs an outlet within cord\'s reach.',
        ],
      },
      {
        heading: 'Where Wireless Wins',
        paragraphs: [
          'Rentals, quick deployments, and spots where running cable means opening walls — wireless shines everywhere speed and reversibility matter. Moving a camera later is trivial. For most single- and two-camera setups watching a door and a driveway, wireless is the pragmatic choice and the one most of our installs end up using.',
        ],
        list: [
          'Fast, low-mess installation',
          'Easy to reposition as needs change',
          'No cable runs through walls or attics',
          'Ideal for renters and smaller setups',
        ],
      },
      {
        heading: 'Where Wired Wins',
        paragraphs: [
          'Reliability, plain and simple. A camera on a cable does not care about Wi-Fi congestion, router reboots, or a neighbor\'s new mesh system crowding the airwaves. Wired systems also record continuously to a local NVR without eating upload bandwidth — important for larger systems or spotty internet plans.',
          'The upfront cost is real labor: fishing cable through walls and ceilings takes skill and time. But once it is in, a wired system can run untouched for a decade.',
        ],
        list: [
          'No dependence on Wi-Fi strength',
          'Continuous local recording without cloud fees',
          'No batteries to recharge',
          'Best for 4+ camera systems and detached buildings',
        ],
      },
      {
        heading: 'The Middle Ground: Wireless Cameras With Wired Power',
        paragraphs: [
          'The setup we most often recommend is the hybrid — Wi-Fi cameras on permanent power. You skip the battery charging chore and the cable fishing, while the only remaining variable is Wi-Fi signal, which a mesh node solves for almost any spot on the property.',
        ],
      },
      {
        heading: 'Cost Over Five Years Is Closer Than You Think',
        paragraphs: [
          'Wireless looks cheaper until you add cloud subscriptions — three cameras at $10–15/month quietly becomes $1,800+ over five years. A wired system\'s higher install cost and local recording often lands at the same or lower total, with zero monthly fees.',
          'Neither choice is wrong; they suit different houses and different budgets. The honest question is whether you want to pay monthly forever for convenience or pay once for permanence. We can walk through the numbers for your specific layout before you buy anything.',
        ],
      },
    ],
    relatedSlugs: ['how-to-choose-security-cameras-2026', 'wifi-for-security-cameras', 'professional-doorbell-installation-what-to-expect'],
  },
  {
    slug: 'professional-doorbell-installation-what-to-expect',
    title: 'What a Professional Doorbell Installation Actually Looks Like',
    excerpt:
      'From checking transformer voltage to pairing the app — a walkthrough of what happens during a video doorbell install, and the problems we catch before they become yours.',
    description:
      'Step by step: what happens during a professional video doorbell installation — wiring checks, chime compatibility, Wi-Fi pairing and app setup.',
    date: '2026-04-02',
    readTime: '7 min read',
    category: 'Installation',
    image: {
      src: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=80',
      alt: 'Hand holding a padlock in front of a smart home entrance',
    },
    sections: [
      {
        heading: 'The Visit Starts Before the Drill Comes Out',
        paragraphs: [
          'Every doorbell install begins with two questions: is there existing doorbell wiring, and does it deliver enough power? Many homes — especially ones built before the 1990s — have transformers rated too low for a video doorbell\'s needs. A doorbell that powers on but resets randomly or shows "insufficient power" warnings is almost always a transformer issue.',
          'We check the transformer rating and chime box compatibility first because they decide everything that follows: wired, battery, or adapter-powered.',
        ],
      },
      {
        heading: 'Wired, Battery, or Adapter — the Three Paths',
        paragraphs: [
          'Existing wiring with adequate power gives the cleanest result: the doorbell charges continuously and works with your indoor chime. No wiring at all points to battery models — zero drilling into the electrical system, but a battery to recharge periodically. The middle path, a plug-in power adapter run to a nearby outlet, suits homes where wiring exists but is undersized.',
        ],
        list: [
          'Wired: continuous power, existing chime works, most reliable',
          'Battery: zero wiring needed, recharge every 1–6 months',
          'Power adapter: wired reliability when the old transformer is too weak',
        ],
      },
      {
        heading: 'Mounting Angle Matters More Than Most People Realize',
        paragraphs: [
          'A doorbell mounted flat against a narrow door frame stares at a wall instead of the walkway. Wedge and corner mounts angle the camera toward approaching visitors — a small piece of plastic that makes the difference between seeing who is at the door and seeing your siding.',
          'Positioning also accounts for the sun. A doorbell facing west fights afternoon glare every day; we test the live view from a phone before finalizing the mount so the picture is checked, not assumed.',
        ],
      },
      {
        heading: 'App Pairing, Motion Zones, and Notification Tuning',
        paragraphs: [
          'The physical install is half the job. The other half is the app: pairing the doorbell to your account, joining it to Wi-Fi (a weak front-door signal is the number-one cause of doorbell "offline" complaints), and tuning motion zones so passing cars do not wake your phone fifty times a day.',
          'We also set detection preferences — person alerts versus all-motion — and confirm the indoor chime or your preferred alert devices actually ring. Leaving before that final test is how installs end in callbacks; we do not leave until the button press produces a chime you can hear from the kitchen.',
        ],
      },
      {
        heading: 'What the Whole Thing Costs and How Long It Takes',
        paragraphs: [
          'A straightforward install runs about an hour; add thirty to forty-five minutes if a wedge mount, chime bypass, or adapter is involved. The service is priced from $49.99 — the doorbell itself and any manufacturer subscription are separate, since you supply the hardware.',
          'Bring the doorbell, your Wi-Fi password, and access to the chime box location (usually a hallway wall or inside a closet). We handle the rest.',
        ],
      },
    ],
    relatedSlugs: ['how-to-choose-security-cameras-2026', 'wifi-for-security-cameras', 'monthly-camera-checkup-checklist'],
  },
  {
    slug: 'monthly-camera-checkup-checklist',
    title: 'The 10-Minute Monthly Checkup That Keeps Your Cameras Recording',
    excerpt:
      'Most camera failures are discovered the day footage is needed — which is too late. A short monthly habit keeps that from ever happening.',
    description:
      'A simple 10-minute monthly checklist for home security cameras — check live views, storage, notifications and mounts so footage is there when needed.',
    date: '2026-04-16',
    readTime: '6 min read',
    category: 'Care & Upkeep',
    image: {
      src: 'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?auto=format&fit=crop&w=1200&q=80',
      alt: 'Person holding a smartphone showing a smart home app',
    },
    sections: [
      {
        heading: 'Why a Checkup at All? Because Failures Are Silent',
        paragraphs: [
          'A dead camera does not announce itself. Storage fills quietly, a mount loosens over a windy season, a firmware update changes a setting. People typically discover a failed camera when they go looking for footage of something that already happened — which is the one moment it cannot help them.',
          'Ten minutes a month catches every one of those failure modes early. Here is the routine.',
        ],
      },
      {
        heading: '1. Pull Up Every Live View (2 minutes)',
        paragraphs: [
          'Open the app and tap through each camera. You are looking for three things: the image is live (not a cached thumbnail), it is pointed where you aimed it, and the picture is clear. A camera that shifted a few degrees in a storm can spend weeks watching a fence instead of the gate.',
        ],
      },
      {
        heading: '2. Check Storage and Last Recording (2 minutes)',
        paragraphs: [
          'Confirm a clip actually recorded in the last day or two — that single check proves the camera, network, and storage are all working. On microSD or NVR systems, glance at remaining capacity; a full card stops recording with no warning on many setups.',
        ],
      },
      {
        heading: '3. Trigger a Test Motion Alert (2 minutes)',
        paragraphs: [
          'Walk through one camera\'s detection zone and confirm the notification arrives on your phone — and arrives quickly. Slow or missing alerts usually point to a notification permission change on the phone, a muted schedule in the app, or Wi-Fi that has degraded since install.',
        ],
      },
      {
        heading: '4. Quick Physical Look at Each Camera (3 minutes)',
        paragraphs: [
          'Cobwebs and water spots on the lens show up as blur you will swear is the camera failing — a wipe with a soft cloth resolves it in seconds. Check that mounts are still tight, seals around outdoor connections are intact, and nothing new (a growing shrub, a seasonal decoration) has drifted into the frame.',
        ],
      },
      {
        heading: '5. Glance at Battery Levels and Updates (1 minute)',
        paragraphs: [
          'Battery cameras: note the percentage and plan the recharge before it hits zero — batteries left dead for weeks can lose capacity. And when the app offers a firmware update, take it; updates routinely resolve the connectivity quirks people live with unnecessarily.',
        ],
      },
      {
        heading: 'When Something on the List Fails',
        paragraphs: [
          'Most findings on this checklist are small — a nudged mount, a full card, a notification toggle. When the failure is bigger — a camera that will not come online, a feed that drops every evening, storage that will not record — that is exactly what a service visit or a guided session by phone is for. Small monthly effort, and the one time you actually need the footage, it is there.',
        ],
      },
    ],
    relatedSlugs: ['wifi-for-security-cameras', 'camera-placement-mistakes', 'wired-vs-wireless-cameras'],
  },
]

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug)
}
