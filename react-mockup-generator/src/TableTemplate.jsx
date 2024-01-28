import React from 'react';

const TableComponent = ({ colunms_names, data}) => {
    // Optional: State and methods for handling dynamic features like sorting

    return (
        <table>
            <thead>
                <tr>
                    {colunms_names.map((item, index) => (
                        <th>{item}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (

                    <tr key={index}>
                        {item.map((col, indx) => (
                            <td>{col}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default TableComponent;
