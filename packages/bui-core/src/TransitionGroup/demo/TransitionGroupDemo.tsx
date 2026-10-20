import { Button, TransitionGroup, CSSTransition } from '@bifrostui/react';
import React, { useState } from 'react';
import './index.less';

interface Item {
  id: number;
  text: string;
}

const TransitionGroupDemo = () => {
  const [items, setItems] = useState<Item[]>([
    { id: 1, text: 'Item 1' },
    { id: 2, text: 'Item 2' },
    { id: 3, text: 'Item 3' },
  ]);

  const handleAddItem = () => {
    const id =
      items.length > 0 ? Math.max(...items.map((item) => item.id)) + 1 : 1;
    setItems((prev) => [...prev, { id, text: `Item ${id}` }]);
  };

  const handleRemoveItem = (id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div>
      <Button onClick={handleAddItem}>添加项目</Button>
      <TransitionGroup className="transition-group-container">
        {items.map((item) => (
          <CSSTransition
            key={item.id}
            unmountOnExit
            timeout={300}
            classNames="item"
          >
            <div className="item-container">
              <span>{item.text}</span>
              <Button
                size="small"
                color="danger"
                onClick={() => handleRemoveItem(item.id)}
              >
                删除
              </Button>
            </div>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default TransitionGroupDemo;
