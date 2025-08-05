import React from 'react';
import { fireEvent, render, isConformant } from 'testing';
import Tag from '../Tag';

describe('Tag', () => {
  const rootClass = 'bui-tag';

  isConformant({
    className: rootClass,
    Component: Tag,
    displayName: 'BuiTag',
  });

  it('should render default content', () => {
    const component = render(<Tag>default</Tag>);
    const tag = component.container;
    expect(tag).toHaveTextContent('default');
  });

  it('should be clickable', () => {
    const fakeClick = vi.fn();
    const { container } = render(<Tag onClick={fakeClick} />);
    const tag = container.querySelectorAll(`.${rootClass}`)[0];
    fireEvent.click(tag);
    expect(fakeClick).toBeCalled();
  });

  it('should have color className', () => {
    const colors = ['primary', 'info', 'success', 'warning', 'danger'] as const;

    colors.forEach((color) => {
      const { container } = render(
        <Tag color={color as (typeof colors)[number]} />,
      );
      expect(container.firstChild).toHaveClass(`${rootClass}-${color}`);
    });
  });

  it('should render with htmlColor currently when outlined', () => {
    const htmlColor = '#666666';
    const { container } = render(
      <Tag variant="outlined" htmlColor={htmlColor} />,
    );
    const target = container.querySelector<HTMLDivElement>(`.${rootClass}`);
    expect(container.querySelector(`.${rootClass}`)).toHaveStyle(
      `color: ${htmlColor}`,
    );
    expect(target?.style['border-color']).toContain('0.4');
  });

  it('should render with htmlColor currently when contained', () => {
    const htmlColor = '#666666';
    const { container } = render(
      <Tag variant="contained" htmlColor={htmlColor} />,
    );
    expect(container.querySelector(`.${rootClass}`)).toHaveStyle(
      `background-color: ${htmlColor}`,
    );
  });
  it('should render with htmlColor currently  when light', () => {
    const htmlColor = '#666666';
    const { container } = render(
      <Tag variant="subtle" htmlColor={htmlColor} />,
    );
    const target = container.querySelector<HTMLDivElement>(`.${rootClass}`);
    expect(container.querySelector(`.${rootClass}`)).toHaveStyle(
      `color: ${htmlColor}`,
    );
    expect(target?.style['background-color']).toContain('0.3');
  });

  it.each(['rgb(102,102,102)', 'rgba(102,102,102,0.5)'] as const)(
    'should render rgba/rgb htmlColor currently',
    (color) => {
      const { container } = render(
        <Tag variant="outlined" htmlColor={color} />,
      );
      const target = container.querySelector<HTMLDivElement>(`.${rootClass}`);
      expect(target?.style['border-color']).toContain('0.4');
      expect(container.querySelector(`.${rootClass}`)).toHaveStyle(
        `color: ${color}`,
      );
    },
  );

  it('should have variant className', () => {
    const variants = ['outlined', 'contained'] as const;

    variants.forEach((variant) => {
      const { container } = render(
        <Tag variant={variant as (typeof variants)[number]} />,
      );
      expect(container.firstChild).toHaveClass(`${rootClass}-${variant}`);
    });
  });
});
