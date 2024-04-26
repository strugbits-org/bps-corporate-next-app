import formatDate from "@/common/functions/dateFormat";
import {
  blogGalleryImageURL,
  generateImageURL,
} from "@/common/functions/imageURL";
import { useEffect, useState } from "react";
import ProductCartSlider from "../commonComponents/ProductCartSlider";
import SocialVerticalBar from "./SocialVerticalBar";

const PostDetails = ({ data, blogSectionDetails }) => {
  const [singleData, setSingleData] = useState([]);

  const title = data?.blogRef?.title;
  const date = formatDate(data?.blogRef?.lastPublishedDate?.$date);
  const profileImage = generateImageURL({
    wix_url: data?.author?.profilePhoto,
    w: "35",
    h: "35",
    q: "90",
  });
  const authorName = data?.author?.nickname;

  useEffect(() => {
    const singlePost = async () => {
      let blogData = [];
      if (data?.blogRef?.coverImage) {
        const image = generateImageURL({
          wix_url: data?.blogRef?.coverImage,
          w: "1280",
          h: "670",
          q: "90",
        });
        blogData.push({
          type: "cover",
          image: image,
          sq: 0,
        });
      }

      // setting content
      data?.blogRef?.richContent?.nodes?.forEach((item, index) => {
        if (item.type === "PARAGRAPH") {
          // handling paragraphs
          if (item.nodes.length > 0) {
            let finalText = "";
            item.nodes.forEach((node) => {
              if (node.type === "TEXT") {
                if (
                  node?.textData?.decorations.findIndex(
                    (item) => item.type === "LINK"
                  ) !== -1
                ) {
                  let link = node.textData.decorations.find(
                    (item) => item.type === "LINK"
                  ).linkData.link.url;
                  finalText += ` <a href="${link}">${node.textData.text}</a>`;
                } else {
                  finalText += node.textData.text;
                }
              }
            });

            blogData.push({
              type: "paragraph",
              text: finalText,
              sq: index + 1,
            });
          } else {
            blogData.push({
              type: "line-break",
              sq: index + 1,
            });
          }
        } else if (item.type === "HEADING") {
          // handling headings
          if (item.nodes.length > 0) {
            let finalText = "";
            let level = item.headingData.level;
            item.nodes.forEach((node) => {
              if (node.type === "TEXT") {
                finalText += node.textData.text;
              }
            });
            blogData.push({
              type: "heading",
              text: finalText,
              level: level,
              sq: index + 1,
            });
          } else {
            blogData.push({
              type: "line-break",
              sq: index + 1,
            });
          }
        } else if (item.type === "line-break") {
          return <br key={index} />;
        } else if (item.type === "VIDEO") {
          // handling videos
          blogData.push({
            type: "video",
            video:
              item.videoData.video.src.url ||
              `https://video.wixstatic.com/${item.videoData.video.src.id}`,
            thumbnail:
              item.videoData.thumbnail.src.url ||
              `https://static.wixstatic.com/${item.videoData.thumbnail.src.id}`,
            sq: index + 1,
          });
        } else if (item.type === "line-break") {
          return <br key={index} />;
        } else if (item.type === "BULLETED_LIST") {
          // handling bulleted list
          if (item.nodes.length > 0) {
            let items = [];
            item.nodes.forEach((node) => {
              if (node.type === "LIST_ITEM" && node.nodes.length > 0) {
                node.nodes.forEach((nestedNode) => {
                  if (nestedNode.type === "PARAGRAPH") {
                    if (nestedNode.nodes.length > 0) {
                      let finalText = "";
                      nestedNode.nodes.forEach((n) => {
                        if (n.type === "TEXT") {
                          finalText += n.textData.text;
                        }
                      });
                      items.push(finalText);
                    } else {
                      items.push("");
                    }
                  }
                });
              }
            });
            blogData.push({
              type: "bulleted-list",
              items: items,
              sq: index + 1,
            });
          }
        } else if (item.type === "GALLERY") {
          const gallery = [];
          item?.galleryData?.items?.forEach((item) => {
            if (item.image?.media?.src) {
              const image = blogGalleryImageURL({
                wix_url: item.image?.media?.src.url,
                w: "960",
                h: "540",
                q: "90",
              });
              gallery.push({
                type: "cover",
                image: image,
                sq: 0,
              });
            }
          });
          blogData.push({
            type: "gallery",
            images: gallery,
            sq: 0,
          });
        } else if (item.type === "IMAGE") {
          const imageURL = generateImageURL({
            wix_url: item.imageData.image.src._id,
            w: "960",
            h: "540",
            q: "90",
          });
          blogData.push({ type: "image", image: imageURL });
        }
      });

      setSingleData(blogData);
    };

    singlePost();
  }, [data]);

  // useEffect(() => {
  //   if (data?.blogRef?.tags) {
  //     dispatch(getblogTags(data?.blogRef?.tags));
  //   }
  // }, [dispatch, data?.blogRef?.tags]);

  return (
    <section className="article-intro pt-lg-150 pt-mobile-125">
      <div className="container-fluid">
        <div className="row row-1">
          <div className="col-lg-5 offset-lg-3 column-1">
            <div className="wrapper-text">
              <div
                className="container-author-post-info"
                data-aos="fadeIn .8s ease-in-out .2s, d:loop"
              >
                <div className="author">
                  <div className="container-img">
                    {profileImage && (
                      <img
                        src={profileImage}
                        data-preload
                        className="media"
                        alt=""
                      />
                    )}
                  </div>
                  <h2 className="author-name">{authorName}</h2>
                </div>
                <div className="date">
                  <span>{date}</span>
                </div>
              </div>
              <h1
                className="fs--40 fs-mobile-35 lh-140 article-title split-words"
                data-aos="d:loop"
              >
                {title}
              </h1>
            </div>
          </div>
        </div>
        <div className="row row-2 mt-lg-15 mt-tablet-25 mt-phone-45">
          <div className="col-lg-10 offset-lg-1 column-1">
            <div className="article-content pb-lg-180 pb-tablet-60 pb-phone-40">
              {singleData.length > 0 && singleData[0].type === "cover" && (
                <div className="article-thumb" data-aos="d:loop">
                  <div className="container-img">
                    <img
                      src={singleData[0].image}
                      data-preload
                      className="media"
                      alt="cover"
                      data-parallax-top
                      data-translate-y="20%"
                    />
                  </div>
                </div>
              )}

              <div className="article-text mt-lg-60 mt-tablet-40 mt-phone-85">
                <div
                  className="editor"
                  data-aos="fadeIn .8s ease-in-out .2s, d:loop"
                >
                  {singleData.map((item, index) => {
                    if (item.type === "paragraph") {
                      return (
                        <p
                          key={index}
                          dangerouslySetInnerHTML={{
                            __html: item.text,
                          }}
                        />
                      );
                    } else if (item.type === "heading") {
                      return <h2 key={index}>{item.text}</h2>;
                    } else if (item.type === "video") {
                      return (
                        <div
                          key={index}
                          style={{
                            padding: "50px",
                          }}
                        >
                          <ReactPlayer
                            url={item.video}
                            width="100%"
                            height="500px"
                            controls
                            light={item.thumbnail}
                            playing
                          />
                        </div>
                      );
                    } else if (item?.type === "gallery") {
                      return (
                        <div key={index} className="slider-article">
                          <div className="swiper-container">
                            <div className="swiper-wrapper">
                              {item?.images?.map((item, index) => {
                                return (
                                  <div key={index} className="swiper-slide">
                                    <div className="container-img">
                                      <img
                                        src={item.image}
                                        data-preload
                                        className="media"
                                        alt=""
                                      />
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                          <div className="swiper-button-prev">
                            <i className="icon-arrow-left-3"></i>
                          </div>
                          <div className="swiper-button-next">
                            <i className="icon-arrow-right-3"></i>
                          </div>
                        </div>
                      );
                    } else if (item?.type === "image") {
                      return <img key={index} src={item.image} alt="" />;
                    } else {
                      return null;
                    }
                  })}
                </div>
              </div>
              {/* {tags.length !== 0 && (
                <div className="article-tags mt-lg-140 mt-tablet-40 mt-phone-115">
                  <h3
                    className="fs--22 mb-lg-25 mb-tablet-40 mb-phone-25 split-words"
                    data-aos="d:loop"
                  >
                    Tags
                  </h3>
                  <ul className="list-post-tags" data-aos="d:loop">
                    {tags?.map((items, index) => {
                      return (
                        <li key={index}>
                          <div className="btn-tag">
                            <span>{items.label}</span>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )} */}
            </div>

            {/* Product Cart Slider start */}

            {data?.storeProducts && data?.storeProducts.length !== 0 && (
              <div
                className={`container-slider-produtcts mt-lg-padding-fluid mt-tablet-100 mt-phone-105 ${
                  data?.storeProducts?.length === 0 ? "hidden" : ""
                }`}
              >
                <h2 className="slider-title">
                  {blogSectionDetails?.featuredProductsTitle}
                </h2>
                <ProductCartSlider data={data} />
              </div>
            )}
            {/* Product Cart Slider end */}
          </div>
          {/* social vertical bar start */}
          <div
            className="col-lg-1 column-2 no-mobile"
            data-aos="fadeIn .8s ease-in-out .2s, d:loop"
          >
            <div className="wrapper-share">
              <h3 className="fs--18 text-center d-inline-block mb-25">Share</h3>
              <SocialVerticalBar title={title} />
            </div>
          </div>

          {/* social vertical bar end */}
        </div>
      </div>
    </section>
  );
};

export default PostDetails;
