/* import "../index.css";
import React, { useState, useEffect } from "react";
import Card from "./Components/Card";
import Header from "./Components/Header";

function GetData() {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Header props={setSearch} />
      <div className="flex-container">
        {characters
          .filter((character) => {
            return search.toLowerCase() === ""
              ? character
              : character.name.toLowerCase().includes(search);
          })
          .map((character, i) => {
            return <Card key={i} props={character} />;
          })}
      </div>
      <GetData />
    </>
  );
}

export default GetData;
 */
