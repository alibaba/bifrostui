/**
 * Emulate touch event
 * Source：https://github.com/hammerjs/touchemulator
 */
import { useEffect } from 'react';

let eventTarget;

/**
 * create an touch point
 * @constructor
 * @param target
 * @param identifier
 * @param pos
 * @param deltaX
 * @param deltaY
 * @returns {Object} touchPoint
 */
const Touch = function Touch(target, identifier, pos, deltaX, deltaY) {
  deltaX = deltaX || 0;
  deltaY = deltaY || 0;

  this.identifier = identifier;
  this.target = target;
  this.clientX = pos.clientX + deltaX;
  this.clientY = pos.clientY + deltaY;
  this.screenX = pos.screenX + deltaX;
  this.screenY = pos.screenY + deltaY;
  this.pageX = pos.pageX + deltaX;
  this.pageY = pos.pageY + deltaY;
};

/**
 * create empty touchlist with the methods
 * @constructor
 * @returns touchList
 */
function TouchList() {
  /* eslint-disable */
  const touchList: any = [];

  touchList.item = (index) => {
    return this[index] || null;
  };

  // specified by Mozilla
  touchList.identifiedTouch = (id) => {
    return this[id + 1] || null;
  };

  return touchList;
}

/**
 * only trigger touches when the left mousebutton has been pressed
 * @param touchType
 * @returns {Function}
 */

let initiated = false;
function onMouse(touchType) {
  return function (ev) {
    // prevent mouse events

    if (ev.type === 'mousedown') {
      initiated = true;
    }

    if (ev.type === 'mouseup') {
      initiated = false;
    }

    if (ev.type === 'mousemove' && !initiated) {
      return;
    }

    // The EventTarget on which the touch point started when it was first placed on the surface,
    // even if the touch point has since moved outside the interactive area of that element.
    // also, when the target doesnt exist anymore, we update it
    if (
      ev.type === 'mousedown' ||
      !eventTarget ||
      (eventTarget && !eventTarget.dispatchEvent)
    ) {
      eventTarget = ev.target;
    }

    triggerTouch(touchType, ev);

    // reset
    if (ev.type === 'mouseup') {
      eventTarget = null;
    }
  };
}

/**
 * trigger a touch event
 * @param eventName
 * @param mouseEv
 */
function triggerTouch(eventName, mouseEv) {
  /* eslint-disable */
  const touchEvent: any = document.createEvent('Event');
  touchEvent.initEvent(eventName, true, false);

  touchEvent.altKey = mouseEv.altKey;
  touchEvent.ctrlKey = mouseEv.ctrlKey;
  touchEvent.metaKey = mouseEv.metaKey;
  touchEvent.shiftKey = mouseEv.shiftKey;

  touchEvent.touches = getActiveTouches(mouseEv);
  touchEvent.targetTouches = getActiveTouches(mouseEv);
  touchEvent.changedTouches = createTouchList(mouseEv);

  eventTarget.dispatchEvent(touchEvent);
}

/**
 * create a touchList based on the mouse event
 * @param mouseEv
 * @returns {TouchList}
 */
function createTouchList(mouseEv) {
  const touchList = TouchList();
  touchList.push(new Touch(eventTarget, 1, mouseEv, 0, 0));
  return touchList;
}

/**
 * receive all active touches
 * @param mouseEv
 * @returns {TouchList}
 */
function getActiveTouches(mouseEv) {
  // empty list
  if (mouseEv.type === 'mouseup') {
    return TouchList();
  }
  return createTouchList(mouseEv);
}

const emulateTouchStart = onMouse('touchstart');
const emulateTouchMove = onMouse('touchmove');
const emulateTouchEnd = onMouse('touchend');

function useTouchEmulator(dom: HTMLElement | Window = window) {
  useEffect(() => {
    if (dom) {
      dom.addEventListener('mousedown', emulateTouchStart, true);
      dom.addEventListener('mousemove', emulateTouchMove, true);
      dom.addEventListener('mouseup', emulateTouchEnd, true);
    }

    return () => {
      if (dom) {
        dom.removeEventListener('mousedown', emulateTouchStart, true);
        dom.removeEventListener('mousemove', emulateTouchMove, true);
        dom.removeEventListener('mouseup', emulateTouchEnd, true);
      }
    };
  }, [dom]);
}

const touchEmulator = (dom: HTMLElement | Window = window) => {
  if (dom) {
    dom.addEventListener('mousedown', emulateTouchStart, true);
    dom.addEventListener('mousemove', emulateTouchMove, true);
    dom.addEventListener('mouseup', emulateTouchEnd, true);
  }
  return function () {
    if (dom) {
      dom.removeEventListener('mousedown', emulateTouchStart, true);
      dom.removeEventListener('mousemove', emulateTouchMove, true);
      dom.removeEventListener('mouseup', emulateTouchEnd, true);
    }
  };
};

export default useTouchEmulator;
export { touchEmulator, emulateTouchStart, emulateTouchMove, emulateTouchEnd };
