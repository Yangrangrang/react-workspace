import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
      staleTime: 60 * 1000, // 1분
    },
    mutations: {
      // 에러 발생 시 자동 재시도 안 함
      retry: false,
      // mutation 에러 핸들링
      onError: (error) => {
        console.error('Mutation error:', error);
        // 여기에 토스트 알림 등 추가 가능
      },
    },
  },
});
