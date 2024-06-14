import React, { useEffect, useRef } from "react";

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | unknown;
}

const useFetch = <T,>(
  url: RequestInfo | URL,
  options?: RequestInit
): FetchState<T> => {
  const [data, setData] = React.useState<T | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | unknown>(null);

  const optionsRef = useRef(options);
  optionsRef.current = options;

  useEffect(() => {
    const { signal } = new AbortController();

    const fetchData = async () => {
      setLoading(true);
      setData(null);
      try {
        const response = await fetch(url, {
          signal,
          ...optionsRef.current,
        });
        if (!response.ok) throw new Error(`Error: ${response.status}`);
        const json = (await response.json()) as T;
        if (!signal.aborted) setData(json);
      } catch (error) {
        if (!signal.aborted && error instanceof Error) setError(error.message);
      }
    };
    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
