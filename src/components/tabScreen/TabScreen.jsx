import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography component={"div"}>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const a11yProps = (index) => {
  return {
    id: `scrollable-force-tab-${index}`,
    "aria-controls": `scrollable-force-tabpanel-${index}`,
  };
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

const TabScreen = (props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const { data } = props;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          {data.map((tab, index) => {
            return (
              <Tab
                label={tab.tabLabel}
                icon={tab.tabLabelIcon}
                key={index}
                {...a11yProps(index)}
              />
            );
          })}
        </Tabs>
      </AppBar>
      {data.map((tab, index) => {
        return (
          <TabPanel value={value} index={index} key={index}>
            {tab.tabContent}
          </TabPanel>
        );
      })}
    </div>
  );
};

TabScreen.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      tabLabel: PropTypes.string.isRequired,
      tabLabelIcon: PropTypes.node.isRequired,
      tabContent: PropTypes.node.isRequired,
    })
  ),
};

export default TabScreen;
