/** @format */

import ScreenLayout from "@/components/layouts/ScreenLayout";
import React, { useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewToken,
} from "react-native";

const { width, height } = Dimensions.get("window");

const slides = [
  {
    id: "1",
    title: "Riya Shah . 25",
    subtitle: "📍 Bhopal Madhya Pradesh",
    image:
      "https://images.pexels.com/photos/15169364/pexels-photo-15169364/free-photo-of-woman-on-black-background.jpeg",
  },
  {
    id: "2",
    title: "Riya Shah . 25",
    subtitle: "📍 Bhopal Madhya Pradesh",
    image: "https://images.pexels.com/photos/2831940/pexels-photo-2831940.jpeg",
  },
  {
    id: "3",
    title: "Riya Shah . 25",
    subtitle: "📍 Bhopal Madhya Pradesh",
    image:
      "https://images.pexels.com/photos/12998532/pexels-photo-12998532.jpeg",
  },
];

const editprofile = () => {
  const [selected, setSelected] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const onViewRef = useRef(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      if (viewableItems.length > 0) {
        setCurrentIndex(viewableItems[0].index ?? 0);
      }
    }
  );

  const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 });

  return (
    <ScreenLayout>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            source={require("../../../assets/icons/left.png")}
            style={styles.icon}
          />
          <Text style={styles.headerText}>Edit Profile</Text>
          <Text style={styles.headerText2}>Done</Text>
        </View>

        <View style={styles.btnContainer}>
          <TouchableOpacity onPress={() => setSelected(0)}>
            <Text style={[styles.headerText, { color: selected === 0 ? "#7E60FB" : "#9c9c9c" }]}>Edit</Text>
          </TouchableOpacity>
          <View style={styles.verticleLine}></View>
          <TouchableOpacity onPress={() => setSelected(1)}>
            <Text style={[styles.headerText, { color: selected === 1 ? "#7E60FB" : "#9c9c9c" }]}>
              Preview
            </Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.horizontalLine, {height: selected === 1 ? 0 : 1.5}]}></View>

        {selected === 0 ? (
          //Edit Screen
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ flex: 1, marginTop: "5%" }}>
            <View style={{ marginLeft: "3%" }}>
              <Text style={styles.headerText}>Relationship type</Text>
            </View>

            <View style={styles.section}>
              <View style={styles.sectionItem}>
                <Image
                  source={require("../../../assets/icons/star.png")}
                  style={styles.icon}
                />
                <Text
                  style={[
                    styles.headerText,
                    { marginLeft: "10%", fontSize: 16 },
                  ]}>
                  Open It:
                </Text>
              </View>
              <View style={styles.sectionItem}>
                <Text
                  style={[styles.headerText, { fontSize: 16, opacity: 0.7 }]}>
                  Add
                </Text>
                <Image
                  source={require("../../../assets/icons/right.png")}
                  style={[styles.icon, { marginLeft: 10 }]}
                />
              </View>
            </View>

            <View
              style={{
                height: 50,
                backgroundColor: "#7E60FB",
                justifyContent: "center",
                paddingLeft: "3%",
              }}>
              <Text style={styles.headerText}>Languages i know</Text>
            </View>

            <View style={[styles.section, { marginTop: 0 }]}>
              <View style={styles.sectionItem}>
                <Image
                  source={require("../../../assets/icons/star.png")}
                  style={styles.icon}
                />
                <Text
                  style={[
                    styles.headerText,
                    { marginLeft: "10%", fontSize: 16 },
                  ]}>
                  Add languages:
                </Text>
              </View>
              <View style={styles.sectionItem}>
                <Text
                  style={[styles.headerText, { fontSize: 16, opacity: 0.7 }]}>
                  Add
                </Text>
                <Image
                  source={require("../../../assets/icons/right.png")}
                  style={[styles.icon, { marginLeft: 10 }]}
                />
              </View>
            </View>

            <View
              style={{
                height: 50,
                backgroundColor: "#7E60FB",
                justifyContent: "center",
                paddingLeft: "3%",
              }}>
              <Text style={styles.headerText}>More about me</Text>
            </View>

            <View style={[styles.section, { marginTop: 0 }]}>
              <View style={styles.sectionItem}>
                <Image
                  source={require("../../../assets/icons/star.png")}
                  style={styles.icon}
                />
                <Text
                  style={[
                    styles.headerText,
                    { marginLeft: "10%", fontSize: 16 },
                  ]}>
                  Zodiac:
                </Text>
              </View>
              <View style={styles.sectionItem}>
                <Text
                  style={[styles.headerText, { fontSize: 16, opacity: 0.7 }]}>
                  Add
                </Text>
                <Image
                  source={require("../../../assets/icons/right.png")}
                  style={[styles.icon, { marginLeft: 10 }]}
                />
              </View>
            </View>

            <View style={[styles.section, { marginTop: 0 }]}>
              <View style={styles.sectionItem}>
                <Image
                  source={require("../../../assets/icons/star.png")}
                  style={styles.icon}
                />
                <Text
                  style={[
                    styles.headerText,
                    { marginLeft: "10%", fontSize: 16 },
                  ]}>
                  Educatio:
                </Text>
              </View>
              <View style={styles.sectionItem}>
                <Text
                  style={[styles.headerText, { fontSize: 16, opacity: 0.7 }]}>
                  Add
                </Text>
                <Image
                  source={require("../../../assets/icons/right.png")}
                  style={[styles.icon, { marginLeft: 10 }]}
                />
              </View>
            </View>

            <View
              style={[
                styles.section,
                { marginTop: 0, borderTopWidth: 1, borderColor: "#262626" },
              ]}>
              <View style={styles.sectionItem}>
                <Image
                  source={require("../../../assets/icons/star.png")}
                  style={styles.icon}
                />
                <Text
                  style={[
                    styles.headerText,
                    { marginLeft: "10%", fontSize: 16 },
                  ]}>
                  Family plans:
                </Text>
              </View>
              <View style={styles.sectionItem}>
                <Text
                  style={[styles.headerText, { fontSize: 16, opacity: 0.7 }]}>
                  Add
                </Text>
                <Image
                  source={require("../../../assets/icons/right.png")}
                  style={[styles.icon, { marginLeft: 10 }]}
                />
              </View>
            </View>

            <View
              style={[
                styles.section,
                { marginTop: 0, borderTopWidth: 1, borderColor: "#262626" },
              ]}>
              <View style={styles.sectionItem}>
                <Image
                  source={require("../../../assets/icons/star.png")}
                  style={styles.icon}
                />
                <Text
                  style={[
                    styles.headerText,
                    { marginLeft: "10%", fontSize: 16 },
                  ]}>
                  COVID vaccine:
                </Text>
              </View>
              <View style={styles.sectionItem}>
                <Text
                  style={[styles.headerText, { fontSize: 16, opacity: 0.7 }]}>
                  Add
                </Text>
                <Image
                  source={require("../../../assets/icons/right.png")}
                  style={[styles.icon, { marginLeft: 10 }]}
                />
              </View>
            </View>

            <View
              style={[
                styles.section,
                { marginTop: 0, borderTopWidth: 1, borderColor: "#262626" },
              ]}>
              <View style={styles.sectionItem}>
                <Image
                  source={require("../../../assets/icons/star.png")}
                  style={styles.icon}
                />
                <Text
                  style={[
                    styles.headerText,
                    { marginLeft: "10%", fontSize: 16 },
                  ]}>
                  Personality type:
                </Text>
              </View>
              <View style={styles.sectionItem}>
                <Text
                  style={[styles.headerText, { fontSize: 16, opacity: 0.7 }]}>
                  Add
                </Text>
                <Image
                  source={require("../../../assets/icons/right.png")}
                  style={[styles.icon, { marginLeft: 10 }]}
                />
              </View>
            </View>

            <View
              style={[
                styles.section,
                { marginTop: 0, borderTopWidth: 1, borderColor: "#262626" },
              ]}>
              <View style={styles.sectionItem}>
                <Image
                  source={require("../../../assets/icons/star.png")}
                  style={styles.icon}
                />
                <Text
                  style={[
                    styles.headerText,
                    { marginLeft: "10%", fontSize: 16 },
                  ]}>
                  Communication style:
                </Text>
              </View>
              <View style={styles.sectionItem}>
                <Text
                  style={[styles.headerText, { fontSize: 16, opacity: 0.7 }]}>
                  Add
                </Text>
                <Image
                  source={require("../../../assets/icons/right.png")}
                  style={[styles.icon, { marginLeft: 10 }]}
                />
              </View>
            </View>

            <View
              style={[
                styles.section,
                { marginTop: 0, borderTopWidth: 1, borderColor: "#262626" },
              ]}>
              <View style={styles.sectionItem}>
                <Image
                  source={require("../../../assets/icons/star.png")}
                  style={styles.icon}
                />
                <Text
                  style={[
                    styles.headerText,
                    { marginLeft: "10%", fontSize: 16 },
                  ]}>
                  Love style:
                </Text>
              </View>
              <View style={styles.sectionItem}>
                <Text
                  style={[styles.headerText, { fontSize: 16, opacity: 0.7 }]}>
                  Add
                </Text>
                <Image
                  source={require("../../../assets/icons/right.png")}
                  style={[styles.icon, { marginLeft: 10 }]}
                />
              </View>
            </View>

            <View
              style={{
                height: 50,
                backgroundColor: "#7E60FB",
                justifyContent: "center",
                paddingLeft: "3%",
              }}>
              <Text style={styles.headerText}>Lifestyle</Text>
            </View>

            <View
              style={[
                styles.section,
                { marginTop: 0, borderTopWidth: 1, borderColor: "#262626" },
              ]}>
              <View style={styles.sectionItem}>
                <Image
                  source={require("../../../assets/icons/star.png")}
                  style={styles.icon}
                />
                <Text
                  style={[
                    styles.headerText,
                    { marginLeft: "10%", fontSize: 16 },
                  ]}>
                  Pets:
                </Text>
              </View>
              <View style={styles.sectionItem}>
                <Text
                  style={[styles.headerText, { fontSize: 16, opacity: 0.7 }]}>
                  Add
                </Text>
                <Image
                  source={require("../../../assets/icons/right.png")}
                  style={[styles.icon, { marginLeft: 10 }]}
                />
              </View>
            </View>

            <View
              style={[
                styles.section,
                { marginTop: 0, borderTopWidth: 1, borderColor: "#262626" },
              ]}>
              <View style={styles.sectionItem}>
                <Image
                  source={require("../../../assets/icons/star.png")}
                  style={styles.icon}
                />
                <Text
                  style={[
                    styles.headerText,
                    { marginLeft: "10%", fontSize: 16 },
                  ]}>
                  Drinking:
                </Text>
              </View>
              <View style={styles.sectionItem}>
                <Text
                  style={[styles.headerText, { fontSize: 16, opacity: 0.7 }]}>
                  Add
                </Text>
                <Image
                  source={require("../../../assets/icons/right.png")}
                  style={[styles.icon, { marginLeft: 10 }]}
                />
              </View>
            </View>
          </ScrollView>
        ) : (
          //Preview Screen
          <View style={{ flex: 1 }}>
            {/* Dot Indicators on Top */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                marginTop: 40,
                position: "absolute",
                top: 0,
                width: "100%",
                zIndex: 1,
              }}>
              {slides.map((_, index) => (
                <View
                  key={index}
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    marginHorizontal: 5,
                    backgroundColor: index === currentIndex ? "#fff" : "#999",
                  }}
                />
              ))}
            </View>

            {/* FlatList Slider */}
            <FlatList
              data={slides}
              horizontal
              pagingEnabled
              keyExtractor={(item) => item.id}
              showsHorizontalScrollIndicator={false}
              onViewableItemsChanged={onViewRef.current}
              viewabilityConfig={viewConfigRef.current}
              renderItem={({ item }) => (
                <ImageBackground
                  source={{ uri: item.image }}
                  style={styles.slide}
                  imageStyle={{borderTopLeftRadius: 40, borderTopRightRadius: 40}}
                  resizeMode='cover'>
                  <View style={styles.overlay}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.subtitle}>{item.subtitle}</Text>
                  </View>
                </ImageBackground>
              )}
            />
          </View>
        )}
      </View>
    </ScreenLayout>
  );
};

export default editprofile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginHorizontal: "3%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: "#FFF",
  },
  headerText: {
    fontSize: 18,
    fontWeight: "500",
    color: "#FFF",
  },
  headerText2: {
    fontSize: 15,
    fontWeight: "500",
    color: "#7E60FB",
  },
  btnContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginHorizontal: "3%",
    marginTop: "8%",
  },
  verticleLine: {
    width: 1.5,
    height: 50,
    backgroundColor: "#5c5857",
  },
  horizontalLine: {
    width: "97%",
    height: 1.5,
    backgroundColor: "#5c5857",
    alignSelf: "center",
  },
  section: {
    height: 50,
    backgroundColor: "#111212",
    marginTop: "5%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  sectionItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  slide: {
    width,
    height: '100%',
    justifyContent: "flex-end",
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
  },
  title: {
    fontSize: 26,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: "#ddd",
  },
});
