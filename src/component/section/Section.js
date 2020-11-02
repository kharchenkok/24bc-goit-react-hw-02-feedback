import React from 'react';
import style from './Section.module.css'

const Section = ({title, children}) => {
  return (
    <>
    <h2 className={style.section__title}>{title}</h2>
    {children}
  </>
  );
};

export default Section;
