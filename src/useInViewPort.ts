import * as React from 'reaect';

const config = {
  rootMargin: '0px 0px',
  threshold: [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
};

function onIntersection(entries: { intersectionRatio: number; target: any }[]) {
  for (let i = 0, len = entries.length; i < len; i++) {
    const { intersectionRatio, target } = entries[i];
    if (intersectionRatio > 0) {
      // imageLoader(target);
    }
  }
}

function useInViewPort() {
  if (typeof window !== 'undefined') {
    // @ts-ignore
    window.__REACT_SIMPLE_IMG__ = window.__REACT_SIMPLE_IMG__
      // @ts-ignore
      ? window.__REACT_SIMPLE_IMG__
      : new IntersectionObserver(entries => onIntersection(entries), config);
  }

  const detect = () => {};

  return {
    detect,
  };
}
