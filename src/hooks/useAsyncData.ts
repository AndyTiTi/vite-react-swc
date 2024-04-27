import { useState, useEffect } from "react";

type UseAsyncData<T> = {
  data: T | null;
  isLoading: boolean;
  error?: Error | null;
};

const useAsyncData = <T>(fetchData: () => Promise<T>): UseAsyncData<T> => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 假设有一个API函数异步获取数据
    async function loadData() {
      setIsLoading(true);
      try {
        const response = await fetchData();
        setData(response);
      } catch (error) {
        console.error("Failed to load data:", error);
      } finally {
        setIsLoading(false);
      }
    }

    loadData();
  }, []);

  return { data, isLoading };
};

export default useAsyncData;
