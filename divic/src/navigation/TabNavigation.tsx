import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Feather, FontAwesome6, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { View, Text } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import WalletScreen from '../screens/WalletScreen';
import Profile from '../screens/Profile';
import ScanScreen from '../screens/ScanScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: '#2F50C1',
        tabBarInactiveTintColor: '#A7A3B3',
        tabBarActiveBackgroundColor: '#FFFFFF',
        tabBarInactiveBackgroundColor: '#FFFFFF',
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'Home') {
            return (
              <View>
                {focused ? (
                  <FontAwesome6 name="boxes-stacked" size={size} color={color} />

                ) : (
                  <FontAwesome6 name="boxes-stacked" size={size} color={color} />
                )}
              </View>
            );
          } else if (route.name === 'Scan') {
            return <MaterialCommunityIcons name="barcode-scan" size={size} color={color} />;
          } else if (route.name === 'Wallet') {
        return <AntDesign name="wallet" size={size} color={color} />;
          } else if (route.name === 'Profile') {
            return <MaterialIcons name="account-circle" size={size} color={color} />;
          }
        },
        tabBarLabel: ({ focused }) => (
          <Text style={{ color: focused ? '#2F50C1' : '#A7A3B3' }}>{route.name}</Text>
        ),
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Scan" component={ScanScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Wallet" component={WalletScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}
