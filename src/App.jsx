import "./index.css";
import React, { useState, useEffect } from "react";
import Card from "./Components/Card";
import Header from "./Components/Header";
import Pagination from "./Components/Pagination";
import CreateModal from "./Components/Modal";

function App() {
  const [pageNumber, setPageNumber] = useState(1);
  const [characters, setCharacters] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [search, setSearch] = useState("");
  const [characterInfo, setCharacterInfo] = useState([]);

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;
  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setCharacters(data.results);
    })();
  }, [api]);

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
            return (
              <Card
                key={i}
                props={character}
                openModal={setOpenModal}
                cardCharacterInfo={setCharacterInfo}
              />
            );
          })}
      </div>
      <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} />
      {openModal && (
        <CreateModal closeModal={setOpenModal} modalInfo={characterInfo} />
      )}
    </>
  );
}
export default App;
