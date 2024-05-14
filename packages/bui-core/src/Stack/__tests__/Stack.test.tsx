import React from 'react';
import { render, isConformant } from 'testing';
import Stack from '../Stack';
import { Divider } from '../../Divider';

describe('Stack', () => {
  isConformant({
    Component: Stack,
    displayName: 'BuiStack',
    className: 'bui-stack',
    skip: ['component-has-root-ref', 'component-has-displayname'],
  });

  it.each(['flex-start', 'center', 'flex-end', 'stretch', 'baseline'] as const)(
    'render with alignItems',
    (item) => {
      const { getByText } = render(<Stack alignItems={item}>alignItems</Stack>);
      expect(getByText('alignItems')).toHaveStyle(`--align-items: ${item}`);
    },
  );

  it.each([
    'flex-start',
    'center',
    'flex-end',
    'space-between',
    'space-around',
    'space-evenly',
  ] as const)('render with justifyContent', (item) => {
    const { getByText } = render(
      <Stack justifyContent={item}>justifyContent</Stack>,
    );
    expect(getByText('justifyContent')).toHaveStyle(
      `--justify-content: ${item}`,
    );
  });

  it('render with spacing', () => {
    const { getByText } = render(<Stack spacing="4px">spacing</Stack>);
    expect(getByText('spacing')).toHaveStyle('--spacing: 4px');
  });

  it.each(['row', 'row-reverse', 'column', 'column-reverse'] as const)(
    'render with Direction',
    (direction) => {
      const { getByText } = render(
        <Stack direction={direction}>direction</Stack>,
      );
      expect(getByText('direction')).toHaveStyle(
        `--flex-direction: ${direction}`,
      );
    },
  );
  it('render with divider', () => {
    render(
      <Stack direction="column" divider={<Divider />}>
        <div>divider1</div>
        <div>dividier2</div>
      </Stack>,
    );
    expect(document.querySelector('.bui-divider')).toBeTruthy();
  });
});
