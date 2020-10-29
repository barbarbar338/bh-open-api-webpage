import DocumentMeta from "react-document-meta";
import Banner from "../images/banner.png";
import { Link } from "react-router-dom";

export default function Layout({ children, meta }) {
    return (
        <DocumentMeta {...meta}>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">
                    <img
                        src={Banner}
                        width="100"
                        className="d-inline-block align-top"
                        alt="Banner"
                        loading="lazy"
                    />
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarNavDropdown"
                >
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <div
                                className="nav-link dropdown-toggle"
                                id="navbarDropdownMenuLink"
                                role="button"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                Features
                            </div>
                            <div
                                className="dropdown-menu"
                                aria-labelledby="navbarDropdownMenuLink"
                            >
                                <Link className="dropdown-item" to="/">
                                    Action
                                </Link>
                                <Link className="dropdown-item" to="/">
                                    Another action
                                </Link>
                                <Link className="dropdown-item" to="/">
                                    Something else here
                                </Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
            {children}
        </DocumentMeta>
    );
}
