# WebTest Monorepo

## 프로젝트 개요

React 기반의 Turborepo 모노레포 프로젝트로, 사용자 웹 애플리케이션과 관리자 대시보드를 포함합니다.

## 기술 스택

### 코어 기술
- **React** 19.2.0
- **TypeScript** 4.4.2
- **Node.js** >= 18

### 빌드 & 패키지 관리
- **Turborepo** 2.6.1 - 모노레포 빌드 시스템
- **Yarn** 1.22.19 - 패키지 매니저
- **React Scripts** 5.0.1

### 상태 관리 & 데이터 페칭
- **@tanstack/react-query** 5.90.7 - 서버 상태 관리
- **Zustand** 5.0.8 - 클라이언트 상태 관리
- **React Router DOM** 7.9.5 - 라우팅

### 스타일링
- **Tailwind CSS** 3.4.0
- **PostCSS** 8.4.31
- **Autoprefixer** 10.4.16

### 유틸리티 & 검증
- **Axios** 1.13.2 - HTTP 클라이언트 (shared)
- **Zod** 4.1.13 - 스키마 검증 (shared)

## 프로젝트 구조

```
webtest/
├── packages/
│   ├── web/              # 사용자 웹 애플리케이션
│   │   ├── src/
│   │   │   ├── components/
│   │   │   │   ├── ExampleComponent.tsx
│   │   │   │   ├── Layout.tsx
│   │   │   │   ├── Navbar.tsx
│   │   │   │   └── ThemeToggle.tsx
│   │   │   ├── contexts/
│   │   │   │   └── ThemeContext.tsx
│   │   │   ├── hooks/
│   │   │   │   └── useUsers.ts
│   │   │   ├── lib/
│   │   │   │   ├── api.ts
│   │   │   │   └── queryClient.ts
│   │   │   ├── pages/
│   │   │   │   ├── About.tsx
│   │   │   │   ├── Admin.tsx
│   │   │   │   ├── Contact.tsx
│   │   │   │   ├── Home.tsx
│   │   │   │   └── Services.tsx
│   │   │   ├── store/
│   │   │   │   ├── useCounterStore.ts
│   │   │   │   └── useUserStore.ts
│   │   │   ├── App.tsx
│   │   │   └── index.tsx
│   │   └── package.json
│   │
│   ├── admin/            # 관리자 대시보드
│   │   ├── src/
│   │   │   ├── components/
│   │   │   │   └── Layout.tsx
│   │   │   ├── contexts/
│   │   │   │   ├── BoardsContext.tsx
│   │   │   │   └── ThemeContext.tsx
│   │   │   ├── pages/
│   │   │   │   ├── boards/
│   │   │   │   ├── dashboard/
│   │   │   │   │   └── Dashboard.tsx
│   │   │   │   ├── posts/
│   │   │   │   │   ├── PostCreate.tsx
│   │   │   │   │   ├── PostDetail.tsx
│   │   │   │   │   ├── PostEdit.tsx
│   │   │   │   │   └── Posts.tsx
│   │   │   │   ├── settings/
│   │   │   │   │   └── Settings.tsx
│   │   │   │   └── users/
│   │   │   │       └── Users.tsx
│   │   │   ├── App.tsx
│   │   │   └── index.tsx
│   │   └── package.json
│   │
│   └── shared/           # 공유 패키지
│       ├── src/
│       │   ├── api/
│       │   │   ├── board.ts
│       │   │   ├── config.ts
│       │   │   └── index.ts
│       │   ├── components/
│       │   │   ├── forms/
│       │   │   │   ├── FormInput.tsx
│       │   │   │   ├── FormSelect.tsx
│       │   │   │   ├── FormTextarea.tsx
│       │   │   │   └── index.ts
│       │   │   ├── Table.tsx
│       │   │   └── index.ts
│       │   └── index.ts
│       └── package.json
│
├── package.json
└── turbo.json
```

## 패키지 설명

### 1. @webtest/web (포트: 3000)

사용자용 프론트엔드 웹 애플리케이션

#### 주요 기능
- 홈, 소개, 서비스, 연락처 페이지
- 다크 모드 테마 지원
- React Query를 통한 데이터 페칭
- Zustand를 통한 상태 관리

#### 주요 라우트
- `/` - 홈
- `/about` - 소개
- `/services` - 서비스
- `/contact` - 연락처

### 2. @webtest/admin (포트: 3001)

관리자 대시보드 애플리케이션

#### 주요 기능
- 대시보드 메인 화면
- 사용자 관리
- 게시판 관리
- 게시글 CRUD (생성, 조회, 수정, 삭제)
- 설정 관리
- 다크 모드 테마 지원

#### 주요 라우트
- `/` - 대시보드
- `/users` - 사용자 관리
- `/boards` - 게시판 관리
- `/posts` - 게시글 목록
- `/posts/create` - 게시글 작성
- `/posts/edit/:id` - 게시글 수정
- `/posts/:id` - 게시글 상세
- `/settings` - 설정

### 3. @webtest/shared

web과 admin 패키지에서 공유하는 공통 컴포넌트 및 유틸리티

#### 제공 기능
- **API 클라이언트**: Axios 기반 HTTP 클라이언트
- **폼 컴포넌트**: FormInput, FormSelect, FormTextarea
- **테이블 컴포넌트**: 재사용 가능한 Table 컴포넌트
- **유틸리티 함수**: formatDate, capitalize
- **타입 정의**: ApiResponse 등 공통 타입

## 개발 환경 설정

### 설치

```bash
yarn install
```

### 개발 서버 실행

#### 모든 앱 실행
```bash
yarn dev
```

#### 개별 앱 실행
```bash
# Web 앱만 실행 (포트 3000)
yarn dev:web

# Admin 앱만 실행 (포트 3001)
yarn dev:admin

# Shared 패키지 빌드 (watch 모드)
yarn dev:server
```

### 빌드

```bash
# 모든 패키지 빌드
yarn build
```

### 테스트

```bash
# 모든 패키지 테스트
yarn test
```

### 린트

```bash
# 모든 패키지 린트
yarn lint
```

## 주요 특징

### 1. 모노레포 아키텍처
- Turborepo를 활용한 효율적인 빌드 시스템
- Yarn Workspaces를 통한 의존성 관리
- 코드 공유를 통한 중복 제거

### 2. 현대적인 React 생태계
- React 19의 최신 기능 활용
- React Query를 통한 서버 상태 관리
- Zustand를 통한 경량 클라이언트 상태 관리

### 3. 타입 안정성
- TypeScript를 통한 타입 안정성 보장
- Zod를 통한 런타임 스키마 검증

### 4. 개발자 경험
- React Query Devtools 내장
- Tailwind CSS를 통한 빠른 스타일링
- 핫 리로드 지원

### 5. 테마 시스템
- 다크/라이트 모드 지원
- Context API를 통한 테마 관리

## Git 정보

- **현재 브랜치**: main
- **최근 커밋**: claude (f937eaf)
- **상태**: clean

## 개발 가이드

### 새로운 컴포넌트 추가
1. 공통 컴포넌트는 `packages/shared/src/components/`에 추가
2. 앱별 컴포넌트는 각 패키지의 `src/components/`에 추가

### 새로운 API 엔드포인트 추가
1. `packages/shared/src/api/`에 API 함수 정의
2. React Query hooks를 활용하여 사용

### 상태 관리
- **서버 상태**: React Query 사용
- **클라이언트 상태**: Zustand store 사용
- **전역 UI 상태**: Context API 사용

## 시스템 요구사항

- Node.js >= 18
- Yarn 1.22.19
- 모던 브라우저 (Chrome, Firefox, Safari 최신 버전)
