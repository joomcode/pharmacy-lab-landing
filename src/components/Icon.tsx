type Props = {
  name: string;
  className?: string;
  width?: number;
  height?: number;
  color?: string;
  style?: CSSStyleRule;
};

export const Icon = ({name, className, width, height, color, style}: Props) => (
  <svg
    className={'icon ' + (className || '')}
    style={{
      width,
      height,
      color,
      ...style,
    }}
    dangerouslySetInnerHTML={{
      __html: `<use xlink:href="#${name}"></use>`,
    }}
  />
);
