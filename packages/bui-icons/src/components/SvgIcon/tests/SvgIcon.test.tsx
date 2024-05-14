import React from 'react';
import { render, screen } from 'testing';
import { ISvgIconProps } from '../../../SvgIcon.types';
import SvgIcon from '../SvgIcon';

describe('SvgIcon', () => {
  it('should render children by default', () => {
    const { container } = render(<SvgIcon color="primary">child</SvgIcon>);
    const svgIcon = container.querySelector('.bui-svg-icon');
    expect(svgIcon).toBeInTheDocument();
  });
  it('should render correctly with custom prop', () => {
    const props: ISvgIconProps = {
      className: 'custom-icon',
      children: 'test icon',
      component: 'div',
      color: 'primary',
      htmlColor: '#eee',
      style: { fontSize: '24px' },
    };
    const { container } = render(<SvgIcon {...props} />);
    const svgIcon = container.querySelector('.bui-svg-icon');
    expect(svgIcon).toBeInTheDocument();
    expect(svgIcon).toHaveClass('custom-icon');
    expect(svgIcon).toHaveStyle({ fontSize: '24px' });
  });
  it('should render svg component with string children using dangerouslySetInnerHTML', () => {
    const props: ISvgIconProps = {
      component: 'svg',
      children: '<path d="M10 10" />',
    };

    const { container } = render(<SvgIcon {...props} />);
    const svgIcon = container.querySelector('.bui-svg-icon');
    expect(svgIcon).toBeInTheDocument();
    expect(svgIcon).toContainHTML('<path d="M10 10" />');
  });

  it('should render ReactNode children with svg dom mode', () => {
    const props: ISvgIconProps = {
      component: 'svg',
      children: <span>test</span>,
    };

    const { container } = render(<SvgIcon {...props} />);
    const svgIcon = container.querySelector('.bui-svg-icon');
    expect(svgIcon).toBeInTheDocument();
    expect(screen.getByText('test')).toBeInTheDocument();
  });
  it('should render null when component is not equal to svg', () => {
    const props: ISvgIconProps = {
      component: 'div',
      children: <span>test</span>,
    };
    const { container } = render(<SvgIcon {...props} color="primary" />);
    const svgIcon = container.querySelector('.bui-svg-icon');
    expect(svgIcon).not.toBeInTheDocument();
  });

  it('when children is children should render element width backgroundImage', () => {
    const props: ISvgIconProps = {
      component: 'div',
      children:
        '<path d="M48 20c2.2 0 4 1.8 4 4v20h20c2.2 0 4 1.8 4 4s-1.8 4-4 4H52v20c0 2.2-1.8 4-4 4s-4-1.8-4-4V52H24c-2.2 0-4-1.8-4-4s1.8-4 4-4h20V24c0-2.2 1.8-4 4-4z"/>',
    };
    jest.spyOn(console, 'warn').mockImplementation();
    render(<SvgIcon {...props} data-testid="test-icon" />);
    expect(screen.getByTestId('test-icon').nodeName).toEqual('DIV');
  });
});
