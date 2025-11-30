import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <div>
      <h3 className="text-3xl font-medium text-gray-700 dark:text-white mb-6">
        대시보드
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0 bg-primary-500 rounded-md p-3">
              <span className="text-2xl">👥</span>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                총 사용자
              </p>
              <p className="text-2xl font-semibold text-gray-700 dark:text-white">
                1,234
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0 bg-secondary-500 rounded-md p-3">
              <span className="text-2xl">📝</span>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                총 게시글
              </p>
              <p className="text-2xl font-semibold text-gray-700 dark:text-white">
                567
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0 bg-green-500 rounded-md p-3">
              <span className="text-2xl">👁️</span>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                오늘 방문자
              </p>
              <p className="text-2xl font-semibold text-gray-700 dark:text-white">
                892
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0 bg-yellow-500 rounded-md p-3">
              <span className="text-2xl">💬</span>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                새 댓글
              </p>
              <p className="text-2xl font-semibold text-gray-700 dark:text-white">
                45
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h4 className="text-xl font-semibold text-gray-700 dark:text-white mb-4">
            최근 활동
          </h4>
          <div className="space-y-3">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-3">
                <div>
                  <p className="text-sm font-medium text-gray-700 dark:text-white">
                    새로운 게시글이 등록되었습니다
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {item}분 전
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h4 className="text-xl font-semibold text-gray-700 dark:text-white mb-4">
            빠른 작업
          </h4>
          <div className="space-y-3">
            <button className="w-full bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded transition-colors">
              새 게시글 작성
            </button>
            <button className="w-full bg-secondary-500 hover:bg-secondary-600 text-white px-4 py-2 rounded transition-colors">
              사용자 관리
            </button>
            <button className="w-full bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition-colors">
              통계 보기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
