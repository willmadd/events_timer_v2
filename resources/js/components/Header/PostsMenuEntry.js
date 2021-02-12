import axios from "axios";
import { entries } from "lodash";
import React, { useEffect, useState } from "react";

const PostsMenuEntry = () => {
    const [entries, setEntries] = useState([]);

    useEffect(() => {
        axios
            .get(
                "//blog.eventscountdown.com/index.php/wp-json/wp/v2/posts?categories=2",
                {
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                    },
                }
            )
            .then((res) => {
                console.log(res);
                setEntries(res.data);
            });
    }, []);

    console.log(entries);

    return (
        <div className="dropdown">
            {entries.map((entry) => (
                <div>{entry.title.rendered}</div>
            ))}
        </div>
    );
};

export default PostsMenuEntry;
