import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import Button from "@/components/ui/Button";
import Text from "@/components/common/Text";

const UserDetail = () => {
  const [name, setName] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [showBirthday, setShowBirthday] = useState(false);
  const router = useRouter();

  const handleNext = () => {
    // Add validation and navigation logic here
    router.replace("/auth/onboarding/gender");
  };

  return (
    <React.Fragment>
      <View style={styles.content}>
        <Text variant="bold" size="2xl" style={{ lineHeight: 36 }}>
          My name is
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Your Name"
          placeholderTextColor="#fff"
          value={name}
          onChangeText={setName}
        />
        <Text variant="medium" size="xs" style={{ color: "#939BA7", lineHeight: 20 }}>
          This is how it will appear in your profile.
        </Text>

        <Text variant="bold" size="2xl" style={{ lineHeight: 36, marginTop: 32 }}>
          My Birthday is on
        </Text>
        <View style={styles.birthdayRow}>
          <View style={styles.birthdayCol}>
            <Text variant="regular" size="xs" style={{ opacity: 0.7, marginBottom: 4 }}>
              Day
            </Text>
            <TextInput
              style={styles.input}
              placeholder="DD"
              placeholderTextColor="#fff"
              value={day}
              onChangeText={setDay}
              keyboardType="number-pad"
              maxLength={2}
            />
          </View>
          <View style={styles.birthdayCol}>
            <Text variant="regular" size="xs" style={{ opacity: 0.7, marginBottom: 4 }}>
              Month
            </Text>
            <TextInput
              style={styles.input}
              placeholder="MM"
              placeholderTextColor="#fff"
              value={month}
              onChangeText={setMonth}
              keyboardType="number-pad"
              maxLength={2}
            />
          </View>
          <View style={styles.birthdayCol}>
            <Text variant="regular" size="xs" style={{ opacity: 0.7, marginBottom: 4 }}>
              Year
            </Text>
            <TextInput
              style={styles.input}
              placeholder="YYYY"
              placeholderTextColor="#fff"
              value={year}
              onChangeText={setYear}
              keyboardType="number-pad"
              maxLength={4}
            />
          </View>
        </View>
        <TouchableOpacity
          style={styles.checkboxRow}
          onPress={() => setShowBirthday(!showBirthday)}
          activeOpacity={0.7}
        >
          <View
            style={[styles.checkbox, showBirthday && styles.checkboxChecked]}
          >
            {showBirthday && <View style={styles.checkboxDot} />}
          </View>
          <Text variant="regular" size="xs" style={{ opacity: 0.7, marginLeft: 0 }}>
            Show Birthday on profile
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
    paddingTop: 60,
  },
  input: {
    minWidth: "100%",
    height: 48,
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: "rgba(255,255,255,0.3)",
    color: "#fff",
    fontSize: 18,
    paddingHorizontal: 16,
    backgroundColor: "#1D1D1D",
    marginBottom: 4,
  },
  birthdayRow: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  birthdayCol: {
    flex: 1,
    marginRight: 8,
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
  nextBtnGradient: {
    width: "100%",
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 24,
  },
  nextBtnText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});

export default UserDetail;
