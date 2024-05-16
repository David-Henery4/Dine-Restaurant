import { cva } from "class-variance-authority"
import { cn } from "@/libs/utils";

const BodyText = ({className, size, theme, ...props}) => {
  return (
    <p className={cn(textVariants({size, theme}), className)} {...props}/>
  )
}

const textVariants = cva("font-normal max-w-[445px] mx-auto", {
  variants: {
    theme: {
      light: "text-ebonyClay",
      dark: "text-white",
    },
    size: {
      medium: "text-base leading-[26px] lgMob:text-xl lgMob:leading-[30px]",
    },
  },
  defaultVariants: {
    theme: "dark",
    size: "medium",
  },
});

export default BodyText