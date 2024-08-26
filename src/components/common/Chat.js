import React from 'react'
import image1 from "@/assets/svg/btn-chat-1.svg"
import image2 from "@/assets/svg/btn-chat-2.svg"
import image3 from "@/assets/svg/btn-chat-3.svg"
const Chat = () => {
  return (
    <div className="chat" data-cursor-style="off">
      <button className="btn-chat">
        <div className="btn-wrapper">
          <span>Hello?</span>
          <div className="container-img btn-top">
            <img
              src={image1.src}
              data-preload
              className="media"
              alt=""
            />
          </div>
          <div className="bg-1"></div>
          <div className="container-img btn-middle">
            <img
              src={image2.src}
              data-preload
              className="media"
              alt=""
            />
          </div>
          <div className="bg-2"></div>
          <div className="container-img btn-bottom">
            <img
              src={image3.src}
              data-preload
              className="media"
              alt=""
            />
          </div>
        </div>
      </button>
      <div className="container-chat">
        <iframe type="text/html"
          srcdoc='
      <html>
        <head>
         <link rel="stylesheet" href="https://live.illumeetxp.com/widget/widget.css" />
        </head>
        <body>
          <div id="illumeet-widget"></div>
          <script>
          window.config = {
            agentId: "6671d5366c32fc00087b2dbc",
              mode:"Inline"
          };
          </script>
          <script src="https://live.illumeetxp.com/widget/widget.js"></script>
        </body>
      </html>'
          width="100%"
          height="500px"
          noscroll
          allowtransparency="true"
          frameborder="0"
        ></iframe>
      </div>
    </div>
  )
}

export default Chat