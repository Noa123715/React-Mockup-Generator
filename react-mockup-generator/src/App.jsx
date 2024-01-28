import React from 'react';
import TableComponent from './TableTemplate';

const App = () => {
    const tableData = [
        ["hi","chani","g"]
    ];

    return (
        <div>
            <TableComponent data={tableData} colunms_names={["1","2","3"]}/>
        </div>
    );
};

export default App;
