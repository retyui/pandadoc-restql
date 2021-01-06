export function pick<T extends object, Keys extends keyof T>(
  obj: T,
  props: Array<Keys>
): Pick<T, Keys> {
  const picked = {};

  props.forEach((prop) => {
    // @ts-ignore
    picked[prop] = obj[prop];
  });

  // @ts-ignore
  return picked;
}
