'use client'

import { useState, useEffect } from 'react';
import Loading from './loading';

const pageLoader = (WrappedComponent: React.ComponentType<any>) => {
  const WithLoading: React.FC = (props) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const handleComplete = () => setLoading(false);

      // Perform any additional operations while loading

      // a delay for demonstration purposes
      const timeout = setTimeout(handleComplete, 1000);

      // Cleanup function to prevent memory leaks
      return () => clearTimeout(timeout);
    }, []);

    return loading ? <Loading /> : <WrappedComponent {...props} />;
  };

  return WithLoading;
};

export default pageLoader;
