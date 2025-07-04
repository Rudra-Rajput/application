import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import Slider from "@react-native-community/slider";
import Text from "@/components/common/Text";

const router = useRouter();

const Distance = () => {
  const [distance, setDistance] = useState(109);

  const handleNext = () => {
    // TODO: Navigate to the next onboarding step
    router.replace("/auth/onboarding/interests");
  };

  return (
    <>
      <View style={styles.content}>
        <Text variant="bold" size="2xl" style={{ lineHeight: 36 }}>
          Your distance preference?
        </Text>
        <Text variant="medium" size="xs" style={{ color: "#939BA7", lineHeight: 22, letterSpacing: 0.5 }}>
          Use the slider to set the maximum distance you would like potential
          matches to be located.
        </Text>
        <View style={styles.sliderContainer}>
          <View style={styles.sliderLabelRow}>
            <Text variant="regular" size="sm" style={{ color: "#B0AEB8" }}>
              Distance preference
            </Text>
            <Text variant="semiBold" size="sm">
              {distance} km
            </Text>
          </View>
          <Slider
            style={styles.slider}
            minimumValue={1}
            maximumValue={200}
            step={1}
            value={distance}
            onValueChange={setDistance}
            minimumTrackTintColor="#A18CD1"
            maximumTrackTintColor="#232228"
            thumbTintColor="#A18CD1"
          />
        </View>
      </View>
      <Text variant="medium" size="xs" style={{ color: "#B0AEB8", lineHeight: 20, letterSpacing: 0.5, marginTop: 32, marginBottom: 16 }}>
        You can change preferences later in settings.
      </Text>
      <TouchableOpacity
        style={styles.nextBtn}
        activeOpacity={0.8}
        onPress={handleNext}
      >
        <LinearGradient
          colors={["#7F5CFF", "#B19CFF"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.nextBtnGradient}
        >
          <Text variant="medium" size="sm">next</Text>
        </LinearGradient>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingTop: 20,
  },
  sliderContainer: {
    display: "flex",
    width: "100%",
    marginTop: 24,
    justifyContent: "center",
  },
  sliderLabelRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  slider: {
    minWidth: "100%",
    height: 40,
  },
  nextBtn: {
    width: "100%",
    marginBottom: 32,
    borderRadius: 24,
    overflow: "hidden",
  },
  nextBtnGradient: {
    width: "100%",
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 24,
  },
});

export default Distance;
