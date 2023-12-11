import { useState } from "react"

export default function SearchBar({ changesearch }) {


    return (
        <div>
            <input
                onChange={changesearch}
                type="text"
                className='rounded-2xl max-w-[50%]'
                placeholder='Search by name and email' />
        </div>
    )
}
