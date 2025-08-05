import React from 'react';
import { act, fireEvent, isConformant, render, screen } from 'testing';
import Picker from '..';

describe('Picker', () => {
  const rootClass = 'bui-picker';
  const singleData = [
    [
      {
        value: 1,
        label: '周一',
      },
      {
        value: 2,
        label: '周二',
      },
      {
        value: 3,
        label: '周三',
      },
      {
        value: 4,
        label: '周四',
      },
      {
        value: 5,
        label: '周五',
      },
      {
        value: 6,
        label: '周六',
      },
      {
        value: 7,
        label: '周日',
      },
    ],
  ];
  const multiData = [
    [
      {
        value: 1,
        label: '周一',
      },
      {
        value: 2,
        label: '周二',
      },
      {
        value: 3,
        label: '周三',
      },
      {
        value: 4,
        label: '周四',
      },
      {
        value: 5,
        label: '周五',
      },
      {
        value: 6,
        label: '周六',
      },
      {
        value: 7,
        label: '周日',
      },
    ],
    [
      {
        value: 1,
        label: '上午',
      },
      {
        value: 2,
        label: '中午',
      },
      {
        value: 3,
        label: '下午',
      },
    ],
  ];
  const cascadeData = [
    {
      value: 1,
      label: '北京',
      children: [
        {
          value: 1,
          label: '朝阳区',
          children: [
            {
              value: 1,
              label: '朝阳街',
            },
          ],
        },
        {
          value: 2,
          label: '海淀区',
        },
        {
          value: 3,
          label: '大兴区',
        },
        {
          value: 4,
          label: '东城区',
        },
        {
          value: 5,
          label: '西城区',
        },
        {
          value: 6,
          label: '丰台区',
        },
      ],
    },
    {
      value: 2,
      label: '上海',
      children: [
        {
          value: 1,
          label: '黄埔区',
        },
        {
          value: 2,
          label: '长宁区',
        },
        {
          value: 3,
          label: '普陀区',
        },
        {
          value: 4,
          label: '杨浦区',
        },
        {
          value: 5,
          label: '浦东新区',
        },
        {
          value: 6,
          label: '徐汇区',
          children: [
            {
              value: 1,
              label: '龙耀路',
            },
            {
              value: 2,
              label: '云锦路',
            },
          ],
        },
      ],
    },
  ];

  const cascadeCallbackOptions = [
    [
      {
        value: 1,
        label: '北京',
        children: [
          {
            value: 1,
            label: '朝阳区',
            children: [{ value: 1, label: '朝阳街' }],
          },
          { value: 2, label: '海淀区' },
          { value: 3, label: '大兴区' },
          { value: 4, label: '东城区' },
          { value: 5, label: '西城区' },
          { value: 6, label: '丰台区' },
        ],
      },
      {
        value: 2,
        label: '上海',
        children: [
          { value: 1, label: '黄埔区' },
          { value: 2, label: '长宁区' },
          { value: 3, label: '普陀区' },
          { value: 4, label: '杨浦区' },
          { value: 5, label: '浦东新区' },
          {
            value: 6,
            label: '徐汇区',
            children: [
              { value: 1, label: '龙耀路' },
              { value: 2, label: '云锦路' },
            ],
          },
        ],
      },
    ],
    [
      { value: 1, label: '朝阳区', children: [{ value: 1, label: '朝阳街' }] },
      { value: 2, label: '海淀区' },
      { value: 3, label: '大兴区' },
      { value: 4, label: '东城区' },
      { value: 5, label: '西城区' },
      { value: 6, label: '丰台区' },
    ],
    [{ value: 1, label: '朝阳街' }],
  ];

  beforeEach(() => {
    vi.useFakeTimers({ shouldAdvanceTime: true });
  });

  afterEach(() => {
    vi.clearAllTimers();
    vi.useRealTimers();
    vi.clearAllMocks();
  });

  isConformant({
    className: rootClass,
    displayName: 'BuiPicker',
    Component: Picker,
    requiredProps: {
      open: true,
    },
    getTargetElement: () => {
      return document.querySelector(`.${rootClass}`);
    },
  });

  it('should open when `open` Props is true', () => {
    render(<Picker open options={singleData} />);
    expect(screen.queryAllByText('周一').length).toBe(1);
  });

  it('should no error', () => {
    render(<Picker open />);
    expect(
      document.querySelector(`.${rootClass}-container`).childNodes.length,
    ).toBe(0);
  });

  it('should render title', () => {
    render(<Picker open title="请选择" options={singleData} />);
    expect(screen.queryAllByText('请选择').length).toBe(1);
  });

  it('should render one column', () => {
    render(<Picker open options={singleData} />);
    const panels = document.querySelectorAll(`.${rootClass}-panel`);
    expect(panels.length).toBe(1);
  });

  it('should render two columns', () => {
    render(<Picker open options={multiData} />);
    const panels = document.querySelectorAll(`.${rootClass}-panel`);
    expect(panels.length).toBe(2);
  });

  it('should render three columns', () => {
    render(<Picker open options={cascadeData} />);
    const panels = document.querySelectorAll(`.${rootClass}-panel`);
    expect(panels.length).toBe(3);
  });

  it('should default select options with `value` props', () => {
    render(<Picker open options={cascadeData} value={[2, 6, 2]} />);
    const [roller1, roller2, roller3] = document.querySelectorAll(
      `.${rootClass}-panel-roller`,
    );
    expect(roller1).toHaveStyle('transform: rotate3d(1, 0, 0, 40deg)');
    expect(roller2).toHaveStyle('transform: rotate3d(1, 0, 0, 120deg)');
    expect(roller3).toHaveStyle('transform: rotate3d(1, 0, 0, 40deg)');
  });

  it('should render props in content dom with `contentProps`', () => {
    render(
      <Picker
        open
        options={cascadeData}
        contentProps={{ style: { height: '300px' } }}
      />,
    );
    const content = document.querySelector(`.${rootClass}-content`);
    expect(content).toHaveStyle('height: 300px');
  });

  it('should call `onConfirm` when click confirm button', async () => {
    const confirm = vi.fn((_, { value }) => value);
    render(
      <Picker
        open
        onConfirm={confirm}
        value={[2, 6, 2]}
        options={cascadeData}
      />,
    );
    await act(async () => {
      await vi.runAllTimers();
    });
    const comfirmButton = document.querySelector(`.${rootClass}-confirm`);
    await act(async () => {
      fireEvent.click(comfirmButton);
    });
    expect(confirm).toHaveBeenCalled();
    expect(confirm).toReturnWith([2, 6, 2]);
  });

  it('should modify callback `value` when click confirm button', async () => {
    const confirm = vi.fn((_, { options, value }) => {
      return { options, value };
    });
    const close = vi.fn((_, { options, value }) => {
      return { options, value };
    });
    render(
      <Picker
        open
        onConfirm={confirm}
        onClose={close}
        value={[1, 100]}
        options={cascadeData}
      />,
    );
    await act(async () => {
      await vi.runAllTimers();
    });
    const comfirmButton = document.querySelector(`.${rootClass}-confirm`);
    await act(async () => {
      fireEvent.click(comfirmButton);
    });
    expect(confirm).toHaveBeenCalled();
    expect(confirm).toReturnWith({
      options: cascadeCallbackOptions,
      value: [1, 1, 1],
    });
    expect(close).toReturnWith({
      options: cascadeCallbackOptions,
      value: [1, 1, 1],
    });
  });

  it('should modify callback `value` when click cancel button', async () => {
    const close = vi.fn((_, { options, value }) => {
      return { options, value };
    });
    render(
      <Picker open onClose={close} value={[2, 6, 100]} options={cascadeData} />,
    );
    await act(async () => {
      await vi.runAllTimers();
    });
    const cancelButton = document.querySelector(`.${rootClass}-cancel`);
    await act(async () => {
      fireEvent.click(cancelButton);
    });
    expect(close).toReturnWith({
      options: [
        [
          {
            value: 1,
            label: '北京',
            children: [
              {
                value: 1,
                label: '朝阳区',
                children: [{ value: 1, label: '朝阳街' }],
              },
              { value: 2, label: '海淀区' },
              { value: 3, label: '大兴区' },
              { value: 4, label: '东城区' },
              { value: 5, label: '西城区' },
              { value: 6, label: '丰台区' },
            ],
          },
          {
            value: 2,
            label: '上海',
            children: [
              { value: 1, label: '黄埔区' },
              { value: 2, label: '长宁区' },
              { value: 3, label: '普陀区' },
              { value: 4, label: '杨浦区' },
              { value: 5, label: '浦东新区' },
              {
                value: 6,
                label: '徐汇区',
                children: [
                  { value: 1, label: '龙耀路' },
                  { value: 2, label: '云锦路' },
                ],
              },
            ],
          },
        ],
        [
          { value: 1, label: '黄埔区' },
          { value: 2, label: '长宁区' },
          { value: 3, label: '普陀区' },
          { value: 4, label: '杨浦区' },
          { value: 5, label: '浦东新区' },
          {
            value: 6,
            label: '徐汇区',
            children: [
              { value: 1, label: '龙耀路' },
              { value: 2, label: '云锦路' },
            ],
          },
        ],
        [
          { value: 1, label: '龙耀路' },
          { value: 2, label: '云锦路' },
        ],
      ],
      value: [2, 6, 1],
    });
  });

  it('should modify callback `value` when click confirm button in multiple picker', async () => {
    const confirm = vi.fn((_, { options, value }) => {
      return { options, value };
    });
    const close = vi.fn((_, { options, value }) => {
      return { options, value };
    });
    render(
      <Picker
        open
        onConfirm={confirm}
        onClose={close}
        value={[100, 100]}
        options={multiData}
      />,
    );
    await act(async () => {
      await vi.runAllTimers();
    });
    const comfirmButton = document.querySelector(`.${rootClass}-confirm`);
    await act(async () => {
      fireEvent.click(comfirmButton);
    });
    expect(confirm).toHaveBeenCalled();
    expect(confirm).toReturnWith({
      options: multiData,
      value: [1, 1],
    });
    expect(close).toReturnWith({
      options: multiData,
      value: [1, 1],
    });
  });

  it('should modify callback `value` when click confirm button in single picker', async () => {
    const confirm = vi.fn((_, { options, value }) => {
      return { options, value };
    });
    const close = vi.fn((_, { options, value }) => {
      return { options, value };
    });
    render(
      <Picker
        open
        onConfirm={confirm}
        onClose={close}
        value={[100]}
        options={singleData}
      />,
    );
    await act(async () => {
      await vi.runAllTimers();
    });
    const comfirmButton = document.querySelector(`.${rootClass}-confirm`);
    await act(async () => {
      fireEvent.click(comfirmButton);
    });
    expect(confirm).toHaveBeenCalled();
    expect(confirm).toReturnWith({
      options: singleData,
      value: [1],
    });
    expect(close).toReturnWith({
      options: singleData,
      value: [1],
    });
  });

  it('should call cascade `onOptionChange` when select option', async () => {
    const change = vi.fn((_, { value }) => value);
    render(<Picker open onOptionChange={change} options={cascadeData} />);

    await act(async () => {
      await vi.runAllTimers();
    });

    const [panel1] = document.querySelectorAll(`.${rootClass}-panel`);
    const [roller1] = document.querySelectorAll(`.${rootClass}-panel-roller`);
    fireEvent.touchStart(panel1, {
      touches: [
        {
          clientX: 0,
          clientY: 0,
        },
      ],
      cancelable: true,
      bubbles: true,
    });
    fireEvent.touchMove(panel1, {
      touches: [
        {
          clientX: 0,
          clientY: -36,
        },
      ],
      cancelable: true,
      bubbles: true,
    });
    fireEvent.transitionEnd(roller1);

    expect(change).toBeCalled();
    expect(change).toReturnWith([2, 1]);
  });

  it('should call multiple `onOptionChange` when select option', async () => {
    const change = vi.fn((_, { value }) => value);
    render(<Picker open onOptionChange={change} options={multiData} />);

    await act(async () => {
      await vi.runAllTimers();
    });

    const [, panel2] = document.querySelectorAll(`.${rootClass}-panel`);
    const [, roller2] = document.querySelectorAll(`.${rootClass}-panel-roller`);
    fireEvent.touchStart(panel2, {
      touches: [
        {
          clientX: 0,
          clientY: 0,
        },
      ],
      cancelable: true,
      bubbles: true,
    });
    fireEvent.touchMove(panel2, {
      touches: [
        {
          clientX: 0,
          clientY: -36,
        },
      ],
      cancelable: true,
      bubbles: true,
    });
    fireEvent.transitionEnd(roller2);

    expect(change).toBeCalled();
    expect(change).toReturnWith([1, 2]);
  });

  it('should roll with inertial', async () => {
    const change = vi.fn((_, { value }) => value);
    render(<Picker open onOptionChange={change} options={multiData} />);

    await act(async () => {
      await vi.runAllTimers();
    });

    const [, panel2] = document.querySelectorAll(`.${rootClass}-panel`);
    const [, roller2] = document.querySelectorAll(`.${rootClass}-panel-roller`);
    fireEvent.touchStart(panel2, {
      touches: [
        {
          clientX: 0,
          clientY: 0,
        },
      ],
      cancelable: true,
      bubbles: true,
    });
    fireEvent.touchMove(panel2, {
      touches: [
        {
          clientX: 0,
          clientY: -36,
        },
      ],
      cancelable: true,
      bubbles: true,
    });
    // 惯性滚动
    fireEvent.touchEnd(panel2, {
      touches: [
        {
          clientX: 0,
          clientY: -30,
        },
      ],
      cancelable: true,
      bubbles: true,
    });
    fireEvent.transitionEnd(roller2);

    expect(change).toBeCalled();
    expect(change).toReturnWith([1, 3]);
  });

  it('should call `onCancel` when click cancel button', async () => {
    const cancel = vi.fn();
    render(<Picker open onCancel={cancel} options={cascadeData} />);
    await act(async () => {
      await vi.runAllTimers();
    });
    await act(async () => {
      fireEvent.click(document.querySelector(`.${rootClass}-cancel`));
    });
    expect(cancel).toBeCalled();
  });

  it('should call `onClose` when Picker hidden', async () => {
    const close = vi.fn();
    render(<Picker open onClose={close} options={cascadeData} />);
    await act(async () => {
      await vi.runAllTimers();
    });
    await act(async () => {
      fireEvent.click(document.querySelector(`.${rootClass}-cancel`));
    });
    expect(close).toBeCalled();
    await act(async () => {
      fireEvent.click(document.querySelector(`.${rootClass}-confirm`));
    });
    expect(close).toBeCalled();
    await act(async () => {
      fireEvent.click(document.querySelector('.bui-backdrop'));
    });
    expect(close).toBeCalled();
  });
});
