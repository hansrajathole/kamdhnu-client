import React from 'react';
import { Check } from 'lucide-react';
import { useNavigate , useLocation } from 'react-router-dom';
import Footer from '../components/Footer';
const SubscriptionPlans = () => {
  const plans = [
    {
      id: 'weekly',
      title: 'Weekly 1L/day',
      price: '₹420',
      period: 'per week',
      features: [
        '1L fresh milk daily',
        'Pause anytime',
        'Doorstep delivery'
      ],
      isPopular: false
    },
    {
      id: 'monthly',
      title: 'Monthly 1L/day',
      price: '₹1650',
      period: 'per month',
      features: [
        'Best savings',
        '1L milk daily',
        'Flexible delivery schedule'
      ],
      isPopular: true
    },
    {
      id: 'family',
      title: 'Monthly 2L/day',
      price: '₹3200',
      period: 'per month',
      features: [
        'Family plan',
        '2L milk daily',
        'Priority support'
      ],
      isPopular: false
    }
  ];

    const location = useLocation();

  return (
    <section className="bg-[#F0F0F0] pt-16 text-primary">
      <div className="max-w-7xl mx-auto px-4 pb-20">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#386641] mb-4">
            Subscription Plans
          </h2>
          <p className=" text-lg max-w-3xl mx-auto leading-relaxed">
            Choose a plan that fits your routine. Pause or modify anytime with our flexible delivery options.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto ">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-[#FFFFFF] rounded-2xl p-8 border transition-all duration-300 hover:transform hover:scale-105 ${
                plan.isPopular 
                  ? 'border-yellow-500 shadow-xl shadow-yellow-100/5' 
                  : 'border-gray-700 hover:border-gray-600'
              }`}
            >
              {/* Popular Badge */}
              {plan.isPopular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-yellow-500 text-black px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-6">
                <h3 className="text-green-400 text-lg font-semibold mb-4">
                  {plan.title}
                </h3>
                <div className="mb-2">
                  <span className="text-4xl md:text-5xl font-bold  text-charcoal/90 ">
                    {plan.price}
                  </span>
                </div>
                <p className=" text-sm">
                  {plan.period}
                </p>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 text-amber-300 rounded-full flex items-center justify-center flex-shrink-0">
                       <Check size={18} className="text-accent mt-0.5" />
                    </div>
                    <span className="text-gray-300 text-sm">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Subscribe Button */}
              <button className={`w-full py-3 px-6 rounded-xl font-semibold text-white transition-all duration-300 ${
                plan.isPopular
                  ? 'bg-green-600 hover:bg-green-700 shadow-lg'
                  : 'bg-green-600 hover:bg-green-700'
              }`}>
                Subscribe
              </button>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-gray-400 text-sm">
            All plans include free delivery within city limits • Cancel anytime • No hidden fees
          </p>
        </div>
      </div>

      {
        location.pathname === '/subscription-plans' && <Footer />
      }
    </section>
  );
};

export default SubscriptionPlans;