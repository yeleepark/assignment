import ProductList from "@/components/Product/ProductList";
import useGetRealTimeQuery from "@/services/useGetRealTimeQuery";
import ProductListContainer from "@/components/Product/ProductListContainer";
import useFormattedData from "@/hooks/useFormattedData";

const RealTimeBestProductList = () => {
  const { data, isError, isFetching } = useGetRealTimeQuery();
  const { getProductList } = useFormattedData();

  const realTimeData = getProductList(data);

  return (
    <ProductListContainer
      error={isError}
      loading={isFetching}
      productList={<ProductList data={realTimeData} />}
    />
  );
};

export default RealTimeBestProductList;
