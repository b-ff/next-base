import { Montserrat, Open_Sans, Roboto } from "next/font/google";
import { classNames } from "./utils";

export const montserrat = Montserrat({
  weight: ["100", "400", "700", "800", "900"],
  subsets: ["cyrillic"],
  variable: '--font_family_headings'
});

export const roboto = Open_Sans({
  weight: ["400", "800"],
  subsets: ["cyrillic"],
  variable: '--font_family_primary'
});

export const opensans = Roboto({
  weight: ["400", "500", "900"],
  subsets: ["cyrillic"],
  variable: '--font_family_secondary'
});

export const fontsStyle = {
  '--font_family_primary': roboto.style.fontFamily,
  '--font_family_secondary': opensans.style.fontFamily,
  '--font_family_headings': montserrat.style.fontFamily,
}

export const fontsClassName = classNames([
  montserrat.className,
  opensans.className,
  roboto.className,
]);