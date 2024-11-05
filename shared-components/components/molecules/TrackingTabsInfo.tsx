import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import TrackingItem from "../atoms/TrackingItem";
/* Styles */
import {
  StyledContainerTrackingTabsInfo,
  StyledContainerItemsTrackingInfo,
} from "@/styles/components/styles";
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

/* Constants */
import { tabsLabels } from "@/constants";

const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

const CustomTabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
};
const TrackingTabsInfo: React.FC<{ generalInformation: any }> = ({
  generalInformation,
}) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <StyledContainerTrackingTabsInfo>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="tabs de información general"
            variant="scrollable"
          >
            {tabsLabels?.map((tab: any) => (
              <Tab
                key={tab.id}
                label={tab.label}
                {...a11yProps(tab.id)}
                sx={{
                  "&.Mui-selected": {
                    color: "#086bb5",
                    borderBottom: "2px solid #086bb5",
                  },
                }}
              />
            ))}
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <StyledContainerItemsTrackingInfo>
            {generalInformation?.map((info: any, index: number) => (
              <TrackingItem
                key={index}
                title={info?.title}
                description={info?.description}
              />
            ))}
          </StyledContainerItemsTrackingInfo>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          Contenido información de facturación
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          Contenido Novedades y soluciones
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          Información de entrega
        </CustomTabPanel>
      </Box>
    </StyledContainerTrackingTabsInfo>
  );
};

export default TrackingTabsInfo;
