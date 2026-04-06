"use client";

import Image from "next/image";
import { useState } from "react";
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
import ImageIcon from '@/public/icons/add-image.svg';
import SendIcon from '@/public/icons/send.svg';


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
    <aside className="leftSide">
      <div className="flex flex-col gap-8">
        <Logo />
          <nav className="sidebar">
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
            {/* <button className="create-post-btn">CREATE POST</button> */}
          </nav>
      </div>
      <div className="minicard-profile">
        <div className="header-profile-image">
          <Image
            src="/images/2.jpeg"
            alt="Your profile picture"
            width={40}
            height={40}
            className="rounded-full"
            />
        </div>
        <div className="minicard-profile-info">
          <span className="minicard-username">Mohamed amine </span>
          <span className="minicard-name">@m.e.d_a.m.i.n.e</span>
        </div>
      </div>
    </aside>
  );
}

/************************************************** */
/************************************************** */
/************************************************** */

function PostCard({ username, image_profile, time, location, content, image, likes, comments, shares, priority = false }) {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [showComments, setShowComments] = useState(false);

  const comments_data = [
    { id: 1, name: "Elena Rodriguez", text: "The texture here is incredible!", time: "15m", avatar: null },
    { id: 2, name: "Marcus Stone", text: "Are these available as prints?", time: "32m", avatar: null },
    { id: 3, name: "Sophia Lane", text: "The violet palette is everything 💜", time: "1h", avatar: null },
  
    { id: 4, name: "Liam Carter", text: "This is pure art 🔥", time: "2h", avatar: null },
    { id: 5, name: "Ava Bennett", text: "I love the colors here!", time: "3h", avatar: null }
  ];

  return (
    <article className="postcard-card">
      {/* Post Header */}
      <div className="postcard-header">
        <div className="postcard-header-right">
          <div className="header-profile-image">
            <Image
              src={image_profile}
              alt={`${username}'s profile picture`}
              width={40}
              height={40}
              className="rounded-full"
              priority={priority}
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
            priority={priority}
          />
        </div>
      )
      }

      {/* Action Bar */}
      <div className="postcard-action">
        <div className="postcard-action-left">
          <button
            className={`postcard-action-icon ${liked ? "liked" : ""}`}
            onClick={() => setLiked(!liked)}
          >
            <span className="like-icon"><LikeIcon /></span>
            <span className="action-span">{likes}</span>
          </button>
          <button className={`postcard-action-icon ${showComments ? "liked" : ""}`}
            onClick={() => setShowComments(!showComments)}
          >
            <span className="like-icon"><CommentIcon /></span>
            <span className="action-span">{comments}</span>
          </button>
          <button className="postcard-action-icon">
            <span className="action-span"><ShareIcon /></span>
            <span className="action-span">{shares}</span>
          </button>
        </div>
        <button
          className={`postcard-action-right ${saved ? "saved" : ""}`}
          onClick={() => setSaved(!saved)}
        >
          <SaveIcon />
        </button>
      </div>

      {/* Comments Section */}
      {showComments && 
        <div className="comment-section">
          
          {/* Comment list */}
          <div className="comment-list">
            {comments_data.map((c) => (
              <div key={c.id} className="comment-item">
                <div className="comment-avatar">{c.name[0]}</div>
                <div className="comment-body">
                  <div className="comment-bubble">
                    <span className="comment-name">{c.name}</span>
                    <p className="comment-text">{c.text}</p>
                  </div>
                  <div className="comment-meta">
                    <button className="comment-reply-btn">REPLY</button>
                    <span>{c.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Comment input */}
            <div className="comment-input-area">
              <div className="comment-input-avatar">
              </div>
              <div className="comment-input-wrapper">
                <textarea
                  className="comment-input"
                  placeholder="Add a comment..."
                  rows={1}
                />
                <div className="comment-input-actions">
                  <button className="comment-input-btn"><SendIcon /></button>
                </div>
              </div>
            </div>
        </div>
      }

    </article>
  );
}

function CreatePost({ profile_image }) {
  const [text, setText] = useState("");
  return (
    <section className="createpost-card">
      <div className="createpost-top">
      <div className="header-profile-image">
        <Image
          src={profile_image}
          alt="Your profile picture"
          width={40}
          height={40}
          className="rounded-full"
        />
      </div>
      <textarea
          className="createpost-input"
          placeholder="What's on your mind?"
          rows={2}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="createpost-bottom">
        <button className="createpost-image-btn">
          <ImageIcon />
          <span> Add Image</span>
        </button>
        <button className="createpost-post-btn">Post</button>
      </div>
    </section>
  );
}
function Feed() {
  return (
    <div className="feed-container">
      <div className="feed-inner">
        <CreatePost
          profile_image="/images/2.jpeg"
        />
        <PostCard
          username="@m.e.d_a.m.i.n.e"
          image_profile="/images/2.jpeg"
          time="2 hours ago"
          location="Vancouver, BC"
          content="Just finished this summer cardigan! Used a lightweight cotton blend from the local market. Perfect for breezy evenings. #knitting #handmade #summerstyle"
          image="/images/tabi3a.jpeg"
          likes="1,240"
          comments="84"
          shares="12"
          priority={true}
        />
        <PostCard
          username="@re.m.a"
          time="5 hours ago"
          image_profile="/images/2.jpeg"
          location="Montreal, QC"
          content="Had an amazing day exploring the city! Found some hidden gems and delicious food spots. #cityadventures #foodie"
          image="/images/2.jpeg"
          likes="980"
          comments="50000000"
          shares="8"
        />
        <PostCard
          username="@s.a.m.i"
          image_profile="/images/2.jpeg"
          time="1 day ago"
          location="Toronto, ON"
          content=""
          image=""
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
      <SideBar />
      <main className="main-content">
        <Feed />
      </main>
    </div>
  );
}

export { SideBar, Logo };
