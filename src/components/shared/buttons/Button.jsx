import { cva } from "class-variance-authority";
import { cn } from "@/libs/utils";
import Link from "next/link";

const Button = ({variant,className,href = "booking", ...props}) => {
  return (
    <Link
      href={href}
      className={cn(buttonVariants({ variant }), className)}
      {...props}
      title="Call to action button, which leads to the booking page"
    />
  );
};

const buttonVariants = cva("px-14 py-6 font-semibold border inline-block", {
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

export default Button;
