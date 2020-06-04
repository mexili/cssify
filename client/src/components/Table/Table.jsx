import React from "react";

const Table = () => {
  return (
    <div className="table-container">
      <table>
        {" "}
        <thead>
          {" "}
          <tr>
            {" "}
            <th>Name</th> <th>ID</th> <th>Favorite Color</th>{" "}
            <th>Favorite Color</th> <th>Favorite Color</th>{" "}
            <th>Favorite Color</th> <th>Favorite Color</th>{" "}
            <th>Favorite Color</th> <th>Favorite Color</th>{" "}
            <th>Favorite Color</th> <th>Favorite Color</th>{" "}
            <th>Favorite Color</th>{" "}
          </tr>{" "}
        </thead>{" "}
        <tbody>
          {" "}
          <tr>
            {" "}
            <td>Jim</td> <td>00001</td> <td>Green</td> <td>Green</td>{" "}
            <td>Green</td> <td>Red</td> <td>Blue</td> <td>Blue</td>{" "}
            <td>Blue</td> <td>Blue</td> <td>Blue</td> <td>Blue</td>{" "}
          </tr>{" "}
          <tr>
            {" "}
            <td>Sue</td> <td>00002</td> <td>Red</td> <td>Green</td>{" "}
            <td>Green</td> <td>Green</td> <td>Green</td> <td>Blue</td>{" "}
            <td>Blue</td> <td>Red</td> <td>Red</td> <td>Red</td>{" "}
          </tr>{" "}
          <tr>
            {" "}
            <td>Barb</td> <td>00003</td> <td>Red</td> <td>Red</td> <td>Red</td>{" "}
            <td>Red</td> <td>Red</td> <td>Blue</td> <td>Blue</td> <td>Green</td>{" "}
            <td>Green</td> <td>Green</td>{" "}
          </tr>{" "}
        </tbody>{" "}
      </table>
    </div>
  );
};

export default Table;
