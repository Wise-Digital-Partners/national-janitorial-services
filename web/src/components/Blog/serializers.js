import React from "react";
import getYouTubeId from "get-youtube-id";
import YouTube from "react-youtube";

const serializers = {
  types: {
    youtube: ({ node }) => {
      const { url } = node;
      const id = getYouTubeId(url);
      return <YouTube videoId={id} />;
    },
    iframe: ({ node }) => {
      const { url, height } = node;
      return <iframe title="Irame" src={url} width="100%" height={`${height}px`} />;
    },
  },
  marks: {
    form: ({ children, mark }) => {
      switch (mark.formName) {
        case "Contact Us":
          return (
            <span
              data-modal-open="modal-contact"
              className="cursor-pointer font-bold text-[#53AF3B] underline hover:text-[#469631]"
            >
              {children}
            </span>
          );
        default:
          return <span>{children}</span>;
      }
    },
  },
};

export default serializers;
