import { useState } from "react";

export default function SearchBar({onSearch}) {
   
   const [id,setId] = useState('')

   const handleChange = (event) => {
      setId(event.target.value)
   }

   return (
      <div>
         <input type='search' onChange={handleChange} value={id} />
         <button onClick={() => {onSearch(id); setId('')}}>Agregar</button> {/*onsearch agrega el personaje y setId me elimina el id del input para que usuario agrege otro id */}
      </div>
   );
}
