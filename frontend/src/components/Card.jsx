import { useTheme } from '../context/ThemeContext.jsx';

export default function Card({ id, name, realName, universe, onDelete, onUpdate }) {
    const { theme } = useTheme();

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

    const cardClasses = theme === 'light'
        ? "bg-neutral-200 text-black"
        : "bg-gray-800 text-white";

    const idClasses = theme === 'light' ? "text-black" : "text-gray-400";
    const nameClasses = theme === 'light' ? "text-[color:var(--color-text-dark)]" : "text-white";
    const detailsClasses = theme === 'light' ? "text-[color:var(--color-text-dark)]" : "text-gray-300";
    const updateButtonClasses = theme === 'light'
        ? "border-[color:var(--color-secondary-gray)] text-[color:var(--color-text-dark)] hover:bg-[color:var(--color-secondary-gray)]"
        : "border-gray-600 hover:bg-gray-700";

    return (
        <div className={`max-w-sm w-full rounded-lg shadow-md p-6 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300 ${cardClasses}`}>
            <div className="mb-4 space-y-1">
                <p className={`text-sm font-body ${idClasses}`}>ID: {id}</p>

                <h2 className={`text-3xl font-hero-title flex items-center gap-2 ${nameClasses}`}>
                    <i className={`bx bx-shield text-2xl ${theme === 'light' ? "text-[color:var(--color-primary-blue)]" : "text-blue-500"}`}></i>
                    {name}
                </h2>

                <p className={`font-body ${detailsClasses}`}>
                    <span className="font-semibold">Real Name:</span> {realName}
                </p>
                <p className={`font-body ${detailsClasses}`}>
                    <span className="font-semibold">Universe:</span> {universe}
                </p>
            </div>

            <div className="flex space-x-4 mt-4">
                <button
                    type="button"
                    onClick={() => onUpdate && onUpdate({ id, name, realName, universe })}
                    className={`flex-1 py-2 px-4 border rounded-md font-body font-bold transition flex items-center justify-center gap-2 ${updateButtonClasses}`}
                >
                    <i className="bx bx-edit text-lg"></i>
                    Update
                </button>
                <button
                    type="button"
                    onClick={() => deleteChar(id)}
                    className="flex-1 py-2 px-4 bg-red-600 text-white rounded-md hover:bg-red-700 font-body font-bold transition flex items-center justify-center gap-2"
                >
                    <i className="bx bx-trash text-lg"></i>
                    Remove
                </button>
            </div>
        </div>
    );
}