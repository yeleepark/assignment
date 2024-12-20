import axiosInstance from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

const postGrocery = async (params: { params: { dispCtgId?: string } }) => {
  const response = await axiosInstance.post("/grocery", params);
  return response.data;
};

const useGetGroceryQuery = (params: { params: { dispCtgId?: string } }) => {
  return useQuery({
    queryKey: ["grocery", params],
    queryFn: () => postGrocery(params),
  });
};

export default useGetGroceryQuery;
