import * as React from 'react';

export default function Card(props) {
  const { title, content, btn, img,link} = props;
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{content}</p>
          <a href={link} className="btn btn-primary">{btn}</a>
        </div>
      </div>
    </>
  )
}