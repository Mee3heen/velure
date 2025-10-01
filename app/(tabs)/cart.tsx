
import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { CartItem } from '@/components/CartItem';
import { Button } from '@/components/button';
import { useCartContext } from '@/contexts/CartContext';
import { colors, commonStyles } from '@/styles/commonStyles';
import { CartItem as CartItemType } from '@/types/Product';

export default function CartScreen() {
  const { cartItems, updateQuantity, removeFromCart, getTotalPrice, getTotalItems } = useCartContext();

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      Alert.alert('Корзина пуста', 'Добавьте товары в корзину перед оформлением заказа');
      return;
    }
    
    console.log('Proceeding to checkout with items:', cartItems);
    router.push('/checkout');
  };

  const renderCartItem = ({ item }: { item: CartItemType }) => (
    <CartItem
      item={item}
      onUpdateQuantity={updateQuantity}
      onRemove={removeFromCart}
    />
  );

  const renderEmptyCart = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyTitle}>Корзина пуста</Text>
      <Text style={commonStyles.textLight}>
        Добавьте товары из каталога, чтобы оформить заказ
      </Text>
      <Button onPress={() => router.push('/(tabs)')} style={styles.shopButton}>
        Перейти к покупкам
      </Button>
    </View>
  );

  const renderFooter = () => {
    if (cartItems.length === 0) return null;

    return (
      <View style={styles.footer}>
        <View style={styles.totalContainer}>
          <Text style={styles.totalLabel}>Товаров: {getTotalItems()}</Text>
          <Text style={styles.totalPrice}>
            Итого: {getTotalPrice().toLocaleString('ru-RU')} ₽
          </Text>
        </View>
        <Button onPress={handleCheckout} style={styles.checkoutButton}>
          Оформить заказ
        </Button>
      </View>
    );
  };

  return (
    <SafeAreaView style={commonStyles.wrapper}>
      <View style={commonStyles.container}>
        <Text style={commonStyles.title}>Корзина</Text>
        
        {cartItems.length === 0 ? (
          renderEmptyCart()
        ) : (
          <FlatList
            data={cartItems}
            renderItem={renderCartItem}
            keyExtractor={(item) => item.product.id}
            contentContainerStyle={styles.listContainer}
            showsVerticalScrollIndicator={false}
          />
        )}
        
        {renderFooter()}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    padding: 20,
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40,
  },
  emptyTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 12,
  },
  shopButton: {
    marginTop: 20,
    width: 200,
  },
  footer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: colors.grey,
    backgroundColor: colors.background,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  totalLabel: {
    fontSize: 16,
    color: colors.textLight,
  },
  totalPrice: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.primary,
  },
  checkoutButton: {
    backgroundColor: colors.primary,
  },
});
