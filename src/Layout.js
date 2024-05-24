import {Outlet, Link} from "react-router-dom";
import './stylesheets/Layout.css'

const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Strona Główna</Link>
                    </li>
                    <li>
                        <Link to="/client">Klient</Link>
                    </li>
                    <li>
                        <Link to="/worker">Pracownik</Link>
                    </li>
                    <li><Link to="/visit">Wizyta</Link>
                    </li>


                </ul>

            </nav>

            <Outlet/>

        </>
    )
};

export default Layout;