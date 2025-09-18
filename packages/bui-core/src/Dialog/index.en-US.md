---
group: Feedback
name: Dialog
---

# Dialog

Utilized for conveying important information or providing operational feedback.

## When to Use

- Use Dialog when users need to handle tasks without page transitions that disrupt the workflow, opening a floating layer in the center of the current page to carry out corresponding operations.
- When users need to confirm an operation, such as deletion, submission, or other significant actions.
- When users need to input information, such as changing usernames or entering passwords.
- When crucial information or warnings need to be displayed to users.

## Comparison of Invocation Methods

Dialog supports three invocation methods: Component Invocation, Static Method Invocation, and Hook Invocation.

| Invocation Method    | Advantages                                                     | Disadvantages                       | Recommended Usage Scenario                               |
| -------------------- | -------------------------------------------------------------- | ----------------------------------- | -------------------------------------------------------- |
| Component Invocation | Traditional usage, full control, supports complex interactions | Requires state management           | Complex business logic and custom interaction needs      |
| Static Method        | Simple invocation, no need for state management                | Cannot access React Context         | Simple confirmation scenarios, context access not needed |
| useDialog Hook       | Relatively simple invocation, Context access, theme support    | Requires rendering of contextHolder | Suitable for scenarios needing context access            |

## Component Invocation

The Dialog component is supported as a React component and can be directly used; the `open` attribute controls its display state, suitable for scenarios requiring complex interactive logic.

### Basic Usage

The simplest way to use Dialog, controlling its display and hide status through state, presenting basic confirmation and cancellation operations.

```tsx
import { Button, Dialog, Toast, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Stack direction="row" spacing="10px">
        <Button onClick={() => setOpen(true)}>Open Dialog</Button>
      </Stack>

      <Dialog
        open={open}
        title="Notice"
        content="This is a basic Dialog example"
        onOk={() => {
          Toast({ message: 'Clicked confirm' });
          setOpen(false);
        }}
        onCancel={() => setOpen(false)}
      />
    </>
  );
};
```

### Component Types

Showcasing three types of Dialog: confirmation Dialog (confirm), warning Dialog (alert), and input Dialog (prompt). Each type has different button configuration and interaction behavior.

```tsx
import { Stack, Button, Dialog, Toast } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);
  const [promptOpen, setPromptOpen] = useState(false);

  return (
    <>
      <Stack direction="row" spacing="10px">
        <Button onClick={() => setConfirmOpen(true)}>Confirm Dialog</Button>
        <Button onClick={() => setAlertOpen(true)}>Alert Dialog</Button>
        <Button onClick={() => setPromptOpen(true)}>Prompt Dialog</Button>
      </Stack>

      {/* Confirmation Dialog */}
      <Dialog
        open={confirmOpen}
        title="Confirm Deletion"
        content="Data cannot be recovered after deletion, are you sure you want to delete?"
        okText="Delete"
        onOk={() => {
          Toast({ message: 'Deleted' });
          setConfirmOpen(false);
        }}
        onCancel={() => setConfirmOpen(false)}
      />

      {/* Warning Dialog */}
      <Dialog
        open={alertOpen}
        type="alert"
        title="Warning"
        content="The system detected an abnormal operation!"
        okText="Got it"
        onOk={() => setAlertOpen(false)}
      />

      {/* Input Dialog */}
      <Dialog
        open={promptOpen}
        type="prompt"
        title="Please Enter"
        content="Please enter your name"
        placeholder="Enter name"
        onOk={(_, { value }) => {
          if (value?.trim()) {
            Toast({ message: `Hello, ${value}!` });
            setPromptOpen(false);
          } else {
            Toast({ message: 'Please enter valid content' });
          }
        }}
        onCancel={() => setPromptOpen(false)}
      />
    </>
  );
};
```

### Custom Content

Illustrates how to customize Dialog's title and content area, supporting rendering complex React components and HTML structures.

```tsx
import { Button, Dialog, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Stack direction="row" spacing="10px">
        <Button onClick={() => setOpen(true)}>Custom Content</Button>
      </Stack>

      <Dialog
        open={open}
        title={<span style={{ color: '#ff4d4f' }}>⚠️ Important Reminder</span>}
        content={
          <div>
            <p>Please read the following terms carefully:</p>
            <ul style={{ textAlign: 'left', margin: '10px 0' }}>
              <li>Operations are irreversible</li>
              <li>Data will be permanently deleted</li>
              <li>Ensure backup is complete</li>
            </ul>
          </div>
        }
        okText="I Understand"
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
      />
    </>
  );
};
```

## Static Method Invocation

Static method invocation is straightforward but cannot access React Context; theme configurations might not be effective. If these features are needed, please use useDialog Hook.

### Basic Usage

Demonstrates the basic invocation method of static methods, suitable for simple confirmation scenarios but not recommended for use in complex applications.

```tsx
import { Stack, Button, Dialog, Toast } from '@bifrostui/react';
import React from 'react';

export default () => {
  const showConfirm = async () => {
    const result = await Dialog.confirm({
      title: 'Confirm Operation',
      content: 'This is the description content',
    });
    Toast({ message: result ? 'Confirmed' : 'Cancelled' });
  };

  const showPrompt = async () => {
    const result = await Dialog.prompt('Please enter your name');
    if (result) {
      Toast({ message: `Hello, ${result}!` });
    }
  };

  const showAlert = async () => {
    const result = await Dialog.alert('Operation Complete!');
    if (result) {
      Toast({ message: 'Confirmed' });
    }
  };

  return (
    <Stack direction="row" spacing="10px">
      <Button onClick={showConfirm}>Confirm Dialog</Button>
      <Button onClick={showPrompt}>Prompt Dialog</Button>
      <Button onClick={showAlert}>Alert Dialog</Button>
    </Stack>
  );
};
```

### Handling Asynchronous Operations

Shows how Dialog handles asynchronous operations; using functional invocation methods can simplify asynchronous flow handling. Functional invocation returns a Promise by default, with true indicating confirmation and false indicating cancellation. If it's a prompt type, the return value is the input content. onOk and onCancel callback functions can also return a Promise; the dialog waits for the Promise in the callback function to resolve successfully before closing.

```tsx
import { Button, Dialog, Toast, Stack } from '@bifrostui/react';
import React from 'react';

// Simulate asynchronous API call
const mockApiCall = (delay = 2000) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, delay);
  });
};

export default () => {
  // Basic async operation handling
  const handleBasicAsync = async () => {
    const confirmed = await Dialog.confirm({
      title: 'Confirm Deletion',
      content:
        'Are you sure you want to delete this record? This operation cannot be undone.',
      okText: 'Confirm Deletion',
      cancelText: 'Cancel',
    });

    if (confirmed) {
      Toast({ message: 'Deleting...', duration: 1000 });
      await mockApiCall();
      Toast({ message: 'Deletion Successful!', color: 'success' });
    }
  };

  // Input Validation + Async Submission
  const handlePromptAsync = async () => {
    await Dialog.prompt({
      title: 'Create User',
      content: 'Please enter a username (3-20 characters)',
      placeholder: 'Enter username',
      onOk: async (_, { value: username }) => {
        return new Promise(async (resolve) => {
          if (username.length < 3 || username.length > 20) {
            Toast({
              message: 'Username length must be between 3-20 characters',
              duration: 1000,
            });
          } else {
            Toast({ message: 'Creating user...', duration: 1000 });
            await mockApiCall();
            Toast({ message: 'User Created Successfully', duration: 500 });
            resolve();
          }
        });
      },
      onCancel: async () => {
        await mockApiCall();
      },
    });
  };

  return (
    <Stack direction="row" spacing="10px">
      <Button onClick={handleBasicAsync}>
        Invoke Dialog Returning Promise
      </Button>
      <Button onClick={handlePromptAsync}>
        Callback Function Passing Promise
      </Button>
    </Stack>
  );
};
```

## useDialog Hook

Use `Dialog.useDialog()` to create a dialog that can access React Context.

### Basic Usage

`const [dialog, contextHolder] = Dialog.useDialog();`
Basic way to use the useDialog Hook, create contextHolder supporting context reading and insert contextHolder into child nodes. Temporary Modals created by hooks will receive all contexts where contextHolder is located. Dialog has the same creation notification methods as Dialog.method. Supports asynchronous operations as well.

```tsx
import { Stack, Button, Dialog, Toast, ThemeProvider } from '@bifrostui/react';
import React from 'react';

export default () => {
  const [dialog, contextHolder] = Dialog.useDialog();

  const showConfirm = async () => {
    const result = await dialog.confirm({
      title: 'Confirm Operation',
      content: 'Please confirm whether to proceed?',
    });
    Toast({ message: result ? 'Confirmed' : 'Cancelled' });
  };

  const showPrompt = async () => {
    const result = await dialog.prompt({
      title: 'Please Enter',
      content: 'Please enter your feedback',
      placeholder: 'Enter content...',
    });
    if (result) {
      Toast({ message: `Your Feedback: ${result}` });
    }
  };

  const showAlert = async () => {
    const result = await dialog.alert({
      title: 'System Notification',
      content: 'You have a new message!',
    });
    if (result) {
      // Toast({ message: 'Notification Confirmed' });
    }
  };

  return (
    <ThemeProvider>
      {contextHolder}
      <Stack direction="row" spacing="10px">
        <Button onClick={showConfirm}>Confirm Dialog</Button>
        <Button onClick={showPrompt}>Prompt Dialog</Button>
        <Button onClick={showAlert}>Alert Dialog</Button>
      </Stack>
    </ThemeProvider>
  );
};
```

### Accessing Custom Context

Demonstrates the core advantage of useDialog Hook: the ability to access any custom React Context, compensating for the inability of function calls to access context.

```tsx
import { Stack, Button, Dialog, Toast, ThemeProvider } from '@bifrostui/react';
import React, { createContext, useContext, useState } from 'react';

// Create custom Context
const UserContext = createContext(null);

const ContextExample = () => {
  const [dialog, contextHolder] = Dialog.useDialog();
  const userContext = useContext(UserContext);

  const showUserInfo = async () => {
    await dialog.alert({
      title: 'User Information',
      content: (
        <div style={{ textAlign: 'left' }}>
          <p>
            <strong>Username:</strong>
            {userContext.currentUser.name}
          </p>
          <p>
            <strong>Role:</strong>
            {userContext.currentUser.role}
          </p>
          <p>
            <strong>Permissions:</strong>
            {userContext.permissions.join(', ')}
          </p>
        </div>
      ),
    });
  };

  return (
    <>
      {contextHolder}
      <Stack direction="row" spacing="10px">
        <Button onClick={showUserInfo}>Display User Information</Button>
      </Stack>
    </>
  );
};

export default () => {
  const userState = {
    currentUser: { name: 'Zhang San', role: 'admin' },
    permissions: ['read', 'write', 'delete'],
  };

  return (
    <ThemeProvider>
      <UserContext.Provider value={userState}>
        <ContextExample />
      </UserContext.Provider>
    </ThemeProvider>
  );
};
```

## Custom Styles

Demonstrates how to customize Dialog's appearance via CSS variables, achieving personalized visual effects.

```tsx
import { Stack, Button, Dialog, ThemeProvider } from '@bifrostui/react';
import React from 'react';

export default () => {
  const [dialog, contextHolder] = Dialog.useDialog();

  const showCustomStyle = async () => {
    await dialog.confirm({
      title: 'Custom Styled Dialog',
      content: 'This is an example of a custom styled Dialog',
      style: {
        '--bui-dialog-max-width': '400px',
        '--bui-dialog-border-radius': '12px',
      },
    });
  };

  return (
    <ThemeProvider>
      {contextHolder}
      <Stack direction="row" spacing="10px">
        <Button onClick={showCustomStyle}>Custom Style</Button>
      </Stack>
    </ThemeProvider>
  );
};
```

## Accessibility

- Dialog sets role attributes automatically based on its type when it pops up: when type === 'alert', role="alertdialog" is set; otherwise, role="dialog" is set.
- When Dialog pops up, Dialog's sibling elements will automatically have the aria-hidden attribute added. The aria-hidden attribute is removed when Dialog closes.
- Built-in ARIA labels:
  - aria-labelledby: Automatically links to the ID of the title element when a title is provided, offering screen readers the title information of the dialog.
  - aria-describedby: Automatically links to the ID of the content element when content is provided, offering screen readers a detailed description of the dialog.

## API

### Dialog Props

| Property    | Description                                   | Type                                                   | Default         |
| ----------- | --------------------------------------------- | ------------------------------------------------------ | --------------- |
| open        | Whether the dialog is visible                 | `boolean`                                              | `false`         |
| type        | Dialog type                                   | `'confirm' \| 'prompt' \| 'alert'`                     | `'confirm'`     |
| title       | Dialog title                                  | `ReactNode`                                            | -               |
| content     | Dialog content                                | `ReactNode`                                            | -               |
| placeholder | Placeholder text for input (prompt type only) | `string`                                               | -               |
| InputProps  | Props passed to the internal Input component  | `Partial<InputProps>`                                  | -               |
| okText      | Confirm button text                           | `ReactNode`                                            | `'OK'`          |
| cancelText  | Cancel button text                            | `ReactNode`                                            | `'Cancel'`      |
| onOk        | Confirm callback                              | `(e: SyntheticEvent, data: { value: string }) => void` | -               |
| onCancel    | Cancel callback                               | `(e: SyntheticEvent) => void`                          | -               |
| container   | Rendering container                           | `HTMLElement \| (() => HTMLElement)`                   | `document.body` |
| theme       | Theme configuration                           | `ThemeProps`                                           | -               |

### Static Methods

| Method             | Description                           | Parameter                  | Return Value                     |
| ------------------ | ------------------------------------- | -------------------------- | -------------------------------- |
| Dialog()           | Display a confirmation dialog         | `ConfirmOptions \| string` | `Promise<boolean>`               |
| Dialog.confirm()   | Display a confirmation dialog         | `ConfirmOptions \| string` | `Promise<boolean>`               |
| Dialog.prompt()    | Display an input dialog               | `PromptOptions \| string`  | `Promise<string \| false>`       |
| Dialog.alert()     | Display a warning dialog              | `AlertOptions \| string`   | `Promise<boolean>`               |
| Dialog.useDialog() | Get dialog instance and contextHolder | -                          | `[DialogFunction, ReactElement]` |

### Type Definitions

```typescript
// Confirmation Dialog Options
type ConfirmOptions = DialogOptions | string;

// Input Dialog Options
type PromptOptions =
  | (DialogOptions & {
      placeholder?: string;
      inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
    })
  | string;

// Warning Dialog Options
type AlertOptions = DialogOptions | string;

// Basic Options
interface DialogOptions {
  title?: ReactNode;
  content?: ReactNode;
  okText?: ReactNode;
  cancelText?: ReactNode;
  onOk?: (e: SyntheticEvent, data: { value: string }) => void;
  onCancel?: (e: SyntheticEvent) => void;
  // ... other Modal properties
}
```

## Style Variables

| Variable Name                       | Description          | Default Value                    |
| ----------------------------------- | -------------------- | -------------------------------- |
| `--bui-dialog-max-width`            | Dialog max-width     | `300px`                          |
| `--bui-dialog-border-radius`        | Dialog border-radius | `var(--bui-shape-radius-drawer)` |
| `--bui-dialog-title-padding`        | Title padding        | `0 40px 9px`                     |
| `--bui-dialog-content-padding`      | Content padding      | `0 24px`                         |
| `--bui-dialog-actions-margin`       | Actions margin       | `15px 0 0 0`                     |
| `--bui-dialog-button-height`        | Button height        | `53px`                           |
| `--bui-dialog-button-line-height`   | Button line-height   | `25px`                           |
| `--bui-dialog-button-padding`       | Button padding       | `12px 0 13px`                    |
| `--bui-dialog-button-font-size`     | Button font-size     | `17px`                           |
| `--bui-dialog-button-border-radius` | Button border-radius | `4px`                            |
| `--bui-dialog-button-border-left`   | Button border-left   | `1px solid rgba(0, 0, 0, 0.05)`  |

```

```
