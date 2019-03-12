import React from "react";
import { withCustomAudio } from "react-soundplayer/addons";
import { PlayButton, Timer, VolumeControl, Progress } from 'react-soundplayer/components';
import './Player.css'

const AWSSoundPlayer = withCustomAudio(props => {

  return (
    <div className="carSound">
      <PlayButton  {...props} />
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


