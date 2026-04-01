import Image from "next/image";
import LogoIcon from '@/public/icons/logo.svg';
import HomeIcon from '@/public/icons/home.svg';
import ExploreIcon from '@/public/icons/explore.svg';
import NotificationsIcon from '@/public/icons/notifications.svg';
import MessagesIcon from '@/public/icons/mail.svg';
import ProfileIcon from '@/public/icons/person.svg';


function Logo() {
  return (
    <div className="logo">
      <LogoIcon />
      <h1>NextLink</h1>
    </div>
  );
}

function Navbar({ icon,text, active = false }) {
  return (
    <div className={`sidebar-item ${active ? "sidebar-item--active" : ""}`}>
      {icon}
      <span>{text}</span>
    </div>
  );
}

function SideBar() {
  return (
    <div>
      <Logo />
      <div className="flex flex-1 items-center">
        <nav className="sidebar w-full">
          <Navbar 
            icon={<HomeIcon />}
            text="Home" 
            active={true}
            />
          <Navbar
            icon={<ExploreIcon />}
            text="Explore"
            />
          <Navbar
            icon={<NotificationsIcon />}
            text="Notifications"
            />
          <Navbar
            icon={<MessagesIcon />}
            text="Messages"
            />
          <Navbar
            icon={<ProfileIcon />}
            text="Profile"
            />
          <button className="create-post-btn">CREATE POST</button>
        </nav>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="home">
      <div className="leftSide">
        <SideBar />
      </div>
      <main className="main-content">
        <h1>Welcome to NextLink</h1>
      </main>
      <div className="right-panel">
        <h2>Right Side Content</h2>
      </div>
    </div>
  );
}

export { SideBar, Logo };
