import React from 'react';
import { Table, Column } from '@webtest/shared';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
}

const Users: React.FC = () => {
  const users: User[] = [
    { id: 1, name: '홍길동', email: 'hong@example.com', role: '관리자', status: '활성' },
    { id: 2, name: '김철수', email: 'kim@example.com', role: '사용자', status: '활성' },
    { id: 3, name: '이영희', email: 'lee@example.com', role: '사용자', status: '비활성' },
  ];

  const columns: Column<User>[] = [
    {
      key: 'name',
      header: '이름',
      width: 'w-1/5',
      render: (user) => (
        <span className="font-medium">{user.name}</span>
      ),
    },
    {
      key: 'email',
      header: '이메일',
      width: 'w-1/4',
      render: (user) => (
        <span className="text-gray-500 dark:text-gray-400">{user.email}</span>
      ),
    },
    {
      key: 'role',
      header: '역할',
      width: 'w-1/6',
      render: (user) => (
        <span className="text-gray-500 dark:text-gray-400">{user.role}</span>
      ),
    },
    {
      key: 'status',
      header: '상태',
      width: 'w-1/6',
      render: (user) => (
        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
          user.status === '활성'
            ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
            : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
        }`}>
          {user.status}
        </span>
      ),
    },
    {
      key: 'actions',
      header: '작업',
      width: 'w-1/5',
      render: (user) => (
        <div className="flex gap-3">
          <button className="text-primary-600 hover:text-primary-900 dark:text-primary-400 dark:hover:text-primary-300">
            수정
          </button>
          <button className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300">
            삭제
          </button>
        </div>
      ),
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-3xl font-medium text-gray-700 dark:text-white">
          사용자 관리
        </h3>
        <button className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded transition-colors">
          + 새 사용자
        </button>
      </div>

      <Table
        columns={columns}
        data={users}
        keyExtractor={(user) => user.id}
      />
    </div>
  );
};

export default Users;
