/* eslint-disable no-nested-ternary */
import React from "react";
import { useQuery } from 'react-apollo';
import { getCollections } from '../../graphql/queries';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

export default function RouterBreadcrumbs({setCollection, collection}) {
  
  const { data } = useQuery(getCollections)
  
  const collections = data?.collections?.edges?.map(({node}) => {
    const { handle, title } = node;
    return { handle, title }
  }) ?? [];

  return (
      <div id="dropdown-menu">
        <div className="Shisha-wrapper">
          <div className="Shisha-title">Shop</div>
          <div className="Shisha-text">
            All Innovade Products.
          </div>
        </div>
        <nav id="alignment-nav" aria-label="product filters" >
          <List>
            {collections.map(({handle, title}) => <ListItem className={collection === handle ? "selected" : ""} onClick={() => setCollection(handle === collection ? undefined : handle)} button key={handle}>{title}</ListItem>)}
          </List>
        </nav>
      </div>
  );
}
