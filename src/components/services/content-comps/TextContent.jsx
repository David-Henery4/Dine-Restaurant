import { BodyText, Heading } from "@/components/shared";

const TextContent = () => {
  return (
    <div className="text-center">
      <Heading
        headingType="lg"
        className="text-[32px] leading-10 -tracking-[0.4px]"
      >
        Family Gathering
      </Heading>
      <BodyText theme="light" className="mt-3">
        We love catering for entire families. So please bring everyone along for
        a special meal with your loved ones. We’ll provide a memorable
        experience for all.
      </BodyText>
    </div>
  );
};

export default TextContent;
