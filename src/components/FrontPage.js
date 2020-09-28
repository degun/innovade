import React, {useState} from "react"

const FrontPage = (props) => {
  const models = [
    {
      id: "01",
      name: "Model 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue tincidunt leo, eu maximus augue dictum ac. ",
    },
    {
      id: "02",
      name: "Model 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: "03",
      name: "Model 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: "04",
      name: "Model 4",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: "05",
      name: "Model 5",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ]
  const [selected, setSelected] = useState(0)

  return (
    <React.Fragment>
      <div className="Our__story" id="Story">
        <div className="Story__wrapper">
          <div className="reverse">
            <div className="Model__content">
              <span className="Model__X">{models[selected].name}</span>
              <br />
              <span className="ModelX__desc">
                {models[selected].description}
              </span>
              <br />
              <br />
              <a className="Shop__now" href="https://www.youtube.com/">
                shop now
              </a>
            </div>
            <div className="Title">INNOVADE</div>
          </div>
          <div className="Slider__wrapper">
            <div className="Model__name">{models[selected].name}</div>
            <div className="Angle__wrapper">
              <div onClick={() => setSelected(selected === 0 ? models.length - 1 : selected - 1)}>
                <i className="fa fa-angle-up"></i>
              </div>
              <div style={{textAlign: "center", fontSize: 20}}>
                {models[selected].id}
              </div>
              <div onClick={() => setSelected(selected === models.length - 1 ? 0 : selected + 1)}>
                <i className="fa fa-angle-down"></i>
              </div>
            </div>
          </div>
        </div>

        <div className="Social__section">
          <a href="https://www.instagram.com/">Instagram</a>/
          <a href="https://www.facebook.com/">Facebook</a>
        </div>
      </div>
    </React.Fragment>
  )
}

export default FrontPage
