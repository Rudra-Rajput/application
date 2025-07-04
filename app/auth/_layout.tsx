import { LinearGradient } from "expo-linear-gradient";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  StatusBar,
  View,
} from "react-native";
import { TouchableOpacity } from "react-native";
import { Pressable } from "react-native";
import React from "react";
import { useRouter, usePathname } from "expo-router";
import { Slot } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

function AuthLayout() {
  const router = useRouter();
  const pathname = usePathname();
  const isFirstOnboardingPage = pathname === "/auth/onboarding";
  const isPermissionPage = pathname.includes("location") || pathname.includes("notification");
  const showProgressBar = pathname.includes("onboarding");
  const showBackButton = !isPermissionPage && !isFirstOnboardingPage;
  const isOnboardingRoute = pathname.includes("onboarding");

  const getProgressWidth = () => {
    if (!showProgressBar) return 0;
    
    const onboardingRoutes = [
      "onboarding",
      "onboarding/gender",
      "onboarding/looking-for",
      "onboarding/searching-for",
      "onboarding/relationship-status",
      "onboarding/distance",
      "onboarding/interests",
      "onboarding/upload-image",
      "onboarding/terms-and-condition"
    ];

    const currentRoute = pathname.split("/auth/")[1] || "";
    const currentStep = onboardingRoutes.indexOf(currentRoute) + 1;
    
    if (currentStep === 0) return 0;
    return (currentStep / onboardingRoutes.length) * 100;
  };

  const handleBack = () => {
    if (pathname.includes("onboarding")) {
      const onboardingRoutes = [
        "onboarding",
        "onboarding/gender",
        "onboarding/looking-for",
        "onboarding/searching-for",
        "onboarding/relationship-status",
        "onboarding/distance",
        "onboarding/interests",
        "onboarding/upload-image",
        "onboarding/terms-and-condition"
      ] as const;
      
      const currentRoute = pathname.split("/auth/")[1] || "";
      const currentIndex = onboardingRoutes.indexOf(currentRoute as typeof onboardingRoutes[number]);
      
      if (currentIndex > 0) {
        // Go to previous route in the flow
        const previousRoute = onboardingRoutes[currentIndex - 1];
        router.replace(`/auth/${previousRoute}` as any);
      } else {
        // If we're at the start, go back to previous screen
        router.back();
      }
    } else {
      router.back();
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <Pressable onPress={Keyboard.dismiss} style={{ flex: 1 }}>
        <LinearGradient
          colors={[
            "#301D54",
            "#2F1D51F2",
            "#2D1D4BD6",
            "#281C3F9E",
            "#231B3363",
            "#1B1A1D00",
            "#1B1A1D00",
            "#1B1A1D00",
            "#1B1A1D00",
            "#1B1A1D00",
            "#1B1A1D00",
            "#1B1A1D00",
          ]}
          style={styles.overlay}
        >
          {showProgressBar && (
            <SafeAreaView>
              <View style={styles.progressBarBg}>
                <View style={[styles.progressBarFill, { width: `${getProgressWidth()}%` }]} />
              </View>
            </SafeAreaView>
          )}
          {showBackButton && (
            <TouchableOpacity
              style={[styles.backBtn, isOnboardingRoute && styles.onboardingBackBtn]}
              onPress={handleBack}
            >
              <Ionicons name="chevron-back" size={28} color="#656E7B" />
            </TouchableOpacity>
          )}
          <View style={styles.content}>
            <Slot />
          </View>
        </LinearGradient>
      </Pressable>
    </KeyboardAvoidingView>
  );
}

export default AuthLayout;
const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#1B1B1B", minHeight: height },
  overlay: {
    flex: 1,
    paddingTop: 40,
    minHeight: height,
  },
  backBtn: { marginTop: 30, color: "#656E7B", marginLeft: 15 },
  onboardingBackBtn: {
    marginTop: 10,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
    minWidth: width,
  },
  progressBarBg: {
    height: 6,
    width: "100%",
    backgroundColor: "#fff2",
    borderRadius: 3,
    // marginTop: 16,
    marginBottom: 24,
    overflow: "hidden",
  },
  progressBarFill: {
    height: 6,
    backgroundColor: "#FF4FCB",
    borderRadius: 3,
  },
});
