import Text from "@/components/common/Text";
import Button from "@/components/ui/Button";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

const backgroundImage = require("../assets/images/login.jpg");

export default function AuthOptionsScreen() {
  const handleGoogleLogin = () => {
    // Implement Google login
    router.replace("/(tabs)/matches");
  };

  const handleFacebookLogin = () => {
    // Implement Facebook login
    router.replace("/");
  };

  const handleMobileLogin = () => {
    // Navigate to mobile login screen
    router.push("/auth/mobile-login");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <Pressable onPress={Keyboard.dismiss} style={styles.pressableContainer}>
        <View style={styles.container}>
          <ImageBackground
            source={backgroundImage}
            style={styles.bg}
            resizeMode="cover"
          >
            <LinearGradient
              colors={[
                "#301D54",
                "#2F1D51F2",
                "#2D1D4BD6",
                "#281C3F9E",
                "#281C3F9E",
                "#231B3363",
                "#1B1A1D00",
                "#231B3363",
                "#281C3F9E",
                "#231B3363",
                "#2D1D4BD6",
                "#2F1D51F2",
                "#301D54",
              ]}
              style={styles.overlay}
            >
              <ScrollView
                contentContainerStyle={styles.scrollContent}
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
                bounces={false}
              >
                <View style={styles.headerContainer}>
                  <Text variant="bold" size="xl" style={styles.appName}>Mismatched</Text>
                  <Text variant="bold" size="4xl" style={styles.heading}>
                    Swipe. Match.{"\n"}Chat. Love.
                  </Text>
                </View>

                <View style={styles.formContainer}>
                  <Text variant="regular" size="xs" style={styles.prompt}>
                    Please enter your details to sign in
                  </Text>
                  <Button
                    title="Continue with Google"
                    onPress={handleGoogleLogin}
                    textStyle={styles.socialText}
                  >
                    <Image
                      source={require("../assets/icons/auth/gmail.png")}
                      style={styles.icon}
                    />
                  </Button>
                  <Button
                    title="Continue with Facebook"
                    onPress={handleFacebookLogin}
                    textStyle={styles.socialText}
                  >
                    <Image
                      source={require("../assets/icons/auth/facebook.png")}
                      style={styles.icon}
                    />
                  </Button>
                  <Text variant="regular" size="xs" style={styles.facebookNote}>
                    We never post to facebook
                  </Text>
                  <Text variant="regular" size="md" style={styles.or}>or</Text>
                  <View style={styles.outerWrapper}>
                    <BlurView
                      intensity={20}
                      tint="light"
                      style={styles.blurContainer}
                    >
                      <TouchableOpacity
                        style={styles.mobileBtn}
                        onPress={handleMobileLogin}
                        activeOpacity={0.8}
                      >
                        <Text variant="medium" size="sm" style={{lineHeight:18}}>
                          Use mobile number
                        </Text>
                      </TouchableOpacity>
                    </BlurView>
                  </View>
                  <Text variant="regular" size="xs" style={styles.terms}>
                    By continuing, you agree to our{" "}
                    <Text variant="bold" size="xs">term & privacy policy.</Text>
                  </Text>
                </View>
              </ScrollView>
            </LinearGradient>
          </ImageBackground>
        </View>
      </Pressable>
    </KeyboardAvoidingView>
  );
}

const { width, height } = Dimensions.get('window');
const scale = Math.min(width, height) / 375; // 375 is base width for scaling

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2D1A4A",
    minHeight: height,
  },
  pressableContainer: {
    flex: 1,
    minHeight: "100%",
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: "space-between",
    paddingVertical: 20,
    minHeight: height,
  },
  bg: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Math.max(24, width * 0.06),
  },
  headerContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: Math.max(40, height * 0.05),
    gap: Math.max(40, height * 0.05),
    width: "100%",
  },
  formContainer: {
    display: "flex",
    flexDirection: "column",
    gap: Math.max(10, height * 0.015),
    width: "100%",
    marginTop: Math.max(20, height * 0.03),
  },
  appName: {
    marginBottom: Math.max(32, 32 * scale),
    display: "flex",
    marginTop: Math.max(40, 40 * scale),
    letterSpacing: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    marginBottom: Math.max(32, 32 * scale),
    lineHeight: Math.max(44, 44 * scale),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  prompt: {
    lineHeight: Math.max(20, 20 * scale),
    textAlign: "center",
  },
  socialButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#8B5CF6",
    borderRadius: Math.max(24, 24 * scale),
    paddingVertical: Math.max(12, 12 * scale),
    paddingHorizontal: Math.max(24, 24 * scale),
    width: "100%",
    justifyContent: "center",
    marginTop: Math.max(12, 12 * scale),
  },
  icon: {
    height: Math.max(24, 24 * scale),
    width: Math.max(24, 24 * scale),
    marginRight: Math.max(10, 10 * scale),
  },
  socialText: {
    fontSize: Math.max(16, 16 * scale),
  },
  facebookNote: {
    lineHeight: Math.max(20, 20 * scale),
    textAlign: "center",
  },
  or: {
    marginVertical: Math.max(8, 8 * scale),
    opacity: 0.7,
    textAlign: "center",
  },
  outerWrapper: {
    width: "100%",
    borderRadius: Math.max(24, 24 * scale),
    overflow: "hidden",
    marginTop: Math.max(4, 4 * scale),
    marginBottom: Math.max(18, 18 * scale),
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.6)",
  },
  blurContainer: {
    paddingVertical: Math.max(12, 12 * scale),
    paddingHorizontal: Math.max(24, 24 * scale),
    borderRadius: Math.max(24, 24 * scale),
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.1)",
  },
  mobileBtn: {
    width: "100%",
    alignItems: "center",
    justifyContent:'center'
  },
  terms: {
    lineHeight: Math.max(17.18, 17.18 * scale),
    textAlign: "center",
    opacity: 0.8,
    marginBottom: Math.max(36, 36 * scale),
  },
  buttonPressable: {
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      android: {
        elevation: 5,
      },
      web: {
        boxShadow: "0px 2px 3.84px rgba(0, 0, 0, 0.25)",
      },
    }),
  },
});
