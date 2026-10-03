"use client";

import { Analytics as VercelAnalytics } from '@vercel/analytics/next';

export function Analytics() {
  const token = process.env.NEXT_PUBLIC_BEAM_TOKEN;
  
  return (
    <>
      {/* Vercel Web Analytics */}
      <VercelAnalytics />
      
      {/* Beam Analytics */}
      {token && (
        <script
          src="https://beamanalytics.b-cdn.net/beam.min.js"
          data-token={token}
          async
        />
      )}
    </>
  );
}
