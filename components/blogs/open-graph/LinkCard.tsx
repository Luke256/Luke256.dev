import Link from 'next/link'
import { OgInfo, getOgInfo } from './og_info'

type Props = {
  href: string
}

export async function LinkCard({ href }: Props) {
  let ogInfo: OgInfo

  try {
    ogInfo = await getOgInfo(href)
  } catch {
    return (
      <Link href={href} target='_blank' rel='noopener noreferrer' className='block rounded border p-4'>
        {href}
      </Link>
    )
  }

  return (
    <Link
      href={ogInfo.url}
      target='_blank'
      rel='noopener noreferrer'
      className='not-prose my-6 flex flex-col md:flex-row overflow-hidden rounded border border-slate-200 bg-white text-slate-900 no-underline transition-colors hover:border-indigo-400 hover:bg-indigo-50/40 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-500'
    >
      
      {ogInfo.image &&
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={ogInfo.image}
          alt={ogInfo.title}
          loading='lazy'
          className='h-40 w-full md:w-auto object-contain'
        />
      }
      <div className='flex flex-col min-w-0 flex-1 gap-1.5 p-4'>
        <div className='truncate text-xs text-slate-500'>
          {ogInfo.siteName}
        </div>
        <div className='line-clamp-1 text-sm font-semibold leading-snug sm:text-base'>
          {ogInfo.title}
        </div>
        <div className='line-clamp-2 text-xs leading-relaxed text-slate-600 sm:text:sm'>
          {ogInfo.description}
        </div>
        <div className='mt-auto truncate pt-2 text-xs text-slate-400'>
          {ogInfo.url}
        </div>
      </div>
    </Link>
  )
}
