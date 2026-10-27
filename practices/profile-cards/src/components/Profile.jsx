import "./Profile.css";
import { useState } from "react";

const Profile = (profile) => {
  const [btnText, setBtnText] = useState("Follow");

  const handleClick = () => {
    if (btnText === "Follow") {
      setBtnText("Following");
    } else {
      setBtnText("Follow");
    }
  };

  return (
    <>
      <article className="profile">
        <div className="img-wrapper">
          <img src={profile.image} alt="" />
        </div>
        <div className="profile-content">
          <h3 className="profile-title">{profile.title}</h3>
          <p className="profile-role">{profile.description}</p>
          <div className="profile-stats">
            <span className="stat">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="8" r="3.5" />
                <path d="M5 20c0-3.9 3.1-6.5 7-6.5s7 2.6 7 6.5" />
              </svg>
              {profile.followers}
            </span>

            <span className="stat">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="5" y="4.5" width="14" height="16" rx="2.5" />
                <path d="M9 4.5V3.5h6v1" />
                <path d="M9 12.5l2.2 2.2L15.3 10" />
              </svg>
              {profile.projects}
            </span>

            <button type="button" className="follow-btn" onClick={handleClick}>
              {btnText}
            </button>
          </div>
        </div>
      </article>
    </>
  );
};

export default Profile;
