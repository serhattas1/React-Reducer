import React from 'react';
import Table from './components/Table';
import TableContextProvider from './contexts/TableContext';

function App() {
  return (
    <div>
      <TableContextProvider>
          <Table/>
      </TableContextProvider>
    </div>
  );
}

export default App;
