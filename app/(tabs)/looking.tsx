/** @format */

import ScreenLayout from "@/components/layouts/ScreenLayout";
import React from "react";
import { ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const looking = () => {
  return (
    <ScreenLayout>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.heading}>Looking For</Text>
          <Text style={styles.description}>
            Connect over common ground people who match your vibe
          </Text>
        </View>

        <View style={styles.btnContainer}>
          <Text style={styles.heading}>Study buddies</Text>
          <Text style={styles.btnText}>See more</Text>
        </View>

        <View style={styles.cardContainer}>
          <TouchableOpacity style={styles.card}>
            <ImageBackground
            imageStyle={{borderRadius: 12}}
              style ={styles.cardImage}
              source={{ uri: "https://photosmint.com/wp-content/uploads/aesthetic-hide-face-girl-pic-1.webp"}}
              resizeMode='cover'>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <ImageBackground
            imageStyle={{borderRadius: 12}}
              style ={styles.cardImage}
              source={{ uri: "https://photosmint.com/wp-content/uploads/aesthetic-hide-face-girl-pic-1.webp"}}
              // resizeMode='cover'
              >
            </ImageBackground>
          </TouchableOpacity>
        </View>

        <View style={styles.btnContainer}>
          <Text style={styles.heading}>New in town</Text>
          <Text style={styles.btnText}>See more</Text>
        </View>

         <View style={styles.cardContainer}>
          <TouchableOpacity style={styles.card}>
            <ImageBackground
            imageStyle={{borderRadius: 12}}
              style ={styles.cardImage}
              source={{ uri: "https://photosmint.com/wp-content/uploads/aesthetic-hide-face-girl-pic-1.webp"}}
              resizeMode='cover'>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <ImageBackground
            imageStyle={{borderRadius: 12}}
              style ={styles.cardImage}
              source={{ uri: "https://photosmint.com/wp-content/uploads/aesthetic-hide-face-girl-pic-1.webp"}}
              >
            </ImageBackground>
          </TouchableOpacity>
        </View>

        <View style={styles.btnContainer}>
          <Text style={styles.heading}>Weekend planner</Text>
          <Text style={styles.btnText}>See more</Text>
        </View>

        <View style={styles.cardContainer}>
          <TouchableOpacity style={styles.card}>
            <ImageBackground
              imageStyle={{borderRadius: 12}}
              style ={styles.cardImage}
              source={{ uri: "https://photosmint.com/wp-content/uploads/aesthetic-hide-face-girl-pic-1.webp"}}
              resizeMode='cover'>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            
            <ImageBackground
              imageStyle={{borderRadius: 12}}
              style ={styles.cardImage}
              source={{ uri: "https://photosmint.com/wp-content/uploads/aesthetic-hide-face-girl-pic-1.webp"}}
              >
            </ImageBackground>
          </TouchableOpacity>
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
    marginTop: "5%",
    marginHorizontal: "5%",
  },
  description: {
    fontSize: 15,
    fontWeight: "500",
    color: "#FFF",
    opacity: 0.5,
    marginTop: "2%",
  },
  heading: {
    fontSize: 18,
    fontWeight: "600",
    color: "#FFF",
  },
  btnContainer: {
    flexDirection: "row",
    marginTop: "6%",
    marginHorizontal: "5%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  btnText: {
    fontSize: 15,
    fontWeight: "500",
    color: "#7E60FB",
  },
  cardContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: "5%",
    marginTop: '4%'
  },
  card: {
    width: "45%",
    height: 200,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  cardImage: {
    width: '98%',
    height: 200,
    borderRadius: 15
  }
});
export default looking;
