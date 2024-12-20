import { Tab as MuiTab, TabProps as MuiTabProps } from "@mui/material";

interface CategoryTabProps {
  label: MuiTabProps["label"];
  value: MuiTabProps["value"];
}

const CategoryTab = (props: CategoryTabProps) => {
  return (
    <MuiTab
      {...props}
      sx={{
        border: `1px solid`,
        borderColor: "divider",
        mr: 1,
        "&.Mui-selected": {
          color: "common.white",
          bgcolor: "primary.main",
        },
      }}
    />
  );
};

export default CategoryTab;
