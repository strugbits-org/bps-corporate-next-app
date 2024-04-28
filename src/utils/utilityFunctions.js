import parse from 'html-react-parser';

export const convertToHTML = ({ content = "", class_p = "", class_ul = "", data_aos_p = "" }) => {
  if (typeof content === 'string') return content;
  let html = "";

  content.nodes.forEach(node => {
    if (node.type === 'PARAGRAPH') {
      if (node.nodes.length > 0) {
        html += `<p className="${class_p}" data-aos="${data_aos_p}">`;

        node.nodes.forEach(textNode => {
          if (textNode.type === 'TEXT') {
            let decorationsHTML = "";

            if (textNode.textData.decorations) {
              textNode.textData.decorations.forEach(decoration => {
                if (decoration.type === 'BOLD') {
                  decorationsHTML += '<strong>';
                } else if (decoration.type === 'ITALIC') {
                  decorationsHTML += '<em>';
                }
              });
            }

            html += decorationsHTML + textNode.textData.text;

            if (decorationsHTML !== "") {
              decorationsHTML.split('').reverse().forEach(char => {
                if (char === '>') {
                  html += '</' + decorationsHTML.substring(decorationsHTML.lastIndexOf('<') + 1);
                  decorationsHTML = decorationsHTML.substring(0, decorationsHTML.lastIndexOf('<'));
                }
              });
            }
          }
        });

        html += '</p>';
      } else {
        html += '<br/>';
      }
    } else if (node.type === 'BULLETED_LIST') {
      html += `<ul className="${class_ul}" >`;

      node.nodes.forEach(listItem => {
        html += '<li>';

        listItem.nodes.forEach(paragraph => {
          paragraph.nodes.forEach(textNode => {
            if (textNode.type === 'TEXT') {
              let decorationsHTML = "";

              if (textNode.textData.decorations) {
                textNode.textData.decorations.forEach(decoration => {
                  if (decoration.type === 'BOLD') {
                    decorationsHTML += '<strong>';
                  } else if (decoration.type === 'ITALIC') {
                    decorationsHTML += '<em>';
                  }
                });
              }

              html += decorationsHTML + textNode.textData.text;

              if (decorationsHTML !== "") {
                decorationsHTML.split('').reverse().forEach(char => {
                  if (char === '>') {
                    html += '</' + decorationsHTML.substring(decorationsHTML.lastIndexOf('<') + 1);
                    decorationsHTML = decorationsHTML.substring(0, decorationsHTML.lastIndexOf('<'));
                  }
                });
              }
            }
          });
        });

        html += '</li>';
      });

      html += '</ul>';
    }
  });

  return parse(html);
}

export const closeModals = () => {
  if (typeof window !== 'undefined') {
    const submenu = document.querySelector('.submenu');
    if (submenu) submenu.classList.remove('active');
    const btn_modal_close = document.querySelectorAll('btn-modal-close');
    if (btn_modal_close) btn_modal_close.forEach(x => x.click());
    const wrapperCursor = document.querySelector('#wrapper-cursor');
    if (wrapperCursor) wrapperCursor.click();
    document.querySelectorAll(".player-video").forEach((x) => {
      x.pause();
      setTimeout(() => {
        x.currentTime = 0;
      }, 500);
    });
  }
}

export const setSeo = ({ title = 'Blueprint Studios', description = '', noFollowTag = false, subpage = false, seo_title = "", seo_description = "", no_follow_subpage = false, }) => {
  if (typeof window !== 'undefined') {
    if (subpage) {
      document.title = title + seo_title;
      document.querySelector('meta[name="description"]').setAttribute('content', seo_description);
      document.querySelector('meta[property="og:title"]').setAttribute('content', title + seo_title);
      document.querySelector('meta[property="og:description"]').setAttribute('content', seo_description);
      document.querySelector('meta[name="robots"]').setAttribute('content', no_follow_subpage ? "noindex,nofollow" : "all");
    } else {
      document.title = title;
      document.querySelector('meta[name="description"]').setAttribute('content', description);
      document.querySelector('meta[property="og:title"]').setAttribute('content', title);
      document.querySelector('meta[property="og:description"]').setAttribute('content', description);
      document.querySelector('meta[name="robots"]').setAttribute('content', noFollowTag ? "noindex,nofollow" : "all");
    }
  }

}

export const changeProgress = (percent) => {
  if (typeof window !== 'undefined') {
    document.body.style.setProperty("--percentage", percent / 100);
    document.body.style.setProperty("--percentage2", `${percent}%`);
    const elProg = document.querySelector('[data-load-progress]');
    if (elProg) elProg.dataset.loadProgress = percent;
  }
}

export const initAnimations = () => {
  if (typeof window !== 'undefined') {
    setTimeout(() => {
      document.querySelector(".initScript").click();
    }, 200);
  }
};

export const updatedWatched = () => {
  if (typeof window !== 'undefined') {
    setTimeout(() => {
      document.querySelector(".updateWatchedTrigger").click();
    }, 200);
  }
};

export const loadPinterest = () => {
  if (typeof window !== 'undefined') {
    setTimeout(() => {
      const script = document.createElement("script");
      script.async = true;
      script.type = "text/javascript";
      script.dataset.pinBuild = "doBuild";
      script.src = "//assets.pinterest.com/js/pinit.js";
      document.body.appendChild(script);
      if (window.doBuild) window.doBuild();
    }, 1000);
  }
};

export const markPageLoaded = (watched = true) => {
  if (typeof window !== 'undefined') {
    setTimeout(() => window.scrollTo({ top: 0 }), 200);
    setTimeout(initAnimations, 750);
    if (watched) setTimeout(updatedWatched, 1000);
    setTimeout(loadPinterest, 1200);
    const isFirstLoadDone = document.body.classList.contains("first-load-done");
    if (isFirstLoadDone) {
      const body = document.body;
      if (body.classList.contains('menu-active')) body.classList.remove('menu-active');
      body.classList.add("page-enter-active");
      body.classList.remove("page-leave-active");
      setTimeout(() => {
        body.classList.remove("page-enter-active");
      }, 900);
    } else {
      changeProgress(100);
      document.body.dataset.load = "first-leaving";
      setTimeout(() => {
        document.body.dataset.load = "first-done";
      }, 1200);
      document.body.classList.add("first-load-done");
    }
  }
}

export const pageLoadStart = () => {
  if (typeof window !== 'undefined') {
    document.body.classList.add("page-leave-active");
  }
}
export const pageLoadEnd = () => {
  if (window && typeof window !== 'undefined') {
    window.scrollTo({ top: 0 });
    const body = document.body;
    if (body.classList.contains('menu-active')) body.classList.remove('menu-active');
    body.classList.add("page-enter-active");
    body.classList.remove("page-leave-active");
    setTimeout(() => {
      body.classList.remove("page-enter-active");
    }, 900);
  }
}