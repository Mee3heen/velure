
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
    width: 120,
    height: 40,
  },
  small: {
    width: 80,
    height: 26,
  },
  medium: {
    width: 120,
    height: 40,
  },
  large: {
    width: 160,
    height: 53,
  },
});
