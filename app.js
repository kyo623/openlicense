// 1. 대학교 리스트 정의
const universities = [
    "국민대학교",
    "홍익대학교",
    "서울대학교",
    "연세대학교",
    "고려대학교",
    "한양대학교",
    "성균관대학교",
    "이화여자대학교",
    "건국대학교",
    "중앙대학교",
    "한국예술종합학교"
];

// 2. 소프트웨어 상세 메타데이터 (안정적인 jsDelivr SVG로 교체)
const softwares = [
    {
        id: "adobe",
        name: "Adobe Creative Cloud",
        logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/adobe.svg",
        originalPrice: 750000,
        originalPriceStr: "연간 750,000원",
        desc: "Photoshop, Illustrator, Premiere Pro 등 30개 이상의 창작 앱 패키지.",
        requiredDocs: "재학증명서 또는 모바일 학생증 캡처본 (ac.kr 이메일 인증)",
        faq: [
            { q: "휴학생도 무료 혜택이 유지되나요?", a: "제휴 학교의 경우 원칙적으로 재학생 정보와 동기화되므로, 휴학 시 라이선스가 정지될 수 있습니다. 정지 시 정보화본부에 수동 재인증 신청이 필요합니다." },
            { q: "동시 접속 기기 제한이 있나요?", a: "최대 2대 기기까지 동시 로그인이 허용되며, 동시 사용은 1대 기기에서만 권장됩니다." }
        ],
        guide: {
            "free": [
                "학교 포털 사이트(종합정보시스템)에 로그인합니다.",
                "IT지원 또는 소프트웨어/자산 대여 메뉴에서 'Adobe CC 계정 신청'을 클릭합니다.",
                "학교 포털에 연동된 이메일 계정으로 라이선스가 지급되며 어도비 공식 홈페이지에 로그인하여 즉시 설치 후 사용을 시작합니다."
            ],
            "discount": [
                "Adobe 공식 홈페이지 학생 할인 페이지에 접속합니다.",
                "학교 공식 이메일(@*.ac.kr)로 가입하여 학생 신분을 인증합니다.",
                "일반 요금 대비 60% 이상 할인된 학생 전용 요금제로 카드 등록 및 결제를 진행합니다."
            ],
            "none": [
                "현재 학교 제휴 혜택이나 별도의 무료 혜택이 지원되지 않는 상태입니다.",
                "대신 수시로 뜨는 블랙프라이데이 할인 혜택이나, 연 1회 제공되는 '해지 방어 우회 할인' 프로모션을 대기하세요."
            ]
        },
        tip: "휴학생 또는 학점등록생의 경우 어도비 연동 라이선스가 일시 중단될 수 있으므로, 학교 정보화본부 Q&A 게시판을 통해 임시 활성화를 요청하세요."
    },
    {
        id: "ms365",
        name: "Microsoft 365",
        logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/microsoft.svg",
        originalPrice: 89000,
        originalPriceStr: "연간 89,000원",
        desc: "Word, Excel, PowerPoint 및 1TB 원드라이브 클라우드 스토리지 서비스.",
        requiredDocs: "학교 공식 메일 계정(@*.ac.kr) 승인만으로 즉시 활성화",
        faq: [
            { q: "졸업 후에도 계속 무료 사용이 가능한가요?", a: "학교 정책에 따라 다릅니다. 대부분의 학교는 졸업 후 1~2년 내에 계정을 잠금 처리하므로 중요한 자료는 원드라이브에서 미리 개인 PC로 백업해 두어야 합니다." },
            { q: "설치는 몇 대의 기기까지 가능한가요?", a: "계정당 최대 5대의 PC/Mac, 5대의 태블릿, 5대의 모바일 기기에 무료 설치 및 사용이 가능합니다." }
        ],
        guide: {
            "free": [
                "학교 정보화본부의 MS 365 가입 안내 링크 페이지에 접속합니다.",
                "학교 공식 메일 계정(@*.ac.kr)을 입력하고 해당 메일함으로 인증 메일을 발송시킵니다.",
                "수신된 메일 링크를 클릭해 비밀번호를 설정하고, Office 공식 홈페이지에 로그인하여 정식 버전을 무료 설치합니다."
            ],
            "discount": [
                "MS Office Education 공식 사이트에 접속합니다.",
                "학교 도메인 메일 인증 과정을 거쳐 무료 Office 365 A1 버전을 웹용으로 활성화합니다.",
                "웹 버전 및 모바일 기기용 Office를 무료로 제한 없이 이용합니다."
            ],
            "none": [
                "학교 제휴가 누락된 경우, MS Office Web 무료 버전을 사용하거나 한컴독스 무료 혜택을 이용하는 대안을 추천합니다."
            ]
        },
        tip: "졸업생의 경우 졸업 후 1년 뒤에 라이선스가 회수되므로, 졸업을 앞두고 있다면 One Drive에 보관 중인 과제 파일을 미리 개인 스토리지로 백업해 두어야 안전합니다."
    },
    {
        id: "jetbrains",
        name: "JetBrains IDE Pack",
        logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/jetbrains.svg",
        originalPrice: 350000,
        originalPriceStr: "연간 350,000원",
        desc: "IntelliJ IDEA, WebStorm, PyCharm 등 현업 개발자 표준 IDE 및 프로그래밍 도구 팩.",
        requiredDocs: "학교 이메일 (@*.ac.kr) 인증 메일 수신",
        faq: [
            { q: "학생 라이선스는 상업적인 상용 서비스 개발에 써도 되나요?", a: "아닙니다. 학생 무료 요금제는 교육 및 학업, 개인 학습 용도로만 제한되며, 수익이 발생하는 상업적 프로젝트에는 상용 요금제를 구매하셔야 합니다." }
        ],
        guide: {
            "free": [
                "JetBrains 학생용 라이선스 신청 공식 포털에 접속합니다.",
                "학교 이메일 주소(@*.ac.kr)를 등록하고 발송된 승인 메일을 확인합니다.",
                "이메일 승인 후 발급되는 계정을 본인이 사용하는 IntelliJ 또는 WebStorm 전용 IDE 라이선스 창에 기입해 활성화합니다."
            ],
            "discount": [
                "JetBrains 학생용 라이선스 신청 공식 포털에 접속합니다.",
                "학교 이메일 주소(@*.ac.kr)를 등록하고 발송된 승인 메일을 확인합니다.",
                "이메일 승인 후 발급되는 계정을 본인이 사용하는 IntelliJ 또는 WebStorm 전용 IDE 라이선스 창에 기입해 활성화합니다."
            ]
        },
        tip: "1년마다 교육용 이메일로 갱신 알림이 발송되며, 이메일 내 'Renew' 버튼을 클릭하면 재인증되어 무료 사용이 1년씩 무제한 연장됩니다."
    },
    {
        id: "notion",
        name: "Notion Plus Plan",
        logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/notion.svg",
        originalPrice: 120000,
        originalPriceStr: "연간 120,000원",
        desc: "무제한 파일 업로드, 게스트 최대 100명 초대 가능한 최적의 협업/학업 생산성 워크스페이스.",
        requiredDocs: "ac.kr 교육 이메일 계정 연동",
        faq: [
            { q: "일반 무료 플랜과의 가장 큰 차이는 무엇인가요?", a: "일반 무료 플랜에 있는 파일 업로드 5MB 용량 제한이 완전 해제되며, 히스토리 저장 기간 연장 및 최대 100명의 외부 게스트 초대가 가능해집니다." }
        ],
        guide: {
            "free": [
                "노션 계정 설정의 '내 계정' 및 '이메일 변경' 탭으로 이동합니다.",
                "사용 중인 이메일을 학교 공식 이메일(@*.ac.kr)로 업데이트합니다.",
                "설정 하단의 '무료로 교육 요금제 이용하기' 버튼을 클릭하면 즉시 Plus 요금제 혜택이 적용됩니다."
            ],
            "discount": [
                "노션 계정 설정의 '내 계정' 및 '이메일 변경' 탭으로 이동합니다.",
                "사용 중인 이메일을 학교 공식 이메일(@*.ac.kr)로 업데이트합니다.",
                "설정 하단의 '무료로 교육 요금제 이용하기' 버튼을 클릭하면 즉시 Plus 요금제 혜택이 적용됩니다."
            ]
        },
        tip: "노션 교육 플랜은 졸업 후에도 개인적인 용도로 계속 이용하는 편법이 가능하므로 재학 중에 반드시 가입해두는 것이 유리합니다."
    },
    {
        id: "autodesk",
        name: "Autodesk AutoCAD",
        logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/autodesk.svg",
        originalPrice: 2500000,
        originalPriceStr: "연간 2,500,000원",
        desc: "건축, 엔지니어링, 3D 애니메이션 설계를 위한 글로벌 산업 표준 프로그램.",
        requiredDocs: "학생증 앞면 촬영본 또는 재학증명서 PDF (14일 이내 발급)",
        faq: [
            { q: "승인은 보통 얼마나 걸리나요?", a: "서류를 정확히 제출하는 경우 자동 시스템을 통해 대개 2시간 내로 승인 메일이 도착하며, 수동 심사의 경우 최대 3일이 소요됩니다." }
        ],
        guide: {
            "free": [
                "Autodesk Education Community에 접속하여 신규 에듀 가입을 시작합니다.",
                "본인 학교명(영문 정식 명칭)을 기입하고 학교 메일 주소로 회원 인증을 마칩니다.",
                "학적 확인을 위해 모바일 학생증 또는 재학 증명서 사진(jpg, pdf)을 제출하고 최종 승인 메일을 대기합니다."
            ],
            "discount": [
                "Autodesk Education Community에 접속하여 신규 에듀 가입을 시작합니다.",
                "본인 학교명(영문 정식 명칭)을 기입하고 학교 메일 주소로 회원 인증을 마칩니다.",
                "학적 확인을 위해 모바일 학생증 또는 재학 증명서 사진(jpg, pdf)을 제출하고 최종 승인 메일을 대기합니다."
            ]
        },
        tip: "재학생 증명서 파일 제출 시, 이름과 대학교명, 유효 기간(발급일)이 또렷하게 보이게 촬영해야 반려 확률을 줄일 수 있습니다."
    },
    {
        id: "github",
        name: "GitHub Student Dev Pack",
        logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/github.svg",
        originalPrice: 150000,
        originalPriceStr: "연간 150,000원 상당",
        desc: "모든 .ac.kr 메일 소지자 전면 무료 지원! 무료 도메인, 포트폴리오 호스팅, 디자인 리소스 제휴, GitHub Copilot 등 100가지 이상의 개발/디자인 패키지.",
        requiredDocs: "실시간 위치 정보 활성화 및 학생증 사진 즉석 촬영 인증",
        faq: [
            { q: "Copilot 활성화는 어떻게 하나요?", a: "Student Pack 승인 승격 완료 메일을 받은 후, 본인의 깃허브 계정 설정 내 'Copilot' 메뉴로 들어가면 결제 없이 무료 활성화가 가능합니다." }
        ],
        guide: {
            "free": [
                "GitHub Student Developer Pack 페이지로 이동해 교육 혜택 신청 단추를 누릅니다.",
                "GitHub 프로필 이메일에 ac.kr 이메일을 우선 추가 등록하고, 모바일 GPS 위치 정보 접근을 허용합니다.",
                "카메라를 활용해 본인의 학생증 앞면을 실시간 즉석 촬영하여 업로드하면 약 24~48시간 내에 승인이 이루어집니다."
            ],
            "discount": [
                "GitHub Student Developer Pack 페이지로 이동해 교육 혜택 신청 단추를 누릅니다.",
                "GitHub 프로필 이메일에 ac.kr 이메일을 우선 추가 등록하고, 모바일 GPS 위치 정보 접근을 허용합니다.",
                "카메라를 활용해 본인의 학생증 앞면을 실시간 즉석 촬영하여 업로드하면 약 24~48시간 내에 승인이 이루어집니다."
            ]
        },
        tip: "모든 .ac.kr 메일 주소를 소지한 학생은 전면 무료 지원 대상입니다. 무료 도메인 등록, 포트폴리오 호스팅, Canva/Icons8/Bootstrap Studio 등 디자인 리소스 제휴 혜택 및 GitHub Copilot 무료 혜택이 제공됩니다."
    },
    {
        id: "figma",
        name: "Figma Professional",
        logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/figma.svg",
        originalPrice: 220000,
        originalPriceStr: "연간 220,000원",
        desc: "무제한 디자인 프로젝트, 전용 컴포넌트 라이브러리 제작 및 파일 공유를 지원하는 UI/UX 프로토타입 도구.",
        requiredDocs: "영문 학교 정식 명칭 기재 및 가입 용도 간단한 서술형 작성",
        faq: [
            { q: "가이드대로 했는데 계속 무료 승격이 안 돼요.", a: "피그마는 학생인증 신청 후 바로 혜택이 오는 것이 아닌, 학생 전용 '팀(Team)'을 생성하여 해당 팀 내부로 파일들을 이동해야 프로페셔널 기능을 자유롭게 활용할 수 있습니다." }
        ],
        guide: {
            "free": [
                "Figma Education 공식 가입 포털 주소로 들어가 인증 신청을 개시합니다.",
                "본인이 속한 대학교 정식 영문 명칭을 대학교 공식 홈페이지를 참고하여 대소문자 정확히 적어냅니다.",
                "승인 조건 동의서를 체크하면 신청 완료 즉시 피그마 교육용 워크스페이스가 활성화됩니다."
            ],
            "discount": [
                "Figma Education 공식 가입 포털 주소로 들어가 인증 신청을 개시합니다.",
                "본인이 속한 대학교 정식 영문 명칭을 대학교 공식 홈페이지를 참고하여 대소문자 정확히 적어냅니다.",
                "승인 조건 동의서를 체크하면 신청 완료 즉시 피그마 교육용 워크스페이스가 활성화됩니다."
            ]
        },
        tip: "피그마 교육 요금제를 받으면 본인의 개인용 워크스페이스가 아닌 '새로운 Education 팀'을 개설하고 해당 팀 안에서 파일들을 관리해야 무제한 편집 혜택을 누릴 수 있습니다."
    },
    {
        id: "zoom",
        name: "Zoom Pro",
        logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/zoom.svg",
        originalPrice: 200000,
        originalPriceStr: "연간 200,000원",
        desc: "시간제한 없는 줌 고화질 회의 개설 및 대규모 온라인 세미나 지원 솔루션.",
        requiredDocs: "학교 포털 싱글사인온(SSO) 메일 연동 인증",
        faq: [
            { q: "모든 학우가 신청할 수 있나요?", a: "학교 정보화본부와 줌 코리아 계약 방식에 따르며, 일부 학교는 교수진과 일부 공용 회의 개설자에게만 권한을 부여하기도 하니 확인이 필요합니다." }
        ],
        guide: {
            "free": [
                "학교 포털 웹메일 또는 정보 서비스 공지글에서 'Zoom 계정 배포 정책'을 검색합니다.",
                "명시된 학교 줌 포털 계정(ex. school-ac-kr.zoom.us)으로 들어가 로그인을 시도합니다.",
                "학교 포털 ID/PW와 싱글사인온(SSO) 연동을 통해 시간제한 없는 회의 개설 권한을 즉시 발급받습니다."
            ],
            "discount": [
                "Zoom 교육 요금제 문의 양식에 접속합니다.",
                "학교 메일을 인증하여 전용 할인 코드나 공동구매 코드를 메일로 받아 수수료를 감면받습니다."
            ],
            "none": [
                "학교 제휴가 누락된 경우, 무료 버전의 40분 시간제한 우회를 위해 '구글 미트(Google Meet)' 또는 학교 제휴 MS Teams 사용을 추천합니다."
            ]
        },
        tip: "대부분의 대학교가 코로나 기간 이후 Zoom Pro 제휴를 연장하지 않고 중단하는 추세입니다. 만약 비활성화로 확인되면 학과 내에 구비된 공용 계정이 있는지 조교실에 문의해보세요."
    },
    {
        id: "c4d",
        name: "Cinema 4D (Maxon)",
        logo: "https://cdn.worldvectorlogo.com/logos/cinema-4d.svg",
        imgUrl: "https://cdn.worldvectorlogo.com/logos/cinema-4d.svg",
        logoStyle: "",
        originalPrice: 1300000,
        originalPriceStr: "연간 1,300,000원",
        desc: "모션 그래픽 및 3D 모델링, 애니메이션, 렌더링에 널리 사용되는 산업 표준 3D 소프트웨어.",
        requiredDocs: "OnTheHub(Kivuto) 플랫폼을 통한 학교 메일(@*.ac.kr) 및 학적 인증",
        faq: [
            { q: "라이선스 기간은 어떻게 되나요?", a: "6개월 또는 1년 단위로 교육용 라이선스를 대폭 할인된 가격에 구매할 수 있습니다." }
        ],
        guide: {
            "free": [
                "OnTheHub 플랫폼을 지원하는 학교의 경우 학생 인증 시 수수료를 제외한 라이선스가 전면 지급됩니다."
            ],
            "discount": [
                "OnTheHub(Kivuto) 플랫폼에 접속합니다.",
                "학교 공식 메일 계정으로 회원가입 후 인증 메일을 확인합니다.",
                "인증 완료 후 학생 할인 카탈로그에서 Cinema 4D 6개월/1년 라이선스를 선택하여 결제합니다."
            ],
            "none": [
                "공식 학생 할인은 OnTheHub 플랫폼을 통해서만 지원됩니다. 해당 플랫폼을 지원하는지 학교 IT지원팀에 문의하세요."
            ]
        },
        tip: "OnTheHub 플랫폼 인증 시 학교 영문 명칭을 대소문자 정확히 검색하여 등록해야 라이선스 구매 권한이 부여됩니다."
    },
    {
        id: "runway",
        name: "Runway ML",
        logo: "R",
        imgUrl: "R",
        logoStyle: "",
        originalPrice: 420000,
        originalPriceStr: "연간 420,000원",
        desc: "텍스트나 이미지로 고품질 비디오를 생성하는 최첨단 생성형 AI 비디오 저작 도구.",
        requiredDocs: "SheerID를 통한 학생 신분 인증 (재학증명서 또는 성적증명서 첨부)",
        faq: [
            { q: "할인 적용 범위는 어떻게 되나요?", a: "SheerID 인증 완료 후 발급받은 코드를 결제 시 입력하면 첫 구독 요금의 25%가 할인됩니다." }
        ],
        guide: {
            "discount": [
                "Runway 공식 홈페이지 요금제 페이지에서 학생 할인을 선택합니다.",
                "SheerID 인증 페이지로 연동되며, 학교명과 공식 이메일을 입력합니다.",
                "재학생 확인을 위해 학생증 또는 재학증명서를 업로드하면 25% 할인 코드가 메일로 발급됩니다."
            ]
        },
        tip: "SheerID 인증 시 파일 내 이름, 학교명, 유효 기간(발급일)이 명확히 보여야 심사에서 즉시 승인됩니다."
    },
    {
        id: "mscopilot",
        name: "Microsoft Copilot",
        logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/microsoftcopilot.svg",
        originalPrice: 0,
        originalPriceStr: "0원 (무료)",
        desc: "학교 MS 365 계정 로그인 시 엔터프라이즈 데이터 보호 기능이 제공되는 상업용 AI 검색 및 비서 솔루션.",
        requiredDocs: "학교 공식 MS 365 계정 로그인",
        faq: [
            { q: "개인용 코파일럿과 무엇이 다른가요?", a: "엔터프라이즈 보호 기능이 작동하여 사용자가 입력한 데이터가 외부 유출이나 모델 학습에 사용되지 않고 완벽히 암호화 처리됩니다." }
        ],
        guide: {
            "free": [
                "copilot.microsoft.com 또는 Edge 브라우저 우측 코파일럿 아이콘을 클릭합니다.",
                "우측 상단 로그인에서 '회사 또는 학교 계정'을 선택해 학교 이메일로 로그인합니다.",
                "우측 상단에 '보호됨' 또는 'Protected' 배지가 나타나면 보안 버전 무료 사용이 시작됩니다."
            ]
        },
        tip: "학교 계정으로 로그인 시 입력한 프롬프트 내용이 MS의 AI 학습 데이터로 사용되지 않아 기밀 및 논문 유출 걱정 없이 안전하게 사용할 수 있습니다."
    },
    {
        id: "midjourney",
        name: "Midjourney",
        logo: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FFBF00" width="100%" height="100%"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>',
        imgUrl: "✨",
        logoStyle: "",
        originalPrice: 150000,
        originalPriceStr: "연간 150,000원~ (기본 플랜)",
        desc: "디자이너와 일러스트레이터들이 가장 많이 사용하는 고해상도 이미지 생성형 AI.",
        requiredDocs: "공식 학생 할인 없음",
        faq: [
            { q: "학생 할인이 왜 없나요?", a: "Midjourney는 현재 공식적인 학생 상시 할인을 제공하지 않고 있습니다." }
        ],
        guide: {
            "none": [
                "Midjourney는 현재 공식적인 학생 상시 할인을 제공하지 않습니다.",
                "대신 블랙프라이데이 시즌(11월)에 간헐적으로 진행되는 연간 결제 20% 할인 프로모션을 활용해 보세요.",
                "또한 무료 크레딧을 제공하는 웹 기반 이미지 생성 AI 대안(예: Adobe Firefly 등)을 활용하는 것도 방법입니다."
            ]
        },
        tip: "공식 학생 할인은 없으나 매년 11월 블랙프라이데이 시즌에 연간 결제 20% 특별 할인을 제공한 이력이 있으므로 이 시기를 노려보세요."
    },
    {
        id: "kling",
        name: "Kling AI",
        logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/sparkfun.svg",
        originalPrice: 180000,
        originalPriceStr: "연간 180,000원~",
        desc: "고품질 시네마틱 카메라 워킹과 물리 엔진이 적용된 강력한 비디오 생성 AI 도구.",
        requiredDocs: "공식 학생 할인 없음",
        faq: [
            { q: "무료로 이용할 수 있는 방법이 있나요?", a: "매일 출석체크 및 신규 가입 시 기본 무료 크레딧을 일부 제공합니다." }
        ],
        guide: {
            "none": [
                "Kling AI는 공식적인 상시 학생 할인을 제공하지 않습니다.",
                "대안으로 신규 가입 시 제공되는 일일 무료 크레딧을 활용하여 간단한 테스트를 진행할 수 있습니다.",
                "이벤트성으로 제공되는 결제 패키지나 첫 달 할인 혜택 기간에 구독을 결정하는 것이 좋습니다."
            ]
        },
        tip: "공식 학생 할인은 없지만 신규 가입 및 앱 설치 시 보너스 크레딧이 충전되며, 첫 구독 결제 시 깜짝 할인 배너가 뜨는 경우가 많습니다."
    },
    {
        id: "chatgpt",
        name: "ChatGPT Plus",
        logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/openai.svg",
        originalPrice: 330000,
        originalPriceStr: "연간 330,000원 (월 $20)",
        desc: "OpenAI의 대표적인 초거대 언어 모델로, 문서 요약, 번역, 코딩 가이드 등 학업에 다양하게 활용되는 AI 비서.",
        requiredDocs: "공식 학생 할인 없음",
        faq: [
            { q: "GPT-4o 무료 요금제와의 차이는 무엇인가요?", a: "Plus 요금제는 메시지 한도가 5배 이상 높으며 DALL-E 이미지 생성, 고급 음성 및 맞춤형 GPT 봇 사용이 전면 오픈됩니다." }
        ],
        guide: {
            "none": [
                "ChatGPT Plus는 공식적인 학생 할인을 제공하지 않으며 정가 구독이 필요합니다.",
                "대안 팁: 무료 플랜의 기본 GPT-4o 사용량 범위 내에서 과제를 수행하거나, API 플레이그라운드를 활용해 사용한 토큰만큼만 저렴하게 결제하는 편법을 추천합니다."
            ]
        },
        tip: "ChatGPT Plus 정가 결제가 부담스럽다면 OpenAI API 계정을 개설하고 플레이그라운드에서 사용한 만큼만 지불(토큰당 결제)하는 것이 훨씬 저렴합니다."
    },
    {
        id: "claude",
        name: "Claude Pro",
        logo: "https://cdn.worldvectorlogo.com/logos/claude-ai-1.svg",
        imgUrl: "https://cdn.worldvectorlogo.com/logos/claude-ai-1.svg",
        logoStyle: "",
        originalPrice: 330000,
        originalPriceStr: "연간 330,000원 (월 $20)",
        desc: "Anthropic의 언어 모델로, 논문 요약, 논리적 추론, 장문 작성이 매우 뛰어나 대학 과제에 최적화된 AI.",
        requiredDocs: "공식 학생 할인 없음",
        faq: [
            { q: "무료 등급과 제한량 차이가 큰가요?", a: "Pro 등급은 트래픽 혼잡 시간대에도 우선 접근 권한이 제공되며 5배 많은 질문 전송이 가능합니다." }
        ],
        guide: {
            "none": [
                "Claude Pro는 현재 공식적인 상시 학생 할인을 제공하지 않습니다.",
                "대안 팁: 무료 버전의 기본적인 하루 제한량 범위 내에서 긴 논문 분석 작업을 수행하거나, Anthropic API 콘솔을 개설해 종량제로 과제를 해결하는 방법을 추천합니다."
            ]
        },
        tip: "Claude Pro는 공식 학생 할인이 없지만 논문 요약 능력이 탁월하므로 무료 크레딧 범위 내에서 사용해본 뒤, 장기 과제 기간에만 1달씩 끊어서 결제해 비용을 아끼세요."
    },
    {
        id: "gemini",
        name: "Gemini Advanced",
        logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/googlegemini.svg",
        originalPrice: 348000,
        originalPriceStr: "연간 348,000원 (월 29,000원)",
        desc: "Google의 최신 AI 모델로, 구글 드라이브, 독스, 지메일 등 구글 워크스페이스 도구와 강력하게 연동되는 지능형 비서.",
        requiredDocs: "공식 학생 할인 없음",
        faq: [
            { q: "구글 원 멤버십과 통합되어 있나요?", a: "예, Gemini Advanced 구독 시 구글 드라이브 2TB 스토리지 추가 혜택이 포함되어 제공됩니다." }
        ],
        guide: {
            "none": [
                "Gemini Advanced는 공식적인 대학생 할인을 지원하지 않고 정가 구독이 필요합니다.",
                "대안 팁: 구글 One AI 프리미엄 요금제의 '첫 1~2개월 무료 체험 프로모션'을 활용하거나, 무료 등급의 Gemini 1.5 Pro 웹 버전을 활용해 과제를 해결할 수 있습니다."
            ]
        },
        tip: "구글 캘린더나 지메일을 활발하게 쓴다면 구글 원 AI 프리미엄 요금제의 '첫 1개월 무료' 프로모션을 적극적으로 노려보세요."
    },
    {
        id: "adobe_illustrator",
        name: "Adobe Illustrator",
        logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/adobeillustrator.svg",
        originalPrice: 288000,
        originalPriceStr: "연간 288,000원 (월 24,000원)",
        desc: "벡터 그래픽 및 일러스트레이션 제작을 위한 글로벌 표준 디자인 프로그램.",
        requiredDocs: "재학증명서 또는 ac.kr 이메일 인증",
        faq: [],
        guide: {
            "discount": [
                "어도비 공식 홈페이지 학생 할인 페이지에 접속합니다.",
                "CC All Apps 전체 플랜을 가입하는 것이 비용면에서 단일 앱보다 훨씬 유리하므로 CC 가입을 권장합니다."
            ]
        },
        tip: "단일 앱 정가(월 34,000원)보다 학생용 CC All Apps(첫해 월 23,100원) 결제가 유리합니다."
    },
    {
        id: "adobe_photoshop",
        name: "Adobe Photoshop",
        logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/adobephotoshop.svg",
        originalPrice: 288000,
        originalPriceStr: "연간 288,000원 (월 24,000원)",
        desc: "사진 편집, 디지털 드로잉, 그래픽 디자인의 세계적인 표준 사진 저작 프로그램.",
        requiredDocs: "재학증명서 또는 ac.kr 이메일 인증",
        faq: [],
        guide: {
            "discount": [
                "어도비 공식 홈페이지 학생 할인 페이지에 접속합니다.",
                "포토샵 단일 앱보다 학생용 CC All Apps 전체 플랜이 할인율과 가격 면에서 유리합니다."
            ]
        },
        tip: "단일 앱 정가(월 34,000원)보다 학생용 CC All Apps(첫해 월 23,100원) 결제가 유리합니다."
    },
    {
        id: "adobe_premiere",
        name: "Adobe Premiere Pro",
        logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/adobepremierepro.svg",
        originalPrice: 288000,
        originalPriceStr: "연간 288,000원 (월 24,000원)",
        desc: "유튜브 영상 제작, 영화 편집, 비디오 컴포지션을 위한 업계 리딩 영상 편집 도구.",
        requiredDocs: "재학증명서 또는 ac.kr 이메일 인증",
        faq: [],
        guide: {
            "discount": [
                "어도비 공식 홈페이지 학생 할인 페이지에 접속합니다.",
                "프리미어 프로 단일 앱보다 CC All Apps 학생 요금제 가입이 비용면에서 훨씬 유리합니다."
            ]
        },
        tip: "단일 앱 정가(월 34,000원)보다 학생용 CC All Apps(첫해 월 23,100원) 결제가 유리합니다."
    },
    {
        id: "adobe_aftereffects",
        name: "Adobe After Effects",
        logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/adobeaftereffects.svg",
        originalPrice: 288000,
        originalPriceStr: "연간 288,000원 (월 24,000원)",
        desc: "영화 VFX, 모션 그래픽, 타이틀 애니메이션 및 3D 컴포지션 시각효과 도구.",
        requiredDocs: "재학증명서 또는 ac.kr 이메일 인증",
        faq: [],
        guide: {
            "discount": [
                "어도비 공식 홈페이지 학생 할인 페이지에 접속합니다.",
                "단일 앱 결제보다 학생 할인 60%가 들어가는 CC All Apps 구독이 권장됩니다."
            ]
        },
        tip: "단일 앱 정가(월 34,000원)보다 학생용 CC All Apps(첫해 월 23,100원) 결제가 유리합니다."
    },
    {
        id: "adobe_indesign",
        name: "Adobe InDesign",
        logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/adobeindesign.svg",
        originalPrice: 288000,
        originalPriceStr: "연간 288,000원 (월 24,000원)",
        desc: "인쇄 및 디지털 레이아웃 디자인, 포스터, 책, PDF 템플릿 제작 도구.",
        requiredDocs: "재학증명서 또는 ac.kr 이메일 인증",
        faq: [],
        guide: {
            "discount": [
                "어도비 공식 홈페이지 학생 할인 페이지에 접속합니다.",
                "출판 편집 디자인 시 단일 인디자인 구매보다 CC 전체 앱을 구매하는 것이 낫습니다."
            ]
        },
        tip: "단일 앱 정가(월 34,000원)보다 학생용 CC All Apps(첫해 월 23,100원) 결제가 유리합니다."
    },
    {
        id: "adobe_lightroom",
        name: "Adobe Lightroom",
        logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/adobelightroom.svg",
        originalPrice: 120000,
        originalPriceStr: "연간 120,000원 (월 11,000원)",
        desc: "전문 사진 보정, 클라우드 사진 백업 및 정리를 위한 포토그래퍼용 도구.",
        requiredDocs: "재학증명서 또는 ac.kr 이메일 인증",
        faq: [],
        guide: {
            "discount": [
                "어도비 공식 홈페이지 학생 할인 페이지에 접속합니다.",
                "라이트룸은 포토그래피 팩(포토샵+라이트룸+클라우드) 또는 CC All Apps 학생용 요금제로 가입하는 것이 좋습니다."
            ]
        },
        tip: "포토그래피 팩이나 CC All Apps 학생 플랜을 통해 요금을 대폭 아낄 수 있습니다."
    },
    {
        id: "ms_powerpoint",
        name: "Microsoft PowerPoint",
        logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/microsoftpowerpoint.svg",
        originalPrice: 89000,
        originalPriceStr: "연간 89,000원",
        desc: "대학생 발표 자료 및 PT 제작의 대명사 프레젠테이션 솔루션.",
        requiredDocs: "학교 이메일 계정 인증",
        faq: [],
        guide: {
            "free": [
                "학교 포털 연동을 통해 Microsoft 365 전체 플랜을 무료로 사용할 수 있습니다.",
                "설치 방법은 Microsoft 365 통합 가이드를 따르세요."
            ]
        },
        tip: "파워포인트 개별 구매 필요 없이 학교 이메일로 가입하여 Office 전체 무료 혜택을 이용하세요."
    },
    {
        id: "ms_word",
        name: "Microsoft Word",
        logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/microsoftword.svg",
        originalPrice: 89000,
        originalPriceStr: "연간 89,000원",
        desc: "과제 리포트, 논문 및 공문서 작성을 위한 업계 표준 워드프로세서.",
        requiredDocs: "학교 이메일 계정 인증",
        faq: [],
        guide: {
            "free": [
                "학교 포털 연동을 통해 Microsoft 365 전체 플랜을 무료로 사용할 수 있습니다.",
                "설치 방법은 Microsoft 365 통합 가이드를 따르세요."
            ]
        },
        tip: "워드 개별 구매 필요 없이 학교 이메일로 가입하여 Office 전체 무료 혜택을 이용하세요."
    },
    {
        id: "ms_excel",
        name: "Microsoft Excel",
        logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/microsoftexcel.svg",
        originalPrice: 89000,
        originalPriceStr: "연간 89,000원",
        desc: "수식 연산, 차트 작성, 데이터 분석을 위한 최고의 스프레드시트 도구.",
        requiredDocs: "학교 이메일 계정 인증",
        faq: [],
        guide: {
            "free": [
                "학교 포털 연동을 통해 Microsoft 365 전체 플랜을 무료로 사용할 수 있습니다.",
                "설치 방법은 Microsoft 365 통합 가이드를 따르세요."
            ]
        },
        tip: "엑셀 개별 구매 필요 없이 학교 이메일로 가입하여 Office 전체 무료 혜택을 이용하세요."
    },
    {
        id: "cinema_4d_db",
        name: "Cinema 4D",
        logo: "https://cdn.worldvectorlogo.com/logos/cinema-4d.svg",
        imgUrl: "https://cdn.worldvectorlogo.com/logos/cinema-4d.svg",
        originalPrice: 1200000,
        originalPriceStr: "연간 1,200,000원",
        desc: "3D 모델링, 애니메이션 및 렌더링 소프트웨어.",
        requiredDocs: "학생 인증",
        faq: [],
        guide: {
            "free": ["기존 학생 인증 프로세스를 통한 교육용 무료/할인 혜택이 적용됩니다."],
            "discount": ["기존 학생 인증 프로세스를 통한 교육용 무료/할인 혜택이 적용됩니다."]
        },
        tip: "기존 학생 인증 프로세스를 통한 교육용 무료/할인 혜택이 적용됩니다."
    },
    {
        id: "blender_db",
        name: "Blender",
        logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/blender.svg",
        originalPrice: 0,
        originalPriceStr: "0원",
        desc: "완전 무료 오픈소스 3D 컴퓨터 그래픽 소프트웨어.",
        requiredDocs: "없음 (누구나 무료)",
        faq: [],
        guide: {
            "free": ["완전 무료 오픈소스 소프트웨어입니다. 공식 홈페이지에서 다운로드하세요."]
        },
        tip: "완전 무료 오픈소스 소프트웨어입니다. 공식 홈페이지에서 다운로드하세요."
    },
    {
        id: "figma_db",
        name: "Figma",
        logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/figma.svg",
        originalPrice: 220000,
        originalPriceStr: "연간 220,000원",
        desc: "실시간 협업을 지원하는 UI/UX 디자인 도구.",
        requiredDocs: "학생 인증",
        faq: [],
        guide: {
            "free": ["기존 학생 인증 프로세스를 통한 교육용 무료/할인 혜택이 적용됩니다."],
            "discount": ["기존 학생 인증 프로세스를 통한 교육용 무료/할인 혜택이 적용됩니다."]
        },
        tip: "기존 학생 인증 프로세스를 통한 교육용 무료/할인 혜택이 적용됩니다."
    },
    {
        id: "chatgpt_db",
        name: "ChatGPT",
        logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/openai.svg",
        originalPrice: 330000,
        originalPriceStr: "연간 330,000원",
        desc: "OpenAI의 인공지능 챗봇.",
        requiredDocs: "없음",
        faq: [],
        guide: {
            "none": ["현재 이 소프트웨어는 공식 학생 할인을 제공하지 않습니다. 대안 팁: 학교 계정 제휴 여부를 확인하거나 프로모션 기간을 활용하세요."]
        },
        tip: "학교 계정 제휴 여부를 확인하거나 프로모션 기간을 활용하세요."
    },
    {
        id: "claude_db",
        name: "Claude",
        logo: "https://cdn.worldvectorlogo.com/logos/claude-ai-1.svg",
        imgUrl: "https://cdn.worldvectorlogo.com/logos/claude-ai-1.svg",
        originalPrice: 330000,
        originalPriceStr: "연간 330,000원",
        desc: "Anthropic의 인공지능 비서.",
        requiredDocs: "없음",
        faq: [],
        guide: {
            "none": ["현재 이 소프트웨어는 공식 학생 할인을 제공하지 않습니다. 대안 팁: 학교 계정 제휴 여부를 확인하거나 프로모션 기간을 활용하세요."]
        },
        tip: "학교 계정 제휴 여부를 확인하거나 프로모션 기간을 활용하세요."
    },
    {
        id: "gemini_db",
        name: "Gemini",
        logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/google.svg",
        originalPrice: 348000,
        originalPriceStr: "연간 348,000원",
        desc: "Google의 인공지능 멀티모달 모델.",
        requiredDocs: "없음",
        faq: [],
        guide: {
            "none": ["현재 이 소프트웨어는 공식 학생 할인을 제공하지 않습니다. 대안 팁: 학교 계정 제휴 여부를 확인하거나 프로모션 기간을 활용하세요."]
        },
        tip: "학교 계정 제휴 여부를 확인하거나 프로모션 기간을 활용하세요."
    },
    {
        id: "midjourney_db",
        name: "Midjourney",
        logo: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FFBF00" width="100%" height="100%"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>',
        imgUrl: "✨",
        originalPrice: 150000,
        originalPriceStr: "연간 150,000원",
        desc: "텍스트 설명으로 고화질 이미지를 생성하는 AI 서비스.",
        requiredDocs: "없음",
        faq: [],
        guide: {
            "none": ["현재 이 소프트웨어는 공식 학생 할인을 제공하지 않습니다. 대안 팁: 학교 계정 제휴 여부를 확인하거나 프로모션 기간을 활용하세요."]
        },
        tip: "학교 계정 제휴 여부를 확인하거나 프로모션 기간을 활용하세요."
    },
    {
        id: "kling_db",
        name: "Kling AI",
        logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/kling.svg",
        originalPrice: 180000,
        originalPriceStr: "연간 180,000원",
        desc: "고품질 비디오를 생성하는 AI 영상 저작 툴.",
        requiredDocs: "없음",
        faq: [],
        guide: {
            "none": ["현재 이 소프트웨어는 공식 학생 할인을 제공하지 않습니다. 대안 팁: 학교 계정 제휴 여부를 확인하거나 프로모션 기간을 활용하세요."]
        },
        tip: "학교 계정 제휴 여부를 확인하거나 프로모션 기간을 활용하세요."
    },
    {
        id: "runway_db",
        name: "Runway",
        logo: "R",
        imgUrl: "R",
        originalPrice: 315000,
        originalPriceStr: "연간 315,000원",
        desc: "창작자를 위한 차세대 AI 비디오 및 미디어 생성 도구.",
        requiredDocs: "없음",
        faq: [],
        guide: {
            "none": ["현재 이 소프트웨어는 공식 학생 할인을 제공하지 않습니다. 대안 팁: 학교 계정 제휴 여부를 확인하거나 프로모션 기간을 활용하세요."]
        },
        tip: "학교 계정 제휴 여부를 확인하거나 프로모션 기간을 활용하세요."
    },
    {
        id: "sora_db",
        name: "Sora",
        logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/openai.svg",
        originalPrice: 400000,
        originalPriceStr: "연간 400,000원",
        desc: "OpenAI의 텍스트-비디오 생성 AI 모델.",
        requiredDocs: "없음",
        faq: [],
        guide: {
            "none": ["현재 이 소프트웨어는 공식 학생 할인을 제공하지 않습니다. 대안 팁: 학교 계정 제휴 여부를 확인하거나 프로모션 기간을 활용하세요."]
        },
        tip: "학교 계정 제휴 여부를 확인하거나 프로모션 기간을 활용하세요."
    },
    {
        id: "sandoll",
        name: "산돌구름 (Sandoll Cloud)",
        logo: "산돌",
        imgUrl: "산돌",
        logoStyle: "",
        originalPrice: 300000,
        originalPriceStr: "연간 300,000원 상당",
        desc: "국민대, 홍익대, 이화여대, 한예종 등 다수 대학의 단과대 또는 전교생 대상 무료 지원 폰트 서비스.",
        requiredDocs: "소속 대학 학생 인증 및 학교별 비공개 인증키",
        faq: [
            { q: "비공개 인증키는 어떻게 획득하나요?", a: "소속 단과대 학생회실, 컴퓨터실 관리부서 또는 학교 커뮤니티(에브리타임 등) 공지사항을 통해 배포되는 인증 코드를 확인해야 합니다." }
        ],
        guide: {
            "free": [
                "학교 포털(종합정보시스템) 또는 단과대 학생회 공지사항을 확인하여 산돌구름 전용 '비공개 인증키'를 획득합니다.",
                "산돌구름(Sandoll Cloud) 공식 홈페이지에 회원가입 및 로그인을 진행합니다.",
                "마이페이지의 쿠폰/이용권 등록 메뉴로 이동하여 획득한 학교별 인증키를 입력하면 무료 이용권이 즉시 활성화됩니다."
            ],
            "none": [
                "학교 포털 또는 학생회 공지사항에서 제휴 여부를 확인하세요. 제휴가 확인되지 않은 경우 공식 홈페이지 무료 체험 폰트를 활용할 수 있습니다."
            ]
        },
        tip: "산돌구름 폰트 혜택은 학교 포털 내 정보화본부 공지사항이나 단과대 학생회 인스타그램/소식지 등에서 '비공개 인증키'를 확인해 입력해야 정상 등록됩니다."
    },
    {
        id: "clipstudio",
        name: "Clip Studio Paint",
        logo: "CLIP",
        imgUrl: "CLIP",
        logoStyle: "",
        originalPrice: 98000,
        originalPriceStr: "영구 라이선스 98,000원선",
        desc: "일러스트, 드로잉, 웹툰 및 애니메이션 제작을 위한 디지털 그래픽 소프트웨어.",
        requiredDocs: "학교 이메일 또는 제휴 인증 수단",
        faq: [
            { q: "학교 제휴 혜택은 어떻게 확인하나요?", a: "한국예술종합학교, 홍익대학교 등 애니메이션/미술 관련 학과가 있는 경우 실습실 라이선스 제휴나 개별 라이선스 지원 여부를 학과 사무실을 통해 확인해 보시는 것이 좋습니다." }
        ],
        guide: {
            "free": [
                "학교 포털의 소프트웨어 자료실 또는 학과 사무실 공지사항을 확인합니다.",
                "학교 전용 클립스튜디오 라이선스 배포 링크를 통해 정식 시리얼 넘버 또는 계정 라이선스를 발급받습니다.",
                "클립스튜디오 페인트 프로그램을 다운로드한 뒤 발급받은 계정으로 로그인하여 활성화합니다."
            ],
            "none": [
                "공식 홈페이지의 학생 할인을 적용받아 구매하거나, 기간 한정 무료 체험판(최대 3개월)을 활용하여 이용을 시작합니다."
            ]
        },
        tip: "공식 홈페이지 학생 할인 또는 기간 한정 체험판 활용"
    }
];

// 3. 대학교 별 상세 매칭 데이터 (제휴 및 상태 정보)
const universityPortals = {
    "국민대학교": "https://ktis.kookmin.ac.kr",
    "홍익대학교": "https://cnportal.hongik.ac.kr",
    "서울대학교": "https://my.snu.ac.kr",
    "연세대학교": "https://o365.yonsei.ac.kr",
    "고려대학교": "https://portal.korea.ac.kr",
    "한양대학교": "https://portal.hanyang.ac.kr",
    "성균관대학교": "https://www.skku.edu",
    "이화여자대학교": "https://portal.ewha.ac.kr",
    "건국대학교": "https://portal.konkuk.ac.kr",
    "중앙대학교": "https://portal.cau.ac.kr",
    "한국예술종합학교": "https://art.karts.ac.kr"
};

const zoomSettings = {
    "국민대학교": { type: "none", price: 200000, priceStr: "연간 20만 원", badgeText: "해지 방어 팁 유효", portalUrl: "https://zoom.us" },
    "홍익대학교": { type: "free", price: 0, priceStr: "0원 (무료)", badgeText: "학교 제휴 (무료)", portalUrl: "https://cnportal.hongik.ac.kr" },
    "서울대학교": { type: "free", price: 0, priceStr: "0원 (무료)", badgeText: "학교 제휴 (무료)", portalUrl: "https://my.snu.ac.kr" },
    "연세대학교": { type: "none", price: 200000, priceStr: "연간 20만 원", badgeText: "우회 플랜 추천", portalUrl: "https://zoom.us" },
    "고려대학교": { type: "free", price: 0, priceStr: "0원 (무료)", badgeText: "학교 제휴 (무료)", portalUrl: "https://portal.korea.ac.kr" },
    "한양대학교": { type: "free", price: 0, priceStr: "0원 (무료)", badgeText: "학교 제휴 (무료)", portalUrl: "https://portal.hanyang.ac.kr" },
    "성균관대학교": { type: "none", price: 200000, priceStr: "연간 20만 원", badgeText: "대체 솔루션 권장", portalUrl: "https://zoom.us" },
    "이화여자대학교": { type: "none", price: 200000, priceStr: "연간 20만 원", badgeText: "대체 솔루션 권장", portalUrl: "https://zoom.us" },
    "건국대학교": { type: "none", price: 200000, priceStr: "연간 20만 원", badgeText: "대체 솔루션 권장", portalUrl: "https://zoom.us" },
    "중앙대학교": { type: "free", price: 0, priceStr: "0원 (무료)", badgeText: "학교 제휴 (무료)", portalUrl: "https://portal.cau.ac.kr" },
    "한국예술종합학교": { type: "none", price: 200000, priceStr: "연간 20만 원", badgeText: "대체 솔루션 권장", portalUrl: "https://zoom.us" }
};

const universityItUrls = {
    "국민대학교": "https://ict.kookmin.ac.kr",
    "홍익대학교": "https://computer.hongik.ac.kr",
    "서울대학교": "https://it.snu.ac.kr",
    "연세대학교": "https://it.yonsei.ac.kr",
    "고려대학교": "https://it.korea.ac.kr",
    "한양대학교": "https://information.hanyang.ac.kr",
    "성균관대학교": "https://it.skku.edu",
    "이화여자대학교": "https://it.ewha.ac.kr",
    "건국대학교": "https://it.konkuk.ac.kr",
    "중앙대학교": "https://it.cau.ac.kr",
    "한국예술종합학교": "https://it.karts.ac.kr"
};

const universityData = {};

universities.forEach(univ => {
    const portal = universityPortals[univ];
    universityData[univ] = {
        _itPortalUrl: universityItUrls[univ] || portal,
        "ms365": { type: "free", price: 0, priceStr: "0원 (무료)", badgeText: "학교 제휴 (무료)", portalUrl: portal },
        "jetbrains": { type: "discount", price: 0, priceStr: "0원 (무료)", badgeText: "상시 학생 할인", portalUrl: "https://www.jetbrains.com/community/education/" },
        "notion": { type: "discount", price: 0, priceStr: "0원 (무료)", badgeText: "상시 학생 할인", portalUrl: "https://www.notion.so/personal/students" },
        "autodesk": { type: "discount", price: 0, priceStr: "0원 (무료)", badgeText: "상시 학생 할인", portalUrl: "https://www.autodesk.com/education" },
        "github": { type: "free", price: 0, priceStr: "0원 (무료)", badgeText: "학교 메일 인증 무료", portalUrl: "https://education.github.com" },
        "figma": { type: "free", price: 0, priceStr: "0원 (무료)", badgeText: "Education 플랜 무료", portalUrl: "https://www.figma.com/education" },
        "zoom": zoomSettings[univ],
        "c4d": { type: "discount", price: 144000, priceStr: "수수료 결제 (연 14만 원선)", badgeText: "OnTheHub 할인", portalUrl: "https://onthehub.com" },
        "runway": { type: "discount", price: 315000, priceStr: "25% 할인 (월 $11.25~)", badgeText: "SheerID 25% 할인", portalUrl: "https://runwayml.com" },
        "mscopilot": { type: "free", price: 0, priceStr: "0원 (무료)", badgeText: "학교 계정 연동 무료", portalUrl: "https://copilot.microsoft.com" },
        "midjourney": { type: "none", price: 150000, priceStr: "할인 없음 (정가 구독)", badgeText: "공식 할인 없음", portalUrl: "https://midjourney.com" },
        "kling": { type: "none", price: 180000, priceStr: "할인 없음 (정가 구독)", badgeText: "공식 할인 없음", portalUrl: "https://klingai.com" },
        "chatgpt": { type: "none", price: 330000, priceStr: "할인 없음 (정가 구독)", badgeText: "공식 할인 없음", portalUrl: "https://chat.openai.com" },
        "claude": { type: "none", price: 330000, priceStr: "할인 없음 (정가 구독)", badgeText: "공식 할인 없음", portalUrl: "https://claude.ai" },
        "gemini": { type: "none", price: 348000, priceStr: "할인 없음 (정가 구독)", badgeText: "공식 할인 없음", portalUrl: "https://gemini.google.com" },
        "cinema_4d_db": { type: "free", price: 0, priceStr: "0원 (무료)", badgeText: "학교 제휴 (무료)", portalUrl: portal },
        "blender_db": { type: "free", price: 0, priceStr: "0원 (무료)", badgeText: "오픈소스 무료", portalUrl: "https://www.blender.org" },
        "figma_db": { type: "free", price: 0, priceStr: "0원 (무료)", badgeText: "학교 제휴 (무료)", portalUrl: portal },
        "chatgpt_db": { type: "none", price: 330000, priceStr: "할인 없음 (정가 구독)", badgeText: "공식 할인 없음", portalUrl: "https://chat.openai.com" },
        "claude_db": { type: "none", price: 330000, priceStr: "할인 없음 (정가 구독)", badgeText: "공식 할인 없음", portalUrl: "https://claude.ai" },
        "gemini_db": { type: "none", price: 348000, priceStr: "할인 없음 (정가 구독)", badgeText: "공식 할인 없음", portalUrl: "https://gemini.google.com" },
        "midjourney_db": { type: "none", price: 150000, priceStr: "할인 없음 (정가 구독)", badgeText: "공식 할인 없음", portalUrl: "https://midjourney.com" },
        "kling_db": { type: "none", price: 180000, priceStr: "할인 없음 (정가 구독)", badgeText: "공식 할인 없음", portalUrl: "https://klingai.com" },
        "runway_db": { type: "none", price: 315000, priceStr: "할인 없음 (정가 구독)", badgeText: "공식 할인 없음", portalUrl: "https://runwayml.com" },
        "sora_db": { type: "none", price: 400000, priceStr: "할인 없음 (정가 구독)", badgeText: "공식 할인 없음", portalUrl: "https://openai.com/sora" },
        "sandoll": ["국민대학교", "홍익대학교", "이화여자대학교", "한국예술종합학교"].includes(univ) 
            ? { type: "free", price: 0, priceStr: "0원 (무료)", badgeText: "학교 제휴 (무료)", portalUrl: portal }
            : { type: "none", price: 300000, priceStr: "연간 300,000원", badgeText: "제휴 미확인", portalUrl: "https://www.sandollcloud.com" },
        "clipstudio": ["홍익대학교", "한국예술종합학교"].includes(univ)
            ? { type: "free", price: 0, priceStr: "0원 (무료)", badgeText: "학교 제휴 (무료)", portalUrl: portal }
            : { type: "none", price: 98000, priceStr: "98,000원 (정가)", badgeText: "제휴 없음 (체험판/할인)", portalUrl: "https://www.clipstudio.net" }
    };

    // Adobe CC setting
    if (univ === "이화여자대학교") {
        universityData[univ]["adobe"] = {
            type: "free",
            price: 0,
            priceStr: "0원 (교내 네트워크 한정)",
            badgeText: "교내 유무선 한정 무료",
            portalUrl: portal
        };
    } else {
        universityData[univ]["adobe"] = {
            type: "discount",
            price: 277200,
            priceStr: "월 23,100원",
            badgeText: "학생 개별 구매 (60% 할인)",
            portalUrl: "https://www.adobe.com/kr/creativecloud/buy/students.html"
        };
    }

    // Map individual Adobe single apps
    const adobeSingleApps = ["adobe_illustrator", "adobe_photoshop", "adobe_premiere", "adobe_aftereffects", "adobe_indesign", "adobe_lightroom"];
    adobeSingleApps.forEach(appId => {
        if (univ === "이화여자대학교") {
            universityData[univ][appId] = {
                type: "free",
                price: 0,
                priceStr: "0원 (교내 네트워크 한정)",
                badgeText: "교내 유무선 한정 무료",
                portalUrl: portal,
                price_standard: "0원",
                price_student: "0원",
                benefit_tip: "이화여대 재학생은 교내 네트워크 접속 시 무료로 사용 가능합니다."
            };
        } else {
            universityData[univ][appId] = {
                type: "discount",
                price: 408000,
                priceStr: "월 34,000원 (단독 앱 정가)",
                badgeText: "학생 할인 없음",
                portalUrl: "https://www.adobe.com/kr/creativecloud/buy/students.html",
                price_standard: "월 34,000원 정가 (단독 앱)",
                price_student: "월 34,000원 (단독 앱 정가)",
                benefit_tip: "이 단일 앱 하나만 월 34,000원입니다. **월 23,100원**으로 30개 이상의 창작 앱을 모두 이용할 수 있는 어도비 CC 학생 All-Apps 플랜을 결제하는 것이 비용적으로 압도적으로 유리합니다."
            };
        }
    });

    // Map individual Microsoft apps
    const msSingleApps = ["ms_powerpoint", "ms_word", "ms_excel"];
    msSingleApps.forEach(appId => {
        universityData[univ][appId] = {
            type: "free",
            price: 0,
            priceStr: "0원 (무료)",
            badgeText: "학교 제휴 (MS 365 무료)",
            portalUrl: portal
        };
    });
});

// 4. 시즌 프로모션 캘린더 데이터 (2026년 기준 확장)
const calendarEvents = [
    {
        month: 6,
        월: "6월 하순 ~ 7월 초",
        행사명: "여름 정기 세일 및 글로벌 컨퍼런스 혜택",
        관련소프트웨어: "Clip Studio Paint, Figma",
        설명: "클립스튜디오 최대 50% 여름 정기 세일 및 Figma Config 컨퍼런스 기간 한정 프로모션",
        태그: "#여름세일",
        title: "여름 정기 세일 및 글로벌 컨퍼런스 혜택",
        software: ["clipstudio", "figma"],
        desc: "클립스튜디오 최대 50% 여름 정기 세일 및 Figma Config 컨퍼런스 기간 한정 프로모션",
        tags: ["#여름세일"]
    },
    {
        month: 8,
        월: "8월 중순 ~ 9월 초",
        행사명: "2학기 개강 맞이 백투스쿨(Back to School) 세일",
        관련소프트웨어: "Adobe CC, Cinema 4D, 산돌구름",
        설명: "새학기 준비! Adobe CC 학생용 플랜 추가 할인, C4D SIGGRAPH 기념 플래시 세일, 산돌구름 대학생 폰트팩 증정",
        태그: "#개강할인, #학생인증",
        title: "2학기 개강 맞이 백투스쿨(Back to School) 세일",
        software: ["adobe", "c4d", "sandoll"],
        desc: "새학기 준비! Adobe CC 학생용 플랜 추가 할인, C4D SIGGRAPH 기념 플래시 세일, 산돌구름 대학생 폰트팩 증정",
        tags: ["#개강할인", "#학생인증"]
    },
    {
        month: 10,
        day: 9,
        월: "10월 9일 전후",
        행사명: "한글날 특별 폰트 프로모션",
        관련소프트웨어: "산돌구름",
        설명: "한글날 기념 산돌구름 특별 폰트 추가 혜택 및 한정판 굿즈 이벤트",
        태그: "#단기이벤트",
        title: "한글날 특별 폰트 프로모션",
        software: ["sandoll"],
        desc: "한글날 기념 산돌구름 특별 폰트 추가 혜택 및 한정판 굿즈 이벤트",
        tags: ["#단기이벤트"]
    },
    {
        month: 11,
        월: "11월 4주차 ~ 12월 초",
        행사명: "블랙프라이데이 & 사이버먼데이 메가 세일",
        관련소프트웨어: "Adobe CC, Cinema 4D, Runway, Clip Studio Paint, Blender(마켓)",
        설명: "1년 중 역대급 혜택! Adobe 연간 플랜 최대 50% 할인 및 3D/AI 툴 대규모 할인",
        태그: "#블랙프라이데이, #역대급할인",
        title: "블랙프라이데이 & 사이버먼데이 메가 세일",
        software: ["adobe", "c4d", "runway", "clipstudio", "blender_db"],
        desc: "1년 중 역대급 혜택! Adobe 연간 플랜 최대 50% 할인 및 3D/AI 툴 대규모 할인",
        tags: ["#블랙프라이데이", "#역대급할인"]
    },
    {
        month: 12,
        월: "12월 중순 ~ 연말",
        행사명: "연말연시 홀리데이 프로모션",
        관련소프트웨어: "ChatGPT, Midjourney, Gemini, Runway 등 AI 도구",
        설명: "생성형 AI 연간 결제 시 추가 개월 수 증정 및 디자인 툴 겨울 정기 세일",
        태그: "#연말세일, #AI도구",
        title: "연말연시 홀리데이 프로모션",
        software: ["chatgpt", "midjourney", "gemini", "runway"],
        desc: "생성형 AI 연간 결제 시 추가 개월 수 증정 및 디자인 툴 겨울 정기 세일",
        tags: ["#연말세일", "#AI도구"]
    }
];

// 5. 실시간 피드 초기 데이터 (통합 제보 피드)
let feedData = [
    {
        id: 1,
        user: "김*원",
        university: "국민대학교",
        software: "Adobe Creative Cloud",
        type: "link",
        typeText: "🔗 인증 링크 만료 및 오류",
        details: "국민대 종합정보시스템 내의 어도비 학생 인증 페이지가 404 에러로 뜹니다. 빠른 복구 부탁드려요!",
        date: "30분 전",
        status: "resolved",
        statusText: "조치 완료",
        adminReply: "국민대학교 정보화본부 및 어도비 엔터프라이즈 포털 계약 갱신 세션 만료 현상을 확인하여 신속히 새 인증 링크로 교체 조치 완료했습니다. 현재 정상 접속이 가능합니다. 소중한 제보 감사합니다!"
    },
    {
        id: 2,
        user: "이*민",
        university: "서울대학교",
        software: "Microsoft 365",
        type: "new",
        typeText: "✨ 우리 학교 신규 제휴 등록",
        details: "서울대학교 정보화본부에서 이번 달부터 학생용 1TB OneDrive 무상 지원을 재정비했다고 합니다. 정보 추가해 주세요!",
        date: "2시간 전",
        status: "resolved",
        statusText: "조치 완료",
        adminReply: "서울대학교의 신규 MS 365 제휴 정책 수립을 축하드립니다! 해당 데이터를 대시보드 리스트 및 가이드 탭에 즉각 반영하여 이제 0원 무료 혜택 및 OneDrive 1TB 인증 절차가 공식 활성화되었습니다."
    },
    {
        id: 3,
        user: "박*우",
        university: "홍익대학교",
        software: "JetBrains IDE Pack",
        type: "info",
        typeText: "💰 가격 정보/규정 변동",
        details: "홍익대 제휴 제트브레인 학생 메일 인증 과정에서 에러가 납니다. 기존 도메인이 @hongik.ac.kr 인데 일부 신입생은 @g.hongik.ac.kr이라서 승인이 안 되는 것 같아요.",
        date: "5시간 전",
        status: "pending",
        statusText: "검토 중",
        adminReply: "제보해주신 홍익대학교의 신규 구글 워크스페이스 서브도메인(@g.hongik.ac.kr)에 대한 제트브레인 아카데믹 인증 시스템 예외 처리를 접수했습니다. 조속히 제트브레인 본사 에듀케이션 팀과 연동하여 해당 이메일 도메인 규칙이 승인 목록에 등재되도록 조치하겠습니다."
    }
];

// 소프트웨어 카테고리 정의 (전역 변수로 승격하여 사이드바와 공유)
const softwareCategories = [
    {
        title: "Adobe 계열",
        items: [
            { id: "adobe", displayName: "Adobe CC (All Apps)" },
            { id: "adobe_illustrator", displayName: "일러스트레이터" },
            { id: "adobe_photoshop", displayName: "포토샵" },
            { id: "adobe_premiere", displayName: "프리미어 프로" },
            { id: "adobe_aftereffects", displayName: "애프터 이펙트" },
            { id: "adobe_indesign", displayName: "인디자인" },
            { id: "adobe_lightroom", displayName: "라이트룸" }
        ]
    },
    {
        title: "Microsoft 계열",
        items: [
            { id: "ms365", displayName: "Microsoft 365" },
            { id: "ms_powerpoint", displayName: "파워포인트" },
            { id: "ms_word", displayName: "워드" },
            { id: "ms_excel", displayName: "엑셀" }
        ]
    },
    {
        title: "생산성 툴",
        items: [
            { id: "github", displayName: "GitHub Student Developer Pack" }
        ]
    },
    {
        title: "3D 및 디자인",
        items: [
            { id: "c4d", displayName: "Cinema 4D" },
            { id: "blender_db", displayName: "Blender" },
            { id: "figma", displayName: "Figma" }
        ]
    },
    {
        title: "드로잉 및 폰트",
        items: [
            { id: "sandoll", displayName: "산돌구름 (Sandoll Cloud)" },
            { id: "clipstudio", displayName: "Clip Studio Paint" }
        ]
    },
    {
        title: "대화형 AI",
        items: [
            { id: "chatgpt", displayName: "ChatGPT" },
            { id: "claude", displayName: "Claude" },
            { id: "gemini", displayName: "Gemini" }
        ]
    },
    {
        title: "이미지 생성 AI",
        items: [
            { id: "midjourney", displayName: "Midjourney" },
            { id: "kling", displayName: "Kling AI" },
            { id: "runway", displayName: "Runway" },
            { id: "sora_db", displayName: "Sora" }
        ]
    }
];

// --- 6. 동적 렌더링 및 핵심 로직 구현 ---

let currentSelectedUniversity = "국민대학교";
let activeFilterMode = "all"; // all, free, discount

document.addEventListener("DOMContentLoaded", () => {
    initApp();
});

let wizardSelectedUniv = "";
let wizardSelectedSw = "";
let attachedImageDataUrl = "";

function getLogoHtml(sw, displayName, size = 48, className = "sw-card-logo") {
    const logoSrc = sw.logo || sw.imgUrl;
    if (!logoSrc) {
        return `<div class="fallback-logo ${className}" style="width:${size}px; height:${size}px; border-radius:50%; background:#4A5568; color:white; display:flex; align-items:center; justify-content:center; font-weight:bold; font-size:${size * 0.38}px;">${displayName.charAt(0)}</div>`;
    }
    if (logoSrc.startsWith("<svg") || logoSrc.includes("<svg")) {
        return `<div class="fallback-logo ${className}" style="width:${size}px; height:${size}px; display:flex; align-items:center; justify-content:center; fill: currentColor; color: #4A5568;">${logoSrc}</div>`;
    }
    if (["산돌", "R", "CLIP", "✨"].includes(logoSrc)) {
        let fontSize = logoSrc.length > 2 ? `${size * 0.3}px` : `${size * 0.38}px`;
        return `<div class="fallback-logo ${className}" style="width:${size}px; height:${size}px; border-radius:50%; background:#4A5568; color:white; display:flex; align-items:center; justify-content:center; font-weight:bold; font-size:${fontSize};">${logoSrc}</div>`;
    }
    return `
        <img class="${className}" src="${logoSrc}" alt="${displayName} 로고" style="${sw.logoStyle || ''}" onerror="const fb = document.createElement('div'); fb.className='fallback-logo ${className}'; fb.style.width='${size}px'; fb.style.height='${size}px'; fb.style.borderRadius='50%'; fb.style.background='#4A5568'; fb.style.color='white'; fb.style.display='flex'; fb.style.alignItems='center'; fb.style.justifyContent='center'; fb.style.fontWeight='bold'; fb.style.fontSize='${size * 0.38}px'; fb.innerText='${displayName.charAt(0)}'; this.replaceWith(fb);">
    `;
}

function initApp() {
    initTabs();
    initSearchWizard();
    initManualAnchorFlash();
    initCalendar();
    initCommunityTab();
    initDiagnosticCalculator();
    
    // 초기 로딩 시 커뮤니티 피드 렌더링
    renderCommunityFeed();
}

function initDiagnosticCalculator() {
    const calcBtn = document.getElementById("diagnostic-calc-btn");
    if (!calcBtn) return;
    
    calcBtn.addEventListener("click", () => {
        const plan = document.getElementById("diag-plan-select").value;
        const startMonth = parseInt(document.getElementById("diag-start-month").value, 10);
        const currentMonth = parseInt(document.getElementById("diag-current-month").value, 10);
        
        let monthlyFee = 0;
        if (plan === "adobe-student") {
            monthlyFee = 23100;
        } else if (plan === "adobe-regular") {
            monthlyFee = 62000;
        } else if (plan === "c4d-student") {
            monthlyFee = 12000;
        }
        
        // Calculate elapsed months relative to currentMonth (진단 기준 월)
        let elapsedMonths = 0;
        if (startMonth <= currentMonth) {
            elapsedMonths = currentMonth - startMonth;
        } else {
            elapsedMonths = (12 - startMonth) + currentMonth;
        }
        
        // Remaining months in a 12-month cycle
        let remainingMonths = 12 - elapsedMonths;
        if (remainingMonths <= 0) remainingMonths = 12; // Cycle reset
        
        // Adobe-style penalty (50% of remaining contract fee)
        const penalty = Math.round(remainingMonths * monthlyFee * 0.5);
        const defenseBenefit = monthlyFee * 2; // 2-month free defense benefit
        
        // Render stats
        document.getElementById("diag-remaining-months").textContent = `${remainingMonths}개월`;
        
        if (plan.startsWith("adobe")) {
            const discountRate = remainingMonths >= 6 ? 0.40 : 0.25;
            const finalPenalty = Math.round(penalty * (1 - discountRate));
            
            document.getElementById("diag-penalty-cost").innerHTML = `
                <div style="font-size: 11px; color: var(--text-muted); font-weight: normal; text-decoration: line-through; margin-bottom: 2px;">
                    기존 예상 위약금: ${penalty.toLocaleString()}원
                </div>
                <div style="font-size: 18px; color: #DC2626; font-weight: 900;">
                    🔥 해지 방어 적용 시 최종 위약금: ${finalPenalty.toLocaleString()}원
                </div>
            `;
            
            document.getElementById("diag-defense-value").innerHTML = `
                <div style="font-size: 14.5px; color: #059669; font-weight: 800;">
                    ${defenseBenefit.toLocaleString()}원 상당
                </div>
                <div style="font-size: 10px; color: var(--text-muted); font-weight: normal; margin-top: 2px; line-height: 1.3;">
                    또는 해지 취소 시 <strong>'2개월 구독료 전액 면제(0원)'</strong> 혜택을 제시할 확률이 높습니다.
                </div>
            `;
        } else {
            document.getElementById("diag-penalty-cost").innerHTML = `
                <span style="font-size: 18px; color: #DC2626; font-weight: 900;">${penalty.toLocaleString()}원</span>
            `;
            document.getElementById("diag-defense-value").innerHTML = `
                <span style="font-size: 18px; color: #059669; font-weight: 900;">${defenseBenefit.toLocaleString()}원</span>
            `;
        }
        
        // Advice Logic
        const adviceTextEl = document.getElementById("diag-advice-text");
        const resultIconEl = document.querySelector(".diag-result-icon");
        
        const isBlackFriday = (currentMonth === 11);
        
        let adviceText = "";
        if (remainingMonths >= 6) {
            adviceText = `지금 당장 해지하면 위약금이 ${penalty.toLocaleString()}원 발생합니다. 해지 방어(2개월 무료) 혜택만 받고 유지를 권장합니다.`;
            if (resultIconEl) {
                resultIconEl.textContent = "info";
                resultIconEl.style.color = "#D97706"; // Amber
            }
        } else if (remainingMonths <= 2 || isBlackFriday) {
            adviceText = `위약금보다 신규 프로모션 할인폭이 더 큽니다. 해지 후 재가입을 추천합니다.`;
            if (resultIconEl) {
                resultIconEl.textContent = "check_circle";
                resultIconEl.style.color = "#059669"; // Green
            }
        } else {
            // 3 ~ 5 months
            adviceText = `남은 약정이 ${remainingMonths}개월입니다. 지금 해지 시 위약금은 ${penalty.toLocaleString()}원입니다. 해지방어 혜택(2개월 면제)을 신청하여 지불 금액을 줄이거나, 차기 프로모션 기간까지 유지 후 해지하는 것을 권장합니다.`;
            if (resultIconEl) {
                resultIconEl.textContent = "help_outline";
                resultIconEl.style.color = "#3B82F6"; // Blue
            }
        }
        
        if (plan.startsWith("adobe")) {
            adviceText += `
                <div class="advisor-alert-box" style="margin-top: 14px; padding: 12px 16px; background-color: rgba(255, 191, 0, 0.08); border-left: 4px solid var(--accent-color); border-radius: 4px; font-size: 13px; line-height: 1.5; color: var(--navy-blue); text-align: left;">
                    💡 <strong>위약금 아끼는 히든 팁:</strong> 해지 절차를 끝까지 진행하다가 어도비가 '혜택 제안' 팝업을 띄울 때 [제안 수락]을 누르면, 위약금을 내지 않고도 수만 원 상당의 구독료 감면(2개월 무료 등)을 받을 수 있습니다!
                </div>
            `;
        }
        
        adviceTextEl.innerHTML = adviceText;
        document.getElementById("diagnostic-result-box").style.display = "block";
        
        // Scroll to result box smoothly
        document.getElementById("diagnostic-result-box").scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
}

// 6-1. SPA 탭 스위칭 로직 (index.html 구조인 tab-home, tab-manual 매치완료)
function initTabs() {
    const navItems = document.querySelectorAll(".nav-item");
    
    navItems.forEach(item => {
        item.addEventListener("click", (e) => {
            e.preventDefault();
            const tabId = item.getAttribute("data-tab");
            switchTab(tabId);
        });
    });

    // 상세 가이드 바로가기 버튼 등의 사이드 클릭 연동
    const sidebarGoBtns = document.querySelectorAll("[data-go-tab]");
    sidebarGoBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const targetTab = btn.getAttribute("data-go-tab");
            switchTab(targetTab);
        });
    });
}

function switchTab(tabId) {
    const navItems = document.querySelectorAll(".nav-item");
    const tabContents = document.querySelectorAll(".tab-content");
    
    navItems.forEach(item => {
        if (item.getAttribute("data-tab") === tabId) {
            item.classList.add("active");
        } else {
            item.classList.remove("active");
        }
    });
    
    tabContents.forEach(content => {
        if (content.id === `tab-${tabId}`) { // tab-home, tab-manual 등과 완전 매치
            content.classList.add("active");
            content.style.display = "block";
        } else {
            content.classList.remove("active");
            content.style.display = "none";
        }
    });

    // [홈] 버튼을 누르면 초기 대학교 선택 화면(step1-view)이 다시 활성화
    if (tabId === "home") {
        wizardSelectedUniv = "";
        currentSelectedUniversity = "";
        wizardSelectedSw = "";
        
        if (typeof transitionToStep === "function") {
            transitionToStep(1);
        }
        
        // step1-view element 직접 제어 추가 대응
        const s1 = document.getElementById("step1-view") || document.getElementById("wizard-step-1");
        const s2 = document.getElementById("step2-view") || document.getElementById("wizard-step-2");
        const s3 = document.getElementById("step3-view") || document.getElementById("wizard-step-3");
        if (s1) s1.style.display = "block";
        if (s2) s2.style.display = "none";
        if (s3) s3.style.display = "none";
    }

    // [상세 가이드] 진입 시 화면이 하얗게 비어버리는 현상을 방지
    if (tabId === "manual") {
        if (!currentSelectedUniversity) {
            currentSelectedUniversity = "국민대학교";
        }
        if (typeof renderManualSections === "function") {
            renderManualSections();
        }
        const manualSection = document.getElementById("tab-manual");
        if (manualSection) {
            manualSection.style.display = "block";
        }
        const manualLayout = document.querySelector(".manual-page-layout");
        if (manualLayout) {
            manualLayout.style.display = "block";
        }
    }

    if (tabId === "calendar") {
        if (typeof renderCalendarTab === "function") {
            renderCalendarTab();
        }
    }
    
    // 탭 이동 시 페이지 최상단으로 부드럽게 스크롤
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// 6-2. 검색 위저드 (Search Wizard) 초기화 및 로직 (카드 그리드 단계별 전환 개편)
function initSearchWizard() {
    const step1 = document.getElementById("wizard-step-1");
    const step2 = document.getElementById("wizard-step-2");
    const step3 = document.getElementById("wizard-step-3");

    const univCardGrid = document.getElementById("univ-card-grid");
    const softwareGroupedContainer = document.getElementById("software-grouped-container");

    const step2UnivTag = document.getElementById("step2-univ-tag");

    const btnBackToStep1 = document.getElementById("btn-back-to-step1");
    const btnBackToStep2 = document.getElementById("btn-back-to-step2");

    if (!univCardGrid || !softwareGroupedContainer || !step1 || !step2 || !step3) return;

    // 단계별 부드러운 화면 전환 유틸리티
    function transitionToStep(stepNum) {
        [step1, step2, step3].forEach(step => {
            step.classList.remove("active");
            step.style.display = "none";
        });

        const targetStep = document.getElementById(`wizard-step-${stepNum}`);
        if (targetStep) {
            targetStep.style.display = "block";
            // Reflow 강제 실행하여 트랜지션 작동 보장
            targetStep.getBoundingClientRect();
            targetStep.classList.add("active");
        }
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    // 1단계: 대학교 카드 그리드 동적 생성
    univCardGrid.innerHTML = "";
    universities.forEach(univ => {
        const card = document.createElement("div");
        card.className = "univ-card";
        card.setAttribute("data-univ", univ);
        card.innerHTML = `
            <span class="material-symbols-rounded univ-card-icon">school</span>
            <h3 class="univ-card-name">${univ}</h3>
            <span class="univ-card-action">혜택 확인하기 <span class="material-symbols-rounded" style="font-size: 14px;">chevron_right</span></span>
        `;
        card.addEventListener("click", () => {
            wizardSelectedUniv = univ;
            currentSelectedUniversity = univ;
            
            // 2단계 헤더 텍스트 갱신 및 가이드 렌더링
            if (step2UnivTag) {
                step2UnivTag.textContent = `"${univ} 재학생을 위한 혜택"`;
            }
            renderManualSections();
            generateSoftwareCards();
            transitionToStep(2);
        });
        univCardGrid.appendChild(card);
    });

    // 2단계: 소프트웨어 카테고리별 카드 그리드 생성 (전역 softwareCategories 사용)

    function generateSoftwareCards() {
        // 렌더링 전 부모 컨테이너 완벽 초기화
        const cardContainers = document.querySelectorAll('.card-container, .grid-layout, .sw-card-grid, #software-grouped-container');
        cardContainers.forEach(container => {
            container.innerHTML = '';
        });
        softwareGroupedContainer.innerHTML = '';
        softwareCategories.forEach(category => {
            const section = document.createElement("div");
            section.className = "sw-category-section";
            
            const title = document.createElement("h3");
            title.className = "sw-category-title";
            title.textContent = category.title;
            section.appendChild(title);

            const grid = document.createElement("div");
            grid.className = "sw-card-grid";

            category.items.forEach(item => {
                const sw = softwares.find(s => s.id === item.id);
                if (!sw) return;

                const card = document.createElement("div");
                card.className = "sw-card";
                card.setAttribute("data-sw", sw.id);
                
                const isAdobeSingle = ["adobe_illustrator", "adobe_photoshop", "adobe_premiere", "adobe_aftereffects", "adobe_indesign", "adobe_lightroom"].includes(sw.id);
                if (isAdobeSingle) {
                    card.classList.add("adobe-single-app-card");
                }
                card.innerHTML = `
                    <div class="logo-container">
                        ${getLogoHtml(sw, item.displayName, 48, "sw-card-logo")}
                    </div>
                    <div class="text-container" style="flex-grow: 1; display: flex; flex-direction: column; gap: 4px;">
                        <h4 class="sw-card-name" style="margin: 0;">${item.displayName}</h4>
                        <p class="sw-card-desc" style="margin: 0; font-size: 12.5px; line-height: 1.5; color: var(--text-muted);">${sw.desc || "해당 소프트웨어의 상세 혜택 정보를 확인하세요."}</p>
                        <div class="sw-card-footer" style="margin-top: 4px; display: flex; justify-content: flex-start; align-items: center;">
                            <span class="sw-card-action">혜택 보기 <span class="material-symbols-rounded" style="font-size: 14px;">arrow_forward</span></span>
                        </div>
                    </div>
                `;
                card.addEventListener("click", () => {
                    wizardSelectedSw = sw.id;
                    // 3단계 결과 렌더링
                    renderTargetedResult(wizardSelectedUniv, wizardSelectedSw);
                    transitionToStep(3);
                });
                grid.appendChild(card);
            });

            section.appendChild(grid);
            softwareGroupedContainer.appendChild(section);
        });
    }

    // 뒤로가기 버튼 이벤트 바인딩
    if (btnBackToStep1) {
        btnBackToStep1.addEventListener("click", () => {
            wizardSelectedUniv = "";
            currentSelectedUniversity = "";
            wizardSelectedSw = "";
            
            // 1단계 이동
            transitionToStep(1);
            
            // 기존 결과 감추기
            const section = document.getElementById("targeted-result-section");
            if (section) section.style.display = "none";
        });
    }

    if (btnBackToStep2) {
        btnBackToStep2.addEventListener("click", () => {
            wizardSelectedSw = "";
            
            // 2단계 이동
            transitionToStep(2);
            
            // 기존 결과 감추기
            const section = document.getElementById("targeted-result-section");
            if (section) section.style.display = "none";
        });
    }

    // 초기 상태에 맞춰 분기 이동
    if (wizardSelectedUniv) {
        if (step2UnivTag) {
            step2UnivTag.textContent = `"${wizardSelectedUniv} 재학생을 위한 혜택"`;
        }
        generateSoftwareCards();
        if (wizardSelectedSw) {
            renderTargetedResult(wizardSelectedUniv, wizardSelectedSw);
            transitionToStep(3);
        } else {
            transitionToStep(2);
        }
    } else {
        transitionToStep(1);
    }

    // 대학교 카드 클릭 시 화면 전환 복구 (.univ-card 및 .university-card 모두 지원)
    document.addEventListener("click", (e) => {
        const card = e.target.closest(".univ-card, .university-card");
        if (card) {
            const univ = card.getAttribute("data-univ") || card.innerText.trim();
            if (univ) {
                wizardSelectedUniv = univ;
                currentSelectedUniversity = univ;
                if (step2UnivTag) {
                    step2UnivTag.textContent = `"${univ} 재학생을 위한 혜택"`;
                }
                renderManualSections();
                generateSoftwareCards();
            }
            transitionToStep(2);
            
            // step1-view / step2-view element ID 제어 추가 대응
            const s1 = document.getElementById("step1-view") || document.getElementById("wizard-step-1");
            const s2 = document.getElementById("step2-view") || document.getElementById("wizard-step-2");
            if (s1) s1.style.display = "none";
            if (s2) s2.style.display = "block";
        }
    });
}

// 6-3. 검색 결과 패널 렌더링 (Targeted Result View)
function renderTargetedResult(univName, swId) {
    const section = document.getElementById("targeted-result-section");
    const rUnivName = document.getElementById("result-univ-name");
    const rSwName = document.getElementById("result-sw-name");
    const bodySchool = document.getElementById("result-school-benefit");
    const bodyOfficial = document.getElementById("result-official-discount");
    const bodyCalendar = document.getElementById("result-promo-calendar");
    const bodyTips = document.getElementById("result-hidden-tips");

    if (!section || !rUnivName || !rSwName || !bodySchool || !bodyOfficial || !bodyCalendar || !bodyTips) return;

    const searchedSw = softwares.find(s => s.id === swId);
    if (!searchedSw) return;

    // Internal mapping logic: Map Microsoft individual apps to ms365
    let activeSwId = swId;
    const isMsSingleApp = ["ms_powerpoint", "ms_word", "ms_excel"].includes(swId);
    if (isMsSingleApp) {
        activeSwId = "ms365";
    }

    const sw = softwares.find(s => s.id === activeSwId);
    const univStatus = universityData[univName][activeSwId];

    if (!sw || !univStatus) return;

    rUnivName.textContent = univName;
    rSwName.textContent = searchedSw.name; // Display the name of the program selected by user

    // 1) 섹션 A: 교내 제휴 혜택
    const isFree = univStatus.type === "free";
    const docRequired = sw.requiredDocs || "학교 이메일 인증";
    if (isFree) {
        bodySchool.innerHTML = `
            <div class="partnership-badge supported">
                <span class="material-symbols-rounded" style="font-size: 18px;">check_circle</span>무료 제휴 대상 학교
            </div>
            <p class="partner-desc"><strong>${univName}</strong> 재학생은 해당 프로그램의 0원 무료 라이선스 지원 대상입니다.</p>
            <div style="margin-bottom: 14px; font-size: 12.5px; color: var(--text-muted);">
                <strong>필요 인증:</strong> ${docRequired}
            </div>
            <a href="${univStatus.portalUrl}" target="_blank" class="btn-portal-action">
                <span class="material-symbols-rounded" style="font-size: 16px;">launch</span>학교 인증 포털 바로가기
            </a>
        `;
    } else {
        const univConf = universityData[univName];
        const itPortalUrl = univConf ? univConf._itPortalUrl : "https://ict.kookmin.ac.kr";
        bodySchool.innerHTML = `
            <div class="partnership-badge not-supported">
                <span class="material-symbols-rounded" style="font-size: 18px;">cancel</span>교내 무료 미지원
            </div>
            <p class="partner-desc">아쉽게도 <strong>${univName}</strong>은(는) 해당 프로그램의 교내 무료 제휴 학교가 아닙니다.</p>
            <p style="font-size: 12.5px; color: var(--text-muted); margin-bottom: 14px; line-height: 1.5;">
                현재 본 프로그램은 교내 전면 무료 지원 대상이 아닙니다. 단, 학교 환경이나 단과대별 세부 계약에 따라 변동될 수 있으니 정확한 상세 내용은 학교 공식 사이트에서 한 번 더 확인해 보세요.
            </p>
            <a href="${itPortalUrl}" target="_blank" class="btn-portal-action" style="background-color: var(--white); color: var(--navy-blue); border: 1.5px solid var(--navy-blue); display: inline-flex; align-items: center; justify-content: center; gap: 6px; padding: 10px 20px; border-radius: 8px; font-weight: 700; font-size: 13.5px; text-decoration: none; transition: background-color 0.2s ease;">
                <span class="material-symbols-rounded" style="font-size: 16px;">launch</span>${univName} IT 안내 사이트 바로가기 ↗
            </a>
        `;
    }

    // 2) 섹션 B: 공식 학생 할인
    if (univStatus.type === "none") {
        bodyOfficial.innerHTML = `
            <div class="no-discount-block" style="padding: 16px; background-color: rgba(220, 38, 38, 0.03); border: 1px dashed rgba(220, 38, 38, 0.15); border-radius: 8px; font-size: 13px; line-height: 1.5; color: var(--text-color);">
                <strong style="color: #DC2626; display: block; margin-bottom: 8px; font-size: 13.5px;">현재 이 소프트웨어는 공식 학생 할인을 제공하지 않습니다.</strong>
                <div style="font-size: 13px; color: var(--text-muted);">
                    <strong>대안 팁:</strong> ${sw.tip || "공식 프로모션 및 시즌 할인 혜택을 이용하는 대안을 고려해 보세요."}
                </div>
            </div>
        `;
    } else {
        const originalPrice = univStatus.price_standard || sw.originalPriceStr;
        const studentPrice = univStatus.price_student || univStatus.priceStr;
        
        let savedPriceStr = "절약 금액 없음";
        const isAdobeSingle = ["adobe_illustrator", "adobe_photoshop", "adobe_premiere", "adobe_aftereffects", "adobe_indesign", "adobe_lightroom"].includes(swId);
        if (!isAdobeSingle) {
            const savedPrice = sw.originalPrice - univStatus.price;
            savedPriceStr = savedPrice > 0 ? `${savedPrice.toLocaleString()}원 절약` : "절약 금액 없음";
        }

        const guideList = sw.guide[univStatus.type] || sw.guide["discount"] || [];
        const stepsHtml = guideList.map((step, idx) => `<li>${idx + 1}. ${step}</li>`).join("");

        bodyOfficial.innerHTML = `
            <div class="discount-price-block">
                <span class="discount-original-row">정가: ${originalPrice}</span>
                <span class="discount-student-row">학생 우대가: <span>${studentPrice}</span> (${savedPriceStr})</span>
            </div>
            <div class="discount-guide-steps">
                <strong style="font-size: 13px; display: block; margin-bottom: 6px; color: var(--navy-blue);">💡 학생 인증 및 가입 순서:</strong>
                <ul style="padding-left: 16px; margin: 0; font-size: 12.5px; color: var(--text-muted); display: flex; flex-direction: column; gap: 4px;">
                    ${stepsHtml}
                </ul>
            </div>
        `;
    }

    // Adobe Single App warning advisor text injection
    const isAdobeSingleApp = ["adobe_illustrator", "adobe_photoshop", "adobe_premiere", "adobe_aftereffects", "adobe_indesign", "adobe_lightroom"].includes(swId);
    if (isAdobeSingleApp) {
        bodyOfficial.innerHTML += `
            <div class="advisor-alert-box" style="margin-top: 14px; padding: 12px 16px; background-color: rgba(255, 191, 0, 0.08); border-left: 4px solid var(--accent-color); border-radius: 4px; font-size: 13px; line-height: 1.5; color: var(--navy-blue);">
                <strong>💡 단일 앱 학생 할인 안내:</strong> 어도비는 단일 앱에 대한 학생 할인이 제한적입니다. 단일 앱 정가(월 34,000원)를 결제하는 것보다, 어도비 학생용 CC 전체 플랜(첫 해 월 23,100원)을 결제하는 것이 비용적으로 훨씬 유리합니다.
            </div>
        `;
    }

    // 3) 섹션 C: 프로모션 일정
    let matchingEvents = [];
    if (Array.isArray(calendarEvents)) {
        calendarEvents.forEach(evt => {
            const swList = Array.isArray(evt.software) ? evt.software : [evt.software];
            const isMatch = swList.some(s => {
                const lowerS = s.toLowerCase();
                return lowerS === swId || 
                       (isMsSingleApp && lowerS === "ms365") || 
                       (isAdobeSingleApp && lowerS === "adobe");
            });
            if (isMatch) {
                matchingEvents.push(evt);
            }
        });
    } else {
        Object.keys(calendarEvents).forEach(month => {
            calendarEvents[month].forEach(evt => {
                if (evt.software === swId || (isMsSingleApp && evt.software === "ms365") || (isAdobeSingleApp && evt.software === "adobe")) {
                    matchingEvents.push({ month, ...evt });
                }
            });
        });
    }

    if (matchingEvents.length > 0) {
        let eventsHtml = `<div class="promo-list">`;
        matchingEvents.forEach(evt => {
            const dateStr = evt.월 || `${evt.month}월 ${evt.day || ""}일`;
            eventsHtml += `
                <div class="promo-item-box">
                    <span class="promo-month-tag">${dateStr}</span>
                    <div class="promo-info">
                        <span class="promo-title-text">${evt.title}</span>
                        <span class="promo-desc-text">${evt.desc}</span>
                    </div>
                </div>
            `;
        });
        eventsHtml += `</div>`;
        bodyCalendar.innerHTML = eventsHtml;
    } else {
        bodyCalendar.innerHTML = `
            <div style="padding: 20px; text-align: center; color: var(--text-muted); background-color: #F8FAFC; border-radius: 8px; border: 1px dashed rgba(0,0,0,0.08); font-size: 12.5px;">
                현재 다가오는 [${searchedSw.name}] 공식 할인 또는 세일 일정이 없습니다.
            </div>
        `;
    }

    // 4) 섹션 D: 히든 세이빙스 팁
    bodyTips.innerHTML = `
        <div class="tip-alert-box">
            <span class="material-symbols-rounded tip-icon">lightbulb</span>
            <p>${searchedSw.tip || "해당 소프트웨어에 등록된 히든 세이빙스 팁이 없습니다."}</p>
        </div>
    `;

    // 4-b) 가성비 히든 팁 카드 렌더링 제어
    const valueTipCard = document.getElementById("result-value-tip-card");
    const valueTipContent = document.getElementById("result-value-tip-content");
    if (valueTipCard && valueTipContent) {
        if (univStatus.benefit_tip) {
            valueTipContent.innerHTML = univStatus.benefit_tip;
            valueTipCard.style.display = "block";
        } else {
            valueTipCard.style.display = "none";
        }
    }

    // 5) 구독 진단기 활성화 제어 (Adobe CC 및 Cinema 4D만 노출)
    const diagPanel = document.getElementById("subscription-diagnostic-panel");
    if (diagPanel) {
        if (swId === "adobe" || swId === "c4d") {
            diagPanel.style.display = "block";
            const planSelect = document.getElementById("diag-plan-select");
            if (planSelect) {
                if (swId === "adobe") {
                    planSelect.value = "adobe-student";
                } else if (swId === "c4d") {
                    planSelect.value = "c4d-student";
                }
            }
            const resultBox = document.getElementById("diagnostic-result-box");
            if (resultBox) resultBox.style.display = "none";
        } else {
            diagPanel.style.display = "none";
        }
    }

    section.style.display = "block";
    setTimeout(() => {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
}

// 6-3-b. [상세 가이드] 탭 내부 가이드 및 좌측 퀵링크 동적 렌더링
function renderManualSections() {
    const targetData = universityData[currentSelectedUniversity];
    const quickNav = document.getElementById("manual-quick-nav");
    const sectionsList = document.getElementById("manual-sections-list");
    const selectedBadge = document.getElementById("manual-selected-univ-badge");
    
    if (!targetData) return;
    
    if (selectedBadge) {
        selectedBadge.textContent = currentSelectedUniversity;
    }
    
    if (quickNav) {
        quickNav.innerHTML = "";
        let isFirstLink = true;
        softwareCategories.forEach(category => {
            // 카테고리 제목(Section Header) 렌더링
            const header = document.createElement("div");
            header.className = "manual-sidebar-category-title";
            header.style.cssText = "font-size: 12px; font-weight: bold; color: #718096; margin: 16px 0 8px 12px; text-transform: uppercase;";
            header.textContent = category.title;
            quickNav.appendChild(header);

            category.items.forEach(item => {
                const sw = softwares.find(s => s.id === item.id);
                if (!sw) return;

                const navLink = document.createElement("a");
                navLink.href = "#";
                navLink.className = isFirstLink ? "quick-nav-link active software-icon-item" : "quick-nav-link software-icon-item";
                navLink.setAttribute("data-anchor", sw.id);

                let displayName = sw.name;
                if (displayName.startsWith("Adobe ") && sw.id !== "adobe") {
                    displayName = displayName.replace("Adobe ", "");
                }
                if (displayName.startsWith("Microsoft ") && sw.id !== "ms365") {
                    displayName = displayName.replace("Microsoft ", "");
                }

                navLink.innerHTML = `
                    ${getLogoHtml(sw, displayName, 20, "quick-nav-logo")}
                    <span>${displayName}</span>
                `;
                navLink.addEventListener("click", (e) => {
                    e.preventDefault();
                    scrollAndFlashManual(sw.id);
                    updateActiveManualNavLink(sw.id);
                });
                quickNav.appendChild(navLink);
                isFirstLink = false;
            });
        });
    }
    
    if (sectionsList) {
        sectionsList.innerHTML = "";
        softwareCategories.forEach(category => {
            category.items.forEach(item => {
                const sw = softwares.find(s => s.id === item.id);
                if (!sw) return;

                const swStatus = targetData[sw.id];
                if (!swStatus) return;
                
                // 현재 학교 제휴 타입(free, discount, none)에 부합하는 매뉴얼 단계 추출
                const steps = sw.guide[swStatus.type] || [];
                
                let stepsHtml = "";
                steps.forEach((step, idx) => {
                    stepsHtml += `
                        <li class="manual-step-li">
                            <div class="step-badge-num">${idx + 1}</div>
                            <p class="step-text-p">${step}</p>
                        </li>
                    `;
                });
                
                let faqHtml = "";
                if (sw.faq && sw.faq.length > 0) {
                    sw.faq.forEach(faq => {
                        faqHtml += `
                            <div class="faq-item">
                                <h5 class="faq-q">Q. ${faq.q}</h5>
                                <p class="faq-a">A. ${faq.a}</p>
                            </div>
                        `;
                    });
                }
                
                const cardBadgeClass = swStatus.type === "free" ? "badge-free" : (swStatus.type === "discount" ? "badge-save-percent" : "badge-none");
                
                // 정가 대비 절약 비용 계산
                const savedPrice = sw.originalPrice - swStatus.price;
                const savedPriceStr = savedPrice > 0 ? `${savedPrice.toLocaleString()}원` : "0원";
                
                const section = document.createElement("div");
                section.className = "manual-section-card";
                
                const cleanId = sw.id.replace('adobe_', '').replace('ms_', '');
                section.id = `guide-${cleanId}`;
                section.setAttribute("data-manual-id", `manual-${sw.id}`);
                
                section.innerHTML = `
                    <div class="manual-section-top">
                        <div class="manual-brand">
                            <div class="manual-logo-wrap">
                                ${getLogoHtml(sw, sw.name, 40, "manual-logo-img")}
                            </div>
                            <div class="manual-sw-title-area">
                                <h3 class="manual-sw-title">${sw.name}</h3>
                                <span class="manual-sw-desc">${sw.desc}</span>
                            </div>
                        </div>
                        <div class="manual-badge-group">
                            <span class="card-badge ${cardBadgeClass}">${swStatus.badgeText}</span>
                            <span class="manual-price-tag">${swStatus.priceStr}</span>
                        </div>
                    </div>
                    
                    <div class="manual-sw-card-body">
                        <div class="manual-benefit-summary">
                            <div class="summary-col">
                                <span class="summary-label">기본 정가</span>
                                <span class="summary-val original-val">${sw.originalPriceStr}</span>
                            </div>
                            <div class="summary-col">
                                <span class="summary-label">대학생 혜택가</span>
                                <span class="summary-val">${swStatus.priceStr} ${savedPrice > 0 ? `(${savedPriceStr} 절약)` : ""}</span>
                            </div>
                        </div>

                        <div class="required-docs-block" style="margin-bottom: 32px; padding: 20px; background-color: rgba(0, 31, 63, 0.025); border-radius: var(--border-radius-md); border-left: 4px solid var(--navy-blue);">
                            <strong style="display: block; font-size: 13.5px; color: var(--navy-blue); margin-bottom: 8px;">📌 필요 준비물 / 승인 조건:</strong>
                            <span style="font-size: 13.5px; color: var(--text-color); line-height: 1.5;">${sw.requiredDocs}</span>
                        </div>
                        
                        <div class="manual-steps-area">
                            <h4 class="steps-title-box">🔑 단계별 승인 절차</h4>
                            <ol class="manual-ordered-steps">
                                ${stepsHtml}
                            </ol>
                        </div>
                        
                        ${faqHtml ? `
                        <div class="manual-faq-container">
                            <h4 class="faq-sub-title">❓ 자주 묻는 질문</h4>
                            <div class="faq-list">
                                ${faqHtml}
                            </div>
                        </div>
                        ` : ""}
                        
                        <div class="manual-tip-card">
                            <span class="material-symbols-rounded tip-card-icon">lightbulb</span>
                            <div>
                                <strong>유용한 꿀팁!</strong>
                                <p>${sw.tip}</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="manual-footer-actions">
                        <a href="${swStatus.portalUrl}" target="_blank" class="manual-portal-direct-btn">🔗 ${currentSelectedUniversity} 인증 링크로 이동</a>
                    </div>
                `;
                sectionsList.appendChild(section);
            });
        });
    }
}

// 6-4. 가이드 상세 앵커 이동 & 탭 전환 & 플래시(Flash) 모션 연동
function jumpToManualAnchor(swId) {
    // 1) 상세 가이드 탭으로 활성화 이동
    switchTab("manual");
    
    // 2) 해당 소프트웨어 매뉴얼 카드 위치로 부드럽게 스크롤
    setTimeout(() => {
        scrollAndFlashManual(swId);
    }, 300);
}

function scrollAndFlashManual(swId) {
    const cleanId = swId.replace('adobe_', '').replace('ms_', '');
    const targetElement = document.getElementById(`guide-${cleanId}`) || 
                          document.getElementById(`guide-${swId}`) || 
                          document.getElementById(`manual-${swId}`);
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
        
        // 3) 2초간 앰버 옐로우 광채 테두리 반짝임(Flash) 효과
        targetElement.classList.add("highlight-flash");
        setTimeout(() => {
            targetElement.classList.remove("highlight-flash");
        }, 2000);
    }
}

function updateActiveManualNavLink(swId) {
    const navLinks = document.querySelectorAll(".quick-nav-link");
    navLinks.forEach(link => {
        if (link.getAttribute("data-anchor") === swId) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
}

function initManualAnchorFlash() {
    window.addEventListener("scroll", () => {
        const manualTab = document.getElementById("tab-manual");
        // 상세 가이드 탭이 활성화 상태인지 확인
        if (!manualTab || (manualTab.style.display === "none" && !manualTab.classList.contains("active"))) return;
        
        let currentActiveId = "";
        let minDistance = Infinity;
        
        softwares.forEach(sw => {
            const cleanId = sw.id.replace('adobe_', '').replace('ms_', '');
            const section = document.getElementById(`guide-${cleanId}`) || 
                            document.getElementById(`guide-${sw.id}`) || 
                            document.getElementById(`manual-${sw.id}`);
            if (section) {
                const rect = section.getBoundingClientRect();
                // 뷰포트 상단부 180px 부근을 기준으로 현재 섹션 거리 계산
                const distance = Math.abs(rect.top - 180);
                if (rect.top < window.innerHeight * 0.4 && rect.bottom > 100) {
                    if (distance < minDistance) {
                        minDistance = distance;
                        currentActiveId = sw.id;
                    }
                }
            }
        });
        
        if (currentActiveId) {
            updateActiveManualNavLink(currentActiveId);
        }
    });
}

// 6-5. 캘린더 동적 렌더링 로직 (Grid Calendar)
let currentCalendarMonth = 6; // 초기 6월 기준
function initCalendar() {
    const prevBtn = document.getElementById("prev-month");
    const nextBtn = document.getElementById("next-month");
    
    if (!prevBtn || !nextBtn) return;

    prevBtn.addEventListener("click", () => {
        if (currentCalendarMonth > 1) {
            currentCalendarMonth--;
            renderCalendar(currentCalendarMonth);
        }
    });
    
    nextBtn.addEventListener("click", () => {
        if (currentCalendarMonth < 12) {
            currentCalendarMonth++;
            renderCalendar(currentCalendarMonth);
        }
    });
    
    renderCalendar(currentCalendarMonth);
}

function renderCalendar(month) {
    const titleText = document.getElementById("current-month-display");
    const dateGrid = document.getElementById("calendar-days-grid");
    const timelineList = document.getElementById("calendar-timeline-list");
    
    if (!titleText || !dateGrid || !timelineList) return;

    titleText.textContent = `2026년 ${month}월`;
    dateGrid.innerHTML = "";
    timelineList.innerHTML = "";
    
    // 2026년 월별 일수 정보
    const daysInMonthMap = {
        1: 31, 2: 28, 3: 31, 4: 30, 5: 31, 6: 30,
        7: 31, 8: 31, 9: 30, 10: 31, 11: 30, 12: 31
    };
    
    // 2026년 월별 1일의 요일 정보 (0: 일, 1: 월, 2: 화, 3: 수, 4: 목, 5: 금, 6: 토)
    const firstDayIndexMap = {
        1: 4, 2: 0, 3: 0, 4: 3, 5: 5, 6: 1,
        7: 3, 8: 6, 9: 2, 10: 4, 11: 0, 12: 2
    };
    
    const daysCount = daysInMonthMap[month] || 30;
    const startOffset = firstDayIndexMap[month] || 0;
    
    // Support both array and object calendarEvents structures
    const events = Array.isArray(calendarEvents)
        ? calendarEvents.filter(e => e.month === month)
        : (calendarEvents[month] || []);
    
    // 빈 셀 채우기 (이전 달 여백)
    for (let i = 0; i < startOffset; i++) {
        const emptyCell = document.createElement("div");
        emptyCell.className = "calendar-day-cell empty";
        dateGrid.appendChild(emptyCell);
    }
    
    // 날짜별 셀 생성
    for (let day = 1; day <= daysCount; day++) {
        const dayCell = document.createElement("div");
        
        // 요일 계산하여 sunday, saturday 클래스 배정
        const dayOfWeek = (startOffset + day - 1) % 7;
        let dayOfWeekClass = "";
        if (dayOfWeek === 0) dayOfWeekClass = "sunday";
        else if (dayOfWeek === 6) dayOfWeekClass = "saturday";
        
        dayCell.className = `calendar-day-cell ${dayOfWeekClass}`;
        
        const dayNum = document.createElement("span");
        dayNum.className = "day-num-text";
        dayNum.textContent = day;
        dayCell.appendChild(dayNum);
        
        // 날짜에 등록된 이벤트가 있는지 검사
        const dayEvents = events.filter(e => e.day === day);
        if (dayEvents.length > 0) {
            const eventsContainer = document.createElement("div");
            eventsContainer.className = "day-events-container";
            
            dayEvents.forEach(evt => {
                const marker = document.createElement("div");
                const softwareClass = Array.isArray(evt.software) ? evt.software[0] : (evt.software || "");
                marker.className = `event-dot-tag ${softwareClass}`;
                marker.textContent = evt.title;
                eventsContainer.appendChild(marker);
            });
            
            dayCell.appendChild(eventsContainer);
        }
        
        dateGrid.appendChild(dayCell);
    }
    
    // 상세 타임라인 동적 생성
    if (events.length === 0) {
        timelineList.innerHTML = `<div class="timeline-empty-message" style="padding: 24px; text-align: center; color: var(--text-muted); font-size: 13.5px; background-color: var(--white); border-radius: var(--border-radius-md); border: 1px dashed rgba(0,31,63,0.12);">이번 달에는 예정된 소프트웨어 시즌 프로모션이 없습니다.</div>`;
    } else {
        events.forEach(evt => {
            const card = document.createElement("div");
            const softwareClass = Array.isArray(evt.software) ? evt.software[0] : (evt.software || "");
            const softwareLabel = Array.isArray(evt.software)
                ? evt.software.map(s => s.toUpperCase()).join(", ")
                : (evt.software || "").toUpperCase();
            const displayDay = evt.day ? `${evt.day}일` : "";
            const dateStr = evt.월 || `${month}월 ${displayDay}`;

            card.className = `calendar-timeline-item-card ${softwareClass}`;
            card.innerHTML = `
                <div class="calendar-timeline-left">
                    <span class="timeline-date-badge">${dateStr}</span>
                </div>
                <div class="calendar-timeline-right">
                    <h4 class="calendar-timeline-title">[${softwareLabel}] ${evt.title}</h4>
                    <p class="calendar-timeline-desc">${evt.desc}</p>
                </div>
            `;
            timelineList.appendChild(card);
        });
    }
}

// 6-5-b. 2026년 하반기 전체 프로모션 일정을 월별 그룹화하여 렌더링하는 전용 함수
function renderCalendarTab() {
    const calendarLayout = document.querySelector("#tab-calendar .calendar-page-layout");
    if (!calendarLayout) return;

    // 헤더 영역 보존하고 본문 비우기
    const header = calendarLayout.querySelector(".calendar-main-header");
    calendarLayout.innerHTML = "";
    if (header) {
        calendarLayout.appendChild(header);
    } else {
        const defaultHeader = document.createElement("div");
        defaultHeader.className = "calendar-main-header";
        defaultHeader.innerHTML = `
            <h1 class="calendar-main-title">대학생 소프트웨어 할인 캘린더</h1>
            <p class="calendar-main-subtitle">블랙프라이데이, 새 학기 아카데미 페스티벌, 시즌별 필수 할인 및 정보 캘린더입니다.</p>
        `;
        calendarLayout.appendChild(defaultHeader);
    }

    // 타임라인 컨테이너 생성
    const timelineContainer = document.createElement("div");
    timelineContainer.className = "calendar-timeline-container";
    
    // 월별 그룹화 (6, 8, 10, 11, 12월 등)
    const groupedEvents = {};
    if (Array.isArray(calendarEvents)) {
        calendarEvents.forEach(evt => {
            const m = evt.month;
            if (!groupedEvents[m]) {
                groupedEvents[m] = [];
            }
            groupedEvents[m].push(evt);
        });
    }

    // 오름차순 월 정렬
    const months = Object.keys(groupedEvents).map(Number).sort((a, b) => a - b);

    if (months.length === 0) {
        timelineContainer.innerHTML = `<div class="timeline-empty-message" style="padding: 24px; text-align: center; color: var(--text-muted); font-size: 13.5px; background-color: var(--white); border-radius: var(--border-radius-md); border: 1px dashed rgba(0,31,63,0.12);">예정된 소프트웨어 프로모션 일정이 없습니다.</div>`;
    } else {
        months.forEach(m => {
            const monthSection = document.createElement("div");
            monthSection.className = "calendar-month-section";
            
            // 월 헤더
            const monthTitle = document.createElement("h3");
            monthTitle.className = "calendar-month-section-title";
            monthTitle.innerHTML = `<span class="month-num">${m}</span>월 주요 프로모션`;
            monthSection.appendChild(monthTitle);

            // 해당 월 카드 리스트
            const cardsList = document.createElement("div");
            cardsList.className = "calendar-month-cards-list";

            groupedEvents[m].forEach(evt => {
                const card = document.createElement("div");
                card.className = "card calendar-promo-card";

                // #블랙프라이데이 강조용 하이라이트 클래스
                const hasBlackFriday = evt.tags && evt.tags.some(t => t.includes("블랙프라이데이"));
                if (hasBlackFriday) {
                    card.classList.add("highlight-black-friday");
                }

                // 관련 소프트웨어 배지 쉼표와 공백 조인 포맷팅
                const softwareList = Array.isArray(evt.software) ? evt.software : [evt.software];
                const displayNames = softwareList.map(swKey => {
                    const foundSw = softwares.find(s => s.id === swKey || s.id === swKey + "_db");
                    return foundSw ? foundSw.name : swKey;
                });
                const softwareText = displayNames.join(", ");

                // 태그 배지 생성 (calendar-tag 클래스 적용)
                const tagsHtml = (evt.tags || []).map(tag => {
                    const isBF = tag.includes("블랙프라이데이") || tag.includes("역대급할인");
                    const badgeClass = isBF ? "highlight-bf" : "";
                    return `<span class="calendar-tag ${badgeClass}">${tag}</span>`;
                }).join("");

                card.innerHTML = `
                    <div class="calendar-promo-card-header">
                        <div class="calendar-promo-title-row">
                            <h4 class="calendar-promo-title">${evt.title}</h4>
                            <div class="calendar-tags-container">${tagsHtml}</div>
                        </div>
                        <div class="calendar-promo-date-badge">${evt.월 || (m + '월')}</div>
                    </div>
                    <div class="calendar-promo-card-body">
                        <p class="calendar-promo-desc">${evt.desc}</p>
                    </div>
                    <div class="calendar-promo-card-footer">
                        <span class="calendar-footer-label">💡 관련 소프트웨어:</span>
                        <span class="calendar-sw-text">${softwareText}</span>
                    </div>
                `;
                cardsList.appendChild(card);
            });

            monthSection.appendChild(cardsList);
            timelineContainer.appendChild(monthSection);
        });
    }

    calendarLayout.appendChild(timelineContainer);
}

// 6-6. 독립형 커뮤니티(Community) 작성자 폼 및 이미지 업로드 처리
function initCommunityTab() {
    const postForm = document.getElementById("community-post-form");
    const imageInput = document.getElementById("community-image-input");
    const fileNameSpan = document.getElementById("attached-file-name");
    const previewContainer = document.getElementById("image-preview-container");
    const previewImg = document.getElementById("image-preview-img");
    const removePreviewBtn = document.getElementById("remove-preview-btn");
    const postTextarea = document.getElementById("community-post-text");

    if (!postForm || !imageInput) return;

    // 이미지 파일 로드 및 Base64 인코딩
    imageInput.addEventListener("change", (e) => {
        const file = e.target.files[0];
        if (file) {
            fileNameSpan.textContent = file.name;
            const reader = new FileReader();
            reader.onload = (event) => {
                attachedImageDataUrl = event.target.result;
                previewImg.src = attachedImageDataUrl;
                previewContainer.style.display = "block";
            };
            reader.readAsDataURL(file);
        }
    });

    // 이미지 첨부 취소
    removePreviewBtn.addEventListener("click", () => {
        imageInput.value = "";
        fileNameSpan.textContent = "";
        attachedImageDataUrl = "";
        previewContainer.style.display = "none";
        previewImg.src = "";
    });

    // 게시글 업로드 서브밋
    postForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const text = postTextarea.value.trim();
        if (!text) return;

        const newPost = {
            id: feedData.length + 1,
            user: "익명 대학생",
            university: wizardSelectedUniv || "국민대학교",
            details: text,
            image: attachedImageDataUrl || null,
            date: "방금 전",
            adminReply: "실시간 제보 내용이 확인되었습니다! 검토 후 라이선스 혜택 정정에 신속히 반영하겠습니다."
        };

        // 피드 최상단 적층
        feedData.unshift(newPost);
        renderCommunityFeed();

        // 폼 초기화
        postTextarea.value = "";
        imageInput.value = "";
        fileNameSpan.textContent = "";
        attachedImageDataUrl = "";
        previewContainer.style.display = "none";
        previewImg.src = "";
    });
}

// 독립형 커뮤니티 피드 렌더러
function renderCommunityFeed() {
    const feedContainer = document.getElementById("community-feed");
    if (!feedContainer) return;

    let html = "";
    feedData.forEach(feed => {
        // 이미지 태그 조건부 빌드
        const imageHtml = feed.image 
            ? `<div class="post-attached-image-box"><img src="${feed.image}" alt="첨부 이미지"></div>` 
            : "";
            
        // 관리자 답변 조건부 빌드
        const replyHtml = feed.adminReply 
            ? `
                <div class="post-admin-reply">
                    <div class="post-admin-meta">
                        <span class="material-symbols-rounded" style="font-size: 18px;">admin_panel_settings</span>
                        <span>🛡️ OPEN LICENSE 관리자 답변</span>
                    </div>
                    <p class="post-admin-text">${feed.adminReply}</p>
                </div>
              `
            : "";

        html += `
            <div class="community-post-card">
                <div class="post-meta-row">
                    <div class="post-author-info">
                        <span class="material-symbols-rounded" style="font-size: 20px; color: var(--navy-blue);">account_circle</span>
                        <span class="post-author-uni">${feed.university}</span>
                        <span class="post-author-name">${feed.user}</span>
                    </div>
                    <span class="post-time">${feed.date}</span>
                </div>
                <p class="post-text-content">${feed.details}</p>
                ${imageHtml}
                ${replyHtml}
            </div>
        `;
    });

    feedContainer.innerHTML = html;
}

// 렌더링 및 뷰 업데이트를 위한 헬퍼 함수
function renderCards() {
    if (typeof generateSoftwareCards === "function") {
        generateSoftwareCards();
    }
}

function updateView() {
    if (typeof generateSoftwareCards === "function") {
        generateSoftwareCards();
    }
}
