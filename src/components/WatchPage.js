import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeSideNav } from "../store/appSlice";
import CommentSection from "./CommentSection";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeSideNav());
  }, []);
  return (
    <div className="px-5 w-full">
      <div className="flex justify-between">
        <iframe
          width="1200"
          height="600"
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-[70%]"
        ></iframe>
        <div><LiveChat /></div>
      </div>
      <CommentSection />
    </div>
  );
};

export default WatchPage;