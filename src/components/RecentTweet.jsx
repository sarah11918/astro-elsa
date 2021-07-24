import * as React from "react";
import { Timeline } from "react-twitter-widgets";

const RecentTweet = ({ user }) => (
  <>
    <div className="tweet">
      <Timeline
        dataSource={{
          sourceType: "profile",
          screenName: user
        }}
        options={{
          //height: "10",
          width: "100",
          tweetLimit: "1"
        }}
      />
    </div>
  </>
);

export default RecentTweet;
