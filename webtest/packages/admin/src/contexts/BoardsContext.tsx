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
  paginatedBoards: Board[];
  totalBoards: number;
  currentPage: number;
  itemsPerPage: number;
  totalPages: number;
  addBoard: (board: Omit<Board, 'id' | 'postCount' | 'createdAt'>) => void;
  updateBoard: (id: number, board: Partial<Board>) => void;
  deleteBoard: (id: number) => void;
  setPage: (page: number) => void;
  setItemsPerPage: (itemsPerPage: number) => void;
}

const BoardsContext = createContext<BoardsContextType | undefined>(undefined);

export const BoardsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [boards, setBoards] = useState<Board[]>([
    { id: 1, name: '공지사항', description: '중요한 공지사항을 게시합니다', postCount: 15, createdAt: '2025-11-01' },
    { id: 2, name: '자유게시판', description: '자유롭게 의견을 나누는 공간입니다', postCount: 128, createdAt: '2025-11-01' },
    { id: 3, name: 'Q&A', description: '질문과 답변을 주고받는 게시판입니다', postCount: 67, createdAt: '2025-11-05' },
    { id: 4, name: '기술 블로그', description: '기술 관련 글을 공유합니다', postCount: 45, createdAt: '2025-11-10' },
    { id: 5, name: '스터디', description: '스터디 모집 및 정보 공유', postCount: 23, createdAt: '2025-11-12' },
    { id: 6, name: '프로젝트', description: '프로젝트 관련 정보', postCount: 34, createdAt: '2025-11-15' },
    { id: 7, name: '채용', description: '채용 정보 게시판', postCount: 12, createdAt: '2025-11-18' },
    { id: 8, name: '자료실', description: '유용한 자료 공유', postCount: 56, createdAt: '2025-11-20' },
  ]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

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

  // 페이지네이션 관련 계산
  const totalBoards = boards.length;
  const totalPages = Math.ceil(totalBoards / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedBoards = boards.slice(startIndex, endIndex);

  const setPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleSetItemsPerPage = (newItemsPerPage: number) => {
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1); // 페이지당 항목 수가 변경되면 첫 페이지로 이동
  };

  return (
    <BoardsContext.Provider
      value={{
        boards,
        paginatedBoards,
        totalBoards,
        currentPage,
        itemsPerPage,
        totalPages,
        addBoard,
        updateBoard,
        deleteBoard,
        setPage,
        setItemsPerPage: handleSetItemsPerPage,
      }}
    >
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
