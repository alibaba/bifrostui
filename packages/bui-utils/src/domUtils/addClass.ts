const hasClass = (element: Element | SVGElement, className: string) => {
  if (element.classList)
    return !!className && element.classList.contains(className);

  return (
    ` ${element.className.baseVal || element.className} `.indexOf(
      ` ${className} `,
    ) !== -1
  );
};

// eslint-disable-next-line import/prefer-default-export
export const addClass = (element: Element | SVGElement, className: string) => {
  if (element.classList) {
    element.classList.add(className);
  } else if (!hasClass(element, className))
    if (typeof element.className === 'string') {
      (element as Element).className = `${element.className} ${className}`;
    } else {
      element.setAttribute(
        'class',
        `${(element.className && element.className.baseVal) || ''} ${className}`,
      );
    }
};
