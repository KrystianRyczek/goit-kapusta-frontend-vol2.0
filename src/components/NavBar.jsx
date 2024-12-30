import '../css/NavBar.css';
import kapustaLogo from '../images/kapusta-logo.png';
import { useNavBar } from '../hooks/useNavBar';
import { ConfCloseModal } from './Modal';
import { useHome } from '../hooks/useHome';

export default function NavBar() {
  const {
    isLogin,
    avatar,
    userName,
    modalIsOpen,
    signOut,
    signOutConf,
    modalIsClose,
  } = useNavBar();

  const { navigate } = useHome();

  if (!isLogin) {
    return (
      <div className="nav-bar-container">
        <img className="nav-bar-logo" src={kapustaLogo} alt="Kapusta Logo" />
      </div>
    );
  }

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <div className="nav-bar-container">
      <button className="nav-bar-logo-home" onClick={handleLogoClick}>
        <img className="nav-bar-logo" src={kapustaLogo} alt="Kapusta Logo" />
      </button>
      <div className="nav-bar-box">
        <div
          className="nav-bar-avatar"
          style={{ backgroundColor: `${avatar}` }}
        >
          {' '}
        </div>
        <h3 className="nav-bar-user-name">Welcome {userName}! </h3>
        <div className="nav-bar-line"></div>
        <button className="nav-bar-button" onClick={signOut}>
          Exit
        </button>
      </div>
      <ConfCloseModal
        modalIsOpen={modalIsOpen}
        modalIsClose={modalIsClose}
        signOutConf={signOutConf}
      />
    </div>
  );
}
