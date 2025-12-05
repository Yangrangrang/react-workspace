import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormInput, FormTextarea, FormSelect } from '../../components/forms';

const PostCreate: React.FC = () => {
  const navigate = useNavigate();
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: API 호출로 게시글 저장
    console.log('게시글 저장:', formData);
    navigate('/posts');
  };

  const handleCancel = () => {
    navigate('/posts');
  };

  return (
    <div>
      <div className="mb-6">
        <h3 className="text-3xl font-medium text-gray-700 dark:text-white">
          새 게시글 작성
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
              작성 완료
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostCreate;
