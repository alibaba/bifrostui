import React from 'react';
import { render, isConformant, userEvent, screen } from 'testing';
import Alert from '../Alert';

describe('Alert', () => {
  isConformant({
    Component: Alert,
    displayName: 'BuiAlert',
    className: 'bui-alert',
  });
  describe('prop: message', () => {
    it('should  render message current', () => {
      const component = <Alert>warning alert!!</Alert>;
      const { container } = render(component);
      expect(container).toHaveTextContent('warning alert!!');
    });
  });
  describe('prop: type', () => {
    it('should render primary by default', () => {
      const component = <Alert>warning alert!!</Alert>;
      const { container } = render(component);
      expect(container.firstChild).toHaveClass('bui-alert-standard-primary');
    });
    it.each(['danger', 'info', 'warning', 'success', 'primary'] as const)(
      'should render type current',
      (color) => {
        const component = <Alert color={color}>warning alert!!</Alert>;
        const { container } = render(component);
        expect(container.firstChild).toHaveClass(`bui-alert-standard-${color}`);
      },
    );
  });
  describe('prop: icon', () => {
    it('should  render icon default', () => {
      const component = <Alert>warning alert!!</Alert>;
      render(component);
      expect(document.querySelector('.bui-alert-default-icon')).toBeTruthy();
    });
    it('should not render icon when it is false', () => {
      const component = <Alert icon={false}>warning alert!!</Alert>;
      render(component);
      expect(document.querySelector('.bui-icon')).toBeFalsy();
    });
    it('should render icon current', () => {
      const component = <Alert icon="close">warning alert!!</Alert>;
      const { container } = render(component);
      expect(container).toHaveTextContent('close');
    });
    it('should render icon current in miniapp', async () => {
      vi.resetModules();
      vi.doMock('@bifrostui/utils', async () => {
        const actual = await vi.importActual('@bifrostui/utils');
        return {
          ...actual,
          isMini: true,
        };
      });
      const { default: MiniAlert } = await import('../index');
      const component = <MiniAlert>warning alert!!</MiniAlert>;
      const { container } = render(component);
      expect(container.querySelector('.bui-alert-default-icon')).toBeTruthy();
    });
    it('should render icon color current in miniapp', async () => {
      vi.resetModules();
      vi.doMock('@bifrostui/utils', async () => {
        const actual = await vi.importActual('@bifrostui/utils');
        return {
          ...actual,
          isMini: true,
        };
      });
      const { default: MiniAlert } = await import('../index');
      const component = <MiniAlert color="success">warning alert!!</MiniAlert>;
      const { container } = render(component);
      expect(
        container.querySelector('.bui-alert-standard-success'),
      ).toBeTruthy();
    });
    it('should render with marquee current', () => {
      render(
        <Alert marquee>
          【开始】首部海外维和题材商业大片高燃来袭，聚焦中国维和警察鲜为人知的生死时刻！【结束】
        </Alert>,
      );
      expect(document.querySelector('.bui-alert-marquee')).toBeTruthy();
    });
  });

  describe('action', () => {
    it('should close alert when click close', async () => {
      const onClose = vi.fn();
      render(<Alert onClose={onClose}>warning alert!!</Alert>);
      await userEvent.click(document.querySelector('.bui-alert-action'));
      expect(onClose).toHaveBeenCalled();
    });
    it('should render action current', () => {
      const component = <Alert action={<div>close</div>}>warning alert</Alert>;
      render(component);
      expect(screen.getByText(/close/)).toBeTruthy();
      expect(document.querySelector('.bui-alert-action')).toBeTruthy();
    });
  });
});
