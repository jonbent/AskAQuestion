import {connect} from 'react-redux';
import Navbar from "./Navbar";

const mapStateToProps = ({entities, session}) => {
    const currentUser = session.isAuthenticated ? entities.users[session.userId] : null;
    return {
        currentUser: currentUser,
        loggedIn: session.isAuthenticated
    }
}

const NavbarContainer = connect(mapStateToProps, null)(Navbar);

export default NavbarContainer;