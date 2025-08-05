import logo from '../assets/image/heroes-logo.png'
import { useTheme } from '../context/ThemeContext.jsx';

export default function Header({ searchTerm, setSearchTerm, setIsAddOpen }) {
    const { theme, toggleTheme } = useTheme();

    return (
        <header className='flex items-center justify-between bg-indigo-900 p-4 sticky top-0'>
            <div className='flex items-center'>
                <img src={logo} alt="logo" className='w-12'/>
                <h1 className='hidden sm:inline text-white ml-4 BitcountCustom text-3xl'>SuperHero Catalog</h1>
            </div>
            <div className="flex-grow flex justify-center">
                <div className="relative w-1/2">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <i className='bx bx-search text-gray-500'></i>
                    </span>
                    <input
                        type="search"
                        name="search"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search ..."
                        className="w-full bg-white rounded-xl p-2.5 pl-10"
                        aria-label="Search characters"
                    />
                </div>
            </div>
            <button
                onClick={() => setIsAddOpen(true)}
                className="bg-blue-600 text-white px-4 py-2 sm:rounded rounded-full hover:bg-blue-700 mr-4 flex items-center justify-center"
            >
                <i className='bx bx-plus-circle text-2xl'></i>
                <span className="hidden sm:inline">Add Character</span>
            </button>
            <button
                onClick={toggleTheme}
                className="text-white text-2xl"
            >
                <i className={`bx ${theme === 'light' ? 'bxs-moon' : 'bxs-sun'}`}></i>
            </button>
        </header>
    )
}