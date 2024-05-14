import { OverrideProps } from '@bifrostui/types';
import React, { CSSProperties } from 'react';

/**
 * 当前时间
 */
export type CurrentTime = {
  /**
   * 剩余总时间，单位毫秒
   */
  total: number;
  /**
   * 剩余年数
   */
  years: string;
  /**
   * 剩余月数
   */
  months: string;
  /**
   * 剩余天数
   */
  days: string;
  /**
   * 剩余小时
   */
  hours: string;
  /**
   * 剩余分钟
   */
  minutes: string;
  /**
   * 剩余秒数
   */
  seconds: string;
  /**
   * 剩余整数天余下的小时
   */
  hoursWithDays: string;
};

export type CountdownProps<
  D extends React.ElementType = 'div',
  P = {},
> = OverrideProps<
  {
    props: P & {
      /**
       * 倒计时剩余时间，是一个时间段（单位毫秒），与endTimestamp互斥
       * @default 0
       */
      remainingTime?: number;
      /**
       * 倒计时结束时间戳，是一个时间点，与remainingTime互斥，优先级比remainingTime高
       */
      endTimestamp?: number;
      /**
       * 服务器时间戳，是一个时间点，可与endTimestamp配合使用
       */
      serverTimestamp?: number;
      /**
       * 格式化倒计时展示，参考 dayjs
       * @default HH:mm:ss
       */
      format?: string;
      /**
       * 时间单位的样式
       */
      unitStyle?: CSSProperties;
      /**
       * 倒计时位数的样式，用于定制第一、第二位数字的样式
       */
      valueStyle?: CSSProperties[];
      /**
       * 各时间区块的样式，用于定制各个时间块的样式，若第一、第二位数字的样式相同，则可替代valueStyle
       */
      timeSliceStyle?: CSSProperties;
      /**
       * 倒计时完成时触发
       */
      onFinish?: () => void;
      /**
       * 倒计时时间变化时触发
       */
      onChange?: (data: { value: number }) => void;
      /**
       * 自定义render内容
       */
      renderContent?: (data: CurrentTime) => React.ReactNode;
    };
    defaultComponent: D;
  },
  D
>;

/**
 * 倒计时格式化后分割项
 */
interface CountdownItem {
  /**
   * 倒计时切片字符串
   */
  valStr: string;
  /**
   * 倒计时切片数值
   */
  value: number;
  /**
   * 倒计时切片是否为零
   */
  isZero: boolean;
  /**
   * 倒计时切片单位
   */
  unitText: string;
}

/**
 * 格式化倒计时
 */
export type FormatedCountdown = {
  /**
   * 剩余总时间
   */
  timeStr: string;
  /**
   * 倒计时切片数组
   */
  timeList: CountdownItem[];
};
