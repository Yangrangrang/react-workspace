import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-500 to-secondary-500 dark:from-primary-700 dark:to-secondary-700 text-white py-32 px-5 text-center min-h-[600px] flex items-center justify-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-5 leading-tight">
            Welcome to Our Website
          </h1>
          <p className="text-xl md:text-2xl mb-10 opacity-90">
            We provide innovative solutions for your business needs
          </p>
          <div className="flex gap-5 justify-center flex-wrap">
            <button className="px-10 py-4 text-lg bg-white text-primary-500 dark:text-primary-600 border-none rounded-full cursor-pointer transition-all font-semibold hover:-translate-y-1 hover:shadow-xl">
              Get Started
            </button>
            <button className="px-10 py-4 text-lg bg-transparent text-white border-2 border-white rounded-full cursor-pointer transition-all font-semibold hover:bg-white hover:text-primary-500 dark:hover:text-primary-600 hover:-translate-y-1">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-5 bg-gray-50 dark:bg-gray-900 transition-colors">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl text-center mb-2 text-gray-900 dark:text-white">
            Our Features
          </h2>
          <p className="text-center text-xl text-gray-600 dark:text-gray-400 mb-16">
            Discover what makes us different
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-white dark:bg-gray-800 p-10 rounded-2xl shadow-lg transition-all text-center hover:-translate-y-3 hover:shadow-2xl">
              <div className="text-5xl mb-5">🚀</div>
              <h3 className="text-2xl mb-4 text-gray-900 dark:text-white">Fast Performance</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Lightning-fast load times and optimized performance for the best user experience.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-10 rounded-2xl shadow-lg transition-all text-center hover:-translate-y-3 hover:shadow-2xl">
              <div className="text-5xl mb-5">🎨</div>
              <h3 className="text-2xl mb-4 text-gray-900 dark:text-white">Beautiful Design</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Modern and elegant designs that capture attention and engage users.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-10 rounded-2xl shadow-lg transition-all text-center hover:-translate-y-3 hover:shadow-2xl">
              <div className="text-5xl mb-5">🔒</div>
              <h3 className="text-2xl mb-4 text-gray-900 dark:text-white">Secure & Safe</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Top-notch security measures to protect your data and privacy.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-10 rounded-2xl shadow-lg transition-all text-center hover:-translate-y-3 hover:shadow-2xl">
              <div className="text-5xl mb-5">📱</div>
              <h3 className="text-2xl mb-4 text-gray-900 dark:text-white">Responsive</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Fully responsive design that works perfectly on all devices.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-10 rounded-2xl shadow-lg transition-all text-center hover:-translate-y-3 hover:shadow-2xl">
              <div className="text-5xl mb-5">⚡</div>
              <h3 className="text-2xl mb-4 text-gray-900 dark:text-white">Easy to Use</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Intuitive interface that anyone can use without technical knowledge.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-10 rounded-2xl shadow-lg transition-all text-center hover:-translate-y-3 hover:shadow-2xl">
              <div className="text-5xl mb-5">💬</div>
              <h3 className="text-2xl mb-4 text-gray-900 dark:text-white">24/7 Support</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Round-the-clock customer support to help you whenever you need it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary-500 to-secondary-500 dark:from-primary-700 dark:to-secondary-700 py-24 px-5 text-center text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl mb-5">Ready to Get Started?</h2>
          <p className="text-xl md:text-2xl mb-10 opacity-90">
            Join thousands of satisfied customers today
          </p>
          <button className="px-12 py-4 text-xl bg-white text-primary-500 dark:text-primary-600 border-none rounded-full cursor-pointer transition-all font-semibold hover:-translate-y-1 hover:shadow-2xl">
            Start Your Journey
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
