import axiosInstance from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

const postDepartment = async (params: { params: { dispCtgId?: string } }) => {
  const response = await axiosInstance.post("/department", params);
  return response.data;
};

const useGetDepartmentQuery = (params: { params: { dispCtgId?: string } }) =>
  useQuery({
    queryKey: ["department", params],
    queryFn: () => postDepartment(params),
  });

export default useGetDepartmentQuery;
