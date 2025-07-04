import React from "react";
import { Pressable } from "react-native";
import Svg, { ClipPath, Defs, G, Path, Rect, SvgProps } from "react-native-svg";

interface UserIconProps {
  size?: number;
  color?: string;
  style?: SvgProps['style'];
  onPress?: () => void;
}

const UserIcon: React.FC<UserIconProps> = ({
  size = 44,
  color = "#7C8591",
  style,
  onPress,
}) => {
  const Icon = (
    <Svg width={size} height={size} viewBox="0 0 44 44" fill="none" style={style}>
      <G clipPath="url(#clip0_307_3247)">
        <Path
            d="M26.7659 23.197C28.265 22.0595 29.2019 20.1345 29.2019 16.722C29.2019 13.222 26.1102 10.3334 22.3641 10.3334C18.6167 10.3334 15.5251 13.1334 15.5251 16.7209C15.5251 20.2209 16.4619 22.2345 18.0544 23.3709C14.8694 25.2095 11.7777 28.7095 12.9024 30.4595C15.2439 34.572 30.5132 34.8345 32.3857 30.6345C33.1359 28.622 30.0454 25.2095 26.7659 23.197Z"
          fill={color}
          />
      </G>
      <Defs>
        <ClipPath id="clip0_307_3247">
          <Rect width="28" height="28" fill="white" x="8" y="8" />
        </ClipPath>
      </Defs>
    </Svg>
  );

  if (onPress) {
    return <Pressable onPress={onPress}>{Icon}</Pressable>;
  }

  return Icon;
};

export default UserIcon;
