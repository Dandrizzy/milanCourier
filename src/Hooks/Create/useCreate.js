import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

export const useCreate = ({ key, fn }) => {
  const queryClient = useQueryClient();
  const { mutate: create, isPending: isCreating } = useMutation({
    mutationFn: fn,
    onSuccess: () => {
      toast.success('New Project successfully created');
      queryClient.invalidateQueries({ queryKey: key });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, create };
};
