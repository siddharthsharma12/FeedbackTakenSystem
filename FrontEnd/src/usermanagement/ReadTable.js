import React, { useState } from "react";

const ReadTable = ({ user, id, Usermanagement, setSelectedItem, DeleteUser }) => {

  const [clicked, setClicked] = useState(null);

  console.log();

  return (
    <>
      {Usermanagement.map((user) => (
        <tr key={user.uuid}>
          <th scope="row">
            <input
              type="checkbox"

              onChange={(e) => {
                if (clicked === user.id) {

                  setSelectedItem(null);
                  setClicked(null);
                } else {

                  setClicked(user.id);
                }
              }}
              onClick={() => setSelectedItem(user)}
            />
          </th>

          <td>{user.id}</td>
          <td>{user.email}</td>
          <td>{user.role}</td>

        </tr>
      ))}
    </>
  );
};

export default ReadTable;
