import * as cheerio from 'cheerio'
import { URL } from 'node:url'

export type OgInfo = {
  url: string
  title: string
  description?: string
  image?: string
  siteName?: string
}

export async function getOgInfo(url: string): Promise<OgInfo> {
    const target = new URL(url)

    const response = await fetch(target, {
        next: {
            revalidate: 60 * 60 * 24
        },
    })

    if (!response.ok) {
        throw new Error(`Failed to fetch ${url}: ${response.status} ${response.statusText}`)
    }

    const html = await response.text()
    const $ = cheerio.load(html)

    const title =
        $('meta[property="og:title"]').attr('content') ||
        $('meta[name="twitter:title"]').attr('content') ||
        $('title').text().trim() ||
        target.hostname

    const description =
        $('meta[property="og:description"]').attr('content') ||
        $('meta[name="twitter:description"]').attr('content') ||
        $('meta[name="description"]').attr('content') ||
        $('title').text().trim() ||
        target.hostname

    const imageRaw =
        $('meta[property="og:image"]').attr('content') ||
        $('meta[name="twitter:image"]').attr('content') ||
        undefined

    const image = imageRaw ? new URL(imageRaw, target).toString() : undefined

    const siteName =
        $('meta[property="og:site_name"]').attr('content') ||
        $('meta[name="twitter:site"]').attr('content') ||
        target.hostname

    return {
        url: target.toString(),
        title,
        description,
        image,
        siteName,
    }
}
