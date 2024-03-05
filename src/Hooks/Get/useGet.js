import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';

export const useGet = ({ key, fn }) => {
  const {
    error,
    data: fetch,
    isLoading: isFetching,
  } = useQuery({
    queryFn: fn,
    queryKey: key,
    onSuccess: () => {
      toast.success('Fetch successful');
    },
    onError: (err) => toast.error(err.message),
  });

  return { isFetching, fetch, error };
};
