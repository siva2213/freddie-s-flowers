import React from "react";
import "./Cards.css";

export default function Cards(props) {
  return (
    <div className="item">
      {props.catalogs.map((catalog) => {
        return (
          <div
            className="sub-item"
            key={catalog.name}
            onClick={() =>
              props.onSelectedCategory && props.onSelectedCategory(catalog)
            }
          >
            <div className="catalog-img">
              <img
                alt={catalog.name}
                src={`${process.env.PUBLIC_URL}/img/${props.catalogType}/${catalog.image}`}
                height="175"
              />
            </div>
            <div className="catalog-desc">
              <div className="catalog-desc">{catalog.name}</div>
              <div className="catalog-desc">➤</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
