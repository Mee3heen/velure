
import React from 'react';
import { Tabs } from 'expo-router';
import { CatalogIcon, CartIcon, SeminarsIcon, AboutIcon } from '@/components/TabIcons';
import { colors } from '@/styles/commonStyles';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.text,
        tabBarStyle: {
          backgroundColor: colors.background,
          borderTopColor: colors.grey,
          paddingBottom: 8,
          paddingTop: 8,
          height: 70,
        },
        headerStyle: {
          backgroundColor: colors.background,
        },
        headerTintColor: colors.text,
        headerShown: false, // Hide default header since we'll add logo to each screen
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Каталог',
          tabBarIcon: ({ color, size }) => (
            <CatalogIcon color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: 'Корзина',
          tabBarIcon: ({ color, size }) => (
            <CartIcon color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="news"
        options={{
          title: 'Семинары',
          tabBarIcon: ({ color, size }) => (
            <SeminarsIcon color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: 'О нас',
          tabBarIcon: ({ color, size }) => (
            <AboutIcon color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
