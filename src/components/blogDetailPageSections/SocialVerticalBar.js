import React, { useState } from "react";
import { Link } from "react-router-dom";

const SocialVerticalBar = ({ title }) => {

  const [copied, setCopied] = useState(false);
  const url = window.location.href;
  const copyURLToClipboard = (e) => {
    navigator.clipboard
      .writeText(url)
      .then(() => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 2000);
      })
      .catch((error) => {
        console.error("Failed to copy URL to clipboard:", error);
      });
    e.preventDefault();
  };

  return (
    <ul className="list-share">
      <li>
        <Link
          data-cursor-style="off"
          onClick={(e) => {
            window.open(
              `https://www.facebook.com/sharer/sharer.php?u=${url}`,
              "compartilhar",
              "toolbar=0, status=0, width=650, height=450"
            );
            e.preventDefault();
          }}
        >
          <span>Facebook</span>
          <i className="icon-facebook"></i>
        </Link>
      </li>
      <li>
        <Link
          data-cursor-style="off"
          onClick={(e) => {
            window.open(
              `http://twitter.com/share?text=${title}&url=${url}`,
              "compartilhar",
              "toolbar=0, status=0, width=650, height=450"
            );
            e.preventDefault();
          }}
        >
          <span>X (Twitter)</span>
          <i className="icon-x"></i>
        </Link>
      </li>
      <li>
        <Link
          to={`mailto:?subject=${title}&body=Hey check out this post at ${url}`}
          data-cursor-style="off"
        >
          <span>email</span>
          <i className="icon-mail"></i>
        </Link>
      </li>
      <li>
        <Link onClick={copyURLToClipboard} className="copy-link">
          <span>{copied}</span>
          <i className="icon-link"></i>
        </Link>
      </li>
    </ul>
  );
};

export default SocialVerticalBar;
