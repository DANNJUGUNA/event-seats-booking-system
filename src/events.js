import React from "react";

function events({EventName,location,date,time,capacity}) {
  return (
    <tr>
      <td>{EventName}</td>
      <td>{location}</td>
      <td>{date}</td>
      <td>{time}</td>
      <td>{capacity}</td>
    </tr>
  );
}

export default Transaction;
