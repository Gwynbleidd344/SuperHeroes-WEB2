import logo from '../assets/image/heroes-logo.png'
import {useState} from "react";

export default function Header() {
    const [search, setSearch] = useState("");

    return (
        <header className='flex row justify-between bg-indigo-900 p-4 sticky top-0'>
            <div className='flex row'>
                <img src={logo} alt="logo" className='w-12'/>
                <h1 className='hidden sm:inline'>SuperHero Catalog</h1>
            </div>
            <input
                type="search"
                name="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search ..."
                className="w-7/15 bg-white rounded-xl p-2.5"
                aria-label="Search characters"
            />
        </header>
    )
}