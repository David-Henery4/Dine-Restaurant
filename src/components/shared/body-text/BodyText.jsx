import { cva } from "class-variance-authority"
import { cn } from "@/libs/utils";

const BodyText = ({className, size, theme, ...props}) => {
  return (
    <p className={cn(textVariants({size, theme}))} {...props}/>
  )
}

const textVariants = cva("font-normal", {
  variants: {
    theme: {
      light: "text-ebonyClay",
      dark: "text-white",
    },
    size: {
      medium: "text-base leading-[26px]",
      large: "text-xl leading-[30px]",
    },
  },
  defaultVariants: {
    theme: "dark",
    size: "medium",
  },
});

export default BodyText