import React from 'react';

import { Grid } from '@material-ui/core';
import { SearchCom, VideoListCom, VideoDetailCom } from './components';
import youtube from './api/youtube';
class App extends React.Component {

    state = {
        videos: [],
        selectedVideo: null
    }

    componentDidMount() {
        this.handleSubmit('pdf generation with react and node');
    }

    onVideoSelect = (video) => {
        this.setState({selectedVideo: video})
    }

    handleSubmit = async(searchTerm) => {
        const response = await youtube.get('search', { 
            params: {
                part: 'snippet',
                maxResults:5,
                key: 'AIzaSyDcpIfoKW-X8LpaMBp-wmScDjsfiRry0i4',
                q: searchTerm
            }});

        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        });
    }


    render() {
        return (
            <Grid justify="center" container spacing={16} >
                <Grid item xs={12} >
                    <Grid container spacin={10} >
                        <Grid item xs={12} >
                            {/*  search bar */}
                            < SearchCom OnFormSubmit= {this.handleSubmit} />
                        </Grid>
                        <Grid item xs={8} >
                            {/* video details */}
                            < VideoDetailCom video={this.state.selectedVideo}/>
                        </Grid>
                        <Grid item xs={4} >
                            {/* video list */}
                            < VideoListCom videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default App;
