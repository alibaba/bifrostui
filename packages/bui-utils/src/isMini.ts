const isMini = typeof process.env.TARO_ENV === 'string';
const isWeapp = process.env.TARO_ENV === 'weapp';
const isAlipay = process.env.TARO_ENV === 'alipay';

export { isMini, isWeapp, isAlipay };
