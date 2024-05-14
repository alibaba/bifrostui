import React from 'react';
import toArray from '../toArray';

describe('toArray', () => {
  it('should convert children to an array', () => {
    const children = (
      <div>
        <span>Child 1</span>
        <span>Child 2</span>
      </div>
    );

    const result = toArray(children);
    expect(result).toHaveLength(1);
  });

  it('should handle nested fragments', () => {
    const children = (
      <>
        <span>Child 1</span>
        <span>Child 2</span>
      </>
    );

    const result = toArray(children);

    expect(result).toHaveLength(2);
    expect(result[0].type).toBe('span');
    expect(result[0].props.children).toBe('Child 1');
    expect(result[1].type).toBe('span');
    expect(result[1].props.children).toBe('Child 2');
  });

  it('should exclude undefined and null children when keepEmpty option is not set', () => {
    const children = (
      <>
        <>
          {undefined}
          {null}
        </>
        <span>Child 1</span>
      </>
    );

    const result = toArray(children);

    expect(result).toHaveLength(1);
    expect(result[0].type).toBe('span');
    expect(result[0].props.children).toBe('Child 1');
  });

  it('should include undefined and null children when keepEmpty option is set to true', () => {
    const children = (
      <>
        {undefined}
        {null}
        <span>Child 1</span>
      </>
    );

    const result = toArray(children, { keepEmpty: true });

    expect(result).toHaveLength(3);
    expect(result[0]).toBeNull();
    expect(result[1]).toBeNull();
    expect(result[2].type).toBe('span');
    expect(result[2].props.children).toBe('Child 1');
  });
});
