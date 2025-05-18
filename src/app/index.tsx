import React, { useState, useRef } from "react";
import { Text, View, Image, Dimensions, StyleSheet, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Carousel, { ICarouselInstance, Pagination } from 'react-native-reanimated-carousel';
import { router } from "expo-router";
import { useSharedValue } from "react-native-reanimated";

const { width: screenWidth } = Dimensions.get('window');

export default function Page() {
  const { top, bottom } = useSafeAreaInsets();

  const ref = React.useRef<ICarouselInstance>(null);
  const progress = useSharedValue<number>(0);

  const onPressPagination = (index: number) => {
    ref.current?.scrollTo({
      count: index - progress.value,
      animated: true,
    });
  };

  const data = [
    {
      id: 1,
      image: require('../../assets/welcome_1.jpg'),
      title: 'Welcome to',
      subtitle: 'Your Healer Application',
      description: "Here's a good place for a brief overview of the app or it's key features."
    },
    {
      id: 2,
      image: require('../../assets/welcome_2.jpg'),
      title: 'Book Appointments',
      subtitle: 'With Top Doctors',
      description: "Schedule appointments with qualified healthcare professionals with just a few taps."
    },
    {
      id: 3,
      image: require('../../assets/welcome_1.jpg'),
      title: 'Online Consultation',
      subtitle: 'Anytime, Anywhere',
      description: "Get medical advice from the comfort of your home through secure video consultations."
    },
  ];

  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.slide}>
        <Image
          source={item.image}
          style={styles.image}
          resizeMode="cover"
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.subtitle}>{item.subtitle}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={[styles.container, { paddingTop: top }]}>
      <Carousel
        width={screenWidth}
        height={screenWidth * 1.6}
        data={data}
        renderItem={renderItem}
        onProgressChange={progress}
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 50,
        }}
        autoPlay={true}
        autoPlayInterval={3000}
        scrollAnimationDuration={750}
        loop={true}
      />
      <Pagination.Basic
        progress={progress}
        data={data}
        dotStyle={{ backgroundColor: "rgba(0,0,0,0.2)", borderRadius: 50 }}
        containerStyle={{ gap: 5, marginTop: 10 }}
        onPress={onPressPagination}
      />
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/Logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.appName}>Your Healer</Text>
      </View>
      <TouchableOpacity
        style={[styles.button, { marginBottom: bottom + 20 }]}
        onPress={() => router.push('/auth/sign-in')}
      >
        <Text style={styles.buttonText}>Get started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  slide: {
    flex: 1,
    alignItems: 'center',
    paddingBottom: 20,
  },
  image: {
    width: screenWidth,
    height: screenWidth * 0.9,
  },
  textContainer: {
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 5,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: 10,
    maxWidth: 300,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#2563eb',
    margin: 5,
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    marginBottom: 10,
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  appName: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 24,
  },
  button: {
    backgroundColor: '#1e293b',
    paddingVertical: 16,
    borderRadius: 10,
    marginHorizontal: 20,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
  },
});
