import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../redux/actions/users";
import Card from "./CardComponent";

const UsersComponent = () => {
  const users = useSelector((state) => state.users.users);
  const loading = useSelector((state) => state.users.loading);
  const error = useSelector((state) => state.users.error);
  const dispatch = useDispatch();

  useEffect(() => {
    const getData = () => {
      dispatch(getUsers());
    };

    getData();
  }, []);

  return (
    <div className="container mt-5">
      {loading && <p>loading</p>}

      <div className="d-flex flex-wrap">
        {users.length > 0 &&
          users.map((user) => {
            return <Card user={user} key={user.id}></Card>;
          })}
      </div>
      
      {users.length === 0 ? <p>ไม่มีข้อมูล</p> : null}
      {error && !loading && <p>{error}</p>}
    </div>
  );
};

export default UsersComponent;
