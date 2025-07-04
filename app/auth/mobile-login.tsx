import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useForm, Controller } from "react-hook-form";
import CountryPicker, { Country } from "react-native-country-picker-modal";
import Button from "@/components/ui/Button";
import Text from "@/components/common/Text";

type FormData = {
  countryCode: string;
  phoneNumber: string;
};

export default function MobileLoginScreen() {
  const [showPicker, setShowPicker] = useState(false);
  const [country, setCountry] = useState<Country>({
    name: "India",
    cca2: "IN",
    callingCode: ["91"],
    flag: "flag-in",
    region: "Asia",
    subregion: "Southern Asia",
    currency: ["INR"],
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormData>({
    defaultValues: {
      countryCode: "+91",
      phoneNumber: "",
    },
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    router.push("/auth/otp");
  };

  const onSelectCountry = (selectedCountry: Country) => {
    setCountry(selectedCountry);
    setValue("countryCode", `+${selectedCountry.callingCode[0]}`);
    setShowPicker(false);
  };

  return (
    <React.Fragment>
      <View style={styles.content}>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            variant="bold"
            size="2xl"
            style={{ lineHeight: 36, marginBottom: 20 }}
          >
            Log in or Sign up
          </Text>
          <Text
            variant="medium"
            size="sm"
            style={{ textAlign: "center", lineHeight: 20, marginBottom: 20 }}
          >
            we only use phone number to make sure everyone on mismatched is
            real.
          </Text>

          <View style={styles.formRow}>
            <View style={styles.inputContainer}>
              <Text
                variant="medium"
                size="xs"
                style={{ lineHeight: 20, color: "#939BA7" }}
              >
                Country Code
              </Text>
              <Controller
                control={control}
                name="countryCode"
                render={({ field: { value } }) => (
                  <React.Fragment>
                    <TouchableOpacity
                      style={styles.countryBtn}
                      activeOpacity={0.8}
                      onPress={() => setShowPicker(true)}
                    >
                      <Text
                        variant="medium"
                        size="sm"
                        style={{ lineHeight: 20 }}
                      >
                        + {country.callingCode[0]}
                      </Text>
                      <CountryPicker
                        withFilter
                        withCallingCode
                        withFlag={false}
                        countryCode={country.cca2}
                        onSelect={onSelectCountry}
                        visible={showPicker}
                        onClose={() => setShowPicker(false)}
                        containerButtonStyle={styles.countryPickerButton}
                        modalProps={{
                          style: {
                            maxHeight: "50%",
                            height: "50%",
                          },
                        }}
                        theme={{
                          backgroundColor: "#2D1A4A",
                          onBackgroundTextColor: "#E9EBEE",
                          fontSize: 16,
                        }}
                      />
                      <Ionicons name="chevron-down" size={20} color="#fff" />
                    </TouchableOpacity>
                  </React.Fragment>
                )}
              />
            </View>
            <View style={[styles.inputContainer, { flex: 1 }]}>
              <Text
                variant="medium"
                size="xs"
                style={{ lineHeight: 20, color: "#939BA7" }}
              >
                Phone Number
              </Text>
              <Controller
                control={control}
                name="phoneNumber"
                rules={{
                  required: "Phone number is required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Please enter a valid 10-digit phone number",
                  },
                }}
                render={({ field: { onChange, value } }) => (
                  <TextInput
                    style={styles.phoneInput}
                    keyboardType="phone-pad"
                    placeholderTextColor="rgba(255,255,255,0.6)"
                    value={value}
                    onChangeText={onChange}
                    maxLength={10}
                  />
                )}
              />
              {errors.phoneNumber && (
                <Text style={styles.errorText}>
                  {errors.phoneNumber.message}
                </Text>
              )}
            </View>
          </View>
        </View>
      </View>
      <Text variant="regular" size="xs" style={{ textAlign: "center", marginBottom: 10,color:'#939BA7' }}>
        we never share this with anyone and it wont be on your profile.
      </Text>
      <Button
        title="Next"
        onPress={handleSubmit(onSubmit)}
        style={{marginBottom:40}}
        textStyle={styles.nextBtnText}
      />
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 100,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#E9EBEE",
    lineHeight: 36,
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 14,
    color: "#fff",
    textAlign: "center",
    fontWeight: "500",
    lineHeight: 22,
    marginBottom: 32,
    letterSpacing: 0.25,
  },
  formRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 16,
    width: "100%",
  },
  inputContainer: {
    gap: 8,
  },
  label: {
    color: "#939BA7",
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "500",
  },
  countryBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.3)",
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 48,
    minWidth: 100,
  },
  countryText: {
    color: "#E9EBEE",
    fontSize: 16,
    lineHeight: 24,
  },
  phoneInput: {
    height: 48,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.3)",
    paddingHorizontal: 16,
    color: "#fff",
    fontSize: 16,
  },
  errorText: {
    color: "#ff6b6b",
    fontSize: 12,
    marginTop: 4,
  },
  disclaimerSmall: {
    fontSize: 12,
    color: "#939BA7",
    lineHeight: 20,
    fontWeight: "500",
    textAlign: "center",
    marginTop: 10,
    marginBottom: 30,
  },
  nextBtnContainer: { width: "100%" },

  nextBtnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  countryPickerButton: {
    flexDirection: "row",
    display: "none",
    alignItems: "center",
  },
});
