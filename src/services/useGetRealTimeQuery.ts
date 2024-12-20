import axiosInstance from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

const postRealTime = async () => {
  const response = await axiosInstance.post("/realTime", {
    headers: { "Content-Type": "application/json" },
  });
  return response.data;
};

const useGetRealTimeQuery = () => {
  return useQuery({
    queryKey: ["realTime"],
    queryFn: () => postRealTime(),
  });
};

export default useGetRealTimeQuery;
