import * as React from "react";
import { Timeline } from "react-twitter-widgets";

const RecentTweet = () => (
  <>
    <div className="tweet">
      <Timeline
        dataSource={{
          sourceType: "profile",
          screenName: "sarah11918"
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
