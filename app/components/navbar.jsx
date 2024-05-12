import Link from "next/link";

const Navbar = () => {
    return (
        <div className="nav-container">
            <div className="logo">
                <Link href="/">Ravishek&apos;s Portfolio</Link>
            </div>
            <a
                href="https://drive.google.com/uc?export=download&id=1COq7bQXnJlU5JUGbObQv96EquVaR_-xD"
                className="cta-btn"
            >
                Download Resume
            </a>
        </div>
    );
};

export default Navbar;
