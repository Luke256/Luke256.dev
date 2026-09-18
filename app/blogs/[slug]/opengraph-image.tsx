import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { getBlogMetadata } from "./metadata";

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'
export const alt = "Luke256's Blog"

const avatar = readFile(join(process.cwd(), 'images/FlameSword.png'), 'base64')
const font = readFile(join(process.cwd(), 'assets/fonts/LINESeedJP-Bold.ttf'))

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blogMetadata = await getBlogMetadata(slug)

  return new ImageResponse(
    <div
      lang="ja"
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        padding: 40,
        color: '#172033',
        fontFamily: 'LINE Seed JP',
        backgroundImage: 'linear-gradient(to bottom right, #4E8DE6, #704EE6)',
      }}
    >
      <div
        style={{
          backgroundColor: 'white',
          padding: '56px 64px 40px',
          borderRadius: 24,
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          height: '100%',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            flexGrow: 1,
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              lineHeight: 1.4,
              letterSpacing: '-0.02em',
              wordBreak: 'break-word',
              lineClamp: 3,
            }}
          >
            {blogMetadata.title}
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', flexShrink: 0, gap: 16 }}>
          {/* ImageResponse renders an embedded image, not a browser image. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`data:image/png;base64,${await avatar}`}
            alt=""
            width={56}
            height={56}
            style={{ borderRadius: 28 }}
          />
          <span style={{ fontSize: 28, fontWeight: 700 }}>luke256.dev</span>
        </div>
      </div>
    </div>,
    {
      ...size,
      fonts: [{ name: 'LINE Seed JP', data: await font, weight: 700, style: 'normal' }],
    },
  )
}
