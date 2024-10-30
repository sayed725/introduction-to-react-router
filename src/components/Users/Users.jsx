import { useLoaderData } from "react-router-dom";
import User from "../../User/user";


const Users = () => {
    const users = useLoaderData();
    return (
        <div>
            <h2 className="text-2xl font-bold">Our Users: {users.length}</h2>
            <p>Congratulations for using out site</p>

            
               <div className="grid grid-cols-3 p-10">
               {
                    users.map(user=> <User key={user.id} user={user}></User>)
                }
               </div>
           
        </div>
    );
};

export default Users;