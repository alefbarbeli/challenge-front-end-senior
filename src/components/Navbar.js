import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-white text-2xl font-bold">
                    Kruzer
                </Link>
                <div>
                    <Link href="/" className="text-gray-300 hover:text-white mx-4">
                        Home
                    </Link>
                    <Link href="/cart" className="text-gray-300 hover:text-white mx-4">
                        Cart
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;