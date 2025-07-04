import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import * as Notifications from "expo-notifications";
import Button from "@/components/ui/Button";
import Text from "@/components/common/Text";

export default function NotificationsPermissionScreen() {
  const allow = async () => {
    const { status } = await Notifications.requestPermissionsAsync();
    if (status === "granted") {
      router.replace("/auth/onboarding");
    } else {
      // Optionally show an alert or handle denial
      router.replace("/auth/onboarding");
    }
  };
  const skip = () => router.replace("/auth/onboarding");

  return (
    <View style={styles.content}>
      <View style={styles.titleContainer}>
        <Ionicons
          name="notifications"
          size={100}
          color="#FFD54F"
          style={{ marginBottom: 24, transform: [{ rotate: "25deg" }] }}
        />
        <Text variant="bold" size="2xl" style={{ marginBottom: 12, marginTop: 24, textAlign: "center" }}>
          Don't miss a beat, or a match
        </Text>
        <Text variant="regular" size="xs" style={{ textAlign: "center", opacity: 0.7, marginBottom: 48, marginTop: 8 }}>
          Turn on your notification so we can let you know when you have new
          matches, likes, or messages.
        </Text>
      </View>

      <View style={styles.mainBtnContainer}>
        <Button
          title="Allow notifications"
          onPress={allow}
          style={styles.mainBtn}
          textStyle={styles.mainBtnText}
        />
        <Button
          title="Not now"
          onPress={skip}
          style={styles.skipBtn}
          textStyle={styles.skipText}
          type="ghost"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  titleContainer: {
    flex: 0.6,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
  },
  mainBtnContainer: {
    alignItems: "center",
    width: "100%",
  },
  mainBtn: {
    borderRadius: 24,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  mainBtnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  skipBtn: {
    marginTop: 16,
    width: "100%",
    alignItems: "center",
  },
  skipText: {
    color: "#939BA7",
    opacity: 0.8,
    fontSize: 16,
  },
});
