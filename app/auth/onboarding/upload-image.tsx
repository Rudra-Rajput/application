import Button from "@/components/ui/Button";
import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { router } from "expo-router";
import Text from "@/components/common/Text";

const PHOTO_SLOTS = 6;

const tips = [
  "Put your best photo forward.",
  "Keep it real.",
  "Show a little variety.",
];

const UploadImage = () => {
  const [photos, setPhotos] = useState<(string | null)[]>([
    null,
    null,
    null,
    null,
    null,
    null,
  ]);

  const handleAddPhoto = async (index: number) => {
    // Request permission
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Permission to access media library is required!");
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 0.8,
    });
    if (!result.canceled && result.assets && result.assets.length > 0) {
      const uri = result.assets[0].uri;
      const newPhotos = [...photos];
      newPhotos[index] = uri;
      setPhotos(newPhotos);
    }
  };

  const handleRemovePhoto = (index: number) => {
    const newPhotos = [...photos];
    newPhotos[index] = null;
    setPhotos(newPhotos);
  };

  return (
    <View style={styles.container}>
      <Text variant="bold" size="2xl" style={{ lineHeight: 36, letterSpacing: 0.5, marginVertical: 10 }}>
        Time to put a face to the name
      </Text>
      <Text variant="medium" size="xs" style={{ color: "#939BA7", lineHeight: 22, letterSpacing: 0.5, marginBottom: 10 }}>
        You do you! add at least 4 photos, whether its you with your pet, eating
        your fave food or in a place you love.
      </Text>
      <View style={styles.gridContainer}>
        {[0, 1, 2].map((row) => (
          <View key={row} style={styles.row}>
            {[0, 1, 2].map((col) => {
              const idx = row * 3 + col;
              if (idx >= PHOTO_SLOTS) return null;
              return (
                <View key={col} style={styles.photoSlot}>
                  {photos[idx] ? (
                    <View>
                      <Image
                        source={{ uri: photos[idx]! }}
                        style={styles.photo}
                      />
                      <TouchableOpacity
                        style={[styles.addBtn, styles.removeBtn]}
                        onPress={() => handleRemovePhoto(idx)}
                      >
                        <Text variant="semiBold" size="sm" style={{ color: "#3C444F" }}>
                          ×
                        </Text>
                      </TouchableOpacity>
                    </View>
                  ) : (
                    <TouchableOpacity
                      style={styles.addBtn}
                      onPress={() => handleAddPhoto(idx)}
                    >
                      <Text variant="regular" size="sm">+</Text>
                    </TouchableOpacity>
                  )}
                </View>
              );
            })}
          </View>
        ))}
      </View>
      <View style={styles.tipsContainer}>
        {tips.map((tip, i) => (
          <Text key={i} variant="regular" size="sm" style={{ color: "#bdbdbd", marginBottom: 4 }}>
            • {tip}
          </Text>
        ))}
      </View>
      <Button
        title="next"
        onPress={() => {
          router.replace("/auth/onboarding/terms-and-condition");
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
  },
  gridContainer: {
    marginBottom: 24,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  photoSlot: {
    height: 137,
    width: 105.46,
    backgroundColor: "#222222",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 4,
    position: "relative",
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: "#474747",
  },
  addBtn: {
    position: "absolute",
    width: 25,
    height: 25,
    borderRadius: 20,
    backgroundColor: "#B4A4FD",
    borderWidth: 1,
    display: "flex",
    borderColor: "white",
    justifyContent: "center",
    alignItems: "center",
    bottom: -5,
    right: -5,
  },
  photo: {
    height: 137,
    width: 105.46,
    borderRadius: 12,
    objectFit: "cover",
    borderWidth: 1,
    borderColor: "#3C444F",
  },
  removeBtn: {
    backgroundColor: "#FFFFFF",
    borderColor: "#3C444F",
    borderWidth: 1,
  },
  tipsContainer: {
    marginBottom: 32,
  },
  nextBtn: {
    marginTop: "auto",
    marginBottom: 40,
    marginHorizontal: "auto",
    minWidth: "100%",
  },
  nextBtnText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "lowercase",
  },
});

export default UploadImage;
