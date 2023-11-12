import { useEffect, useState } from 'react';

const useObserver = (obsRef) => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting),
    );

    observer.observe(obsRef.current);
    return () => {
      observer.disconnect();
    };
  }, [obsRef]);

  return isIntersecting;
};

export default useObserver;