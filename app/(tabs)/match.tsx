/** @format */

import ScreenLayout from "@/components/layouts/ScreenLayout";
import { BlurView } from "expo-blur";
import React from "react";
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const match = () => {

  const handleProfilePress = () => {

  }

  return (
    <ScreenLayout>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Image
            source={require("../../assets/icons/left.png")}
            style={[styles.icon, { tintColor: "#FFF" }]}
          />
          <Text style={styles.heading}>Liked You</Text>
          <Image
            source={require("../../assets/icons/filter.png")}
            style={styles.icon}
          />
        </View>

        <View style={{ marginTop: "6%" }}>
          <FlatList
            horizontal
            data={[1, 1, 1, 1, 1, 1, 1, 1, 1, 1]}
            renderItem={() => {
              return (
                <View style={styles.catContainer}>
                  <Text style={styles.catText}>Recent 50+</Text>
                </View>
              );
            }}
          />
        </View>

        <View
          style={{
            marginTop: "5%",
            marginHorizontal: "2%",
            alignSelf: "center",
          }}>
          <FlatList
            numColumns={2}
            data={[1, 1, 1, 1, 1, 1]}
            keyExtractor={(_, index) => index.toString()}
            renderItem={() => (
              // <View style={styles.cardWrapper}>
                <TouchableOpacity onPress={handleProfilePress} activeOpacity={0.8} style={styles.cardContainer}>
                  <Image
                    source={{
                      uri: "https://i.pinimg.com/1200x/da/f7/6f/daf76f8ab85f4539651cc9150358a9be.jpg",
                    }}
                    style={styles.image}
                  />

                  {/* Heart Icon */}
                  <Image
                    source={require("../../assets/icons/heart.png")}
                    style={[styles.icon, {tintColor: '#FFF', position: 'absolute', top: 18, right: 15}]}
                  />

                  {/* Blur View */}
                  <BlurView intensity={40} tint='dark' style={styles.blurView}>
                    <View style={styles.blurTextContainer}>
                      <Text style={styles.blurText}>Physics</Text>
                      <Text style={styles.blurText}>English</Text>
                    </View>
                    <Text style={[styles.heading, {marginTop: 4, marginLeft: '1.5%'}]}>Alisha . 25</Text>
                  </BlurView>
                </TouchableOpacity>
              // </View>
            )}
          />
        </View>
      </ScrollView>
    </ScreenLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: "5%",
    marginHorizontal: "3%",
    justifyContent: "space-between",
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: "#7E60FB",
  },
  heading: {
    fontSize: 17,
    fontWeight: "500",
    color: "#FFF",
  },
  catContainer: {
    width: 120,
    height: 30,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
    backgroundColor: "#0a0907",
  },
  catText: {
    fontSize: 15,
    fontWeight: "500",
    color: "#FFF",
    opacity: 0.5,
  },
  cardContainer: {
    width: "45%",
    height: 200,
    borderRadius: 15,
    margin: 10,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 15,
  },
  blurView: {
    position: "absolute",
    bottom: 0,
    height: 60,
    width: "100%",
    justifyContent: "center",
    paddingHorizontal: 15,
  },
  cardWrapper: {
    flex: 1,
    margin: 8,
  },
  blurText: {
    color: "#fff",
    fontWeight: '500',
    fontSize: 14,
    borderWidth: 1,
    borderColor: '#FFF',
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 3,
    backgroundColor: '#525151'
  },
  blurTextContainer: {
    flexDirection: 'row',
    marginHorizontal: '1%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '1%'
  }
});
export default match;
