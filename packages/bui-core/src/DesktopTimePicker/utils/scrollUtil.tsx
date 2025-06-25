const handleScroll = (
  elementName: string,
  setScrollTop: (scrollTop: number) => void,
  index?: number,
) => {
  const selectedLi = document.querySelector(elementName);
  setScrollTop((selectedLi as HTMLDivElement)?.offsetTop);
};

export default handleScroll;
