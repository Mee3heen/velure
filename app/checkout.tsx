
import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router, Stack } from 'expo-router';
import { Button } from '@/components/button';
import { Logo } from '@/components/Logo';
import { useCartContext } from '@/contexts/CartContext';
import { colors, commonStyles } from '@/styles/commonStyles';
import { ContactInfo } from '@/types/Product';

export default function CheckoutScreen() {
  const { cartItems, getTotalPrice, clearCart } = useCartContext();
  const [contactInfo, setContactInfo] = useState<ContactInfo>({
    name: '',
    phone: '',
    email: '',
    address: '',
    comments: '',
  });

  const handleSubmit = async () => {
    if (!contactInfo.name || !contactInfo.phone) {
      Alert.alert('Ошибка', 'Пожалуйста, заполните обязательные поля (имя и телефон)');
      return;
    }

    try {
      console.log('Submitting order:', {
        contactInfo,
        cartItems,
        totalPrice: getTotalPrice(),
      });

      // Here you would typically send the order to your backend
      // For now, we'll just simulate success
      Alert.alert(
        'Заказ оформлен!',
        'Спасибо за ваш заказ. Мы свяжемся с вами в ближайшее время.',
        [
          {
            text: 'OK',
            onPress: () => {
              clearCart();
              router.push('/(tabs)');
            },
          },
        ]
      );
    } catch (error) {
      console.error('Error submitting order:', error);
      Alert.alert('Ошибка', 'Произошла ошибка при оформлении заказа. Попробуйте еще раз.');
    }
  };

  return (
    <SafeAreaView style={commonStyles.wrapper}>
      <Stack.Screen options={{ title: 'Оформление заказа' }} />
      <ScrollView style={styles.container}>
        <Logo size="medium" style={styles.logo} />
        <Text style={commonStyles.title}>Оформление заказа</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Контактная информация</Text>
          
          <TextInput
            style={commonStyles.input}
            placeholder="Имя *"
            value={contactInfo.name}
            onChangeText={(text) => setContactInfo({ ...contactInfo, name: text })}
          />
          
          <TextInput
            style={commonStyles.input}
            placeholder="Телефон *"
            value={contactInfo.phone}
            onChangeText={(text) => setContactInfo({ ...contactInfo, phone: text })}
            keyboardType="phone-pad"
          />
          
          <TextInput
            style={commonStyles.input}
            placeholder="Email"
            value={contactInfo.email}
            onChangeText={(text) => setContactInfo({ ...contactInfo, email: text })}
            keyboardType="email-address"
          />
          
          <TextInput
            style={commonStyles.input}
            placeholder="Адрес доставки"
            value={contactInfo.address}
            onChangeText={(text) => setContactInfo({ ...contactInfo, address: text })}
            multiline
          />
          
          <TextInput
            style={[commonStyles.input, styles.commentsInput]}
            placeholder="Комментарии к заказу"
            value={contactInfo.comments}
            onChangeText={(text) => setContactInfo({ ...contactInfo, comments: text })}
            multiline
            numberOfLines={3}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Ваш заказ</Text>
          {cartItems.map((item) => (
            <View key={item.product.id} style={styles.orderItem}>
              <Text style={styles.itemName}>{item.product.name}</Text>
              <Text style={styles.itemDetails}>
                {item.quantity} шт. × {item.product.price.toLocaleString('ru-RU')} ₽
              </Text>
              <Text style={styles.itemTotal}>
                {(item.quantity * item.product.price).toLocaleString('ru-RU')} ₽
              </Text>
            </View>
          ))}
          
          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>Итого:</Text>
            <Text style={styles.totalPrice}>
              {getTotalPrice().toLocaleString('ru-RU')} ₽
            </Text>
          </View>
        </View>

        <Button onPress={handleSubmit} style={styles.submitButton}>
          Оформить заказ
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  logo: {
    paddingVertical: 16,
    marginBottom: 10,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 16,
  },
  commentsInput: {
    height: 80,
    textAlignVertical: 'top',
  },
  orderItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: colors.grey,
  },
  itemName: {
    flex: 2,
    fontSize: 16,
    color: colors.text,
  },
  itemDetails: {
    flex: 1,
    fontSize: 14,
    color: colors.textLight,
    textAlign: 'center',
  },
  itemTotal: {
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    textAlign: 'right',
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 2,
    borderTopColor: colors.primary,
  },
  totalLabel: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.text,
  },
  totalPrice: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.primary,
  },
  submitButton: {
    backgroundColor: colors.primary,
    marginTop: 20,
    marginBottom: 40,
  },
});
