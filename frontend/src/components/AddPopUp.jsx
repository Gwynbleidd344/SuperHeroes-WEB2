import { useState } from 'react';

export default function Add({ isOpen, setIsOpen, onAdd }) {
    const [formData, setFormData] = useState({
        name: '',
        realName: '',
        universe: '',
    });

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
            const response = await fetch('http://localhost:8080/characters', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error(`Erreur serveur: ${response.status}`);
            }

            const data = await response.json();
            console.log('Personnage ajouté avec succès :', data);

            if (onAdd) onAdd(data);
            setFormData({ name: '', realName: '', universe: '' });
            setIsOpen(false);

        } catch (error) {
            console.error('Erreur lors de l’ajout du personnage :', error);
            alert("Échec de l'ajout. Veuillez vérifier que l'API fonctionne.");
        }
    };

    if (!isOpen) return null;

    return (
        <>
            <div className="fixed inset-0 bg-white/10 backdrop-blur-sm z-40" />
            <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="bg-white bg-opacity-90 backdrop-blur-md p-6 rounded-xl shadow-xl w-96 relative">
                    <h2 className="text-xl font-semibold mb-4">Add a new Marvel Character</h2>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
                            placeholder="Univers (ex: MCU)"
                            value={formData.universe}
                            onChange={handleChange}
                            className="border border-gray-300 rounded px-3 py-2 bg-transparent"
                            required
                        />

                        <div className="flex justify-end gap-2 mt-4">
                            <button
                                type="button"
                                onClick={() => setIsOpen(false)}
                                className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
                            >
                                Annuler
                            </button>
                            <button
                                type="submit"
                                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                            >
                                Ajouter
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}