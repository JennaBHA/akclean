import { useState, useEffect, useRef, useCallback } from 'react';
import '../../style.css';

interface ImageProps {
  topImage: string;
  bottomImage: string;
}

const ComparisonSlider = ({ topImage, bottomImage }: ImageProps) => {
  const [isResizing, setIsResizing] = useState<boolean>(false);
  const topImageRef = useRef<HTMLDivElement>(null);
  const handleRef = useRef<HTMLDivElement>(null);

  const setPositioning = useCallback((x: number) => {
    if (topImageRef.current && handleRef.current) {
      const { left, width } = topImageRef.current.getBoundingClientRect();
      const handleWidth = handleRef.current.offsetWidth;

      if (x >= left && x <= width + left - handleWidth) {
        handleRef.current.style.left = `${((x - left) / width) * 100}%`;
        if (topImageRef.current)
          topImageRef.current.style.clipPath = `inset(0 ${
            100 - ((x - left) / width) * 100
          }% 0 0)`;
      }
    }
  }, []);

  const handleResize = useCallback(
    (e: MouseEvent | TouchEvent) => {
      if (e instanceof MouseEvent) {
        setPositioning(e.clientX);
      } else if (e.touches && e.touches[0]?.clientX) {
        setPositioning(e.touches[0].clientX);
      }
    },
    [setPositioning]
  );

  // Set initial positioning on component mount
  useEffect(() => {
    if (topImageRef.current && handleRef.current) {
      const { left, width } = topImageRef.current.getBoundingClientRect();
      const handleWidth = handleRef.current.offsetWidth;

      setPositioning(width / 2 + left - handleWidth / 2);
    }
  }, [setPositioning]);

  const handleResizeEnd = useCallback(() => {
    setIsResizing(false);

    window.removeEventListener('mousemove', handleResize);
    window.removeEventListener('touchmove', handleResize);
    window.removeEventListener('mouseup', handleResizeEnd);
    window.removeEventListener('touchend', handleResizeEnd);
  }, [handleResize]);

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (handleRef.current && handleRef.current.offsetParent) {
        const { left } = handleRef.current.getBoundingClientRect();
        const offsetParent = handleRef.current.offsetParent as HTMLElement;
        const offsetLeft = offsetParent.offsetLeft;

        if (e.code === 'ArrowLeft') {
          setPositioning(left + offsetLeft - 10);
        }

        if (e.code === 'ArrowRight') {
          setPositioning(left + offsetLeft + 10);
        }
      }
    },
    [setPositioning]
  );

  // Add keydown event on mount
  useEffect(() => {
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [onKeyDown]);

  useEffect(() => {
    if (isResizing) {
      window.addEventListener('mousemove', handleResize);
      window.addEventListener('touchmove', handleResize);
      window.addEventListener('mouseup', handleResizeEnd);
      window.addEventListener('touchend', handleResizeEnd);
    }

    return () => {
      window.removeEventListener('mousemove', handleResize);
      window.removeEventListener('touchmove', handleResize);
      window.removeEventListener('mouseup', handleResizeEnd);
      window.removeEventListener('touchend', handleResizeEnd);
    };
  }, [isResizing, handleResize, handleResizeEnd]);

  return (
    <div className="relative h-64 overflow-hidden rounded shadow md:ml-10 md:h-[50vh] md:max-w-md">
      <div
        ref={handleRef}
        className="absolute top-0 z-30 h-full w-1 cursor-col-resize bg-[#F3F8FF]"
        onMouseDown={() => setIsResizing(true)}
        onTouchStart={() => setIsResizing(true)}
      >
        <svg
          fill="#101314"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute right-1/2 top-1/2 block h-8 w-8 -translate-y-1/2 translate-x-1/2 transform rounded-lg bg-[#F3F8FF] p-1 duration-200 ease-in-out hover:bg-[#e8f2ff] focus:bg-[#e8f2ff]"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path d="M1,8A1,1,0,0,1,2,7H9.586L7.293,4.707A1,1,0,1,1,8.707,3.293l4,4a1,1,0,0,1,0,1.414l-4,4a1,1,0,1,1-1.414-1.414L9.586,9H2A1,1,0,0,1,1,8Zm21,7H14.414l2.293-2.293a1,1,0,0,0-1.414-1.414l-4,4a1,1,0,0,0,0,1.414l4,4a1,1,0,0,0,1.414-1.414L14.414,17H22a1,1,0,0,0,0-2Z"></path>
          </g>
        </svg>
      </div>
      <div
        ref={topImageRef}
        className="absolute top-0 h-full w-full overflow-hidden"
      >
        <img
          draggable={false}
          src={topImage}
          alt=""
          className="pointer-events-none h-64 w-80 select-none object-cover md:h-[80vh] md:w-full"
        />
      </div>
      <div className="overflow-hidden">
        <img
          draggable={false}
          src={bottomImage}
          alt=""
          className="pointer-events-none h-64 w-80 select-none object-cover md:h-[80vh] md:w-full"
        />
      </div>
    </div>
  );
};

export default ComparisonSlider;
