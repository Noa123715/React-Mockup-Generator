import React from 'react';

const TableComponent = ({ data }) => {
    // Optional: State and methods for handling dynamic features like sorting

    return (
        <table>
            <thead>
                <tr>
                    {/* Replace with your column headers */}
                    <th>Column 1</th>
                    <th>Column 2</th>
                    <th>Column 3</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        {/* Replace with your row data */}
                        <td>{item[0]}</td>
                        <td>{item[1]}</td>
                        <td>{item[2]}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default TableComponent;
