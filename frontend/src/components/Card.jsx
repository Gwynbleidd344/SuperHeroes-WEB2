export default function Card({character, onDelete, onUpdate}) {
    return (
        <section>
            <div>
                <h2>{character.name}</h2>
                <p>{character.realName || character.alias}</p>
                <p>{character.universe || "Inconnu"}</p>
            </div>
            <div>
                <button onClick={() => onUpdate(character.id)}>Update</button>
                <button onClick={() => onDelete(character.id)}>Delete</button>
            </div>
        </section>
    )
}