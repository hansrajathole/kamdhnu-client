import farmFreshMilk from '../assets/1-farm-fresh-milk.png'
import buffaloMilk from '../assets/2-buffalo-milk-bottle.png'
import jarOfGhee from '../assets/3-jar-of-ghee.png' 
import paneerrBlock from '../assets/4-fresh-paneer-block.png'


export const products = [
  {
    id: 1,
    name: "A2 Desi Cow Milk",
    price: 70,
    originalPrice: 85,
    unit: "per liter",
    category: "Milk",
    rating: 4.8,
    reviews: 124,
    description: "Premium-quality A2 Desi Cow Milk sourced with care. Enjoy freshness and authentic taste, perfect for everyday nutrition and cooking.",
    images: [
      "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=500&h=500&fit=crop"
    ],
    features: [
      "100% Pure A2 Protein",
      "Farm Fresh Daily",
      "No Preservatives",
      "Rich in Nutrients",
      "Ethically Sourced"
    ],
    nutritionalInfo: {
      protein: "3.2g",
      fat: "3.8g",
      carbs: "4.7g",
      calcium: "120mg",
      calories: "64"
    }
  },
  {
    id: 2,
    name: "Buffalo Milk",
    price: 65,
    originalPrice: 75,
    unit: "per liter",
    category: "Milk",
    rating: 4.6,
    reviews: 89,
    description: "Rich and creamy Buffalo Milk with high fat content. Perfect for making traditional sweets, tea, and authentic dairy products.",
    images: [
      "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=500&h=500&fit=crop"
    ],
    features: [
      "High Fat Content",
      "Rich & Creamy",
      "Traditional Taste",
      "Perfect for Sweets",
      "Daily Fresh Supply"
    ],
    nutritionalInfo: {
      protein: "4.3g",
      fat: "6.9g",
      carbs: "5.2g",
      calcium: "169mg",
      calories: "97"
    }
  },
  {
    id: 3,
    name: "Pure Ghee",
    price: 450,
    originalPrice: 520,
    unit: "per 500g",
    category: "Ghee",
    rating: 4.9,
    reviews: 156,
    description: "Traditional Pure Ghee made from A2 cow milk. Rich aroma, golden color, and authentic taste for cooking and religious ceremonies.",
    images: [
      "https://images.unsplash.com/photo-1589985563557-71d4e5a5c5a5?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1609501676725-7186f96d9e58?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1628777155426-9fc4ebc36718?w=500&h=500&fit=crop"
    ],
    features: [
      "100% Pure A2 Ghee",
      "Traditional Method",
      "Rich Aroma",
      "Golden Color",
      "No Additives"
    ],
    nutritionalInfo: {
      protein: "0g",
      fat: "99.8g",
      carbs: "0g",
      calcium: "0mg",
      calories: "900"
    }
  },
  {
    id: 4,
    name: "Fresh Paneer",
    price: 120,
    originalPrice: 140,
    unit: "per 250g",
    category: "Paneer",
    rating: 4.7,
    reviews: 98,
    description: "Soft and fresh cottage cheese made daily from pure milk. Perfect for curries, grilling, and healthy protein intake.",
    images: [
      "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1599909021654-7de2b027f9ed?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1574484284002-952d92456975?w=500&h=500&fit=crop"
    ],
    features: [
      "Made Daily Fresh",
      "High Protein",
      "Soft Texture",
      "No Preservatives",
      "Pure Milk Only"
    ],
    nutritionalInfo: {
      protein: "18g",
      fat: "20g",
      carbs: "1.2g",
      calcium: "208mg",
      calories: "265"
    }
  },
  {
    id: 5,
    name: "Organic Curd",
    price: 45,
    originalPrice: 55,
    unit: "per 500g",
    category: "Curd",
    rating: 4.5,
    reviews: 67,
    description: "Thick and creamy organic curd with live cultures. Made from organic milk, perfect for digestion and probiotics.",
    images: [
      "https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1571212515416-fccf79104b1c?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=500&h=500&fit=crop"
    ],
    features: [
      "Live Probiotic Cultures",
      "Organic Certified",
      "Thick & Creamy",
      "Aids Digestion",
      "No Artificial Flavors"
    ],
    nutritionalInfo: {
      protein: "3.5g",
      fat: "4.3g",
      carbs: "4.7g",
      calcium: "121mg",
      calories: "61"
    }
  },
  {
    id: 6,
    name: "Skimmed Milk",
    price: 60,
    originalPrice: 70,
    unit: "per liter",
    category: "Milk",
    rating: 4.4,
    reviews: 78,
    description: "Low-fat skimmed milk perfect for weight management and fitness enthusiasts. All nutrition with reduced fat content.",
    images: [
      "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=500&h=500&fit=crop"
    ],
    features: [
      "Low Fat Content",
      "High Protein",
      "Weight Management",
      "Fitness Friendly",
      "All Essential Nutrients"
    ],
    nutritionalInfo: {
      protein: "3.4g",
      fat: "0.1g",
      carbs: "5.0g",
      calcium: "125mg",
      calories: "34"
    }
  },
  {
    id: 7,
    name: "Flavored Lassi",
    price: 35,
    originalPrice: 40,
    unit: "per 250ml",
    category: "Beverages",
    rating: 4.3,
    reviews: 112,
    description: "Traditional flavored lassi made with fresh curd and natural ingredients. Available in mango, rose, and cardamom flavors.",
    images: [
      "https://images.unsplash.com/photo-1571212515416-fccf79104b1c?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=500&h=500&fit=crop"
    ],
    features: [
      "Natural Flavors",
      "Probiotic Benefits",
      "Refreshing Taste",
      "Traditional Recipe",
      "Multiple Flavors"
    ],
    nutritionalInfo: {
      protein: "3.1g",
      fat: "2.8g",
      carbs: "12g",
      calcium: "110mg",
      calories: "85"
    }
  },
  {
    id: 8,
    name: "Cottage Cheese Cubes",
    price: 150,
    originalPrice: 170,
    unit: "per 200g",
    category: "Paneer",
    rating: 4.6,
    reviews: 45,
    description: "Pre-cut cottage cheese cubes ready for cooking. Perfect for quick curries, salads, and grilling. Saves preparation time.",
    images: [
      "https://images.unsplash.com/photo-1574484284002-952d92456975?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1599909021654-7de2b027f9ed?w=500&h=500&fit=crop"
    ],
    features: [
      "Pre-Cut Cubes",
      "Ready to Cook",
      "Time Saver",
      "Perfect Size",
      "Restaurant Quality"
    ],
    nutritionalInfo: {
      protein: "18g",
      fat: "20g",
      carbs: "1.2g",
      calcium: "208mg",
      calories: "265"
    }
  },
  {
    id: 9,
    name: "Flavored Milk",
    price: 25,
    originalPrice: 30,
    unit: "per 200ml",
    category: "Beverages",
    rating: 4.2,
    reviews: 134,
    description: "Delicious flavored milk in chocolate, strawberry, and vanilla varieties. Perfect for kids and a healthy snack option.",
    images: [
      "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=500&h=500&fit=crop"
    ],
    features: [
      "Natural Flavoring",
      "Kid Friendly",
      "Multiple Varieties",
      "Nutritious Snack",
      "No Artificial Colors"
    ],
    nutritionalInfo: {
      protein: "3.0g",
      fat: "3.2g",
      carbs: "12g",
      calcium: "115mg",
      calories: "85"
    }
  },
  {
    id: 10,
    name: "Desi Buttermilk",
    price: 20,
    originalPrice: 25,
    unit: "per 250ml",
    category: "Beverages",
    rating: 4.7,
    reviews: 92,
    description: "Traditional spiced buttermilk with mint, ginger, and cumin. Refreshing summer drink with digestive properties.",
    images: [
      "https://images.unsplash.com/photo-1571212515416-fccf79104b1c?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=500&h=500&fit=crop"
    ],
    features: [
      "Traditional Spices",
      "Digestive Properties",
      "Summer Refresher",
      "Natural Ingredients",
      "Cooling Effect"
    ],
    nutritionalInfo: {
      protein: "2.5g",
      fat: "0.5g",
      carbs: "4.2g",
      calcium: "95mg",
      calories: "30"
    }
  },
  {
    id: 11,
    name: "Greek Yogurt",
    price: 80,
    originalPrice: 95,
    unit: "per 200g",
    category: "Curd",
    rating: 4.8,
    reviews: 76,
    description: "Thick and protein-rich Greek yogurt strained to perfection. Ideal for fitness enthusiasts and healthy breakfast options.",
    images: [
      "https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1571212515416-fccf79104b1c?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=500&h=500&fit=crop"
    ],
    features: [
      "High Protein",
      "Thick Consistency",
      "Strained Process",
      "Fitness Friendly",
      "Versatile Use"
    ],
    nutritionalInfo: {
      protein: "10g",
      fat: "0.4g",
      carbs: "6g",
      calcium: "110mg",
      calories: "59"
    }
  },
  {
    id: 12,
    name: "Organic Butter",
    price: 280,
    originalPrice: 320,
    unit: "per 200g",
    category: "Butter",
    rating: 4.5,
    reviews: 63,
    description: "Creamy organic butter made from organic cream. Perfect for baking, cooking, and spreading on fresh bread.",
    images: [
      "https://images.unsplash.com/photo-1589985563557-71d4e5a5c5a5?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1628777155426-9fc4ebc36718?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1609501676725-7186f96d9e58?w=500&h=500&fit=crop"
    ],
    features: [
      "Organic Certified",
      "Creamy Texture",
      "Perfect for Baking",
      "Natural Process",
      "Rich Flavor"
    ],
    nutritionalInfo: {
      protein: "0.9g",
      fat: "81g",
      carbs: "0.1g",
      calcium: "24mg",
      calories: "717"
    }
  }
];



export const categories = ['All', 'Milk', 'Ghee', 'Paneer', 'Curd','Beverages','Butter'];

