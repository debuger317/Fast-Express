import React from 'react';

const CompanyListDetiles = (props) => {
    const { _id, name, email, address, updatedAt, createdAt } = props.list;
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

export default CompanyListDetiles;