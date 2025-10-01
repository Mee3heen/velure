
import React from 'react';
import { View, Text, ScrollView, StyleSheet, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '@/components/button';
import { Logo } from '@/components/Logo';
import { colors, commonStyles } from '@/styles/commonStyles';

export default function AboutScreen() {
  const handleCall = () => {
    console.log('Opening phone dialer');
    Linking.openURL('tel:+79163434536');
  };

  const handleEmail = () => {
    console.log('Opening email client');
    Linking.openURL('mailto:store@velure.pro');
  };

  const handleWebsite = () => {
    console.log('Opening website');
    Linking.openURL('https://velure.pro');
  };

  return (
    <SafeAreaView style={commonStyles.wrapper}>
      <ScrollView contentContainerStyle={styles.container}>
        <Logo size="medium" style={styles.logo} />
        <Text style={commonStyles.title}>О компании</Text>
        
        <View style={commonStyles.card}>
          <Text style={commonStyles.subtitle}>VELURE</Text>
          <Text style={commonStyles.text}>
            Компания Velure — ведущий дистрибьютор косметологических препаратов для профессионалов индустрии красоты, предлагающий широкий ассортимент продукции из России, США, Европы и Кореи, включая инновационные бренды Biogel, AGT и Jufora. Мы осуществляем поставки по всей России и за рубеж, а также регулярно организуем обучающие семинары по применению препаратов для специалистов.
          </Text>
        </View>

        <View style={commonStyles.card}>
          <Text style={styles.sectionTitle}>Наши преимущества</Text>
          <Text style={styles.bulletPoint}>• Только сертифицированная продукция</Text>
          <Text style={styles.bulletPoint}>• Консультации специалистов</Text>
          <Text style={styles.bulletPoint}>• Быстрая доставка по всей России и за рубеж</Text>
          <Text style={styles.bulletPoint}>• Гарантия качества</Text>
          <Text style={styles.bulletPoint}>• Обучающие семинары для специалистов</Text>
          <Text style={styles.bulletPoint}>• Инновационные бренды Biogel, AGT и Jufora</Text>
        </View>

        <View style={commonStyles.card}>
          <Text style={styles.sectionTitle}>Контактная информация</Text>
          <Text style={commonStyles.text}>
            📍 Москва, ул. Водников, д. 2{'\n'}
            📞 +7 916 343-45-36{'\n'}
            📧 store@velure.pro{'\n'}
            🌐 velure.pro
          </Text>
          
          <View style={styles.buttonContainer}>
            <Button 
              variant="primary" 
              size="medium"
              onPress={handleCall} 
              style={styles.contactButton}
            >
              Позвонить
            </Button>
            <Button 
              variant="primary" 
              size="medium"
              onPress={handleEmail} 
              style={styles.contactButton}
            >
              Написать
            </Button>
            <Button 
              variant="primary" 
              size="medium"
              onPress={handleWebsite} 
              style={styles.contactButton}
            >
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
  logo: {
    paddingVertical: 16,
    marginBottom: 10,
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
  },
});
