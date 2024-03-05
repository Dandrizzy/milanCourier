import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

export const useEdit = ({ key, fn }) => {
  const queryClient = useQueryClient();
  const { mutate: edit, isPending: isEditing } = useMutation({
    mutationFn: (data, id) => fn(data, id),
    onSuccess: () => {
      toast.success('Item successfully edited');
      queryClient.invalidateQueries({ queryKey: key });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isEditing, edit };
};
