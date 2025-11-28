import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

interface Post {
  id: number;
  title: string;
  author: string;
  date: string;
  views: number;
  status: string;
  content: string;
  board: string;
}

const PostDetail: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  // TODO: API에서 실제 데이터 가져오기
  const post: Post = {
    id: Number(id),
    title: '첫 번째 게시글',
    author: '홍길동',
    date: '2025-11-18',
    views: 123,
    status: '공개',
    board: '공지사항',
    content: `이것은 게시글의 내용입니다.

여러 줄로 구성된 내용을 표시할 수 있습니다.

실제로는 마크다운이나 리치 텍스트 에디터로 작성된 내용이 들어갑니다.`,
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-3xl font-medium text-gray-700 dark:text-white">
          게시글 상세
        </h3>
        <div className="flex gap-2">
          <button
            onClick={() => navigate(`/posts/edit/${id}`)}
            className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded transition-colors"
          >
            수정
          </button>
          <button
            onClick={() => {
              if (window.confirm('정말 삭제하시겠습니까?')) {
                // TODO: 삭제 API 호출
                navigate('/posts');
              }
            }}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition-colors"
          >
            삭제
          </button>
          <button
            onClick={() => navigate('/posts')}
            className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded transition-colors"
          >
            목록
          </button>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
        {/* 헤더 영역 */}
        <div className="border-b border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {post.board}
            </span>
            <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
              post.status === '공개'
                ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
            }`}>
              {post.status}
            </span>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            {post.title}
          </h1>
          <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-4">
              <span>작성자: {post.author}</span>
              <span>작성일: {post.date}</span>
            </div>
            <span>조회수: {post.views}</span>
          </div>
        </div>

        {/* 내용 영역 */}
        <div className="p-6">
          <div className="prose dark:prose-invert max-w-none">
            <div className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
              {post.content}
            </div>
          </div>
        </div>

        {/* 댓글 영역 (추후 구현) */}
        <div className="border-t border-gray-200 dark:border-gray-700 p-6">
          <h4 className="text-lg font-medium text-gray-700 dark:text-white mb-4">
            댓글 (0)
          </h4>
          <div className="text-center text-gray-500 dark:text-gray-400 py-8">
            댓글이 없습니다.
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
