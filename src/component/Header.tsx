import Logo from "./Logo.tsx";

function Header() {
    return (
        <div className="nav-container">
            <div className="w-1/2 flex items-center justify-start pl-20">
                <Logo />
            </div>
            <div className="w-1/2 flex justify-center items-center p-10">
                <span className="nav-item">About Me</span>
                <span className="nav-item">Portfolio</span>
                <span className="nav-item">Service</span>
                <span className="nav-item">Contact</span>
            </div>

        </div>
    );
}

export default Header;