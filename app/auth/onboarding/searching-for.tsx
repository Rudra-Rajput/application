import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import Button from "@/components/ui/Button";
import Text from "@/components/common/Text";

const OPTIONS = [
  "🥰 Long - term partner",
  "😎 Short term fun",
  "🤘🏻 New friends",
  "🤔 Still figuring it out",
];

const SearchingFor = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const router = useRouter();

  const toggleOption = (option: string) => {
    setSelected(prev => (prev === option ? null : option));
  };

  const handleNext = () => {
    router.replace("/auth/onboarding/relationship-status");
  };

  return (
    <React.Fragment>
      <View style={styles.content}>
        <Text variant="bold" size="2xl" style={{ lineHeight: 36 }}>
          What are you searching for?
        </Text>
        <Text variant="medium" size="xs" style={{ color: "#939BA7", lineHeight: 22, letterSpacing: 0.5, marginBottom: 14 }}>
          All good if it changes. There's something for everyone.
        </Text>
        <View style={styles.optionsContainer}>
          {OPTIONS.map((option) => (
            <TouchableOpacity
              key={option}
              style={[
                styles.option,
                selected === option && styles.optionSelected,
              ]}
              onPress={() => toggleOption(option)}
            >
              <Text variant="regular" size="lg">{option}</Text>
              <View
                style={[
                  styles.radio,
                  selected === option && styles.radioSelected,
                ]}
              />
            </TouchableOpacity>
          ))}
        </View>
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

export default SearchingFor;