import Image from "next/image";
import LogoIcon from '@/public/icons/logo.svg';
import HomeIcon from '@/public/icons/home.svg';
import ExploreIcon from '@/public/icons/explore.svg';
import NotificationsIcon from '@/public/icons/notifications.svg';
import MessagesIcon from '@/public/icons/mail.svg';
import ProfileIcon from '@/public/icons/person.svg';
import CloseIcon from '@/public/icons/close.svg';
import LikeIcon from '@/public/icons/like.svg';
import CommentIcon from '@/public/icons/comment.svg';
import ShareIcon from '@/public/icons/share.svg';
import SaveIcon from '@/public/icons/bookmark.svg';


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

/************************************************** */
/************************************************** */
/************************************************** */

function PostCard({ username, time, location, content, image, likes, comments, shares }) {
  return (
    <article className="postcard-card">
      {/* Post Header */}
      <div className="postcard-header">
        <div className="postcard-header-right">
          <div className="postcard-header-profile-image">
            <Image
              src="/images/2.jpeg"
              alt={`${username}'s profile picture`}
              width={40}
              height={40}
              className="rounded-full" 
            />
          </div>
          <div className="postcard-header-text-info">
            <span className="postcard-header-username">{username}</span>
            <span className="postcard-header-time-location">{time} · {location}</span>
          </div>
        </div>
        <button className="postcard-header-left">
          <CloseIcon />
          </button>
      </div>

      {/* Text Content */}
      {content && (<div className="postcard-content">
        <p className="postcard-content-text">{content}</p>
      </div>)
      }

      {/* Image Content */}
      {image && (
        <div className="postcard-image">
          <Image
            src={image}
            alt="Post image"
            width={600}
            height={400}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      )
      }

      {/* Action Bar */}
      <div className="postcard-action">
        <div className="postcard-action-left">
          <button className="postcard-action-icon">
            <LikeIcon />
            <span className="action-span">{likes}</span>
          </button>
          <button className="postcard-action-icon">
            <CommentIcon />
            <span className="action-span">{comments}</span>
          </button>
          <button className="postcard-action-icon">
            <ShareIcon />
            <span className="action-span">{shares}</span>
          </button>
        </div>
        <button className="postcard-action-right">
          <SaveIcon />
        </button>
      </div>


    </article>
  );
}

function Feed() {
  return (
    <div className="feed-container">
      <div className="feed-inner">
        <PostCard
          username="@m.e.d_a.m.i.n.e"
          time="2 hours ago"
          location="Vancouver, BC"
          content="Just finished this summer cardigan! Used a lightweight cotton blend from the local market. Perfect for breezy evenings. #knitting #handmade #summerstyle"
          image="/images/tabi3a.jpeg"
          likes="1,240"
          comments="84"
          shares="12"
        />
        <PostCard
          username="@re.m.a"
          time="5 hours ago"
          location="Montreal, QC"
          content="Had an amazing day exploring the city! Found some hidden gems and delicious food spots. #cityadventures #foodie"
          image="/images/2.jpeg"
          likes="980"
          comments="5000000000000000"
          shares="8"
        />
        <PostCard
          username="@s.a.m.i"
          time="1 day ago"
          location="Toronto, ON"
          content="Loving the new art exhibit at the gallery! The colors and creativity are inspiring. #artlover #galleryvisit"
          image="/images/9731022f0be7c965e880505461643850.jpeg"
          likes="1,500"
          comments="120"
          shares="20"
        />

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
        <Feed />
      </main>
      <div className="right-panel">
        <h2>Right Side Content</h2>
      </div>
    </div>
  );
}

export { SideBar, Logo };
