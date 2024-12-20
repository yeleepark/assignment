import { useState } from "react";
import CategoryTab from "@/components/Tab/CategoryTab";
import ProductList from "@/components/Product/ProductList";
import ScrollableTabs from "@/components/Tab/ScrollableTabs";
import ProductListContainer from "@/components/Product/ProductListContainer";
import useFindCategoryTab from "@/hooks/useFindCategoryTab";
import useGetGroceryQuery from "@/services/useGetGroceryQuery";
import useFormattedData from "@/hooks/useFormattedData";

const GroceryProductList = () => {
  const [subCategory, setSubCategory] = useState<string | undefined>(undefined);

  const {
    data: grocery,
    isError,
    isFetching,
  } = useGetGroceryQuery({
    params: { dispCtgId: subCategory },
  });

  const { getProductList } = useFormattedData();
  const groceryCategory = useFindCategoryTab(grocery);
  const groceryData = getProductList(grocery);

  const handleChangeSubCategory = (value: string) => setSubCategory(value);

  return (
    <ProductListContainer
      error={isError}
      loading={isFetching}
      categoryTab={
        groceryCategory && (
          <ScrollableTabs
            value={subCategory ?? groceryCategory[0]?.dispCtgId}
            onChange={(_, value) => handleChangeSubCategory(value)}
          >
            {groceryCategory.map((tab) => (
              <CategoryTab
                key={tab.dispCtgId}
                label={tab.dispCtgNm}
                value={tab.dispCtgId}
              />
            ))}
          </ScrollableTabs>
        )
      }
      productList={<ProductList data={groceryData} />}
    />
  );
};

export default GroceryProductList;
