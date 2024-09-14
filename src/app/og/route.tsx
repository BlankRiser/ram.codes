import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const postTitle = searchParams.get('title');
  const page = searchParams.get('page') ?? '';

  const geistSansFont = fetch(
    new URL(
      'https://cdn.jsdelivr.net/fontsource/fonts/geist-sans@latest/latin-500-normal.ttf',
      import.meta.url,
    ),
  ).then((res) => res.arrayBuffer());
  const geistMonoFont = fetch(
    new URL(
      'https://cdn.jsdelivr.net/fontsource/fonts/geist-mono@latest/latin-400-normal.ttf',
      import.meta.url,
    ),
  ).then((res) => res.arrayBuffer());
  const geistSansFontData = await geistSansFont;
  const geistMonoFontData = await geistMonoFont;

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          backgroundColor: 'black',
          padding: '48px',

          // backgroundImage:
          //   'url(https://images.pexels.com/photos/6985270/pexels-photo-6985270.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: 20,
          }}
        >
          <div
            style={{
              display: 'flex',
              fontSize: 40,
              fontFamily: 'Geist Mono',
              color: '#404040',
              textTransform: 'uppercase',
            }}
          >
            {page}
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 120,
              fontFamily: 'Geist Sans',
              color: 'white',
            }}
          >
            {postTitle}
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginTop: 'auto',
            width: '100%',
            gap: 24,
          }}
        >
          <div
            style={{
              display: 'flex',
              width: '100%',
              margin: '0px auto',
              border: '4px solid #171717',
              borderRadius: '4px',
            }}
          ></div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
              padding: '0px 8px',
            }}
          >
            <div
              style={{
                display: 'flex',
                fontFamily: 'Geist Sans',
                color: 'white',
                fontSize: 40,
              }}
            >
              Ram Shankar Choudhary
            </div>
            <div
              style={{
                display: 'flex',
                fontFamily: 'Geist Sans',
                color: 'white',
                fontSize: 40,
              }}
            >
              ram.codes
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1920,
      height: 1080,
      fonts: [
        {
          name: 'Geist Sans',
          data: geistSansFontData,
          style: 'normal',
        },
        {
          name: 'Geist Mono',
          data: geistMonoFontData,
          style: 'normal',
        },
      ],
    },
  );
}
// export async function GET(req: NextRequest) {
//   const { searchParams } = req.nextUrl;
//   const postTitle = searchParams.get('title');
//   const font = fetch(
//     new URL(
//       'https://cdn.jsdelivr.net/fontsource/fonts/geist-sans@latest/latin-500-normal.ttf',
//       import.meta.url,
//     ),
//   ).then((res) => res.arrayBuffer());
//   const fontData = await font;

//   return new ImageResponse(
//     (
//       <div
//         style={{
//           height: '100%',
//           width: '100%',
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'flex-start',
//           justifyContent: 'center',
//           backgroundImage:
//             'url(https://images.pexels.com/photos/6985270/pexels-photo-6985270.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
//         }}
//       >
//         <div
//           style={{
//             marginLeft: 190,
//             marginRight: 190,
//             display: 'flex',
//             fontSize: 130,
//             fontFamily: 'Geist Sans',
//             letterSpacing: '-0.05em',
//             fontStyle: 'normal',
//             color: 'white',
//             lineHeight: '120px',
//             whiteSpace: 'pre-wrap',
//           }}
//         >
//           {postTitle}
//         </div>
//       </div>
//     ),
//     {
//       width: 1920,
//       height: 1080,
//       fonts: [
//         {
//           name: 'Geist Sans',
//           data: fontData,
//           style: 'normal',
//         },
//       ],
//     },
//   );
// }
