import { ImageResponse } from 'next/og';
// App router includes @vercel/og.
// No need to install it.
 
export const runtime = 'edge';
 
export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          backgroundImage: 'url(https://nicolematt.com/og-bg.png)'
        }}
      >
       💍 Nicole & Matt's Wedding
      </div>
    ),
    {
      width: 1920,
      height: 1080,
    },
  );
}