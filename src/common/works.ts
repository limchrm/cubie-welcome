export interface worksProps {
  title: string;
  description: string;
  startDate?: string,
  endDate?: string,
  belongTo?: string,
  workedBy?: string,
  type: string,
  tags: Array<string>;
  detailUrl?: string;
  workUrl?: string;
  thumbnailUrl?: string;
  BIUrl?: string;
  className?: string;
}

const works: worksProps[] = [{
  title: '커플릿',
  description: '지금, 사랑하는 사람과 함께 하세요.',
  startDate: '2013/09',
  endDate: '2015/11',
  belongTo: '원더래빗(주)',
  workedBy: 'company',
  type: 'Mobile App',
  tags: ['UI', 'Branding', 'Contents'],
  detailUrl: '/works/couplete',
  workUrl: 'http://couplete.me',
  thumbnailUrl: require('./images/thumb-couplete.png'),
  BIUrl: require('./images/bi-finda.svg'),
}, {
  title: '핀다 Finda',
  description: '금융상품 검색의 시작',
  startDate: '2016/01',
  endDate: '2017/03',
  belongTo: '(주)핀다',
  workedBy: 'company',
  type: 'Responsive Web',
  tags: ['UI', 'React JS'],
  detailUrl: '/works/finda',
  workUrl: 'https://www.finda.co.kr',
  thumbnailUrl: require('./images/thumb-finda.jpg'),
  BIUrl: require('./images/bi-finda.svg'),
}, {
  title: '러브데이',
  description: '오늘 우리, 사랑한지 며칠쨰?',
  startDate: '2015/07',
  endDate: '2015/11',
  belongTo: '원더래빗(주)',
  workedBy: 'company',
  type: 'Mobile App',
  tags: ['UI'],
  detailUrl: '/works/lovedays',
  workUrl: 'https://play.google.com/store/apps/details?id=com.wonderabbit.lovedays',
  thumbnailUrl: require('./images/thumb-lovedays.png'),
  BIUrl: require('./images/bi-finda.svg'),
}, {
  title: '따옴',
  description: '삶에 힘이 되는 작은 말들',
  startDate: '2015/10',
  endDate: '2015/10',
  belongTo: '개인 작업',
  workedBy: 'personal',
  type: 'Chrome Extension',
  tags: ['UI', 'Angular JS'],
  detailUrl: '/works/ddaom',
  workUrl: 'https://chrome.google.com/webstore/detail/%EB%94%B0%EC%98%B4/jghdlfphhceakekbhfdoohoaoomhgoac?hl=ko',
  thumbnailUrl: require('./images/thumb-ddaom.png'),
  BIUrl: require('./images/bi-finda.svg'),
}]

export default works;
