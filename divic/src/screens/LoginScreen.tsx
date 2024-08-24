

import React, { useState } from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  Animated,
  Dimensions,
} from 'react-native';
import Login from './Login'; // Import your login component

const { height } = Dimensions.get('window');

export default function LoginScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [slideAnim] = useState(new Animated.Value(height)); 

  const openModal = () => {
    setModalVisible(true);
    Animated.timing(slideAnim, {
      toValue: height * 0.1, 
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const closeModal = () => {
    Animated.timing(slideAnim, {
      toValue: height, 
      duration: 300,
      useNativeDriver: true,
    }).start(() => setModalVisible(false));
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/shippex.png')}
        style={styles.image}
      >
        <TouchableOpacity
          style={styles.loginButton}
          onPress={openModal}
        >
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        
        <Modal
          transparent={true}
          visible={modalVisible}
          animationType="fade"
          onRequestClose={closeModal}
        >
          <TouchableOpacity style={styles.modalOverlay} onPress={closeModal} />
          <Animated.View style={[styles.modalContainer, { transform: [{ translateY: slideAnim }] }]}>
            <Login closeModal={closeModal}/> 
          </Animated.View>
        </Modal>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  loginButton: {
    position: 'absolute',
    right: 8,
    bottom: 48,
    width: '100%',
    backgroundColor: 'white',
    paddingVertical: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#2F50C1',
  },
  loginButtonText: {
    color: '#2F50C1',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold'
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '93%',
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
});


