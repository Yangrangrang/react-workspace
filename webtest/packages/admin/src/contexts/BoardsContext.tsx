import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface Board {
  id: number;
  name: string;
  description: string;
  postCount: number;
  createdAt: string;
}

interface BoardsContextType {
  boards: Board[];
  addBoard: (board: Omit<Board, 'id' | 'postCount' | 'createdAt'>) => void;
  updateBoard: (id: number, board: Partial<Board>) => void;
  deleteBoard: (id: number) => void;
}

const BoardsContext = createContext<BoardsContextType | undefined>(undefined);

export const BoardsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [boards, setBoards] = useState<Board[]>([
    { id: 1, name: '공지사항', description: '중요한 공지사항을 게시합니다', postCount: 15, createdAt: '2025-11-01' },
    { id: 2, name: '자유게시판', description: '자유롭게 의견을 나누는 공간입니다', postCount: 128, createdAt: '2025-11-01' },
    { id: 3, name: 'Q&A', description: '질문과 답변을 주고받는 게시판입니다', postCount: 67, createdAt: '2025-11-05' },
  ]);

  const addBoard = (boardData: Omit<Board, 'id' | 'postCount' | 'createdAt'>) => {
    const newBoard: Board = {
      ...boardData,
      id: Math.max(...boards.map(b => b.id), 0) + 1,
      postCount: 0,
      createdAt: new Date().toISOString().split('T')[0],
    };
    setBoards([...boards, newBoard]);
  };

  const updateBoard = (id: number, boardData: Partial<Board>) => {
    setBoards(boards.map(board =>
      board.id === id ? { ...board, ...boardData } : board
    ));
  };

  const deleteBoard = (id: number) => {
    setBoards(boards.filter(board => board.id !== id));
  };

  return (
    <BoardsContext.Provider value={{ boards, addBoard, updateBoard, deleteBoard }}>
      {children}
    </BoardsContext.Provider>
  );
};

export const useBoards = () => {
  const context = useContext(BoardsContext);
  if (context === undefined) {
    throw new Error('useBoards must be used within a BoardsProvider');
  }
  return context;
};
