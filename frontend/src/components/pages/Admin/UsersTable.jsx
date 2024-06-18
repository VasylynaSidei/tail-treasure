/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./adminTable.scss";
import AdminSidebar from "./AdminSidebar.jsx";
import { Link } from "react-router-dom";
import { useUserContext } from "../../contexts/UserContext";
import { fetchAllUsers } from "./../../../Helpers/fetches.js";
const UsersTable = () => {
  const { deleteUser } = useUserContext();
  const [users, setUsers] = useState([]);
  const [searchUser, setSearchUser] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await fetchAllUsers();
        setUsers(userData);
        console.log("UsersTable:", userData);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchData();
  }, []);

  const searchUserHandler = (event) => {
    setSearchUser(event.target.value);
  };

  const filteredUsers = users.filter((user) =>
    `${user.firstName} ${user.lastName}`
      .toLowerCase()
      .includes(searchUser.toLowerCase())
  );

  return (
    <section className="table-container">
      <AdminSidebar />
      <div className="table-wrapper">
        <h1 className="table-title">
          <input
            type="text"
            placeholder="Search by name"
            value={searchUser}
            onChange={searchUserHandler}
          />
          <table className="table">
            <thead className="table-head">
              <tr>
                <th>Count</th>
                <th>User</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="table-body">
              {filteredUsers.map((user, index) => (
                <tr key={user._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="table-image">
                      <img
                        src="/Images/user-avatar.png"
                        alt=""
                        className="table-user-image"
                      />
                      <span className="table-username">
                        {user.firstName} {user.lastName}
                      </span>
                    </div>
                  </td>
                  <td>{user.email}</td>
                  <td>
                    <div className="table-button-group">
                      <button>
                        <Link to={`/profile/${user._id}`}>View Profile</Link>
                      </button>
                      <button onClick={() => deleteUser(user._id)}>
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </h1>
      </div>
    </section>
  );
};

export default UsersTable;
