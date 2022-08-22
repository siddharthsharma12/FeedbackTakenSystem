import React, { useState } from "react";

const ReadTable = ({
  posts,
  setSelectedItem,
 }) => {
const [clicked, setClicked] = useState(null);

 console.log();
  return (
    <>
      {posts.map((post) => (
        <tr key={post.id}>
          <th scope="row">
            <input
              type="checkbox"
              checked={clicked === post.id}
              onChange={(e) => {
                if (clicked === post.id) {
                  setSelectedItem(null);
                  setClicked(null);
                } else {
                  setClicked(post.id);
                }
              }}
             onClick={() => setSelectedItem(post)}
            />
          </th>

          <td>{post.id}</td>
          <td>{post.title}</td>
          <td>{post.body}</td>
        </tr>
      ))}
    </>
  );
};

export default ReadTable;
