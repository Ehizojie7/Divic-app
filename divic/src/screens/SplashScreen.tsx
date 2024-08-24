
import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();
  const scaleAnim = useRef(new Animated.Value(1)).current; // Initial scale for the first image
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial fade for the second image
  const logoScaleAnim = useRef(new Animated.Value(0)).current; // Initial scale for the third image

  useEffect(() => {
    // Animation sequence
    Animated.sequence([
      // First image 
      Animated.timing(scaleAnim, {
        toValue: 2,
        duration: 3000,
        useNativeDriver: true,
      }),
      // Second image 
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 2500,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 3,
          duration: 200,
          useNativeDriver: true,
        }),
      ]),
      // Third image 
      Animated.timing(logoScaleAnim, {
        toValue: 1,
        duration: 2200,
        useNativeDriver: true,
      }),
    ]).start(() => {
      // Navigate to login screen after animation
      navigation.navigate('Login');
    });
  }, [scaleAnim, fadeAnim, logoScaleAnim]);

  return (
    <View >
      {/* First image */}
      <Animated.Image
        source={require('../../assets/firstImage.png')}
        style={[
          styles.logo,
          {
            transform: [{ scale: scaleAnim }],
          },
        ]}
      />
      {/* Second image */}
      <Animated.Image
        source={require('../../assets/secondImage.png')}
        style={[
          styles.logo,
          {
            opacity: fadeAnim,
            transform: [{ scale: scaleAnim }],
            position: 'absolute',
          },
        ]}
      />
      {/* Third image */}
      <Animated.Image
        source={require('../../assets/thirdImage.png')}
        style={[
          styles.logo,
          {
            opacity: logoScaleAnim,
            transform: [{ scale: logoScaleAnim }],
            position: 'absolute',
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({

  logo: {
    width: '100%', 
    height: '100%',
  },
});

export default SplashScreen;


