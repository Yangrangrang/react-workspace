import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Table, Column } from '@webtest/shared';

interface Post {
  id: number;
  title: string;
  author: string;
  date: string;
  views: number;
  status: string;
}

const Posts: React.FC = () => {
  const navigate = useNavigate();
  const [selectedBoard, setSelectedBoard] = React.useState('all');

  const boards = [
    { id: 'all', name: '전체' },
    { id: '1', name: '공지사항' },
    { id: '2', name: '자유게시판' },
    { id: '3', name: 'Q&A' },
  ];

  const posts: Post[] = [
    { id: 1, title: '첫 번째 게시글', author: '홍길동', date: '2025-11-18', views: 123, status: '공개' },
    { id: 2, title: '두 번째 게시글', author: '김철수', date: '2025-11-17', views: 456, status: '공개' },
    { id: 3, title: '세 번째 게시글', author: '이영희', date: '2025-11-16', views: 789, status: '비공개' },
  ];

  const columns: Column<Post>[] = [
    {
      key: 'title',
      header: '제목',
      className: 'min-w-[200px]',
      render: (post) => (
        <button
          onClick={() => navigate(`/posts/${post.id}`)}
          className="font-medium text-left hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
        >
          {post.title}
        </button>
      ),
    },
    {
      key: 'author',
      header: '작성자',
      render: (post) => (
        <span className="text-gray-500 dark:text-gray-400">{post.author}</span>
      ),
    },
    {
      key: 'date',
      header: '날짜',
      render: (post) => (
        <span className="text-gray-500 dark:text-gray-400">{post.date}</span>
      ),
    },
    {
      key: 'views',
      header: '조회수',
      render: (post) => (
        <span className="text-gray-500 dark:text-gray-400">{post.views}</span>
      ),
    },
    {
      key: 'status',
      header: '상태',
      render: (post) => (
        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
          post.status === '공개'
            ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
            : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
        }`}>
          {post.status}
        </span>
      ),
    },
    {
      key: 'actions',
      header: '작업',
      render: (post) => (
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
          게시글 관리
        </h3>
        <button
          onClick={() => navigate('/posts/create')}
          className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded transition-colors"
        >
          + 새 게시글
        </button>
      </div>

      <div className="mb-4 flex gap-2">
        <select
          value={selectedBoard}
          onChange={(e) => setSelectedBoard(e.target.value)}
          className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
        >
          {boards.map((board) => (
            <option key={board.id} value={board.id}>
              {board.name}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="검색..."
          className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
        />
        <button className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-white px-4 py-2 rounded transition-colors">
          필터
        </button>
      </div>

      <Table
        columns={columns}
        data={posts}
        keyExtractor={(post) => post.id}
      />
    </div>
  );
};

export default Posts;
