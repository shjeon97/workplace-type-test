# 🏢 직장인 성격 유형 테스트

## 📖 소개

직장인 성격 유형 테스트는 업무 환경에서의 개인 성향과 스타일을 분석하여 8가지 유형으로 분류하는 온라인 테스트입니다.

### ✨ 주요 특징

- **8가지 성격 유형**: 리더십형, 협력형, 분석형, 창의형, 지원형, 혁신형, 조직형, 소통형
- **과학적 접근**: 직장 환경에 특화된 검증된 질문들
- **상세한 분석**: 강점, 업무 스타일, 이상적 역할, 개발 영역 제시
- **현대적 UI/UX**: React + TypeScript + Tailwind CSS
- **반응형 디자인**: 모바일/데스크톱 완벽 지원
- **프로그레시브 웹앱**: 오프라인 지원 및 네이티브 앱 경험

## 🚀 기술 스택

### Frontend
- **React 18** - 최신 React 기능 활용
- **TypeScript** - 타입 안정성 보장
- **Vite** - 빠른 개발 환경 및 빌드
- **Tailwind CSS** - 유틸리티 기반 스타일링
- **Framer Motion** - 부드러운 애니메이션
- **Lucide React** - 아이콘 라이브러리

### Development Tools
- **ESLint** - 코드 품질 관리
- **Prettier** - 코드 포맷팅
- **GitHub Actions** - 자동 배포
- **GitHub Pages** - 정적 사이트 호스팅

## 🎯 성격 유형

### 1. 👑 리더십형 (LEADER)
- **특징**: 목표 지향적, 결단력 강함
- **강점**: 팀 관리, 비전 제시, 빠른 의사결정
- **적합 역할**: 팀 리더, 프로젝트 매니저, 임원

### 2. 🤝 협력형 (COLLABORATOR)
- **특징**: 팀워크 중시, 소통 능력 뛰어남
- **강점**: 팀 화합, 갈등 해결, 네트워킹
- **적합 역할**: HR 담당자, 프로젝트 코디네이터

### 3. 📊 분석형 (ANALYST)
- **특징**: 논리적, 데이터 기반 의사결정
- **강점**: 문제 분석, 리스크 관리, 품질 관리
- **적합 역할**: 데이터 분석가, 연구원, 전략 기획자

### 4. 🎨 창의형 (CREATIVE)
- **특징**: 혁신적 사고, 아이디어 발상
- **강점**: 독창적 솔루션, 브랜딩, 혁신 프로젝트
- **적합 역할**: 디자이너, 마케터, 제품 개발자

### 5. 🤗 지원형 (SUPPORTER)
- **특징**: 높은 공감 능력, 안정성 추구
- **강점**: 멘토링, 고객 서비스, 갈등 완화
- **적합 역할**: 멘토, 고객 서비스, 교육 담당자

### 6. 💡 혁신형 (INNOVATOR)
- **특징**: 변화에 개방적, 미래 지향적
- **강점**: 신기술 도입, 프로세스 혁신, 트렌드 예측
- **적합 역할**: 혁신 매니저, 기술 개발자, 창업가

### 7. 📋 조직형 (ORGANIZER)
- **특징**: 체계적, 계획적, 완벽주의
- **강점**: 프로젝트 관리, 프로세스 체계화, 품질 관리
- **적합 역할**: 프로젝트 매니저, 운영 관리자

### 8. 💬 소통형 (COMMUNICATOR)
- **특징**: 뛰어난 의사소통, 사교적
- **강점**: 정보 전달, 고객 관계, 팀 간 소통
- **적합 역할**: 영업, PR/마케팅, 교육 연수

## 🛠️ 설치 및 실행

```bash
# 저장소 클론
git clone https://github.com/your-username/workplace-type-test.git
cd workplace-type-test

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 빌드
npm run build

# 프리뷰
npm run preview
```

## 📁 프로젝트 구조

```
src/
├── components/          # React 컴포넌트
│   ├── HomePage.tsx    # 메인 페이지
│   ├── QuestionCard.tsx # 질문 카드
│   ├── ResultCard.tsx  # 결과 페이지
│   └── ProgressBar.tsx # 진행률 표시
├── data/               # 데이터 파일
│   ├── questions.ts    # 테스트 질문
│   └── personalityTypes.ts # 성격 유형 정보
├── types/              # TypeScript 타입 정의
│   └── index.ts
├── utils/              # 유틸리티 함수
│   └── testCalculator.ts # 결과 계산 로직
├── App.tsx            # 메인 앱 컴포넌트
└── main.tsx           # 진입점
```

## 🔧 커스터마이징

### 질문 추가/수정
`src/data/questions.ts` 파일에서 질문을 추가하거나 수정할 수 있습니다.

### 성격 유형 커스터마이징
`src/data/personalityTypes.ts` 파일에서 성격 유형 정보를 수정할 수 있습니다.

### 스타일 변경
`tailwind.config.js`와 `src/index.css`에서 디자인을 커스터마이징할 수 있습니다.

## 🚀 배포

GitHub Actions를 통해 자동으로 GitHub Pages에 배포됩니다.

1. 코드를 main 브랜치에 푸시
2. GitHub Actions 자동 실행
3. 빌드 완료 후 GitHub Pages에 배포

## 📱 PWA 기능

- 오프라인 지원
- 모바일 앱처럼 설치 가능
- 푸시 알림 지원
- 네이티브 앱 경험 제공

## 🤝 기여

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.

## 📞 문의

프로젝트에 대한 질문이나 제안이 있으시면 이슈를 생성해 주세요.

---

**💡 Tips**
- 정확한 결과를 위해 솔직하게 답변해 주세요
- 첫 번째 직감을 믿고 선택하세요
- 결과를 동료나 친구들과 공유해 보세요!