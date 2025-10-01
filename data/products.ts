
import { Product } from '../types/Product';

export const products: Product[] = [
  // Biogel products
  {
    id: '1',
    name: 'Biogel Dermal Filler',
    description: 'Премиальный филлер на основе гиалуроновой кислоты для коррекции морщин и увеличения объема',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop',
    category: 'Филлеры',
    inStock: true,
  },
  {
    id: '2',
    name: 'Biogel Premium Line',
    description: 'Линейка премиальных препаратов для контурной пластики с длительным эффектом',
    image: 'https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=400&h=400&fit=crop',
    category: 'Филлеры',
    inStock: true,
  },
  {
    id: '3',
    name: 'Biogel Lips Bio',
    description: 'Специализированный филлер для увеличения и коррекции формы губ',
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&h=400&fit=crop',
    category: 'Филлеры',
    inStock: true,
  },
  {
    id: '4',
    name: 'Biogel Beauty Set',
    description: 'Комплексный набор препаратов для омоложения и восстановления кожи',
    image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&h=400&fit=crop',
    category: 'Биоревитализанты',
    inStock: true,
  },
  {
    id: '5',
    name: 'Biogel Slim',
    description: 'Препарат для коррекции фигуры и борьбы с локальными жировыми отложениями',
    image: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=400&h=400&fit=crop',
    category: 'Коррекция фигуры',
    inStock: true,
  },
  {
    id: '6',
    name: 'Biogel Love Your Skin',
    description: 'Комплексная программа ухода за кожей с биоактивными компонентами',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop',
    category: 'Биоревитализанты',
    inStock: true,
  },
  
  // Jufora products
  {
    id: '7',
    name: 'Jufora Hyaluronic Complex',
    description: 'Инновационный комплекс с гиалуроновой кислотой для глубокого увлажнения',
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=400&fit=crop',
    category: 'Биоревитализанты',
    inStock: true,
  },
  {
    id: '8',
    name: 'Jufora Peptide Therapy',
    description: 'Пептидная терапия для стимуляции регенерации и омоложения кожи',
    image: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?w=400&h=400&fit=crop',
    category: 'Биоревитализанты',
    inStock: true,
  },
  {
    id: '9',
    name: 'Jufora Collagen Booster',
    description: 'Стимулятор выработки коллагена для повышения упругости кожи',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop',
    category: 'Коллагеностимуляторы',
    inStock: true,
  },
  
  // AGT products (Elia Grazia)
  {
    id: '10',
    name: 'AGT Contour Filler',
    description: 'Профессиональный филлер для контурной пластики лица',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=400&fit=crop',
    category: 'Филлеры',
    inStock: true,
  },
  {
    id: '11',
    name: 'AGT Collagen Stimulator',
    description: 'Мощный стимулятор выработки собственного коллагена',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&h=400&fit=crop',
    category: 'Коллагеностимуляторы',
    inStock: true,
  },
  {
    id: '12',
    name: 'AGT Bio Revitalizer',
    description: 'Биоревитализант нового поколения с пролонгированным действием',
    image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=400&fit=crop',
    category: 'Биоревитализанты',
    inStock: true,
  },
  {
    id: '13',
    name: 'AGT Polynucleotides',
    description: 'Полинуклеотиды для глубокой регенерации и восстановления тканей',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=400&fit=crop',
    category: 'Полинуклеотиды',
    inStock: true,
  },
  {
    id: '14',
    name: 'AGT Chemical Peel',
    description: 'Профессиональный химический пилинг для обновления кожи',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=400&fit=crop',
    category: 'Пилинги',
    inStock: true,
  },
  {
    id: '15',
    name: 'AGT Advanced Peel',
    description: 'Усовершенствованный пилинг для решения сложных проблем кожи',
    image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=400&fit=crop',
    category: 'Пилинги',
    inStock: true,
  },
];

export const categories = [
  'Все',
  'Филлеры',
  'Коллагеностимуляторы',
  'Биоревитализанты',
  'Полинуклеотиды',
  'Пилинги',
  'Коррекция фигуры',
];
