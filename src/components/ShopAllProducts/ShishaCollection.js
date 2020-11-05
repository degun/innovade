/* eslint-disable no-nested-ternary */
import React from "react";
import { useQuery } from 'react-apollo';
import { getCollectionsTags } from '../../graphql/queries';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";

export default function RouterBreadcrumbs({setCollection, setTag, collection, tag}) {
  const { data } = useQuery(getCollectionsTags)
  
  const collections = data?.collections?.edges?.map(({node}) => {
    const { handle, title } = node;
    return { handle, title }
  }) ?? [];

  const tags = data?.productTags?.edges?.map(({node}) => node) ?? [];

  console.log(data)

  return (
      <div id="dropdown-menu">
        <div className="Shisha-wrapper">
          <div className="Shisha-title">Shishas</div>
          <div className="Shisha-text">
            This is our collection of shishas. 
          </div>
        </div>
        <nav
          id="alignment-nav"
          aria-label="product filters"
        >
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="collection-list"
            >
              <Typography>Collections</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List>
                {collections.map(({handle, title}) => <ListItem className={collection === handle ? "selected" : ""} onClick={() => setCollection(handle === collection ? undefined : handle)} button key={handle}>{title}</ListItem>)}
              </List>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="collection-list"
            >
              <Typography>Tags</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List>
                {tags.map(t => <ListItem className={tag === t ? "selected" : ""} onClick={() => setTag(tag === t ? undefined : t)} button key={t}>{t}</ListItem>)}
              </List>
            </AccordionDetails>
          </Accordion>
        </nav>
      </div>
  );
}
