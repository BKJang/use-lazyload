import React, { useState, useEffect } from 'react'
import { useLazyload } from 'use-lazyload'

const ROWS_PER_PAGE = 10;
const fetchItems = (delay = 1000) => new Promise(res => setTimeout(res, delay));

const App = () => {
  const [items, setItems] = useState({
    isLoading: false,
    data: [],
  });

  const onIntersectCallback = async () => {
    setItems(prev => {
      return {
        ...prev,
        isLoading: true,
      }
    });

    await fetchItems();

    setItems(prev => {
      return {
        isLoading: false,
        data: [...prev.data, ...Array(ROWS_PER_PAGE)],
      }
    });
  }

  const [_, setElement] = useLazyload(async () => {
    await onIntersectCallback();
  }, {})

  useEffect(() => {
    onIntersectCallback();
  }, []);

  if (!items.data.length) {
    return null;
  };

  return (
    <div className="container">
      {items.data.map((_, index) => {
        return (
          <div className="box" key={index}>{index}</div>
        );
      })}
      <div ref={setElement} className='loading-box'>
        {items.isLoading ? 'Loading!' : null}
      </div>
    </div>
  )
}

export default App
