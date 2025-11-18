import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { apiGet, apiPost } from '../lib/api';

// 예시 API 타입
interface User {
  id: number;
  name: string;
  email: string;
}

// 사용자 목록 가져오기
export const useUsers = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: () => apiGet<User[]>('/api/users'),
  });
};

// 특정 사용자 가져오기
export const useUser = (id: number) => {
  return useQuery({
    queryKey: ['user', id],
    queryFn: () => apiGet<User>(`/api/users/${id}`),
    enabled: !!id, // id가 있을 때만 실행
  });
};

// 사용자 생성 mutation
export const useCreateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (newUser: Omit<User, 'id'>) =>
      apiPost<User>('/api/users', newUser),
    onSuccess: () => {
      // 성공 시 users 쿼리 무효화 (다시 fetch)
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });
};
