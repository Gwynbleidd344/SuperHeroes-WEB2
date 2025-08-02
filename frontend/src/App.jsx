import './App.css'
import Header from "./components/Header.jsx";
import {useEffect, useState} from "react";
import Card from "./components/Card.jsx";

function App() {
    const [characters, setCharacters] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const API_URL = "http://localhost:8080/characters";

    useEffect(() => {
        fetch(API_URL)
            .then((res) => {
                if (!res.ok) {
                    console.error(`Erreur HTTP: ${res.status} ${res.statusText}`);
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                return res.json();
            })
            .then(data => {
                console.log("Données brutes reçues de l'API:", data);
                if (data && Array.isArray(data.characters)) {
                    setCharacters(data.characters);
                    console.log("Characters mis à jour avec:", data.characters);
                } else {
                    console.error("La réponse de l'API ne contient pas un tableau 'characters' valide:", data);
                    setCharacters([]);
                }
            })
            .catch((err) => {
                console.error("Erreur lors de la récupération des données de l'API:", err);
                setCharacters([]);
            });
    }, []);

    const handleDelete = (id) => {
        fetch(`${API_URL}/${id}`, { method: "DELETE" }).then(() => {
            setCharacters(characters.filter((char) => char.id !== id));
        });
    };

    const handleUpdate = (id) => {
        const updatedName = prompt("Nouveau nom ?");
        if (!updatedName) return;
        fetch(`${API_URL}/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name: updatedName }),
        })
            .then((res) => res.json())
            .then((data) => {
                setCharacters(characters.map((char) => (char.id === id ? data.character : char)));
            });
    };

    const filtered = characters.filter((char) => char.name.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
    <>
        <Header searchTerm={searchTerm} onChange={setSearchTerm}/>
        <div className='flex flex-col gap-4'>
            {/* Condition pour afficher les cartes ou un message */}
            {filtered.length > 0 ? (
                filtered.map((char) => (
                    <Card key={char.id} character={char} onDelete={handleDelete} onUpdate={handleUpdate}/>
                ))
            ) : (
                <p className="text-center text-gray-500 mt-8">Aucun personnage trouvé.</p>
            )}
        </div>
    </>
  )
}

export default App