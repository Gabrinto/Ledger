import React from 'react';
import PropTypes from 'prop-types';

const YoutubeEmbed = ({ embedId }) => (
  <div className="video-responsive overflow-hidden pb-[56.25%] mt-[1rem] relative h-0">
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
      className="left-0 top-0 h-[100%] w-[100%] absolute "
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default YoutubeEmbed;
