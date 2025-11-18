import React from 'react';
import ThemeToggle from './ThemeToggle';

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center py-4 px-6 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      <div className="flex items-center">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
          관리자 대시보드
        </h2>
      </div>
      <div className="flex items-center gap-4">
        <ThemeToggle />
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600 dark:text-gray-400">관리자</span>
          <div className="w-8 h-8 rounded-full bg-primary-500 flex items-center justify-center text-white">
            A
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
