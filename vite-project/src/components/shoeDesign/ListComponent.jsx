import React from 'react'
import ItemComponent from './ItemComponent';

function ListComponent({list}) {
  return (
    <div>
        <ItemComponent list={list}/>
    </div>
  );
}

export default ListComponent
