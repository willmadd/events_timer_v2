import axios from "axios";
import { entries } from "lodash";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sampleResponse from '../../sampleresponse';

const query = `query GetPostsEdges {
    posts {
      edges {
        node {
          title
          slug
        }
      }
    }
  }`;

const PostsMenuEntry = () => {
    const [entries, setEntries] = useState([]);

    useEffect(() => {
        axios
            .post({
                url:"/blogadmin/graphql",
                data:{query}
                }
            )
            .then((res) => {
                console.log(res);
                setEntries(res.data);
            });
        // setEntries(sampleResponse);

    }, []);

    console.log(entries);

    return (
        <div className="dropdown">
            <div className="menu__title">
                Guides
            </div>
            <ul className="dropdown__content">

            {/* {entries.map((entry) => (
                <li><Link to={`guide/${entry.slug}`}>{decodeURI(entry.title.rendered)}</Link></li>
                ))} */}
                </ul>
        </div>
    );
};

export default PostsMenuEntry;
