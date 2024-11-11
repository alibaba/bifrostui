/* eslint-disable react/display-name */
import React from 'react';
import { Button } from '@bifrostui/react';
import { usePrefersColor, useNavigate, useIntl, useLocale } from 'dumi';
import { ToTopOutlinedIcon } from '@bifrostui/icons';
import Tpp from './user-icon/tpp';
import Dm from './user-icon/dm';
import './index.less';
import locales from './locales';

export default () => {
  const [color] = usePrefersColor();
  const { locale } = useIntl();
  const current = locale === 'zh-CN' ? 'zhCN' : 'enUS';
  const navigate = useNavigate();
  return (
    <div className="main-container home-page">
      <div className="main-head">
        <div>
          <img
            className="main-logo"
            src="https://gw.alicdn.com/imgextra/i2/O1CN01Bqi4MA1USNSLdER5C_!!6000000002516-55-tps-190-90.svg"
          />
          <div className="main-desc">{locales[current].description}</div>
          <Button
            size="large"
            variant="contained"
            className="start-btn"
            endIcon={<ToTopOutlinedIcon />}
            onClick={() => {
              navigate('/guide/introduce', { replace: true });
            }}
          >
            {locales[current].start}
          </Button>
        </div>
        <img
          className="head-img"
          src="https://gw.alicdn.com/imgextra/i3/O1CN018hn1121UWUwJyUdB0_!!6000000002525-2-tps-960-960.png"
        />
      </div>
      <div className="main-introduce">
        <div className="introduce-item">
          <img
            className="introduce-icon"
            src="https://gw.alicdn.com/imgextra/i1/O1CN01y4iaZr1aLP2g7R9xm_!!6000000003313-2-tps-160-160.png"
          />
          <div className="introduce-title">
            {locales[current].features[0].title}
          </div>
          <div className="introduce-desc">
            {locales[current].features[0].desc}
          </div>
        </div>
        <div className="introduce-item">
          <img
            className="introduce-icon"
            src="https://gw.alicdn.com/imgextra/i4/O1CN01fvzf101QVLTsWkcrR_!!6000000001981-2-tps-160-160.png"
          />
          <div className="introduce-title">
            {locales[current].features[1].title}
          </div>
          <div className="introduce-desc">
            {locales[current].features[1].desc}
          </div>
        </div>
        <div className="introduce-item">
          <img
            className="introduce-icon"
            src="https://gw.alicdn.com/imgextra/i4/O1CN01CCqAR028qGfPoYba0_!!6000000007983-2-tps-160-160.png"
          />
          <div className="introduce-title">
            {locales[current].features[2].title}
          </div>
          <div className="introduce-desc">
            {locales[current].features[2].desc}
          </div>
        </div>
      </div>
      <div className="main-resource">
        <div className="resource-item">
          <div className="resource-title">
            {locales[current].subTitle[0].title}
          </div>
          <div className="resource-content">
            <div>
              <div className="content-title">
                {locales[current].subTitle[0].title}
              </div>
              <div className="content-desc">
                {locales[current].subTitle[0].desc}
              </div>
              <Button
                size="large"
                variant="contained"
                style={{ '--bg-color': '#2356df', '--text-color': '#fff' }}
                endIcon={<ToTopOutlinedIcon />}
                onClick={() => {
                  navigate('/design/colors', { replace: true });
                }}
              >
                {locales[current].subTitle[0].btn}
              </Button>
            </div>
            <img
              className="content-img"
              src="https://gw.alicdn.com/imgextra/i3/O1CN016LMfu721Ngdq3YrzQ_!!6000000006973-2-tps-600-600.png"
            />
          </div>
        </div>
        <div className="resource-item">
          <div className="resource-title">
            {locales[current].subTitle[1].title}
          </div>
          <div className="resource-content">
            <div>
              <div className="content-title">
                {locales[current].subTitle[1].title}
              </div>
              <div className="content-desc">
                {locales[current].subTitle[1].desc}
              </div>
              <Button
                size="large"
                variant="contained"
                style={{ '--bg-color': '#2356df', '--text-color': '#fff' }}
                endIcon={<ToTopOutlinedIcon />}
                onClick={() => {
                  navigate('/cores/button', { replace: true });
                }}
              >
                {locales[current].subTitle[1].btn}
              </Button>
            </div>
            <img
              className="content-img"
              src="https://gw.alicdn.com/imgextra/i3/O1CN01DJfWf71xAcssFhdD6_!!6000000006403-2-tps-600-600.png"
            />
          </div>
        </div>
      </div>

      <div className="main-users">
        <div className="users-title">{locales[current].subTitle[2].title}</div>
        <div className="user-list">
          <Tpp color={color === 'light' ? '#eee' : '#5F6672'} />
          <Dm color={color === 'light' ? '#eee' : '#5F6672'} />
        </div>
      </div>
      <div className="main-footer">
        Open-source MIT Licensed | Copyright © 2023-present Powered by BUI
      </div>
    </div>
  );
};
