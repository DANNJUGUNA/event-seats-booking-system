import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import './node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import eventsData from './events.json';

class Events extends Component {
  render() {
    return (
      <div>
        <h1>Events</h1>
        <BootstrapTable data={eventsData.events}>
          <TableHeaderColumn dataField='EventName' isKey={true}>Event Name</TableHeaderColumn>
          <TableHeaderColumn dataField='location'>Location</TableHeaderColumn>
          <TableHeaderColumn dataField='time'>Time</TableHeaderColumn>
          <TableHeaderColumn dataField='capacity'>Capacity</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

export default Events;
