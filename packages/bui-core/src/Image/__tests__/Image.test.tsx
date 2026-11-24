import * as React from 'react';
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
    const image = container.querySelector('img');
    fireEvent.load(image);
    await waitFor(() => {
      expect(wrapper).toContainElement(image);
      expect(image).toHaveAttribute('src', src);
    });
  });
  it('can enable placeholder', async () => {
    const { container } = render(
      <Image src={src} fit="contain" width={100} height={100} placeholder />,
    );
    expect(container.querySelector('.default-holder')).not.toBeNull();
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
      const { container } = render(
        <Image src={src} fit={fit} width={100} height={100} />,
      );
      expect(container.querySelector('img').style.objectFit === fit);
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
    const onLoad = vi.fn();
    const { container } = render(
      <Image
        src={src}
        fit="contain"
        width={100}
        height={100}
        onLoad={onLoad}
      />,
    );
    fireEvent.load(container.querySelector('img'));
    expect(onLoad).toHaveBeenCalled();
  });
  it('should call onError callback', async () => {
    const onError = vi.fn();
    const { container } = render(
      <Image
        src={src}
        fit="contain"
        width={100}
        height={100}
        onError={onError}
      />,
    );
    fireEvent.error(container.querySelector('img'));
    expect(onError).toHaveBeenCalled();
  });

  it('should call onClick', async () => {
    const onClick = vi.fn();
    const { container } = render(
      <Image
        src={src}
        fit="contain"
        width={100}
        height={100}
        onClick={onClick}
      />,
    );
    await userEvent.click(container.querySelector('img'));
    expect(onClick).toHaveBeenCalled();
  });

  it('supports vanilla lazyload', async () => {
    global.HTMLImageElement.prototype.loading = 'eager';
    const { container } = render(
      <Image src={src} fit="contain" width={100} height={100} lazy />,
    );
    expect(container.querySelector('img')).toHaveAttribute('loading', 'lazy');
  });
});
