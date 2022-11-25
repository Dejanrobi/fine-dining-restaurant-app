import React from "react";

import "./Chef.css";
import { SubHeading } from "../../components";
import { images } from "../../constants";

const Chef = () => (
  <div className="app__bg chef__section section__padding">
    <div className="chef__img">
      <img src={images.chef} alt="chef" />
    </div>

    <div className="app__wrapper_info chef__info">
      <SubHeading title="Chef's Word" />
      <h1 className="headtext__cormorant">What we believe in</h1>
      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .
          </p>
        </div>
        <p className="p__opensans">
          auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit.
          Nulla scelerisque scelerisque congue ac consequat, aliquam molestie
          lectus eu. Congue iaculis integer curabitur semper sit nunc.
        </p>
      </div>
      <div className="app__chef-sign">
        <p>Kevin Lao</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign" />
      </div>
    </div>
  </div>
);

export default Chef;
