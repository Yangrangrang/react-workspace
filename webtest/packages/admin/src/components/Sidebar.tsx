import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useBoards } from '../contexts/BoardsContext';

const Sidebar: React.FC = () => {
  const location = useLocation();
  const { boards } = useBoards();

  const staticMenuItems = [
    { path: '/', label: '대시보드', icon: '📊' },
    { path: '/users', label: '사용자 관리', icon: '👥' },
    { path: '/boards', label: '게시판 관리', icon: '📋' },
    { path: '/posts', label: '게시글 관리', icon: '📝' },
  ];

  // 게시판 메뉴 항목 생성
  const boardMenuItems = boards.map(board => ({
    path: `/boards/${board.id}`,
    label: board.name,
    icon: '📄',
  }));

  const settingsMenuItem = { path: '/settings', label: '설정', icon: '⚙️' };

  // 전체 메뉴 항목: 고정 메뉴 + 게시판 메뉴 + 설정
  const menuItems = [...staticMenuItems, ...boardMenuItems, settingsMenuItem];

  return (
    <div className="flex flex-col w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-center h-20 border-b border-gray-200 dark:border-gray-700">
        <h1 className="text-2xl font-bold text-primary-600 dark:text-primary-400">
          Admin Panel
        </h1>
      </div>
      <nav className="flex-1 overflow-y-auto py-4">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center px-6 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                isActive ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 border-r-4 border-primary-600' : ''
              }`}
            >
              <span className="text-2xl mr-3">{item.icon}</span>
              <span className="font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;
