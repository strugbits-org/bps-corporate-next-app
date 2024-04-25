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
    const modal_group = document.querySelectorAll('modal-group');
    if (modal_group) modal_group.forEach(x => x.classList.remove('active'));
    const modal_item = document.querySelectorAll('modal-item');
    if (modal_item) modal_item.forEach(x => x.classList.remove('active'));
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