import { getImageProps } from "next/image";

const handleImgs = (rawMob, rawTab, rawDesk) => {
  const common = {
    alt: "The farm and relaxed surroundings in the country side where the restaurant is located.",
  };
  const {
    props: { srcSet: desktop },
  } = getImageProps({
    ...common,
    width: 1200,
    height: 1440,
    src: rawDesk,
  });
  const {
    props: { srcSet: tablet },
  } = getImageProps({
    ...common,
    width: 1146,
    height: 720,
    src: rawTab,
  });
  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({
    ...common,
    width: 700,
    height: 840,
    src: rawMob,
  });
  const restOfMobValues = { ...rest };
  return {
    mobile: { mobile, restOfMobValues },
    desktop,
    tablet,
  };
};

export default handleImgs