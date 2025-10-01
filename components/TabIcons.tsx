
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { IconSymbol } from './IconSymbol';

interface TabIconProps {
  color: string;
  size: number;
}

export function CatalogIcon({ color, size }: TabIconProps) {
  return (
    <View style={styles.iconContainer}>
      <IconSymbol name="cube.box" size={size} color={color} />
    </View>
  );
}

export function CartIcon({ color, size }: TabIconProps) {
  return (
    <View style={styles.iconContainer}>
      <IconSymbol name="basket" size={size} color={color} />
    </View>
  );
}

export function SeminarsIcon({ color, size }: TabIconProps) {
  return (
    <View style={styles.iconContainer}>
      <IconSymbol name="book.closed" size={size} color={color} />
    </View>
  );
}

export function AboutIcon({ color, size }: TabIconProps) {
  return (
    <View style={styles.iconContainer}>
      <IconSymbol name="building.2" size={size} color={color} />
    </View>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
