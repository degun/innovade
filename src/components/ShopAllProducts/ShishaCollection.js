/* eslint-disable no-nested-ternary */
import React from "react";
import PropTypes from "prop-types";
import { useQuery } from 'react-apollo';
import { getCollectionsTags } from '../../graphql/queries';
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Link from "@material-ui/core/Link";
import ListItem from "@material-ui/core/ListItem";
import Collapse from "@material-ui/core/Collapse";
import ListItemText from "@material-ui/core/ListItemText";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { Route, MemoryRouter } from "react-router";
import { Link as RouterLink } from "react-router-dom";

const breadcrumbNameMap = {
  "/collection": "Collection",
  "/collection/collection1": "First Collection of Shisha",
  "/accessories": "Accessories",
  "/accessories/accessories1": "First Accessory",
  "/case": "Case Color",
  "/case/casecolor1": "Pink",
  "/color": "Color",
  "/color/color1": "Silver",
  "/color/color2": "Gold",
};

function ListItemLink(props) {
  const { to, open, ...other } = props;
  const primary = breadcrumbNameMap[to];

  return (
    <li>
      <ListItem button component={RouterLink} to={to} {...other}>
        <ListItemText primary={primary} />
        {open != null ? open ? <ExpandLess /> : <ExpandMore /> : null}
      </ListItem>
    </li>
  );
}

ListItemLink.propTypes = {
  open: PropTypes.bool,
  to: PropTypes.string.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    width: 360,
  },
  lists: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(1),
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

const LinkRouter = (props) => <Link {...props} component={RouterLink} />;

export default function RouterBreadcrumbs({setCollectionFilter, setTag}) {
  const { data } = useQuery(getCollectionsTags)
  console.log(data)
  const classes = useStyles();
  const [open, setOpen] = useState({
    collections: false,
    tags: false          
  })
  return (
      <div className={classes.root} id="dropdown-menu">
        <div className="Shisha-wrapper">
          <div className="Shisha-title">Shishas</div>
          <div className="Shisha-text">
            This is our collection of shishas. 
          </div>
        </div>
        <nav
          id="alignment-nav"
          className={classes.lists}
          aria-label="mailbox folders"
        >
          <List>
            <ListItemLink
              to="/collection"
              open={openColl}
              onClick={handleClickCollection}
            />
            <Collapse component="li" in={openColl} timeout="auto" unmountOnExit>
              <List disablePadding>
                <ListItemLink
                  id="Remove-space"
                  to="/collection/collection1"
                  className={classes.nested}
                />
              </List>
            </Collapse>
          </List>
          <List>
            <ListItemLink
              to="/accessories"
              open={openAccss}
              onClick={handleClickAccessories}
            />
            <Collapse
              component="li"
              in={openAccss}
              timeout="auto"
              unmountOnExit
            >
              <List disablePadding>
                <ListItemLink
                  id="Remove-space"
                  to="/accessories/accessories1"
                  className={classes.nested}
                />
              </List>
            </Collapse>
          </List>
          <List>
            <ListItemLink
              to="/case"
              open={openCase}
              onClick={handleClickCase}
            />
            <Collapse component="li" in={openCase} timeout="auto" unmountOnExit>
              <List disablePadding>
                <ListItemLink
                  id="Remove-space"
                  to="/case/casecolor1"
                  className={classes.nested}
                />
              </List>
            </Collapse>
          </List>
          <List id="border-bottom">
            <ListItemLink
              to="/color"
              open={openColor}
              onClick={handleClickColors}
            />
            <Collapse
              component="li"
              in={openColor}
              timeout="auto"
              unmountOnExit
            >
              <List disablePadding>
                <ListItemLink
                  id="Remove-space"
                  to="/color/color1"
                  className={classes.nested}
                />
              </List>
            </Collapse>
            <Collapse
              component="li"
              in={openColor}
              timeout="auto"
              unmountOnExit
            >
              <List disablePadding>
                <ListItemLink
                  id="Remove-space"
                  to="/color/color2"
                  className={classes.nested}
                />
              </List>
            </Collapse>
          </List>
        </nav>
      </div>
  );
}
