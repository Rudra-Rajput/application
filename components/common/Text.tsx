import React from "react";
import {
  Text as RNText,
  TextProps as RNTextProps,
  StyleSheet,
} from "react-native";
import { FONTS, FONT_SIZES } from "@/constants/fonts";

interface TextProps extends RNTextProps {
  variant?: keyof typeof FONTS;
  size?: keyof typeof FONT_SIZES;
}

export default function Text({
  style,
  variant = "regular",
  size = "md",
  ...props
}: TextProps) {
  return (
    <RNText
      style={[
        styles.text,
        {
          fontFamily: FONTS[variant],
          fontSize: FONT_SIZES[size],
        },
        style,
      ]}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  text: {
    color: "#fff",
  },
});
