const isMini = typeof process.env.TARO_ENV === 'string';
const isWeapp = process.env.TARO_ENV === 'weapp';
const isAlipay = process.env.TARO_ENV === 'alipay';
const isTt = process.env.TARO_ENV === 'tt';

export { isMini, isWeapp, isAlipay, isTt };

export const isMiniapp = () => {
  return isMini;
};
