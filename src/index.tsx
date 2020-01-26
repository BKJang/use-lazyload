import React, { useState, useEffect, useCallback } from 'react';

interface IObserverOptions {
  root: Element | null;
  rootMargin: string;
  thresholds: ReadonlyArray<number>;
}

const defaultOptions: IObserverOptions = {
  root: null,
  rootMargin: "0px",
  thresholds: [0]
};

export const useLazyload = (onIntersectCallbck: Function, options = defaultOptions) => {
  const [element, setElement] = useState(null);
  const doIntersectCallback = useCallback((entry, observer) => {
    if (entry.isIntersecting) {
      onIntersectCallbck(entry, observer);
    }
  }, []);

  useEffect(() => {
    let observer: any;
    if (element) {
      observer = new IntersectionObserver(doIntersectCallback, {
        ...options
      });
      observer.observe(element);
    }
    return () => observer && observer.disconnect();
  }, [element, options, onIntersectCallbck]);

  return [element, setElement];
};