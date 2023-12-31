import { Link } from 'react-router-dom';
import './styles.css';

function Header() {

    return (
        <header>
            <nav className='ml41'>
                <Link to="/home">
                    <h2>Github API</h2>
                </Link>
            </nav>
        </header>
    );
}

export default Header