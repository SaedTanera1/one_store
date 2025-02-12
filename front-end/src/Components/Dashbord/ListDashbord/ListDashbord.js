import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { Button, ListItem, Skeleton } from "@mui/material";
import Divider from "@mui/material/Divider";

import { Link } from "react-router-dom";
import { menu } from "./Munu";

export default function ListDashbord() {
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, []);
  return (
    <List
      sx={{ width: "100%", maxWidth: 260, bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader
          sx={{ fontSize: "12px" }}
          component="div"
          id="nested-list-subheader"
        >
          DASHBOARDS
        </ListSubheader>
      }
    >
      {menu.map((item, index) => {
        return (
          <>
            <ListItemButton
              component={Link}
              to={item.Link}
              key={index}
              sx={{
                "&:hover": {
                  backgroundColor: "#11486B",
                  color: "white",
                },
              }}
            >
              <ListItemIcon
                sx={{
                  color: "#1649a2",
                  "&:hover": {
                    backgroundColor: "red",
                    color: "white",
                  },
                }}
              >
                {isLoading ? (
                  <Skeleton
                    width={40}
                    sx={{ borderRadius: "50%" }}
                    height={40}
                    animation="wave"
                    variant="rectangular"
                  />
                ) : (
                  item.Icon
                )}
              </ListItemIcon>
              {isLoading ? (
                <Skeleton
                  width={"70%"}
                  sx={{ borderRadius: "2%" }}
                  height={40}
                  animation="wave"
                  variant="rectangular"
                />
              ) : (
                <>
                  <ListItemText primary={item.title} />
                </>
              )}
            </ListItemButton>
            <Divider />
          </>
        );
      })}
      <Divider />
    </List>
  );
}
