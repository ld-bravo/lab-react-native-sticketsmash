import { Tabs } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#3399ff",
        headerStyle: {
          backgroundColor: "#25292e"
        },
        headerShadowVisible: false,
        headerTintColor: "#fff",
        tabBarStyle: {
          backgroundColor: "#25292e"
        }
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({color, focused}) => (
            <Ionicons name={focused ? "home-sharp" : "home-outline"} color={color} size={24} />
          )
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "About",
          tabBarIcon: ({color, focused}) => (
            <Ionicons name={focused ? "information-circle" : "information-circle-outline"} color={color} size={24} />
          )
        }}
      />
    </Tabs>
  );
}

export default TabLayout;