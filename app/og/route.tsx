import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export function GET(request: Request) {
  const url = new URL(request.url)
  const title = url.searchParams.get('title') || 'Avik Mukherjee'

  const titleFontSize = title.length > 80 ? 40 : title.length > 50 ? 48 : 56

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          height: '100%',
          backgroundColor: '#0a0a0a',
          padding: '72px 80px',
          justifyContent: 'space-between',
        }}
      >
        {/* Top: accent line + label */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div
            style={{
              width: '32px',
              height: '2px',
              backgroundColor: '#ededed',
            }}
          />
          <span
            style={{
              fontSize: '13px',
              color: '#6b7280',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              fontFamily: 'monospace',
            }}
          >
            writing
          </span>
        </div>

        {/* Middle: title */}
        <div
          style={{
            display: 'flex',
            flex: 1,
            alignItems: 'center',
            paddingTop: '40px',
            paddingBottom: '40px',
          }}
        >
          <h1
            style={{
              fontSize: `${titleFontSize}px`,
              fontWeight: '600',
              color: '#ededed',
              lineHeight: 1.2,
              fontFamily: 'serif',
              maxWidth: '980px',
              margin: 0,
              padding: 0,
            }}
          >
            {title}
          </h1>
        </div>

        {/* Bottom: author + site */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: '1px solid #262626',
            paddingTop: '24px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: '#ededed',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#0a0a0a',
                fontSize: '14px',
                fontWeight: '700',
                fontFamily: 'monospace',
              }}
            >
              AM
            </div>
            <span
              style={{
                fontSize: '16px',
                fontWeight: '600',
                color: '#a3a3a3',
                fontFamily: 'monospace',
              }}
            >
              Avik Mukherjee
            </span>
          </div>

          <span
            style={{
              fontSize: '13px',
              color: '#525252',
              fontFamily: 'monospace',
              letterSpacing: '0.05em',
            }}
          >
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