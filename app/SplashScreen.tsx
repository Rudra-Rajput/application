import React, { useEffect, useRef } from "react";
import { Animated, StyleSheet, View } from "react-native";
import Text from "@/components/common/Text";

export default function SplashScreen() {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const bounceAnim = useRef(new Animated.Value(0)).current;
  const pulseAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.spring(bounceAnim, {
        toValue: 1,
        friction: 3,
        useNativeDriver: true,
      }),
    ]).start();

    // Continuous pulse animation
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.2,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [fadeAnim, bounceAnim, pulseAnim]);

  return (
    <View style={styles.container}>
      <Animated.View style={{ opacity: fadeAnim }}>
        <Text variant="bold" size="xl" style={styles.text}>
          MismAtched
          <Animated.Text
            style={{
              paddingLeft: 5,
              transform: [
                {
                  scale: Animated.multiply(
                    bounceAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [1, 1.6],
                    }),
                    pulseAnim
                  ),
                },
              ],
            }}
          >
            ❤️
          </Animated.Text>
        </Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2D1A4A",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    letterSpacing: 1,
    textAlign: "center",
  },
});
