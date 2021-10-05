import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from '../Components/Header';
import SideNavBar from '../Components/SideNavBar';
import Main from '../Components/Main'
import Footer from '../Components/Footer';

const Routes = () => (
    <BrowserRouter>
        <Header />
        <Main />
        <Switch>
            <Route path='/' exact component={SideNavBar} />
        </Switch>
        <Footer />
    </BrowserRouter>
)

export default Routes