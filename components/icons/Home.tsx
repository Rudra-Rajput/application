import React from "react";
import Svg, { Path, Defs, ClipPath, Rect, G, SvgProps } from "react-native-svg";
import { Pressable } from "react-native";

interface HomeIconProps {
  size?: number;
  color?: string;
  style?: SvgProps["style"];
  onPress?: () => void;
}

const HomeIcon: React.FC<HomeIconProps> = ({
  size = 44,
  color = "#7C8591",
  style,
  onPress,
}) => {
  const Icon = (
    <Svg width={size} height={size} viewBox="0 0 44 44" fill="none" style={style}>
      <G clipPath="url(#clip0_home)">
        <Path
          d="M35.345 19.395L24.0517 10.645C23.5232 10.2347 22.7268 10.2347 22.1983 10.645L10.905 19.395C10.5514 19.6632 10.3334 20.0906 10.3334 20.545V33C10.3334 33.9205 11.0795 34.6667 12 34.6667H17.6667C18.5871 34.6667 19.3334 33.9205 19.3334 33V26.8333H26.6667V33C26.6667 33.9205 27.4129 34.6667 28.3334 34.6667H34C34.9205 34.6667 35.6667 33.9205 35.6667 33V20.545C35.6667 20.0906 35.4487 19.6632 35.0951 19.395H35.345Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_home">
          <Rect width="28" height="28" fill="white" x="8" y="8" />
        </ClipPath>
      </Defs>
    </Svg>
  );

  return onPress ? <Pressable onPress={onPress}>{Icon}</Pressable> : Icon;
};

export default HomeIcon;
