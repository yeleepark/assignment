import axiosInstance from "@/lib/axios";
import { useInfiniteQuery } from "@tanstack/react-query";

const endpoints = ["/allBest", "/best2", "/best3", "/best4", "/best5"];

export const fetchAllBest = async ({
  pageParam = 0,
  params = {},
}: {
  pageParam: number;
  params: { dispCtgId?: string };
}) => {
  const currentPage = pageParam === null ? 0 : pageParam;

  const endpoint = endpoints[currentPage];
  if (!endpoint) return null;

  const response = await axiosInstance.post(endpoint, params);

  return { data: response.data, nextPage: currentPage + 1 };
};

const useGetAllBestQuery = ({
  params = {},
}: {
  params: {
    dispCtgId?: string;
  };
}) => {
  return useInfiniteQuery({
    queryKey: ["allBest", params],
    queryFn: ({ pageParam = 0 }) => {
      return fetchAllBest({ pageParam, params });
    },
    getNextPageParam: (lastPage) => {
      return (lastPage?.nextPage ?? 0) < endpoints.length
        ? lastPage?.nextPage
        : undefined;
    },
  });
};

export default useGetAllBestQuery;
