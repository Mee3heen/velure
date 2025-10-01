
import React from 'react';
import { View, Text, ScrollView, StyleSheet, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '@/components/button';
import { colors, commonStyles } from '@/styles/commonStyles';

export default function AboutScreen() {
  const handleCall = () => {
    console.log('Opening phone dialer');
    Linking.openURL('tel:+79001234567');
  };

  const handleEmail = () => {
    console.log('Opening email client');
    Linking.openURL('mailto:info@cosmetica.ru');
  };

  const handleWebsite = () => {
    console.log('Opening website');
    Linking.openURL('https://cosmetica.ru');
  };

  return (
    <SafeAreaView style={commonStyles.wrapper}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={commonStyles.title}>О компании</Text>
        
        <View style={commonStyles.card}>
          <Text style={commonStyles.subtitle}>Cosmetica Professional</Text>
          <Text style={commonStyles.text}>
            Мы специализируемся на продаже профессиональных косметологических средств 
            высочайшего качества. Наша продукция разработана ведущими специалистами 
            в области дерматологии и косметологии.
          </Text>
        </View>

        <View style={commonStyles.card}>
          <Text style={styles.sectionTitle}>Наши преимущества</Text>
          <Text style={styles.bulletPoint}>• Только сертифицированная продукция</Text>
          <Text style={styles.bulletPoint}>• Консультации специалистов</Text>
          <Text style={styles.bulletPoint}>• Быстрая доставка по всей России</Text>
          <Text style={styles.bulletPoint}>• Гарантия качества</Text>
          <Text style={styles.bulletPoint}>• Индивидуальный подход к каждому клиенту</Text>
        </View>

        <View style={commonStyles.card}>
          <Text style={styles.sectionTitle}>Контактная информация</Text>
          <Text style={commonStyles.text}>
            📍 Москва, ул. Красная Площадь, д. 1{'\n'}
            📞 +7 (900) 123-45-67{'\n'}
            📧 info@cosmetica.ru{'\n'}
            🌐 www.cosmetica.ru
          </Text>
          
          <View style={styles.buttonContainer}>
            <Button onPress={handleCall} style={styles.contactButton}>
              Позвонить
            </Button>
            <Button onPress={handleEmail} style={styles.contactButton}>
              Написать
            </Button>
            <Button onPress={handleWebsite} style={styles.contactButton}>
              Сайт
            </Button>
          </View>
        </View>

        <View style={commonStyles.card}>
          <Text style={styles.sectionTitle}>Режим работы</Text>
          <Text style={commonStyles.text}>
            Понедельник - Пятница: 9:00 - 18:00{'\n'}
            Суббота: 10:00 - 16:00{'\n'}
            Воскресенье: выходной
          </Text>
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
    marginBottom: 12,
  },
  bulletPoint: {
    fontSize: 16,
    color: colors.text,
    marginBottom: 8,
    lineHeight: 24,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  contactButton: {
    flex: 1,
    marginHorizontal: 4,
    backgroundColor: colors.primary,
  },
});
