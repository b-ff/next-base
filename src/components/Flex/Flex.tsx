import { FC, HTMLProps, ReactNode } from "react";

type GapSizes = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export type FlexProps = HTMLProps<HTMLElement> & {
  padding?: GapSizes;
  margin?: GapSizes;
  gap?: GapSizes;
  direction?: "row" | "row-reverse" | "column" | "column-reverse";
  children: ReactNode | ReactNode[];
};

export const Flex: FC<FlexProps> = (props) => {
  const {
    padding = 0,
    margin = 0,
    gap = 1,
    direction = "column",
    style,
    children = [],
    ...rest
  } = props;

  const combinedStyle = {
    ...style,
    display: "flex",
    flexDirection: direction,
    padding: `var(--spacing_${padding}x)`,
    margin: `var(--spacing_${margin}x)`,
    gap: `var(--spacing_${gap}x)`,
  };

  const elements =
    Array.isArray(children) && children.length ? children : [children];

  return (
    <section style={combinedStyle} {...rest}>
      {elements.map((element, idx) => (
        <div key={idx}>{element}</div>
      ))}
    </section>
  );
};
