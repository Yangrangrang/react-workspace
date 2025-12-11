import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from './config';
import { z } from 'zod';

// ===== 타입 정의 =====
export const boardSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  postCount: z.number().default(0),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export type Board = z.infer<typeof boardSchema>;

export interface CreateBoardDto {
  name: string;
  description: string;
}

export interface UpdateBoardDto {
  name?: string;
  description?: string;
}

// ===== API 함수들 =====
const boardApi = {
  getAll: () => api.get<Board[]>('/board').then(res => res.data),
  getById: (id: number) => api.get<Board>(`/board/${id}`).then(res => res.data),
  create: (data: CreateBoardDto) => api.post<Board>('/board', data).then(res => res.data),
  update: (id: number, data: UpdateBoardDto) => api.put<Board>(`/board/${id}`, data).then(res => res.data),
  delete: (id: number) => api.delete(`/board/${id}`).then(res => res.data),
};

// ===== React Query Hooks =====

// 전체 목록 조회
export const useBoards = () => {
  return useQuery({
    queryKey: ['boards'],
    queryFn: boardApi.getAll,
  });
};

// 단일 항목 조회
export const useBoard = (id: number) => {
  return useQuery({
    queryKey: ['boards', id],
    queryFn: () => boardApi.getById(id),
    enabled: !!id,
  });
};

// 생성
export const useCreateBoard = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: boardApi.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['boards'] });
    },
  });
};

// 수정
export const useUpdateBoard = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: number; data: UpdateBoardDto }) =>
      boardApi.update(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['boards'] });
    },
  });
};

// 삭제
export const useDeleteBoard = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: boardApi.delete,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['boards'] });
    },
  });
};
