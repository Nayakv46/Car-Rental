import React from 'react';
import './pageNamer.css';

const PageNamer = (props) => {
  return (
    <section className="page__header" >
        <div className="page__header-content">
            <h1>{props.pageName}</h1>
            <h4>Home / {props.pageName}</h4>
        </div>
    </section>
  )
}

export default PageNamer