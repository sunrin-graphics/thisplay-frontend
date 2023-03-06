// @ts-nocheck

type ClubInfo = {
  id: number;
  name: string;
  department: string;
  desc: string;
  logo: string;
  field: string;
  member: number;
  site: string;
  sns: {
    instagram: string;
    facebook: string;
  };
  awards: string[];
  info: string;
  mainColor: string;
  subColor: string;
  textColor: string;
  gallery: {
    path: string;
    name: string;
    isVideo: boolean;
  }[];
};

export type ClubList = ClubInfo[];

const clubInfo: ClubInfo[] = [
  {
    id: 1,
    name: "v.friends",
    department: "콘텐츠디자인과",
    desc: "디자인 교육 봉사 동아리",
    logo: "/images/v.friends.svg",
    field: "그래픽 디자이너",
    member: 8,
    site: "https://vfriends.github.io/",
    sns: {
      instagram: "https://www.instagram.com/v.friends_official/",
      facebook: "https://www.facebook.com/with.v.friends",
    },
    awards: [
      "2019년",
      "",
      "스마틴앱챌린지 STA+C 생활부문 최우수상 | 김민",
      "정션해커톤 Zepetto 부문 3등 | 최성희",
      "",
      "2020년",
      "",
      "한국공항공사 창업경진대회 우수상 | 김민",
      "선린인터넷고등학교 그래픽디자인 공모전 모션그래픽 부문 대상 | 김민",
      "선린인터넷고등학교 그래픽디자인 공모전 포스터 부문 대상 | 김시온",
      "선린인터넷고등학교 그래픽디자인 공모전 UI/UX 부문 대상 | 최원호",
      "",
      "2021년",
      "",
      "국민의힘 X 여의도연구원 공정한 대한민국 만들기 정책공모전 대상 | 김민",
      "동그라미재단과 함께하는 TIDE 인스티튜드 Teu Med 4기 최우수상 | 김민",
      "",
      "2022년",
      "",
      "선린인터넷고등학교 그래픽공모전 캐릭터 부문 금상 | 박정우",
      "선린인터넷고등학교 영상공모전 모션그래픽 부문 대상 | 박정우",
      "선린인터넷고등학교 영상공모전 광고 부문 금상 | 박정우",
      "",
      "2023년",
      "숙명여자대학교 AI - X Super Hackathon Challenge 최우수상 | 박정우",
    ],
    info:
      "브이프렌즈는 선린인터넷고등학교의 유일한 디자인 교육봉사 동아리로, 그래픽 디자인, UI/UX, 모션 그래픽, 영상 기획 등 다양한 분야를 배우고 여러 프로젝트를 수행하며 실력과 아이디어를 발휘할 수 있는 동아리입니다. 브이프렌즈는 체계적인 교육과 선후배 간의 교류를 통해 부원들의 성장과 발전을 지원하고, 부원들 사이의 화목하고 즐거운 분위기가 자랑입니다.\n" +
      "또한, 교내 / 교외에서 진행되는 디자인 교육 봉사 프로그램에 참여하여, 지식과 기술을 나누고 학생들의 창의적인 사고와 디자인 능력을 향상시키는 데 기여하고 있습니다.",
    subColor: "#FBCC26",
    mainColor: "#D99D3D",
    textColor: "#ffffff",
    gallery: [
      {
        url: "https://www.youtube.com/embed/XrjW9N7jkfE",
        path: "https://i.ytimg.com/vi/XrjW9N7jkfE/maxresdefault.jpg",
        name: "2021 김민 포트폴리오",
        isVideo: true,
      },
      {
        url: "https://www.youtube.com/embed/zNERoG2-trs",
        path: "https://i.ytimg.com/vi/zNERoG2-trs/maxresdefault.jpg",
        name: "vestival 홍보 영상",
        isVideo: true,
      },
      {
        path: "https://cdn.discordapp.com/attachments/1082007084217942016/1082037493765001396/5000.jpg",
        name: "소프트웨어 나눔 축제 교재 디자인",
        isVideo: false,
      },
      {
        path: "https://cdn.discordapp.com/attachments/1082007084217942016/1082037494264115400/b136ea59dc6f0c72.jpg",
        name: "하늘 포스터",
        isVideo: false,
      },
      {
        path: "https://cdn.discordapp.com/attachments/1082007084217942016/1082037492984848464/0434cdf789aa216f.jpg",
        name: "신은 죽었다",
        isVideo: false,
      },
      {
        path: "https://cdn.discordapp.com/attachments/1082007084217942016/1082037491730763846/2023_Happy_New_Year.jpg",
        name: "2023 새해 기념 포스터",
        isVideo: false,
      },
      {
        path: "https://cdn.discordapp.com/attachments/1082007084217942016/1082037493496557679/9c8407a601b494f2.jpg",
        name: "여름의 마법 디자인",
        isVideo: false,
      },
      {
        url: "https://www.youtube.com/embed/Rnm0Sj3AOa8",
        path: "https://i.ytimg.com/vi/Rnm0Sj3AOa8/maxresdefault.jpg",
        name: "헌혈 공모전",
        isVideo: true,
      },
      {
        url: "https://www.youtube.com/embed/ozBvKUJCbv0",
        path: "https://i.ytimg.com/vi/ozBvKUJCbv0/maxresdefault.jpg",
        name: "라람티비 인트로",
        isVideo: true,
      },
      {
        url: "https://www.youtube.com/embed/SNc3WPX-Aao",
        path: "https://i.ytimg.com/vi/SNc3WPX-Aao/maxresdefault.jpg",
        name: "축제 3D",
        isVideo: true,
      },
      {
        path: "https://cdn.discordapp.com/attachments/1082007084217942016/1082037494025035846/344a4ca7d7c5c426.jpg",
        name: "총 모델링",
        isVideo: false,
      },
      {
        path: "https://cdn.discordapp.com/attachments/1082007084217942016/1082037491491680306/3D_1.jpg",
        name: "기계 모델링",
        isVideo: false,
      },
      {
        path: "https://cdn.discordapp.com/attachments/1082007084217942016/1082037492129210458/Start_Planner_UIUX.jpg",
        name: "UI/UX Start Planner 디자인",
        isVideo: false,
      },
      {
        path: "https://cdn.discordapp.com/attachments/1082007084217942016/1082037492670287872/bff66e5b4975be15.jpg",
        name: "UI/UX 음악 앱 디자인",
        isVideo: false,
      },
      {
        path: "https://cdn.discordapp.com/attachments/1082007084217942016/1082037492393455688/a598bf595c5ad9f4.jpg",
        name: "금연광고 포스터",
        isVideo: false,
      },
    ],
  },
  {
    id: 2,
    name: "EDCAN",
    department: "소프트웨어과",
    desc: "모바일 콘텐츠 개발 동아리",
    logo: "/images/edcan.svg",
    field: "UI/UX 디자이너",
    member: 3,
    site: "https://edcan.kr/",
    sns: {
      instagram: "https://www.instagram.com/sunrin_edcan/",
      facebook: "https://www.facebook.com/sunrinedcan",
    },
    awards: [
      "2019년",
      "",
      ,
      "고졸성공 취업대박람회 동아리 경진대회 특별상 | 김현우 이정우 정민서 정찬효 표영우",
      "선린인터넷고등학교 해커톤 금상 | 정찬효",
      "대한민국 메이커히어로즈 학생 공모전 최우수상 | 송영범 이창민",
      "선린인터넷고등학교 천하제일 코딩대회 동상 | 정찬효",
      "선린인터넷고등학교 TED 프레젠테이션 경진대회 동상 | 김현우",
      "",
      "2022년",
      "",
      "제주 ICT이노베이션스퀘어 해커톤 대상 | 백시현",
      "메타버스 개발자 경진대회 대상 | 남현종",
      "선린인터넷고등학교 디지털 콘텐츠 경진대회 앱/웹 콘텐츠 부문 금상 | 백시현",
      "선린인터넷고등학교 영상공모전 광고 부문 대상 | 표한빈",
      "선린인터넷고등학교 그래픽디자인 공모전 UI/UX 부문 은상 | 표한빈 백시현 이하람",
      "선린인터넷고등학교 영상공모전 모션그래픽 부문 금상 | 표한빈",
      "제 20회 임베디드 소프트웨어 경진대회 틴 스타트업 부문 우수상 | 표한빈",
    ],
    info:
      "저희 EDCAN은 2015년부터 시작된 소프트웨어과 소속의 모바일 콘텐츠 개발 동아리로,\n" +
      "안드로이드 앱 개발과 앱을 디자인하는 UI/UX를 담당하고 있습니다. 협업을 중심으로 디양한 경험을 쌓을 수 있는 커리큘럼을 준비중입니다. 2022년 소프트웨어과 전공 동아리 중 가장 많은 수상 실적을 보유중입니다.",
    subColor: "#00A9CE",
    mainColor: "#425563",
    textColor: "#fff",
    gallery: [
      {
        url: "https://www.youtube.com/embed/tH006EAJ9dg",
        path: "https://i.ytimg.com/vi/tH006EAJ9dg/maxresdefault.jpg",
        name: "위그비",
        isVideo: true,
      },
      {
        url: "https://www.youtube.com/embed/LVJSe-epa80",
        path: "https://i.ytimg.com/vi/LVJSe-epa80/maxresdefault.jpg",
        name: "Material You",
        isVideo: true,
      },
      {
        url: "https://www.youtube.com/embed/2V9qiB8C8co",
        path: "https://i.ytimg.com/vi/2V9qiB8C8co/maxresdefault.jpg",
        name: "Google Photo",
        isVideo: true,
      },
      {
        path: "https://cdn.discordapp.com/attachments/1082010325257302016/1082039070605193266/EDCANPoster0090.jpg",
        name: "EDCAN World",
        isVideo: false,
      },
      {
        path: "https://cdn.discordapp.com/attachments/1082010325257302016/1082038533537149058/EDCAN_3d_1920x1080_1.jpg",
        name: "EDCAN Glassmorphism",
        isVideo: false,
      },
      {
        path: "https://cdn.discordapp.com/attachments/1082010325257302016/1082038535835623515/commuseum_final_a3_rgb.jpg",
        name: "commuseum.",
        isVideo: false,
      },
      {
        path: "https://cdn.discordapp.com/attachments/1082010325257302016/1082038533860114575/haromi_a2_rgb.jpg",
        name: "하롬이",
        isVideo: false,
      },
      {
        path: "https://cdn.discordapp.com/attachments/1082010325257302016/1082039070882005012/mockupscreenfileuy.jpg",
        name: "Filey",
        isVideo: false,
      },
      {
        path: "https://cdn.discordapp.com/attachments/1082010325257302016/1082039071179817010/1920_3.jpg",
        name: "Flux",
        isVideo: false,
      },
      {
        path: "https://cdn.discordapp.com/attachments/1082010325257302016/1082038534199844954/MOA_a2_cmyk.jpg",
        name: "MOA",
        isVideo: false,
      },
      {
        path: "https://cdn.discordapp.com/attachments/1082010325257302016/1082038534489256126/UI_UX_11222___A1.jpg",
        name: "Costure",
        isVideo: false,
      },
      {
        path: "https://cdn.discordapp.com/attachments/1082010325257302016/1082038535512670288/a2_poster_cmyk.jpg",
        name: "Habitmake",
        isVideo: false,
      },
      {
        path: "https://cdn.discordapp.com/attachments/1082010325257302016/1082038534753501334/1fdda065d791f626.jpg",
        name: "뛰어볼까?",
        isVideo: false,
      },
      {
        path: "https://cdn.discordapp.com/attachments/1082010325257302016/1082038535013539980/809f52d72d9fc027.jpg",
        name: "미크미크",
        isVideo: false,
      },
      {
        path: "https://cdn.discordapp.com/attachments/1082010325257302016/1082038535261007912/e12d0da1a45cf07d.jpg",
        name: "야금야금",
        isVideo: false,
      },
    ],
  },

  {
    id: 3,
    name: "IWOP",
    department: "소프트웨어과",
    desc: "웹 개발 동아리",
    logo: "/images/iwop.svg",
    field: "UI/UX 디자이너",
    member: 3,
    site: "https://iwop.kr/",
    sns: {
      instagram: "https://www.instagram.com/sunrin_iwop/",
      facebook: "https://www.facebook.com/iwop_sunrin",
    },
    awards: [
      "2019년",
      "",
      "모바일 콘텐츠 경진대회",
      "JustLance - 동상 (방진혁)",
      "",
      "디지털 콘텐츠 경진대회",
      "Circles - 대상 (박종훈)",
      "Gangle - 은상 (김재현)",
      "",
      "기타",
      "박정우 - 제9회 서강대학교 게임/애니/만화 아이디어 공모전 동상",
      "염태민 - 천하제일 코딩대회 동상",
      "",
      "2020년",
      "",
      "모바일 콘텐츠 경진대회",
      "스테일메이트 - 대상 (방진혁)",
      "",
      "디지털 콘텐츠 경진대회",
      "MBit - 금상 (염태민)",
      "",
      "기타",
      "염태민 - 교내 창의 아이디어 경진대회 금상",
      "이호준 - 교내 창의 아이디어 경진대회 금상",
      "최수환 - 교내 창의 아이디어 경진대회 은상",
      "",
      "2022년",
      "윤도현 - 디지털 콘텐츠 경진대회 동상",
    ],
    info:
      "IWOP은 2001년 개설된 선린 최초의 IT 계열 동아리이자, 우수한 수상실적을 보유하고 있는 \n" +
      "소프트웨어과 유일 웹 동아리입니다. IWOP에서는 UI/UX 교육을 통해 반응형 웹 사이트 \n" +
      "디자인, 어플리케이션 UI 디자인을 진행합니다.",
    mainColor: "#38BF54",
    subColor: "#57B7D5",
    textColor: "#fff",
    gallery: [
      {
        url: "https://www.youtube.com/embed/ksY6ZMwLg7I",
        path: "https://i.ytimg.com/vi/ksY6ZMwLg7I/maxresdefault.jpg",
        name: "이혜린",
        isVideo: true,
      },
      {
        url: "https://www.youtube.com/embed/w1k14ZENjbc",
        path: "https://i.ytimg.com/vi/w1k14ZENjbc/maxresdefault.jpg",
        name: "하이톤은 처음이라 시연 영상",
        isVideo: true,
      },
      {
        url: "https://www.youtube.com/embed/rVmPAg6YDOo",
        path: "https://i.ytimg.com/vi/rVmPAg6YDOo/maxresdefault.jpg",
        name: "inCommu",
        isVideo: true,
      },
      {
        url: "https://www.youtube.com/embed/htMMHIfuDQU",
        path: "https://i.ytimg.com/vi/htMMHIfuDQU/maxresdefault.jpg",
        name: "선린인터넷고등학교 홈페이지 리메이크",
        isVideo: true,
      },
      {
        url: "https://www.youtube.com/embed/CqRec_qzMVY",
        path: "https://i.ytimg.com/vi/CqRec_qzMVY/maxresdefault.jpg",
        name: "Caculator.com",
        isVideo: true,
      },
      {
        url: "https://www.youtube.com/embed/-5CEHQzE76s",
        path: "https://i.ytimg.com/vi/-5CEHQzE76s/maxresdefault.jpg",
        name: "yeshow",
        isVideo: true,
      },
      {
        url: "https://www.youtube.com/embed/sNhqdM6Ee2E",
        path: "https://i.ytimg.com/vi/sNhqdM6Ee2E/maxresdefault.jpg",
        name: "Ingopass (w/ EDCAN 백시현, KDMHS 조현우)",
        isVideo: true,
      },
    ],
  },
  {
    id: 4,
    name: "MIR",
    department: "콘텐츠디자인과",
    desc: "만화·일러스트레이션 동아리",
    logo: "/images/mir.svg",
    field: "만화 및 일러스트레이션",
    member: 8,
    site: "https://sunrinmir.github.io/",
    sns: {
      instagram: "https://instagram.com/mir.__.official",
      facebook:
        "https://www.facebook.com/profile.php?id=100066338873711&mibextid=ZbWKwL ",
    },
    awards: [
      "2019년",
      "",
      "선린인터넷고등학교 그래픽디자인 공모전 일러스트 부문 금상 | 염지원",
      "선린인터넷고등학교 그래픽디자인 공모전 일러스트 부문 동상 | 원창연",
      "선린인터넷고등학교 그래픽디자인 공모전 일러스트 부문 동상 | 강민지",
      "선린인터넷고등학교 그래픽디자인 공모전 일러스트 부문 동상 | 박다솜",
      "선린인터넷고등학교 그래픽디자인 공모전 포스터 부문 은상 | 김혜진",
      "선린인터넷고등학교 그래픽디자인 공모전 포스터 부문 동상 | 염지원",
      "선린인터넷고등학교 블로그 포트폴리오 공모전 금상 | 강민지",
      "선린인터넷고등학교 블로그 포트폴리오 공모전 동상 | 최가은",
      "선린인터넷고등학교 블로그 포트폴리오 공모전 동상 | 김혜진",
      "",
      "2022년",
      "",
      "선린인터넷고등학교 그래픽디자인 공모전 일러스트 부문 대상 | 유호빈",
      "대한민국 청소년 디자인 전람회 특선 | 김한비",
    ],
    info: "교내 유일 만화 일러스트레이션 전문동아리인 미르에서는 디지털 드로잉위주의 만화, 일러스트 수업을 진행하고있습니다. 여러가지의 활동과 그림 도구 지원, 선배들과의 교류등으로 다채로운 경험을 할 수 있는 동아리입니다.",
    subColor: "#d9acf2",
    mainColor: "#f0b7cd",
    textColor: "#ffffff",
    gallery: [
      {
        path: "https://cdn.discordapp.com/attachments/1082011620206710824/1082033132708044940/5c02e3675d776079.jpg",
        name: "강승주 포스터",
        isVideo: false,
      },
      {
        path: "https://cdn.discordapp.com/attachments/1082011620206710824/1082033133022625922/3bd18696b187247b.jpg",
        name: "구슬이 포스터",
        isVideo: false,
      },
      {
        path: "https://cdn.discordapp.com/attachments/1082011620206710824/1082033133320409168/8b8651a93b50fb3e.jpg",
        name: "김수빈 포스터",
        isVideo: false,
      },
      {
        path: "https://cdn.discordapp.com/attachments/1082011620206710824/1082033133597237269/f2d20354408d933a.jpg",
        name: "김해윤 포스터",
        isVideo: false,
      },
      {
        path: "https://cdn.discordapp.com/attachments/1082011620206710824/1082033133802766487/59a395576165d562.jpg",
        name: "류준상 포스터",
        isVideo: false,
      },
      {
        path: "https://cdn.discordapp.com/attachments/1082011620206710824/1082033134108938310/cf0ae2e11e804893.jpg",
        name: "박세현 포스터",
        isVideo: false,
      },
      {
        path: "https://cdn.discordapp.com/attachments/1082011620206710824/1082033134431903795/f76f7f9bb63123d4.jpg",
        name: "유신비 포스터",
        isVideo: false,
      },
      {
        path: "https://cdn.discordapp.com/attachments/1082011620206710824/1082033134738096168/077a9bf9b922b324.jpg",
        name: "유호빈 포스터",
        isVideo: false,
      },
      {
        path: "https://cdn.discordapp.com/attachments/1082011620206710824/1082033135056850974/ade147e9ecbb28e4.jpg",
        name: "이나영 포스터",
        isVideo: false,
      },
      {
        path: "https://cdn.discordapp.com/attachments/1082011620206710824/1082033135388205147/89ed04c04e64ec2a.jpg",
        name: "이서현 포스터",
        isVideo: false,
      },
      {
        path: "https://cdn.discordapp.com/attachments/1082011620206710824/1082033145047695400/56a835433f54367a.jpg",
        name: "이초원 포스터",
        isVideo: false,
      },
      {
        path: "https://cdn.discordapp.com/attachments/1082011620206710824/1082033145299341432/ad6aefaccda987b3.jpg",
        name: "이태은 포스터",
        isVideo: false,
      },
      {
        path: "https://cdn.discordapp.com/attachments/1082011620206710824/1082033145727156224/d773339a6815a9e1.jpg",
        name: "조성환 포스터",
        isVideo: false,
      },
      {
        path: "https://cdn.discordapp.com/attachments/1082011620206710824/1082033146113048576/042708713ba4fd40.jpg",
        name: "천의선 포스터",
        isVideo: false,
      },
      {
        path: "https://cdn.discordapp.com/attachments/1082011620206710824/1082033146469552158/0a2f2ebb30df7cfd.jpg",
        name: "황서희 포스터",
        isVideo: false,
      },
    ],
  },
  {
    id: 5,
    name: "TATE",
    department: "콘텐츠디자인과",
    desc: "디자인 연구 동아리",
    logo: "/images/tate.svg",
    field: "그래픽 디자이너",
    member: 8,
    site: "-",
    sns: {
      instagram: "https://www.instagram.com/tate__official/",
      facebook: "https://www.facebook.com/TATEDesignResearchClub",
    },
    awards: [],
    info: "선린인터넷고등학교 콘텐츠디자인과 전공동아리 TATE는 14년 동안 이어져 온 디자인 연구 동아리로 선배들과의 화목하고 자유로운 분위기 속에서 일러스트레이터, 포토샵, 3D MAX 등 다양한 프로그램을 배우고 자신의 생각을 펼칠 수 있는 동아리입니다. 또한 그래픽 디자인 수업을 들으며 자신의 전공 실력이 향상되고 다양한 분야의 디자인을 접할 수 있습니다.",
    subColor: "#224fac",
    mainColor: "#1e2b58",
    textColor: "#ffffff",
    gallery: [
      {
        path: "https://cdn.discordapp.com/attachments/1082011657317920818/1082039947520917514/8b78830fc373460a.jpg",
        name: "한주희 포스터 1",
        isVideo: false,
      },
      {
        path: "https://cdn.discordapp.com/attachments/1082011657317920818/1082039948078755970/2.jpg",
        name: "김건우 포스터 1",
        isVideo: false,
      },
      {
        path: "https://cdn.discordapp.com/attachments/1082011657317920818/1082039948405899444/5acc409b592bbea9.jpg",
        name: "김건우 포스터 2",
        isVideo: false,
      },
      {
        path: "https://cdn.discordapp.com/attachments/1082011657317920818/1082039948665962588/1.jpg",
        name: "문찬솔 뱃지",
        isVideo: false,
      },
      {
        path: "https://cdn.discordapp.com/attachments/1082011657317920818/1082039948938588336/2.jpg",
        name: "문찬솔 포스터",
        isVideo: false,
      },
      {
        path: "https://cdn.discordapp.com/attachments/1082011657317920818/1082039949223788676/1.jpg",
        name: "서유진 포스터 1",
        isVideo: false,
      },
      {
        path: "https://cdn.discordapp.com/attachments/1082011657317920818/1082039949500629042/2.jpg",
        name: "서유진 포스터 2",
        isVideo: false,
      },
      {
        path: "https://cdn.discordapp.com/attachments/1082011657317920818/1082039949844557864/3.jpg",
        name: "서유진 포스터 3",
        isVideo: false,
      },
      {
        path: "https://cdn.discordapp.com/attachments/1082011657317920818/1082039950142341191/2.jpg",
        name: "오지후 포스터 1",
        isVideo: false,
      },
      {
        path: "https://cdn.discordapp.com/attachments/1082011657317920818/1082039950557593701/3.jpg",
        name: "오지후 포스터 2",
        isVideo: false,
      },
      {
        path: "https://cdn.discordapp.com/attachments/1082011657317920818/1082039953430683688/2.jpg",
        name: "한주희 포스터 2",
        isVideo: false,
      },
      {
        path: "https://cdn.discordapp.com/attachments/1082011657317920818/1082039953753641081/3.jpg",
        name: "한주희 포스터 3",
        isVideo: false,
      },
    ],
  },

  {
    id: 6,
    name: "zer0pen",
    department: "소프트웨어과",
    desc: "게임 개발 전문 동아리",
    logo: "/images/zer0pen.svg",
    field: "게임 디자이너",
    member: 3,
    site: "http://zer0pen.github.io/",
    sns: {
      instagram: "https://www.instagram.com/zer0pen_/",
      facebook: "https://www.facebook.com/zer0pen",
    },
    awards: [
      "2021년",
      "",
      "선린인터넷고등학교 해커톤 은상 | 박민제",
      "선린인터넷고등학교 해커톤 은상 | 김윤빈",
      "선린인터넷고등학교 모바일 콘텐츠 경진대회 금상 | 김상엽",
      "선린인터넷고등학교 모바일 콘텐츠 경진대회 금상 | 심재용",
      "선린인터넷고등학교 모바일 콘텐츠 경진대회 은상 | 이원형",
      "선린인터넷고등학교 프로그래밍 경시대회 은상 | 이원형",
      "선린인터넷고등학교 그래픽디자인 공모전 캐릭터디자인 부문 은상 | 차하람",
      "",
      "2022년",
      "",
      "선린인터넷고등학교 해커톤 은상 | 박민제",
      "선린인터넷고등학교 해커톤 은상 | 김윤빈",
      "선린인터넷고등학교 해커톤 은상 | 이원형",
      "선린인터넷고등학교 프로그래밍 경시대회 동상 | 김준호",
      "선린인터넷고등학교 그래픽디자인 공모전 캐릭터 부문 동상 | 박세현",
    ],
    info:
      "제로픈은 선린인터넷고등학교 게임 개발 전문 동아리로, 대중적인 게임 엔진인 Unity를 활용하여, (2D/3D)게임 제작 과정의 전반적인 과정을 배웁니다.\n" +
      "디자이너는 드로잉, 픽셀아트, 3D, FX 등 게임 그래픽 디자이너가 되기 위해 필요한 것들을 배우고, 선배, 동기들과 함께하는 팀 프로젝트를 자주 진행하여 실력을 쌓을 수 있습니다. \n" +
      " 또한, 화목하고 즐거운 분위기로, 타 동아리들과의 교류도 자유롭게 진행되는 동아리입니다. ",
    mainColor: "#0c1532",
    subColor: "#f2e341",
    textColor: "#ffffff",
    gallery: [
      {
        path: "https://cdn.discordapp.com/attachments/1082011696035541082/1082041373001265222/elf-.jpg",
        name: "박세현 캐릭터 디자인",
        isVideo: false,
      },
      {
        path: "https://cdn.discordapp.com/attachments/1082011696035541082/1082041373236154368/EscapeSchool-.jpg",
        name: "EscapeSchool-김진영",
        isVideo: false,
      },
      {
        path: "https://cdn.discordapp.com/attachments/1082011696035541082/1082041373475209216/Run_Zero-.jpg",
        name: "Run_Zero-안도현",
        isVideo: false,
      },
      {
        path: "https://cdn.discordapp.com/attachments/1082011696035541082/1082041373731074099/e1489bb59b3f7ef9.jpg",
        name: "윤진혁 일러스트",
        isVideo: false,
      },
      {
        path: "https://cdn.discordapp.com/attachments/1082011696035541082/1082041373986934784/1.jpg",
        name: "이윤혁 일러스트 1",
        isVideo: false,
      },
      {
        path: "https://cdn.discordapp.com/attachments/1082011696035541082/1082041374267932912/2.jpg",
        name: "이윤혁 일러스트 2",
        isVideo: false,
      },
      {
        path: "https://cdn.discordapp.com/attachments/1082011696035541082/1082041374565740655/cb1303bf33a2951b.jpg",
        name: "신수아 캐릭터 디자인",
        isVideo: false,
      },
      {
        url: "https://www.youtube.com/embed/05o7Q_ME00Y",
        path: "https://i.ytimg.com/vi/05o7Q_ME00Y/maxresdefault.jpg",
        name: "FallingRock (박세현, RG 김준서, 자의누리 안재민)",
        isVideo: true,
      },
      {
        url: "https://www.youtube.com/embed/fZZsn_c-cGo",
        path: "https://i.ytimg.com/vi/fZZsn_c-cGo/maxresdefault.jpg",
        name: "Zombie (안도현)",
        isVideo: true,
      },
      {
        url: "https://www.youtube.com/embed/DUM_NQ8An5o",
        path: "https://i.ytimg.com/vi/DUM_NQ8An5o/maxresdefault.jpg",
        name: "fx trail (박세현)",
        isVideo: true,
      },
      {
        url: "https://www.youtube.com/embed/FoJeQXCHgw0",
        path: "https://i.ytimg.com/vi/FoJeQXCHgw0/maxresdefault.jpg",
        name: "GUSSO (김유빈, 현동윤, 이윤혁)",
        isVideo: true,
      },
      {
        url: "https://www.youtube.com/embed/J1hhHgFddoI",
        path: "https://i.ytimg.com/vi/J1hhHgFddoI/maxresdefault.jpg",
        name: "야스오 키우기 (여준혁, 박민제, 김지성, 신수아, 박세현)",
        isVideo: true,
      },
      {
        url: "https://www.youtube.com/embed/Mua2VJsXCsI",
        path: "https://i.ytimg.com/vi/Mua2VJsXCsI/maxresdefault.jpg",
        name: "회피Lv 999 (안도현)",
        isVideo: true,
      },
      {
        url: "https://www.youtube.com/embed/V-Fto-LcwSY",
        path: "https://i.ytimg.com/vi/V-Fto-LcwSY/maxresdefault.jpg",
        name: "검 키우기 (방정연)",
        isVideo: true,
      },
      {
        url: "https://www.youtube.com/embed/wQ6WNqcxpEM",
        path: "https://i.ytimg.com/vi/wQ6WNqcxpEM/maxresdefault.jpg",
        name: "DrwB (박세현, RG 김준서, 자의누리 안재민)",
        isVideo: true,
      },

    ],
  },
  {
    id: 7,
    name: "RG",
    department: "소프트웨어과",
    desc: "게임 개발 전문 동아리",
    logo: "/images/rg.svg",
    field: "게임 디자이너",
    member: 3,
    site: "https://sunrin-rg.github.io",
    sns: {
      instagram: "https://www.instagram.com/sunrin_rg/",
      facebook: "https://www.facebook.com/sunrintrg",
    },
    awards: [
      "2018년",
      "",
      "선린인터넷고등학교 디지털 콘텐츠 경진대회 응용 부문 대상 | 이OO",
      "제 4회 하이톤 : 아이스 최우수상 | 이OO",
      "",
      "2019년",
      "",
      "선린인터넷고등학교 해커톤 금상 | 김OO 이OO 조OO 홍OO",
      "",
      "2020년",
      "",
      "선린인터넷고등학교 모바일 콘텐츠 경진대회 동상 | 이OO",
      "청강문화산업대학교 실기대전 입상 | 김OO",
      "",
      "2021년",
      "",
      "선린인터넷고등학교 해커톤 은상 | 김OO",
      "",
      "2022년",
      "",
      "한국코드페어 고등부 SW공모전 본선 16등 | 정한용",
      "IT분야 직업계고 게임계발대회 장려상 | 김기현 박신홍 장운지 정지훈",
      "GIGDC 중고등부 동상 | 김준서",
      "선린인터넷고등학교 해커톤 게임부문 동상 | 김기현 박신홍 정지훈",
      "선린인터넷고등학교 해커톤 게임부문 동상 | 유현우 김범수 이지윤 이하은",
      "선린인터넷고등학교 그래픽디자인 공모전 캐릭터 부문 금상 | 장운지",
      "선린인터넷고등학교 그래픽디자인 공모전 일러스트레이션 부문 금상 | 이유진",
    ],
    info: "선린인터넷고등학교 소프트웨어과 전공동아리 RG는 게임 개발 전문 동아리로 Unity엔진을 활용하여 단계별로 2D/3D과정을 배워나가며, 디자이너는 드로잉, UI/UX, 3D 등을 배우게됩니다. 또한 화목하고 활발한 분위기 속에서 선배들, 동기들과 함께하는 팀프로젝트를 진행하여 자체 게임을 제작하는 동아리입니다.",
    subColor: "#717faa",
    mainColor: "#2a2b59",
    textColor: "#ffffff",
    gallery: [
      {
        url: "https://www.youtube.com/embed/64PFjoTLDyE",
        path: "https://i.ytimg.com/vi/64PFjoTLDyE/maxresdefault.jpg",
        name: "마리컴 플레이 영상",
        isVideo: true,
      },
      {
        url: "https://www.youtube.com/embed/AJSY6L5m0eo",
        path: "https://i.ytimg.com/vi/AJSY6L5m0eo/maxresdefault.jpg",
        name: "the 13 플레이 영상",
        isVideo: true,
      },
      {
        url: "https://www.youtube.com/embed/PS5MJbitg7o",
        path: "https://i.ytimg.com/vi/PS5MJbitg7o/maxresdefault.jpg",
        name: "탈출해라! 지하수로 플레이 영상",
        isVideo: true,
      },
      {
        url: "https://www.youtube.com/embed/bgGP1SvgDF0",
        path: "https://i.ytimg.com/vi/bgGP1SvgDF0/maxresdefault.jpg",
        name: "LAST SWORD OF HOPE 플레이 영상",
        isVideo: true,
      },
      {
        url: "https://www.youtube.com/embed/jXM0HBws6aQ",
        path: "https://i.ytimg.com/vi/jXM0HBws6aQ/maxresdefault.jpg",
        name: "DrwB 플레이 영상",
        isVideo: true,
      },
      {
        url: "https://www.youtube.com/embed/wR74scHXi6E",
        path: "https://i.ytimg.com/vi/wR74scHXi6E/maxresdefault.jpg",
        name: "FallingRock 플레이 영상",
        isVideo: true,
      },
      {
        path: "https://cdn.discordapp.com/attachments/1082011708379365427/1082035048154406954/-_.jpg",
        name: "김범수 작품",
        isVideo: false,
      },
      {
        path: "https://cdn.discordapp.com/attachments/1082011708379365427/1082035048502542416/11016_1.jpg",
        name: "장운지 작품 1",
        isVideo: false,
      },
      {
        path: "https://cdn.discordapp.com/attachments/1082011708379365427/1082035048766775409/11016_3.jpg",
        name: "장운지 작품 2",
        isVideo: false,
      },
      {
        path: "https://cdn.discordapp.com/attachments/1082011708379365427/1082035049089740862/11019_1.jpg",
        name: "정지훈 작품",
        isVideo: false,
      },
      {
        path: "https://cdn.discordapp.com/attachments/1082011708379365427/1082035049437863997/11214_1.jpg",
        name: "이유진 작품 1",
        isVideo: false,
      },
      {
        path: "https://cdn.discordapp.com/attachments/1082011708379365427/1082035049806966835/11214_2.jpg",
        name: "이유진 작품 2",
        isVideo: false,
      },
      {
        path: "https://cdn.discordapp.com/attachments/1082011708379365427/1082035050125738064/11217_1.jpg",
        name: "이하은 작품 1",
        isVideo: false,
      },
      {
        path: "https://cdn.discordapp.com/attachments/1082011708379365427/1082035050482245722/11217_2.jpg",
        name: "이하은 작품 2",
        isVideo: false,
      },
      {
        path: "https://cdn.discordapp.com/attachments/1082011708379365427/1082035050805211286/11217_3.jpg",
        name: "이하은 작품 3",
        isVideo: false,
      },
    ],
  },
  {
    id: 8,
    name: "App:ple Pi",
    department: "소프트웨어과",
    desc: "앱 개발·창업 동아리",
    logo: "/images/apple.pi.svg",
    field: "UI/UX 디자이너",
    member: 3,
    site: "https://appplepi.com/",
    sns: {
      instagram: "https://www.instagram.com/appple.pi.official/",
      facebook: "https://www.facebook.com/app.plepi",
    },
    info: `애플파이는 선린인터넷고등학교의 교내  최우수 앱 개발 창업 동아리로, 안드로이드 앱 개발과 UI/UX 디자인을 중점으로 꾸준한 실적을 내고있습니다.
          또한, 화목하고 즐거운 분위기와 체계적인 커리큘럼으로 인해 선후배간의 교류가 높은 편으로, 신입생이더라도 교내외에서 다양한 경험을 쌓을 수 있는 동아리입니다.`,
    awards: [
      "2019",
      "모바일 콘텐츠 개발대회 [생활디자인] 부분 금상",
      "STA-C 최우수상",
      "",
      "2020",
      "모바일 콘텐츠 개발대회 [게임에셋/생활디자인/비디자인] 부문 금상",
      "디지털 콘텐츠 개발대회 생활 부문 금상",
      "선린 해커톤 생활 부문 금상",
      "",
      "2021",
      "모바일 콘텐츠 개발대회 [생활디자인] 부문 금상",
      "디지털 콘텐츠 개발대회 생활 부문 금상",
      "선린 해커톤 생활 부문 은상",
      "",
      "2022",
      "디지털 콘텐츠 개발대회 생활 부문 은상",
      "선린 해커톤 생활 부문 금상",
      "국제정보올림피아드 금상",
      "KOSA-MIDAS YOUNG TALENT CHALLENGE 은상",
    ],
    subColor: "#F32F31",
    mainColor: "#B52426",
    textColor: "#FFFFFF",
    gallery: [
      {
        path: "https://cdn.discordapp.com/attachments/1082010437396217946/1082044299849506826/AMS.png",
        name: "Achromatic Studio",
        isVideo: false,
      },
      {
        path: "https://cdn.discordapp.com/attachments/1082010437396217946/1082290653783924746/KakaoTalk_Photo_2023-03-06-22-14-37_001.png",
        name: "독도지킴이",
        isVideo: false,
      },
      {
        path: "https://cdn.discordapp.com/attachments/1082010437396217946/1082043421008613386/Animal_Mate.jpg",
        name: "애니멀 메이트",
        isVideo: false,
      },
      {
        path: "https://cdn.discordapp.com/attachments/1082010437396217946/1082043421558046720/HAN_-_WUL.jpg",
        name: "HAN-WUL",
        isVideo: false,
      },
      {
        path: "https://cdn.discordapp.com/attachments/1082010437396217946/1082043421964902540/Membeder.jpg",
        name: "Membeder",
        isVideo: false,
      },
      {
        path: "https://cdn.discordapp.com/attachments/1082010437396217946/1082043422388539513/NONE_.jpg",
        name: "NONE:",
        isVideo: false,
      },
      {
        path: "https://cdn.discordapp.com/attachments/1082010437396217946/1082043422946369696/Pick.jpg",
        name: "Pick",
        isVideo: false,
      },
      {
        path: "https://cdn.discordapp.com/attachments/1082010437396217946/1082043424011714561/Pin_It.jpg",
        name: "PIN IT",
        isVideo: false,
      },
      {
        path: "https://cdn.discordapp.com/attachments/1082010437396217946/1082043424565383339/Plantoday.jpg",
        name: "Plantoday",
        isVideo: false,
      },
      {
        path: "https://cdn.discordapp.com/attachments/1082010437396217946/1082043425190322287/Quicket.jpg",
        name: "Quicket",
        isVideo: false,
      },
      {
        path: "https://cdn.discordapp.com/attachments/1082010437396217946/1082043425962074193/Sleeping_Coffee.jpg",
        name: "SleepingCoffee",
        isVideo: false,
      },
      {
        path: "https://cdn.discordapp.com/attachments/1082010437396217946/1082290654165614622/KakaoTalk_Photo_2023-03-06-22-14-38_002.png",
        name: "입심이",
        isVideo: false,
      },
      {
        path: "https://cdn.discordapp.com/attachments/1082010437396217946/1082044301669838868/3269ca1fc5f8d61b.jpg",
        name: "두드림",
        isVideo: false,
      },
      {
        path: "https://cdn.discordapp.com/attachments/1082010437396217946/1082292344281383032/fc41040cf1007a62.jpg",
        name: "DORELAE",
        isVideo: false,
      },
      {
        path: "https://cdn.discordapp.com/attachments/1082010437396217946/1082046081610825928/Frame_1.png",
        name: "무드등",
        isVideo: false,
      },
    ],
  },
  {
    id: 9,
    name: "자의누리",
    department: "콘텐츠디자인과",
    desc: "모션그래픽 제작 전문 동아리",
    logo: "/images/junr.svg",
    field: "영상 편집, 그래픽 디자인",
    member: 8,
    site: "-",
    sns: {
      instagram: "https://www.instagram.com/junr_official/",
      facebook: "https://www.facebook.com/centerworld",
    },
    awards: [
      "2019년",
      "",
      "선린인터넷고등학교 영상공모전 영화 부문 금상 | 문은빈",
      "선린인터넷고등학교 그래픽디자인공모전 대상 | 이충혁",
      "선린인터넷고등학교 블로그 포트폴리오 공모전 금상 | 이충혁",
      "선린인터넷고등학교 그래픽디자인공모전 모션그래픽 부문 대상 | 한지선",
      "선린인터넷고등학교 영상공모전 광고부문 금상 | 박은후",
      "선린인터넷고등학교 그래픽디자인공모전 모션그래픽 부문 금상 | 김희서",
      "선린인터넷고등학교 그래픽디자인공모전 모션그래픽 부문 대상 | 김지원",
      "선린인터넷고등학교 그래픽디자인공모전 포스터 부문 금상 | 김지원",
      "선린인터넷고등학교 영상공모전 대상 | 김지원",
      "",
      "2021년",
      "",
      "선린인터넷고등학교 영상공모전 금상 | 전계승",
      "선린인터넷고등학교 영상공모전 금상 | 이성민",
      "",
      "2022년",
      "",
      "대한민국 청소년 디자인 전람회 특선 | 서정화",
    ],
    info: "선린인터넷고등학교 콘텐츠디자인과 전공동아리 자의누리는 모션그래픽 제작 전문 동아리로 After Effect를 통해 타이포그래피, 모션그래픽을 전문적으로 배울 수 있는 동아리입니다. 또한 자기주도적인 수업 분위기와, 상시 열려있는 질문 방과 1대 1 멘토링 형식의 수업방식을 통해 부원들을 교육하고 있습니다. 틀에 갇힌 작업물이 아닌 자유로운 작업물 제작을 추구하는 동아리입니다.",
    mainColor: "#5490A3",
    subColor: "#8CBCD0",
    textColor: "#FFFFFF",
    gallery: [
      {
        url: "https://www.youtube.com/embed/1K-MJi2hZzM",
        path: "https://i.ytimg.com/vi/1K-MJi2hZzM/maxresdefault.jpg",
        name: "BIG Naughty (서동현) - Lovey Dovey",
        isVideo: true,
      },
      {
        url: "https://www.youtube.com/embed/6EyFny2xiJA",
        path: "https://i.ytimg.com/vi/6EyFny2xiJA/maxresdefault.jpg",
        name: "EPISODE 1",
        isVideo: true,
      },
      {
        url: "https://www.youtube.com/embed/FI0wa-qlywk",
        path: "https://i.ytimg.com/vi/FI0wa-qlywk/maxresdefault.jpg",
        name: "pH1 - You Don't Know My Name 1",
        isVideo: true,
      },
      {
        url: "https://www.youtube.com/embed/qL_Fmj_Qlu8",
        path: "https://i.ytimg.com/vi/qL_Fmj_Qlu8/maxresdefault.jpg",
        name: "2022 선린인터넷고등학교 콘텐츠디자인과 홍보영상",
        isVideo: true,
      },
      {
        url: "https://www.youtube.com/embed/vT9RBUAgL6A",
        path: "https://i.ytimg.com/vi/vT9RBUAgL6A/maxresdefault.jpg",
        name: "pH1 - You Don't Know My Name 2",
        isVideo: true,
      },
      {
        url: "https://www.youtube.com/embed/vv62foThuH4",
        path: "https://i.ytimg.com/vi/vv62foThuH4/maxresdefault.jpg",
        name: "빈첸 - 허물",
        isVideo: true,
      },
      {
        url: "https://www.youtube.com/embed/1XbzhVHZF50",
        path: "https://i.ytimg.com/vi/1XbzhVHZF50/maxresdefault.jpg",
        name: "낭만도시 파주 Teaser",
        isVideo: true,
      },
      {
        url: "https://www.youtube.com/embed/CicRLPrnCuA",
        path: "https://i.ytimg.com/vi/CicRLPrnCuA/maxresdefault.jpg",
        name: "pH1 - Like Me",
        isVideo: true,
      },
      {
        url: "https://www.youtube.com/embed/EBn85QMNRlY",
        path: "https://i.ytimg.com/vi/EBn85QMNRlY/maxresdefault.jpg",
        name: "중독",
        isVideo: true,
      },
      {
        url: "https://www.youtube.com/embed/EorTYP4RlSo",
        path: "https://i.ytimg.com/vi/EorTYP4RlSo/maxresdefault.jpg",
        name: "Zion.T - No Make UP",
        isVideo: true,
      },
      {
        url: "https://www.youtube.com/embed/Ivw54ZR9nFo",
        path: "https://i.ytimg.com/vi/Ivw54ZR9nFo/maxresdefault.jpg",
        name: "pH1 - You Don't Know My Name (MATISSE404)",
        isVideo: true,
      },
      {
        url: "https://www.youtube.com/embed/YW5loZ1iYq4",
        path: "https://i.ytimg.com/vi/YW5loZ1iYq4/maxresdefault.jpg",
        name: "황세현 (h3hyeon) - 인스타그만",
        isVideo: true,
      },
      {
        url: "https://www.youtube.com/embed/cxUfoni11HI",
        path: "https://i.ytimg.com/vi/cxUfoni11HI/maxresdefault.jpg",
        name: "EMOTIONAL GALAXY",
        isVideo: true,
      },
      {
        url: "https://www.youtube.com/embed/n0J-MiAn41c",
        path: "https://i.ytimg.com/vi/n0J-MiAn41c/maxresdefault.jpg",
        name: "숨셔(SUMSHER) - 마주칠 때마다",
        isVideo: true,
      },
      {
        url: "https://www.youtube.com/embed/pxf7ZJ4x8PM",
        path: "https://i.ytimg.com/vi/pxf7ZJ4x8PM/maxresdefault.jpg",
        name: "미스터 션샤인 타이틀시퀀스",
        isVideo: true,
      },
    ],
  },
  {
    id: 10,
    name: "아우내",
    department: "콘텐츠디자인과",
    desc: "영상·영화 일반 동아리",
    logo: "/images/aun.svg",
    field: "영상 편집, 그래픽 디자인",
    member: 8,
    site: "-",
    sns: {
      instagram: "http://instagram.com/aun0fficial/",
      facebook: "https://www.facebook.com/LiveActionFilmSociety",
    },
    awards: [
      "2019년",
      "",
      "선린인터넷고등학교 영상공모전 광고 부문 동상",
      "",
      "2020년",
      "",
      "선린인터넷고등학교 영상공모전 단편영화 부문 금상",
      "",
      "2021년",
      "",
      "선린인터넷고등학교 영상공모전 단편영화 부문 대상",
      "선린인터넷고등학교 영상공모전 광고 부문 은상",
    ],
    info: "선린인터넷고등학교의 실사 영상/영화 동아리 아우내는 '아름다운 우리의 내일을 위하여' 라는 뜻을 가지고 활동하는 동아리로 단편영화 자체제작 프로젝트를 통해 자신만의 영화를 제작할 수 있습니다.",
    subColor: "#b2b2b2",
    mainColor: "#000000",
    textColor: "#ffffff",
    gallery: [
      {
        url: "https://www.youtube.com/embed/E7Bd-_zRF_0",
        path: "https://i.ytimg.com/vi/E7Bd-_zRF_0/maxresdefault.jpg",
        name: "등하불명",
        isVideo: true,
      },
      {
        url: "https://www.youtube.com/embed/qQ0H1Vzoyn4",
        path: "https://i.ytimg.com/vi/qQ0H1Vzoyn4/maxresdefault.jpg",
        name: "아우내에서 그럭저럭 지내요",
        isVideo: true,
      },
    ],
  },
];

const clubList: ClubList = clubInfo;

export default clubList;
