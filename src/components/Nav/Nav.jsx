import SearchBar from "../SearchBar/SearchBar"
import {Link,} from 'react-router-dom'

const Nav = ({onSearch, setAccess}) => {

    const handleLogOut =()=>{
         setAccess(false);

    }
    return(
            <nav>
                <button><Link to='/about'>About</Link></button>
                <button><Link to='/home'>Home</Link></button>
                <button><Link to='/favorites'>Favorites</Link></button>
                <button onClick={handleLogOut}>LOG OUT</button>
                <SearchBar onSearch={onSearch} />
            </nav>

    )
}

export default Nav;