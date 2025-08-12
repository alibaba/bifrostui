import React, { useState, useRef, useEffect } from 'react';
import {
  Stack,
  Button,
  Tabs,
  Tab,
  TabPanel,
  Card,
  CardHeader,
  CardContent,
  Radio,
  RadioGroup,
  Calendar,
  List,
  ListItem,
  ListItemContent,
  ListItemExtra,
  Switch,
  Slider,
  Select,
  SelectOption,
} from '@bifrostui/react';
import { EditFilledIcon } from '@bifrostui/icons';
import { useThemeDesigner } from './useThemeDesigner';
import {
  THEME_MODE,
  VARS_TYPE,
  BUILTIN_THEME,
  builtinThemes,
  tabList,
} from './constants';
import { Typography } from './Typography';
import CopyThemeModal from './CopyThemeModal';
import EditThemeDrawer from './EditThemeDrawer';
import componentThemeData from '../../constants/theme-vars.json';
import './index.less';

const ThemeDesigner = () => {
  const {
    drawerOpen,
    builtinTheme,
    currentEditVars,
    themeMode,
    customThemes,
    varsType,
    copyTheme,
    resetAll,
    changeToBuiltin,
    setThemeMode,
    saveThemeVars,
    closeEdit,
    goComponentPage,
    setCurrentEditVars,
    handleThemeChange,
    handleVarsTypeChange,
  } = useThemeDesigner();
  const [openModal, setOpenModal] = useState(false);
  const [activeTab, setActiveTab] = useState(tabList[0].index);
  const [selectOptions, setSelectOptions] = useState([]);
  const themeCode = useRef('');

  useEffect(() => {
    if (themeMode === THEME_MODE.CUSTOM) {
      const options = Object.keys(componentThemeData)
        .filter((name) => !!componentThemeData[name].cssVars)
        .map((name) => ({
          label: name,
          value: name,
        }));
      options.unshift({ label: '通用变量', value: VARS_TYPE.COMMON });
      setSelectOptions(options);
    }
  }, [themeMode]);

  const copyThemeCode = () => {
    themeCode.current = copyTheme();
    setOpenModal(true);
  };

  return (
    <div className="bui-theme-editor grid grid-cols-12">
      {/* 复制主题弹窗 */}
      <CopyThemeModal
        open={openModal}
        themeVars={themeCode.current}
        onClose={() => setOpenModal(false)}
      />
      {/* 主题变量编辑抽屉 */}
      <EditThemeDrawer
        open={drawerOpen}
        currentEditVars={currentEditVars}
        setCurrentEditVars={setCurrentEditVars}
        closeEdit={closeEdit}
        saveThemeVars={saveThemeVars}
      />

      <div className="grid col-span-12 operate-container">
        <div className="theme-mode">
          <Button
            className={themeMode === THEME_MODE.BUILTIN && 'is-active'}
            style={{ marginRight: '4px' }}
            variant="text"
            size="large"
            onClick={changeToBuiltin}
          >
            内置主题
          </Button>
          <Button
            className={themeMode === THEME_MODE.CUSTOM && 'is-active'}
            variant="text"
            size="large"
            onClick={(e) => {
              handleThemeChange(e, { value: BUILTIN_THEME.DEFAULT });
              setThemeMode(THEME_MODE.CUSTOM);
            }}
          >
            自定义主题
          </Button>
        </div>
        {!!customThemes.length && (
          <div className="theme-mode no-border">
            <Button
              style={{ marginRight: '4px' }}
              size="large"
              onClick={resetAll}
            >
              重置全部
            </Button>
            <Button size="large" onClick={copyThemeCode}>
              复制代码
            </Button>
          </div>
        )}
      </div>

      <div className="theme-editor-menu grid col-span-12">
        {themeMode === THEME_MODE.BUILTIN ? (
          <RadioGroup value={builtinTheme} onChange={handleThemeChange}>
            {builtinThemes.map((item) => (
              <Radio key={item.value} value={item.value}>
                {item.text}
              </Radio>
            ))}
          </RadioGroup>
        ) : (
          <div className="custom-wrapper">
            <Select
              placeholder="选择组件/通用变量"
              onChange={handleVarsTypeChange}
            >
              {selectOptions.map((item) => (
                <SelectOption
                  key={item.value}
                  value={item.value}
                  label={item.label}
                />
              ))}
            </Select>
            {!!varsType && (
              <>
                <div title="修改变量">
                  <EditFilledIcon
                    className="edit-icon"
                    color="primary"
                    onClick={(e) => {
                      handleVarsTypeChange(e, { value: currentEditVars.name });
                    }}
                  />
                </div>
                {customThemes.includes(currentEditVars.name) &&
                  varsType !== VARS_TYPE.COMMON && (
                    <div
                      className="go-component"
                      onClick={() => {
                        goComponentPage(currentEditVars.name);
                      }}
                    >
                      前往查看
                    </div>
                  )}
              </>
            )}
          </div>
        )}
      </div>

      <Typography />

      <div className="grid col-span-2">
        <Card className="card-center">
          <CardContent>
            <Stack direction="column" spacing="9px">
              <Button>浅色</Button>
              <Button color="dark">深色</Button>
              <Button variant="contained">浅色</Button>
              <Button color="dark" variant="contained">
                深色
              </Button>
              <Button variant="contained" color="primary">
                购票
              </Button>
              <Button variant="contained" color="warning">
                想看
              </Button>
              <Button variant="contained" color="info">
                预售
              </Button>
            </Stack>
          </CardContent>
        </Card>
      </div>

      <div className="grid col-span-6">
        <Card className="card-center">
          <CardContent>
            <Stack
              className="editor-preview-column"
              direction="column"
              spacing="9px"
            >
              <Button size="small" variant="contained" color="primary">
                小按钮
              </Button>
              <Button size="medium" variant="contained" color="primary">
                中按钮
              </Button>
              <Button size="large" variant="contained" color="primary">
                大按钮
              </Button>

              <Button size="full" variant="contained" color="primary">
                通栏按钮
              </Button>
            </Stack>
          </CardContent>
        </Card>
      </div>

      <div className="grid col-span-8">
        <Card>
          <CardContent>
            <Tabs style={{ marginBottom: '12px' }} value={activeTab}>
              {tabList.map((item) => (
                <Tab
                  key={item.index}
                  index={item.index}
                  onClick={() => setActiveTab(item.index)}
                >
                  {item.title}
                </Tab>
              ))}
            </Tabs>
            {tabList.map((item) => (
              <TabPanel key={item.index} value={activeTab} index={item.index}>
                {item.title}
              </TabPanel>
            ))}
          </CardContent>
        </Card>
      </div>

      <div className="grid col-span-4">
        <Card className="card-center">
          <CardContent>
            <Slider defaultValue={37.5} tipVisible />
          </CardContent>
        </Card>
      </div>

      <div className="grid col-span-4">
        <Card>
          <CardHeader title="显示与亮度" />
          <CardContent>
            <List size="medium">
              <ListItem>
                <ListItemContent primary="自动" />
                <ListItemExtra>
                  <Switch color="primary" defaultChecked />
                </ListItemExtra>
              </ListItem>
              <ListItem>
                <ListItemContent primary="粗体文本" />
                <ListItemExtra>
                  <Switch color="primary" />
                </ListItemExtra>
              </ListItem>
              <ListItem>
                <ListItemContent primary="原彩显示" />
                <ListItemExtra>
                  <Switch color="primary" />
                </ListItemExtra>
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </div>

      <div className="grid col-span-8">
        <Card>
          <Calendar />
        </Card>
      </div>
    </div>
  );
};

export default ThemeDesigner;
