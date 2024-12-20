const useFindCategoryTab = (
  data: any
): {
  dispCtgId: string;
  dispCtgNm: string;
}[] =>
  data?.data?.areaList
    ?.flat()
    .find((list: any) => list.unitType === "CATEGORY_TAB").dispCtgList;

export default useFindCategoryTab;
