import Taro from '@tarojs/taro';

const handleScroll = (
  elementName: string,
  setScrollTop: (scrollTop: number) => void,
  index: number,
) => {
  const query = Taro.createSelectorQuery();

  query.select(elementName)?.fields({
    computedStyle: ['height', 'paddingTop', 'paddingBottom'],
  });
  query.exec((res) => {
    if (!res[0]) return;
    const { height, paddingTop, paddingBottom } = res[0];

    function parsePx(str?: string): number {
      return str ? parseFloat(str.replace(/px$/, '')) : 0;
    }
    const targetHeight =
      parsePx(height) + parsePx(paddingTop) + parsePx(paddingBottom);
    setScrollTop(index * targetHeight);
  });
};

export default handleScroll;
