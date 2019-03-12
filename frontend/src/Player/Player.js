import React from "react";
import { withCustomAudio } from "react-soundplayer/addons";
import { PlayButton, Timer, VolumeControl, Progress } from 'react-soundplayer/components';
import './Player.css'

const AWSSoundPlayer = withCustomAudio(props => {

  return (
    <div>
      <PlayButton  {...props} />
      <Timer {...props} />
      <Progress className={'progress-container'}
  innerClassName={'progress-inner'}{...props} />
      <VolumeControl {...props} />
    </div>
  );
});

export default AWSSoundPlayer;


