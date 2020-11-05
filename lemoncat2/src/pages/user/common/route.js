
import MainPage from '../page';
import LoginUser from '../page/login';
import MovieDetail from '../page/moviedetail';
import RegistryUser from '../page/registry';

const home = "/home";

const routes = [
    {path: home, exact : true, name: "Main Page", component: MainPage},
    {path: home+"/login", exact : true, name: "User Login", component: LoginUser},
    {path: home+"/registry", exact : true, name: "User Login", component: RegistryUser},
    {path: home+"/detail", exact : true, name: "Movie Detail", component: MovieDetail},

];
export default routes;