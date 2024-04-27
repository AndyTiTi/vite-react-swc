import { useEffect, useRef } from "react";

type UseLifecycle = () => void;

const useLifecycle: UseLifecycle = () => {
  const isMounted = useRef(true);

  useEffect(() => {
    isMounted.current = true;
    console.log("🚀🚀🚀Component is mounted");

    return () => {
      isMounted.current = false;
      console.log("🚀🚀🚀🚀🚀Component is unmounted");
    };
  }, []);

  return () => isMounted.current;
};

export default useLifecycle;
