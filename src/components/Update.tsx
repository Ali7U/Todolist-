import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Update() {
  const [todoName, setTodoName] = useState("");
  const [todoDate, setTodoDate] = useState("");
  const [id, setId] = useState<any>();
  const navigate = useNavigate();
  const api = `https://63e2114c109336b6cbfecc6b.mockapi.io/login/${id}`;

  useEffect(() => {
    setId(localStorage.getItem("id"));
  }, []);
  const update = async () => {
    if (todoName.length >= 3 ) {
      axios
        .put(api, {
          todoName, todoDate
        })
        .then((res) => {
          console.log(res);
        });
      await axios.get("https://63e2114c109336b6cbfecc6b.mockapi.io/login/");
      navigate('/')
    } else alert("Please write correct information");
  };

  return (
    <div className="box">
      <input
        placeholder="الاسم الاول"
        type="text"
        onChange={(e) => setTodoName(e.target.value)}
      />
      <input
        placeholder="اسم العائلة"
        type="date"
        onChange={(e) => setTodoDate(e.target.value)}
      />
      
      <button onClick={update}>تحديث البيانات</button>
    </div>
  );
}

export default Update;
