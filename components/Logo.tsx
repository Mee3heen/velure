
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '@/styles/commonStyles';

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
  style?: any;
}

export function Logo({ size = 'medium', style }: LogoProps) {
  const logoSize = size === 'small' ? styles.small : size === 'large' ? styles.large : styles.medium;
  
  return (
    <View style={[styles.container, logoSize, style]}>
      <Text style={[styles.text, logoSize]}>
        VEL<Text style={styles.dot}>•</Text>URE
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
  },
  text: {
    fontWeight: '900',
    color: colors.text,
    letterSpacing: 2,
  },
  dot: {
    color: colors.primary,
  },
  small: {
    fontSize: 16,
  },
  medium: {
    fontSize: 24,
  },
  large: {
    fontSize: 32,
  },
});
