
import React, { useState, useMemo } from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ProductCard } from '@/components/ProductCard';
import { CategoryFilter } from '@/components/CategoryFilter';
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
      
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
    </View>
  );

  return (
    <SafeAreaView style={[commonStyles.wrapper, styles.safeArea]}>
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
  safeArea: {
    paddingTop: 0, // Убираем отступ сверху
  },
  container: {
    paddingHorizontal: 10,
    paddingBottom: 10,
    paddingTop: 0, // Убираем отступ сверху контейнера
  },
  header: {
    alignItems: 'center',
    marginBottom: 20, // Уменьшаем отступ снизу
    paddingHorizontal: 10,
    paddingTop: 10, // Минимальный отступ сверху только для логотипа
  },
  logo: {
    width: '80%',  // 80% ширины экрана, оставляя 10% с каждой стороны
    height: undefined,
    aspectRatio: 2.5, // Соотношение сторон логотипа
    marginBottom: 15, // Уменьшаем отступ между логотипом и категориями
  },
});
