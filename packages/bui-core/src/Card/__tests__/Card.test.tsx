import React, { ReactElement } from 'react';
import { render, isConformant, fireEvent } from 'testing';
import { CloseIcon } from '@bifrostui/icons';
import Card, { CardContent, CardHeader } from '../index';
import { CardProps } from '../Card.types';

const setup = (props: CardProps, children: ReactElement) => {
  const component = render(
    <Card data-testid="card" {...props}>
      {children}
    </Card>,
  );
  const tag = component.getByTestId('card');
  return {
    tag,
    ...component,
  };
};

describe('Card', () => {
  isConformant({
    Component: Card,
    displayName: 'BuiCard',
    className: 'bui-card',
    skip: ['component-has-root-ref', 'component-has-displayname'],
  });
  it('should, render children', () => {
    const { getByTestId } = setup(
      {},
      <>
        <CardHeader data-testid="card-header" title="卡片标题" />
        <CardContent data-testid="card-content">卡片正文</CardContent>
      </>,
    );
    expect(getByTestId('card-header')).toHaveTextContent('卡片标题');
    expect(getByTestId('card-content')).toHaveTextContent('卡片正文');
  });
  describe('CardHeader', () => {
    it('should render title current', () => {
      const { getByTestId } = render(
        <>
          <Card>
            <CardHeader data-testid="title-1" title="卡片标题" />
          </Card>
          <Card>
            <CardHeader data-testid="title-2" title={<div>卡片标题</div>} />
          </Card>
        </>,
      );
      expect(getByTestId('title-1')).toHaveTextContent('卡片标题');
      expect(getByTestId('title-2')).toHaveTextContent('卡片标题');
    });
    it('should render subtitle current', () => {
      const { getByTestId } = render(
        <>
          <Card>
            <CardHeader
              data-testid="subtitle-1"
              title="标题"
              subtitle="卡片副标题"
            />
          </Card>
          <Card>
            <CardHeader
              data-testid="subtitle-2"
              title="标题"
              subtitle={<div>卡片副标题</div>}
            />
          </Card>
        </>,
      );
      expect(getByTestId('subtitle-1')).toHaveTextContent('卡片副标题');
      expect(getByTestId('subtitle-2')).toHaveTextContent('卡片副标题');
    });
    it('should render extra current', () => {
      const { getByTestId } = render(
        <>
          <Card>
            <CardHeader data-testid="extra-1" extra=">" title="title1" />
          </Card>
          <Card>
            <CardHeader
              data-testid="extra-2"
              title="title2"
              extra={<div>close</div>}
            />
          </Card>
        </>,
      );
      expect(getByTestId('extra-1')).toHaveTextContent('>');
      expect(getByTestId('extra-2')).toHaveTextContent('close');
    });
    describe('prop: endIcon', () => {
      it('should has default endIcon', () => {
        const { container } = render(
          <Card>
            <CardHeader
              title="卡片标题"
              onClick={() => {
                console.log('hello');
              }}
            />
          </Card>,
        );
        const element = container.getElementsByClassName('bui-svg-icon');
        expect(element.length).toBe(1);
      });
      it('should not render endIcon when it is false', () => {
        const { container } = render(
          <Card>
            <CardHeader title="卡片标题" endIcon="false" />
          </Card>,
        );
        const element = container.getElementsByClassName('bui-svg-icon');
        expect(element.length).toBe(0);
      });
      it('should render endIcon current', () => {
        const { container } = render(
          <Card>
            <CardHeader
              title="卡片标题"
              endIcon={<CloseIcon className="close-icon" />}
            />
          </Card>,
        );
        const element = container.getElementsByClassName('close-icon');
        expect(element.length).toBe(1);
      });
    });
    describe('action', () => {
      it('title click', () => {
        const onClick = jest.fn();
        const { getByTestId } = render(
          <Card>
            <CardHeader
              data-testid="t-header"
              title="卡片标题"
              onClick={onClick}
            />
          </Card>,
        );

        fireEvent.click(getByTestId('t-header'));
        expect(onClick).toHaveBeenCalled();
      });
      // it('extra click', () => {
      //   const onClick = jest.fn();
      //   const { getByTestId } = render(
      //     <Card>
      //       <CardHeader
      //         data-testid="t-header"
      //         title="卡片标题"
      //         extra="close"
      //         onExtraClick={onClick}
      //       />
      //     </Card>,
      //   );

      //   fireEvent.click(getByTestId('t-header').lastChild);
      //   expect(onClick).toHaveBeenCalled();
      // });
    });
  });
});
