## 🚀 개발 환경 구성

- **Framework**: Next.js 13.5.6
- **Library**: React 18.2.0
- **Language**: TypeScript 5.2.2
- **State Management**: Tanstack Query 4
- **Package Manager**: Yarn Berry
- **Linting**: ESLint

---

## 🔧 설치 및 실행 방법

```bash
yarn install
yarn dev
```

### 4. 브라우저에서 확인

[http://localhost:3001](http://localhost:3001)로 이동 후 가능 가능합니다.

### 📂 디렉토리 구조

```
📂 프로젝트 루트
├── 📂 src
│   ├── 📂 components      # UI 컴포넌트 폴더. 재사용 가능한 뷰 요소를 정의
│   ├── 📂 features        # 특정 기능별로 관련된 코드를 그룹화하여 관리
│   ├── 📂 hooks           # 커스텀 훅을 정의하여 로직을 재사용할 수 있도록 제공
│   ├── 📂 lib             # 공통적으로 사용하는 라이브러리 또는 헬퍼 함수들을 관리
│   ├── 📂 pages           # Next.js의 페이지 라우트를 구성하는 폴더
│   ├── 📂 services        # API 호출 및 비즈니스 로직을 처리하는 폴더
│   ├── 📂 utils           # 범용적으로 사용되는 유틸리티 함수들을 정의
```
