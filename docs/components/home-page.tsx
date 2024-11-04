import React from 'react';
import { Button } from '@bifrostui/react';
import { usePrefersColor, useNavigate } from 'dumi';
import { ToTopOutlinedIcon } from '@bifrostui/icons';
import Tpp from './user-icon/tpp';
import Dm from './user-icon/dm';
import './home-page.less';

export default () => {
  const [color] = usePrefersColor();
  const navigate = useNavigate();
  return (
    <div className="main-container">
      <div className="main-head">
        <div>
          <img
            className="main-logo"
            src="https://gw.alicdn.com/imgextra/i2/O1CN01Bqi4MA1USNSLdER5C_!!6000000002516-55-tps-190-90.svg"
          />
          <div className="main-desc">一款简洁灵活的跨端组件库</div>
          <Button
            size="large"
            variant="contained"
            className="start-btn"
            endIcon={<ToTopOutlinedIcon />}
            onClick={() => {
              navigate('/guide/introduce', { replace: true });
            }}
          >
            开始体验
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
          <div className="introduce-title">一码多端</div>
          <div className="introduce-desc">同时支持H5和小程序</div>
        </div>
        <div className="introduce-item">
          <img
            className="introduce-icon"
            src="https://gw.alicdn.com/imgextra/i4/O1CN01fvzf101QVLTsWkcrR_!!6000000001981-2-tps-160-160.png"
          />
          <div className="introduce-title">高定制</div>
          <div className="introduce-desc">
            一致优雅的API帮助您快速创造新主题
          </div>
        </div>
        <div className="introduce-item">
          <img
            className="introduce-icon"
            src="https://gw.alicdn.com/imgextra/i4/O1CN01CCqAR028qGfPoYba0_!!6000000007983-2-tps-160-160.png"
          />
          <div className="introduce-title">高可用</div>
          <div className="introduce-desc">完善的配套，丰富的组件，开箱即用</div>
        </div>
      </div>
      <div className="main-resource">
        <div className="resource-item">
          <div className="resource-title">设计语言</div>
          <div className="resource-content">
            <div>
              <div className="content-title">设计语言</div>
              <div className="content-desc">
                基于阿里影业的众多业务实践沉淀的设计语言和设计系统
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
                查看详情
              </Button>
            </div>
            <img
              className="content-img"
              src="https://gw.alicdn.com/imgextra/i3/O1CN016LMfu721Ngdq3YrzQ_!!6000000006973-2-tps-600-600.png"
            />
          </div>
        </div>
        <div className="resource-item">
          <div className="resource-title">组件列表</div>
          <div className="resource-content">
            <div>
              <div className="content-title">组件列表</div>
              <div className="content-desc">
                一致的API、丰富的组件帮助您快速构建前端应用
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
                查看详情
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
        <div className="users-title">谁在使用</div>
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
