import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div className="min-h-[calc(100vh-80px)] py-20 px-5 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl text-primary-500 dark:text-primary-400 text-center mb-5">
          Contact Us
        </h1>
        <p className="text-xl text-center text-gray-600 dark:text-gray-400 mb-16 leading-relaxed">
          Have a question or want to work together? We'd love to hear from you.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 bg-white dark:bg-gray-800 p-10 rounded-2xl shadow-lg transition-all">
            <h2 className="text-3xl text-gray-900 dark:text-white mb-8">
              Get in Touch
            </h2>

            <div className="flex gap-5 mb-8 items-start">
              <div className="text-3xl flex-shrink-0">📧</div>
              <div>
                <h3 className="text-xl text-gray-900 dark:text-white mb-1">Email</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  contact@mywebsite.com
                </p>
              </div>
            </div>

            <div className="flex gap-5 mb-8 items-start">
              <div className="text-3xl flex-shrink-0">📱</div>
              <div>
                <h3 className="text-xl text-gray-900 dark:text-white mb-1">Phone</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  +1 (555) 123-4567
                </p>
              </div>
            </div>

            <div className="flex gap-5 items-start">
              <div className="text-3xl flex-shrink-0">📍</div>
              <div>
                <h3 className="text-xl text-gray-900 dark:text-white mb-1">Address</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  123 Business St, Suite 100<br />City, State 12345
                </p>
              </div>
            </div>
          </div>

          <form
            className="lg:col-span-3 bg-white dark:bg-gray-800 p-10 rounded-2xl shadow-lg transition-all"
            onSubmit={handleSubmit}
          >
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-base text-gray-900 dark:text-white mb-2 font-medium"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg text-base transition-colors bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:border-primary-500 dark:focus:border-primary-400"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-base text-gray-900 dark:text-white mb-2 font-medium"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg text-base transition-colors bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:border-primary-500 dark:focus:border-primary-400"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="subject"
                className="block text-base text-gray-900 dark:text-white mb-2 font-medium"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg text-base transition-colors bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:border-primary-500 dark:focus:border-primary-400"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-base text-gray-900 dark:text-white mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg text-base transition-colors bg-white dark:bg-gray-900 text-gray-900 dark:text-white resize-y min-h-[120px] focus:outline-none focus:border-primary-500 dark:focus:border-primary-400"
              />
            </div>

            <button
              type="submit"
              className="w-full px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 dark:from-primary-600 dark:to-secondary-600 text-white border-none rounded-lg text-lg font-semibold cursor-pointer transition-all hover:-translate-y-0.5 hover:shadow-xl"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
