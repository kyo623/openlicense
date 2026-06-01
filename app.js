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
    "중앙대학교"
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
        logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/microsoft.svg", // microsoftoffice -> microsoft 로 슬러그 정정
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
        name: "GitHub Developer Pack",
        logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/github.svg",
        originalPrice: 150000,
        originalPriceStr: "연간 150,000원 상당",
        desc: "GitHub Copilot 무료 이용 및 다양한 호스팅, 배포 클라우드 툴 무료 크레딧 제공.",
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
        tip: "깃허브 학생 인증 시스템은 GPS 정보를 체크하므로 반드시 '학교 캠퍼스 내부' 혹은 '학교 근처' IP 환경에서 신청해야 반려 없이 단번에 통과됩니다."
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
    }
];

// 3. 대학교 별 상세 매칭 데이터 (제휴 및 상태 정보)
const universityData = {
    "국민대학교": {
        "adobe": { type: "free", price: 0, priceStr: "0원(무료)", badgeText: "학교 제휴(무료)", portalUrl: "https://ktis.kookmin.ac.kr" },
        "ms365": { type: "free", price: 0, priceStr: "0원(무료)", badgeText: "학교 제휴(무료)", portalUrl: "https://ktis.kookmin.ac.kr" },
        "jetbrains": { type: "discount", price: 0, priceStr: "0원(무료)", badgeText: "상시 학생 할인", portalUrl: "https://www.jetbrains.com/community/education/" },
        "notion": { type: "discount", price: 0, priceStr: "0원(무료)", badgeText: "상시 학생 할인", portalUrl: "https://www.notion.so/personal/students" },
        "autodesk": { type: "discount", price: 0, priceStr: "0원(무료)", badgeText: "상시 학생 할인", portalUrl: "https://www.autodesk.com/education" },
        "github": { type: "discount", price: 0, priceStr: "0원(무료)", badgeText: "상시 학생 할인", portalUrl: "https://education.github.com" },
        "figma": { type: "discount", price: 0, priceStr: "0원(무료)", badgeText: "상시 학생 할인", portalUrl: "https://www.figma.com/education" },
        "zoom": { type: "none", price: 200000, priceStr: "연간 20만 원", badgeText: "해지 방어 팁 유효", portalUrl: "https://zoom.us" }
    },
    "홍익대학교": {
        "adobe": { type: "free", price: 0, priceStr: "0원(무료)", badgeText: "학교 제휴(무료)", portalUrl: "https://cnportal.hongik.ac.kr" },
        "ms365": { type: "free", price: 0, priceStr: "0원(무료)", badgeText: "학교 제휴(무료)", portalUrl: "https://cnportal.hongik.ac.kr" },
        "jetbrains": { type: "discount", price: 0, priceStr: "0원(무료)", badgeText: "상시 학생 할인", portalUrl: "https://www.jetbrains.com/community/education/" },
        "notion": { type: "discount", price: 0, priceStr: "0원(무료)", badgeText: "상시 학생 할인", portalUrl: "https://www.notion.so/personal/students" },
        "autodesk": { type: "discount", price: 0, priceStr: "0원(무료)", badgeText: "상시 학생 할인", portalUrl: "https://www.autodesk.com/education" },
        "github": { type: "discount", price: 0, priceStr: "0원(무료)", badgeText: "상시 학생 할인", portalUrl: "https://education.github.com" },
        "figma": { type: "discount", price: 0, priceStr: "0원(무료)", badgeText: "상시 학생 할인", portalUrl: "https://www.figma.com/education" },
        "zoom": { type: "free", price: 0, priceStr: "0원(무료)", badgeText: "학교 제휴(무료)", portalUrl: "https://cnportal.hongik.ac.kr" }
    },
    "서울대학교": {
        "adobe": { type: "free", price: 0, priceStr: "0원(무료)", badgeText: "학교 제휴(무료)", portalUrl: "https://my.snu.ac.kr" },
        "ms365": { type: "free", price: 0, priceStr: "0원(무료)", badgeText: "학교 제휴(무료)", portalUrl: "https://my.snu.ac.kr" },
        "jetbrains": { type: "discount", price: 0, priceStr: "0원(무료)", badgeText: "상시 학생 할인", portalUrl: "https://www.jetbrains.com/community/education/" },
        "notion": { type: "discount", price: 0, priceStr: "0원(무료)", badgeText: "상시 학생 할인", portalUrl: "https://www.notion.so/personal/students" },
        "autodesk": { type: "discount", price: 0, priceStr: "0원(무료)", badgeText: "상시 학생 할인", portalUrl: "https://www.autodesk.com/education" },
        "github": { type: "discount", price: 0, priceStr: "0원(무료)", badgeText: "상시 학생 할인", portalUrl: "https://education.github.com" },
        "figma": { type: "discount", price: 0, priceStr: "0원(무료)", badgeText: "상시 학생 할인", portalUrl: "https://www.figma.com/education" },
        "zoom": { type: "free", price: 0, priceStr: "0원(무료)", badgeText: "학교 제휴(무료)", portalUrl: "https://my.snu.ac.kr" }
    },
    "연세대학교": {
        "adobe": { type: "discount", price: 290000, priceStr: "연간 29만 원", badgeText: "개별 할인 60%", portalUrl: "https://www.adobe.com/kr/creativecloud/buy/students.html" },
        "ms365": { type: "free", price: 0, priceStr: "0원(무료)", badgeText: "학교 제휴(무료)", portalUrl: "https://o365.yonsei.ac.kr" },
        "jetbrains": { type: "discount", price: 0, priceStr: "0원(무료)", badgeText: "상시 학생 할인", portalUrl: "https://www.jetbrains.com/community/education/" },
        "notion": { type: "discount", price: 0, priceStr: "0원(무료)", badgeText: "상시 학생 할인", portalUrl: "https://www.notion.so/personal/students" },
        "autodesk": { type: "discount", price: 0, priceStr: "0원(무료)", badgeText: "상시 학생 할인", portalUrl: "https://www.autodesk.com/education" },
        "github": { type: "discount", price: 0, priceStr: "0원(무료)", badgeText: "상시 학생 할인", portalUrl: "https://education.github.com" },
        "figma": { type: "discount", price: 0, priceStr: "0원(무료)", badgeText: "상시 학생 할인", portalUrl: "https://www.figma.com/education" },
        "zoom": { type: "none", price: 200000, priceStr: "연간 20만 원", badgeText: "우회 플랜 추천", portalUrl: "https://zoom.us" }
    },
    "고려대학교": {
        "adobe": { type: "free", price: 0, priceStr: "0원(무료)", badgeText: "학교 제휴(무료)", portalUrl: "https://portal.korea.ac.kr" },
        "ms365": { type: "free", price: 0, priceStr: "0원(무료)", badgeText: "학교 제휴(무료)", portalUrl: "https://portal.korea.ac.kr" },
        "jetbrains": { type: "discount", price: 0, priceStr: "0원(무료)", badgeText: "상시 학생 할인", portalUrl: "https://www.jetbrains.com/community/education/" },
        "notion": { type: "discount", price: 0, priceStr: "0원(무료)", badgeText: "상시 학생 할인", portalUrl: "https://www.notion.so/personal/students" },
        "autodesk": { type: "discount", price: 0, priceStr: "0원(무료)", badgeText: "상시 학생 할인", portalUrl: "https://www.autodesk.com/education" },
        "github": { type: "discount", price: 0, priceStr: "0원(무료)", badgeText: "상시 학생 할인", portalUrl: "https://education.github.com" },
        "figma": { type: "discount", price: 0, priceStr: "0원(무료)", badgeText: "상시 학생 할인", portalUrl: "https://www.figma.com/education" },
        "zoom": { type: "free", price: 0, priceStr: "0원(무료)", badgeText: "학교 제휴(무료)", portalUrl: "https://portal.korea.ac.kr" }
    },
    "한양대학교": {
        "adobe": { type: "discount", price: 290000, priceStr: "연간 29만 원", badgeText: "개별 할인 60%", portalUrl: "https://www.adobe.com/kr/creativecloud/buy/students.html" },
        "ms365": { type: "free", price: 0, priceStr: "0원(무료)", badgeText: "학교 제휴(무료)", portalUrl: "https://portal.hanyang.ac.kr" },
        "jetbrains": { type: "discount", price: 0, priceStr: "0원(무료)", badgeText: "상시 학생 할인", portalUrl: "https://www.jetbrains.com/community/education/" },
        "notion": { type: "discount", price: 0, priceStr: "0원(무료)", badgeText: "상시 학생 할인", portalUrl: "https://www.notion.so/personal/students" },
        "autodesk": { type: "discount", price: 0, priceStr: "0원(무료)", badgeText: "상시 학생 할인", portalUrl: "https://www.autodesk.com/education" },
        "github": { type: "discount", price: 0, priceStr: "0원(무료)", badgeText: "상시 학생 할인", portalUrl: "https://education.github.com" },
        "figma": { type: "discount", price: 0, priceStr: "0원(무료)", badgeText: "상시 학생 할인", portalUrl: "https://www.figma.com/education" },
        "zoom": { type: "free", price: 0, priceStr: "0원(무료)", badgeText: "학교 제휴(무료)", portalUrl: "https://portal.hanyang.ac.kr" }
    },
    "성균관대학교": {
        "adobe": { type: "free", price: 0, priceStr: "0원(무료)", badgeText: "학교 제휴(무료)", portalUrl: "https://www.skku.edu" },
        "ms365": { type: "free", price: 0, priceStr: "0원(무료)", badgeText: "학교 제휴(무료)", portalUrl: "https://www.skku.edu" },
        "jetbrains": { type: "discount", price: 0, priceStr: "0원(무료)", badgeText: "상시 학생 할인", portalUrl: "https://www.jetbrains.com/community/education/" },
        "notion": { type: "discount", price: 0, priceStr: "0원(무료)", badgeText: "상시 학생 할인", portalUrl: "https://www.notion.so/personal/students" },
        "autodesk": { type: "discount", price: 0, priceStr: "0원(무료)", badgeText: "상시 학생 할인", portalUrl: "https://www.autodesk.com/education" },
        "github": { type: "discount", price: 0, priceStr: "0원(무료)", badgeText: "상시 학생 할인", portalUrl: "https://education.github.com" },
        "figma": { type: "discount", price: 0, priceStr: "0원(무료)", badgeText: "상시 학생 할인", portalUrl: "https://www.figma.com/education" },
        "zoom": { type: "none", price: 200000, priceStr: "연간 20만 원", badgeText: "대체 솔루션 권장", portalUrl: "https://zoom.us" }
    },
    "이화여자대학교": {
        "adobe": { type: "discount", price: 290000, priceStr: "연간 29만 원", badgeText: "개별 할인 60%", portalUrl: "https://www.adobe.com/kr/creativecloud/buy/students.html" },
        "ms365": { type: "free", price: 0, priceStr: "0원(무료)", badgeText: "학교 제휴(무료)", portalUrl: "https://portal.ewha.ac.kr" },
        "jetbrains": { type: "discount", price: 0, priceStr: "0원(무료)", badgeText: "상시 학생 할인", portalUrl: "https://www.jetbrains.com/community/education/" },
        "notion": { type: "discount", price: 0, priceStr: "0원(무료)", badgeText: "상시 학생 할인", portalUrl: "https://www.notion.so/personal/students" },
        "autodesk": { type: "discount", price: 0, priceStr: "0원(무료)", badgeText: "상시 학생 할인", portalUrl: "https://www.autodesk.com/education" },
        "github": { type: "discount", price: 0, priceStr: "0원(무료)", badgeText: "상시 학생 할인", portalUrl: "https://education.github.com" },
        "figma": { type: "discount", price: 0, priceStr: "0원(무료)", badgeText: "상시 학생 할인", portalUrl: "https://www.figma.com/education" },
        "zoom": { type: "none", price: 200000, priceStr: "연간 20만 원", badgeText: "대체 솔루션 권장", portalUrl: "https://zoom.us" }
    },
    "건국대학교": {
        "adobe": { type: "free", price: 0, priceStr: "0원(무료)", badgeText: "학교 제휴(무료)", portalUrl: "https://portal.konkuk.ac.kr" },
        "ms365": { type: "free", price: 0, priceStr: "0원(무료)", badgeText: "학교 제휴(무료)", portalUrl: "https://portal.konkuk.ac.kr" },
        "jetbrains": { type: "discount", price: 0, priceStr: "0원(무료)", badgeText: "상시 학생 할인", portalUrl: "https://www.jetbrains.com/community/education/" },
        "notion": { type: "discount", price: 0, priceStr: "0원(무료)", badgeText: "상시 학생 할인", portalUrl: "https://www.notion.so/personal/students" },
        "autodesk": { type: "discount", price: 0, priceStr: "0원(무료)", badgeText: "상시 학생 할인", portalUrl: "https://www.autodesk.com/education" },
        "github": { type: "discount", price: 0, priceStr: "0원(무료)", badgeText: "상시 학생 할인", portalUrl: "https://education.github.com" },
        "figma": { type: "discount", price: 0, priceStr: "0원(무료)", badgeText: "상시 학생 할인", portalUrl: "https://www.figma.com/education" },
        "zoom": { type: "none", price: 200000, priceStr: "연간 20만 원", badgeText: "대체 솔루션 권장", portalUrl: "https://zoom.us" }
    },
    "중앙대학교": {
        "adobe": { type: "free", price: 0, priceStr: "0원(무료)", badgeText: "학교 제휴(무료)", portalUrl: "https://portal.cau.ac.kr" },
        "ms365": { type: "free", price: 0, priceStr: "0원(무료)", badgeText: "학교 제휴(무료)", portalUrl: "https://portal.cau.ac.kr" },
        "jetbrains": { type: "discount", price: 0, priceStr: "0원(무료)", badgeText: "상시 학생 할인", portalUrl: "https://www.jetbrains.com/community/education/" },
        "notion": { type: "discount", price: 0, priceStr: "0원(무료)", badgeText: "상시 학생 할인", portalUrl: "https://www.notion.so/personal/students" },
        "autodesk": { type: "discount", price: 0, priceStr: "0원(무료)", badgeText: "상시 학생 할인", portalUrl: "https://www.autodesk.com/education" },
        "github": { type: "discount", price: 0, priceStr: "0원(무료)", badgeText: "상시 학생 할인", portalUrl: "https://education.github.com" },
        "figma": { type: "discount", price: 0, priceStr: "0원(무료)", badgeText: "상시 학생 할인", portalUrl: "https://www.figma.com/education" },
        "zoom": { type: "free", price: 0, priceStr: "0원(무료)", badgeText: "학교 제휴(무료)", portalUrl: "https://portal.cau.ac.kr" }
    }
};

// 4. 시즌 프로모션 캘린더 데이터 (2026년 기준 확장)
const calendarEvents = {
    6: [
        { day: 5, software: "notion", type: "notion", title: "노션 대학생 템플릿 배포전", desc: "기말고사 대비 학업 관리 템플릿 공유 이벤트" },
        { day: 15, software: "adobe", type: "adobe", title: "Adobe 여름방학 특가 프로모션", desc: "방학 시즌 미대생 대상 해지방어 프로모션 시작" },
        { day: 22, software: "github", type: "github", title: "GitHub Campus Expert 모집", desc: "대학생 개발 리더 선발 및 코파일럿 단체 연수 지원" }
    ],
    7: [
        { day: 1, software: "ms365", type: "ms365", title: "MS 365 졸업생 계정 1차 백업 권장일", desc: "여름 졸업자 원드라이브 계정 정지 전 백업 기간 알림" },
        { day: 10, software: "autodesk", type: "autodesk", title: "AutoCAD 학생 인증 집중 검토 기간", desc: "여름방학 건축/기계 설계 실습 지원 승인 처리 기간" },
        { day: 25, software: "jetbrains", type: "jetbrains", title: "JetBrains 학생 갱신 연장 메일 발송", desc: "기존 무료 사용자 재인증 대상자 메일 발송 알림" }
    ],
    8: [
        { day: 12, software: "figma", type: "figma", title: "Figma 신학기 동아리 크레딧 신청", desc: "대학 디자인 학회 및 연합동아리 프로페셔널 팀 무료 크레딧 접수" },
        { day: 20, software: "adobe", type: "adobe", title: "Adobe 신학기 사전 인증 이벤트", desc: "2학기 개강 전 서버 트래픽 폭주 전 학적 승인 처리 권장" },
        { day: 28, software: "zoom", type: "zoom", title: "하반기 Zoom 비대면 스터디 라이선스 배포", desc: "제휴교 대상 시간 해제 수동 인증 코드 오픈" }
    ]
};

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

// --- 6. 동적 렌더링 및 핵심 로직 구현 ---

let currentSelectedUniversity = "국민대학교";
let activeFilterMode = "all"; // all, free, discount

document.addEventListener("DOMContentLoaded", () => {
    initApp();
});

function initApp() {
    initTabs();
    initUniversitySelector();
    initManualAnchorFlash();
    initCalendar();
    initReportForm();
    initFilterTabs();
    
    // 초기 로딩 시 대학교 자동 선택 및 렌더링
    selectUniversity(currentSelectedUniversity);
    renderTimelineFeed();
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
        } else {
            content.classList.remove("active");
        }
    });
    
    // 탭 이동 시 페이지 최상단으로 부드럽게 스크롤
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// 6-2. 대학교 검색 및 드롭다운 로직 (index.html 내 ID 매치 완료)
function initUniversitySelector() {
    const selectTrigger = document.getElementById("univ-select-btn");
    const selectOptions = document.getElementById("univ-options-list");
    const selectedText = document.getElementById("selected-univ-text");
    
    if (!selectTrigger || !selectOptions) return;

    selectTrigger.addEventListener("click", (e) => {
        e.stopPropagation();
        selectOptions.classList.toggle("active");
    });
    
    // 옵션 동적 렌더링
    selectOptions.innerHTML = "";
    universities.forEach(uni => {
        const option = document.createElement("div");
        option.className = "uni-option-item";
        option.innerHTML = `<span class="material-symbols-rounded">school</span>${uni}`;
        option.addEventListener("click", () => {
            selectedText.innerHTML = `<span class="material-symbols-rounded select-icon">account_balance</span>${uni}`;
            selectOptions.classList.remove("active");
            selectUniversity(uni);
        });
        selectOptions.appendChild(option);
    });
    
    // 외부 클릭 시 옵션 닫기
    document.addEventListener("click", () => {
        selectOptions.classList.remove("active");
    });
}

// 6-2-b. 홈 탭 전체/무료/할인 필터 탭 초기화
function initFilterTabs() {
    const filterBtns = document.querySelectorAll(".view-btn");
    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            filterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            
            const filterType = btn.id.replace("view-", ""); // all, free, discount
            activeFilterMode = filterType;
            renderSoftwareCards();
        });
    });
}

// 6-3. 특정 대학교 선택 시 홈 대시보드 리렌더링 및 통계 바 갱신
function selectUniversity(uniName) {
    currentSelectedUniversity = uniName;
    
    // 1) 홈 화면 혜택 카드 목록 그리기
    renderSoftwareCards();
    
    // 2) 상세 가이드 탭(Manual Tab)도 해당 대학교 혜택 맞춤형으로 동적 재생성!
    renderManualSections();
}

function renderSoftwareCards() {
    const targetData = universityData[currentSelectedUniversity];
    const cardGrid = document.getElementById("software-grid");
    if (!targetData || !cardGrid) return;
    
    cardGrid.innerHTML = "";
    
    let filteredCount = 0;
    
    softwares.forEach(sw => {
        const swStatus = targetData[sw.id]; // { type, price, priceStr, badgeText, portalUrl }
        if (!swStatus) return;
        
        // 필터링 적용
        if (activeFilterMode !== "all" && swStatus.type !== activeFilterMode) {
            return;
        }
        
        filteredCount++;
        
        let badgeClass = "badge-none";
        if (swStatus.type === "free") badgeClass = "badge-free";
        else if (swStatus.type === "discount") badgeClass = "badge-save-percent";
        
        // 정가 대비 절약 비용 계산
        const savedPrice = sw.originalPrice - swStatus.price;
        const savedPriceStr = savedPrice > 0 ? `${savedPrice.toLocaleString()}원 절약` : "절약 금액 없음";
        
        // 0원 무료일 시 가격 텍스트 강조 및 배지 둥글기 모던 스타일화
        const isFree = swStatus.price === 0;
        const priceDisplayClass = isFree ? "price-value text-free" : "price-value text-normal";
        const priceLabelClass = isFree ? "price-label label-free" : "price-label label-normal";
        
        const card = document.createElement("div");
        card.className = "software-card";
        card.innerHTML = `
            <div class="card-header">
                <img src="${sw.logo}" alt="${sw.name} 로고" class="software-logo">
                <div class="card-title-badge-area">
                    <h3 class="software-title">${sw.name}</h3>
                    <span class="card-badge ${badgeClass}">${swStatus.badgeText}</span>
                </div>
            </div>
            <p class="software-desc">${sw.desc}</p>
            <div class="card-footer">
                <div class="price-section">
                    <span class="${priceLabelClass}">학생 혜택가</span>
                    <span class="${priceDisplayClass}">${swStatus.priceStr}</span>
                </div>
                <div class="original-price-row">
                    <span class="original-price-val">정가: ${sw.originalPriceStr.replace("연간 ", "")}</span>
                    <span class="saving-price-val">${savedPriceStr}</span>
                </div>
            </div>
            <div class="card-actions">
                <a href="${swStatus.portalUrl}" target="_blank" class="card-btn btn-portal">🔗 인증 포털 바로가기</a>
                <button class="card-btn btn-guide-link" data-swid="${sw.id}">단계별 인증 가이드 보기</button>
            </div>
        `;
        cardGrid.appendChild(card);
    });
    
    // 카드 총 개수 노출
    const countText = document.getElementById("benefits-count");
    if (countText) {
        countText.textContent = `검색된 혜택: 총 ${filteredCount}개`;
    }
    
    // 카드 내부 '단계별 인증 가이드 보기' 클릭 이벤트 바인딩 (스무스 앵커 점프 연동)
    const guideButtons = cardGrid.querySelectorAll(".btn-guide-link");
    guideButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const swId = btn.getAttribute("data-swid");
            jumpToManualAnchor(swId);
        });
    });
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
        softwares.forEach((sw, idx) => {
            const navLink = document.createElement("a");
            navLink.href = "#";
            navLink.className = idx === 0 ? "quick-nav-link active" : "quick-nav-link";
            navLink.setAttribute("data-anchor", sw.id);
            navLink.innerHTML = `
                <img src="${sw.logo}" class="quick-nav-logo" alt="${sw.name} 아이콘">
                <span>${sw.name.split(" ")[0]}</span>
            `;
            navLink.addEventListener("click", (e) => {
                e.preventDefault();
                scrollAndFlashManual(sw.id);
                updateActiveManualNavLink(sw.id);
            });
            quickNav.appendChild(navLink);
        });
    }
    
    if (sectionsList) {
        sectionsList.innerHTML = "";
        softwares.forEach(sw => {
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
            section.id = `manual-${sw.id}`;
            section.innerHTML = `
                <div class="manual-section-top">
                    <div class="manual-brand">
                        <div class="manual-logo-wrap">
                            <img src="${sw.logo}" alt="${sw.name} 로고">
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
    const targetElement = document.getElementById(`manual-${swId}`);
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth", block: "center" });
        
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
            const section = document.getElementById(`manual-${sw.id}`);
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
    const events = calendarEvents[month] || [];
    
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
                marker.className = `event-dot-tag ${evt.software}`;
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
            card.className = `calendar-timeline-item-card ${evt.software}`;
            card.innerHTML = `
                <div class="calendar-timeline-left">
                    <span class="timeline-date-badge">${month}월 ${evt.day}일</span>
                </div>
                <div class="calendar-timeline-right">
                    <h4 class="calendar-timeline-title">[${evt.software.toUpperCase()}] ${evt.title}</h4>
                    <p class="calendar-timeline-desc">${evt.desc}</p>
                </div>
            `;
            timelineList.appendChild(card);
        });
    }
}

// 6-6. 제보 폼 제출 및 통합 라이브 피드 갱신 로직 (main-report 계열 ID 완벽 매칭)
function initReportForm() {
    const reportForm = document.getElementById("report-form-main");
    if (!reportForm) return;
    
    // 폼 소프트웨어 옵션 동적 렌더링
    const swSelect = document.getElementById("main-report-software");
    if (swSelect) {
        swSelect.innerHTML = '<option value="" disabled selected>혜택 소프트웨어를 선택해 주세요</option>';
        softwares.forEach(sw => {
            const opt = document.createElement("option");
            opt.value = sw.name;
            opt.textContent = sw.name;
            swSelect.appendChild(opt);
        });
    }
    
    reportForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const userName = document.getElementById("main-report-name").value.trim();
        const userEmail = document.getElementById("main-report-email").value.trim();
        const uniName = document.getElementById("main-report-univ").value;
        const swName = swSelect.value;
        const typeEl = document.querySelector('input[name="main-report-type"]:checked');
        const details = document.getElementById("main-report-content").value.trim();
        
        if (!userName || !userEmail || !uniName || !swName || !typeEl || !details) {
            alert("모든 필수 입력 필드를 채워주세요.");
            return;
        }
        
        const type = typeEl.value;
        let typeText = "일반 제보";
        if (type === "link") typeText = "🔗 인증 링크 만료 및 오류";
        else if (type === "info") typeText = "💰 가격 정보/규정 변동";
        else if (type === "new") typeText = "✨ 우리 학교 신규 제휴 등록";
        
        // 제보자 익명 포맷팅 (예: 김철수 -> 김*수)
        let maskedName = userName;
        if (userName.length > 2) {
            maskedName = userName[0] + "*".repeat(userName.length - 2) + userName[userName.length - 1];
        } else if (userName.length === 2) {
            maskedName = userName[0] + "*";
        }
        
        // 피드 객체 신규 삽입
        const newFeed = {
            id: feedData.length + 1,
            user: maskedName,
            university: uniName,
            software: swName,
            type: type,
            typeText: typeText,
            details: details,
            date: "방금 전",
            status: "pending",
            statusText: "검토 중",
            adminReply: `제보해주신 ${uniName} ${swName} 관련 제보 내역을 신속히 접수했습니다. 담당자가 대학 포털의 라이선스 규정을 재검토하고 있으며, 확인이 완료되는 대로 대시보드 상태를 실시간 자정 처리하여 서비스에 반영하겠습니다. 대단히 감사합니다!`
        };
        
        // 피드 최상단 삽입
        feedData.unshift(newFeed);
        
        alert("✨ 소중한 제보 감사합니다! 보내주신 제보 내역은 실시간 피드에 추가되었으며, 관리자가 신속히 확인하여 데이터에 반영하겠습니다.");
        
        reportForm.reset();
        
        // 양쪽 피드 동적 렌더링
        renderTimelineFeed();
        
        // 제출 후 피드 뷰가 있는 하단으로 스무스 스크롤
        setTimeout(() => {
            const feedSection = document.getElementById("feedback-feed-report");
            if (feedSection) {
                feedSection.scrollIntoView({ behavior: "smooth", block: "start" });
                
                // 신규 제보 타임라인 카드 번쩍임 효과 추가
                const firstCard = feedSection.querySelector(".feed-timeline-card");
                if (firstCard) {
                    firstCard.classList.add("highlight-flash");
                    setTimeout(() => {
                        firstCard.classList.remove("highlight-flash");
                    }, 2000);
                }
            }
        }, 500);
    });
}

// 홈 탭의 feedback-feed-home 및 제보 탭의 feedback-feed-report 양방향 갱신 
function renderTimelineFeed() {
    const feedHome = document.getElementById("feedback-feed-home");
    const feedReport = document.getElementById("feedback-feed-report");
    
    if (feedHome) {
        feedHome.innerHTML = "";
        // 홈 화면 위젯은 공간이 좁으므로 최대 3개까지만 출력
        feedData.slice(0, 3).forEach(feed => {
            feedHome.appendChild(createFeedCardNode(feed));
        });
    }
    
    if (feedReport) {
        feedReport.innerHTML = "";
        // 제보 탭 통합 피드는 전체 목록을 렌더링
        feedData.forEach(feed => {
            feedReport.appendChild(createFeedCardNode(feed));
        });
    }
}

function createFeedCardNode(feed) {
    const isPending = feed.status === "pending";
    const statusBadgeClass = isPending ? "feed-status-badge badge-pending" : "feed-status-badge badge-resolved";
    const borderClass = `feed-timeline-card ${feed.status}`;
    
    const card = document.createElement("div");
    card.className = borderClass;
    card.innerHTML = `
        <div class="feed-card-header">
            <div class="feed-card-meta">
                <span class="feed-user-uni">${feed.university}</span> | 
                <span class="feed-user-name">${feed.user} 대학생 제보</span>
                <span class="feed-date">(${feed.date})</span>
            </div>
            <span class="${statusBadgeClass}">${feed.statusText}</span>
        </div>
        <div class="feed-card-body">
            <div class="feed-sw-tag">[${feed.software}] ${feed.typeText.replace(/^[^\s]+\s/, "")}</div>
            <p class="feed-details">${feed.details}</p>
        </div>
        <div class="feed-card-reply">
            <span class="reply-avatar">↳ 🛡️ OPEN LICENSE 관리자</span>
            <p class="reply-text">${feed.adminReply}</p>
        </div>
    `;
    return card;
}
