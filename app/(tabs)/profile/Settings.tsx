/** @format */

import ScreenLayout from "@/components/layouts/ScreenLayout";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Settings = () => {
  return (
    <ScreenLayout>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            source={require("../../assets/icons/left.png")}
            style={styles.icon}
          />
          <Text style={styles.headerText}>Settings</Text>
        </View>

        <View style={styles.box}>
          <View style={styles.starContainer}>
            <Image
              source={require("../../assets/icons/star.png")}
              style={styles.icon}
            />
          </View>
          <Text
            style={[
              styles.headerText,
              { marginLeft: "0%", textAlign: "center", letterSpacing: 0.5 },
            ]}>
            0 remaining
          </Text>
          <Text
            style={[
              styles.text,
              {
                marginLeft: "0%",
                textAlign: "center",
                letterSpacing: 0.5,
                marginTop: "2%",
              },
            ]}>
            Get more Boosts
          </Text>
        </View>

        <View style={{ marginTop: "5%", marginLeft: "5%" }}>
          <Text style={[styles.headerText, { marginLeft: 0, opacity: 0.7 }]}>
            Account settings
          </Text>
        </View>

        <View style={styles.bottomBox}>
          <TouchableOpacity style={styles.btnContainer}>
            <View style={styles.btn}>
              <Image
                source={require("../../assets/icons/camera.png")}
                style={styles.btnIcon}
              />
              <Text style={styles.btnText}>Manage Payment Account</Text>
            </View>
            <View>
              <Image
                source={require("../../assets/icons/right.png")}
                style={styles.btnIcon}
              />
            </View>
          </TouchableOpacity>
          <View style={styles.line}></View>
          <TouchableOpacity style={[styles.btnContainer]}>
            <View style={styles.btn}>
              <Image
                source={require("../../assets/icons/camera.png")}
                style={styles.btnIcon}
              />
              <Text style={styles.btnText}>Restore Purchases</Text>
            </View>
            <View>
              <Image
                source={require("../../assets/icons/right.png")}
                style={styles.btnIcon}
              />
            </View>
          </TouchableOpacity>
          <View style={styles.line}></View>
          <TouchableOpacity style={styles.btnContainer}>
            <View style={styles.btn}>
              <Image
                source={require("../../assets/icons/camera.png")}
                style={styles.btnIcon}
              />
              <Text style={styles.btnText}>Email : rudrarajput9555@gmail.com</Text>
            </View>
            <View>
              <Image
                source={require("../../assets/icons/right.png")}
                style={styles.btnIcon}
              />
            </View>
          </TouchableOpacity>
          <View style={styles.line}></View>
          <TouchableOpacity style={styles.btnContainer}>
            <View style={styles.btn}>
              <Image
                source={require("../../assets/icons/camera.png")}
                style={styles.btnIcon}
              />
              <Text style={styles.btnText}>Phone Number : 9555123085</Text>
            </View>
            <View>
              <Image
                source={require("../../assets/icons/right.png")}
                style={styles.btnIcon}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenLayout>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginTop: "5%",
    marginHorizontal: "5%",
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    width: 25,
    height: 25,
    tintColor: "#FFF",
  },
  headerText: {
    marginLeft: "30%",
    fontSize: 18,
    fontWeight: "600",
    color: "#FFF",
  },
  box: {
    width: "95%",
    alignSelf: "center",
    marginTop: "12%",
    borderWidth: 2,
    borderRadius: 8,
    borderColor: "#3b3a3a",
    height: 110,
    paddingHorizontal: 8,
    backgroundColor: "#000",
    opacity: 0.8,
  },
  starContainer: {
    height: 60,
    width: 60,
    borderRadius: 60,
    backgroundColor: "#7E60FB",
    alignSelf: "center",
    marginTop: "-8%",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#7E60FB",
    fontSize: 13,
    fontWeight: "500",
  },
  bottomBox: {
    marginTop: "3%",
    width: "95%",
    alignSelf: "center",
    borderWidth: 2,
    borderRadius: 8,
    borderColor: "#3b3a3a",
    paddingHorizontal: 8,
    backgroundColor: "#19191a",
    paddingVertical: 12,
  },
  btnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 5
  },
  btnText: {
    color: '#cccac6',
    fontWeight: '500',
    fontSize: 14,
    letterSpacing: .5,
    marginLeft: 15
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  btnIcon: {
    width: 17,
    height: 17,
    tintColor: '#FFF'
  },
  line: {
    width: '100%',
    height: 1.5,
    backgroundColor: '#3b3a3a',
    marginVertical: 12
  }
});
