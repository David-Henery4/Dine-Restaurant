import { cva } from "class-variance-authority";
import { cn } from "@/libs/utils";

const Heading = ({ className, headingType, theme, ...props }) => {

  // sm
  if (headingType === "sm")
    return (
      <h4
        className={cn(headingVariants({ headingType, theme }), className)}
        {...props}
      />
    );

  // md
  if (headingType === "md")
    return (
      <h3
        className={cn(headingVariants({ headingType, theme }), className)}
        {...props}
      />
    );

  // lg
  if (headingType === "lg")
    return (
      <h2
        className={cn(headingVariants({ headingType, theme }), className)}
        {...props}
      />
    );

  // xl
  return (
    <h1
      className={cn(headingVariants({ headingType, theme }), className)}
      {...props}
    />
  );
};

const headingVariants = cva("", {
  variants: {
    headingType: {
      sm: "font-semibold text-[17px] leading-7 tracking-[2.5px]",
      md: "font-bold text-xl leading-6 -tracking-[0.25px]",
      lg: "font-bold text-5xl leading-[48px] -tracking-[0.5px]",
      xl: "font-light text-[80px] leading-[80px] -tracking-[1px]",
    },
    theme: {
      light: "text-ebonyClay",
      dark: "text-white",
    },
  },
  defaultVariants:{
    headingType: "xl",
    theme: "light"
  },
});

export default Heading;
