
import React, { useState, useMemo } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
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
      <Text style={commonStyles.title}>Косметологические средства</Text>
      <Text style={commonStyles.text}>
        Профессиональная косметика для здоровья и красоты вашей кожи
      </Text>
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
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});
