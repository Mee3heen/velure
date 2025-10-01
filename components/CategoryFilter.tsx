
import React, { useRef, useEffect } from 'react';
import { ScrollView, Pressable, Text, StyleSheet } from 'react-native';
import { colors } from '../styles/commonStyles';

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
}) => {
  const scrollViewRef = useRef<ScrollView>(null);

  useEffect(() => {
    // Scroll to the selected category when it changes
    const selectedIndex = categories.indexOf(selectedCategory);
    if (selectedIndex > 0 && scrollViewRef.current) {
      // Calculate approximate position - each button is roughly 100px wide
      const scrollPosition = selectedIndex * 100;
      scrollViewRef.current.scrollTo({ x: scrollPosition, animated: true });
    }
  }, [selectedCategory, categories]);

  return (
    <ScrollView
      ref={scrollViewRef}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
      maintainVisibleContentPosition={{
        minIndexForVisible: 0,
        autoscrollToTopThreshold: 10,
      }}
    >
      {categories.map((category) => (
        <Pressable
          key={category}
          style={[
            styles.categoryButton,
            selectedCategory === category && styles.selectedCategory,
          ]}
          onPress={() => {
            console.log('Selected category:', category);
            onSelectCategory(category);
          }}
        >
          <Text
            style={[
              styles.categoryText,
              selectedCategory === category && styles.selectedCategoryText,
            ]}
          >
            {category}
          </Text>
        </Pressable>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  categoryButton: {
    backgroundColor: colors.backgroundAlt,
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 12,
    borderWidth: 1,
    borderColor: colors.grey,
    minWidth: 80, // Ensure consistent button width for scroll calculation
  },
  selectedCategory: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  categoryText: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.text,
    textAlign: 'center',
  },
  selectedCategoryText: {
    color: colors.background,
  },
});
