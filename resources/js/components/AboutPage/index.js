import React from "react";
import { staticPage } from "../StaticPage";

const AboutPage = () => {
    return (
        <div>
            <h2>About Events Countdown</h2>

            <p>
                Events Countdown is an online tool that allows you to design and
                download great looking countdown timers without needing any
                experience in design or video. As a result, you get a great
                looking timer to enhance the presentation of your event. People
                across the globe have chosen Events Countdown, and we can’t wait
                for you to get started too.
            </p>
            <h2>The Team</h2>
            <p>
                We are a small team operating from Leeds, UK and Tokyo, Japan.
                We like to think that the latter is synonymous with precision
                timing, just like your event will be. We built Events Countdown
                as there was no other software available allowing users to make
                a countdown timer quick and easy. Although our team is small, we
                value our users and invite you to drop us a line using the below
                contact form should you have any questions/feedback (or just
                fancy a chat!)
            </p>
        </div>
    );
};

export default staticPage(AboutPage);

