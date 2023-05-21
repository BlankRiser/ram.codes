"use client";
import Image from "next/image";
import Particles from "~/components/ui/patterns";

export default function Home() {
  return (
    <div>
      <div className=" min-h-screen relative flex justify-center items-center flex-col gap-4">
        <h1 className={"text-4xl md:text-7xl text-center "}>
          Ram Shankar Choudhary
        </h1>
        <div className={"h-[50vh] w-full"}>
          <Image
            src="https://images.unsplash.com/photo-1503252947848-7338d3f92f31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2831&q=80"
            // fill={true}
            width="1920"
            height="1080"
            priority={false}
            alt="ram"
            className={"h-full w-full  "}
          />
        </div>
        <Particles
          className="absolute inset-0 -z-10 animate-fade-in"
          quantity={100}
        />
      </div>
      <div className=" min-h-screen bg-stone-900">purple</div>
      <div className=" min-h-screen bg-stone-900">yellow</div>
    </div>
  );
}
