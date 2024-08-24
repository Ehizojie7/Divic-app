import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import login from '../services/login';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { AntDesign } from '@expo/vector-icons';

const Login= ({closeModal}:any) => {
  const [url, setUrl] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigation = useNavigation();


const handleLogin = async () => {
    
    if (!email || !password) {
        setError('Please fill in all fields');
        return;
      }
  
    try {
      const data = await login('test@brandimic.com', 'testy123@');
      console.log('Login successful:', data);
      navigation.navigate('Main');
      closeModal()
    } catch (error) {
      console.error('Error during login:', error);
    }
  };


  return (
    <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
    <View className='pt-5 '>
      <TouchableOpacity className='mb-2' onPress={() => closeModal()}>
        <Text className='text-[#4561DB]'>
        <AntDesign name="left" size={16} color="#4561DB" />
        {' '}
          Cancel
          </Text>
      </TouchableOpacity>
      <Text className='font-semibold text-2xl'>Login</Text>
      <Text className='font-meidum text-base mt-1 text-[#757281] mb-7'>
        Please enter your First, Last name and your phone number in order to register
        </Text>
        <TextInput
        className='bg-[#F4F2F8] py-4 px-3 rounded-lg mb-5 text-[#2F50C1]'
        placeholder="URL"
        placeholderTextColor={'#58536E'}
        value={url}
        onChangeText={setUrl}
      />
      <TextInput
        className='bg-[#F4F2F8] py-4 px-3 rounded-lg mb-5 text-[#2F50C1]'
        placeholder="Username/Email"
        placeholderTextColor={'#58536E'}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        className='bg-[#F4F2F8] py-4 px-3 rounded-lg mb-5 text-[#2F50C1]'
        placeholder="Password"
        placeholderTextColor={'#58536E'}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      
      <TouchableOpacity
      disabled={!email && !password} 
      onPress={handleLogin} 
      className='py-4 my-[65%] rounded-lg' 
      style={{backgroundColor: email && password ? '#2F50C1' : '#EAE7F2'}}>
        <Text className='text-center'
        style={{color: email && password ? '#FFF' : '#A7A3B3'}}>
          Login
          </Text>
      </TouchableOpacity>
    </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#CCC',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  errorText: {
    color: 'red',
    marginBottom: 12,
  },
});

export default Login;
