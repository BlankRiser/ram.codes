"use client";

export function Divider({ className }: { className?: string }) {
  return (
    <div className={["my-36", className].join("")}>
      <hr
        className={"h-[1px] border-none"}
        style={{
          background:
            "radial-gradient(rgba(255, 255, 255, 0.3) 20%, transparent 65%)",
        }}
      />
    </div>
  );
}
