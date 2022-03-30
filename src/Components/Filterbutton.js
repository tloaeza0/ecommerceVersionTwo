import React from 'react'

const Filterbutton = () => {
    return (
        <div>
            <label for = "products">Filter</label>
            <select id = 'products' name = 'plants'>
                <option value = "low">Price:Low to High</option>
                <option value = "high">Price: High to Low</option>
            </select>
        </div>
    )
}

export default Filterbutton
