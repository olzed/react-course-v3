import { useAppContext } from './Navbar';

const capitalize = (str) => {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
};

const UserContainer = () => {
    const { user, logout } = useAppContext();
    return (

        <div className="user-container">
            {user ? (
                <>
                    <p>Hello there, {capitalize(user.name)}</p>
                    <button className="btn" onClick={logout}>Logout</button>
                </>
            ) : (
                <p>Please login.</p>
            )}
        </div>
    )
}

export default UserContainer;