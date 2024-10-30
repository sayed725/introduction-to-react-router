import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Home = () => {
    const navigation = useNavigation()
    const location = useLocation()
    console.log(location)
    return (
        <div className="text-center">
            <Header></Header>
            {
                navigation.state === 'loading'? <p className="text-9xl">Loading...</p>: <Outlet></Outlet>
                
            }
            <Footer></Footer>
           
            
        </div>
    );
};

export default Home;