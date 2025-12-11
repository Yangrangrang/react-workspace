# API 사용 가이드

React Query + Axios + Zod를 사용한 간단한 API 호출 방식입니다.

## 📁 파일 구조

```
api/
├── config.ts    # axios 인스턴스 설정
├── board.ts     # board CRUD hooks
└── index.ts     # export
```

## 🚀 사용법

### 1. App.tsx에 QueryClient 설정

```tsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* 앱 컴포넌트들 */}
    </QueryClientProvider>
  );
}
```

### 2. Board API 사용하기

```tsx
import {
  useBoards,
  useCreateBoard,
  useUpdateBoard,
  useDeleteBoard
} from '@webtest/shared';

function BoardList() {
  // 조회
  const { data: boards, isLoading } = useBoards();

  // 생성
  const createMutation = useCreateBoard();

  // 수정
  const updateMutation = useUpdateBoard();

  // 삭제
  const deleteMutation = useDeleteBoard();

  // 생성 예시
  const handleCreate = () => {
    createMutation.mutate({
      name: '새 게시판',
      description: '설명'
    }, {
      onSuccess: () => console.log('성공!'),
      onError: (error) => console.error(error)
    });
  };

  // 수정 예시
  const handleUpdate = (id: number) => {
    updateMutation.mutate({
      id,
      data: { name: '수정된 이름' }
    });
  };

  // 삭제 예시
  const handleDelete = (id: number) => {
    deleteMutation.mutate(id);
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <button onClick={handleCreate}>새 게시판</button>
      {boards?.map(board => (
        <div key={board.id}>
          {board.name}
          <button onClick={() => handleUpdate(board.id)}>수정</button>
          <button onClick={() => handleDelete(board.id)}>삭제</button>
        </div>
      ))}
    </div>
  );
}
```

### 3. 새로운 API 추가하는 법

`api/post.ts` 예시:

```ts
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from './config';

// 타입 정의
export interface Post {
  id: number;
  title: string;
  content: string;
}

// API 함수들
const postApi = {
  getAll: () => api.get<Post[]>('/post').then(res => res.data),
  create: (data: Omit<Post, 'id'>) =>
    api.post<Post>('/post', data).then(res => res.data),
};

// Hooks
export const usePosts = () => {
  return useQuery({
    queryKey: ['posts'],
    queryFn: postApi.getAll,
  });
};

export const useCreatePost = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: postApi.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
    },
  });
};
```

## 🔧 axios 설정 변경 (config.ts)

```ts
// baseURL 변경
export const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:8080',
});

// 토큰 추가
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = \`Bearer \${token}\`;
  }
  return config;
});
```

끝!
