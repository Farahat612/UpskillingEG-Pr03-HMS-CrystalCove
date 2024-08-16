import { toast } from 'sonner';
import { apiProtected } from '../../utils/api';
import { useRefetchContext } from '../../contexts/global/RefetchContext';
import { useModalsContext } from '../../contexts/global/ModalsContext';

const useAddData = ({ endpoint }: { endpoint: string }) => {
  const { setRefetchCount } = useRefetchContext();
  const { setAddModalOpened } = useModalsContext();

  const addData = async (item: object) => {
    try {
      await apiProtected.post(`/admin/${endpoint}`, item);
      toast.success('Item added successfully');
      setRefetchCount((prev) => prev + 1);
      setAddModalOpened(false);
    } catch (error) {
      toast.error('Error adding item - Try again');
      console.error(error);
    }
  };

  return {
    addData,
  };
};

export default useAddData;
