const Navbar = () => {
    return (  <nav className="w-full h-16 flex items-center justify-between px-8 fixed top-0 left-0 z-50">
        <div className="text-2xl ">Tumelo.Motjopi</div>
        <ul className="flex space-x-8">
            <li><a href="#home" className="hover:text-gray-500">Home</a></li>
            <li><a href="#about" className="hover:text-gray-500">About</a></li>
            <li><a href="#projects" className="hover:text-gray-500">Projects</a></li>
            <li><a href="#contact" className="hover:text-gray-500">Contact</a></li>
        </ul>
    </nav> );
}
 
export default Navbar;