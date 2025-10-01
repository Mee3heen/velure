
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
      
      <Text style={styles.companyName}>VELURE</Text>
      
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>
          Компания Velure — ведущий дистрибьютор косметологических препаратов для профессионалов индустрии красоты, предлагающий широкий ассортимент продукции из России, США, Европы и Кореи, включая инновационные бренды Biogel, AGT и Jufora. Мы осуществляем поставки по всей России и за рубеж, а также регулярно организуем обучающие семинары по применению препаратов для специалистов.
        </Text>
      </View>
      
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
    width: 200,
    height: 80,
    marginBottom: 10,
  },
  companyName: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 20,
    letterSpacing: 2,
  },
  descriptionContainer: {
    backgroundColor: colors.backgroundAlt,
    borderRadius: 12,
    padding: 20,
    marginBottom: 30,
  },
  description: {
    fontSize: 16,
    color: colors.text,
    lineHeight: 24,
    textAlign: 'center',
  },
});
