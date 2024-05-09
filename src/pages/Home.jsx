import Services from '../components/Services'
import Info from '../components/Info'
import { Link } from 'react-router-dom';

function Home(){
    return (
        <main>
            <Services/>
            <Info/>
            <Link to={'/login'}>Login</Link>
        </main>
    )
}

export default Home;
