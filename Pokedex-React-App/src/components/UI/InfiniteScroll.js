import React, { useState, useEffect, useRef } from "react";

const InfiniteScroll = props => {
  const [sendReq, setSendReq] = useState(false);
  const targetRef = useRef();
  const { onLoadMore, loading, hasMore } = props;

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          setSendReq(true);
        } else {
          setSendReq(false);
        }
      },
      { rootMargin: "0px 0px 100px 0px" }
    );
    observer.observe(targetRef.current);
  }, []);

  useEffect(() => {
    if (!loading && sendReq && hasMore) {
      onLoadMore();
    }
  }, [loading, sendReq, onLoadMore, hasMore]);

  return (
    <div>
      {props.children}
      <div id="load_more" ref={targetRef}></div>
    </div>
  );
};

export default InfiniteScroll;
