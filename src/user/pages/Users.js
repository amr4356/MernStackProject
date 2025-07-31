export default function Users() {
  const USERS = [
    {
      id: "u1",
      name: "Max Schwarz",
      image: "https://example.com/image.jpg",
      places: 3,
    },
    {
      id: "u2",
      name: "John Doe",
      image: "https://example.com/image2.jpg",
      places: 5,
    },
  ];
  return <UsersList items={[...USERS]} />;
}
