import React, { useState } from "react";

const ReadTable = ({ user, id, Usermanagement, setSelectedItem ,DeleteUser}) => {
  
  const [clicked, setClicked] = useState(null);

  console.log();

  return (
    <>
      {Usermanagement.map((user) => (
        <tr key={user.uuid}>
          <th scope="row">
            <input
              type="checkbox"
              // checked={clicked === user.id}
              onChange={(e) => {
                if (clicked === user.id) {
                  // setClicked(user.id);
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
           {/*<td>
               <button
                     type="submit"
                      data-bs-dismiss="modal"
                      className="btn btn-danger float-start"
                      // onClick={DeleteUser(user.uuid)}
                      onClick={() => DeleteUser(user.uuid)}
                      >
                      Delete
               </button> 
          </td>*/}
        </tr>
      ))}
    </>
  );
};

export default ReadTable;
