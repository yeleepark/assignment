const throttle = <T extends () => void>(
  callback: T,
  delay: number
): (() => void) => {
  let isThrottled = false;

  return (...args: Parameters<T>) => {
    if (!isThrottled) {
      callback.apply(this, args);
      isThrottled = true;

      setTimeout(() => {
        isThrottled = false;
      }, delay);
    }
  };
};

export default throttle;
