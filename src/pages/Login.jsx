import React, { useState, useRef } from 'react';
import { Eye, EyeOff, Mail, Lock, User, ArrowRight, Milk } from 'lucide-react';

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const nameRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (isSignUp && !formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (isSignUp) {
      if (!formData.confirmPassword) {
        newErrors.confirmPassword = 'Please confirm your password';
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLoading) return;

    if (!validateForm()) return;

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      console.log(isSignUp ? 'Sign Up' : 'Sign In', {
        ...formData,
        password: '***'
      });
      setIsLoading(false);
      alert(`${isSignUp ? 'Account created' : 'Signed in'} successfully!`);
      // Add real authentication logic here
    }, 1200);
  };

  const switchToSignIn = () => {
    setIsSignUp(false);
    setFormData({ name: '', email: '', password: '', confirmPassword: '' });
    setErrors({});
  };

  const switchToSignUp = () => {
    setIsSignUp(true);
    setFormData({ name: '', email: '', password: '', confirmPassword: '' });
    setErrors({});
    // focus name after render
    setTimeout(() => nameRef.current?.focus(), 0);
  };

  const handleSocialLogin = (provider) => {
    if (isLoading) return;
    console.log(`${provider} login clicked`);
    // Add social auth flow
  };

  return (
    <div className="min-h-screen  flex items-center justify-center p-4">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-500/20 rounded-2xl mb-4">
            <Milk className="w-8 h-8 text-emerald-400" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">
            {isSignUp ? 'Create an account' : 'Welcome back'}
          </h1>
          <p className="text-gray-400">
            {isSignUp
              ? 'Create your account to start shopping fresh dairy products'
              : 'Sign in to your account to continue shopping'}
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-8 shadow-2xl">
          <div className="flex bg-white/10 rounded-xl p-1 mb-8" role="tablist" aria-label="Auth tabs">
            <button
              type="button"
              role="tab"
              aria-selected={!isSignUp}
              onClick={switchToSignIn}
              className={`flex-1 py-2.5 px-4 text-sm font-medium rounded-lg transition-all ${!isSignUp ? 'bg-emerald-500 text-white shadow-lg' : 'text-gray-300 hover:text-white'}`}
            >
              Sign In
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={isSignUp}
              onClick={switchToSignUp}
              className={`flex-1 py-2.5 px-4 text-sm font-medium rounded-lg transition-all ${isSignUp ? 'bg-emerald-500 text-white shadow-lg' : 'text-gray-300 hover:text-white'}`}
            >
              Sign Up
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            {isSignUp && (
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    id="name"
                    ref={nameRef}
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    disabled={isLoading}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    className={`w-full pl-12 pr-4 py-3.5 bg-white/5 border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all ${errors.name ? 'border-red-500 focus:ring-red-500/50' : 'border-white/20 focus:ring-emerald-500/50'}`}
                    placeholder="Enter your full name"
                    autoComplete="name"
                  />
                </div>
                {errors.name && <p id="name-error" className="text-red-400 text-sm mt-2" role="alert">{errors.name}</p>}
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  disabled={isLoading}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  className={`w-full pl-12 pr-4 py-3.5 bg-white/5 border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all ${errors.email ? 'border-red-500 focus:ring-red-500/50' : 'border-white/20 focus:ring-emerald-500/50'}`}
                  placeholder="Enter your email"
                  autoComplete="email"
                />
              </div>
              {errors.email && <p id="email-error" className="text-red-400 text-sm mt-2" role="alert">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={handleInputChange}
                  disabled={isLoading}
                  aria-invalid={!!errors.password}
                  aria-describedby={errors.password ? 'password-error' : undefined}
                  className={`w-full pl-12 pr-12 py-3.5 bg-white/5 border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all ${errors.password ? 'border-red-500 focus:ring-red-500/50' : 'border-white/20 focus:ring-emerald-500/50'}`}
                  placeholder="Enter your password"
                  autoComplete={isSignUp ? 'new-password' : 'current-password'}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(v => !v)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {errors.password && <p id="password-error" className="text-red-400 text-sm mt-2" role="alert">{errors.password}</p>}
            </div>

            {isSignUp && (
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? 'text' : 'password'}
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    disabled={isLoading}
                    aria-invalid={!!errors.confirmPassword}
                    aria-describedby={errors.confirmPassword ? 'confirmPassword-error' : undefined}
                    className={`w-full pl-12 pr-12 py-3.5 bg-white/5 border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all ${errors.confirmPassword ? 'border-red-500 focus:ring-red-500/50' : 'border-white/20 focus:ring-emerald-500/50'}`}
                    placeholder="Confirm your password"
                    autoComplete="new-password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(v => !v)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                    aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
                  >
                    {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                {errors.confirmPassword && <p id="confirmPassword-error" className="text-red-400 text-sm mt-2" role="alert">{errors.confirmPassword}</p>}
              </div>
            )}

            {!isSignUp && (
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center text-gray-300">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-emerald-500 bg-white/10 border-white/20 rounded focus:ring-emerald-500/50 focus:ring-2"
                    disabled={isLoading}
                  />
                  <span className="ml-2">Remember me</span>
                </label>
                <button
                  type="button"
                  className="text-emerald-400 hover:text-emerald-300 transition-colors"
                  onClick={() => alert('Forgot password functionality would be implemented here')}
                  disabled={isLoading}
                >
                  Forgot password?
                </button>
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-semibold py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 ${isLoading ? 'opacity-70 cursor-not-allowed' : 'shadow-lg hover:shadow-xl'}`}
              aria-busy={isLoading}
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  {isSignUp ? 'Create Account' : 'Sign In'}
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </form>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/20"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-[#0F1412] text-gray-400 rounded-2xl ">Or continue with</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => handleSocialLogin('Google')}
              className="flex items-center justify-center gap-3 py-3 px-4 bg-white/5 hover:bg-white/10 border border-white/20 rounded-xl text-white font-medium transition-all"
              type="button"
              disabled={isLoading}
            >
              <div className="w-5 h-5 bg-white rounded-sm flex items-center justify-center">
                <span className="text-xs font-bold text-blue-600">G</span>
              </div>
              Google
            </button>
            <button
              onClick={() => handleSocialLogin('Facebook')}
              className="flex items-center justify-center gap-3 py-3 px-4 bg-white/5 hover:bg-white/10 border border-white/20 rounded-xl text-white font-medium transition-all"
              type="button"
              disabled={isLoading}
            >
              <div className="w-5 h-5 bg-blue-600 rounded-sm flex items-center justify-center">
                <span className="text-xs font-bold text-white">f</span>
              </div>
              Facebook
            </button>
          </div>

          <p className="text-center text-gray-400 mt-8">
            {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
            <button
              type="button"
              onClick={isSignUp ? switchToSignIn : switchToSignUp}
              className="text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
            >
              {isSignUp ? 'Sign in' : 'Sign up'}
            </button>
          </p>
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-500 text-sm">
            By signing {isSignUp ? 'up' : 'in'}, you agree to our{' '}
            <button
              type="button"
              className="text-emerald-400 hover:text-emerald-300 transition-colors"
              onClick={() => alert('Terms of Service would open here')}
            >
              Terms of Service
            </button>{' '}
            and{' '}
            <button
              type="button"
              className="text-emerald-400 hover:text-emerald-300 transition-colors"
              onClick={() => alert('Privacy Policy would open here')}
            >
              Privacy Policy
            </button>
          </p>
        </div>
      </div>
    </div>
      );
};

export default Login;