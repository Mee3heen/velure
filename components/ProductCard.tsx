
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
          <Text style={commonStyles.price}>{product.price.toLocaleString('ru-RU')} ₽</Text>
          
          {product.inStock ? (
            <Pressable style={styles.addButton} onPress={handleAddToCart}>
              <IconSymbol name="plus" size={16} color={colors.background} />
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  addButton: {
    backgroundColor: colors.primary,
    borderRadius: 20,
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  outOfStockBadge: {
    backgroundColor: colors.grey,
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  outOfStockText: {
    fontSize: 12,
    color: colors.textLight,
    fontWeight: '500',
  },
});
