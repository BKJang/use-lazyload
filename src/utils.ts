export interface IObserverOptions {
  root: Element | null;
  rootMargin: string;
  thresholds: ReadonlyArray<number>;
};

export const getObserver = function (doIntersectCallback: any, options: IObserverOptions) {
  return new IntersectionObserver(doIntersectCallback, {
    ...options
  });
};