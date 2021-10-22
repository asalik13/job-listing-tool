import './../styles/Header.css';
// TODO: Implement Header
const Header = () => {
    return (
        <div className='header'>
            <nav class='navbar'>
                <div class='nav-left'>
                    <a>Home</a>
                    <a>Referrals</a>
                </div>
                <div class='nav-right'>
                    <a>Help</a>
                    <a>Notifications</a>
                    <a>User</a>
                </div>
            </nav>            
        </div>
    );
}

export default Header;
