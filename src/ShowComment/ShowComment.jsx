import { useLoaderData } from "react-router-dom";

const ShowComment = () => {
    const {id,name,body} = useLoaderData()
    return (
        
        <div className="border-2 border-yellow-300 rounded-2xl">
            <h2>Comment id : {id}</h2>
            <p className="text-2xl font-bold">{name}</p>
            <p>{body}</p>
        </div>
    );
};

export default ShowComment;