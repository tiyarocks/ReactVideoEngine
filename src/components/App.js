import React from "react"
import SearchBar from "./SearchBar"
import youtube from "../apis/youtube"


class App extends React.Component{
    state={videos:[]}
    onTermSubmit= async term => {
        //async api request
        //youtube is now a pre-configured instance of axios
        const response=await youtube.get("/search" ,{
            params:{
                q:term,
                key:"AIzaSyAcXw82FjVjZbYFy3-kdpr3pGxvMAD02XE"
            }
        })
        console.log(response)
        
        //take the list of vdos and set them as state on our App component
        this.setState({videos:response.data.items})
    }
    render(){
        return(
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                I have {this.state.videos.length} videos
            </div>
        )
    }
}
export default App