import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';

export const useGetSpecific = ({ key, fn }) => {
  const {
    error,
    data,
    isLoading: isFetching,
  } = useQuery({
    queryFn: fn,
    queryKey: key,
    onSuccess: () => {
      toast.success('Fetch successful');
    },
    onError: (err) => toast.error(err.message),
  });

  return { isFetching, data, error };
};
