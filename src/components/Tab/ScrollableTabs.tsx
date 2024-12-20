import { Tabs as MuiTabs, TabsProps as MuiTabsProps } from "@mui/material";
import { ReactNode } from "react";

interface TabsProps {
  children: ReactNode;
  value: MuiTabsProps["value"];
  onChange: MuiTabsProps["onChange"];
}

const ScrollableTabs = ({ children, value, onChange }: TabsProps) => {
  return (
    <MuiTabs
      variant="scrollable"
      value={value}
      onChange={onChange}
      scrollButtons={false}
      sx={{ bgcolor: "common.white" }}
      TabIndicatorProps={{
        sx: { display: "none" },
      }}
    >
      {children}
    </MuiTabs>
  );
};

export default ScrollableTabs;
