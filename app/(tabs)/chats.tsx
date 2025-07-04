import ScreenLayout from '@/components/layouts/ScreenLayout';
import React from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const stories = [
  {
    id: '1',
    image:
      'https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D',
    name: '25 likes',
  },
  {
    id: '2',
    image:
      'https://static.vecteezy.com/system/resources/thumbnails/036/324/708/small/ai-generated-picture-of-a-tiger-walking-in-the-forest-photo.jpg',
    name: 'Ravi',
  },
  {
    id: '3',
    image:
      'https://images.panda.org/assets/images/pages/welcome/orangutan_1600x1000_279157.jpg',
    name: 'Neha',
  },
  {
    id: '4',
    image:
      'https://media.istockphoto.com/id/2192727607/photo/young-woman-in-vr-environment.jpg?s=612x612&w=0&k=20&c=itKyiHS5YNEHJ42waGdolk-7hdNQSQeldDq8amXhyA8=',
    name: 'Aryan',
  },
  {
    id: '5',
    image:
      'https://www.befunky.com/images/prismic/0d88c466-8c06-4ddc-8534-1047b109136d_features-background-remover4.png?auto=avif,webp&format=jpg&width=581',
    name: 'Meera',
  },
  {
    id: '6',
    image:
      'https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D',
    name: 'Rustam',
  },
];

const Chats = () => {
  const renderStory = ({ item }: { item: typeof stories[0] }) => (
    <View style={styles.storyContainer}>
      <View style={styles.storyCircle}>
        <Image source={{ uri: item.image }} style={styles.storyImage} />
      </View>
      <Text style={styles.storyName}>{item.name}</Text>
    </View>
  );

  return (
    <ScreenLayout>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        nestedScrollEnabled={true}
      >
        <View style={styles.header}>
          <Image
            source={require('../../assets/images/icon.png')}
            style={styles.logo}
          />
          <View style={styles.circle}>
            <Image
              source={require('../../assets/icons/search.png')}
              style={styles.icon}
            />
          </View>
        </View>

        <View style={styles.titleRow}>
          <Text style={styles.text}>New Matches</Text>
          <View style={styles.smallCircle}>
            <Text style={styles.numberText}>5</Text>
          </View>
        </View>

        <FlatList
          data={stories}
          renderItem={renderStory}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          scrollEnabled={true}
          contentContainerStyle={styles.storyList}
        />

        <View style={styles.titleRow}>
          <Text style={styles.text}>Messages</Text>
          <View style={styles.smallCircle}>
            <Text style={styles.numberText}>3</Text>
          </View>
        </View>

        <View style={{marginTop: '3%', marginHorizontal: '4%'}}>
           <FlatList data={[1,1,1]} renderItem={() => {
            return(
              <View style={styles.messageContainer}>
                 <View>
                    <Image source={{uri: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D'}} style={styles.dp}/>
                 </View>
                 <View style={{marginLeft: '5%'}}>
                   <Text style={styles.storyName}>Sachin Singh</Text>
                   <Text style={styles.status}>Recently Active, Match now.</Text>
                 </View>
              </View>
            )
           }}/> 
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
    marginTop: '5%',
    marginHorizontal: '4%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    height: 35,
    width: 100,
  },
  icon: {
    width: 18,
    height: 18,
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 30,
    backgroundColor: '#7E60FB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleRow: {
    marginHorizontal: '6%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '4%',
  },
  text: {
    fontSize: 14,
    fontWeight: '500',
    color: '#FFF',
  },
  smallCircle: {
    marginLeft: '2%',
    backgroundColor: 'red',
    width: 15,
    height: 15,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  numberText: {
    color: '#FFF',
    fontWeight: '500',
    fontSize: 10,
  },
  storyList: {
    marginTop: 15,
    paddingHorizontal: 15,
  },
  storyContainer: {
    alignItems: 'center',
    marginRight: 15,
  },
  storyCircle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    padding: 3,
    borderWidth: 2,
    borderColor: '#c13584',
    justifyContent: 'center',
    alignItems: 'center',
  },
  storyImage: {
    width: 62,
    height: 62,
    borderRadius: 31,
  },
  storyName: {
    marginTop: 6,
    fontSize: 12,
    color: '#fff',
  },
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10
  },
  dp: {
    width: 70, height: 70, borderRadius: 70
  },
  status: {
    fontSize: 13, fontWeight: '500', color: '#FFF',
    opacity: .5
  }
});

export default Chats;
