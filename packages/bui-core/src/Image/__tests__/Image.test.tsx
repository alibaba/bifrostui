import React from 'react';
import { fireEvent, render, screen, userEvent } from 'testing';
import { waitFor } from '@testing-library/react';
import Image from '../index';

describe('Image', () => {
  const classPrefix = 'bui-image';
  const src =
    'https://gw.alicdn.com/i2/O1CN01D7yqW229UZMB5eh00_!!6000000008071-0-alipicbeacon.jpg_960x960Q90s100.jpg_.webp';
  it('renders correctly', async () => {
    const { container } = render(
      <Image src={src} fit="contain" width={100} height={100} />,
    );
    const [wrapper] = [...container.getElementsByClassName(classPrefix)];
    const image = screen.getByRole('img');
    fireEvent.load(screen.getByRole('img'));
    await waitFor(() => {
      expect(wrapper).toContainElement(image);
      expect(image).toHaveAttribute('src', src);
    });
  });
  it('can enable placeholder', async () => {
    const { container } = render(
      <Image src={src} fit="contain" width={100} height={100} placeholder />,
    );
    expect(
      container.querySelector(`.${classPrefix}-default-icon-item`),
    ).not.toBeNull();
  });

  it.each(['contain', 'cover', 'fill', 'none', 'scale-down'])(
    'renders with different fit modes',
    async (
      fit:
        | 'contain'
        | 'cover'
        | 'fill'
        | 'none'
        | 'scale-down'
        | 'widthFix'
        | 'heightFix',
    ) => {
      render(<Image src={src} fit={fit} width={100} height={100} />);
      expect(screen.getByRole('img').style.objectFit === fit);
    },
  );

  it('has placeholder', async () => {
    const placeholder = <div data-testid="test-placeholder" />;
    render(
      <Image
        src="https://not.exists.image/"
        fit="contain"
        width={100}
        height={100}
        placeholder={placeholder}
      />,
    );

    expect(screen.getByTestId('test-placeholder'));
  });
  it('should call onLoad callback', async () => {
    const onLoad = jest.fn();
    render(
      <Image
        src={src}
        fit="contain"
        width={100}
        height={100}
        onLoad={onLoad}
      />,
    );
    fireEvent.load(screen.getByRole('img'));
    expect(onLoad).toHaveBeenCalled();
  });
  it('should call onError callback', async () => {
    const onLoad = jest.fn();
    render(
      <Image
        src={src}
        fit="contain"
        width={100}
        height={100}
        onError={onLoad}
      />,
    );
    fireEvent.error(screen.getByRole('img'));
    expect(onLoad).toHaveBeenCalled();
  });
  it('should call onClick', async () => {
    const onLoad = jest.fn();
    render(
      <Image
        src={src}
        fit="contain"
        width={100}
        height={100}
        onClick={onLoad}
      />,
    );
    userEvent.click(screen.getByRole('img'));
    expect(onLoad).toHaveBeenCalled();
  });
  it('supports vanilla lazyload', async () => {
    global.HTMLImageElement.prototype.loading = 'eager';
    render(<Image src={src} fit="contain" width={100} height={100} lazy />);
    expect(screen.getByRole('img')).toHaveAttribute('loading', 'lazy');
  });
});
