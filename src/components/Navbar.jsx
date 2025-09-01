import React, { useState, useEffect } from 'react';
import { Sun, Moon, ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Spin as Hamburger } from 'hamburger-react'

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');
  const [isOpen, setOpen] = useState(false)
  const navigate = useNavigate();

 useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved) {
      setIsDark(saved === 'dark');
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDark(true);
    }
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(v => !v);


  const navItems = [
    {btn :'Home' , link : "/"},
    {btn :'Subscription Plans' , link : "/subscription-plans"},
    {btn :'Products' , link : "/products"},
    {btn :'About Us' , link : "/about"},
    {btn :'Policies' , link : "/policies/privacy"},
    {btn :'Contact' , link : "/contact"}
  ];

  return (
    <>
      <nav className=" sticky top-0 z-50 transition-colors duration-300 backdrop-blur-2xl border-b border-amber-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* Logo */}
            <div className="flex items-center gap-2 cursor-pointer"
            onClick={() => navigate('/')}
            >
              <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">K</span>
              </div>
              <span className="text-xl font-semibold text-[#386641]">
                Kamdhnu
              </span>
            </div>

            {/* Navigation Links */}
             <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.btn}
                  onClick={() => {
                    setActiveLink(item.btn);
                    navigate(item.link);
                  }}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    activeLink === item.btn ? 'text-orange-600 dark:text-yellow-400' : ''
                  }`}
                >
                  {item.btn}
                  {activeLink === item.btn && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-600 dark:bg-yellow-400 transform origin-left"></div>
                  )}
                </button>
              ))}
            </div>
            {/* Right Actions */}
            <div className="flex items-center gap-4">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg   transition-colors duration-200"
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <Sun className="w-5 h-5 text-yellow-500" />
                ) : (
                  <Moon className="w-5 h-5 text-white" />
                )}
              </button>

              <button
              onClick={() => navigate('/cart')}
              className="relative p-2 rounded-lg transition-colors duration-200 "
            >
              <ShoppingCart className="w-5 h-5" />
            </button>



              {/* Subscribe Button */}
              <button className="bg-[#386641] hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200 hidden md:inline-block">
                Subscribe Now
              </button>

              {/* Mobile Menu Button */}
             <button className='md:hidden relative p-2 rounded-lg transition-colors duration-200 text-gray-600 dark:text-gray-300'>
                <Hamburger toggled={isOpen} toggle={setOpen} size={20} />
             </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {
            isOpen && (
                <div className="md:hidden border-t border-gray-200 dark:border-gray-700">
            <div className="py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.btn}
                  onClick={() => setActiveLink(item.btn)}
                  className={`block w-full text-left px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    activeLink === item.btn
                      ? 'text-orange-600 dark:text-yellow-400 bg-orange-50 dark:bg-yellow-900/20'
                      : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800'
                  }`}
                >
                  {item.btn}
                </button>
              ))}
            </div>
          </div>
            )
          }
        </div>
      </nav>

     
    </>
  );
};

export default Navbar;