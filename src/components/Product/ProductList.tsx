import { Grid2 } from "@mui/material";
import ProductItem from "./ProductItem";

const ProductList = ({ data }: { data?: any[] }) => {
  return (
    <Grid2 container spacing={2}>
      {data?.map((item, index) => (
        <Grid2 key={item?.itemId + index} size={6}>
          <ProductItem item={item} />
        </Grid2>
      ))}
    </Grid2>
  );
};

export default ProductList;
