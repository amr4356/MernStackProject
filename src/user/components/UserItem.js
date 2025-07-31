import "./UserItem.css"

const UserItem =(props) => {
  return (
    <ul>
      {props.items.map(user => (
        <li key={user.id}>
          {user.name} ({user.placeCount} places)
        </li>
      ))}
    </ul>
  );
}

export default UserItem;