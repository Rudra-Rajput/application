import ScreenLayout from '@/components/layouts/ScreenLayout'
import React from 'react'
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const plans = () => {
  return (
    <ScreenLayout>
        <View style={styles.container}>
            
         <View style={styles.header}>
            <Image source={require('../../assets/icons/left.png')} style={styles.icon}/>
            <Image source={require('../../assets/images/logo.png')} style={styles.logo}/>
         </View>

         <View style={{marginHorizontal: '5%'}}>
            <Text style={styles.heading}>
               See who like,s you and match with them instantly with FRIENDS360 GOLD.
            </Text>
            <Text style={styles.text}>Select a plan</Text>
         </View>

          <View style={{ marginTop: '3%', marginHorizontal: '3%'}}>
            <FlatList keyExtractor={(item, index) => index.toString()} horizontal={true} showsHorizontalScrollIndicator={false} data={[1,1,1,1]} renderItem={() => {
            return(
              <View style={styles.planBox}>
                 <View style={styles.boxItem}>
                    <View style={{marginTop: '25%'}}>
                      <Text style={styles.bigText}>1 month</Text>
                    </View>
                    <Image source={require('../../assets/icons/check.png')} style={[styles.icon, {tintColor: "#96832a", marginTop: '3%'}]}/>
                 </View>
                 <View style={{position: "absolute", left: 20, bottom: 10}}>
                   <Text style={[styles.text, {marginTop: 0}]}>₹550.75/mth</Text>
                 </View>
              </View>
            )
          }}/>  
          </View>

          <View style={styles.featuresBox}>
             <View style={styles.featuresBoxItem}>
               <Text style={[styles.text, {marginTop: 0}]}>Unlimited likes</Text>
               <Image source={require('../../assets/icons/check.png')} style={[styles.icon, {tintColor: "#4d4c4c", marginTop: '0%'}]}/>
             </View>
             <View style={styles.featuresBoxItem}>
               <Text style={[styles.text, {marginTop: 0}]}>See who likes you</Text>
               <Image source={require('../../assets/icons/check.png')} style={{tintColor: "#4d4c4c", width: 17, height: 17}}/>
             </View>
             <View style={styles.featuresBoxItem}>
               <Text style={[styles.text, {marginTop: 0}]}>Unlimited rewinds</Text>
               <Image source={require('../../assets/icons/check.png')} style={{tintColor: "#4d4c4c", width: 17, height: 17}}/>
             </View>
             <View style={styles.featuresBoxItem}>
               <Text style={[styles.text, {marginTop: 0}]}>1 free Boost per month</Text>
               <Image source={require('../../assets/icons/check.png')} style={{tintColor: "#4d4c4c", width: 17, height: 17}}/>
             </View>
          </View>

          <TouchableOpacity activeOpacity={0.7} style={styles.btn}>
              <Text style={styles.btnText}>Continue for R.156</Text>
          </TouchableOpacity>

        </View>
    </ScreenLayout>
  )
}

export default plans

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: -30
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: '3%',
    width: '100%'
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: '#FFF'
  },
  logo: {
    width: 250,
    height: 20,
    resizeMode: 'contain',
    marginLeft: '10%'
  },
  heading: {
    fontSize: 20, 
    fontWeight: 'bold',
    color: '#FFF',
    marginTop: '7%'
  },
  text: {
    color: '#FFF',
    fontSize: 17,
    fontWeight: '500',
    marginTop: '10%'
  },
  planBox: {
    width: 200,
    height: 200,
    margin: 10,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#96832a'
  },
  boxItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-between",
    marginHorizontal: '10%'
  },
  bigText: {
    fontWeight: "bold",
    fontSize: 23,
    color: '#FFF'
  },
  featuresBox: {
    width: '90%',
    alignSelf: 'center',
    marginTop: '5%',
    borderWidth: 1,
    borderColor: '#4d4c4c',
    paddingVertical: 15, borderRadius: 7
  },
  featuresBoxItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: '5%',
    marginTop: '4%'
  },
  btn: {
    width: '90%',
    paddingVertical: 10,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '7%',
    backgroundColor: '#7E60FB',
    alignSelf: 'center'
  },
  btnText: {
    fontWeight: 'bold',
    fontSize: 17,
    color: '#FFF'
  }
})