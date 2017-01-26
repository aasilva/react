import React from 'react';
import TableRow from 'components/table-row';

class TableComponent extends React.Component {

  render() {
    return (
      <table ref="table" className="table">
        <thead>
        <tr>
          <th>Name</th>
          <th>Distribution</th>
          <th>Arguments</th>
        </tr>
        </thead>

        <tbody>
          <TableRow name='Swmin' ref='Swmin'/>
          <TableRow name='Swcr' ref='Swcr'/>
          <TableRow name='Corey Water' ref='Corey Water'/>
          <TableRow name='Krw@Sorw' ref='Krw@Sorw'/>
          <TableRow name='Krw@S=1' ref='Krw@S=1'/>
          <TableRow name='Sorw' ref='Sorw'/>
          <TableRow name='Corey O/W' ref='Corey O/W'/>
          <TableRow name='Kro@Somax' ref='Kro@Somax'/>
        </tbody>
      </table>
    );
  }
}

export default TableComponent;


