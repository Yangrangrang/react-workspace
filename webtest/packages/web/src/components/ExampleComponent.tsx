import React from 'react';
import { useCounterStore } from '../store/useCounterStore';
import { useUserStore } from '../store/useUserStore';
import { useUsers } from '../hooks/useUsers';

const ExampleComponent: React.FC = () => {
  // Zustand - Counter Store
  const { count, increment, decrement, reset } = useCounterStore();

  // Zustand - User Store (localStorage persist)
  const { user, setUser, logout } = useUserStore();

  // React Query - Users 데이터 fetch
  const { data: users, isLoading, error } = useUsers();

  const handleLogin = () => {
    setUser({
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
    });
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
        Zustand & React Query 예시
      </h1>

      {/* Zustand Counter 예시 */}
      <div className="mb-8 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
          Zustand Counter
        </h2>
        <p className="text-4xl font-bold mb-4 text-primary-500 dark:text-primary-400">
          {count}
        </p>
        <div className="flex gap-3">
          <button
            onClick={increment}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
          >
            +1
          </button>
          <button
            onClick={decrement}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
          >
            -1
          </button>
          <button
            onClick={reset}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
          >
            Reset
          </button>
        </div>
      </div>

      {/* Zustand User Store (with persist) */}
      <div className="mb-8 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
          Zustand User Store (localStorage)
        </h2>
        {user ? (
          <div>
            <p className="text-gray-900 dark:text-white mb-2">
              <strong>Name:</strong> {user.name}
            </p>
            <p className="text-gray-900 dark:text-white mb-4">
              <strong>Email:</strong> {user.email}
            </p>
            <button
              onClick={logout}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
            >
              Logout
            </button>
          </div>
        ) : (
          <button
            onClick={handleLogin}
            className="px-4 py-2 bg-primary-500 text-white rounded hover:bg-primary-600 transition"
          >
            Login
          </button>
        )}
      </div>

      {/* React Query 예시 */}
      <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
          React Query - Users List
        </h2>

        {isLoading && (
          <p className="text-gray-600 dark:text-gray-400">Loading users...</p>
        )}

        {error && (
          <p className="text-red-500">Error: {error.message}</p>
        )}

        {users && (
          <div className="grid gap-3">
            {users.slice(0, 5).map((user) => (
              <div
                key={user.id}
                className="p-4 bg-gray-50 dark:bg-gray-700 rounded"
              >
                <p className="font-semibold text-gray-900 dark:text-white">
                  {user.name}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {user.email}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ExampleComponent;
