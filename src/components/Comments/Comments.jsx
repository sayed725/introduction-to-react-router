import { useLoaderData } from "react-router-dom";
import Comment from "../Comment/Comment";

const Comments = () => {
    const comments = useLoaderData()
    return (
        <div>
            <h2 className="text-2xl font-medium">Comments : {comments.length} </h2>
            <div className="grid grid-cols-4 p-10">
                {
                    comments.map(comment=><Comment key={comment.id} comment={comment}></Comment>)
                }
            </div>
        </div>
    );
};

export default Comments;