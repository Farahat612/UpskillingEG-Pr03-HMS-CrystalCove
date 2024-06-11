import { apiPublic } from "../../utils/api";
import { useEffect, useState } from "react";
import { Room } from "../../types";

export const useGetFavRooms = () => {
  const [data, setData] = useState<Room[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getRooms = async () => {
      try {
        const response = await apiPublic.get("/portal/rooms/favorite-rooms");
        setData(response.data);

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getRooms();
  }, []);
  return {
    data,
    loading,
  };
};

export default useGetFavRooms;
