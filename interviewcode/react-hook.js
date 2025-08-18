// api request function, always succeed
function fetchData() {
  return Promise.resolve([1,2,3]);
}

import { useState, useCallback} from 'react';

// useMutation hook: 用于异步请求和管理 loading/data 状态
function useMutation(key, fetcher) {
  const [data, setData] = useState(null); // 初始 data 为 null
  const [isLoading, setIsLoading] = useState(false); // 初始不加载

  // 触发异步请求
  const mutate = useCallback(() => {
    setIsLoading(true);
    fetcher()
      .then((resData) => {
        setData(resData);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [fetcher]);

  return { mutate, data, isLoading };
}

function MyComponent({ id }) {
  const { mutate, data, isLoading } = useMutation('data', fetchData);
  useEffect(() => {
    mutate();
  }, [])
  return <div>
    {isLoading ? "Loading" : data.map(item => <div>{item}</div>)}
  </div>
}