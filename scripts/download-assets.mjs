import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

const BASE = "https://spydyy-portfolio.vercel.app";
const OUT = join(process.cwd(), "public");

const ASSETS = [
  ["/assets/image-1-fYP2o7gg.png", "images/hero-mask-top.png"],
  ["/assets/image-2-DS0sMyr7.png", "images/hero-identity-bottom.png"],
  ["/assets/web1-770H2sSx.png", "images/web.png"],
  ["/assets/spydy-DLbFrGCQ.png", "images/spider.png"],
  ["/assets/spydy_hang-Cac1gK30.png", "images/spider-hanging.png"],
  ["/assets/spydy_stand-BwBM-zCr.png", "images/spider-standing.png"],
  ["/assets/mypic-a3-nZ6gT.png", "images/profile.png"],
  ["/favicon.svg", "favicon.svg"],
];

const BATCH = 4;

async function download([remote, local]) {
  const url = `${BASE}${remote}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed ${url}: ${res.status} ${res.statusText}`);
  const buf = Buffer.from(await res.arrayBuffer());
  const target = join(OUT, local);
  await mkdir(dirname(target), { recursive: true });
  await writeFile(target, buf);
  console.log(`${local} (${buf.length} bytes)`);
}

for (let i = 0; i < ASSETS.length; i += BATCH) {
  await Promise.all(ASSETS.slice(i, i + BATCH).map(download));
}
