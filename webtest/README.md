# WebTest Monorepo

React + TypeScript + Turborepo를 기반으로 한 모노레포 프로젝트입니다.

## 프로젝트 구성

이 프로젝트는 3개의 패키지로 구성되어 있습니다:

- **@webtest/web** - 사용자용 웹 애플리케이션 (포트: 3000)
- **@webtest/admin** - 관리자 대시보드 (포트: 3001)
- **@webtest/shared** - 공통 컴포넌트 및 유틸리티

## 기술 스택

- React 19.2.0
- TypeScript 4.4.2
- Turborepo 2.6.1
- React Query (TanStack Query) 5.90.7
- Zustand 5.0.8
- React Router DOM 7.9.5
- Tailwind CSS 3.4.0

## 빠른 시작

### 필수 요구사항

- Node.js >= 18
- Yarn 1.22.19

### 설치

```bash
yarn install
```

### 개발 서버 실행

#### 모든 앱 동시 실행
```bash
yarn dev
```

#### 개별 앱 실행
```bash
# Web 앱만 실행
yarn dev:web

# Admin 앱만 실행
yarn dev:admin

# Shared 패키지 빌드 (watch 모드)
yarn dev:server
```

### 빌드

```bash
yarn build
```

### 테스트

```bash
yarn test
```

### 린트

```bash
yarn lint
```

## 주요 명령어

| 명령어 | 설명 |
|--------|------|
| `yarn dev` | 모든 앱을 개발 모드로 실행 |
| `yarn dev:web` | Web 앱만 실행 (포트 3000) |
| `yarn dev:admin` | Admin 앱만 실행 (포트 3001) |
| `yarn build` | 모든 패키지 빌드 |
| `yarn test` | 모든 패키지 테스트 실행 |
| `yarn lint` | 모든 패키지 린트 검사 |

## 패키지별 상세 정보

### Web 앱

사용자용 웹사이트로 다음 페이지를 포함합니다:
- 홈 (/)
- 소개 (/about)
- 서비스 (/services)
- 연락처 (/contact)

### Admin 앱

관리자 대시보드로 다음 기능을 제공합니다:
- 대시보드 (/)
- 사용자 관리 (/users)
- 게시판 관리 (/boards)
- 게시글 관리 (/posts)
- 설정 (/settings)

### Shared 패키지

두 앱에서 공통으로 사용하는 컴포넌트와 유틸리티:
- Form 컴포넌트 (FormInput, FormSelect, FormTextarea)
- Table 컴포넌트
- API 클라이언트
- 공통 타입 정의

## 프로젝트 구조

```
webtest/
├── packages/
│   ├── web/              # 사용자 웹 앱
│   ├── admin/            # 관리자 대시보드
│   └── shared/           # 공유 패키지
├── package.json          # 루트 패키지 설정
├── turbo.json           # Turborepo 설정
└── README.md            # 프로젝트 문서
```

## 개발 가이드

자세한 개발 가이드는 [PROJECT.md](./PROJECT.md)를 참고하세요.

## 라이센스

Private
