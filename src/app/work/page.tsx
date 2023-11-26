import { Metadata } from "next";
import { Footer, NavbarOffset } from "~/components/layouts";
import { WorkCards } from "~/components/pages/work/work-cards";
import { ContentHeader } from "~/components/shared";

export const metadata: Metadata = {
  title: "Work",
  description: "Read my thoughts on software development, design, and more.",
};

export default function Page() {
  return (
    <div className="mx-auto max-w-7xl ">
      <NavbarOffset className="h-6 md:h-28" />
      <ContentHeader
        animate={false}
        title={"Professional Experience"}
        description="Welcome to my professional journey. Here, I've curated a
          collection of the companies I've had the privilege to work with.
          Each experience has contributed to my growth, expertise, and passion
          in Software Engineering. Take a glimpse into my career and the
          valuable contributions I've made to these organizations."
      />
      <WorkCards />
      <Footer />
    </div>
  );
}
