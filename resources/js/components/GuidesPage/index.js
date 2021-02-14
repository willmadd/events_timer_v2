import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import HTML from "../Html";


const sample = {
    data: {
        postBy: {
            title: "5 Best things",
            content: "\n<p>this is a test blah blah blah</p>\n",
            slug: "5-best-things",
            seo: {
                metaDesc: "Hello Hello there",
            },
            featuredImage: {
                node: {
                    sourceUrl:
                    "http://www.eventscountdown.com/blogadmin/wp-content/uploads/2021/02/20.jpg",
                },
            },
        },
    },
    extensions: {
        debug: [
            {
                type: "DEBUG_LOGS_INACTIVE",
                message:
                "GraphQL Debug logging is not active. To see debug logs, GRAPHQL_DEBUG must be enabled.",
            },
        ],
    },
};

const GuidesPage = (props) => {
    console.log(props.match.params.guide);
    
    const { guide } = props.match.params;
    const query = `query GetPostBySlug {
        postBy(slug:"${guide}") {
          title
          content
          slug
          seo{
            metaDesc
          }
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }`;
    const [article, setArticle] = useState({
        title: "",
        content: "",
        metaDesc: "",
        sourceUrl: "",
    });

    useEffect(() => {
        axios({
            url: "//www.eventscountdown.com/blogadmin/graphql",
            data: { query },
            method: "post",
        })
        .then(res=>{
            const { postBy } = res.data.data;
            setArticle({
                title: postBy.title,
                content: postBy.content,
                slug: postBy.slug,
                metaDesc: postBy.seo.metaDesc,
                sourceUrl: postBy.featuredImage.node.sourceUrl,
            });

        });

    }, [props.match.params]);

    const {title, content, sourceUrl, metaDesc, slug} = article; 
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{title}</title>
                <meta name="description" content={`${metaDesc}`} />
                <meta property="og:type" content="article" />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={`${metaDesc}`} />
                <meta property="og:image" content={`${sourceUrl}`} />
                <meta property="og:url" content={`/guides/${slug}`} />
                <meta property="og:site_name" content="Events Countdown" />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={`${metaDesc}`} />
                <meta name="twitter:image" content={`${sourceUrl}`} />
                <meta name="twitter:site" content="eventscountdown" />
                <meta name="twitter:creator" content="eventscountdown" />
            </Helmet>
            <div className="guides__wrapper">

            <h1>{title}</h1>
            <HTML>{content}</HTML>
            </div>
        </div>
    );
};

export default GuidesPage;
