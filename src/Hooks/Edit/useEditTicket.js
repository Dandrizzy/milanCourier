import { useMutation, useQueryClient } from '@tanstack/react-query';

import { toast } from 'react-hot-toast';
import { updateTicket } from '../../Services/useTicketApi';
import { useParams } from 'react-router-dom';

export function useEditTicket() {
  const { ticketId } = useParams();

  const queryClient = useQueryClient();

  const { mutate: editTicket, isPending: isEditing } = useMutation({
    mutationFn: updateTicket,
    onSuccess: () => {
      toast.success('Ticket successfully edited');
      queryClient.invalidateQueries({ queryKey: ['tickets', ticketId] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isEditing, editTicket };
}
