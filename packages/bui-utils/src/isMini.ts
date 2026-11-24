const isMini =
  typeof process.env.TARO_ENV === 'string' &&
  ['weapp', 'swan', 'alipay', 'tt', 'qq', 'jd'].includes(process.env.TARO_ENV);
const isWeapp = process.env.TARO_ENV === 'weapp';
const isAlipay = process.env.TARO_ENV === 'alipay';
const isTT = process.env.TARO_ENV === 'tt';

export { isMini, isWeapp, isAlipay, isTT };

export const isMiniapp = () => {
  return isMini;
};
