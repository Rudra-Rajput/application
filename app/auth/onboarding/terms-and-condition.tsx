import { router } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "@/components/ui/Button";
import ScreenLayout from "@/components/layouts/ScreenLayout";
import { Ionicons } from "@expo/vector-icons";
import { FONTS } from "@/constants/fonts";

const rules = [
  {
    title: "Be yourself",
    description: "Make sure your photos, age and bio are true to who you are.",
  },
  {
    title: "Stay safe",
    description: "Don't be too quick to give out personal information.",
    link: "Date safely",
  },
  {
    title: "Play it cool",
    description:
      "Respect others and treat them as you would like to be treated.",
  },
  {
    title: "Be proactive",
    description: "Always report bad behaviour.",
  },
];

const TermsAndCondition = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          width: "100%",
          height: 100,
          marginHorizontal: "auto",
        }}
      >
        <View style={{ gap: 8 }}>
          <Text style={[styles.heading, { textAlign: "center" }]}>
            Welcome to Friends360
          </Text>
          <Text style={[styles.subHeading, { textAlign: "center" }]}>
            Please follow these house rules
          </Text>
        </View>
      </View>

      <View style={styles.rulesContainer}>
        {rules.map((rule, index) => (
          <View key={index} style={styles.ruleItem}>
            <Ionicons name="checkmark-sharp" size={24} color="#B36EED" />
            <View style={styles.ruleTextContainer}>
              <Text style={styles.ruleTitle}>{rule.title}</Text>
              <Text style={styles.ruleDescription}>
                {rule.description}{" "}
                {rule.link && <Text style={styles.linkText}>{rule.link}</Text>}
              </Text>
            </View>
          </View>
        ))}
      </View>

      <Button
        title="I Agree"
        onPress={() => {
          router.replace("/feed");
        }}
        style={styles.nextBtn}
        textStyle={styles.nextBtnText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "100%",
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 26,
    color: "white",
    fontFamily: FONTS.bold,
    marginTop: 40,
    lineHeight: 26,
  },
  subHeading: {
    fontSize: 16,
    color: "#939BA7",
    fontFamily: FONTS.regular,
    lineHeight: 18,
    fontWeight: "500",
  },
  title: {
    fontSize: 24,
    color: "white",
    fontFamily: FONTS.bold,
    marginTop: 40,
    lineHeight: 24,
    letterSpacing: 0.5,
  },
  subtitle: {
    fontSize: 16,
    color: "#939BA7",
    fontFamily: FONTS.regular,
    lineHeight: 22,
    letterSpacing: 0.5,
  },
  rulesContainer: {
    flexWrap: "wrap",
    gap: 25,
    marginTop: 60,
    width: "100%",
  },
  ruleItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 20,
  },
  ruleTextContainer: {
    flexShrink: 1,
    gap: 5,
  },
  ruleTitle: {
    fontSize: 16,
    color: "#EFEFEF",
    fontFamily: FONTS.bold,
  },
  ruleDescription: {
    fontSize: 14,
    color: "#EAEAEA",
    fontFamily: FONTS.light,
  },
  linkText: {
    color: "#B36EED",
    textDecorationLine: "underline",
    fontFamily: FONTS.medium,
  },
  nextBtn: {
    marginTop: "auto",
    width: "100%",
    marginBottom: 40,
    backgroundColor: "#6A369D",
  },
  nextBtnText: {
    color: "#fff",
    fontSize: 18,
    fontFamily: FONTS.bold,
    textTransform: "capitalize",
  },
});

export default TermsAndCondition;
