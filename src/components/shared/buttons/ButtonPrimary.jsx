import { cva } from "class-variance-authority";
import { cn } from "@/libs/utils";

const ButtonPrimary = ({variant,className, ...props}) => {
  return <button className={cn(buttonVariants({ variant }), className)} {...props} />;
};

const buttonVariants = cva("px-14 py-6 font-semibold border", {
  variants: {
    variant: {
      primary:
        "border-white text-white hover:bg-white hover:text-mirage active:border-white active:text-white active:bg-white/0",
      secondary:
        "border-codGray text-codGray hover:bg-codGray hover:text-white active:border-codGray active:text-codGray active:bg-codGray/0",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

export default ButtonPrimary;
