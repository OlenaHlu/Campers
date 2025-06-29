import symbols from "../../assets/symbol-defs.svg";
import { CSSProperties } from "react";

type IconProps = {
  iconName: string;
  className?: string;
  style?: CSSProperties;
};

const Icon = ({ iconName, className, style }: IconProps) => {
  return (
    <svg className={className} style={style}>
      <use href={`${symbols}#icon-${iconName}`}></use>
    </svg>
  );
};

export default Icon;
