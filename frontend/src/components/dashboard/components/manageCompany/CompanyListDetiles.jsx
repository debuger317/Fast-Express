import React from 'react';

const CompanyListDetiles = (props) => {
    const { _id, name, email, address, updatedAt, createdAt } = props.list;


    // const handleCompanyDelete = (e) => {

    //     const url = `https://fastexpress.herokuapp.com/api/merchant/${_id}`;
    //     fetch(url, {
    //         method: 'DELETE'
    //     })
    //     .then(res => res.json())
    //     .then(result => {
    //         console.log('delete successfully')
    //         e.target.parentNode.style.display = 'none';
    //     })
    // }

    return (
        <tr className="bg-gray-100 text-center border-b text-sm text-gray-600">
            <td className="p-2 border-r">{_id}</td>
            <td className="p-2 border-r">{name}</td>
            <td className="p-2 border-r">{email}</td>
            <td className="p-2 border-r">{address}</td>
            <td className="p-2 border-r">{new Date(createdAt).toDateString()}
            </td>
            <td className="p-2 border-r">{new Date(updatedAt).toDateString()}</td>
            <td>
                <button  className="bg-red-500 p-2 text-white hover:shadow-lg text-xs font-thin rounded">Remove</button>
            </td>
        </tr>

    );
};
//onClick={handleCompanyDelete({_id})}
export default CompanyListDetiles;