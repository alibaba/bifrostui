"use strict";(self.webpackChunk_bifrostui_monorepo=self.webpackChunk_bifrostui_monorepo||[]).push([[9350],{59350:function(o,n,e){e.r(n),e.d(n,{texts:function(){return t}});const t=[{value:"The Modal component provides a robust foundation for creating dialogs, drawers, popovers, or any other overlays.",paraId:0,tocIndex:0},{value:"\u{1F4DA} ",paraId:1,tocIndex:1},{value:"Multi-level Management",paraId:1,tocIndex:1},{value:" - Supports stacking management of multiple Modals",paraId:1,tocIndex:1},{value:"\u{1F512} ",paraId:1,tocIndex:1},{value:"Scroll Lock",paraId:1,tocIndex:1},{value:" - Prevent background page scroll penetration",paraId:1,tocIndex:1},{value:"\u267F ",paraId:1,tocIndex:1},{value:"Accessibility Support",paraId:1,tocIndex:1},{value:" - Built-in ARIA attributes and keyboard navigation",paraId:1,tocIndex:1},{value:"\u{1F3A8} ",paraId:1,tocIndex:1},{value:"Highly Customizable",paraId:1,tocIndex:1},{value:" - Supports custom backgrounds, containers, and transition animations",paraId:1,tocIndex:1},{value:"When you want the user to handle tasks without navigating away from the page to avoid disrupting workflows",paraId:2,tocIndex:2},{value:"When you need to display important information or obtain user confirmations",paraId:2,tocIndex:2},{value:"When you need to display complex content such as forms, image previews, etc.",paraId:2,tocIndex:2},{value:"The simplest usage of Modal is to control visibility via the ",paraId:3,tocIndex:3},{value:"open",paraId:3,tocIndex:3},{value:" attribute.",paraId:3,tocIndex:3},{value:`
## Nested Modals

Modals support nesting, and a unified modal management system helps handle stacking of dialogs. It is advisable not to use more than two levels of modal nesting.

\`\`\`tsx
import { Button, Modal, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [parentOpen, setParentOpen] = useState(false);
  const [childOpen, setChildOpen] = useState(false);

  return (
    <Stack>
      <Button onClick={() => setParentOpen(true)}>Open Parent Modal</Button>

      <Modal
        open={parentOpen}
        onClose={() => setParentOpen(false)}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            width: '400px',
            padding: '24px',
            background: 'var(--bui-color-bg-view)',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
          }}
        >
          <h3 style={{ margin: '0 0 16px 0' }}>Parent Modal</h3>
          <p style={{ margin: '0 0 16px 0' }}>
            This is the parent modal where you can open a child modal.
          </p>
          <Stack direction="row" spacing={8}>
            <Button onClick={() => setChildOpen(true)} size="small">
              Open Child Modal
            </Button>
            <Button
              onClick={() => setParentOpen(false)}
              size="small"
              variant="outlined"
            >
              Close
            </Button>
          </Stack>
        </div>
      </Modal>

      <Modal
        open={childOpen}
        onClose={() => setChildOpen(false)}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            width: '300px',
            padding: '20px',
            background: 'var(--bui-color-bg-view)',
            borderRadius: '8px',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.25)',
            border: '2px solid var(--bui-color-primary)',
          }}
        >
          <h4 style={{ margin: '0 0 12px 0' }}>Child Modal</h4>
          <p style={{ margin: '0 0 16px 0', fontSize: '14px' }}>
            This is a child modal nested within the parent modal.
          </p>
          <Button onClick={() => setChildOpen(false)} size="small">
            Close Child Modal
          </Button>
        </div>
      </Modal>
    </Stack>
  );
};
\`\`\`

## Transition Animation

Modals can be used with transition animation components to create smooth entry and exit effects. The animation component can refer to react-transition-group and must meet the following conditions:

- Must be a direct child of the modal; this component needs to be a direct child of the Modal component.
- Contains an \`in\` attribute; this component must accept a boolean attribute named \`in\` to represent the open/close state of the modal.
- Invoke \`onEnter\` callback at the start of the enter animation; the \`onEnter\` callback must be triggered at the start of the enter transition.
- Invoke \`onExited\` callback after the exit animation completes; the \`onExited\` callback must be triggered once the exit transition completes.

\`\`\`tsx
import { Button, Modal, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

// Simple fade-in-fade-out transition component
const Fade = React.forwardRef(
  ({ in: inProp, children, timeout = 300, ...other }, ref) => {
    const [exited, setExited] = useState(!inProp);

    React.useEffect(() => {
      if (inProp) {
        setExited(false);
      } else {
        const timer = setTimeout(() => setExited(true), timeout);
        return () => clearTimeout(timer);
      }
    }, [inProp, timeout]);

    if (exited && !inProp) {
      return null;
    }

    return (
      <div
        ref={ref}
        style={{
          opacity: inProp ? 1 : 0,
          transition: \`opacity \${timeout}ms ease-in-out\`,
          ...other.style,
        }}
        {...other}
      >
        {children}
      </div>
    );
  },
);

export default () => {
  const [open, setOpen] = useState(false);

  return (
    <Stack>
      <Button onClick={() => setOpen(true)}>Modal with Transition</Button>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Fade in={open}>
          <div
            style={{
              width: '400px',
              padding: '24px',
              background: 'var(--bui-color-bg-view)',
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
              transform: open ? 'scale(1)' : 'scale(0.9)',
              transition: 'transform 300ms ease-in-out',
            }}
          >
            <h3 style={{ margin: '0 0 16px 0' }}>Modal with Animation</h3>
            <p style={{ margin: '0 0 16px 0' }}>
              This modal uses fade-in-out and scale animation effects.
            </p>
            <Button onClick={() => setOpen(false)} size="small">
              Close
            </Button>
          </div>
        </Fade>
      </Modal>
    </Stack>
  );
};
\`\`\`

## Backdrop Control

You can hide the backdrop via \`hideBackdrop\`, or customize backdrop behavior via \`BackdropProps\`.

\`\`\`tsx
import { Button, Modal, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [noBackdrop, setNoBackdrop] = useState(false);
  const [invisibleBackdrop, setInvisibleBackdrop] = useState(false);
  const [customBackdrop, setCustomBackdrop] = useState(false);

  const modalStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const contentStyle = {
    width: '350px',
    padding: '20px',
    background: 'var(--bui-color-bg-view)',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
  };

  return (
    <Stack>
      <Button onClick={() => setNoBackdrop(true)}>No Backdrop</Button>
      <Button onClick={() => setInvisibleBackdrop(true)}>
        Invisible Backdrop
      </Button>
      <Button onClick={() => setCustomBackdrop(true)}>Custom Backdrop</Button>

      {/* No Backdrop */}
      <Modal
        open={noBackdrop}
        onClose={() => setNoBackdrop(false)}
        hideBackdrop
        style={modalStyle}
      >
        <div style={contentStyle}>
          <h4 style={{ margin: '0 0 12px 0' }}>No Backdrop</h4>
          <p style={{ margin: '0 0 16px 0', fontSize: '14px' }}>
            No backdrop; manual closing or click outside the content area.
          </p>
          <Button onClick={() => setNoBackdrop(false)} size="small">
            Close
          </Button>
        </div>
      </Modal>

      {/* Invisible Backdrop */}
      <Modal
        open={invisibleBackdrop}
        onClose={() => setInvisibleBackdrop(false)}
        BackdropProps={{ invisible: true }}
        style={modalStyle}
      >
        <div style={contentStyle}>
          <h4 style={{ margin: '0 0 12px 0' }}>Invisible Backdrop</h4>
          <p style={{ margin: '0 0 16px 0', fontSize: '14px' }}>
            The backdrop is invisible, but clicking outside still closes it.
          </p>
          <Button onClick={() => setInvisibleBackdrop(false)} size="small">
            Close
          </Button>
        </div>
      </Modal>

      {/* Custom Backdrop */}
      <Modal
        open={customBackdrop}
        onClose={() => setCustomBackdrop(false)}
        BackdropProps={{
          style: {
            backgroundColor: 'rgba(255, 0, 0, 0.1)',
            backdropFilter: 'blur(4px)',
          },
        }}
        style={modalStyle}
      >
        <div style={contentStyle}>
          <h4 style={{ margin: '0 0 12px 0' }}>Custom Backdrop</h4>
          <p style={{ margin: '0 0 16px 0', fontSize: '14px' }}>
            Custom backdrop color and blur effect.
          </p>
          <Button onClick={() => setCustomBackdrop(false)} size="small">
            Close
          </Button>
        </div>
      </Modal>
    </Stack>
  );
};
\`\`\`

## Scroll Lock

By default, Modals prevent background page scrolling, which can be disabled via \`disableScrollLock\`.

\`\`\`tsx
import { Button, Modal, Stack, Switch } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [open, setOpen] = useState(false);
  const [disableScrollLock, setDisableScrollLock] = useState(false);

  return (
    <Stack>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Switch
          checked={!disableScrollLock}
          onChange={() => setDisableScrollLock(!disableScrollLock)}
        />
        <span>Enable Scroll Lock</span>
      </div>

      <Button onClick={() => setOpen(true)}>Open Modal to Test Scroll</Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        disableScrollLock={disableScrollLock}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            width: '400px',
            maxHeight: '300px',
            padding: '24px',
            background: 'var(--bui-color-bg-view)',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
            overflowY: 'auto',
          }}
        >
          <h3 style={{ margin: '0 0 16px 0' }}>Scroll Lock Test</h3>
          <p style={{ margin: '0 0 16px 0' }}>
            Scroll lock is {disableScrollLock ? 'disabled' : 'enabled'}. Try
            scrolling the background page to test the effect.
          </p>
          <div
            style={{
              height: '200px',
              overflowY: 'auto',
              border: '1px solid #ddd',
              padding: '10px',
            }}
          >
            <p>This is scrollable content inside the Modal:</p>
            {Array.from({ length: 20 }, (_, i) => (
              <p key={i}>Content line {i + 1}</p>
            ))}
          </div>
          <Button
            onClick={() => setOpen(false)}
            size="small"
            style={{ marginTop: '16px' }}
          >
            Close
          </Button>
        </div>
      </Modal>
    </Stack>
  );
};
\`\`\`

## Mini Program Scroll Lock

**Mini Programs** prevent scroll penetration via catchMove. **To allow scrolling within Modal children when scroll lock is enabled, the root of the child element should use ScrollView**.

\`\`\`tsx
import { Button, Modal, Stack, Switch, ScrollView } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [open, setOpen] = useState(false);
  const [disableScrollLock, setDisableScrollLock] = useState(false);

  return (
    <Stack>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Switch
          checked={!disableScrollLock}
          onChange={() => setDisableScrollLock(!disableScrollLock)}
        />
        <span>Enable Scroll Lock</span>
      </div>

      <Button onClick={() => setOpen(true)}>Open Modal to Test Scroll</Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        disableScrollLock={disableScrollLock}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <ScrollView
          scrollY
          style={{
            width: '400px',
            maxHeight: '300px',
            padding: '24px',
            background: 'var(--bui-color-bg-view)',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
          }}
        >
          <h3 style={{ margin: '0 0 16px 0' }}>Scroll Lock Test</h3>
          <p style={{ margin: '0 0 16px 0' }}>
            Scroll lock is {disableScrollLock ? 'disabled' : 'enabled'}. Try
            scrolling the background page to test the effect.
          </p>
          <div
            style={{
              height: '200px',
              overflowY: 'auto',
              border: '1px solid #ddd',
              padding: '10px',
            }}
          >
            <p>This is scrollable content inside the Modal:</p>
            {Array.from({ length: 20 }, (_, i) => (
              <p key={i}>Content line {i + 1}</p>
            ))}
          </div>
          <Button
            onClick={() => setOpen(false)}
            size="small"
            style={{ marginTop: '16px' }}
          >
            Close
          </Button>
        </ScrollView>
      </Modal>
    </Stack>
  );
};
\`\`\`

## Keep Mounted

Using the \`keepMounted\` attribute keeps the Modal in the DOM when closed, which is useful for forms or content where state retention is necessary.

\`\`\`tsx
import { Button, Modal, Stack, Switch, Input } from '@bifrostui/react';
import React, { useState } from 'react';

// Internal form component to demonstrate the effect of keepMounted
const FormComponent = ({ onClose }) => {
  const [inputValue, setInputValue] = useState('');
  const [mountTime] = useState(() => new Date().toLocaleTimeString());

  console.log('FormComponent mounted at:', mountTime);

  return (
    <div
      style={{
        width: '400px',
        padding: '24px',
        background: 'var(--bui-color-bg-view)',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
      }}
    >
      <h3 style={{ margin: '0 0 16px 0' }}>Keep Mounted Test</h3>
      <p
        style={{
          margin: '0 0 16px 0',
          fontSize: '14px',
          color: 'var(--bui-color-fg-muted)',
        }}
      >
        Component mounted at: {mountTime}
      </p>
      <div style={{ marginBottom: '16px' }}>
        <label style={{ display: 'block', marginBottom: '8px' }}>
          Enter some text to test state retention:
        </label>
        <Input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter text, then close and reopen the modal..."
        />
      </div>
      <p
        style={{
          margin: '0 0 16px 0',
          fontSize: '12px',
          color: 'var(--bui-color-fg-muted)',
        }}
      >
        Current input value: "{inputValue}"
      </p>
      <Button onClick={onClose} size="small">
        Close
      </Button>
    </div>
  );
};

export default () => {
  const [open, setOpen] = useState(false);
  const [keepMounted, setKeepMounted] = useState(false);

  return (
    <Stack>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          marginBottom: '16px',
        }}
      >
        <Switch
          checked={keepMounted}
          onChange={() => setKeepMounted(!keepMounted)}
        />
        <span>Enable Keep Mounted</span>
      </div>

      <div
        style={{
          padding: '12px',
          background: 'var(--bui-color-bg-muted)',
          borderRadius: '4px',
          marginBottom: '16px',
        }}
      >
        <p style={{ margin: '0', fontSize: '14px' }}>
          <strong>Test Instructions:</strong>
        </p>
        <p
          style={{
            margin: '4px 0 0 0',
            fontSize: '12px',
            color: 'var(--bui-color-fg-muted)',
          }}
        >
          \u2022 keepMounted=false: The component is destroyed when the modal is
          closed, and input content is lost. Re-mounts when reopened.
          <br />\u2022 keepMounted=true: The component remains in the DOM when the
          modal is closed, retaining input content and state.
        </p>
      </div>

      <Button onClick={() => setOpen(true)}>
        Open Modal (keepMounted: {keepMounted ? 'true' : 'false'})
      </Button>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        keepMounted={keepMounted}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <FormComponent onClose={() => setOpen(false)} />
      </Modal>
    </Stack>
  );
};
\`\`\`

## Custom Container

The \`container\` attribute allows specifying the rendering container of the Modal, and \`disablePortal\` disables the Portal functionality.

\`\`\`tsx
import { Button, Modal, Stack } from '@bifrostui/react';
import React, { useState, useRef } from 'react';

export default () => {
  const [portalOpen, setPortalOpen] = useState(false);
  const [noPortalOpen, setNoPortalOpen] = useState(false);
  const containerRef = useRef(null);

  return (
    <Stack>
      <Button onClick={() => setPortalOpen(true)}>
        Custom Container Modal
      </Button>
      <Button onClick={() => setNoPortalOpen(true)}>
        Portal Disabled Modal
      </Button>

      {/* Custom Container */}
      <div
        ref={containerRef}
        style={{
          position: 'relative',
          height: '200px',
          border: '2px dashed #ccc',
          borderRadius: '8px',
          margin: '16px 0',
          overflow: 'hidden',
        }}
      >
        <p style={{ padding: '16px', margin: 0 }}>
          This is the custom container area where the Modal will render.
        </p>
      </div>

      <Modal
        open={portalOpen}
        onClose={() => setPortalOpen(false)}
        container={containerRef.current}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            width: '250px',
            padding: '16px',
            background: 'var(--bui-color-bg-view)',
            borderRadius: '6px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
          }}
        >
          <h4 style={{ margin: '0 0 12px 0' }}>Custom Container</h4>
          <p style={{ margin: '0 0 12px 0', fontSize: '14px' }}>
            This Modal is rendered within the custom container above.
          </p>
          <Button onClick={() => setPortalOpen(false)} size="small">
            Close
          </Button>
        </div>
      </Modal>

      <Modal
        open={noPortalOpen}
        onClose={() => setNoPortalOpen(false)}
        disablePortal
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1300,
        }}
      >
        <div
          style={{
            width: '350px',
            padding: '20px',
            background: 'var(--bui-color-bg-view)',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
          }}
        >
          <h4 style={{ margin: '0 0 12px 0' }}>Portal Disabled</h4>
          <p style={{ margin: '0 0 16px 0', fontSize: '14px' }}>
            This Modal is rendered directly in place without using Portal.
          </p>
          <Button onClick={() => setNoPortalOpen(false)} size="small">
            Close
          </Button>
        </div>
      </Modal>
    </Stack>
  );
};
\`\`\`

## Accessibility

- The default role of a basic modal is set to role=presentation. When using Modal to encapsulate components, please set the role to dialog or other appropriate roles as needed.
- When Modal appears, sibling elements of the Modal will automatically receive the aria-hidden attribute, which will be removed when the Modal is closed.

## API

### Modal Props

| Attribute         | Type                                                        | Default         | Description                    |
| ----------------- | ----------------------------------------------------------- | --------------- | ------------------------------ |
| open              | \`boolean\`                                                   | \`false\`         | Whether Modal is open          |
| onClose           | \`(event: SyntheticEvent, detail: ModalCloseDetail) => void\` | -               | Callback function on close     |
| children          | \`React.ReactNode\`                                           | -               | Modal content                  |
| container         | \`Element \\| (() => Element) \\| null\`                        | \`document.body\` | Portal container               |
| disablePortal     | \`boolean\`                                                   | \`false\`         | Whether to disable Portal      |
| hideBackdrop      | \`boolean\`                                                   | \`false\`         | Whether to hide the backdrop   |
| BackdropProps     | \`Partial<BackdropProps>\`                                    | -               | Backdrop properties            |
| disableScrollLock | \`boolean\`                                                   | \`false\`         | Whether to disable scroll lock |
| keepMounted       | \`boolean\`                                                   | \`false\`         | Whether to keep mounted        |
| className         | \`string\`                                                    | -               | Custom class name              |
| style             | \`React.CSSProperties\`                                       | -               | Custom style                   |

### ModalCloseDetail

\`\`\`typescript
type ModalCloseDetail = {
  from?: 'backdropClick' | 'escapeKeyDown';
};
\`\`\`

### BackdropProps

| Attribute | Type                                | Default | Description       |
| --------- | ----------------------------------- | ------- | ----------------- |
| invisible | \`boolean\`                           | \`false\` | Whether invisible |
| onClick   | \`(event: React.MouseEvent) => void\` | -       | Click callback    |

\`\`\`

\`\`\`
`,paraId:4}]}}]);
