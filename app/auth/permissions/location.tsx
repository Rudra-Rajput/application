import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import * as Location from "expo-location";
import Button from "@/components/ui/Button";
import Text from "@/components/common/Text";

export default function LocationPermissionScreen() {
  const handleSetLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status === "granted") {
      router.push("/auth/permissions/notifications");
    } else {
      Alert.alert(
        "Permission required",
        "Location permission is needed to show people nearby."
      );
    }
  };
  const handleSkip = () => router.replace("/auth/permissions/notifications");

  return (
    <View style={styles.content}>
      <View style={styles.titleContainer}>
        <Ionicons
          name="location-sharp"
          size={100}
          color="#FF0044"
          style={{ marginBottom: 24 }}
        />
        <Text variant="bold" size="2xl" style={{ marginBottom: 12, marginTop: 24, textAlign: "center" }}>
          Now, can we get your location?
        </Text>
        <Text variant="regular" size="xs" style={{ textAlign: "center", opacity: 0.7, marginBottom: 48, marginTop: 8 }}>
          we need it so we cn show you all the great people nearby (or far away)
        </Text>
      </View>

      <View style={styles.mainBtnContainer}>
        <Button
          title="Set location services"
          onPress={handleSetLocation}
          style={styles.mainBtn}
          textStyle={styles.mainBtnText}
        />
        <Button
          title="Not now"
          onPress={handleSkip}
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
