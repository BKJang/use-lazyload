import { useState, useEffect, useCallback } from 'react';
import { getObserver, IObserverOptions } from './utils';

const defaultOptions: IObserverOptions = {
  root: null,
  rootMargin: "0px",
  thresholds: [0.0],
};


export const useLazyload = (onIntersectCallback: Function, options = defaultOptions) => {
  const [element, setElement] = useState(null);
  const doIntersectCallback = useCallback(async ([entry], observer) => {
    if (entry.isIntersecting) {
      observer.unobserve(entry.target);
      await onIntersectCallback(entry, observer);
      observer.observe(entry.target);
    }
  }, []);

  useEffect(() => {
    let observer: any;
    if (element) {
      observer = getObserver(doIntersectCallback, { ...options })
      observer.observe(element);
    }
    return () => observer && observer.disconnect();
  }, [element, options.root, options.thresholds, options.rootMargin, doIntersectCallback]);

  return [element, setElement];
};