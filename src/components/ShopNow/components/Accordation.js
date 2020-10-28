import React from "react";
import "./Accordation.scss";

const data = [
  {
    title: "SHIPPING SPEC",
    paragraph: "Shipping worldwide."
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
      props: { paragraph, title },
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
          <span
            {...{ className: "accordion-item__icon" }}
            style={{ textAlign: "right" }}
          />
        </div>

        <div {...{ className: "accordion-item__inner" }}>
          <div {...{ className: "accordion-item__content" }}>
            <p {...{ className: "accordion-item__paragraph" }}>{paragraph}</p>
          </div>
        </div>
      </div>
    );
  }
}
export default Accordion;
