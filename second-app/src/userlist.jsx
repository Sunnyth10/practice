
import useFetchh from "./useFetchh";

function Userlist() {
    let userlist = useFetchh("https://jsonplaceholder.typicode.com/posts");

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {userlist.map((item) => (
            <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Userlist;