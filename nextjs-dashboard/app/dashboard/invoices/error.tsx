'use client';

import { useEffect } from 'react';

export default function Error({
                                  error,    // 실제로 발생한 Error 객체
                                  reset,    // Next.js가 제공하는 함수 → 호출하면 해당 라우트 컴포넌트를 다시 렌더링해줍니다.
                              }: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Optionally log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <main className="flex h-full flex-col items-center justify-center">
            <h2 className="text-center">Something went wrong!</h2>
            <button
                className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
                onClick={
                    // Attempt to recover by trying to re-render the invoices route
                    () => reset()
                }
            >
                Try again
            </button>
        </main>
    );
}