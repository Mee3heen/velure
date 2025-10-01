
import React, { useState, useMemo } from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ProductCard } from '@/components/ProductCard';
import { CategoryFilter } from '@/components/CategoryFilter';
import { ExclusiveOffersCarousel } from '@/components/ExclusiveOffersCarousel';
import { useCartContext } from '@/contexts/CartContext';
import { products, categories } from '@/data/products';
import { colors, commonStyles } from '@/styles/commonStyles';
import { Product } from '@/types/Product';

export default function CatalogScreen() {
  const [selectedCategory, setSelectedCategory] = useState('Все');
  const { addToCart } = useCartContext();

  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'Все') {
      return products;
    }
    return products.filter(product => product.category === selectedCategory);
  }, [selectedCategory]);

  const renderProduct = ({ item }: { item: Product }) => (
    <ProductCard product={item} onAddToCart={addToCart} />
  );

  const renderHeader = () => (
    <View style={styles.header}>
      <Image 
        source={require('@/assets/images/6bcff31b-3594-4a6c-84d5-f471bf927bc0.jpeg')} 
        style={styles.logo}
        resizeMode="contain"
      />
      
      <ExclusiveOffersCarousel />
      
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
    </View>
  );

  return (
    <SafeAreaView style={commonStyles.wrapper}>
      <FlatList
        data={filteredProducts}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.container}
        ListHeaderComponent={renderHeader}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
    paddingHorizontal: 10,
  },
  logo: {
    width: 750,  // Increased from 300 to 750 (2.5x larger)
    height: 300, // Increased from 120 to 300 (2.5x larger)
    marginBottom: 30,
  },
});
