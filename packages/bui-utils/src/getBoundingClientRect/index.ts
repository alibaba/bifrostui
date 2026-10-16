export default function getBoundingClientRect(
  ele: Element | null,
): Promise<DOMRect> {
  if (!ele) {
    // Return a default DOMRect when element is null
    return Promise.resolve(null);
  }
  return Promise.resolve(ele.getBoundingClientRect());
}
