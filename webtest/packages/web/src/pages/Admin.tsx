import React from 'react';

const Admin: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          관리자 페이지
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* 사용자 관리 */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              사용자 관리
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              사용자 계정 및 권한을 관리합니다.
            </p>
            <button className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded transition-colors">
              관리하기
            </button>
          </div>

          {/* 콘텐츠 관리 */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              콘텐츠 관리
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              게시물 및 미디어를 관리합니다.
            </p>
            <button className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded transition-colors">
              관리하기
            </button>
          </div>

          {/* 설정 */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              시스템 설정
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              사이트 설정 및 환경을 관리합니다.
            </p>
            <button className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded transition-colors">
              관리하기
            </button>
          </div>

          {/* 통계 */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              통계 및 분석
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              방문자 및 사용 통계를 확인합니다.
            </p>
            <button className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded transition-colors">
              확인하기
            </button>
          </div>

          {/* 알림 관리 */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              알림 관리
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              시스템 알림 및 공지사항을 관리합니다.
            </p>
            <button className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded transition-colors">
              관리하기
            </button>
          </div>

          {/* 로그 */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              활동 로그
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              시스템 활동 로그를 확인합니다.
            </p>
            <button className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded transition-colors">
              확인하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
