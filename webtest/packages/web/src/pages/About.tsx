import React from 'react';
import ExampleComponent from '../components/ExampleComponent';

const About: React.FC = () => {
  return (
    <div className="min-h-[calc(100vh-80px)] py-20 px-5 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-12 md:p-16 rounded-2xl shadow-lg transition-all">
        <h1 className="text-5xl text-primary-500 dark:text-primary-400 text-center mb-5">
          About Us
        </h1>
        <p className="text-xl text-center text-gray-600 dark:text-gray-400 mb-12 leading-relaxed">
          We are a team of passionate professionals dedicated to delivering excellence.
        </p>

        <div className="flex flex-col gap-10">
          <div>
            <h2 className="text-3xl text-gray-900 dark:text-white mb-4">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-8">
              To provide innovative solutions that empower businesses to thrive in the digital age.
              We believe in creating value through technology and creativity.
            </p>
          </div>

          <div>
            <h2 className="text-3xl text-gray-900 dark:text-white mb-4">
              Our Vision
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-8">
              To be the leading provider of digital solutions, recognized for our commitment to
              quality, innovation, and customer satisfaction.
            </p>
          </div>

          <div>
            <h2 className="text-3xl text-gray-900 dark:text-white mb-4">
              Our Values
            </h2>
            <ul className="list-none p-0">
              <li className="text-lg text-gray-600 dark:text-gray-300 py-2 pl-8 relative before:content-['✓'] before:absolute before:left-0 before:text-primary-500 dark:before:text-primary-400 before:font-bold before:text-xl">
                Innovation and Creativity
              </li>
              <li className="text-lg text-gray-600 dark:text-gray-300 py-2 pl-8 relative before:content-['✓'] before:absolute before:left-0 before:text-primary-500 dark:before:text-primary-400 before:font-bold before:text-xl">
                Customer-Centric Approach
              </li>
              <li className="text-lg text-gray-600 dark:text-gray-300 py-2 pl-8 relative before:content-['✓'] before:absolute before:left-0 before:text-primary-500 dark:before:text-primary-400 before:font-bold before:text-xl">
                Integrity and Transparency
              </li>
              <li className="text-lg text-gray-600 dark:text-gray-300 py-2 pl-8 relative before:content-['✓'] before:absolute before:left-0 before:text-primary-500 dark:before:text-primary-400 before:font-bold before:text-xl">
                Excellence in Everything
              </li>
              <li className="text-lg text-gray-600 dark:text-gray-300 py-2 pl-8 relative before:content-['✓'] before:absolute before:left-0 before:text-primary-500 dark:before:text-primary-400 before:font-bold before:text-xl">
                Continuous Learning
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Zustand & React Query 예시 */}
      <ExampleComponent />
    </div>
  );
};

export default About;
