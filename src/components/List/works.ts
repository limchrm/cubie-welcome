export interface worksProps {
  title: string;
  description: string;
  url: string;
  thumbnailUrl: string;
  tags: Array<string>;
  className?: string;
}

const works: worksProps[] = [{
  title: 'Couplete',
  description: '지금, 사랑하는 사람과 함꼐 하세요.',
  url: '#',
  thumbnailUrl: 'https://i.ytimg.com/vi/xkxjNZComZg/maxresdefault.jpg',
  tags: ['UI', 'Mobile App', 'Branding', 'Contents'],
}, {
  title: 'Finda',
  description: '금융상품 검색의 시작',
  url: '#',
  thumbnailUrl: 'https://i.ytimg.com/vi/xkxjNZComZg/maxresdefault.jpg',
  tags: ['UI', 'Responsive Web', 'React JS'],
}]

export default works;
