import React from 'react';
import './pageNamer.scss';

const PageNamer = (props) => {
  return (
    <section className="page__header" >
        <div className="page__header-content">
            <h1 className='page__header-name'>{props.pageName}</h1>
            <h4 className='page__header-path'>Home / {props.pageName}</h4>
        </div>
    </section>
  )
}

export default PageNamer