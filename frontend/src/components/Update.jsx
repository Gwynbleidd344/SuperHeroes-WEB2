import { useState, useEffect } from 'react';

export default function Update({ isOpen, setIsOpen, character, onUpdate, clearSelected }) {
    const [formData, setFormData] = useState({
        id: '',
        name: '',
        realName: '',
        universe: '',
    });

    useEffect(() => {
        if (character) {
            setFormData({
                id: character.id,
                name: character.name,
                realName: character.realName,
                universe: character.universe,
            });
        }
    }, [character]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`http://localhost:8080/characters/${formData.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error(`Erreur serveur: ${response.status}`);
            }

            const updatedChar = await response.json();
            console.log('Personnage modifié avec succès :', updatedChar);

            if (onUpdate) onUpdate(updatedChar);
            setIsOpen(false);
            clearSelected();

        } catch (error) {
            console.error('Erreur lors de la mise à jour :', error);
            alert("Échec de la mise à jour. Veuillez vérifier que l'API fonctionne.");
        }
    };

    if (!isOpen) return null;

    return (
        <>
            <div className="fixed inset-0 bg-white/10 backdrop-blur-sm z-40" />
            <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="bg-white bg-opacity-90 backdrop-blur-md p-6 rounded-xl shadow-xl w-96 relative">
                    <h2 className="text-xl font-semibold mb-4">Modifier un personnage</h2>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <input
                            type="number"
                            name="id"
                            placeholder="ID"
                            value={formData.id}
                            disabled
                            className="border border-gray-300 rounded px-3 py-2 bg-gray-100 text-gray-500 cursor-not-allowed"
                        />
                        <input
                            type="text"
                            name="name"
                            placeholder="Nom de super-héros"
                            value={formData.name}
                            onChange={handleChange}
                            className="border border-gray-300 rounded px-3 py-2 bg-transparent"
                            required
                        />
                        <input
                            type="text"
                            name="realName"
                            placeholder="Nom réel"
                            value={formData.realName}
                            onChange={handleChange}
                            className="border border-gray-300 rounded px-3 py-2 bg-transparent"
                            required
                        />
                        <input
                            type="text"
                            name="universe"
                            placeholder="Univers"
                            value={formData.universe}
                            onChange={handleChange}
                            className="border border-gray-300 rounded px-3 py-2 bg-transparent"
                            required
                        />

                        <div className="flex justify-end gap-2 mt-4">
                            <button
                                type="button"
                                onClick={() => {
                                    setIsOpen(false);
                                    clearSelected();
                                }}
                                className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
                            >
                                Annuler
                            </button>
                            <button
                                type="submit"
                                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                            >
                                Mettre à jour
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}