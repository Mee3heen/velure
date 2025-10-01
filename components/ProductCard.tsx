
import React from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import { Product } from '../types/Product';
import { colors, commonStyles } from '../styles/commonStyles';
import { IconSymbol } from './IconSymbol';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const handleAddToCart = () => {
    console.log('Product card add to cart:', product.name);
    onAddToCart(product);
  };

  return (
    <View style={[commonStyles.productCard, styles.container]}>
      <Image source={{ uri: product.image }} style={styles.image} />
      
      <View style={styles.content}>
        <Text style={styles.name} numberOfLines={2}>{product.name}</Text>
        <Text style={styles.description} numberOfLines={3}>{product.description}</Text>
        
        <View style={styles.footer}>
          {product.inStock ? (
            <Pressable style={styles.addButton} onPress={handleAddToCart}>
              <Text style={styles.addButtonText}>Добавить в корзину</Text>
            </Pressable>
          ) : (
            <View style={styles.outOfStockBadge}>
              <Text style={styles.outOfStockText}>Нет в наличии</Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 280,
  },
  image: {
    width: '100%',
    height: 120,
    borderRadius: 8,
    marginBottom: 12,
    backgroundColor: colors.grey,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 8,
    lineHeight: 20,
  },
  description: {
    fontSize: 14,
    color: colors.textLight,
    lineHeight: 18,
    marginBottom: 12,
  },
  footer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButton: {
    backgroundColor: colors.primary,
    borderRadius: 25, // Made oval/rounded
    paddingHorizontal: 12, // Reduced by ~30%
    paddingVertical: 7,    // Reduced by ~30%
    width: '70%',          // Reduced width by 30%
    alignItems: 'center',
  },
  addButtonText: {
    color: colors.background,
    fontSize: 12,          // Slightly smaller text
    fontWeight: '600',
  },
  outOfStockBadge: {
    backgroundColor: colors.grey,
    borderRadius: 25,      // Made oval/rounded to match
    paddingHorizontal: 12, // Reduced by ~30%
    paddingVertical: 7,    // Reduced by ~30%
    width: '70%',          // Reduced width by 30%
    alignItems: 'center',
  },
  outOfStockText: {
    fontSize: 12,          // Slightly smaller text
    color: colors.textLight,
    fontWeight: '500',
  },
});
