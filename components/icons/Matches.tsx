import React from "react";
import Svg, { Path, Defs, ClipPath, Rect, G, SvgProps } from "react-native-svg";
import { Pressable, Text, View } from "react-native";

interface MatchesIconProps {
  size?: number;
  color?: string;
  style?: SvgProps["style"];
  onPress?: () => void;
  notificationCount?: number;
}

const MatchesIcon: React.FC<MatchesIconProps> = ({
  size = 44,
  color = "#7C8591",
  style,
  onPress,
  notificationCount,
}) => {
  const Icon = (
    <View style={{ position: "relative" }}>
      <Svg
        width={size}
        height={size}
        viewBox="0 0 52 44"
        fill="none"
        style={style}
      >
        <G clipPath="url(#clip0_307_3252)">
          <Path
            d="M21.9985 8.66663C21.9985 15.3346 28.6665 22 35.3332 22C28.6652 22 21.9998 29.176 21.9998 35.3333C21.9998 29.176 15.2972 22 8.6665 22C15.2985 22 21.9985 15.3346 21.9985 8.66663Z"
            fill={color}
          />
        </G>
        <Defs>
          <ClipPath id="clip0_307_3252">
            <Rect width="32" height="32" fill="white" x="6" y="6" />
          </ClipPath>
        </Defs>
      </Svg>
      {notificationCount !== undefined && (
        <View
          style={{
            position: "absolute",
            top: 5,
            right: 2,
            backgroundColor: "#FF4458",
            borderRadius: 10,
            minWidth: 20,
            height: 20,
            justifyContent: "center",
            alignItems: "center",
            paddingHorizontal: 4,
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 12,
              fontWeight: "bold",
            }}
          >
            {notificationCount > 99 ? "99+" : notificationCount}
          </Text>
        </View>
      )}
    </View>
  );

  if (onPress) {
    return <Pressable onPress={onPress}>{Icon}</Pressable>;
  }

  return Icon;
};

export default MatchesIcon;
