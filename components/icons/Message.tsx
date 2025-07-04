import React from "react";
import Svg, { Path, Defs, ClipPath, Rect, G, SvgProps } from "react-native-svg";
import { Pressable, Text, View } from "react-native";

interface MessageIconProps {
  size?: number;
  color?: string;
  style?: SvgProps["style"];
  onPress?: () => void;
  notificationCount?: number;
}

const MessageIcon: React.FC<MessageIconProps> = ({
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
        viewBox="0 0 44 44"
        fill="none"
        style={style}
      >
        <G clipPath="url(#clip0_307_3241)">
          <Path
            d="M21.5475 26.8335C21.5475 23.5423 24.6123 20.7516 28.5125 20.7516C29.4178 20.7516 30.3232 20.9663 31.1597 21.2533C31.1597 16.5306 26.493 12.6666 20.851 12.6666C15.0702 12.6666 10.3335 16.673 10.3335 21.4668C10.3335 24.5433 12.2842 27.4051 15.2102 28.8366V32.0566C15.2102 32.4148 15.4878 32.6283 15.9055 32.4148L20.0845 30.2681H21.1298C21.6175 30.2681 22.1052 30.2681 22.5228 30.1246C21.8263 29.1225 21.5475 27.978 21.5475 26.8335ZM28.5125 22.5401C25.5877 22.5401 23.2193 24.401 23.2193 26.8335C23.2193 29.266 25.5877 31.2691 28.4425 31.2691H28.7913L29.4878 31.5561L30.602 32.2713C30.9508 32.2713 31.2985 32.2713 31.2985 31.842V30.554C32.6915 29.8388 33.6668 28.4073 33.6668 26.8335C33.6668 24.401 31.3685 22.5401 28.4425 22.5401H28.5125Z"
            fill={color}
          />
        </G>
        <Defs>
          <ClipPath id="clip0_307_3241">
            <Rect width="28" height="28" fill="white" x="8" y="8" />
          </ClipPath>
        </Defs>
      </Svg>
      {notificationCount !== undefined && (
        <View
          style={{
            position: "absolute",
            top: 0,
            right: -4,
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

export default MessageIcon;
