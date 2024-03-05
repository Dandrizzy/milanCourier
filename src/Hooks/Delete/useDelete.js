import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

export const useDelete = ({ key, fn }) => {
  const queryClient = useQueryClient();
  const { mutate: deleteItem, isPending: isDeleting } = useMutation({
    mutationFn: fn,
    onSuccess: () => {
      toast.success('Item successfully deleted');
      queryClient.invalidateQueries({ queryKey: key });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteItem };
};
