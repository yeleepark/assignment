import { TabProps as MuiTabProps, Tab } from "@mui/material";

interface SubTabProps {
  label: MuiTabProps["label"];
  value: MuiTabProps["value"];
}

const SubTab = (props: SubTabProps) => {
  return (
    <Tab
      {...props}
      sx={{
        mr: 1,
        "&.Mui-selected": {
          border: `1px solid black`,
          fontWeight: "bold",
        },
      }}
    />
  );
};

export default SubTab;
