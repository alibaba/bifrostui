export default function getBoundingClientRect(
  ele: Element | null,
): Promise<DOMRect> {
  if (!ele) {
    // Return a default DOMRect when element is null
    return Promise.resolve({
      width: 0,
      height: 0,
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      x: 0,
      y: 0,
      toJSON: () => ({}),
    } as DOMRect);
  }
  return Promise.resolve(ele.getBoundingClientRect());
}
