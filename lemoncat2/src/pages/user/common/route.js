
import MainPage from '../page';
import LoginUser from '../page/login';
import REgistryUser from '../page/registry';

const home = "/home";

const routes = [
    {path: home, exact : true, name: "Main Page", component: REgistryUser},
    {path: home+"/login", exact : true, name: "User Login", component: LoginUser},

];
export default routes;