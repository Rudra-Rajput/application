import React from 'react';
import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const ProfileDetails = () => {
  return (
    <ScrollView style={styles.container}>
       <View style={styles.header}>
          <View style={styles.iconContainer}>
             <Image source={require('../../assets/icons/left.png')} style={styles.icon}/>
          </View>
          <View style={styles.distContainer}>
             <Text style={styles.distText}>15 Km away</Text>
          </View>
       </View>

        <View style={styles.imageContainer}>
           <Image source={require('../../assets/images/girl.jpg')} style={styles.image}/>  
        </View>

        <View style={styles.box}>
           <View style={styles.nameContainer}>
              <Text style={styles.name}>Riya Shah . 25</Text>
           <TouchableOpacity>
             <Image source={require('../../assets/icons/dots.png')} style={styles.icon}/>
           </TouchableOpacity>
           </View>
           <View style={{marginLeft: '4%', marginTop: '1%'}}>
              <Text style={styles.text}>{'♀️'} {'She/Her'}</Text>
              <Text style={styles.text}>{'📍'} {'Bhopal Madhya Pradesh'}</Text>
              <Text style={styles.text}>{'🌐'} {'125 miles away'}</Text>
           </View>
           <View style={styles.line}></View>
           <View style={{marginLeft: '5%'}}>
              <Text style={styles.name}>About Me</Text>
           </View>
           <View style={styles.bioContainer}>
              <Text style={styles.bio}>Relaxing and planning my next trip. food is my ultimate goal</Text>
           </View>

           <View style={styles.line}></View>
           <View style={{marginLeft: '5%'}}>
              <Text style={styles.name}>Interest</Text>
           </View>

           <View style={styles.categoryContainer}>
              <FlatList scrollEnabled={false} numColumns={3} data={[1,1,1,1,1,1]} renderItem={() => {
                return(
                   <View style={styles.catItems}>
                      <Image source={require('../../assets/icons/star.png')} style={{width: 13, height: 13, tintColor: '#FFF'}}/>
                      <Text style={[styles.bio, {fontSize: 12}]}>Gaming</Text>
                   </View> 
                )
              }}/>
           </View>

           <View style={styles.line}></View>
           <View style={{marginLeft: '5%'}}>
              <Text style={styles.name}>Looking For</Text>
           </View>
           <View style={styles.categoryContainer}>
              <FlatList scrollEnabled={false} numColumns={3} data={[1,1,1,1,1]} renderItem={() => {
                return(
                   <View style={styles.catItems}>
                      <Image source={require('../../assets/icons/star.png')} style={{width: 13, height: 13, tintColor: '#FFF'}}/>
                      <Text style={[styles.bio, {fontSize: 12}]}>Empathy</Text>
                   </View> 
                )
              }}/>
           </View>

           <View style={styles.line}></View>
           <View style={{marginLeft: '5%'}}>
              <Text style={styles.name}>Lifestyle</Text>
           </View>
           <View style={styles.categoryContainer}>
              <FlatList scrollEnabled={false} numColumns={3} data={[1,1,1,1,1]} renderItem={() => {
                return(
                   <View style={styles.catItems}>
                      <Image source={require('../../assets/icons/star.png')} style={{width: 13, height: 13, tintColor: '#FFF'}}/>
                      <Text style={[styles.bio, {fontSize: 12}]}>Foodie</Text>
                   </View> 
                )
              }}/>
           </View>

        </View>

    </ScrollView>
  )
}

export default ProfileDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '10%'
  },
  iconContainer: {
    width: 35,
    height: 35,
    borderRadius: 35,
    backgroundColor: '#7E60FB',
    marginLeft: '5%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: '#FFF'
  },
  distContainer: {
    width: 90,
    height: 30,
    backgroundColor: '#5c5857',
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  distText: {
    color: '#FFF',
    fontWeight: '500',
    fontSize: 13,
    opacity: 0.7
  },
  imageContainer: {},
  image: {
    width: '100%',
    height: 400
  },
  box: {
    width: '100%',
    backgroundColor: '#212121',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingBottom: 15
  },
  nameContainer: {
    marginTop: '5%',
    marginHorizontal: '5%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  name: {
    fontSize: 20, fontWeight: '600',
    color: '#FFF',
    opacity: 0.8
  },
  text: {
    color: '#FFF',
    fontWeight: '500',
    fontSize: 14,
    marginTop: 7,
    letterSpacing: 1
  },
  line: {
    width: '100%',
    height: 1.5,
    backgroundColor: '#3b3a3a',
    marginVertical: '5%'
  },
  bioContainer: {
    marginHorizontal: '5%',
    borderWidth: 1,
    borderColor: '#3b3a3a',
    height: 100,
    borderRadius: 17,
    marginTop: '3%'
  },
  bio: {
    color: '#FFF',
    opacity: 0.7,
    marginTop: '3%',
    marginHorizontal: '5%',
    fontSize: 15,
    letterSpacing: 1
  },
  categoryContainer: {
    marginTop: '2%',
    alignSelf: 'center',
    height: 100
  },
  catItems: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderWidth: 1,
    margin: '2%',
    paddingVertical: 5,
    borderColor: '#3b3a3a',
    borderRadius: 8,
    paddingHorizontal: 5
  }
})