import { ImageResponse } from 'next/og'

export const runtime = 'edge'

function truncateTitle(title: string, max = 55): string {
  if (title.length <= max) return title
  const cut = title.slice(0, max)
  const lastSpace = cut.lastIndexOf(' ')
  return (lastSpace > 0 ? cut.slice(0, lastSpace) : cut) + '…'
}

export function GET(request: Request) {
  const url = new URL(request.url)
  const rawTitle = url.searchParams.get('title') || 'Avik Mukherjee'
  const title = truncateTitle(rawTitle)

  const titleClass = title.length > 45 ? 'text-[48px]' : 'text-[56px]'

  return new ImageResponse(
    (
      <div tw="flex flex-col w-full h-full bg-[#0a0a0a] justify-between px-20 py-[72px]">

        {/* Top: accent line + label */}
        <div tw="flex items-center gap-3">
          <div tw="w-8 h-[2px] bg-[#ededed]" />
          <span tw="text-[13px] text-[#6b7280] tracking-[0.12em] uppercase">
            writing
          </span>
        </div>

        {/* Middle: title + CTA */}
        <div tw="flex flex-col flex-1 justify-center gap-8 py-10">
          <h1 tw={`${titleClass} font-semibold text-[#ededed] leading-tight max-w-[980px] m-0 p-0`}>
            {title}
          </h1>

          {/* CTA pill */}
          <div tw="flex">
            <div tw="flex items-center gap-2 bg-[#ededed] text-[#0a0a0a] text-[14px] font-bold tracking-[0.04em] py-[10px] px-5 rounded-full">
              Read article →
            </div>
          </div>
        </div>

        {/* Bottom: author + site */}
        <div tw="flex justify-between items-center border-t border-[#262626] pt-6">
          <div tw="flex items-center gap-4">
            <div tw="w-9 h-9 rounded-full bg-[#ededed] flex items-center justify-center text-[#0a0a0a] text-[14px] font-bold">
              AM
            </div>
            <span tw="text-[16px] font-semibold text-[#a3a3a3]">
              Avik Mukherjee
            </span>
          </div>

          <span tw="text-[13px] text-[#525252] tracking-wide">
            avikmukherjee.me
          </span>
        </div>

      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}