import React from 'react'

import Name from './Name'

/* ########################### */
/* ##### Baby names list ##### */
/* ########################### */

export default ({ 
  data, 
  filter, 
  favourites, 
  addFavourite 
}) => { 
  const input = filter.toLowerCase()
  
  // Gather list of names
  const names = data
    // filtering out the names that...
    .filter((person, i) => {
      return (
        // ...are already favourited
        favourites.indexOf(person.id) === -1
        // ...are not matching the current search value
        && !person.name.toLowerCase().indexOf(input)
      )
    })
    // ...output a <Name /> component for each name
    .map((person, i) => {
    // only display names that match current input string
      return (
        <Name 
          id={person.id}
          key={i}
          info={person}
          handleFavourite={(id) => addFavourite(id)}
        />
      )
    })
  
  /* ##### the component's output ##### */
  return ( 
    <ul> 
      {names}
    </ul>
  )
}