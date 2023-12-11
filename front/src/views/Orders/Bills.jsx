
export default function Bills() {
    return (
        <div className="border-2 p-4">
            <h1 className="font-bold text-xl">Your Bill</h1>
            <form action="">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Your Total Bill Amount :</th>
                            <td className="text-xl font-serif">- ${400}</td>
                        </tr>
                        <tr>
                            <th>Discount :</th>
                            <td> -{ } </td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="text-xl font-serif ">${400}</td>
                        </tr>
                    </tbody>
                </table>
                <div className="m-2 justify-between flex">
                    <button className="p-2 bg-neutral-400 rounded-md hover:bg-neutral-300">
                        Pay
                    </button>
                    <a
                        href="#"
                        className="p-2 bg-yellow-400 rounded-md hover:bg-yellow-300"
                    >
                        Choose pay method
                    </a>
                </div>
            </form>

            <p className="text-end text-neutral-500 my-3">
                Thank you, please visit again.
            </p>
        </div>
    )
}
