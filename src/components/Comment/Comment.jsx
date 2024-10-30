import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Comment = ({comment}) => {
    // eslint-disable-next-line react/prop-types
    const {id,name,email}= comment;
    return (
        <div  className="border-2 border-yellow-400 p-5 m-2 rounded-2xl">
            <p>CommentId : {id}</p>
            <h2 className="text-2xl font-bold">{name}</h2>
            <p>Email: {email}</p>
            <Link to={`/comments/${id}`}><button className="bg-purple-300 p-2 rounded-2xl hover:bg-purple-500 mt-5">Comment Detail</button></Link>
        </div>
    );
};

export default Comment;