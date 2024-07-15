import { data } from '../../../data'
import React from 'react';


const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  const removeItem = (id) => {
    setPeople(people.filter((person) => person.id !== id));
  }

  const clearAllItems = () => {
    setPeople([]);
  }

  return (
    <div>
      {people.map((person)=>{
        const {id, name} = person;
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button className="btn" type="button" onClick={() => removeItem(id)}>Remove</button>
          </div>
        )
      })}
      <button onClick={clearAllItems} className="btn" type="button" style={{marginTop:'2rem'}}>Clear Items</button>
    </div>
  )
};

export default UseStateArray;
