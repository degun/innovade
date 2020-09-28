import React from "react";
import Flavor from "./Flavor";
import { Tabs, useTabState, Panel } from "@bumaga/tabs";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const cn = (...args) => args.filter(Boolean).join(" ");

const Flavors = ({ children }) => {
  const { isActive, onClick } = useTabState();

  return (
    <button
      className={cn("tab Tab__links", isActive && "active Tab__links")}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  draggable: true,
  autoplay: true,

  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        speed: 500,
        dots: false,
        draggable: true,
        autoplay: true,
        pauseOnFocus: true,
      },
    },
    {
      breakpoint: 459,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        speed: 500,
        dots: false,
        draggable: true,
        autoplay: true,
        pauseOnFocus: true,
      },
    },
  ],
};


export default (props) => (
  <React.Fragment>
    <Tabs>
      <div className="Tabs" id="Flavors">
        <div className="Flavors__title">Our Shisha Flavors</div>
        <div className="tab-list">
          <Flavors>Fruit</Flavors>&#47;
          <Flavors>Nuts</Flavors> &#47;
          <Flavors>Chocholate</Flavors> &#47;
          <Flavors>Exotic</Flavors> &#47;
          <Flavors>Flowers</Flavors>
        </div>

        <div className="tab-progress" />

        <Panel>
          <Slider {...settings} ref={(slider) => slider}>
          <Flavor  name="Innovade Model Name 1"
                   description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                   photo="https://via.placeholder.com/170x170" />
           <Flavor  name="Innovade Model Name 1"
                   description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                   photo="https://via.placeholder.com/170x170" />  
          <Flavor  name="Innovade Model Name 1"
                   description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                   photo="https://via.placeholder.com/170x170" />  
          <Flavor  name="Innovade Model Name 1"
                   description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                   photo="https://via.placeholder.com/170x170" />
          </Slider>
        </Panel>

        <Panel>
          <Slider {...settings} ref={(slider) => slider}>
          <Flavor  name="Innovade Model Name 1"
                   description="Lorem ipsum dolor sit amet,  consectetur adipiscing elit."
                   photo="https://via.placeholder.com/170x170" />
           <Flavor  name="Innovade Model Name 1"
                   description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                   photo="https://via.placeholder.com/170x170" />  
          <Flavor  name="Innovade Model Name 1"
                   description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                   photo="https://via.placeholder.com/170x170" />  
          <Flavor  name="Innovade Model Name 1"
                   description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                   photo="https://via.placeholder.com/170x170" />
          </Slider>
        </Panel>

        <Panel>
          <Slider {...settings} ref={(slider) => slider}>
          <Flavor  name="Innovade Model Name 1"
                   description="Lorem ipsum dolor sit amet,  consectetur adipiscing elit."
                   photo="https://via.placeholder.com/170x170"/>
           <Flavor  name="Innovade Model Name 1"
                   description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                   photo="https://via.placeholder.com/170x170"/>  
          <Flavor  name="Innovade Model Name 1"
                   description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                   photo="https://via.placeholder.com/170x170"  />  
          <Flavor  name="Innovade Model Name 1"
                   description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                   photo="https://via.placeholder.com/170x170"  />
          </Slider>
        </Panel>
        <Panel>
          <Slider {...settings} ref={(slider) => slider}>
          <Flavor  name="Innovade Model Name 1"
                   description="Lorem ipsum dolor sit amet,  consectetur adipiscing elit."
                   photo="https://via.placeholder.com/170x170"  />
           <Flavor  name="Innovade Model Name 1"
                   description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                   photo="https://via.placeholder.com/170x170"  />  
          <Flavor  name="Innovade Model Name 1"
                   description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                   photo="https://via.placeholder.com/170x170"  />  
          <Flavor  name="Innovade Model Name 1"
                   description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                   photo="https://via.placeholder.com/170x170"  />
          </Slider>
        </Panel>
        <Panel>
          <Slider {...settings} ref={(slider) => slider}>
          <Flavor  name="Innovade Model Name 1"
                   description="Lorem ipsum dolor sit amet,  consectetur adipiscing elit."
                   photo="https://via.placeholder.com/170x170"  />
           <Flavor  name="Innovade Model Name 1"
                   description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                   photo="https://via.placeholder.com/170x170"  />  
          <Flavor  name="Innovade Model Name 1"
                   description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                   photo="https://via.placeholder.com/170x170"  />  
          <Flavor  name="Innovade Model Name 1"
                   description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                   photo="https://via.placeholder.com/170x170"  />
          </Slider>
        </Panel>
      </div>
    </Tabs>
   
  </React.Fragment>
);
