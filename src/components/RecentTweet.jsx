import * as React from "react";
import { Timeline } from "react-twitter-widgets";

const RecentTweet = ({ user }) => (
  <>
    <h2> My user prop is {user} </h2>
    <div className="tweet">
      <Timeline
        dataSource={{
          sourceType: "profile",
          screenName: user
        }}
        options={{
          //height: "10",
          width: "300",
          tweetLimit: "1"
        }}
      />
    </div>
  </>
);

export default RecentTweet;
