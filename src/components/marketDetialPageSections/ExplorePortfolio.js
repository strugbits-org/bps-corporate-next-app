import { generateImageUrl2 } from "@/common/functions/imageURL";
import DelayedLink from "../common/DelayedLink";
import { DefaultButton } from "../commonComponents/DefaultButton";

const ExplorePortfolio = ({ marketSectionDetails,portfolioCollection,slug }) => {
  // const { marketSectionDetails } = useSelector((state) => state.market);
  // const portfolioCollection = useSelector((state) => state.portfolio.portfolioData);

  
  // const [filteredPortfolioCollection, setFilteredPortfolioCollection] = useState(portfolioCollection);
  // useEffect(() => {
  //   const filteredProjects = portfolioCollection.filter(item => {
  //     const marketLabels = item.markets.map((item) => item.cardname.toLowerCase())
  //     return ([slug].some(r => marketLabels.includes(r)))
  //   });
  //   setFilteredPortfolioCollection(filteredProjects);
  // }, [portfolioCollection, slug]);

  return (
    // filteredPortfolioCollection && filteredPortfolioCollection.length > 0 &&
    <section className="market-explore-portfolio overflow-hidden pt-lg-270 pb-lg-220 py-tablet-100 pt-phone-145 pb-phone-190">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4 offset-lg-4">
            <h2 className="fs--60 text-center split-chars" data-aos="d:loop">
              {marketSectionDetails?.portfolioSectionTitle}
            </h2>
          </div>
          <div className="col-lg-12 mt-40">
            <div className="slider-content-mobile">
              <div className="swiper-container">
                {/* <!-- Additional required wrapper --> */}
                <div
                  className="swiper-wrapper list-explore-portfolio list-slider-mobile grid-lg-25"
                  data-aos="d:loop"
                >
                  {/* <!-- Slides --> */}
                  {portfolioCollection?.map((item, index) => {
                    return (
                      <div key={index} className="swiper-slide grid-item">
                        <DelayedLink to={`/project/${item.slug}`} className="link">
                          <div className="img-wrapper">
                            <div
                              className="container-img"
                              data-cursor-style="view"
                            >
                              <img
                                src={generateImageUrl2({ wix_url: item?.portfolioRef?.coverImage?.imageInfo,w: "480", h: "620", q: "90" })}
                                data-preload
                                className="media"
                                alt=""
                              />
                            </div>
                          </div>
                          <h3 className="title-portfolio split-words">
                            {item.portfolioRef.title}
                          </h3>
                        </DelayedLink>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-2 offset-lg-5 flex-center mt-50 column-btn">
            <DefaultButton
              customClasses={"btn-border-blue"}
              showArrow={false}
              data={{
                label: marketSectionDetails?.portfolioSectionButtonText,
                action: marketSectionDetails?.portfolioSectionButtonAction
              }}
              attributes={{
                "data-aos": "fadeInUp .8s ease-out-cubic 0s, d:loop, trigger:.column-btn",
                "data-cursor-style": "off",
              }}
            ></DefaultButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExplorePortfolio