import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const Postdetails = () => {
    const post = useLoaderData()
    const {postId} = useParams()
    console.log(postId)
    const {id,title,body} =post
    const navigate = useNavigate();

    const handleGoBack=()=>{
        navigate(-1)
    }

    return (
        <div>
            <h2>Post Details About : {id}</h2>
            <p>Title : {title}</p>
            <p><small>{body}</small></p>
           <button onClick={handleGoBack} className="bg-indigo-300 p-2 rounded-2xl hover:bg-purple-500 mt-5">Go Back</button>
        </div>
    );
};

export default Postdetails;