import { SyntheticEvent, useState } from "react";
import { Box, Container } from "@mui/material";
import { QueryClient, dehydrate } from "@tanstack/react-query";

import { fetchAllBest } from "@/services/useGetAllBestQuery";
import AllBestProductList from "@/features/AllBestProductList";
import RealTimeBestProductList from "@/features/RealTimeBestProductList";
import GroceryProductList from "@/features/GroceryProductList";
import DepartmentProductList from "@/features/DepartmentProductList";
import SubTab from "@/components/Tab/SubTab";
import ScrollableTabs from "@/components/Tab/ScrollableTabs";
import TabPanel from "@/components/Tab/TabPanel";

const TABS = [
  { label: "전체 베스트", Component: AllBestProductList },
  { label: "실시간 베스트", Component: RealTimeBestProductList },
  { label: "장보기 상품", Component: GroceryProductList },
  { label: "백화점 상품", Component: DepartmentProductList },
];

export default function Home() {
  const [value, setValue] = useState(0);

  const handleChange = (_: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Container maxWidth="sm" sx={{ boxShadow: 3, p: 2, minHeight: `100vh` }}>
        <ScrollableTabs value={value} onChange={handleChange}>
          {TABS.map((tab, index) => (
            <SubTab key={index} label={tab.label} value={index} />
          ))}
        </ScrollableTabs>
        {TABS.map((tab, index) => (
          <TabPanel key={index} value={value} index={index}>
            <tab.Component />
          </TabPanel>
        ))}
      </Container>
    </Box>
  );
}

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  try {
    await queryClient.prefetchInfiniteQuery(["allBest", {}], {
      queryFn: ({ pageParam }) => fetchAllBest({ pageParam, params: {} }),
      getNextPageParam: (lastPage) => lastPage?.nextPage,
    });

    return {
      props: {
        dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);

    return {
      props: {
        dehydratedState: null,
        error: "Failed to fetch data.",
      },
    };
  }
}
