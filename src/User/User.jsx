import { Link, useNavigate } from "react-router-dom";


const user = ({user}) => {
    const {id,name,email,phone} = user
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const navigate = useNavigate();

    const handleShowPost=()=>{
        navigate(`/post/${id}`)
    }
    return (
        <div className="border-2 border-red-400 p-5 m-2 rounded-2xl">
            <h2>{name}</h2>
            <p>Email : {email}</p>
            <p>Phone : {phone}</p>
            <Link to={`/post/${id}`}><button className="bg-purple-300 p-2 rounded-2xl hover:bg-purple-500 mt-5">Show Details</button></Link>
          <button onClick={handleShowPost} className="bg-slate-300 p-2 rounded-2xl hover:bg-slate-500 mt-5">Show Detail</button>
        
        </div>
    );
};

export default user;