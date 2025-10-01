
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
  style?: any;
}

export function Logo({ size = 'medium', style }: LogoProps) {
  const logoSize = size === 'small' ? styles.small : size === 'large' ? styles.large : styles.medium;
  
  return (
    <View style={[styles.container, style]}>
      <Image 
        source={require('@/assets/images/755a25bc-5de2-4e63-bfda-9a6b6ba3986f.jpeg')}
        style={[styles.logo, logoSize]}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
  },
  logo: {
    width: 180, // Increased by 50% from 120
    height: 60,  // Increased by 50% from 40
  },
  small: {
    width: 120, // Increased by 50% from 80
    height: 39,  // Increased by 50% from 26
  },
  medium: {
    width: 180, // Increased by 50% from 120
    height: 60,  // Increased by 50% from 40
  },
  large: {
    width: 240, // Increased by 50% from 160
    height: 80,  // Increased by 50% from 53
  },
});
