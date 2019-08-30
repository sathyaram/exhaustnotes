import React from "react";
import { withCustomAudio } from "react-soundplayer/addons";
import { PlayButton, Timer, Progress } from 'react-soundplayer/components';
import './Player.scss'

const AWSSoundPlayer = withCustomAudio(props => {

  return (
    <div className="carSound">
      <PlayButton {...props} name="Play button" />
      <div className="carPlayer">
        <Timer {...props} />
        <Progress className={'progress-container'}
    innerClassName={'progress-inner'}{...props} />
    </div>
      {/* <VolumeControl {...props} /> */}
    </div>
  );
});

export default AWSSoundPlayer;


