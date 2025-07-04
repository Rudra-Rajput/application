import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";

const EDUCATION_OPTIONS = [
  "High School",
  "In College",
  "Bachelors",
  "Masters",
  "Home Schooled",
  "In Course",
  "Chilling",
  "Educated by internet",
  "PhD",
];
const COMMUNICATION_OPTIONS = [
  "On call",
  "Text only",
  "Video call",
  "Better in person",
  "Text & Call",
  "only meme share",
  "Text & Video call",
];
const ZODIAC_OPTIONS = [
  "Capricorn",
  "Aquarius",
  "Pisces",
  "Aries",
  "Taurus",
  "Leo",
  "Virgo",
  "Gemini",
  "Libra",
  "Cancer",
];
const HABITS_ROUTINE = [
  "Early bird",
  "Night owl",
  "Morning person",
  "Evening person",
  "meditation",
  "journaling",
  "Chilling",
  "Exercise frequency",
  "Exercise rarely",
  "vegan",
  "Non-vegetarian",
  "Smoking",
  "Drinking",
  "Party",
  "Clubbing",
];

const PETS = [
  "Dog person",
  "Cat person",
  "Bird",
  "Hamster",
  "Fish",
  "Turtle",
  "Not a pet person",
  "Want a pet",
  "Other",
];
const GAMING = [
  "Candy Crush",
  "The Last Of Us",
  "PUBG",
  "Call of Duty",
  "Fortnite",
  "Minecraft",
  "Roblox",
  "Among Us",
  "GTA",
  "FIFA",
  "NBA 2K",
];

const BOOK_COMIC = [
  "Marvel",
  "DC",
  "Harry Potter",
  "Lord of the Rings",
  "The Hobbit",
];
const InterestsStep1 = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [education, setEducation] = useState<string[]>([]);
  const [communication, setCommunication] = useState<string[]>([]);
  const [zodiac, setZodiac] = useState<string[]>([]);
  const [habits, setHabits] = useState<string[]>([]);
  const [pets, setPets] = useState<string[]>([]);
  const [gaming, setGaming] = useState<string[]>([]);
  const [books, setBooks] = useState<string[]>([]);
  const router = useRouter();

  const toggle = (
    arr: string[],
    setArr: (v: string[]) => void,
    value: string
  ) => {
    setArr(
      arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value]
    );
  };

  const handleNext = () => {
    if (currentStep < 7) {
      setCurrentStep(currentStep + 1);
    } else {
      router.replace("/auth/onboarding/upload-image");
    }
  };

  const handleSkip = () => {
    router.replace("/auth/onboarding/upload-image");
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <View style={styles.stepContainer}>
            <Text style={styles.sectionLabel}>🎓 Education</Text>
            <View style={styles.chipGroup}>
              {EDUCATION_OPTIONS.map((option) => (
                <TouchableOpacity
                  key={option}
                  style={[
                    styles.chip,
                    education.includes(option) && styles.chipSelected,
                  ]}
                  onPress={() => toggle(education, setEducation, option)}
                  activeOpacity={0.8}
                >
                  <Text
                    style={[
                      styles.chipText,
                      education.includes(option) && styles.chipTextSelected,
                    ]}
                  >
                    {option}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        );
      case 2:
        return (
          <View style={styles.stepContainer}>
            <Text style={styles.sectionLabel}>📞 Communication style</Text>
            <View style={styles.chipGroup}>
              {COMMUNICATION_OPTIONS.map((option) => (
                <TouchableOpacity
                  key={option}
                  style={[
                    styles.chip,
                    communication.includes(option) && styles.chipSelected,
                  ]}
                  onPress={() =>
                    toggle(communication, setCommunication, option)
                  }
                  activeOpacity={0.8}
                >
                  <Text
                    style={[
                      styles.chipText,
                      communication.includes(option) && styles.chipTextSelected,
                    ]}
                  >
                    {option}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        );
      case 3:
        return (
          <View style={styles.stepContainer}>
            <Text style={styles.sectionLabel}>🪐 Zodiac sign</Text>
            <View style={styles.chipGroup}>
              {ZODIAC_OPTIONS.map((option) => (
                <TouchableOpacity
                  key={option}
                  style={[
                    styles.chip,
                    zodiac.includes(option) && styles.chipSelected,
                  ]}
                  onPress={() => toggle(zodiac, setZodiac, option)}
                  activeOpacity={0.8}
                >
                  <Text
                    style={[
                      styles.chipText,
                      zodiac.includes(option) && styles.chipTextSelected,
                    ]}
                  >
                    {option}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        );
      case 4:
        return (
          <View style={styles.stepContainer}>
            <Text style={styles.sectionLabel}>🌙 Habits & Routine</Text>
            <View style={styles.chipGroup}>
              {HABITS_ROUTINE.map((option) => (
                <TouchableOpacity
                  key={option}
                  style={[
                    styles.chip,
                    habits.includes(option) && styles.chipSelected,
                  ]}
                  onPress={() => toggle(habits, setHabits, option)}
                  activeOpacity={0.8}
                >
                  <Text
                    style={[
                      styles.chipText,
                      habits.includes(option) && styles.chipTextSelected,
                    ]}
                  >
                    {option}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        );
      case 5:
        return (
          <View style={styles.stepContainer}>
            <Text style={styles.sectionLabel}>🐾 Pets</Text>
            <View style={styles.chipGroup}>
              {PETS.map((option) => (
                <TouchableOpacity
                  key={option}
                  style={[
                    styles.chip,
                    pets.includes(option) && styles.chipSelected,
                  ]}
                  onPress={() => toggle(pets, setPets, option)}
                  activeOpacity={0.8}
                >
                  <Text
                    style={[
                      styles.chipText,
                      pets.includes(option) && styles.chipTextSelected,
                    ]}
                  >
                    {option}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        );
      case 6:
        return (
          <View style={styles.stepContainer}>
            <Text style={styles.sectionLabel}>🎮 Gaming</Text>
            <View style={styles.chipGroup}>
              {GAMING.map((option) => (
                <TouchableOpacity
                  key={option}
                  style={[
                    styles.chip,
                    gaming.includes(option) && styles.chipSelected,
                  ]}
                  onPress={() => toggle(gaming, setGaming, option)}
                  activeOpacity={0.8}
                >
                  <Text
                    style={[
                      styles.chipText,
                      gaming.includes(option) && styles.chipTextSelected,
                    ]}
                  >
                    {option}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        );
      case 7:
        return (
          <View style={styles.stepContainer}>
            <Text style={styles.sectionLabel}>📚 Books & Comics</Text>
            <View style={styles.chipGroup}>
              {BOOK_COMIC.map((option) => (
                <TouchableOpacity
                  key={option}
                  style={[
                    styles.chip,
                    books.includes(option) && styles.chipSelected,
                  ]}
                  onPress={() => toggle(books, setBooks, option)}
                  activeOpacity={0.8}
                >
                  <Text
                    style={[
                      styles.chipText,
                      books.includes(option) && styles.chipTextSelected,
                    ]}
                  >
                    {option}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Text style={styles.title}>What defines you?</Text>
          <Text style={styles.subtitle}>
            Choose your interests to help us find better matches.
          </Text>
        </View>
        {renderStep()}
      </ScrollView>
      <View style={styles.footer}>
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
            <Text style={styles.nextBtnText}>Next ({currentStep}/7)</Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity style={styles.skipBtn} onPress={handleSkip}>
          <Text style={styles.skipText}>skip</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#000",
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 24,
  },
  header: {
    // paddingHorizontal: 24,
    paddingTop: 20,
    marginBottom: 24,
  },
  title: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "700",
    marginBottom: 8,
  },
  subtitle: {
    color: "#B0AEB8",
    fontSize: 15,
    lineHeight: 22,
  },
  stepContainer: {
    // paddingHorizontal: 24,
  },
  sectionLabel: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 16,
  },
  chipGroup: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: -4,
  },
  chip: {
    borderWidth: 1,
    borderColor: "#35343A",
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 18,
    margin: 4,
    backgroundColor: "#232228",
  },
  chipSelected: {
    borderColor: "#7F5CFF",
    backgroundColor: "#7F5CFF33",
  },
  chipText: {
    color: "#B0AEB8",
    fontSize: 15,
  },
  chipTextSelected: {
    color: "#fff",
    fontWeight: "600",
  },
  footer: {
    // paddingHorizontal: 24,
    marginBottom: 40,
    // backgroundColor: "#000",
  },
  nextBtn: {
    width: "100%",
    marginBottom: 12,
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
  skipBtn: {
    width: "100%",
    alignItems: "center",
  },
  skipText: {
    color: "#fff",
    opacity: 0.8,
    fontSize: 16,
  },
});

export default InterestsStep1;
