// 参考rc-util: https://github.com/react-component/util/blob/master/src/React/render.ts
import type { ReactElement } from 'react';
import * as ReactDOM from 'react-dom';
import * as ReactDOMClient from 'react-dom/client';
import type { Root } from 'react-dom/client';

const MARK = '__bifrostui_react_root__';
type ContainerType = (Element | DocumentFragment) & {
  [MARK]?: Root;
};
type CreateRoot = (container: ContainerType) => Root;

// Let compiler not to search module usage
const fullClone = {
  ...ReactDOM,
} as typeof ReactDOM & {
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED?: {
    usingClientEntryPoint?: boolean;
  };
  createRoot?: CreateRoot;
  render?: (node: ReactElement, container: ContainerType) => void;
  unmountComponentAtNode?: (container: ContainerType) => boolean;
};
// @ts-ignore
const { version, render: reactRender, unmountComponentAtNode } = fullClone;

let createRoot: CreateRoot;
try {
  const majorVersion = Number((version || '').split('.')[0]);
  if (majorVersion >= 18) {
    // React 18/19: createRoot lives in react-dom/client
    createRoot =
      (ReactDOMClient as unknown as { createRoot?: CreateRoot }).createRoot ||
      fullClone.createRoot;
  }
} catch (e) {
  // Do nothing;
}

function toggleWarning(skip: boolean) {
  const { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } = fullClone;

  if (
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED &&
    typeof __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED === 'object'
  ) {
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.usingClientEntryPoint =
      skip;
  }
}

// ========================== Render ==========================

/** @private Test usage. Not work in prod */
// eslint-disable-next-line consistent-return
export function testModernRender(
  node: ReactElement,
  container: ContainerType,
  isTest: boolean,
) {
  if (process.env.NODE_ENV !== 'production' && isTest) {
    return legacyRender(node, container);
  }
}

function modernRender(node: ReactElement, container: ContainerType) {
  toggleWarning(true);
  const root = container[MARK] || createRoot(container);
  toggleWarning(false);
  // Cast to the exact parameter type of Root.render to avoid
  // React 18/19 @types/react version skew (ReactPortal.children
  // requirement in v19, bigint in ReactNode in v19, etc.).
  root.render(node as Parameters<Root['render']>[0]);
  // eslint-disable-next-line no-param-reassign
  container[MARK] = root;
}

function legacyRender(node: ReactElement, container: ContainerType) {
  if (typeof reactRender === 'function') {
    reactRender(node, container);
    return;
  }
  // React 19+: legacy ReactDOM.render was removed. Fall back to createRoot.
  if (createRoot) {
    modernRender(node, container);
  }
}

export function render(node: ReactElement, container: ContainerType) {
  if (createRoot) {
    modernRender(node, container);
    return;
  }
  legacyRender(node, container);
}

// ========================== Unmount =========================

/** @private Test usage. Not work in prod */
// eslint-disable-next-line consistent-return
export function testLegacyUnmount(container: ContainerType, isTest: boolean) {
  if (process.env.NODE_ENV !== 'production' && isTest) {
    return legacyUnmount(container);
  }
}

async function modernUnmount(container: ContainerType) {
  // Delay to unmount to avoid React 18 sync warning
  return Promise.resolve().then(() => {
    container[MARK]?.unmount();
    // eslint-disable-next-line no-param-reassign
    delete container[MARK];
  });
}

function legacyUnmount(container: ContainerType) {
  if (typeof unmountComponentAtNode === 'function') {
    return unmountComponentAtNode(container);
  }
  // React 19+: unmountComponentAtNode was removed. Use modern unmount.
  return modernUnmount(container);
}

export function unmount(container: ContainerType) {
  if (createRoot) {
    // Delay to unmount to avoid React 18 sync warning
    return modernUnmount(container);
  }

  return legacyUnmount(container);
}
