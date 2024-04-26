import React from 'react';

export default function NotFound() {
  return (
    <div className="not-found">
      <h1>Oops! Looks like you're lost.</h1>
      <p>The page you requested was not found.</p>
      <a href="/">Go back home</a>
      <style jsx>{`
        .not-found {
          /* Add your custom styles here */
        }
      `}</style>
    </div>
  );
}