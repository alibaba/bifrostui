import { modalManager, ariaHidden } from '../ModalManager';

describe('ModalManager', () => {
  let container: HTMLElement;
  let modal: { modalRef: HTMLElement; mount: HTMLElement };

  beforeEach(() => {
    // Reset modal manager state
    modalManager.modals = [];
    modalManager.containers = [];

    // Create test container and modal elements
    container = document.createElement('div');
    document.body.appendChild(container);

    modal = {
      modalRef: document.createElement('div'),
      mount: document.createElement('div'),
    };
  });

  afterEach(() => {
    // Clean up
    if (container.parentNode) {
      container.parentNode.removeChild(container);
    }
    modalManager.modals = [];
    modalManager.containers = [];
  });

  describe('add', () => {
    it('should add modal to manager', () => {
      const index = modalManager.add(modal, container);
      expect(index).toBe(0);
      expect(modalManager.modals).toContain(modal);
    });

    it('should return existing index if modal already exists', () => {
      const index1 = modalManager.add(modal, container);
      const index2 = modalManager.add(modal, container);
      expect(index1).toBe(index2);
    });

    it('should add modal to existing container', () => {
      const modal2 = {
        modalRef: document.createElement('div'),
        mount: document.createElement('div'),
      };

      modalManager.add(modal, container);
      modalManager.add(modal2, container);

      const containerInfo = modalManager.containers.find(
        (c) => c.container === container,
      );
      expect(containerInfo?.modals).toHaveLength(2);
    });

    it('should create new container info for new container', () => {
      const container2 = document.createElement('div');
      document.body.appendChild(container2);

      modalManager.add(modal, container);

      const modal2 = {
        modalRef: document.createElement('div'),
        mount: document.createElement('div'),
      };
      modalManager.add(modal2, container2);

      expect(modalManager.containers).toHaveLength(2);

      document.body.removeChild(container2);
    });

    it('should set aria-hidden on modal ref', () => {
      const removeAttributeSpy = vi.spyOn(modal.modalRef, 'removeAttribute');

      modalManager.add(modal, container);

      expect(removeAttributeSpy).toHaveBeenCalledWith('aria-hidden');
    });
  });

  describe('mount', () => {
    it('should mount modal with scroll lock', () => {
      modalManager.add(modal, container);
      modalManager.mount(modal, { disableScrollLock: false });

      const containerInfo = modalManager.containers.find((c) =>
        c.modals.includes(modal),
      );
      expect(containerInfo?.restore).toBeDefined();
    });

    it('should mount modal without scroll lock', () => {
      modalManager.add(modal, container);
      modalManager.mount(modal, { disableScrollLock: true });

      const containerInfo = modalManager.containers.find((c) =>
        c.modals.includes(modal),
      );
      expect(containerInfo?.restore).toBeDefined();
    });
  });

  describe('remove', () => {
    it('should remove modal from manager', () => {
      modalManager.add(modal, container);
      const index = modalManager.remove(modal);

      expect(index).toBe(0);
      expect(modalManager.modals).not.toContain(modal);
    });

    it('should return -1 if modal not found', () => {
      const index = modalManager.remove(modal);
      expect(index).toBe(-1);
    });

    it('should restore container when last modal is removed', () => {
      modalManager.add(modal, container);
      modalManager.mount(modal, { disableScrollLock: false });

      const containerInfo = modalManager.containers.find((c) =>
        c.modals.includes(modal),
      );
      const restoreSpy = vi.fn();
      if (containerInfo) {
        containerInfo.restore = restoreSpy;
      }

      modalManager.remove(modal);

      expect(restoreSpy).toHaveBeenCalled();
    });

    it('should handle multiple modals in same container', () => {
      const modal2 = {
        modalRef: document.createElement('div'),
        mount: document.createElement('div'),
      };

      modalManager.add(modal, container);
      modalManager.add(modal2, container);

      modalManager.remove(modal2);

      expect(modalManager.modals).toContain(modal);
      expect(modalManager.modals).not.toContain(modal2);
    });

    it('should set aria-hidden on next top modal', () => {
      const modal2 = {
        modalRef: document.createElement('div'),
        mount: document.createElement('div'),
      };

      modalManager.add(modal, container);
      modalManager.add(modal2, container);

      const removeAttributeSpy = vi.spyOn(modal.modalRef, 'removeAttribute');

      modalManager.remove(modal2);

      // modal1 should now be the top modal and have aria-hidden removed
      expect(removeAttributeSpy).toHaveBeenCalledWith('aria-hidden');
    });

    it('should clean up container when no modals remain', () => {
      modalManager.add(modal, container);
      modalManager.remove(modal);

      expect(modalManager.containers).toHaveLength(0);
    });

    it('should set aria-hidden on modal ref when specified', () => {
      modalManager.add(modal, container);

      const setAttributeSpy = vi.spyOn(modal.modalRef, 'setAttribute');

      modalManager.remove(modal, true);

      expect(setAttributeSpy).toHaveBeenCalledWith('aria-hidden', 'true');
    });
  });

  describe('isTopModal', () => {
    it('should return true for top modal', () => {
      modalManager.add(modal, container);
      expect(modalManager.isTopModal(modal)).toBe(true);
    });

    it('should return false for non-top modal', () => {
      const modal2 = {
        modalRef: document.createElement('div'),
        mount: document.createElement('div'),
      };

      modalManager.add(modal, container);
      modalManager.add(modal2, container);

      expect(modalManager.isTopModal(modal)).toBe(false);
      expect(modalManager.isTopModal(modal2)).toBe(true);
    });

    it('should return false for modal not in manager', () => {
      const otherModal = {
        modalRef: document.createElement('div'),
        mount: document.createElement('div'),
      };

      expect(modalManager.isTopModal(otherModal)).toBe(false);
    });
  });
});

describe('ariaHidden utility', () => {
  let element: HTMLElement;

  beforeEach(() => {
    element = document.createElement('div');
  });

  it('should set aria-hidden attribute when show is true', () => {
    ariaHidden(element, true);
    expect(element.getAttribute('aria-hidden')).toBe('true');
  });

  it('should remove aria-hidden attribute when show is false', () => {
    element.setAttribute('aria-hidden', 'true');
    ariaHidden(element, false);
    expect(element.hasAttribute('aria-hidden')).toBe(false);
  });
});
