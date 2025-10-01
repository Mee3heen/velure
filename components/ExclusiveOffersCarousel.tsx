
import React from 'react';
import { View, Text, Image, Pressable, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { colors, commonStyles } from '../styles/commonStyles';
import { router } from 'expo-router';

interface ExclusiveOffer {
  id: string;
  title: string;
  image: string;
  productId: string;
}

const exclusiveOffers: ExclusiveOffer[] = [
  {
    id: '1',
    title: 'Эксклюзивное предложение: Сыворотка с гиалуроновой кислотой',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&h=300&fit=crop',
    productId: '1',
  },
  {
    id: '2',
    title: 'Специальная цена: Крем с ретинолом',
    image: 'https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=800&h=300&fit=crop',
    productId: '2',
  },
  {
    id: '3',
    title: 'Новинка: Витамин С сыворотка',
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=800&h=300&fit=crop',
    productId: '3',
  },
];

const { width: screenWidth } = Dimensions.get('window');

export const ExclusiveOffersCarousel: React.FC = () => {
  const handleOfferPress = (productId: string) => {
    console.log('Exclusive offer pressed, product ID:', productId);
    // Navigate to product details - for now we'll just log
    // In a real app, you would navigate to a product detail screen
    // router.push(`/product/${productId}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Эксклюзивные предложения</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
      >
        {exclusiveOffers.map((offer) => (
          <Pressable
            key={offer.id}
            style={styles.offerCard}
            onPress={() => handleOfferPress(offer.productId)}
          >
            <Image source={{ uri: offer.image }} style={styles.offerImage} />
            <View style={styles.offerOverlay}>
              <Text style={styles.offerTitle}>{offer.title}</Text>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.text,
    textAlign: 'center',
    marginBottom: 15,
  },
  scrollView: {
    width: '100%',
  },
  scrollContent: {
    paddingHorizontal: 0,
  },
  offerCard: {
    width: screenWidth,
    height: 200,
    position: 'relative',
  },
  offerImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  offerOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 20,
  },
  offerTitle: {
    color: colors.background,
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    lineHeight: 24,
  },
});
