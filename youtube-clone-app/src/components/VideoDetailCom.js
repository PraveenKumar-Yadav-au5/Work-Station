import React from 'react'
import { Button, Paper, Typography } from '@material-ui/core'

const VideoDetailCom = ({ video }) => {
  if (!video) return <div> No Search Results</div>;
  console.log(video);

  const videoSrc = 'https://www.youtube.com/embed/${video.id.videoId}';

  return (
    <React.Fragment>
      <Paper elevation={6} style={{ height: '30%', width: '83%', marginTop: '3%', marginLeft: '5%' }}>
        <iframe frameBorder='0' height='100%'
          width='100%' title='Video Player' src={videoSrc} />
      </Paper>
      <Paper elevation={6} style={{ padding: '10px', height: '10%', width: '81%', marginTop: '1%'}}>
        <Typography variant='h5'>
          {video.snippet.title} - {video.snippet.channelTitle}
        </Typography>
        <Typography variant='subtitle1'>
          {video.snippet.channelTitle}
        </Typography>
        <Typography variant='subtitle2'>
          {video.snippet.description}
          {/* <Button style={{ background: 'red', float: 'right'}}>
            Subscribe
          </Button> */}
        </Typography>

      </Paper>
    </React.Fragment>
  )

};

export default VideoDetailCom;
