import React from 'react';
import Models from "./components/Models"
import FrontPage from "./components/FrontPage"
import History from "./components/History"
import Accessories from "./components/Accessories"
import ProductDescription from './components/ProductDescription'

const Home = ({models, checkout}) => {
    return(
        <section id="Home">
          <FrontPage models={models} />
          <Models 
            checkout={checkout} 
            models={models}
          />
          <History />
          <Accessories />
          <ProductDescription />
        </section>
    )
}

export default Home;