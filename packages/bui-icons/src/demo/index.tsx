import React, { useEffect, useState } from 'react';
import { Input, Modal, Radio, RadioGroup } from '@bifrostui/react';
import * as iconComponents from '../components';
import './index.less';

const allIconsMap = {};
const allIcons = Object.keys(iconComponents)
  .sort()
  .map((importName) => {
    let theme;
    if (importName.indexOf('Outlined') !== -1) {
      theme = 'Outlined';
    } else {
      theme = 'Filled';
    }

    const name = importName.replace(/(Outlined|Filled|)$/, '');
    const icon = {
      importName,
      name,
      theme,
      Component: iconComponents[importName],
    };
    allIconsMap[importName] = icon;
    return icon;
  });

const IconDemo = () => {
  const [search, setSearch] = useState('');
  const [theme, setTheme] = useState('');
  const [icons, setIcons] = useState(allIcons);
  const [open, setOpen] = useState(false);
  const [currentIcon, setCurrentIcon] = useState(null);

  useEffect(() => {
    setIcons(
      allIcons.filter((item) => {
        const category = theme?.toLowerCase() || '';
        const componentName = item.importName?.toLowerCase() || '';

        if (category === 'all') {
          return item;
        }

        if (
          category === 'others' &&
          componentName.indexOf('filled') === -1 &&
          componentName.indexOf('outlined') === -1
        ) {
          return item;
        }

        if (componentName.indexOf(category) !== -1) {
          return item;
        }
        return false;
      }),
    );
  }, [theme]);

  useEffect(() => {
    setIcons(
      allIcons.filter((item) => {
        if (
          item.importName?.toLowerCase().indexOf(search.toLowerCase()) !== -1
        ) {
          return item;
        }
        return false;
      }),
    );
  }, [search]);

  return (
    <div className="icon-container">
      <RadioGroup
        value={theme}
        onChange={(_, data) => {
          setTheme(data.value);
        }}
      >
        <Radio value="All">All</Radio>
        <Radio value="Filled">Filled</Radio>
        <Radio value="Outlined">Outlined</Radio>
        <Radio value="Others">Others</Radio>
      </RadioGroup>
      <div className="icon-panel">
        <Input
          placeholder="Search icons"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        {search ? (
          <div className="icon-container-hint">
            {icons.length} matching results
          </div>
        ) : null}
        <div className="icon-container-content">
          {icons.map((icon) => {
            return (
              <div
                className="icon-item"
                key={icon.importName}
                title={icon.importName}
                onClick={() => {
                  setCurrentIcon(icon);
                  setOpen(true);
                }}
              >
                <icon.Component size="large" />
                <div className="icon-name">{icon.importName}</div>
              </div>
            );
          })}
        </div>
      </div>
      <Modal
        className="icon-container-modal"
        open={open}
        onClose={() => {
          setOpen(false);
          setCurrentIcon(null);
        }}
      >
        <div className="modal-content">
          <div> {currentIcon?.importName}</div>
          <div>
            import {`{ ${currentIcon?.importName} }`} from
            &apos;@bifrostui/react&apos;;
          </div>
          {currentIcon ? (
            <currentIcon.Component style={{ fontSize: '100px' }} />
          ) : null}
        </div>
      </Modal>
    </div>
  );
};

export default IconDemo;
