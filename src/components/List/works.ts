export interface worksProps {
  title: string;
  description: string;
  url: string;
  thumbnailUrl: string;
  tags: Array<string>;

  className?: string;
}

const works: worksProps[] = [{
  title: '커플릿 Couplete',
  description: '지금, 사랑하는 사람과 함께 하세요.',
  url: '#',
  thumbnailUrl: require('../../common/images/thumb-couplete.png'),
  tags: ['UI', 'Mobile App', 'Branding', 'Contents'],
}, {
  title: '핀다 Finda',
  description: '금융상품 검색의 시작',
  url: '#',
  thumbnailUrl: require('../../common/images/thumb-finda.jpg'),
  tags: ['UI', 'Responsive Web', 'React JS'],
}, {
  title: '러브데이 Lovedays',
  description: '오늘 우리, 사랑한지 며칠쨰?',
  url: '#',
  thumbnailUrl: require('../../common/images/thumb-lovedays.png'),
  tags: ['UI', 'Responsive Web', 'React JS'],
}, {
  title: '따옴 Ddaom',
  description: '삶에 힘이 되는 작은 말들',
  url: '#',
  thumbnailUrl: require('../../common/images/thumb-ddaom.png'),
  tags: ['UI', 'Chrome Extension', 'Angular JS'],
}]

export default works;
