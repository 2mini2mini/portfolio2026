/**
 * 프로젝트 데이터
 * - thumb: 썸네일 이미지 경로 (images/projects/{slug}/thumb.png)
 * - category: web | app | promotion | others
 * - categoryLabel: 오버레이에 표시할 카테고리 텍스트
 * - name: 프로젝트명 (HTML 사용 가능, <br /> 줄바꿈)
 * - tags: 태그 (쉼표로 구분)
 * - detail: 상세 페이지용 (heroBg, pageCapture 등)
 */
const PROJECTS_DATA = [
  {
    thumb: "images/projects/silveredunet/thumb.png",
    category: "web",
    categoryLabel: "UX Strategy · UI · Publishing",
    name: "실버에듀넷 회사소개<br />사이트 제작",
    tags: "웹사이트, UI/UX, 반응형 웹",
    detail: {
      heroBg: "images/projects/silveredunet/hero.png",
      title: "실버에듀넷 회사소개 웹사이트 제작",
      position: "UX 설계 · UI 디자인 · 퍼블리싱",
      contribution: "UX/정보 구조 설계 60% · UI 디자인 100% · 퍼블리싱 100%",
      tool: "Figma · Vue · Tailwind CSS",
      date: "2024 (4주 소요)",
      description:
        "<p><strong>시니어 교육기관 대상 B2B 기업 소개 사이트로, 브랜드 신뢰 형성을 중심으로 정보 구조를 설계한 프로젝트입니다.</strong></p>" +
        "<p>브랜드 소개 → 서비스 강점 → 신뢰 요소로 이어지는 흐름을 재구성해 핵심 메시지가 단계적으로 인지되도록 설계했습니다.</p>" +
        "<p>차분한 톤과 여백을 활용해 안정적인 브랜드 이미지를 구축하고, UI 디자인과 퍼블리싱을 통해 반응형 공식 홈페이지로 완성했습니다.</p>",
      ctaUrl: "https://profile.silveredu.net/",
      pageCapture: "images/projects/silveredunet/capture.png",
      focusItems: [
        {
          title: "브랜드 신뢰를 전면에 배치한 정보 구조 설계",
          description:
            "B2B 기관 대상 특성을 고려해 첫 화면에 핵심 성과 지표(2018.3 / 1위 / 32,000 등)를 직관적으로 배치했습니다. 감성 이미지와 정량 지표를 병치해 신뢰를 강화했습니다.",
          image: "images/projects/silveredunet/focus-1-info-structure.png",
        },
        {
          title: "신뢰 자산 중심의 스토리텔링 흐름 구성",
          description:
            "수상·인증·기관 협약 등 브랜드 자산을 단순 나열이 아닌 '성과 → 인증 → 공신력' 흐름으로 재구성했습니다. 스크롤만으로 신뢰가 형성되도록 구조를 설계했습니다.",
          image: "images/projects/silveredunet/focus-2-awards.png",
        },
        {
          title: "B2B 기관 담당자 중심의 접근성 설계",
          description:
            "기관 담당자가 필요한 정보를 빠르게 찾을 수 있도록 카테고리 구조와 명확한 Contact 동선을 설계했습니다. 주소·교통·연락처 등 실사용 정보를 가독성 중심으로 정리했습니다.",
          image: "images/projects/silveredunet/focus-3-accessibility.png",
        },
      ],
      responsiveImage: "images/projects/silveredunet/responsive-mobile.png",
    },
  },
  {
    thumb: "images/projects/ibantot-vietnam/thumb.png",
    category: "web",
    categoryLabel: "UI · Publishing",
    name: "아이반톳 베트남 교육<br />사이트 UI/UX 리뉴얼",
    tags: "웹사이트, UI/UX, 글로벌",
  },
  {
    thumb: "images/projects/bigsplay-interactive-learning-tool/thumb.png",
    category: "web",
    categoryLabel: "UX Strategy · UI",
    name: "빅스플레이 양방향<br />수업도구 서비스 디자인",
    tags: "웹서비스, UI/UX, 인터랙션",
  },
  {
    thumb: "images/projects/kidkids-online-training/thumb.png",
    category: "web",
    categoryLabel: "UI · Publishing",
    name: "키드키즈 육아종<br />사이버 연수원 사이트 제작",
    tags: "웹사이트, UI",
  },
  {
    thumb: "images/projects/kidkids-homepage-renewal/thumb.png",
    category: "web",
    categoryLabel: "UX Strategy · UI",
    name: "키드키즈 사이트 메인<br />UI/UX 리뉴얼",
    tags: "웹사이트, UI/UX",
  },
  {
    thumb: "images/projects/bigshome-indonesia-diary-app/thumb.png",
    category: "app",
    categoryLabel: "UI",
    name: "빅스홈 인도네시아<br />알림장 앱 디자인",
    tags: "모바일 앱, UI/UX, 글로벌",
  },
  {
    thumb: "images/projects/nurinori-with-app-renewal/thumb.png",
    category: "app",
    categoryLabel: "UI",
    name: "누리놀이 위드 유아 교육<br />서비스 태블릿 리뉴얼",
    tags: "태블릿 서비스, UI/UX, 리뉴얼",
  },
  {
    thumb: "images/projects/carerun-cognitive-game-app/thumb.png",
    category: "app",
    categoryLabel: "UI",
    name: "케어런 노인 교육 서비스<br />인지게임 태블릿 리뉴얼",
    tags: "태블릿 서비스, UI/UX, 인지게임",
  },
  {
    thumb: "images/projects/suksukbareum-pronunciation-app/thumb.png",
    category: "app",
    categoryLabel: "Branding · UI",
    name: "쑥쑥바름 발음지원 서비스<br />브랜드 · 앱 디자인",
    tags: "모바일 앱, 브랜드 아이덴티티, UI/UX",
  },
  {
    thumb: "images/projects/bigsplay-renewal-promotion/thumb.png",
    category: "promotion",
    categoryLabel: "UI · Publishing",
    name: "빅스플레이 리뉴얼<br />소개 페이지",
    tags: "프로모션 페이지, UI/UX, 리뉴얼",
  },
  {
    thumb: "images/projects/kidkids-newsemester-1plus1-event/thumb.png",
    category: "promotion",
    categoryLabel: "UI · Publishing",
    name: "키드키즈 신학기 유료회원<br />1+1 이벤트 페이지",
    tags: "이벤트 페이지, 프로모션, 마케팅",
  },
  {
    thumb: "images/projects/kidkidsmall-warehouse-sale-event/thumb.png",
    category: "promotion",
    categoryLabel: "UI · Publishing",
    name: "키드키즈몰 물류데이<br />창고대방출 이벤트",
    tags: "이벤트 페이지, 세일 프로모션, 커머스",
  },
  {
    thumb: "images/projects/silveredunet-brainquiz-event/thumb.png",
    category: "promotion",
    categoryLabel: "UI · Publishing",
    name: "실버에듀넷 뇌운동<br />퀴즈 이벤트",
    tags: "이벤트 페이지, 인터랙션",
  },
  {
    thumb: "images/projects/nurinori-with-renewal-promotion/thumb.png",
    category: "promotion",
    categoryLabel: "UI · Publishing",
    name: "누리놀이 위드<br />리뉴얼 소개 페이지",
    tags: "프로모션 페이지, 브랜드 소개, 리뉴얼",
  },
  {
    thumb: "images/projects/kidkidsmall-artnolle-promotion/thumb.png",
    category: "promotion",
    categoryLabel: "UI · Publishing",
    name: "키드키즈몰 미술아놀레<br />소개 페이지",
    tags: "프로모션 페이지, 콘텐츠 소개, 커머스",
  },
  {
    thumb: "images/projects/carerun-montessori-motion-design/thumb.png",
    category: "others",
    categoryLabel: "Motion Design",
    name: "케어런 스마트 몬테소리<br />모션 디자인",
    tags: "모션 그래픽, 캐릭터 애니메이션, 교육 콘텐츠",
    motion:
      "images/projects/carerun-montessori-motion-design/carerun-montessori.json",
  },
  {
    thumb: "images/projects/bigsplay-splash-motion/thumb.png",
    category: "others",
    categoryLabel: "Motion Design",
    name: "빅스플레이 스플래시<br />모션 디자인",
    tags: "스플래시 애니메이션, 브랜드 모션, 서비스 인트로",
    motion: "images/projects/bigsplay-splash-motion/bigsplay-splash.json",
    motionModifier: "bigsplay",
  },
  {
    thumb: "images/projects/tipahapa-song-campaign-digital-ad/thumb.png",
    category: "others",
    categoryLabel: "Digital Campaign",
    name: "티파하파 생활동요 캠페인<br />디지털 광고 디자인",
    tags: "디지털 광고, 캠페인 디자인, 사이니지",
  },
  {
    thumb: "images/projects/kidkids-main-banner-design/thumb.png",
    category: "others",
    categoryLabel: "Graphic Design",
    name: "키드키즈 사이트 메인<br />배너 디자인",
    tags: "메인 배너, 프로모션 디자인, 비주얼 기획",
  },
  {
    thumb: "images/projects/education-tablet-icon-design/thumb.png",
    category: "others",
    categoryLabel: "Icon Design",
    name: "교육 태블릿 서비스<br />아이콘 디자인",
    tags: "아이콘 시스템, UI 그래픽, 디자인 가이드",
  },
];
