import React from "react";
import { YouTubeEmbed } from '@next/third-parties/google'

interface Props {
  embedId: string;
  
}

const YoutubeVideo: React.FC<Props> = ({ embedId }) => {
  return (
    <YouTubeEmbed
      videoid={embedId}
      params="si=l2Im3VKi6s_Nznph"
      style="border: 10px transparent #212529; box-sizing: border-box; border-radius: 20px; width: 100%; height: 450px; max-width: 930px; margin: auto;"
    />
  );
};

export default YoutubeVideo;
