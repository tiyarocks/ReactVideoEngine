import React from "react"
import SearchBar from "./SearchBar"
import youtube from "../apis/youtube"
import VideoDetail from "./VideoDetail"


class App extends React.Component{
    state={videos:[],selectedVideo:null}
    onTermSubmit= async term => {
        //async api request
        //youtube is now a pre-configured instance of axios
        const response=await youtube.get("/search" ,{
            params:{
                part:"snippet",
                maxResults:5,
                q:term,
                key:"AIzaSyAcXw82FjVjZbYFy3-kdpr3pGxvMAD02XE"
            }
        })
        console.log(response)
        
        //take the list of vdos and set them as state on our App component
        this.setState({videos:response.data.items})
    }
//obj that we fetch from the u tube api:video
    onVideoSelect=video=>{
        this.setState({
            selectedVideo:video
        })
        
    }
    render(){
        return(
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                <VideoDetail video={this.state.selectedVideo}/>  
                <VideoList onVideoSelect={this.onVideoSelect}videos={this.state.videos}/>
            </div>
        )
    }
}
export default App