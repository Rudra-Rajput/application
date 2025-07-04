import ScreenLayout from '@/components/layouts/ScreenLayout';
import React, { useRef, useState } from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Swiper from 'react-native-deck-swiper';

const { width, height } = Dimensions.get('window');

type CardData = {
  id: string;
  name: string;
  age: number;
  image: string;
};

const DATA: CardData[] = [
  {
    id: '1',
    name: 'Aisha',
    age: 24,
    image:
      'https://i.pinimg.com/1200x/da/f7/6f/daf76f8ab85f4539651cc9150358a9be.jpg',
  },
  {
    id: '2',
    name: 'Ravi',
    age: 28,
    image:
      'https://images.unsplash.com/photo-1622782045716-a05bcc4f5ae8?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW5kaWFuJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    id: '3',
    name: 'Neha',
    age: 22,
    image:
      'https://img.freepik.com/free-photo/beautiful-girl-stands-park_8353-5084.jpg?semt=ais_hybrid&w=740',
  },
  {
    id: '4',
    name: 'Aryan',
    age: 27,
    image:
      'https://photosrush.net/wp-content/uploads/beautiful-cute-simple-girl-pic-12-years-1.jpg',
  },
];

const Feed: React.FC = () => {
  const [cards, setCards] = useState<CardData[]>(DATA);
  const swiperRef = useRef<Swiper<CardData>>(null);

  const renderCard = (card: CardData) => {
    return (
      <View style={styles.card}>
        <Image source={{ uri: card.image }} style={styles.image} />
        <View style={styles.gradientOverlay} />
        <View style={styles.info}>
          <Text style={styles.name}>
            {card.name}, {card.age}
          </Text>
          <Text style={styles.text}>{'♀️'} {'She/Her'}</Text>
          <Text style={styles.text}>{'📍'} {'Mumbai'}</Text>
          <Text style={styles.text}>{'🌐'} {'25 miles away'}</Text>
        </View>
      </View>
    );
  };

  return (
    <ScreenLayout>
      <SafeAreaView style={styles.container}>

        <View style={styles.header}>
           <Image source={require('../../assets/icons/menu.png')} style={styles.icon}/>
           <Image source={require('../../assets/icons/menu.png')} style={styles.icon}/>
           <TouchableOpacity activeOpacity={0.7} style={styles.btnCircle}>
             <Image source={require('../../assets/icons/reload.png')} style={styles.icon}/>
           </TouchableOpacity>
        </View>

        <View style={styles.swiperContainer}>
          <Swiper
            ref={swiperRef}
            cards={cards}
            renderCard={renderCard}
            onSwiped={(index: number) => console.log('Swiped index:', index)}
            onSwipedRight={(index: number) =>
              console.log('Liked:', cards[index])
            }
            onSwipedLeft={(index: number) =>
              console.log('Disliked:', cards[index])
            }
            stackSize={3}
            cardIndex={0}
            backgroundColor="transparent"
            verticalSwipe={false}
            infinite
          />
        </View>

        {/* Buttons at Bottom */}
        <View style={styles.buttons}>
          <TouchableOpacity
            style={[styles.button]}
            onPress={() => swiperRef.current?.swipeLeft()}
          >
            <Image source={require('../../assets/icons/cross.png')} style={styles.btnIcon}/>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button]}
            onPress={() => swiperRef.current?.swipeLeft()}
          >
            <Image source={require('../../assets/icons/heart.png')} style={styles.btnIcon}/>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button]}
            onPress={() => swiperRef.current?.swipeRight()}
          >
            <Image source={require('../../assets/icons/star.png')} style={styles.btnIcon}/>  
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScreenLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  swiperContainer: {
    flex: 1,
    justifyContent: 'center',
    marginTop: '-8%'
  },
  card: {
    height: height * 0.75,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 8,
    backgroundColor: '#fff',
    overflow: 'hidden',
    zIndex: -1,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
    position: 'absolute',
    alignSelf: 'center'
  },
  gradientOverlay: {
    position: 'absolute',
    bottom: 0,
    height: 130,
    width: '100%',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
  },
  info: {
    position: 'absolute',
    bottom: 25,
    left: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 20,
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    backgroundColor: '#7E60FB'
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  header: {
    flexDirection: 'row',
    marginTop: '5%',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: '5%'
  },
  icon: {
    width: 18, height: 18, tintColor: '#FFF'
  },
  btnCircle: {
    width: 30,
    height: 30,
    borderRadius: 30,
    backgroundColor: '#7E60FB',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnIcon: {
    width: 30,
    height: 30, tintColor: '#FFF'
  },
  text: {
    color: '#FFF',
    fontWeight: '500',
    fontSize: 14,
    marginTop: 7
  }
});

export default Feed;
