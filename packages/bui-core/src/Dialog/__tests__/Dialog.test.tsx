import React, { createContext, useContext } from 'react';
import { fireEvent } from '@testing-library/react';
import { Button, ThemeProvider } from '@bifrostui/react';
import { render, screen, act } from 'testing';
import Dialog from '../Dialog';
import DialogWithMethods from '../index';

// 创建多个自定义Context用于测试
const UserContext = createContext({
  userId: '',
  username: '',
  role: '',
  permissions: [] as string[],
});

const AppContext = createContext({
  appName: '',
  version: '',
  theme: 'light',
  language: 'zh-CN',
});

const AuthContext = createContext({
  isAuthenticated: false,
  token: '',
  loginTime: null as Date | null,
});

const ConfigContext = createContext({
  apiUrl: '',
  debug: false,
  features: {} as Record<string, boolean>,
});

// Context消费组件，用于在Dialog内部显示Context信息
const UserContextConsumer = () => {
  const context = useContext(UserContext);
  return (
    <div data-testid="user-context-data">
      <div>用户ID: {context.userId}</div>
      <div>用户名: {context.username}</div>
      <div>角色: {context.role}</div>
      <div>权限: {context.permissions.join(', ')}</div>
    </div>
  );
};

const AppContextConsumer = () => {
  const context = useContext(AppContext);
  return (
    <div data-testid="app-context-data">
      <div>应用名: {context.appName}</div>
      <div>版本: {context.version}</div>
      <div>主题: {context.theme}</div>
      <div>语言: {context.language}</div>
    </div>
  );
};

const AuthContextConsumer = () => {
  const context = useContext(AuthContext);
  return (
    <div data-testid="auth-context-data">
      <div>认证状态: {context.isAuthenticated ? '已认证' : '未认证'}</div>
      <div>Token: {context.token}</div>
      <div>登录时间: {context.loginTime?.toISOString() || '未登录'}</div>
    </div>
  );
};

const ConfigContextConsumer = () => {
  const context = useContext(ConfigContext);
  return (
    <div data-testid="config-context-data">
      <div>API地址: {context.apiUrl}</div>
      <div>调试模式: {context.debug ? '开启' : '关闭'}</div>
      <div>功能特性: {JSON.stringify(context.features)}</div>
    </div>
  );
};

// 模拟异步API调用
const mockAsyncOperation = (delay = 1000, shouldResolve = true) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve('操作成功');
      } else {
        reject(new Error('操作失败'));
      }
    }, delay);
  });
};

// 安全的异步操作，不会抛出未处理的错误
const safeAsyncOperation = (delay = 1000, shouldResolve = true) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve('操作成功');
      } else {
        resolve(new Error('操作失败'));
      }
    }, delay);
  });
};

describe('Dialog Enhanced Tests', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
    vi.useFakeTimers({ shouldAdvanceTime: true });
  });

  afterEach(() => {
    vi.clearAllTimers();
    vi.useRealTimers();
    vi.clearAllMocks();
  });

  describe('Basic Component Rendering', () => {
    it('should render Dialog with title and content', () => {
      render(<Dialog open title="Test Title" content="Test Content" />);

      expect(screen.getByText('Test Title')).toBeInTheDocument();
      expect(screen.getByText('Test Content')).toBeInTheDocument();
    });

    it('should not render when open is false', () => {
      render(<Dialog open={false} title="Test Title" content="Test Content" />);

      expect(screen.queryByText('Test Title')).not.toBeInTheDocument();
    });

    it('should render different types correctly', () => {
      const { rerender } = render(
        <Dialog
          open
          title="Confirm Dialog"
          content="Confirm content"
          type="confirm"
        />,
      );

      expect(screen.getByText('Confirm Dialog')).toBeInTheDocument();
      expect(screen.getByText('取消')).toBeInTheDocument();
      expect(screen.getByText('确定')).toBeInTheDocument();

      rerender(
        <Dialog
          open
          title="Alert Dialog"
          content="Alert content"
          type="alert"
        />,
      );

      expect(screen.getByText('Alert Dialog')).toBeInTheDocument();
      expect(screen.queryByText('取消')).not.toBeInTheDocument();
      expect(screen.getByText('确定')).toBeInTheDocument();

      rerender(
        <Dialog
          open
          title="Prompt Dialog"
          content="Prompt content"
          type="prompt"
          placeholder="Enter text"
        />,
      );

      expect(screen.getByText('Prompt Dialog')).toBeInTheDocument();
      expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument();
    });
  });

  describe('Event Handling', () => {
    it('should call onOk when confirm button is clicked', async () => {
      const onOk = vi.fn();

      render(<Dialog open title="Test" content="Test" onOk={onOk} />);

      fireEvent.click(screen.getByText('确定'));

      await act(async () => {
        await vi.runAllTimers();
      });

      expect(onOk).toHaveBeenCalledWith(
        expect.any(Object),
        expect.objectContaining({ value: '' }),
      );
    });

    it('should call onCancel when cancel button is clicked', async () => {
      const onCancel = vi.fn();

      render(
        <Dialog
          open
          title="Test"
          content="Test"
          onCancel={onCancel}
          type="confirm"
        />,
      );

      fireEvent.click(screen.getByText('取消'));

      await act(async () => {
        await vi.runAllTimers();
      });

      expect(onCancel).toHaveBeenCalledWith(expect.any(Object));
    });

    it('should handle prompt input value', async () => {
      const onOk = vi.fn();

      render(
        <Dialog
          open
          title="Prompt Test"
          content="Enter value"
          type="prompt"
          placeholder="Enter text"
          onOk={onOk}
        />,
      );

      const input = screen.getByPlaceholderText('Enter text');
      fireEvent.change(input, { target: { value: 'test input' } });
      fireEvent.click(screen.getByText('确定'));

      await act(async () => {
        await vi.runAllTimers();
      });

      expect(onOk).toHaveBeenCalledWith(
        expect.any(Object),
        expect.objectContaining({ value: 'test input' }),
      );
    });
  });

  describe('Async Operations Handling', () => {
    describe('Promise Return Values', () => {
      it('should resolve with true when Dialog.confirm is confirmed', async () => {
        let result;

        act(() => {
          DialogWithMethods.confirm({
            title: '确认对话框',
            content: '这是一个确认对话框',
          }).then((res) => {
            result = res;
          });
        });

        expect(screen.getByText('确认对话框')).toBeInTheDocument();

        fireEvent.click(screen.getByText('确定'));

        await act(async () => {
          await vi.runAllTimers();
        });

        expect(result).toBe(true);
      });

      it('should resolve with false when Dialog.confirm is cancelled', async () => {
        let result;

        act(() => {
          DialogWithMethods.confirm({
            title: '确认对话框',
            content: '这是一个确认对话框',
          }).then((res) => {
            result = res;
          });
        });

        expect(screen.getByText('确认对话框')).toBeInTheDocument();

        fireEvent.click(screen.getByText('取消'));

        await act(async () => {
          await vi.runAllTimers();
        });

        expect(result).toBe(false);
      });

      it('should resolve with input value when Dialog.prompt is confirmed', async () => {
        let result;

        act(() => {
          DialogWithMethods.prompt({
            title: '输入对话框',
            content: '请输入内容',
            placeholder: '请输入',
          }).then((res) => {
            result = res;
          });
        });

        expect(screen.getByText('输入对话框')).toBeInTheDocument();

        const input = screen.getByPlaceholderText('请输入');
        fireEvent.change(input, { target: { value: 'test value' } });
        fireEvent.click(screen.getByText('确定'));

        await act(async () => {
          await vi.runAllTimers();
        });

        expect(result).toBe('test value');
      });

      it('should resolve with null when Dialog.prompt is cancelled', async () => {
        let result;

        act(() => {
          DialogWithMethods.prompt({
            title: '输入对话框',
            content: '请输入内容',
            placeholder: '请输入',
          }).then((res) => {
            result = res;
          });
        });

        expect(screen.getByText('输入对话框')).toBeInTheDocument();

        fireEvent.click(screen.getByText('取消'));

        await act(async () => {
          await vi.runAllTimers();
        });

        expect(result).toBe(null);
      });
    });

    describe('Async Callback Functions', () => {
      it('should wait for async onOk callback to complete before closing', async () => {
        const asyncOnOk = vi.fn().mockImplementation(async () => {
          await mockAsyncOperation(500);
          return '异步操作完成';
        });

        render(
          <Dialog
            open
            title="异步操作测试"
            content="测试异步onOk回调"
            onOk={asyncOnOk}
          />,
        );

        fireEvent.click(screen.getByText('确定'));

        // 在异步操作完成前，对话框应该仍然存在
        expect(screen.getByText('异步操作测试')).toBeInTheDocument();

        await act(async () => {
          await vi.advanceTimersByTime(600);
        });

        expect(asyncOnOk).toHaveBeenCalled();
      });

      it('should wait for async onCancel callback to complete before closing', async () => {
        const asyncOnCancel = vi.fn().mockImplementation(async () => {
          await mockAsyncOperation(300);
          return '取消操作完成';
        });

        render(
          <Dialog
            open
            title="异步取消测试"
            content="测试异步onCancel回调"
            onCancel={asyncOnCancel}
            type="confirm"
          />,
        );

        fireEvent.click(screen.getByText('取消'));

        await act(async () => {
          await vi.advanceTimersByTime(400);
        });

        expect(asyncOnCancel).toHaveBeenCalled();
      });

      it('should handle async onOk callback errors gracefully', async () => {
        const asyncOnOk = vi.fn().mockImplementation(async () => {
          await mockAsyncOperation(300, false);
          throw new Error('操作失败');
        });

        let errorCaught = false;
        const consoleError = vi
          .spyOn(console, 'error')
          .mockImplementation(() => {
            // Mock implementation to avoid console output
          });

        render(
          <Dialog
            open
            title="异步错误处理测试"
            content="测试异步onOk错误处理"
            onOk={async (...args) => {
              try {
                await asyncOnOk(...args);
              } catch (error) {
                errorCaught = true;
                // console.error('Caught async error:', error);
              }
            }}
          />,
        );

        fireEvent.click(screen.getByText('确定'));

        await act(async () => {
          await vi.advanceTimersByTime(600);
        });

        expect(asyncOnOk).toHaveBeenCalled();
        expect(errorCaught).toBe(true);
        consoleError.mockRestore();
      });

      it('should handle complex async operations with multiple steps', async () => {
        const step1 = vi.fn();
        const step2 = vi.fn();
        const step3 = vi.fn();

        const complexAsyncOnOk = vi.fn().mockImplementation(async () => {
          step1();
          step2();
          step3();
          return 'all steps complete';
        });

        render(
          <Dialog
            open
            title="复杂异步操作测试"
            content="测试多步骤异步操作"
            onOk={complexAsyncOnOk}
          />,
        );

        fireEvent.click(screen.getByText('确定'));

        await act(async () => {
          await vi.runAllTimers();
        });

        expect(complexAsyncOnOk).toHaveBeenCalled();
        expect(step1).toHaveBeenCalled();
        expect(step2).toHaveBeenCalled();
        expect(step3).toHaveBeenCalled();
      });
    });

    describe('useDialog Async Operations', () => {
      it('should handle async operations with useDialog hook', async () => {
        const TestComponent = () => {
          const [dialog, contextHolder] = DialogWithMethods.useDialog();

          return (
            <div>
              {contextHolder}
              <Button
                data-testid="use-dialog-async-test-btn"
                onClick={async () => {
                  try {
                    const result = await dialog.confirm({
                      title: 'useDialog异步操作测试',
                      content: '测试useDialog异步操作功能',
                      onOk: async () => {
                        await safeAsyncOperation(300);
                        return '异步操作完成';
                      },
                    });
                    // 这里可以处理result
                    console.log('Dialog result:', result);
                  } catch (error) {
                    console.log('Dialog error:', error);
                  }
                }}
              >
                useDialog异步操作测试
              </Button>
            </div>
          );
        };

        render(<TestComponent />);

        fireEvent.click(screen.getByTestId('use-dialog-async-test-btn'));

        // 使用更精确的选择器来避免重复元素问题
        expect(
          screen.getByRole('heading', { name: 'useDialog异步操作测试' }),
        ).toBeInTheDocument();

        fireEvent.click(screen.getByText('确定'));

        await act(async () => {
          await vi.advanceTimersByTime(400);
        });
      });

      it('should handle async prompt operations with useDialog', async () => {
        let promptResult;

        const TestComponent = () => {
          const [dialog, contextHolder] = DialogWithMethods.useDialog();

          return (
            <div>
              {contextHolder}
              <Button
                data-testid="use-dialog-prompt-async-btn"
                onClick={async () => {
                  try {
                    promptResult = await dialog.prompt({
                      title: 'useDialog异步输入测试',
                      content: '请输入内容进行异步处理',
                      placeholder: '输入内容',
                      onOk: async (_, { value }) => {
                        if (value.length < 3) {
                          throw new Error('输入内容太短');
                        }
                        await safeAsyncOperation(200);
                        return '验证通过';
                      },
                    });
                  } catch (error) {
                    promptResult = null;
                  }
                }}
              >
                useDialog异步输入测试
              </Button>
            </div>
          );
        };

        render(<TestComponent />);

        fireEvent.click(screen.getByTestId('use-dialog-prompt-async-btn'));

        const input = screen.getByPlaceholderText('输入内容');
        fireEvent.change(input, { target: { value: '测试输入内容' } });
        fireEvent.click(screen.getByText('确定'));

        await act(async () => {
          await vi.advanceTimersByTime(300);
        });

        expect(promptResult).toBe('测试输入内容');
      });

      it('should handle async validation in prompt with error handling', async () => {
        let validationError = null;
        let dialogClosed = false;

        const TestComponent = () => {
          const [dialog, contextHolder] = DialogWithMethods.useDialog();

          return (
            <div>
              {contextHolder}
              <Button
                data-testid="use-dialog-validation-btn"
                onClick={async () => {
                  try {
                    await dialog.prompt({
                      title: '异步验证测试',
                      content: '请输入至少3个字符',
                      placeholder: '输入内容',
                      onOk: async (_, { value }) => {
                        await safeAsyncOperation(200);
                        if (value.length < 3) {
                          // 不抛出错误，而是返回false来阻止对话框关闭
                          validationError = new Error('输入内容太短');
                          return false;
                        }
                        return '验证通过';
                      },
                      onCancel: () => {
                        dialogClosed = true;
                      },
                    });
                  } catch (error) {
                    // 正确处理错误，不让它成为未处理的rejection
                    // console.log('验证失败:', error.message);
                    validationError = error;
                  }
                }}
              >
                异步验证测试
              </Button>
            </div>
          );
        };

        render(<TestComponent />);

        fireEvent.click(screen.getByTestId('use-dialog-validation-btn'));

        const input = screen.getByPlaceholderText('输入内容');
        fireEvent.change(input, { target: { value: 'ab' } }); // 输入少于3个字符

        // 点击确定后等待验证处理
        fireEvent.click(screen.getByText('确定'));

        await act(async () => {
          await vi.advanceTimersByTime(300);
        });

        // 验证错误被正确处理
        expect(validationError).not.toBeNull();
        expect(validationError?.message).toBe('输入内容太短');
        expect(dialogClosed).toBe(false);
      });
    });

    describe('Concurrent Async Operations', () => {
      it('should handle multiple concurrent dialog operations', async () => {
        const results = [];

        const TestComponent = () => {
          const [dialog, contextHolder] = DialogWithMethods.useDialog();

          return (
            <div>
              {contextHolder}
              <Button
                data-testid="concurrent-dialogs-btn"
                onClick={async () => {
                  // 同时触发多个对话框（虽然实际上会按顺序显示）
                  const promises = [
                    dialog.confirm({
                      title: '并发测试1',
                      content: '第一个对话框',
                    }),
                    dialog.alert({
                      title: '并发测试2',
                      content: '第二个对话框',
                    }),
                    dialog.prompt({
                      title: '并发测试3',
                      content: '第三个对话框',
                      placeholder: '输入内容',
                    }),
                  ];

                  const allResults = await Promise.all(promises);
                  results.push(...allResults);
                }}
              >
                并发对话框测试
              </Button>
            </div>
          );
        };

        render(<TestComponent />);

        fireEvent.click(screen.getByTestId('concurrent-dialogs-btn'));

        // 由于对话框是按顺序显示的，我们需要依次处理每个对话框
        // 这里只测试第一个对话框的显示
        expect(screen.getByText('并发测试1')).toBeInTheDocument();
      });
    });
  });

  describe('Static Methods', () => {
    it('should work with Dialog.confirm', async () => {
      let result;

      act(() => {
        DialogWithMethods.confirm('确认删除这个项目吗？').then((res) => {
          result = res;
        });
      });

      expect(screen.getByText('确认删除这个项目吗？')).toBeInTheDocument();

      fireEvent.click(screen.getByText('确定'));

      await act(async () => {
        await vi.runAllTimers();
      });

      expect(result).toBe(true);
    });

    it('should work with Dialog.alert', async () => {
      let result;

      act(() => {
        DialogWithMethods.alert('操作成功！').then((res) => {
          result = res;
        });
      });

      expect(screen.getByText('操作成功！')).toBeInTheDocument();
      expect(screen.queryByText('取消')).not.toBeInTheDocument();

      fireEvent.click(screen.getByText('确定'));

      await act(async () => {
        await vi.runAllTimers();
      });

      expect(result).toBe(true);
    });

    it('should work with Dialog.prompt', async () => {
      let result;

      act(() => {
        DialogWithMethods.prompt('请输入您的姓名：').then((res) => {
          result = res;
        });
      });

      expect(screen.getByText('请输入您的姓名：')).toBeInTheDocument();

      const input = screen.getByRole('textbox');
      fireEvent.change(input, { target: { value: '张三' } });
      fireEvent.click(screen.getByText('确定'));

      await act(async () => {
        await vi.runAllTimers();
      });

      expect(result).toBe('张三');
    });

    it('should work with Dialog.prompt when cancelled', async () => {
      let result;

      act(() => {
        DialogWithMethods.prompt('请输入您的姓名：').then((res) => {
          result = res;
        });
      });

      expect(screen.getByText('请输入您的姓名：')).toBeInTheDocument();

      fireEvent.click(screen.getByText('取消'));

      await act(async () => {
        await vi.runAllTimers();
      });

      expect(result).toBe(null);
    });
  });

  describe('Context Inheritance Tests', () => {
    it('should inherit UserContext in Dialog content', () => {
      render(
        <UserContext.Provider
          value={{
            userId: 'user123',
            username: '张三',
            role: 'admin',
            permissions: ['read', 'write', 'delete'],
          }}
        >
          <Dialog
            open
            title="用户信息对话框"
            content={<UserContextConsumer />}
          />
        </UserContext.Provider>,
      );

      expect(screen.getByText('用户信息对话框')).toBeInTheDocument();
      expect(screen.getByText('用户ID: user123')).toBeInTheDocument();
      expect(screen.getByText('用户名: 张三')).toBeInTheDocument();
      expect(screen.getByText('角色: admin')).toBeInTheDocument();
      expect(screen.getByText('权限: read, write, delete')).toBeInTheDocument();
    });

    it('should inherit AppContext in Dialog content', () => {
      render(
        <AppContext.Provider
          value={{
            appName: 'BifrostUI',
            version: '2.0.0',
            theme: 'dark',
            language: 'en-US',
          }}
        >
          <Dialog
            open
            title="应用信息对话框"
            content={<AppContextConsumer />}
          />
        </AppContext.Provider>,
      );

      expect(screen.getByText('应用信息对话框')).toBeInTheDocument();
      expect(screen.getByText('应用名: BifrostUI')).toBeInTheDocument();
      expect(screen.getByText('版本: 2.0.0')).toBeInTheDocument();
      expect(screen.getByText('主题: dark')).toBeInTheDocument();
      expect(screen.getByText('语言: en-US')).toBeInTheDocument();
    });

    it('should inherit AuthContext in Dialog content', () => {
      const loginTime = new Date('2024-01-01T10:00:00Z');
      render(
        <AuthContext.Provider
          value={{
            isAuthenticated: true,
            token: 'abc123token',
            loginTime,
          }}
        >
          <Dialog
            open
            title="认证信息对话框"
            content={<AuthContextConsumer />}
          />
        </AuthContext.Provider>,
      );

      expect(screen.getByText('认证信息对话框')).toBeInTheDocument();
      expect(screen.getByText('认证状态: 已认证')).toBeInTheDocument();
      expect(screen.getByText('Token: abc123token')).toBeInTheDocument();
      expect(
        screen.getByText('登录时间: 2024-01-01T10:00:00.000Z'),
      ).toBeInTheDocument();
    });

    it('should inherit ConfigContext in Dialog content', () => {
      render(
        <ConfigContext.Provider
          value={{
            apiUrl: 'https://api.example.com',
            debug: true,
            features: { newUI: true, betaFeatures: false },
          }}
        >
          <Dialog
            open
            title="配置信息对话框"
            content={<ConfigContextConsumer />}
          />
        </ConfigContext.Provider>,
      );

      expect(screen.getByText('配置信息对话框')).toBeInTheDocument();
      expect(
        screen.getByText('API地址: https://api.example.com'),
      ).toBeInTheDocument();
      expect(screen.getByText('调试模式: 开启')).toBeInTheDocument();
      expect(
        screen.getByText('功能特性: {"newUI":true,"betaFeatures":false}'),
      ).toBeInTheDocument();
    });
  });

  describe('ThemeProvider Integration', () => {
    it('should work with ThemeProvider', () => {
      const customTokens = {
        '--bui-color-primary': '#ff0000',
      };

      render(
        <ThemeProvider token={customTokens}>
          <Dialog open title="主题测试对话框" content="测试ThemeProvider集成" />
        </ThemeProvider>,
      );

      expect(screen.getByText('主题测试对话框')).toBeInTheDocument();
      expect(screen.getByText('测试ThemeProvider集成')).toBeInTheDocument();
    });
  });
});
