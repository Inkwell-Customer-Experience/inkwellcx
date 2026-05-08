import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'InkwellCX - Websites that convert';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#0D1117',
          color: '#E6EDF3',
          padding: 72,
          fontFamily: 'Arial',
        }}
      >
        <div style={{ fontSize: 28, color: '#58A6FF', letterSpacing: 2 }}>INKWELLCX</div>
        <div>
          <div style={{ fontSize: 78, fontWeight: 800, lineHeight: 1 }}>
            Websites that convert.
          </div>
          <div style={{ fontSize: 30, color: '#7D8590', marginTop: 28 }}>
            Web design, SEO, hosting, and website management for South African businesses.
          </div>
        </div>
        <div style={{ display: 'flex', gap: 18, fontSize: 24, color: '#3FB950' }}>
          <span>Fast builds</span>
          <span>SEO-ready structure</span>
          <span>Ongoing optimisation</span>
        </div>
      </div>
    ),
    size,
  );
}

