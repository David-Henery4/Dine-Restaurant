import { BodyText, Heading } from "@/components/shared";

const TextContent = ({ activeTabObject }) => {
  return (
    <div className="text-center lgLap:text-left">
      <Heading
        headingType="lg"
        className="text-[32px] leading-10 -tracking-[0.4px]"
      >
        {activeTabObject?.title}
      </Heading>
      <BodyText theme="light" className="mt-3 lgMob:mt-5">
        {activeTabObject?.text}
      </BodyText>
    </div>
  );
};

export default TextContent;
