import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import sampleResponse from '../../sampleresponse';

const query = `query GetPosts {
    posts (where: {categoryName:"guides"}){
      nodes {
        title
        slug
      }
    }
  }`;

const PostsMenuEntry = () => {
    const [entries, setEntries] = useState([]);

    useEffect(() => {
        axios({
                method:'post',
                url:"//www.eventscountdown.com/blogadmin/graphql",
                data:{query}
                }
            )
            .then((res) => {
                console.log(res);
                // setEntries(res.data);
                setEntries(res.data.posts.nodes);
            });

    }, []);

    // console.log(sampleResponse.data.posts.nodes);

    return (
        <div className="dropdown">
            <div className="menu__title">
                Guides
            </div>
            <ul className="dropdown__content">

            {entries.map((entry) => (
                <li key={entry.slug}><Link to={`/guide/${entry.slug}`}>{decodeURI(entry.title)}</Link></li>
                ))}
                </ul>
        </div>
    );
};

export default PostsMenuEntry;
