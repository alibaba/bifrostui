// eslint-disable-next-line import/prefer-default-export
export const isFunction = (fn) => {
  return fn && {}.toString.call(fn) === '[object Function]';
};
