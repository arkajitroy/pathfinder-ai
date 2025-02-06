/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { AxiosResponse } from "axios";
import { toast } from "sonner";

type FetchFunction<T, A extends any[]> = (...args: A) => Promise<AxiosResponse<T>>;

type UseFetchReturn<T, A extends any[]> = {
  data: T | undefined;
  loading: boolean;
  error: string | null;
  fn: (...args: A) => Promise<void>;
  setData: (data: T | undefined) => void;
};

function useFetch<T, A extends any[]>(cb: FetchFunction<T, A>): UseFetchReturn<T, A> {
  const [data, setData] = useState<T | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fn = async (...args: A): Promise<void> => {
    setLoading(true);
    setError(null);

    try {
      const response = await cb(...args);
      setData(response.data);
    } catch (err) {
      const errorMessage = (err as Error).message || "An unknown error occurred";
      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, fn, setData };
}

export default useFetch;
