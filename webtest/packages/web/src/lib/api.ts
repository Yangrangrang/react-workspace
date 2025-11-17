/**
 * API 클라이언트 유틸리티
 * 백엔드 API 호출을 위한 기본 설정
 */

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8080';

/**
 * API 요청을 위한 기본 fetch 래퍼
 */
export const apiClient = async <T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> => {
  const url = `${API_BASE_URL}${endpoint}`;

  const config: RequestInit = {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
  };

  try {
    const response = await fetch(url, config);

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(
        errorData.message || `HTTP error! status: ${response.status}`
      );
    }

    return await response.json();
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

/**
 * GET 요청
 */
export const apiGet = <T>(endpoint: string): Promise<T> => {
  return apiClient<T>(endpoint, { method: 'GET' });
};

/**
 * POST 요청
 */
export const apiPost = <T>(endpoint: string, data: unknown): Promise<T> => {
  return apiClient<T>(endpoint, {
    method: 'POST',
    body: JSON.stringify(data),
  });
};

/**
 * PUT 요청
 */
export const apiPut = <T>(endpoint: string, data: unknown): Promise<T> => {
  return apiClient<T>(endpoint, {
    method: 'PUT',
    body: JSON.stringify(data),
  });
};

/**
 * DELETE 요청
 */
export const apiDelete = <T>(endpoint: string): Promise<T> => {
  return apiClient<T>(endpoint, { method: 'DELETE' });
};

/**
 * PATCH 요청
 */
export const apiPatch = <T>(endpoint: string, data: unknown): Promise<T> => {
  return apiClient<T>(endpoint, {
    method: 'PATCH',
    body: JSON.stringify(data),
  });
};
