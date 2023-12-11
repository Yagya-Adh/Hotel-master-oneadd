export default function NavBar() {
    return (
        <div>
            <div className="flex-row flex justify-between ">
                <a href="/welcome" className="text-3xl hover:text-blue-800  hover:cursor-pointer">
                    YAGYA
                </a>
                {/*  bg-purple-600 */}
                <div className="flex-row flex justify-between p-3">
                    <ul className="flex justify-between">
                        <a href="/welcome" className="flex justify-between mx-3 hover:text-blue-800  hover:cursor-pointer">
                            <li className="text-xl">Home</li>
                        </a>
                    </ul>

                    <ul className="flex justify-between">
                        <a href="/about" className="flex justify-between mx-3 hover:text-blue-800  hover:cursor-pointer">
                            <li className="text-xl">About</li>
                        </a>
                    </ul>

                    <ul className="flex justify-between mx-3 hover:text-blue-800  hover:cursor-pointer">
                        <a href="/login">
                            <li className="text-xl">Login</li>
                        </a>
                    </ul>

                    <ul className="flex justify-between mx-3 hover:text-blue-800  hover:cursor-pointer">
                        <a href="/register">
                            <li className="text-xl">Registration</li>
                        </a>
                    </ul>



                    {/* <ul className="flex justify-between mx-3 hover:text-blue-800  hover:cursor-pointer">
                        <a href="#">
                            <li>
                                <button className="bg-gray-300 rounded p-4">
                                    <p className="bg-white text-gray-900 opacity-none shadow-2xl text-3xl">add</p>
                                </button>
                            </li>
                        </a>
                    </ul> */}

                    {/* <ul className="flex justify-between mx-3 hover:text-blue-800  hover:cursor-pointer">
                        <a href="#">
                            <li>About</li>
                        </a>
                    </ul>
                    <ul className="flex justify-between mx-3 hover:text-blue-800  hover:cursor-pointer">
                        <a href="#">
                            <li>Blog</li>
                        </a>
                    </ul>

                    <ul className="flex justify-between mx-3 hover:text-blue-800  hover:cursor-pointer">
                        <a href="#">
                            <li>Shop</li>
                        </a>
                    </ul> */}
                </div>
            </div>
        </div>
    );
}
