import React from 'react';
import { isConformant, render, userEvent } from 'testing';
import { Step, Steps } from '..';

describe('Steps', () => {
  const rootClass = 'bui-steps';
  const rootStepClass = 'bui-step';

  isConformant({
    className: rootClass,
    displayName: 'Steps',
    Component: Steps,
  });

  it('should be render with default props', () => {
    const { container } = render(
      <Steps>
        <Step key={1} />
        <Step key={2} />
      </Steps>,
    );
    const steps = container.querySelector(`.${rootClass}`);
    expect(steps).toHaveClass(`${rootClass}-vertical`);
    expect(steps.firstChild).toHaveClass(`${rootStepClass}-vertical`);
  });

  it('should be actived by current props', () => {
    const current = 2;
    const { container } = render(
      <Steps current={current}>
        <Step key={1} />
        <Step key={2} />
        <Step key={3} />
        <Step key={4} />
      </Steps>,
    );
    const stepList = container.querySelectorAll(`.${rootStepClass}`);
    stepList.forEach((item, index) => {
      if (index + 1 <= current) {
        expect(item.innerHTML).toContain('bui-step-line-finish');
      }
      if (index === current) {
        expect(item.innerHTML).toContain('bui-step-line-active');
      }
      if (index + 1 === stepList.length) {
        expect(item.innerHTML).toContain('bui-step-line-wait');
      }
    });
  });

  it('direction should be controled by `direction` property', () => {
    const direction = 'horizontal';
    const { container } = render(
      <Steps direction={direction}>
        <Step key={1} />
        <Step key={2} />
      </Steps>,
    );
    const steps = container.querySelector(`.${rootClass}`);
    expect(steps).toHaveClass(`${rootClass}-${direction}`);
    steps.childNodes.forEach((item) => {
      expect(item).toHaveClass(`${rootStepClass}-${direction}`);
    });
  });

  it('title and subtitle direction should be controled by `labelPlacement` property', () => {
    const labelPlacement = 'horizontal';
    const { container } = render(
      <Steps labelPlacement={labelPlacement}>
        <Step key={1} title="标题 1" subtitle="副标题 1" />
        <Step key={2} title="标题 2" subtitle="副标题 2" />
      </Steps>,
    );
    const stepList = container.querySelectorAll(`.${rootStepClass}`);
    stepList.forEach((item) => {
      expect(item).toHaveClass(`${rootStepClass}-label-${labelPlacement}`);
      expect(item.innerHTML).toContain(
        `${rootStepClass}-title-${labelPlacement}`,
      );
      expect(item.innerHTML).toContain(
        `${rootStepClass}-subtitle-${labelPlacement}`,
      );
    });
  });

  it('should be called when click step item', async () => {
    const fakeChange = vi.fn((e, { current }) => current);
    const { container } = render(
      <Steps onChange={fakeChange} current={1}>
        <Step key={1} />
        <Step key={2} />
        <Step key={3} />
      </Steps>,
    );
    const stepList = container.querySelectorAll(`.${rootStepClass}`);
    await userEvent.click(stepList[0]);
    expect(fakeChange).toHaveBeenCalled();
    expect(fakeChange).toHaveReturnedWith(1);
  });

  describe('Step', () => {
    it('should be render with default props', () => {
      const { container } = render(
        <Steps>
          <Step key={1} />
          <Step key={2} />
          <Step key={3} />
        </Steps>,
      );
      const steps = container.querySelector(`.${rootClass}`);
      const step = steps.firstChild;
      expect(steps.childElementCount).toBe(3);
      expect(step).toHaveClass(`${rootStepClass}-vertical`);
      expect(step).toHaveClass(`${rootStepClass}-label-horizontal`);
    });

    it('should be render description text when `description` property has value', () => {
      const { container } = render(
        <Steps>
          <Step key={1} description="这是一段描述文案" />
        </Steps>,
      );
      const step = container.querySelector(`.${rootStepClass}`);
      expect(step.innerHTML).toContain(`${rootStepClass}-desc`);
    });

    it('should be render by `icon` property', () => {
      const { container } = render(
        <Steps>
          <Step key={1} icon="1" />
          <Step key={1} icon="2" />
          <Step key={1} icon="3" />
        </Steps>,
      );
      const stepIcons = container.querySelectorAll(`.${rootStepClass}-icon`);
      stepIcons.forEach((item, index) => {
        expect(item).toHaveTextContent(`${index + 1}`);
      });
    });

    it('Step icon should render by icon property', () => {
      const { container } = render(
        <Steps>
          <Step key={1} icon="1" />
          <Step key={1} icon="2" />
          <Step key={1} icon="3" />
          <Step key={1} icon="4" />
        </Steps>,
      );
      const stepIcons = container.querySelectorAll(`.${rootStepClass}-icon`);
      stepIcons.forEach((item, index) => {
        expect(item).toHaveTextContent(`${index + 1}`);
      });
    });

    it('should be render title when `title` property has value', () => {
      const title = 'title';
      const { container } = render(
        <Steps>
          <Step key={1} title={title} />
        </Steps>,
      );
      const stepTitle = container.querySelector(`.${rootStepClass}-title`);
      expect(stepTitle).toHaveTextContent(title);
    });

    it('should be render subtitle when `subtitle` property has value', () => {
      const subtitle = 'subtitle';
      const { container } = render(
        <Steps>
          <Step key={1} subtitle={subtitle} />
        </Steps>,
      );
      const stepSubtitle = container.querySelector(
        `.${rootStepClass}-subtitle`,
      );
      expect(stepSubtitle).toHaveTextContent(subtitle);
    });

    it('Step status should be controled by `status` property', () => {
      const statusList = ['wait', 'active', 'finish', 'error'] as const;
      const { container } = render(
        <Steps>
          {statusList.map((item) => (
            <Step key={item} status={item as (typeof statusList)[number]} />
          ))}
        </Steps>,
      );
      const stepIcons = container.querySelectorAll(`.${rootStepClass}`);
      stepIcons.forEach((item, index) => {
        expect(item.firstChild).toHaveClass(
          `${rootStepClass}-line-${statusList[index]}`,
        );
      });
    });

    it('Step `status` property can change icon', () => {
      const { container } = render(
        <Steps current={2}>
          <Step key={1} />
          <Step key={1} status="error" />
          <Step key={1} />
        </Steps>,
      );
      const stepIcon = container.querySelectorAll(`.${rootStepClass}`)[1];
      expect(stepIcon.firstChild).toHaveClass(`${rootStepClass}-line-error`);
    });

    it('should be disabled when value of true', async () => {
      const fakeChange = vi.fn();
      const { container } = render(
        <Steps onChange={fakeChange}>
          <Step key={1} disabled />
          <Step key={2} />
        </Steps>,
      );
      const step = container.querySelectorAll(`.${rootStepClass}`);
      // 禁用的 step 不应该被点击，因为它有 pointer-events: none
      expect(step[0]).toHaveClass(`${rootStepClass}-disabled`);
      await userEvent.click(step[1]);
      expect(fakeChange).toHaveBeenCalled();
    });

    it('should be called when click Step item', async () => {
      const fakeClick = vi.fn((e, { current }) => current);
      const { container } = render(
        <Steps current={1}>
          <Step key={1} onClick={fakeClick} />
          <Step key={2} onClick={fakeClick} />
        </Steps>,
      );
      const stepsList = container.querySelectorAll(`.${rootStepClass}`);
      await userEvent.click(stepsList[0]);
      expect(fakeClick).toHaveBeenCalled();
      expect(fakeClick).toHaveReturnedWith(1);
    });
  });
});
