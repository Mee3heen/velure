
import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

interface TabIconProps {
  color: string;
  size: number;
}

export function CatalogIcon({ color, size }: TabIconProps) {
  return (
    <View style={styles.iconContainer}>
      <Image 
        source={require('@/assets/images/81236020-772d-4dfb-b108-62126bb225e2.png')}
        style={[styles.iconImage, { width: size, height: size, tintColor: color }]}
        resizeMode="contain"
      />
    </View>
  );
}

export function CartIcon({ color, size }: TabIconProps) {
  return (
    <View style={styles.iconContainer}>
      <Image 
        source={require('@/assets/images/5eec5a13-87c6-46d8-8be2-ff80ce890d09.png')}
        style={[styles.iconImage, { width: size, height: size, tintColor: color }]}
        resizeMode="contain"
      />
    </View>
  );
}

export function SeminarsIcon({ color, size }: TabIconProps) {
  return (
    <View style={styles.iconContainer}>
      <Image 
        source={require('@/assets/images/c0223f93-0b3a-46d6-961c-8fb1f1623e94.png')}
        style={[styles.iconImage, { width: size, height: size, tintColor: color }]}
        resizeMode="contain"
      />
    </View>
  );
}

export function AboutIcon({ color, size }: TabIconProps) {
  return (
    <View style={styles.iconContainer}>
      <Image 
        source={require('@/assets/images/1ab0cb7b-a3d7-46f3-8158-acdbf3a58e57.png')}
        style={[styles.iconImage, { width: size, height: size, tintColor: color }]}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconImage: {
    // Base styles for all icons
  },
});
