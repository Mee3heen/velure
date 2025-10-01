
import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image, Pressable, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, commonStyles } from '@/styles/commonStyles';
import { Button } from '@/components/button';

interface NewsItem {
  id: string;
  title: string;
  date: string;
  description: string;
  image: string;
  type: 'news' | 'seminar';
  link?: string;
}

const newsAndSeminars: NewsItem[] = [
  {
    id: '1',
    title: 'Новые поступления препаратов Biogel',
    date: '15 января 2024',
    description: 'В наш ассортимент поступили новые препараты линейки Biogel для контурной пластики и биоревитализации.',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=200&fit=crop',
    type: 'news',
  },
  {
    id: '2',
    title: 'Семинар по применению филлеров AGT',
    date: '20 января 2024',
    description: 'Приглашаем на обучающий семинар по правильному применению филлеров AGT. Ведущий специалист расскажет о техниках введения.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=200&fit=crop',
    type: 'seminar',
    link: 'https://example.com/seminar-agt',
  },
  {
    id: '3',
    title: 'Обновление линейки Jufora',
    date: '25 января 2024',
    description: 'Компания Jufora представила обновленную линейку препаратов с улучшенной формулой.',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&h=200&fit=crop',
    type: 'news',
  },
  {
    id: '4',
    title: 'Мастер-класс по биоревитализации',
    date: '30 января 2024',
    description: 'Практический мастер-класс по современным методам биоревитализации. Работа с препаратами нового поколения.',
    image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=200&fit=crop',
    type: 'seminar',
    link: 'https://example.com/masterclass-biorevitalization',
  },
  {
    id: '5',
    title: 'Расширение географии поставок',
    date: '5 февраля 2024',
    description: 'Мы расширили географию наших поставок. Теперь доставляем препараты в новые регионы России и страны СНГ.',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=200&fit=crop',
    type: 'news',
  },
];

export default function NewsScreen() {
  const handleLinkPress = (link?: string) => {
    if (link) {
      Linking.openURL(link);
    }
  };

  const renderNewsItem = (item: NewsItem) => (
    <View key={item.id} style={styles.newsItem}>
      <Image source={{ uri: item.image }} style={styles.newsImage} />
      <View style={styles.newsContent}>
        <View style={styles.newsHeader}>
          <View style={[styles.typeTag, item.type === 'seminar' ? styles.seminarTag : styles.newsTag]}>
            <Text style={styles.typeText}>
              {item.type === 'seminar' ? 'СЕМИНАР' : 'НОВОСТИ'}
            </Text>
          </View>
          <Text style={styles.newsDate}>{item.date}</Text>
        </View>
        <Text style={styles.newsTitle}>{item.title}</Text>
        <Text style={styles.newsDescription}>{item.description}</Text>
        {item.link && (
          <Button
            variant="outline"
            size="small"
            onPress={() => handleLinkPress(item.link)}
            style={styles.linkButton}
          >
            Подробнее
          </Button>
        )}
      </View>
    </View>
  );

  return (
    <SafeAreaView style={commonStyles.wrapper}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Новости и семинары</Text>
          <Text style={styles.headerSubtitle}>
            Следите за последними новостями и участвуйте в обучающих мероприятиях
          </Text>
        </View>

        <View style={styles.newsList}>
          {newsAndSeminars.map(renderNewsItem)}
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Хотите получать уведомления о новых семинарах?
          </Text>
          <Button
            variant="primary"
            onPress={() => Linking.openURL('tel:+79001234567')}
            style={styles.contactButton}
          >
            Связаться с нами
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    padding: 20,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 8,
    textAlign: 'center',
  },
  headerSubtitle: {
    fontSize: 16,
    color: colors.textLight,
    textAlign: 'center',
    lineHeight: 22,
  },
  newsList: {
    paddingHorizontal: 20,
  },
  newsItem: {
    backgroundColor: colors.white,
    borderRadius: 12,
    marginBottom: 20,
    overflow: 'hidden',
    ...commonStyles.shadow,
  },
  newsImage: {
    width: '100%',
    height: 200,
    backgroundColor: colors.grey,
  },
  newsContent: {
    padding: 16,
  },
  newsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  typeTag: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  newsTag: {
    backgroundColor: colors.primary + '20',
  },
  seminarTag: {
    backgroundColor: '#4CAF50' + '20',
  },
  typeText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: colors.primary,
  },
  newsDate: {
    fontSize: 12,
    color: colors.textLight,
  },
  newsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 8,
    lineHeight: 24,
  },
  newsDescription: {
    fontSize: 14,
    color: colors.textLight,
    lineHeight: 20,
    marginBottom: 12,
  },
  linkButton: {
    alignSelf: 'flex-start',
  },
  footer: {
    padding: 20,
    alignItems: 'center',
    marginTop: 20,
  },
  footerText: {
    fontSize: 16,
    color: colors.text,
    textAlign: 'center',
    marginBottom: 16,
    lineHeight: 22,
  },
  contactButton: {
    minWidth: 200,
  },
});
