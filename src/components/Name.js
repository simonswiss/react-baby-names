import React from 'react'

/* ############################ */
/* ##### Single baby name ##### */
/* ############################ */

export default ({ 
  id, 
  info, 
  handleFavourite 
}) => (
  <li
    className={info.sex}
    onClick={() => handleFavourite(id)}>
    {info.name}
  </li>
)