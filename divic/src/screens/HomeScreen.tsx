import { View, Text, SafeAreaView, Image, TextInput, TouchableOpacity, FlatList, RefreshControl, ActivityIndicator } from 'react-native';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { BottomSheetModal, BottomSheetModalProvider, BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import Checkbox from 'expo-checkbox';
import ShipmentList from '../components/ShipmentList';
import Filters from '../components/Filters';
import getShipmentList from '../services/getShipmentList';
import  ShipmentProp  from '../services/types/types';

const HomeScreen = () => {
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(false);
    const [shipments, setShipments] = useState<ShipmentProp[] | null>(null);
    const [refreshing, setRefreshing] = useState(false);
    const bottomSheetModalRef = useRef<BottomSheetModal>(null);
    const snapPoints = useMemo(() => ['25%', '35%'], []);

    const fetchShipments = async () => {
        setLoading(true);
        try {
          const data = await getShipmentList();
          setLoading(false);
          setShipments(data.message);
          console.log(shipments);
        } catch (error) {
          console.error('Error fetching shipment list:', error);
        }
      };
    
    useEffect(() => {
        fetchShipments();
    }, []);
    
    const onRefresh = () => {
        setRefreshing(true);
        fetchShipments().finally(() => setRefreshing(false));
    };
    
    if (loading) {
        return (
            <View className='my-[100%] mx-auto'>
                <Text>
                    <ActivityIndicator size={'large'} />
                </Text>
            </View>
        );
    }

    return (
        <BottomSheetModalProvider>
            <SafeAreaView>
                <FlatList
                    data={shipments}
                    keyExtractor={(item) => item?.name}
                    showsVerticalScrollIndicator={false}
                    ListHeaderComponent={
                        <View className='px-3 mt-6'>
                            {/* Header Section */}
                            <View className='flex-row items-center justify-between'>
                                <View>
                                    <Image source={require('../../assets/man.png')} />
                                </View>
                                <View>
                                    <Image source={require('../../assets/header.png')} />
                                </View>
                                <View className='bg-[#F4F2F8] rounded-full px-2 py-2'>
                                    <Text>
                                        <Ionicons name="notifications-outline" size={24} color="#2F50C1" />
                                    </Text>
                                </View>
                            </View>
                            {/* End Of Header Section */}
                            <View className='mt-5'>
                                <Text className=''>
                                    Hello,
                                </Text>
                                <Text className='text-2xl font-bold'>
                                    Ibrahim Shaker
                                </Text>
                            </View>
                            <TextInput
                                className='bg-[#F4F2F8] border-0.5 border-[#A7A3B3] py-4 px-3 rounded-lg mt-5 w-full'
                                placeholder="Search"
                                placeholderTextColor={'#58536E'}
                                value={search}
                                onChangeText={setSearch} 
                            />
                            <View className='flex-row justify-between mt-5'>
                                <TouchableOpacity className='w-[48%] py-3 rounded-lg bg-[#D3D1D9]' onPress={() => bottomSheetModalRef.current?.present()}>
                                    <Text className='text-center text-base text-[#58536E]'>
                                        <Ionicons name="filter-outline" size={20} color="#58536E" />
                                        {' '}Filters
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity className='w-[48%] py-3 rounded-lg bg-[#2F50C1]'>
                                    <Text className='text-center text-base text-white'>
                                        <MaterialCommunityIcons name="line-scan" size={20} color="white" />
                                        {' '}Add Scan
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <View className='flex-row items-center justify-between mt-7'>
                                <Text className='text-xl font-semibold'>
                                    Shipments
                                </Text>
                                <View className='flex-row items-center' style={{gap: 10}}>
                                    <Checkbox />
                                    <Text className='text-[#2F50C1] text-base'>
                                        Mark All
                                    </Text>
                                </View>
                            </View>
                        </View>
                    }
                    renderItem={({ item }) => (
                        <ShipmentList item={item}/>
                    )}
                    refreshControl={
                        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                    }
                />
                <BottomSheetModal
                    ref={bottomSheetModalRef}
                    index={1}
                    snapPoints={snapPoints}
                    backdropComponent={BottomSheetBackdrop}
                >    
                    <Filters bottomSheetModalRef={bottomSheetModalRef}/>
                </BottomSheetModal>
            </SafeAreaView>
        </BottomSheetModalProvider>
    );
};

export default HomeScreen;
