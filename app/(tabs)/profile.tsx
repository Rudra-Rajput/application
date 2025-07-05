/** @format */

import { useRouter } from 'expo-router';
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ScreenLayout from "../../components/layouts/ScreenLayout";

export default function ProfileScreen() {
  const router = useRouter();
  return (
    <ScreenLayout>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={{uri : 'https://media.istockphoto.com/id/1682296067/photo/happy-studio-portrait-or-professional-man-real-estate-agent-or-asian-businessman-smile-for.jpg?s=612x612&w=0&k=20&c=9zbG2-9fl741fbTWw5fNgcEEe4ll-JegrGlQQ6m54rg='}}
            style={styles.profileImage}
          />
        </View>
        <View style={styles.profilePercentage}>
           <Text style={styles.profilePercentageText}>20% Completed</Text>
        </View>
        <View style={{marginTop: '5%', alignSelf: 'center'}}>
          <Text style={styles.profileName}>Jay Singh . 25</Text>
        </View>
        <View style={styles.btnBox}>
           <TouchableOpacity style={styles.btnContainer}>
              <View style={styles.btn}>
                <Image source={require('../../assets/icons/camera.png')} style={styles.icon}/>
                <Text style={styles.btnText}>Add Media</Text>
              </View>
              <View>
                 <Image source={require('../../assets/icons/right.png')} style={styles.icon}/>
              </View>
           </TouchableOpacity>
           <View style={styles.line}></View>
           <TouchableOpacity onPress={() => router.push('/profile/editprofile')} style={styles.btnContainer}>
              <View style={styles.btn}>
                <Image source={require('../../assets/icons/edit.png')} style={styles.icon}/>
                <Text style={styles.btnText}>Edit Profile</Text>
              </View>
              <View>
                 <Image source={require('../../assets/icons/right.png')} style={styles.icon}/>
              </View>
           </TouchableOpacity>
           <View style={styles.line}></View>
           <TouchableOpacity onPress={() => router.push('/profile/settings')} style={styles.btnContainer}>
              <View style={styles.btn}>
                <Image source={require('../../assets/icons/setting.png')} style={styles.icon}/>
                <Text style={styles.btnText}>Settings</Text>
              </View>
              <View>
                 <Image source={require('../../assets/icons/right.png')} style={styles.icon}/>
              </View>
           </TouchableOpacity>
           <View style={styles.line}></View>
           <TouchableOpacity style={styles.btnContainer}>
              <View style={styles.btn}>
                <Image source={require('../../assets/icons/logout.png')} style={styles.icon}/>
                <Text style={styles.btnText}>Log Out</Text>
              </View>
              <View></View>
           </TouchableOpacity>
        </View>

        <View>
          <Image source={require('../../assets/icons/Frame.png')} style={styles.slideImage}/> 
        </View>

        <TouchableOpacity activeOpacity={0.8} style={styles.planBtn}>
           <Text style={[styles.btnText, { color: '#FFF'}]}>GET FRIENDS360 PLATINUM</Text>
        </TouchableOpacity>

      </View>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    width: 155,
    height: 155,
    marginTop: "15%",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 9999,
    borderWidth: 2,
    borderColor: '#FFF',
    borderStyle: 'dashed'
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 9999,
  },
  profilePercentage: {
    width: 145,
    height: 35,
    backgroundColor: '#7E60FB',
    borderRadius: 20,
    marginTop: '-8%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },
  profilePercentageText: {
    fontWeight: '500',
    fontSize: 14,
    color: '#FFF'
  },
  profileName: {
    fontWeight: '600',
    fontSize: 18,
    color: '#FFF',
    letterSpacing: 1
  },
  btnBox: {
    marginTop: '10%',
    borderWidth: 1,
    borderColor: '#969695',
    borderRadius: 6,
    paddingVertical: 10,
    alignSelf: 'center',
    width: '90%'
  },
  btnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 5
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: '#cccac6'
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
  line: {
    height: 1,
    width: '100%',
    marginVertical: 10,
    backgroundColor: '#969695'
  },
  slideImage: {
    marginTop: '8%',
    width: '80%',
    height: 100,
    alignSelf: 'center'
  },
  planBtn: {
    width: '70%',
    paddingVertical: 10,
    backgroundColor: '#7E60FB',
    borderRadius: 12,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '6%'
  }
});
