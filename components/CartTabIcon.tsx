
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { IconSymbol } from './IconSymbol';
import { useCartContext } from '../contexts/CartContext';
import { colors } from '../styles/commonStyles';

interface CartTabIconProps {
  color: string;
  size: number;
}

export const CartTabIcon: React.FC<CartTabIconProps> = ({ color, size }) => {
  const { getTotalItems } = useCartContext();
  const itemCount = getTotalItems();

  return (
    <View style={styles.container}>
      <IconSymbol name="cart" size={size} color={color} />
      {itemCount > 0 && (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>
            {itemCount > 99 ? '99+' : itemCount.toString()}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    top: -6,
    right: -6,
    backgroundColor: colors.primary,
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: colors.background,
  },
  badgeText: {
    color: colors.background,
    fontSize: 12,
    fontWeight: '600',
  },
});
