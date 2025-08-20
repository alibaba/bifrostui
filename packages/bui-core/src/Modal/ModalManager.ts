/**
 * Modal管理器，用于管理多个弹窗的状态
 * 参考MUI的ModalManager实现
 */

interface ManagedModal {
  modalRef: HTMLElement;
  mount: HTMLElement;
}

function isOverflowing(container: Element): boolean {
  if (document.body === container) {
    return window.innerWidth > document.documentElement.clientWidth;
  }

  return container.scrollHeight > container.clientHeight;
}

export function ariaHidden(element: Element, show: boolean): void {
  if (show) {
    element.setAttribute('aria-hidden', 'true');
  } else {
    element.removeAttribute('aria-hidden');
  }
}
function getPaddingRight(element: Element): number {
  return parseInt(window.getComputedStyle(element).paddingRight, 10) || 0;
}
function isAriaHiddenForbiddenOnElement(element: Element): boolean {
  const forbiddenTagNames = [
    'TEMPLATE',
    'SCRIPT',
    'STYLE',
    'LINK',
    'MAP',
    'META',
    'NOSCRIPT',
    'PICTURE',
    'COL',
    'COLGROUP',
    'PARAM',
    'SLOT',
    'SOURCE',
    'TRACK',
  ];
  const isForbiddenTagName = forbiddenTagNames.includes(element.tagName);
  const isInputHidden =
    element.tagName === 'INPUT' && element.getAttribute('type') === 'hidden';
  return isForbiddenTagName || isInputHidden;
}
function ariaHiddenSiblings(
  container: Element,
  mountElement: Element,
  currentElement: Element,
  elementsToExclude: readonly Element[],
  hide: boolean,
): void {
  const blacklist = [mountElement, currentElement, ...elementsToExclude];
  [].forEach.call(container.children, (element: Element) => {
    const isNotExcludedElement = !blacklist.includes(element);
    const isNotForbiddenElement = !isAriaHiddenForbiddenOnElement(element);
    if (isNotExcludedElement && isNotForbiddenElement) {
      ariaHidden(element, hide);
    }
  });
}

function findIndexOf<T>(
  items: readonly T[],
  callback: (item: T) => boolean,
): number {
  let idx = -1;
  items.some((item, index) => {
    if (callback(item)) {
      idx = index;
      return true;
    }
    return false;
  });
  return idx;
}

function handleContainer(containerInfo: {
  container: Element;
  disableScrollLock?: boolean;
}) {
  const restoreStyle: Array<{
    property: string;
    el: HTMLElement;
    value: string;
  }> = [];

  const container = containerInfo.container as HTMLElement;
  const { disableScrollLock } = containerInfo;

  if (!disableScrollLock) {
    if (isOverflowing(container)) {
      // 计算滚动条宽度
      const scrollbarSize =
        window.innerWidth - document.documentElement.clientWidth;

      restoreStyle.push({
        property: 'padding-right',
        el: container,
        value: container.style.paddingRight,
      });

      // 添加padding来补偿滚动条宽度
      container.style.paddingRight = `${getPaddingRight(container) + scrollbarSize}px`;
    }

    // 阻止滚动
    restoreStyle.push(
      {
        property: 'overflow',
        el: container,
        value: container.style.overflow,
      },
      {
        property: 'overflow-x',
        el: container,
        value: container.style.overflowX,
      },
      {
        property: 'overflow-y',
        el: container,
        value: container.style.overflowY,
      },
    );
    container.style.overflow = 'hidden';
  }

  const restore = () => {
    restoreStyle.forEach(({ property, el, value }) => {
      if (value) {
        el.style.setProperty(property, value);
      } else {
        el.style.removeProperty(property);
      }
    });
  };

  return restore;
}

function getHiddenSiblings(container: Element): Element[] {
  const hiddenSiblings: Element[] = [];
  [].forEach.call(container.children, (element: Element) => {
    if (element.getAttribute('aria-hidden') === 'true') {
      hiddenSiblings.push(element);
    }
  });
  return hiddenSiblings;
}

export class ModalManager {
  private modals: ManagedModal[] = [];

  private containers: Array<{
    container: Element;
    modals: ManagedModal[];
    restore?: (() => void) | null;
    hiddenSiblings?: Element[];
  }> = [];

  add(modal: ManagedModal, container: HTMLElement): number {
    let modalIndex = this.modals.indexOf(modal);
    if (modalIndex !== -1) {
      return modalIndex;
    }
    modalIndex = this.modals.length;
    this.modals.push(modal);

    // If the modal we are adding is already in the DOM.
    if (modal.modalRef) {
      ariaHidden(modal.modalRef, false);
    }

    const hiddenSiblings = getHiddenSiblings(container);
    ariaHiddenSiblings(
      container,
      modal.mount,
      modal.modalRef,
      hiddenSiblings,
      true,
    );

    const containerIndex = findIndexOf(
      this.containers,
      (item) => item.container === container,
    );
    if (containerIndex !== -1) {
      this.containers[containerIndex].modals.push(modal);
      return modalIndex;
    }

    this.containers.push({
      modals: [modal],
      container,
      restore: null,
      hiddenSiblings,
    });

    return modalIndex;
  }

  mount(modal: ManagedModal, props: { disableScrollLock?: boolean }): void {
    const containerIndex = findIndexOf(this.containers, (item) =>
      item.modals.includes(modal),
    );
    const containerInfo = this.containers[containerIndex];

    if (!containerInfo.restore) {
      containerInfo.restore = handleContainer({
        container: containerInfo.container,
        disableScrollLock: props.disableScrollLock,
      });
    }
  }

  remove(modal: ManagedModal, ariaHiddenState = true): number {
    const modalIndex = this.modals.indexOf(modal);

    if (modalIndex === -1) {
      return modalIndex;
    }

    const containerIndex = findIndexOf(
      this.containers,
      (item) => item.modals.indexOf(modal) !== -1,
    );
    const containerInfo = this.containers[containerIndex];

    containerInfo.modals.splice(containerInfo.modals.indexOf(modal), 1);
    this.modals.splice(modalIndex, 1);

    // 如果这是最后一个modal
    if (containerInfo.modals.length === 0) {
      // 恢复滚动
      if (containerInfo.restore) {
        containerInfo.restore();
      }

      if (modal.modalRef) {
        ariaHidden(modal.modalRef, ariaHiddenState);
      }

      ariaHiddenSiblings(
        containerInfo.container,
        modal.mount,
        modal.modalRef,
        containerInfo.hiddenSiblings,
        false,
      );

      this.containers.splice(containerIndex, 1);
    } else {
      const nextTop = containerInfo.modals[containerInfo.modals.length - 1];
      if (nextTop.modalRef) {
        ariaHidden(nextTop.modalRef, false);
      }
    }

    return modalIndex;
  }

  isTopModal(modal: ManagedModal): boolean {
    return (
      this.modals.length > 0 && this.modals[this.modals.length - 1] === modal
    );
  }
}

// 全局单例
export const modalManager = new ModalManager();
