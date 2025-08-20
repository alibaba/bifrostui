import { fireEvent, isConformant, render } from 'testing';
import React from 'react';
import TagGroup from '../TagGroup';

describe('TagGroup', () => {
  const rootClass = 'bui-tag-group';

  isConformant({
    className: rootClass,
    displayName: 'BuiTagGroup',
    Component: TagGroup,
  });

  it('should render default content', () => {
    const component = render(<TagGroup>default</TagGroup>);
    const tag = component.container;
    expect(tag).toHaveTextContent('default');
  });

  it('should be clickable', () => {
    const fakeClick = vi.fn();
    const { container } = render(<TagGroup onClick={fakeClick} />);
    const tagGroup = container.querySelectorAll(`.${rootClass}`)[0];
    fireEvent.click(tagGroup);
    expect(fakeClick).toBeCalled();
  });
});
