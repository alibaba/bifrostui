export default function getBoundingClientRect(ele: Element): Promise<DOMRect> {
  return Promise.resolve(ele.getBoundingClientRect());
}
