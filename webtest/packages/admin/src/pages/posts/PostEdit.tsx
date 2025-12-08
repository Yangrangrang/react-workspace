import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FormInput, FormTextarea, FormSelect } from '@webtest/shared';

const PostEdit: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const boards = [
    { value: '1', label: '공지사항' },
    { value: '2', label: '자유게시판' },
    { value: '3', label: 'Q&A' },
  ];

  const [formData, setFormData] = useState({
    boardId: '1',
    title: '',
    content: '',
    author: '',
    status: '공개',
  });

  useEffect(() => {
    // TODO: API에서 실제 게시글 데이터 가져오기
    // 임시로 더미 데이터 사용
    const dummyPost = {
      boardId: '1',
      title: '첫 번째 게시글',
      content: `이것은 게시글의 내용입니다.

여러 줄로 구성된 내용을 표시할 수 있습니다.

실제로는 마크다운이나 리치 텍스트 에디터로 작성된 내용이 들어갑니다.`,
      author: '홍길동',
      status: '공개',
    };
    setFormData(dummyPost);
  }, [id]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: API 호출로 게시글 수정
    console.log('게시글 수정:', id, formData);
    navigate(`/posts/${id}`);
  };

  const handleCancel = () => {
    navigate(`/posts/${id}`);
  };

  return (
    <div>
      <div className="mb-6">
        <h3 className="text-3xl font-medium text-gray-700 dark:text-white">
          게시글 수정
        </h3>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <form onSubmit={handleSubmit}>
          <FormSelect
            label="게시판"
            options={boards}
            value={formData.boardId}
            onChange={(e) => setFormData({ ...formData, boardId: e.target.value })}
            required
          />

          <FormInput
            label="제목"
            type="text"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            placeholder="게시글 제목을 입력하세요"
            required
          />

          <FormInput
            label="작성자"
            type="text"
            value={formData.author}
            onChange={(e) => setFormData({ ...formData, author: e.target.value })}
            placeholder="작성자 이름을 입력하세요"
            required
          />

          <FormTextarea
            label="내용"
            value={formData.content}
            onChange={(e) => setFormData({ ...formData, content: e.target.value })}
            rows={10}
            placeholder="게시글 내용을 입력하세요"
            required
          />

          <FormSelect
            label="공개 상태"
            options={[
              { value: '공개', label: '공개' },
              { value: '비공개', label: '비공개' },
            ]}
            value={formData.status}
            onChange={(e) => setFormData({ ...formData, status: e.target.value })}
            className="mb-6"
          />

          <div className="flex gap-3 justify-end">
            <button
              type="button"
              onClick={handleCancel}
              className="px-6 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              취소
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors"
            >
              수정 완료
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostEdit;
