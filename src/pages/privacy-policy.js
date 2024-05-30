import { fetchInstaFeed, getSocialSectionBlogs, getSocialSectionDetails } from "@/api/home.js";
import { getPrivacyPolicyContent } from "@/api/privacy-policy";
import SocialSection from "@/components/commonComponents/SocialSection";
import { markPageLoaded, renderNode } from "@/utils/utilityFunctions"

export default function PrivacyPolicy({ content, socialSectionDetails, socialSectionBlogs, instaFeed }) {
    markPageLoaded();
    const nodes = content.nodes;
    return (
        <>
            <section className="section-terms-and-policy">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 col-11 offset-lg-3 mx-mobile-auto">
                            {nodes[0].nodes && (<h1 className="title split-words" data-aos="d:loop">
                                {nodes[0].nodes[0].textData.text}
                            </h1>)}
                            <div
                                className="editor mt-lg-50 mt-mobile-30"
                                data-aos="fadeIn .8s ease-in-out .2s, d:loop"
                            >
                                {nodes.slice(1).map((node) => (
                                    <div key={node.id}>{renderNode(node)}</div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <SocialSection data={socialSectionDetails} posts={socialSectionBlogs} insta_feed={instaFeed} />
        </>
    )
}

export const getStaticProps = async () => {
    const [content, socialSectionDetails, socialSectionBlogs, instaFeed] = await Promise.all([
        getPrivacyPolicyContent(),
        getSocialSectionDetails(),
        getSocialSectionBlogs(),
        fetchInstaFeed(),
    ]);

    return {
        props: { content, socialSectionDetails, socialSectionBlogs, instaFeed },
        revalidate: parseInt(process.env.NEXT_PUBLIC_REVALIDATE_TIME),
    };
};