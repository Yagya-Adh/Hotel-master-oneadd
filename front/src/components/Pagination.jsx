const Pagination = ({ data, onPageChange }) => {
    const pageNumber = [];
    for (let i = 1; i <= data.last_page; i++) {
        pageNumber.push(i);
    }

    return (
        <nav className="my-3">
            <ul className='pagination h-10 text-xl flex flex-row'>
                {pageNumber.map(number => (
                    <li key={number} className='page-item mx-3 border p-2 transition-all rounded-md hover:bg-gray-200'>
                        <a onClick={() => onPageChange(number)} className='page-link'>
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};


export default Pagination