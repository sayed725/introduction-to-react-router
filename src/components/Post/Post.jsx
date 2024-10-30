import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Post = ({post}) => {
    // eslint-disable-next-line react/prop-types
    const {id,title} = post;
    return (
        <div className="border-2 border-red-400 p-5 m-2 rounded-2xl">
            <h2>Post of id: {id}</h2>
            <p>{title}</p>
            <Link to={`/post/${id}`}><button className="bg-slate-300 p-2 rounded-2xl hover:bg-slate-500 mt-5">Post Detail</button></Link>
        </div>
    );
};

export default Post;