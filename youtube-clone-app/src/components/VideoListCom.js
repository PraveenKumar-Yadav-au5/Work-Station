import React from 'react';
import { Grid } from '@material-ui/core';

import VideoItem from './VideoItem';

const VideoListCom = ({videos, onVideoSelect}) => {
    const listOfVideos = videos.map((video, id) =>
    <VideoItem 
    onVideoSelect={onVideoSelect} 
    key={id} video={video} />);

    return (
        <Grid container spacing = {2} style = {{marginTop: '3%'}} >
            {listOfVideos}
        </Grid>
    );
}

export default VideoListCom;