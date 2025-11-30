import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ThemeProvider } from './contexts/ThemeContext';
import { BoardsProvider } from './contexts/BoardsContext';
import { queryClient } from './lib/queryClient';
import Layout from './components/Layout';
import Dashboard from './pages/dashboard/Dashboard';
import Users from './pages/users/Users';
import Boards from './pages/boards/Boards';
import Posts from './pages/posts/Posts';
import PostCreate from './pages/posts/PostCreate';
import PostEdit from './pages/posts/PostEdit';
import PostDetail from './pages/posts/PostDetail';
import Settings from './pages/settings/Settings';
import './App.css';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <BoardsProvider>
          <Router>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<Dashboard />} />
                <Route path="/users" element={<Users />} />
                <Route path="/boards" element={<Boards />} />
                <Route path="/posts" element={<Posts />} />
                <Route path="/posts/create" element={<PostCreate />} />
                <Route path="/posts/edit/:id" element={<PostEdit />} />
                <Route path="/posts/:id" element={<PostDetail />} />
                <Route path="/settings" element={<Settings />} />
              </Route>
            </Routes>
          </Router>
        </BoardsProvider>
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
