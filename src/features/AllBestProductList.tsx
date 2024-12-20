import { useEffect, useState } from "react";
import CategoryTab from "@/components/Tab/CategoryTab";
import ProductList from "@/components/Product/ProductList";
import ScrollableTabs from "@/components/Tab/ScrollableTabs";
import ProductListContainer from "@/components/Product/ProductListContainer";
import useFindCategoryTab from "@/hooks/useFindCategoryTab";
import useGetAllBestQuery from "@/services/useGetAllBestQuery";
import throttle from "@/utils/throttle";
import useFormattedData from "@/hooks/useFormattedData";

const AllBestProductList = () => {
  const [subCategory, setSubCategory] = useState<string | undefined>(undefined);

  const { getProductList } = useFormattedData();

  const { data, fetchNextPage, hasNextPage, isFetching, isError } =
    useGetAllBestQuery({ params: { dispCtgId: subCategory ?? undefined } });
  const allBestItems = data?.pages?.flatMap((page) => page?.data) ?? [];

  const allBestCategory = useFindCategoryTab(allBestItems[0]);
  const allBestData = allBestItems?.flatMap((item) => getProductList(item));

  const handleChageSubCategory = (value: string) => {
    setSubCategory(value);
  };

  useEffect(() => {
    const handleScroll = throttle(() => {
      const scrollTop = window.scrollY;
      const clientHeight = document.documentElement.clientHeight;
      const scrollHeight = document.documentElement.scrollHeight;

      if (
        !isFetching &&
        scrollTop + clientHeight >= scrollHeight * 0.8 &&
        hasNextPage
      ) {
        fetchNextPage();
      }
    }, 300);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [fetchNextPage, hasNextPage, isFetching]);

  return (
    <ProductListContainer
      error={isError}
      loading={isFetching}
      categoryTab={
        <ScrollableTabs
          value={subCategory ?? allBestCategory?.[0].dispCtgId}
          onChange={(_, value) => handleChageSubCategory(value)}
        >
          {allBestCategory?.map((tab) => (
            <CategoryTab
              key={tab.dispCtgId}
              label={tab.dispCtgNm}
              value={tab.dispCtgId}
            />
          ))}
        </ScrollableTabs>
      }
      productList={<ProductList data={allBestData} />}
    />
  );
};

export default AllBestProductList;
