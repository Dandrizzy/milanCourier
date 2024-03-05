import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useEditChatApi } from './useEditChatApi';

export const useEditChat = ({key}) => {
  const {editFn} =useEditChatApi()
  const queryClient = useQueryClient();
  const { mutate: edit, isPending: isEditing } = useMutation({
    mutationFn: (data, id) => editFn(data, id),
    onSuccess: () => {
      toast.success('Item successfully edited');
      queryClient.invalidateQueries({ queryKey: key });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isEditing, edit };
};
