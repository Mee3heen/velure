
import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router, Stack } from 'expo-router';
import { Button } from '@/components/button';
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
    message: '',
  });

  const handleSubmit = async () => {
    console.log('Submitting order with contact info:', contactInfo);
    
    if (!contactInfo.name.trim() || !contactInfo.phone.trim() || !contactInfo.address.trim()) {
      Alert.alert('Ошибка', 'Пожалуйста, заполните имя, телефон и адрес');
      return;
    }

    try {
      // Формируем сообщение для Telegram
      const orderDetails = cartItems.map(item => 
        `${item.product.name} - ${item.quantity} шт.`
      ).join('\n');

      const message = `🛍️ НОВЫЙ ЗАКАЗ\n\n` +
        `👤 Клиент: ${contactInfo.name}\n` +
        `📞 Телефон: ${contactInfo.phone}\n` +
        `📧 Email: ${contactInfo.email || 'не указан'}\n` +
        `📍 Адрес: ${contactInfo.address}\n\n` +
        `📦 Заказ:\n${orderDetails}\n\n` +
        `💬 Комментарий: ${contactInfo.message || 'отсутствует'}`;

      // Здесь должна быть отправка в Telegram Bot API
      // Для демонстрации просто показываем alert
      console.log('Order message for Telegram:', message);
      
      Alert.alert(
        'Заказ оформлен!',
        'Спасибо за ваш заказ! Мы свяжемся с вами в ближайшее время.',
        [
          {
            text: 'OK',
            onPress: () => {
              clearCart();
              router.replace('/(tabs)');
            },
          },
        ]
      );
    } catch (error) {
      console.error('Error submitting order:', error);
      Alert.alert('Ошибка', 'Не удалось оформить заказ. Попробуйте еще раз.');
    }
  };

  return (
    <SafeAreaView style={commonStyles.wrapper}>
      <Stack.Screen options={{ title: 'Оформление заказа' }} />
      
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={commonStyles.title}>Оформление заказа</Text>
        
        <View style={commonStyles.card}>
          <Text style={styles.sectionTitle}>Ваш заказ</Text>
          {cartItems.map((item) => (
            <View key={item.product.id} style={styles.orderItem}>
              <Text style={styles.itemName}>{item.product.name}</Text>
              <Text style={styles.itemDetails}>
                {item.quantity} шт.
              </Text>
            </View>
          ))}
        </View>

        <View style={commonStyles.card}>
          <Text style={styles.sectionTitle}>Контактные данные</Text>
          
          <TextInput
            style={commonStyles.input}
            placeholder="Ваше имя *"
            value={contactInfo.name}
            onChangeText={(text) => setContactInfo(prev => ({ ...prev, name: text }))}
          />
          
          <TextInput
            style={commonStyles.input}
            placeholder="Телефон *"
            value={contactInfo.phone}
            onChangeText={(text) => setContactInfo(prev => ({ ...prev, phone: text }))}
            keyboardType="phone-pad"
          />
          
          <TextInput
            style={commonStyles.input}
            placeholder="Email"
            value={contactInfo.email}
            onChangeText={(text) => setContactInfo(prev => ({ ...prev, email: text }))}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          
          <TextInput
            style={[commonStyles.input, styles.addressInput]}
            placeholder="Адрес доставки *"
            value={contactInfo.address}
            onChangeText={(text) => setContactInfo(prev => ({ ...prev, address: text }))}
            multiline
            numberOfLines={3}
            textAlignVertical="top"
          />
          
          <TextInput
            style={[commonStyles.input, styles.messageInput]}
            placeholder="Комментарий к заказу"
            value={contactInfo.message}
            onChangeText={(text) => setContactInfo(prev => ({ ...prev, message: text }))}
            multiline
            numberOfLines={4}
            textAlignVertical="top"
          />
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>📱 Уведомления в Telegram</Text>
          <Text style={styles.infoText}>
            После оформления заказа информация о нем будет отправлена нашим менеджерам в Telegram. 
            Мы свяжемся с вами в течение 30 минут для подтверждения заказа и уточнения деталей доставки.
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <Button onPress={handleSubmit} style={styles.submitButton}>
            Отправить заказ
          </Button>
          
          <Button 
            onPress={() => router.back()} 
            style={styles.backButton}
            variant="secondary"
          >
            Назад к корзине
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 16,
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
    fontSize: 16,
    color: colors.text,
    flex: 1,
    marginRight: 12,
  },
  itemDetails: {
    fontSize: 14,
    color: colors.textLight,
  },
  addressInput: {
    height: 80,
  },
  messageInput: {
    height: 100,
  },
  infoCard: {
    backgroundColor: colors.secondary,
    borderRadius: 12,
    padding: 16,
    marginVertical: 16,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 8,
  },
  infoText: {
    fontSize: 14,
    color: colors.textLight,
    lineHeight: 20,
  },
  buttonContainer: {
    marginTop: 20,
  },
  submitButton: {
    backgroundColor: colors.primary,
    marginBottom: 12,
  },
  backButton: {
    backgroundColor: colors.backgroundAlt,
  },
});
