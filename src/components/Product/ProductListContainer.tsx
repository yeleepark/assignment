import { ReactNode } from "react";
import { Box, CircularProgress } from "@mui/material";

interface ProductListContainerProps {
  error: boolean;
  loading: boolean;
  categoryTab?: ReactNode;
  productList: ReactNode;
}

const ProductListContainer = ({
  error,
  loading,
  categoryTab,
  productList,
}: ProductListContainerProps) => {
  if (error) return <div>에러 발생</div>;

  return (
    <>
      {categoryTab && (
        <Box
          sx={{
            position: "sticky",
            top: 0,
            width: "100%",
            py: 2,
            bgcolor: "common.white",
            height: 80,
          }}
        >
          {categoryTab}
        </Box>
      )}
      {loading && (
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          width={"100%"}
          height={"100%"}
          position={"absolute"}
          top={0}
          left={0}
          zIndex={1}
        >
          <CircularProgress />
        </Box>
      )}
      {<Box py={categoryTab ? 0 : 2}>{productList}</Box>}
    </>
  );
};

export default ProductListContainer;
