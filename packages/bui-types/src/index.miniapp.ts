/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { ITouchEvent } from '@tarojs/components';

/**
 * Remove properties `K` from `T`.
 * Distributive for union types.
 */
export type DistributiveOmit<T, K extends keyof any> = T extends any
  ? Omit<T, K>
  : never;

export interface ICommonProps {
  className?: string;
  style?: React.CSSProperties;
}

export interface IOverridableTypeMap {
  // eslint-disable-next-line @typescript-eslint/ban-types
  props: {};
  defaultComponent: React.ElementType;
}

export type BaseProps<M extends IOverridableTypeMap> = M['props'] &
  ICommonProps;

export type OverrideProps<
  M extends IOverridableTypeMap,
  C extends React.ElementType,
> = BaseProps<M> &
  DistributiveOmit<React.ComponentPropsWithRef<C>, keyof BaseProps<M>>;

export type StandardProps<
  C,
  Removals extends keyof C = never,
> = DistributiveOmit<C, Removals> & {
  ref?: C extends { ref?: infer RefType } ? RefType : React.Ref<unknown>;
  className?: string;
  style?: React.CSSProperties;
};
export type IClickEvent = ITouchEvent | React.MouseEvent<HTMLElement>;

/** Button元素小程序专属的 open-type 的合法值 */
interface ButtonOpenTypeKeys {
  weapp: {
    /** 打开客服会话，如果用户在会话中点击消息卡片后返回小程序，可以从回调中获得具体信息
     * @see https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/customer-message/customer-message.html
     */
    contact: any;
    /** 触发用户转发，使用前建议先阅读使用指引
     * @see https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/share.html#%E4%BD%BF%E7%94%A8%E6%8C%87%E5%BC%95
     */
    share: any;
    /** 获取用户手机号，可以从回调中获取到用户信息
     * @see https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/getPhoneNumber.html
     */
    getPhoneNumber: any;
    /**
     * 手机号实时验证，向用户申请，并在用户同意后，快速填写和实时验证手机号。（*小程序插件中不能使用*）
     * @see https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/getRealtimePhoneNumber.html
     */
    getRealtimePhoneNumber: any;
    /** 获取用户信息，可以从回调中获取到用户信息 */
    getUserInfo: any;
    /** 打开APP，可以通过 app-parameter 属性设定向APP传的参数
     * @see https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/launchApp.html
     */
    launchApp: any;
    /** 打开授权设置页 */
    openSetting: any;
    /** 打开“意见反馈”页面，用户可提交反馈内容并上传日志，开发者可以登录小程序管理后台后进入左侧菜单“客服反馈”页面获取到反馈内容 */
    feedback: any;
    /** 获取用户头像，可以从回调中获得具体信息 */
    chooseAvatar: any;
    /**
     * 用户同意隐私协议按钮。可通过 bindagreeprivacyauthorization 监听用户同意隐私协议事件
     */
    agreePrivacyAuthorization: any;
    /**
     * 从基础库 2.32.3 版本起，隐私同意按钮支持与手机号快速验证组件耦合使用，调用方式为：
     * <button open-type="getPhoneNumber|agreePrivacyAuthorization">
     */
    ['getPhoneNumber|agreePrivacyAuthorization']: any;
    /**
     * 从基础库 2.32.3 版本起，支持隐私同意按钮与手机号实时验证组件耦合使用，调用方式为：
     * <button open-type="getRealtimePhoneNumber|agreePrivacyAuthorization">
     */
    ['getRealtimePhoneNumber|agreePrivacyAuthorization']: any;
    /**
     * 从基础库 2.32.3 版本起，支持隐私同意按钮与获取用户信息组件耦合使用，调用方式为：
     * <button open-type="getUserInfo|agreePrivacyAuthorization">
     */
    ['getUserInfo|agreePrivacyAuthorization']: any;
  };
  /** 支付宝小程序专属的 open-type 合法值
   * @see https://opendocs.alipay.com/mini/component/button
   */
  alipay: {
    /** 触发 自定义分享 */
    share: any;
    /** 支持小程序授权 */
    getAuthorize: any;
    /** 分享到通讯录好友 */
    contactShare: any;
    /** 关注生活号 */
    lifestyle: any;
  };
  /** QQ 小程序专属的 open-type 合法值
   * @see https://q.qq.com/wiki/develop/miniprogram/component/form/button.html
   */
  qq: {
    /** 触发用户转发，使用前建议先阅读使用指引
     * @see https://q.qq.com/wiki/develop/miniprogram/frame/open_ability/open_share.html#%E8%BD%AC%E5%8F%91-2
     */
    share: any;
    /** 获取用户信息，可以从 onGetUserInfo 回调中获取到用户信息 */
    getUserInfo: any;
    /** 打开APP，可以通过 app-parameter 属性设定向APP传的参数
     * @see https://q.qq.com/wiki/develop/miniprogram/frame/open_ability/open_app.html
     */
    launchApp: any;
    /** 打开授权设置页 */
    openSetting: any;
    /** 呼起吐个槽反馈页面，开发者可以到官网查看反馈 */
    feedback: any;
    /** 呼起群资料卡页面，可以通过 group-id 属性设定需要打开的群资料卡的群号，同时 app.json 中必须配置 groupIdList（数量不超过 10 个），表明可以打开群资料卡的群号 */
    openGroupProfile: any;
    /** 添加好友，对方需要通过该小程序进行授权，允许被加好友后才能调用成功[用户授权](https://q.qq.com/wiki/develop/miniprogram/frame/open_ability/open_userinfo.html#%E6%8E%88%E6%9D%83) */
    addFriend: any;
    /** 添加彩签，点击后添加状态有用户提示，无回调 */
    addColorSign: any;
    /** 打开公众号资料卡，可以通过 public-id 属性设定需要打开的公众号资料卡的号码，同时 app.json 中必须配置 publicIdList（目前只能配置 1 个），表明可以打开的公众号资料卡的号码 */
    openPublicProfile: any;
    /** 添加群应用（只有管理员或群主有权操作，建议先调用 qq.getGroupInfo 获取当前用户是否为管理员，如果是管理员才显示该按钮），添加后给button绑定 onAddGroupApp 事件接收回调数据。 */
    addGroupApp: any;
    /** 在自定义开放数据域组件中,向指定好友发起分享据 */
    shareMessageToFriend: any;
  };
  /** TT 小程序专属的 open-type 合法值
   * @see https://developer.open-douyin.com/docs/resource/zh-CN/mini-app/develop/component/list/button/#open-type-%E7%9A%84%E5%90%88%E6%B3%95%E5%80%BC
   */
  tt: {
    /** 触发用户转发, 可以配合 data-channel 属性来设置分享的 channel，具体请参考 ShareParam */
    share: any;
    /** 获取用户手机号，可以从 bindgetphonenumber 回调中获取到用户信息，详情请参见获取手机号 */
    getPhoneNumber: any;
    /** 跳转到抖音IM客服，详情请参见抖音IM客服能力 */
    im: any;
    /** 跳转到抖音平台客服，详情请参见平台客服能力 */
    platformIm: any;
    /** 跳转视频播放页，详情请参见跳转视频播放页 */
    navigateToVideoView: any;
    /** 跳转抖音号个人页，详情请参见跳转抖音号个人页 */
    openAwemeUserProfile: any;
    /** 跳转抖音直播间，详情请参见跳转抖音直播间 */
    openWebcastRoom: any;
    /** 写入系统日历，详情请参见写入系统日历 */
    addCalendarEvent: any;
    /** 添加到桌面，详情请参见添加到桌面 */
    addShortcut: any;
    /** 加群，详情请参见加群 */
    joinGroup: any;
    /** 私信，详情请参见私信 */
    privateMessage: any;
    /** 主动授权私信，详情请参见主动授权私信 */
    authorizePrivateMessage: any;
  };
}
export type ButtonOpenType =
  | keyof ButtonOpenTypeKeys['weapp']
  | keyof ButtonOpenTypeKeys['alipay']
  | keyof ButtonOpenTypeKeys['qq']
  | keyof ButtonOpenTypeKeys['tt'];
