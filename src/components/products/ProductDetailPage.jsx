import React, { useState } from 'react';
import {products} from '../../data/products';
import { useNavigate , useLocation , useParams } from 'react-router-dom';
import { ArrowLeft, Star, Heart, Share2, ShoppingCart, Plus, Minus, Truck, Shield, RefreshCw } from 'lucide-react';

const ProductDetailPage = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  let {id} = useParams()


  console.log(id);
  

  // Sample product data (this would typically come from props or API)
  const product = products.find((item) => String(item.id) === String(id));

  if (!product) {
    console.warn('Product not found for id:', id);
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-400">Product not found.</p>
      </div>
  );
}
  const similarProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);
  const handleQuantityChange = (type) => {
    if (type === 'increment') {
      setQuantity(prev => prev + 1);
    } else if (type === 'decrement' && quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const handleAddToCart = () => {
    console.log(`Added ${quantity} ${product.name} to cart`);
    // Add your cart logic here
  };

  const handleBuyNow = () => {
    console.log(`Buy now: ${quantity} ${product.name}`);
    // Add your buy now logic here
  };

  return (
    <div className="min-h-screen b">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <button className="flex items-center gap-2 mb-8 text-emerald-400 hover:text-emerald-300 transition-colors group"
        onClick={() => navigate(-1)}
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Products</span>
        </button>

        {/* Product Detail Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <img 
                src={product.images[selectedImage]} 
                alt={product.name}
                className="w-full h-96 object-cover rounded-xl"
              />
              <button 
                onClick={() => setIsWishlisted(!isWishlisted)}
                className="absolute top-8 right-8 p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
              >
                <Heart className={`w-6 h-6 ${isWishlisted ? 'fill-red-500 text-red-500' : 'text-white'}`} />
              </button>
            </div>
            
            {/* Thumbnail Images */}
            <div className="flex gap-3">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative overflow-hidden rounded-lg border-2 transition-all ${
                    selectedImage === index ? 'border-emerald-400' : 'border-white/30 hover:border-white/50'
                  }`}
                >
                  <img src={image} alt={`${product.name} ${index + 1}`} className="w-20 h-20 object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">{product.name}</h1>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-400'}`} />
                  ))}
                  <span className="text-yellow-400 ml-2">{product.rating}</span>
                </div>
                <span className="text-gray-400">({product.reviews} reviews)</span>
              </div>
            </div>

            {/* Price */}
            <div className="space-y-2">
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-bold text-emerald-400">₹{product.price}</span>
                <span className="text-lg text-gray-400 line-through">₹{product.originalPrice}</span>
                <span className="bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-sm font-medium">
                  {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                </span>
              </div>
              <p className="text-gray-400">{product.unit}</p>
            </div>

            {/* Description */}
            <p className="text-gray-300 text-lg leading-relaxed">{product.description}</p>

            {/* Features */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Key Features</h3>
              <div className="grid grid-cols-2 gap-2">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-gray-300">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center gap-4">
              <span className="text-white font-medium">Quantity:</span>
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => handleQuantityChange('decrement')}
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                  disabled={quantity <= 1}
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="text-xl font-semibold text-white w-8 text-center">{quantity}</span>
                <button 
                  onClick={() => handleQuantityChange('increment')}
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button 
                onClick={handleAddToCart}
                className="flex-1 bg-white/10 hover:bg-white/20 text-white py-4 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 border border-white/30"
              >
                <ShoppingCart className="w-5 h-5" />
                Add to Cart
              </button>
              <button 
                onClick={handleBuyNow}
                className="flex-1 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white py-4 rounded-xl font-semibold transition-all"
              >
                Buy Now
              </button>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/20">
              <div className="flex items-center gap-3 text-gray-300">
                <Truck className="w-6 h-6 text-emerald-400" />
                <div>
                  <p className="font-medium">Free Delivery</p>
                  <p className="text-sm text-gray-500">Orders above ₹500</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Shield className="w-6 h-6 text-emerald-400" />
                <div>
                  <p className="font-medium">Quality Assured</p>
                  <p className="text-sm text-gray-500">100% Fresh</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <RefreshCw className="w-6 h-6 text-emerald-400" />
                <div>
                  <p className="font-medium">Easy Returns</p>
                  <p className="text-sm text-gray-500">7 day policy</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Nutritional Information */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">Nutritional Information</h2>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <p className="text-gray-400 mb-4">Per 100ml serving</p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {Object.entries(product.nutritionalInfo).map(([key, value]) => (
                <div key={key} className="text-center">
                  <div className="text-2xl font-bold text-emerald-400 mb-1">{value}</div>
                  <div className="text-gray-300 capitalize">{key}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Similar Products */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-8">Similar Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {similarProducts.map((similarProduct) => (
              <div key={similarProduct.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-emerald-400/50 transition-all group cursor-pointer">
                <div className="relative mb-4">
                  <img 
                    src={similarProduct.image} 
                    alt={similarProduct.name}
                    className="w-full h-48 object-cover rounded-xl group-hover:scale-105 transition-transform"
                  />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                  {similarProduct.name}
                </h3>
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < Math.floor(similarProduct.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-400'}`} />
                    ))}
                  </div>
                  <span className="text-yellow-400 text-sm">{similarProduct.rating}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xl font-bold text-emerald-400">₹{similarProduct.price}</span>
                    {similarProduct.unit && (
                      <p className="text-gray-400 text-sm">{similarProduct.unit}</p>
                    )}
                  </div>
                  <button className="bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-400 p-2 rounded-lg transition-colors">
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;