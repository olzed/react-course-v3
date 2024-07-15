import { useState, createContext, useContext } from "react";
import NavLinks from "./NavLinks";

export const NavbarContext = createContext();

export const useAppContext = () => useContext(NavbarContext);

const Navbar = () => {
    const [user, setUser] = useState({ name: 'bob' })
    const logout = () => {
        setUser(null);
    }

    return (
        <NavbarContext.Provider value={{ user, logout }}>
            <div>
                <nav className="navbar">
                    <h5>CONTEXT API</h5>
                    <NavLinks />
                </nav>
            </div>
        </NavbarContext.Provider>
    );
};

export default Navbar;