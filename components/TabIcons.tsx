
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
        source={require('@/assets/images/a8f36cdb-4f3b-4186-9b00-325245fd0100.png')}
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
        source={require('@/assets/images/81619a35-e477-438a-bf2e-63cbdc315529.png')}
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
        source={require('@/assets/images/e52e13f6-fb42-47e2-a71b-b4d63d375c00.png')}
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
        source={require('@/assets/images/7af66a5d-be38-4770-b41e-74c63cdd58c2.png')}
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
