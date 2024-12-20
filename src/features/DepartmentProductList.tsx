import { useState } from "react";
import CategoryTab from "@/components/Tab/CategoryTab";
import ProductList from "@/components/Product/ProductList";
import ScrollableTabs from "@/components/Tab/ScrollableTabs";
import ProductListContainer from "@/components/Product/ProductListContainer";
import useFindCategoryTab from "@/hooks/useFindCategoryTab";
import useGetDepartmentQuery from "@/services/useGetDepartmentQuery";
import useFormattedData from "@/hooks/useFormattedData";

const DepartmentProductList = () => {
  const [subCategory, setSubCategory] = useState<string | undefined>(undefined);

  const { getProductList } = useFormattedData();

  const {
    data: department,
    isError,
    isFetching,
  } = useGetDepartmentQuery({
    params: { dispCtgId: subCategory },
  });

  const departmentCategory = useFindCategoryTab(department);
  const departmentData = getProductList(department);

  const handleChangeSubCategory = (value: string) => setSubCategory(value);

  return (
    <ProductListContainer
      error={isError}
      loading={isFetching}
      categoryTab={
        departmentCategory && (
          <ScrollableTabs
            value={subCategory ?? departmentCategory[0]?.dispCtgId}
            onChange={(_, value) => handleChangeSubCategory(value)}
          >
            {departmentCategory.map((tab) => (
              <CategoryTab
                key={tab.dispCtgId}
                label={tab.dispCtgNm}
                value={tab.dispCtgId}
              />
            ))}
          </ScrollableTabs>
        )
      }
      productList={<ProductList data={departmentData} />}
    />
  );
};

export default DepartmentProductList;
