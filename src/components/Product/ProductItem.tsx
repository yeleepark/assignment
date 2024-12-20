import { memo } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";

interface ProductItemProps {
  item: {
    itemId: string;
    itemImgUrl: string;
    itemNm: string;
    brandNm: string;
    strikeOutPrc: string;
    displayPrc: string;
    itemLnkd: string;
    recompPoint: string;
    recomRegCnt: string;
  };
}

const ProductItem = memo(({ item }: ProductItemProps) => {
  const router = useRouter();
  const formatNumberWithCommas = (number: number | string): string =>
    number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return (
    <Card
      sx={{ maxWidth: 300, height: `100%`, boxShadow: 0, cursor: "pointer" }}
      onClick={() => router.push(item.itemLnkd)}
    >
      <CardMedia
        component="img"
        width="200"
        height="200"
        image={item.itemImgUrl}
        title={item.itemNm}
      />
      <CardContent>
        <div>
          {item?.brandNm ? (
            <Typography
              component="span"
              variant="body1"
              fontWeight={800}
              mr={1}
            >
              {item?.brandNm}
            </Typography>
          ) : null}
          <Typography component="span" variant="body1">
            {item?.itemNm}
          </Typography>
        </div>
        {item?.strikeOutPrc ? (
          <Typography
            color={"textSecondary"}
            sx={{ textDecoration: "line-through" }}
          >
            {formatNumberWithCommas(item?.strikeOutPrc)}원
          </Typography>
        ) : null}
        <Typography fontSize={20} fontWeight={800}>
          {formatNumberWithCommas(item?.displayPrc)}원
        </Typography>
        <Stack direction={"row"}>
          <Typography component="span" color={"textSecondary"}>
            {item?.recompPoint}
          </Typography>
          <Divider
            orientation="vertical"
            flexItem
            variant="middle"
            sx={{ mx: 1 }}
          />
          <Typography component="span" color={"textSecondary"}>
            {formatNumberWithCommas(item?.recomRegCnt)}건
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
});

ProductItem.displayName = "ProductItem";
export default ProductItem;
