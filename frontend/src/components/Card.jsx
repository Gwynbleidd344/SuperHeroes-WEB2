export default function Card({ id, name, realName, universe, onDelete, onUpdate }) {
    async function deleteChar(id) {
        try {
            const response = await fetch(`http://localhost:8080/characters/${id}`, {
                method: "DELETE",
            });

            if (!response.ok) {
                const message = await response.text();
                throw new Error(`Échec de la suppression: ${response.status} - ${message}`);
            }

            if (onDelete) {
                onDelete(id);
            }
        } catch (error) {
            console.error("Erreur lors de la suppression du personnage :", error);
        }
    }

    return (
        <div className="max-w-sm w-full bg-neutral-200 rounded-lg shadow-md p-6 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
            <div className="mb-4 space-y-1">
                <p className="text-sm text-black font-body">ID: {id}</p>

                <h2 className="text-3xl font-hero-title text-[color:var(--color-text-dark)] flex items-center gap-2">
                    <i className="bx bx-shield text-[color:var(--color-primary-blue)] text-2xl"></i>
                    {name}
                </h2>

                <p className="text-[color:var(--color-text-dark)] font-body">
                    <span className="font-semibold">Real Name:</span> {realName}
                </p>
                <p className="text-[color:var(--color-text-dark)] font-body">
                    <span className="font-semibold">Universe:</span> {universe}
                </p>
            </div>

            <div className="flex space-x-4 mt-4">
                <button
                    type="button"
                    onClick={() => onUpdate && onUpdate({ id, name, realName, universe })}
                    className="flex-1 py-2 px-4 border border-[color:var(--color-secondary-gray)] text-[color:var(--color-text-dark)] rounded-md hover:bg-[color:var(--color-secondary-gray)] font-body font-bold transition flex items-center justify-center gap-2"
                >
                    <i className="bx bx-edit text-lg"></i>
                    Update
                </button>
                <button
                    type="button"
                    onClick={() => deleteChar(id)}
                    className="flex-1 py-2 px-4 bg-[color:var(--color-secondary-red)] text-[color:var(--color-primary-white)] rounded-md hover:bg-red-700 font-body font-bold transition flex items-center justify-center gap-2"
                >
                    <i className="bx bx-trash text-lg"></i>
                    Remove
                </button>
            </div>
        </div>
    );
}