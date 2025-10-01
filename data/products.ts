
import { Product } from '../types/Product';

export const products: Product[] = [
  // Alchemy World - Premium Line
  {
    id: '1',
    name: 'Alchemy Premium Dermal Filler',
    description: 'Премиальный филлер на основе гиалуроновой кислоты высокой концентрации для глубокой коррекции морщин',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop',
    category: 'Филлеры',
    inStock: true,
  },
  {
    id: '2',
    name: 'Alchemy Premium Volume',
    description: 'Объемообразующий филлер для восстановления утраченных объемов лица и коррекции возрастных изменений',
    image: 'https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=400&h=400&fit=crop',
    category: 'Филлеры',
    inStock: true,
  },

  // Alchemy World - Lips Bio
  {
    id: '3',
    name: 'Alchemy Lips Bio Natural',
    description: 'Биосовместимый филлер для естественного увеличения губ с мягкой текстурой',
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&h=400&fit=crop',
    category: 'Филлеры',
    inStock: true,
  },
  {
    id: '4',
    name: 'Alchemy Lips Bio Volume',
    description: 'Специализированный препарат для создания объема губ с длительным эффектом',
    image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&h=400&fit=crop',
    category: 'Филлеры',
    inStock: true,
  },

  // Alchemy World - Beauty Set
  {
    id: '5',
    name: 'Alchemy Beauty Revitalizer',
    description: 'Комплексный биоревитализант для омоложения и восстановления кожи лица',
    image: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=400&h=400&fit=crop',
    category: 'Биоревитализанты',
    inStock: true,
  },
  {
    id: '6',
    name: 'Alchemy Beauty Hydra Complex',
    description: 'Увлажняющий комплекс с гиалуроновой кислотой для глубокого питания кожи',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop',
    category: 'Биоревитализанты',
    inStock: true,
  },

  // Alchemy World - Slim
  {
    id: '7',
    name: 'Alchemy Slim Body Contour',
    description: 'Препарат для коррекции контуров тела и борьбы с локальными жировыми отложениями',
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=400&fit=crop',
    category: 'Коррекция фигуры',
    inStock: true,
  },
  {
    id: '8',
    name: 'Alchemy Slim Cellulite Treatment',
    description: 'Инновационное средство для борьбы с целлюлитом и улучшения качества кожи',
    image: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?w=400&h=400&fit=crop',
    category: 'Коррекция фигуры',
    inStock: true,
  },

  // Alchemy World - Love Your Skin
  {
    id: '9',
    name: 'Love Your Skin Anti-Age',
    description: 'Антивозрастной комплекс для комплексного омоложения и регенерации кожи',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop',
    category: 'Биоревитализанты',
    inStock: true,
  },
  {
    id: '10',
    name: 'Love Your Skin Brightening',
    description: 'Осветляющий комплекс для выравнивания тона кожи и борьбы с пигментацией',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=400&fit=crop',
    category: 'Биоревитализанты',
    inStock: true,
  },

  // Jufora Products
  {
    id: '11',
    name: 'Jufora Hyaluronic Complex',
    description: 'Инновационный комплекс с гиалуроновой кислотой для глубокого увлажнения и омоложения',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&h=400&fit=crop',
    category: 'Биоревитализанты',
    inStock: true,
  },
  {
    id: '12',
    name: 'Jufora Peptide Therapy',
    description: 'Пептидная терапия для стимуляции регенерации и естественного омоложения кожи',
    image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=400&fit=crop',
    category: 'Биоревитализанты',
    inStock: true,
  },
  {
    id: '13',
    name: 'Jufora Collagen Booster',
    description: 'Мощный стимулятор выработки собственного коллагена для повышения упругости кожи',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=400&fit=crop',
    category: 'Коллагеностимуляторы',
    inStock: true,
  },
  {
    id: '14',
    name: 'Jufora Advanced Filler',
    description: 'Филлер нового поколения с улучшенной формулой для естественных результатов',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=400&fit=crop',
    category: 'Филлеры',
    inStock: true,
  },

  // Elia Grazia - Контурная пластика (Филлеры)
  {
    id: '15',
    name: 'Elia Grazia Contour Pro',
    description: 'Профессиональный филлер для контурной пластики лица с высокой вязкостью',
    image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=400&fit=crop',
    category: 'Филлеры',
    inStock: true,
  },
  {
    id: '16',
    name: 'Elia Grazia Volume Lift',
    description: 'Объемообразующий филлер для лифтинга и восстановления объемов средней зоны лица',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop',
    category: 'Филлеры',
    inStock: true,
  },
  {
    id: '17',
    name: 'Elia Grazia Fine Lines',
    description: 'Деликатный филлер для коррекции мелких морщин и поверхностных дефектов',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop',
    category: 'Филлеры',
    inStock: true,
  },

  // Elia Grazia - Коллагеностимуляторы
  {
    id: '18',
    name: 'Elia Grazia Collagen Activator',
    description: 'Мощный активатор синтеза коллагена для естественного омоложения кожи',
    image: 'https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=400&h=400&fit=crop',
    category: 'Коллагеностимуляторы',
    inStock: true,
  },
  {
    id: '19',
    name: 'Elia Grazia Poly-L-Lactic',
    description: 'Биостимулятор на основе поли-L-молочной кислоты для долгосрочного лифтинга',
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&h=400&fit=crop',
    category: 'Коллагеностимуляторы',
    inStock: true,
  },
  {
    id: '20',
    name: 'Elia Grazia Calcium Hydroxylapatite',
    description: 'Стимулятор коллагена на основе гидроксиапатита кальция для глубокой коррекции',
    image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&h=400&fit=crop',
    category: 'Коллагеностимуляторы',
    inStock: true,
  },

  // Elia Grazia - Биоревитализация
  {
    id: '21',
    name: 'Elia Grazia Bio Revital Plus',
    description: 'Премиальный биоревитализант с высокой концентрацией гиалуроновой кислоты',
    image: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=400&h=400&fit=crop',
    category: 'Биоревитализанты',
    inStock: true,
  },
  {
    id: '22',
    name: 'Elia Grazia Hydra Boost',
    description: 'Интенсивно увлажняющий биоревитализант для всех типов кожи',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop',
    category: 'Биоревитализанты',
    inStock: true,
  },
  {
    id: '23',
    name: 'Elia Grazia Vitamin Complex',
    description: 'Витаминный комплекс для биоревитализации с антиоксидантным действием',
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=400&fit=crop',
    category: 'Биоревитализанты',
    inStock: true,
  },

  // Elia Grazia - Полинуклеотиды
  {
    id: '24',
    name: 'Elia Grazia Polynucleotides DNA',
    description: 'Полинуклеотиды для глубокой регенерации и восстановления поврежденных тканей',
    image: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?w=400&h=400&fit=crop',
    category: 'Полинуклеотиды',
    inStock: true,
  },
  {
    id: '25',
    name: 'Elia Grazia RNA Complex',
    description: 'РНК-комплекс для стимуляции клеточного обновления и регенерации',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop',
    category: 'Полинуклеотиды',
    inStock: true,
  },
  {
    id: '26',
    name: 'Elia Grazia Salmon DNA',
    description: 'Полинуклеотиды лососевой ДНК для интенсивного омоложения и восстановления',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=400&fit=crop',
    category: 'Полинуклеотиды',
    inStock: true,
  },

  // Elia Grazia - Пилинги
  {
    id: '27',
    name: 'Elia Grazia TCA Peel',
    description: 'Трихлоруксусный пилинг для глубокого обновления кожи и коррекции рубцов',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&h=400&fit=crop',
    category: 'Пилинги',
    inStock: true,
  },
  {
    id: '28',
    name: 'Elia Grazia Glycolic Peel',
    description: 'Гликолевый пилинг для выравнивания тона кожи и борьбы с пигментацией',
    image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=400&fit=crop',
    category: 'Пилинги',
    inStock: true,
  },
  {
    id: '29',
    name: 'Elia Grazia Salicylic Peel',
    description: 'Салициловый пилинг для проблемной кожи и борьбы с акне',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=400&fit=crop',
    category: 'Пилинги',
    inStock: true,
  },
  {
    id: '30',
    name: 'Elia Grazia Lactic Peel',
    description: 'Молочный пилинг для деликатного обновления чувствительной кожи',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=400&fit=crop',
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
