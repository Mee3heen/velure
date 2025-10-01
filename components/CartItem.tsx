
import React from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import { CartItem as CartItemType } from '../types/Product';
import { colors, commonStyles } from '../styles/commonStyles';
import { IconSymbol } from './IconSymbol';

interface CartItemProps {
  item: CartItemType;
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemove: (productId: string) => void;
}

export const CartItem: React.FC<CartItemProps> = ({ item, onUpdateQuantity, onRemove }) => {
  const { product, quantity } = item;

  const handleIncrease = () => {
    console.log('Increasing quantity for:', product.name);
    onUpdateQuantity(product.id, quantity + 1);
  };

  const handleDecrease = () => {
    console.log('Decreasing quantity for:', product.name);
    onUpdateQuantity(product.id, quantity - 1);
  };

  const handleRemove = () => {
    console.log('Removing item:', product.name);
    onRemove(product.id);
  };

  return (
    <View style={[commonStyles.card, styles.container]}>
      <Image source={{ uri: product.image }} style={styles.image} />
      
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.name} numberOfLines={2}>{product.name}</Text>
          <Pressable onPress={handleRemove} style={styles.removeButton}>
            <IconSymbol name="xmark" size={16} color={colors.textLight} />
          </Pressable>
        </View>
        
        <Text style={commonStyles.price}>{product.price.toLocaleString('ru-RU')} ₽</Text>
        
        <View style={styles.quantityContainer}>
          <Pressable onPress={handleDecrease} style={styles.quantityButton}>
            <IconSymbol name="minus" size={16} color={colors.primary} />
          </Pressable>
          
          <Text style={styles.quantity}>{quantity}</Text>
          
          <Pressable onPress={handleIncrease} style={styles.quantityButton}>
            <IconSymbol name="plus" size={16} color={colors.primary} />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 12,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 12,
    backgroundColor: colors.grey,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    flex: 1,
    marginRight: 8,
  },
  removeButton: {
    padding: 4,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  quantityButton: {
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 16,
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  quantity: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginHorizontal: 16,
    minWidth: 20,
    textAlign: 'center',
  },
});
