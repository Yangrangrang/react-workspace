import React from 'react';

const Settings: React.FC = () => {
  return (
    <div>
      <h3 className="text-3xl font-medium text-gray-700 dark:text-white mb-6">
        설정
      </h3>

      <div className="space-y-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h4 className="text-xl font-semibold text-gray-700 dark:text-white mb-4">
            사이트 설정
          </h4>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                사이트 이름
              </label>
              <input
                type="text"
                defaultValue="Y.HN"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                사이트 설명
              </label>
              <textarea
                rows={3}
                defaultValue="관리자 대시보드"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h4 className="text-xl font-semibold text-gray-700 dark:text-white mb-4">
            알림 설정
          </h4>
          <div className="space-y-3">
            <label className="flex items-center">
              <input type="checkbox" defaultChecked className="mr-2" />
              <span className="text-sm text-gray-700 dark:text-gray-300">
                새 사용자 가입 알림
              </span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" defaultChecked className="mr-2" />
              <span className="text-sm text-gray-700 dark:text-gray-300">
                새 게시글 알림
              </span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span className="text-sm text-gray-700 dark:text-gray-300">
                새 댓글 알림
              </span>
            </label>
          </div>
        </div>

        <div className="flex justify-end">
          <button className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-2 rounded transition-colors">
            저장
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
