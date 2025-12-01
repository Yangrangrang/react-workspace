import React, { useState } from 'react';
import { Table, Column } from '@webtest/shared';
import { useBoards, Board } from '../../contexts/BoardsContext';

const Boards: React.FC = () => {
  const { boards, addBoard } = useBoards();
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
  });

  const columns: Column<Board>[] = [
    {
      key: 'name',
      header: '게시판 이름',
      render: (board) => (
        <span className="font-medium">{board.name}</span>
      ),
    },
    {
      key: 'description',
      header: '설명',
      render: (board) => (
        <span className="text-gray-500 dark:text-gray-400">{board.description}</span>
      ),
    },
    {
      key: 'postCount',
      header: '게시글 수',
      render: (board) => (
        <span className="text-gray-500 dark:text-gray-400">{board.postCount}개</span>
      ),
    },
    {
      key: 'createdAt',
      header: '생성일',
      render: (board) => (
        <span className="text-gray-500 dark:text-gray-400">{board.createdAt}</span>
      ),
    },
    {
      key: 'actions',
      header: '작업',
      render: (board) => (
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addBoard({
      name: formData.name,
      description: formData.description,
    });
    setShowCreateModal(false);
    setFormData({ name: '', description: '' });
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-3xl font-medium text-gray-700 dark:text-white">
          게시판 관리
        </h3>
        <button
          onClick={() => setShowCreateModal(true)}
          className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded transition-colors"
        >
          + 새 게시판
        </button>
      </div>

      <Table
        columns={columns}
        data={boards}
        keyExtractor={(board) => board.id}
      />

      {/* 게시판 생성 모달 */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 w-full max-w-md">
            <h4 className="text-xl font-medium text-gray-700 dark:text-white mb-4">
              새 게시판 생성
            </h4>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  게시판 이름
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="게시판 이름을 입력하세요"
                  required
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  설명
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="게시판 설명을 입력하세요"
                  required
                />
              </div>

              <div className="flex gap-3 justify-end">
                <button
                  type="button"
                  onClick={() => {
                    setShowCreateModal(false);
                    setFormData({ name: '', description: '' });
                  }}
                  className="px-6 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  취소
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors"
                >
                  생성
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Boards;
