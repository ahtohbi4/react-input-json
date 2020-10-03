import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

const root = document.getElementById('console');

export const Console: React.FC = (props) => {
  const { children } = props;
  const container = useRef(document.createElement('div'));

  useEffect(() => {
    const containerNode = container.current;

    root?.appendChild(containerNode);

    return () => {
      root?.removeChild(containerNode);
    };
  }, []);

  return ReactDOM.createPortal(<pre>{children}</pre>, container.current);
};
