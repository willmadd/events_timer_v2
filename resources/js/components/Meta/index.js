import React from 'react';
import { Helmet } from "react-helmet";

const metaDesc = "Make your online or in-person event standout with a countdown timer. Simply select a background, set-up your timer, overlay and audiotrack and download.";

const title = "Events Countdown | The intro video creator for professional web and in person events";

const Meta = () => {
    return (
        <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta name="description" content={`${metaDesc}`} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={`${metaDesc}`} />
        {/* <meta property="og:image" content={`${sourceUrl}`} /> */}
        <meta property="og:url" content={`/`} />
        <meta property="og:site_name" content="Events Countdown" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={`${metaDesc}`} />
        {/* <meta name="twitter:image" content={`${sourceUrl}`} /> */}
        <meta name="twitter:site" content="eventscountdown" />
        <meta name="twitter:creator" content="eventscountdown" />
    </Helmet>
    );
};

export default Meta;