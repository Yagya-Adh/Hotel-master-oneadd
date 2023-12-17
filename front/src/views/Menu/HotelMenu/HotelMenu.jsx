const menuList = [
    {
        id: 1,
        rice: [
            { id: 1, name: "Plain Rice", price: "2.3", qty: 0, ordered: false },
            { id: 2, name: "Fry Rice", price: "3.2", qty: 0, ordered: false },
            { id: 3, name: "Motton Rice", price: "3.2", qty: 0, ordered: false },
            { id: 4, name: "Veg. Rice", price: "2.9", qty: 0, ordered: false },
            { id: 5, name: "Zira Rice", price: "1.2", qty: 0, ordered: false },
        ],
    },
    // {
    //     id: 2,
    //     momo: [
    //         { id: 1, name: "Open momo", price: "18" },
    //         { id: 2, name: "Normal momo", price: "12" },
    //         { id: 3, name: "Fry momo", price: "15" },
    //         { id: 4, name: "Steam momo", price: "13" },
    //     ],
    // },
];

export default function HotelMenu() {
    return (
        <div>
            <h1> OUR MENU </h1>
            <table>
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Menu Item</th>
                        <th>price</th>
                    </tr>
                </thead>
                <tbody>
                    {menuList.map((men) => {
                        const { rice, momo } = men;
                        return rice.map((ri, index) => {
                            return (
                                <tr key={index}>
                                    <td>{ri.id}</td>
                                    <td>{ri.name}</td>
                                    <td>$ {ri.price}</td>
                                </tr>
                            );
                        });
                    })}

                    {!menuList && <p>No Menu items is ordered</p>}
                </tbody>
            </table>
        </div>
    );
}
