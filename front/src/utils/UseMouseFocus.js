import { useEffect } from 'react';

const useMouseFocus = () => {
  useEffect(() => {
    const handleMouseDown = () => {
      document.body.classList.add('using-mouse');
    };

    const handleKeyDown = () => {
      document.body.classList.remove('using-mouse');
    };

    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
};

export default useMouseFocus;