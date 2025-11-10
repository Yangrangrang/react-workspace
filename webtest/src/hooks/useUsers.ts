import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

// 예시 API 타입
interface User {
  id: number;
  name: string;
  email: string;
}

// 사용자 목록 가져오기
export const useUsers = () => {
  console.log("useUsers");
  return useQuery({
    queryKey: ['users'],
    queryFn: async (): Promise<User[]> => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }
      return response.json();
    },
  });
};

// 특정 사용자 가져오기
export const useUser = (id: number) => {
  return useQuery({
    queryKey: ['user', id],
    queryFn: async (): Promise<User> => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch user');
      }
      return response.json();
    },
    enabled: !!id, // id가 있을 때만 실행
  });
};

// 사용자 생성 mutation
export const useCreateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (newUser: Omit<User, 'id'>): Promise<User> => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });
      if (!response.ok) {
        throw new Error('Failed to create user');
      }
      return response.json();
    },
    onSuccess: () => {
      // 성공 시 users 쿼리 무효화 (다시 fetch)
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });
};
