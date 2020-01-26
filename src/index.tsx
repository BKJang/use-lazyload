import React, { useState, useEffect, useCallback } from 'react';

interface IObserverOptions {
  root: Element | null;
  rootMargin: string;
  thresholds: Array<number>;
}

const defaultOptions: IObserverOptions = {
  root: null,
  rootMargin: "0px",
  thresholds: [0]
};