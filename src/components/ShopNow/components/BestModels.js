import React, {useState} from 'react';
import BestModel from './BestModel';
import { useQuery } from 'react-apollo';
import { getProducts } from '../../../graphql/queries';
import { withRouter } from 'react-router-dom';

const BestModels = ({match}) => {
    const routerHandle = match.params.handle;
    const [bestModels, setBestModels] = useState([]);
    const {data} = useQuery(getProducts, {variables: {first: 3}})
    const products = data?.products?.edges.map(({node}) => {
        const {id, description, title, handle, images, price} = node;
        const imgs = images.edges?.map(({node}) => node.src) ?? [];
        return {id, description, title, handle, image: (imgs && imgs.length) ? imgs[0] : "", price}
    }) ?? [];

    if(products.length === 3 && !bestModels.length){
        if(products.map(({handle}) => handle).includes(routerHandle)){
            setBestModels(products.filter(({handle}) => handle !== routerHandle))
        }else{
            setBestModels(products.slice(0, 2))
        }
    }

    return(
        <div id="Reviewed-models">
            {bestModels.map((bestModel, i) => <div key={`model-${i}`} className={i%2 ? "DarkGrey-bg" : "Grey-bg"}>
                <BestModel {...bestModel} button />
            </div>)}
      </div>
    )
}

export default withRouter(BestModels);