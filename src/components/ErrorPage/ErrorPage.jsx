import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    
    return (
        <div className="text-center flex flex-col gap-10">
            <h2 className="text-5xl font-bold text-center"> OoPs!!!</h2>
            <p className="">{error.statusText || error.massage}</p>
            {
                error.status === 404 && <div>
                    <h3 className="text-2xl font-sem">Page not found </h3>
                    <Link to="/"><button className="bg-indigo-300 p-2 rounded-2xl hover:bg-purple-500 mt-5">Home</button></Link>
                </div>
            }
        </div>
    );
};

export default ErrorPage;