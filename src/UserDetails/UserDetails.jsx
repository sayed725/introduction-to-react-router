import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
  const user = useLoaderData();
  const { name, website } = user;
  return (
    <div className="mt-11 flex flex-col justify-center gap-5 border-2 border-green-300 p-5 m-2 rounded-2xl">
      <h2>Detail About User</h2>
      <p>{name}</p>
      <p>Visit Us : {website}</p>
    </div>
  );
};

export default UserDetails;
