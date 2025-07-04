import React, { useState, useRef, useEffect } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { router } from "expo-router";
import Button from "@/components/ui/Button";
import Text from "@/components/common/Text";

const backgroundImage = require("../../assets/images/login.jpg");

export default function OtpScreen() {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputs = useRef<Array<TextInput | null>>([]);
  const [resendActive, setResendActive] = useState(true);

  useEffect(() => {
    inputs.current[0]?.focus();
  }, []);

  const handleChange = (text: string, index: number) => {
    if (/[^0-9]/.test(text)) return;
    const copy = [...otp];
    copy[index] = text;
    setOtp(copy);
    if (text && index < 3) inputs.current[index + 1]?.focus();
  };

  const handleKeyPress = (e: any, idx: number) => {
    if (e.nativeEvent.key === "Backspace" && otp[idx] === "" && idx > 0) {
      inputs.current[idx - 1]?.focus();
    }
  };

  const handleProceed = () => {
    if (otp.join("").length === 4) {
      // Add OTP verification logic here
      router.push("/auth/permissions/location");
    }
  };

  const handleResend = () => {
    // Add resend OTP logic here
    setResendActive(false);
    setTimeout(() => setResendActive(true), 30000); // 30s cooldown
  };

  return (
    <React.Fragment>
      <View style={styles.content}>
        <View style={{ alignItems: "center", width: "100%" }}>
          <Text variant="bold" size="2xl" style={{ marginBottom: 12, marginTop: 40 }}>
            Verify Your Number
          </Text>
          <Text variant="regular" size="xs" style={{ textAlign: "center", opacity: 0.7, marginBottom: 32 }}>
            Enter the 4-digit code sent to
            {"\n"}
            <Text variant="semiBold" size="xs">+1 987-XXX-XXXX</Text>
          </Text>
          <Text variant="medium" size="xs" style={{ alignSelf: "flex-start", marginBottom: 8, opacity: 0.8 }}>
            OTP
          </Text>
          <View style={styles.otpRow}>
            {[0, 1, 2, 3].map((i) => (
              <TextInput
                key={i}
                ref={(ref) => {
                  inputs.current[i] = ref;
                }}
                style={styles.otpInput}
                keyboardType="number-pad"
                maxLength={1}
                value={otp[i]}
                onChangeText={(text) => handleChange(text, i)}
                onKeyPress={(e) => handleKeyPress(e, i)}
                placeholder=""
                placeholderTextColor="#fff"
                textAlign="center"
              />
            ))}
          </View>
          <Text variant="regular" size="xs" style={{ opacity: 0.7, marginTop: 8, marginBottom: 16, textAlign: "center" }}>
            didn't get the otp?{" "}
            <Text
              variant="semiBold"
              size="sm"
              style={{ textDecorationLine: "underline" }}
              onPress={resendActive ? handleResend : undefined}
            >
              Send again.
            </Text>
          </Text>
        </View>
      </View>
      <Button
        title="Proceed"
        onPress={handleProceed}
        style={styles.otpProceedBtn}
        textStyle={styles.otpProceedText}
      />
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 20,
    marginTop: 40,
  },
  otpRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
    marginBottom: 24,
  },
  otpInput: {
    width: 60,
    height: 60,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: "rgba(255,255,255,0.3)",
    color: "#fff",
    fontSize: 24,
    backgroundColor: "rgba(255,255,255,0.05)",
    textAlign: "center",
  },
  otpProceedBtn: {
    marginBottom: 40,
  },
  otpProceedText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
