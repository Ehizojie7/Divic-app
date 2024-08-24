import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Checkbox from 'expo-checkbox';
import { AntDesign, FontAwesome, FontAwesome6, Ionicons } from '@expo/vector-icons';
import ShipmentProp from '../services/types/types';

type ShipmentListProps = {
  item: ShipmentProp;
};


const ShipmentList = ({item}:ShipmentListProps) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <View className='px-3'>
        <View className='border border-[#6E91EC] my-1.5 px-2 py-2 rounded-lg'>
        <View 
        className='flex-row items-center justify-between px-2 py-2 rounded-lg bg-[#F4F2F8]'>
          <Checkbox className='rounded'/>
          <Image source={require('../../assets/box.png')}/>
          <View>
            <Text className='text-[#3F395C] text-sm'>AWB</Text>
            <Text className='text-[#000] text-[18px] font-semibold'>{item?.name}</Text>
            <Text className='text-[#757281] text-sm'>
              Cairo {' '}
              <AntDesign name="arrowright" size={12} color="#2F50C1" />
               {' '}Alexandria
            </Text>
          </View>
          <View className='border border-white px-2 py-1 bg-[#D9E6FD] rounded-lg'>
            <Text className='text-[#2F50C1] text-sm'>{item?.status}</Text>
          </View>
          <TouchableOpacity onPress={() => setShowDetails(!showDetails)} 
          className='rounded-full bg-white px-2 py-1.5'>
            <Text>
            <FontAwesome name="expand" size={16} color="#4561DB" />
            </Text>
          </TouchableOpacity>
        </View>

          {/* Expanded Info */}
        <View 
        className='border-t-2 border-dashed py-3 px-3 mt-2 bg-[#F4F2F8] border-[#FFF]'
        style={{display: showDetails ? 'flex' : 'none'}}>
          <View className='flex-row items-center justify-between'>
            <View>
            <Text className='text-[#2F50C1] text-xs'>Origin</Text>
            <Text className='text-[#000] text-base font-semibold'>Cairo</Text>
            <Text className='text-[#58536E] text-sm'>Dokki, 22 Nile St.</Text>
            </View>

            <Text>
            <AntDesign name="arrowright" size={24} color="#2F50C1" />
            </Text>

            <View>
            <Text className='text-[#2F50C1] text-xs'>Destination</Text>
            <Text className='text-[#000] text-base font-semibold'>Alexandria</Text>
            <Text className='text-[#58536E] text-sm'>Smoha, 22 max St.</Text>
            </View>
          </View>

          <View className='flex-row items-center justify-end mt-3' style={{gap: 10}}>
            <TouchableOpacity className='bg-[#6E91EC] px-2 py-3 w-[40%] rounded-lg'>
              <Text className='text-center text-white text-base'>
              <Ionicons name="call" size={16} color="white" />
               {' '} Call
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className='bg-[#25D366] px-2 py-3 w-[40%] rounded-lg'>
              <Text className='text-center text-white text-base'>
              <FontAwesome6 name="whatsapp" size={16} color="white" />
                {' '}WhatsApp
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#FFF',
  },
  item: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ShipmentList;
