import * as React from 'react'

export const FacebookShareButton = () => (
  <div
    className="fb-share-button"
    data-href="https://thebruinbucketlist.surge.sh"
    data-layout="button_count"
    data-size="large"
    data-mobile-iframe="true"
  >
    <a
      target="_blank"
      href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fthebruinbucketlist.surge.sh%2F&amp;src=sdkpreparse"
      className="fb-xfbml-parse-ignore"
    >
      Share
    </a>
  </div>
)
