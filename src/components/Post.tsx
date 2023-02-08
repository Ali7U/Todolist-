import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Post() {
  // state
  const [todoName, setTodoName] = useState("");
  const [todoDate, setTodoDate] = useState("");

  //   navigate && api
  const navigate = useNavigate();
  const api = "https://63e2114c109336b6cbfecc6b.mockapi.io/login";

  const PostData = () => {
    if (todoName.length >= 3) {
      axios
        .post(api, {
          todoName,
          todoDate
        })
        .then((res) => {
          console.log(res);
        });
      axios.get("https://63e2114c109336b6cbfecc6b.mockapi.io/login");
      navigate("/");
    } else alert("please write correct name");
  };
  return (
    <div className="box post">
      <h3>بيانات المهمات</h3>
      <input
        placeholder="اسم المهمة"
        type="text"
        onChange={(e) => setTodoName(e.target.value)}
      />
      <input
        placeholder=""
        type="date"
        onChange={(e) => setTodoDate(e.target.value)}
      />
      
      <button onClick={PostData}>تسجيل البيانات</button>
    </div>
  );
}

export default Post;
