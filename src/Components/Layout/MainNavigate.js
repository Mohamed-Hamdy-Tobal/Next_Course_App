// The Header
import Link from "next/link"

const MainNavigate = () => {
    return (
        <header className="main-navigate bg-blue-950 flex justify-between items-center py-4 px-6 text-white text-[18px]">
            <Link href='/' className="font-bold">Products</Link>
            <Link href='/' className="font-bold">Add New Product</Link>
        </header>
    )
}

export default MainNavigate
