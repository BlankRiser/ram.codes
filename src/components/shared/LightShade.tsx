"use client";

// CREDITS: Surjith https://play.tailwindcss.com/CSWFJMcztk

export function LightShade() {
  return (
    <div>
      <div className="flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black">
        <div className="relative flex w-full h-full flex-1  items-center justify-center">
          <div className="absolute inset-auto right-1/2 h-56 w-[30rem] bg-gradient-conic from-emerald-500 via-black to-transparent text-white [--conic-position:from_70deg_at_center_top]" />
          <div className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-black to-emerald-500 text-white [--conic-position:from_290deg_at_center_top]" />
          <div className="absolute top-1/2 h-48 w-full translate-y-12 bg-black blur-2xl" />
          <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md" />
          <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-emerald-500 opacity-50 blur-3xl" />
          <div className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-emerald-400 blur-2xl" />
          <div className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-emerald-400 blur-sm" />
          <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-black" />
        </div>

        <div className="flex -translate-y-60 flex-col items-center px-5">
          {/* ADD STUFF HERE */}
        </div>
      </div>
    </div>
  );
}
