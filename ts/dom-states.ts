const thenifyDomStates = (type: string, readyState: RegExp) =>
  new Promise((resolve) => {
    const listener = () => {
      if (readyState.test(document.readyState)) {
        document.removeEventListener(type, listener);
        resolve(void 0);
      }
    };

    document.addEventListener(type, listener);
    listener();
  });

// export thenfied parsed, contentLoaded, and loaded
export const parsed = thenifyDomStates(
  "readystatechange",
  /^(?:interactive|complete)$/
);
export const contentLoaded = thenifyDomStates(
  "DOMContentLoaded",
  /^(?:interactive|complete)$/
);
export const loaded = thenifyDomStates("readystatechange", /^complete$/);
