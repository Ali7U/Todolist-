import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { FiDelete } from "react-icons/fi";
import { RxUpdate } from "react-icons/rx";

// import Update from "./Update";

console.log(axios.isCancel("something ..."));
// bfvc

function Effect() {
  const [data, setData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://63e2114c109336b6cbfecc6b.mockapi.io/login")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  }, []);

  const deleteItem = (id: string) => {
      axios.delete(`https://63e2114c109336b6cbfecc6b.mockapi.io/login/${id}`);
      navigate("/")
    };
  return (
    <div>
      <h1>المهمات</h1>

      <ul>
        {data.map((item: any) => (
          <div className="info" key={item.id}>
            <p>{item.todoName}</p>
            <button className="btn del" onClick={() => deleteItem(item.id)}>
              <FiDelete />
            </button>
            <p>{item.todoDate}</p>
            <Link to="/updateUser">
              <button
                className="btn upd"
                onClick={() => localStorage.setItem("id", item.id)}
              >
                <RxUpdate />
              </button>
            </Link>
          </div>
        ))}
      </ul>
      <button className="btn2"
        onClick={() => {
          navigate("/login");
        }}
      >
        Post
      </button>
    </div>
  );
}

export default Effect;
