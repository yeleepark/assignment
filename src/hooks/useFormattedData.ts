const useFormattedData = <T extends { data?: { areaList?: any[] } }>() => {
  const getProductList = (data: T): any[] => {
    return data?.data?.areaList
      ?.flat()
      ?.find((i: any) => i?.unitType === "IMG_ITEM").itemList;
  };
  return { getProductList };
};

export default useFormattedData;
