import React, { ReactNode } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Text from "../common/Text";

interface ButtonProps {
  onPress: () => void;
  title: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
  children?: ReactNode;
  type?: "primary" | "ghost";
}

const Button = ({
  onPress,
  title,
  style,
  textStyle,
  children,
  type = "primary",
}: ButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      {type === "ghost" ? (
        <Text variant="medium" size="sm">
          {title}
        </Text>
      ) : (
        <LinearGradient
          colors={["#7E60FB", "#B4A4FD"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.gradient}
        >
          {children}
          <Text variant="medium" size="sm" style={{ lineHeight: 24 }}>
            {title}
          </Text>
        </LinearGradient>
      )}
      {/* <LinearGradient
        colors={["#7E60FB", "#B4A4FD"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.gradient}
      >
        {children}
        <Text style={[styles.text, textStyle]}>{title}</Text>
      </LinearGradient> */}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "100%",
    borderRadius: 24,
    overflow: "hidden",
  },
  gradient: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default Button;
