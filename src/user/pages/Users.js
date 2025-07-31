import UsersList from "../components/UsersList";

export default function Users() {
  const USERS = [
    {
      id: "u1",
      name: "Max Schwarz",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
      places: 3,
    },
    {
      id: "u2",
      name: "John Doe",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      places: 5,
    },
  ];
  return <UsersList items={[...USERS]} />;
}
