
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import { IconSymbol } from './IconSymbol';
import React from 'react';
import { Product } from '../types/Product';
import { colors, commonStyles } from '../styles/commonStyles';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.name} numberOfLines={2}>
          {product.name}
        </Text>
        <Text style={styles.description} numberOfLines={3}>
          {product.description}
        </Text>
        <View style={styles.footer}>
          <Pressable
            style={[styles.addButton, !product.inStock && styles.disabledButton]}
            onPress={() => product.inStock && onAddToCart(product)}
            disabled={!product.inStock}
          >
            <IconSymbol 
              name="plus" 
              size={14} 
              color={product.inStock ? colors.white : colors.textLight} 
            />
            <Text style={[styles.addButtonText, !product.inStock && styles.disabledButtonText]}>
              {product.inStock ? 'В корзину' : 'Нет в наличии'}
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: 12,
    margin: 5,
    overflow: 'hidden',
    ...commonStyles.shadow,
  },
  image: {
    width: '100%',
    height: 150,
    backgroundColor: colors.grey,
  },
  content: {
    padding: 12,
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 6,
    lineHeight: 20,
  },
  description: {
    fontSize: 12,
    color: colors.textLight,
    lineHeight: 16,
    flex: 1,
  },
  footer: {
    marginTop: 12,
    alignItems: 'center',
  },
  addButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: 16,  // Уменьшено на 30% с 24 до 16
    paddingVertical: 8,     // Уменьшено на 30% с 12 до 8
    borderRadius: 20,       // Сделано овальным
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 84,           // Уменьшено на 30% с 120 до 84
  },
  disabledButton: {
    backgroundColor: colors.grey,
  },
  addButtonText: {
    color: colors.white,
    fontSize: 12,           // Уменьшено на 30% с 14 до 12
    fontWeight: '600',
    marginLeft: 4,
  },
  disabledButtonText: {
    color: colors.textLight,
  },
});
