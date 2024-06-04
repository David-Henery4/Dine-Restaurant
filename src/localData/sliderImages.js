
// Desktop Images
import {
  FamilyGatheringSliderImgDesk,
  SocialEventsSliderImgDesk,
  SpecialEventsSliderImgDesk,
} from "../../public/images/homepage/desktop";

// Tablet Images
import {
  FamilyGatheringSliderImgTab,
  SocialEventsSliderImgTab,
  SpecialEventsSliderImgTab,
} from "../../public/images/homepage/tablet";

// Mobile
import {
  FamilyGatheringSliderImgMob,
  SocialEventsSliderImgMob,
  SpecialEventsSliderImgMob,
} from "../../public/images/homepage/mobile";

const dimentions = {
  desktop: { width: 1100, height: 1220 },
  tablet: { width: 1146, height: 720 },
  mobile: { width: 660, height: 800 },
};

const sliderImages = [
  {
    id: 404,
    title: "Family Gathering",
    tabTitle: "tab button for family gathering slide",
    text: "We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.",
    alt: "Bird's eye view of a family at a table eating a meal with many different plates of food on the table.",
    desktopProps: {
      src: FamilyGatheringSliderImgDesk,
      ...dimentions.desktop,
    },
    tabletProps: {
      src: FamilyGatheringSliderImgTab,
      ...dimentions.tablet,
    },
    mobileProps: {
      src: FamilyGatheringSliderImgMob,
      ...dimentions.mobile,
    },
  },
  {
    id: 405,
    title: "Special Events",
    tabTitle: "tab button for special events slide",
    text: "Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. We’ll be sure to mark your special date with an unforgettable meal.",
    alt: "A table with many people sitting around it, all holding their drinks up in cheers.",
    desktopProps: {
      src: SpecialEventsSliderImgDesk,
      ...dimentions.desktop,
    },
    tabletProps: {
      src: SpecialEventsSliderImgTab,
      ...dimentions.tablet,
    },
    mobileProps: {
      src: SpecialEventsSliderImgMob,
      ...dimentions.mobile,
    },
  },
  {
    id: 406,
    title: "Social Events",
    tabTitle: "tab button for social events slide",
    text: "Are you looking to have a larger social event? No problem! We’re more than happy to cater for big parties. We’ll work with you to make your event a hit with everyone.",
    alt: "A close up image of three wines glasses on the table, with blurred out of focus people sitting by the table in the background",
    desktopProps: {
      src: SocialEventsSliderImgDesk,
      ...dimentions.desktop,
    },
    tabletProps: {
      src: SocialEventsSliderImgTab,
      ...dimentions.tablet,
    },
    mobileProps: {
      src: SocialEventsSliderImgMob,
      ...dimentions.mobile,
    },
  },
];


export default sliderImages;
