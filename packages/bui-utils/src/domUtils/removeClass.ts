const replaceClassName = (origClass: string, classToRemove: string) => {
  return origClass
    .replace(new RegExp(`(^|\\s)${classToRemove}(?:\\s|$)`, 'g'), '$1')
    .replace(/\s+/g, ' ')
    .replace(/^\s*|\s*$/g, '');
};

// eslint-disable-next-line import/prefer-default-export
export const removeClass = (
  element: Element | SVGElement,
  className: string,
) => {
  if (element.classList) {
    element.classList.remove(className);
  } else if (typeof element.className === 'string') {
    (element as Element).className = replaceClassName(
      element.className,
      className,
    );
  } else {
    element.setAttribute(
      'class',
      replaceClassName(
        (element.className && element.className.baseVal) || '',
        className,
      ),
    );
  }
};
