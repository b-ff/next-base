import { Montserrat, Open_Sans, Roboto } from "next/font/google";
import { classNames } from "./utils";

const montserrat = Montserrat({
  weight: ["100", "400", "700"],
  subsets: ["cyrillic"],
});

const roboto = Open_Sans({
  weight: ["400", "800"],
  subsets: ["cyrillic"],
});

const opensans = Roboto({
  weight: ["400", "500", "900"],
  subsets: ["cyrillic"],
});

export const fontsClassName = classNames([
  montserrat.className,
  opensans.className,
  roboto.className,
]);