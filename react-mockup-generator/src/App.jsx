import React from 'react';
import TableComponent from './TableTemplate';

const App = () => {
    const tableData = [
        ["hi","chani","g"]
    ];

    return (
        <div>
            <TableComponent data={tableData} />
        </div>
    );
};

export default App;
