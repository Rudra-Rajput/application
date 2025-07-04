import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import Button from "@/components/ui/Button";
import Text from "@/components/common/Text";

const genderOptions = ["Man", "Woman", "Non binary"];

const Gender = () => {
  const [selectedGender, setSelectedGender] = useState<string | null>(null);
  const [showGender, setShowGender] = useState(false);
  const router = useRouter();

  const toggleGender = (gender: string) => {
    setSelectedGender((prev) => (prev === gender ? null : gender));
  };

  const handleNext = () => {
    router.replace("/auth/onboarding/looking-for");
  };

  return (
    <React.Fragment>
      <View style={styles.content}>
        <Text variant="bold" size="2xl" style={{ lineHeight: 36 }}>
          What's your gender?
        </Text>
        <Text variant="medium" size="xs" style={{ color: "#939BA7", lineHeight: 22, letterSpacing: 0.5, marginBottom: 14 }}>
          Select all that describe you to help us show your profile to the right
          people. You can add more details if you would like.
        </Text>
        <View style={styles.optionsContainer}>
          {genderOptions.map((option) => (
            <TouchableOpacity
              key={option}
              style={[
                styles.option,
                selectedGender === option && styles.optionSelected,
              ]}
              onPress={() => toggleGender(option)}
            >
              <Text variant="regular" size="lg">{option}</Text>
              <View
                style={[
                  styles.radio,
                  selectedGender === option && styles.radioSelected,
                ]}
              />
            </TouchableOpacity>
          ))}
        </View>
        <TouchableOpacity
          style={styles.checkboxRow}
          onPress={() => setShowGender(!showGender)}
          activeOpacity={0.7}
        >
          <View style={[styles.checkbox, showGender && styles.checkboxChecked]}>
            {showGender && <View style={styles.checkboxDot} />}
          </View>
          <Text variant="regular" size="xs" style={{ opacity: 0.7, marginLeft: 0 }}>
            Show gender on profile
          </Text>
        </TouchableOpacity>
      </View>
      <Button
        title="Next"
        onPress={handleNext}
        style={styles.nextBtn}
        textStyle={styles.nextBtnText}
      />
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingTop: 20,
  },
  optionsContainer: {
    width: "100%",
    marginBottom: 16,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 48,
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: "rgba(255,255,255,0.3)",
    backgroundColor: "#1D1D1D",
    paddingHorizontal: 16,
    marginBottom: 12,
    width: "100%",
  },
  optionSelected: {
    borderColor: "#7F5CFF",
    backgroundColor: "#7F5CFF33",
  },
  radio: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "rgba(255,255,255,0.3)",
    backgroundColor: "transparent",
  },
  radioSelected: {
    borderColor: "#7F5CFF",
    backgroundColor: "#7757FF",
  },
  checkboxRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 1.5,
    borderColor: "#fff",
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },
  checkboxChecked: {
    borderColor: "#7F5CFF",
    backgroundColor: "#7F5CFF33",
  },
  checkboxDot: {
    width: 10,
    height: 10,
    borderRadius: 2,
    backgroundColor: "#7F5CFF",
  },
  nextBtn: {
    width: "100%",
    marginBottom: 40,
    borderRadius: 24,
    overflow: "hidden",
  },
  nextBtnText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});

export default Gender;
