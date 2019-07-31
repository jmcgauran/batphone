import React from 'react'
import Songs from '../songs/Songs';
import ApparitionFeed from '../apparitions/ApparitionFeed' ;
import SearchSongs from '../songs/SearchSongs';
import SelectedSong from '../songs/SelectedSong';

const Index = () => {
    return (
        <React.Fragment>
            <div container>
            <div className="row">
                <div className="col-8">
                    <SelectedSong/>
                    <ApparitionFeed/>
                </div>
                <div className="col-4">
                    <SearchSongs/>
                    <Songs/>
                </div>
            </div>
            </div>
        </React.Fragment>
        
        
    )
}
export default Index;