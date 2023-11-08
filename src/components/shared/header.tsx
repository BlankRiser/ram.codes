import Balancer from "react-wrap-balancer";

type ContentHeader = {
  title: string;
  description: string;
};
export const ContentHeader: React.FC<ContentHeader> = ({
  title,
  description,
}) => {
  return (
    <div className="my-8">
      <div className="relative">
        <h1 className="mb-8 font-jet-mono text-5xl font-semibold capitalize tracking-tighter text-neutral-300">
          {title}
        </h1>
        <div className="absolute inset-x-0 top-0 z-10 h-[16px] w-[22ch] rounded-full bg-neutral-500 blur-2xl" />
      </div>
      <p className="font-generalSans text-lg text-neutral-400">
        <Balancer>{description}</Balancer>
      </p>
    </div>
  );
};
