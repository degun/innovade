import React from "react";
import "./Accordation.scss";

const data = [
  {
    title: "Need help with this order? Email us: info@innovade.uk"
  },
];

class Accordion extends React.Component {
  render() {
    return (
      <div {...{ className: "wrapper" }}>
        <ul {...{ className: "accordion-list" }}>
          {data.map((data, key) => {
            return (
              <li {...{ className: "accordion-list__item", key }}>
                <AccordionItem {...data} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

class AccordionItem extends React.Component {
  state = {
    opened: false,
  };

  render() {
    const {
      props: { title },
      state: { opened },
    } = this;

    return (
      <div
        {...{
          className: `accordion-item, ${
            opened && "accordion-item--opened Product-desc"
          }`,
          onClick: () => {
            this.setState({ opened: !opened });
          },
        }}
      >
        <div {...{ className: "accordion-item__line" }}>
          <span {...{ className: "Product-desc" }}>{title}</span>
        </div>
      </div>
    );
  }
}
export default Accordion;
