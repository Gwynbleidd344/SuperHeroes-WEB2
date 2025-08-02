import logo from '../assets/image/heroes-logo.png'
export default function Header({ searchTerm, onChange }) {
    return (
        <header className='flex row justify-between bg-indigo-900 p-4 sticky top-0'>
            <div className='flex row'>
                <img src={logo} alt="logo" className='w-12'/>
                <h1 className='hidden sm:inline'>SuperHero Catalog</h1>
            </div>
            <input
                type="text"
                placeholder="Search ..."
                className='w-7/15 bg-white rounded-xl p-2.5'
                value={searchTerm}
                onChange={e => onChange(e.target.value)}/>
        </header>
    )
}