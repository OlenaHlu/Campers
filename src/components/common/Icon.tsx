import symbols from "../../assets/symbol-defs.svg";
import { CSSProperties } from "react";

type IconProps = {
  iconName: string;
  className?: string;
  style?: CSSProperties;
};

const Icon = ({ iconName, className }: IconProps) => {
  return (
    <svg className={className}>
      <use href={`${symbols}#icon-${iconName}`}></use>
    </svg>
  );
};

export default Icon;
