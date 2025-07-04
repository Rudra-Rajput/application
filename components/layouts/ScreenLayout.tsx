import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React from "react";
import {
  Dimensions,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";

interface ScreenLayoutProps {
  children: React.ReactNode;
  showBackButton?: boolean;
  onBackPress?: () => void;
}

export default function ScreenLayout({ 
  children, 
  showBackButton = false,
  onBackPress 
}: ScreenLayoutProps) {
  const router = useRouter();

  const handleBack = () => {
    if (onBackPress) {
      onBackPress();
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
          {showBackButton && (
            <SafeAreaView>
              <Pressable
                style={styles.backBtn}
                onPress={handleBack}
              >
                <Ionicons name="chevron-back" size={28} color="#656E7B" />
              </Pressable>
            </SafeAreaView>
          )}
          <View style={styles.content}>
            {children}
          </View>
        </LinearGradient>
      </Pressable>
    </KeyboardAvoidingView>
  );
}

const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: "#1B1B1B", 
    minHeight: height 
  },
  overlay: {
    flex: 1,
    paddingTop: 45,
    minHeight: height,
  },
  backBtn: { 
    marginTop: 30, 
    color: "#656E7B", 
    // marginLeft: 15 
  },
  content: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    // paddingHorizontal: 24,
    minWidth: width,
  },
}); 