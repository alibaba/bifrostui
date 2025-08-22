import { OverrideProps } from '@bifrostui/types';
import React, { Ref, TextareaHTMLAttributes } from 'react';

interface AutoSizeType {
  minHeight?: number;
  maxHeight?: number;
}

export type TextAreaProps<
  D extends React.ElementType = 'div',
  P = {},
> = OverrideProps<
  {
    props: P & {
      /**
       * 输入框内容，受控时使用
       */
      value?: string;
      /**
       * 默认输入框内容，非受控时使用
       */
      defaultValue?: string;
      /**
       * 内部<textarea>标签的标准属性
       */
      textareaProps?: TextareaHTMLAttributes<HTMLTextAreaElement>;
      /**
       * 内部<textarea>标签的ref
       */
      textareaRef?: Ref<HTMLTextAreaElement>;
      /**
       * 内部<textarea>名称标识
       */
      name?: string;
      /**
       * 占位内容
       */
      placeholder?: string;
      /**
       * 是否禁用，默认为false
       */
      disabled?: boolean;
      /**
       * 文本框行数，默认为2
       */
      rows?: number;
      /**
       * 内容最大长度
       */
      maxLength?: number;
      /**
       * 自适应内容高度，可设置为 true | false 或对象：{
       *     minHeight?: number;
       *     maxHeight?: number;
       *   }，单位为px，默认为false
       * 支持H5、微信小程序，支付宝小程序不支持
       */
      autoSize?: boolean | AutoSizeType;
      /**
       * 是否自动聚焦，默认为false
       */
      autoFocus?: boolean;
      /**
       * 展示字数，默认为false
       */
      showCount?: boolean;
      /**
       * 文本框内容变化时的回调
       */
      onChange?: (
        e: React.ChangeEvent<HTMLTextAreaElement>,
        data: {
          value: string;
        },
      ) => void;
      /**
       * 无障碍功能：ARIA标签
       */
      'aria-label'?: string;
      /**
       * 无障碍功能：描述元素的详细信息
       */
      'aria-describedby'?: string;
      /**
       * 无障碍功能：是否隐藏元素
       */
      'aria-hidden'?: boolean;
      /**
       * 无障碍功能：元素在无障碍树中的细节程度
       */
      'aria-details'?: string;
      /**
       * 无障碍功能：当前元素是否为必填
       */
      'aria-required'?: boolean;
      /**
       * 无障碍功能：当前元素是否为只读
       */
      'aria-readonly'?: boolean;
      /**
       * 无障碍功能：多行文本框的行数
       */
      'aria-rowcount'?: number;
      /**
       * 无障碍功能：多行文本框的第一行索引
       */
      'aria-rowindex'?: number;
      /**
       * 无障碍功能：多行文本框的列数
       */
      'aria-colcount'?: number;
    };
    defaultComponent: D;
  },
  D
>;
