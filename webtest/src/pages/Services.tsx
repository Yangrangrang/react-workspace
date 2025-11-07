import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies and best practices.',
      icon: '💻',
    },
    {
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile apps for iOS and Android.',
      icon: '📱',
    },
    {
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive designs that enhance user experience.',
      icon: '🎨',
    },
    {
      title: 'Cloud Services',
      description: 'Scalable cloud solutions for your infrastructure needs.',
      icon: '☁️',
    },
    {
      title: 'Consulting',
      description: 'Expert advice to help you make the right technology decisions.',
      icon: '💡',
    },
    {
      title: 'Maintenance & Support',
      description: 'Ongoing support to keep your systems running smoothly.',
      icon: '🔧',
    },
  ];

  return (
    <div className="min-h-[calc(100vh-80px)] py-20 px-5 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl text-primary-500 dark:text-primary-400 text-center mb-5">
          Our Services
        </h1>
        <p className="text-xl text-center text-gray-600 dark:text-gray-400 mb-16 leading-relaxed">
          We offer a comprehensive range of services to meet all your digital needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-10 rounded-2xl shadow-lg transition-all text-center flex flex-col items-center hover:-translate-y-3 hover:shadow-2xl"
            >
              <div className="text-6xl mb-5">{service.icon}</div>
              <h3 className="text-2xl text-gray-900 dark:text-white mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 flex-grow">
                {service.description}
              </p>
              <button className="px-8 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 dark:from-primary-600 dark:to-secondary-600 text-white border-none rounded-full cursor-pointer text-base font-semibold transition-all hover:scale-105 hover:shadow-lg">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
