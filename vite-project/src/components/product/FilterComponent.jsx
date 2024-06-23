import React, { useState } from "react";
import ListComponent from "./ListComponent";

 function FilterComponent({ list ,search,setSearch,filtered,setFiltered}) {

   function checkInput(event) {
    setSearch(event.target.value);
  }

  const filtered_prod = list.filter((filtered) =>
    filtered.title.toLowerCase().includes(search.toLowerCase())
  );

  function categoryChange(event) {
    if (event.target.checked) {
      const category_filter = list.filter(
        (category) => category.Categories === event.target.value
      );
 
      setFiltered((destructured) => [...destructured, ...category_filter]);
    } else {
      const count = filtered.filter(
        (remove) => remove.Categories === event.target.value
      );
 
      const start = filtered
        .map((start) => start.Categories)
        .indexOf(event.target.value);
 
      filtered.splice(start, count.length);
 
      setFiltered((filtered) => [...filtered]);
    }
  }
 
  
 
  return (
    <div>
      <input type="text" onChange={checkInput} /><br />
      <input  type="checkbox" name="Sports" value="Sports" onChange={categoryChange}/>
      <label htmlFor="Sport">Sports</label><br />
      <input type="checkbox" value="Sneakers" name="Sneakers" onChange={categoryChange} />
      <label htmlFor="sneaker">Sneakers</label><br />
      <input type="checkbox" value="Unisex" name="Unisex" onChange={categoryChange} />
      <label htmlFor="Unisex">Unisex</label>
     
     
      <ListComponent list={filtered_prod} />
    
    </div>
  );
}
export default FilterComponent

