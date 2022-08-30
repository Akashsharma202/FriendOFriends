import React, { Component, useState } from "react";

export class R extends Component{
    constructor(props){
        super(props);
        this.state={
            articles:[],
            photos:[]
        }
    }
    componentDidMount=async()=>{
        let url="https://random-data-api.com/api/v2/users?size=12&is_xml=true";
        let data=await fetch(url);
        let parseData=await data.json();
        let photoUrl="https://api.unsplash.com/search/photos?query=female&client_id=R4eN9Dzu2rMHxox9Lhzs4QB3THowdMcX2sYTFRTn00k";
        let photoData=await fetch(photoUrl);
        let photoParseData=await photoData.json();
        this.setState({
            articles:parseData,
            photos:photoParseData.results,
        })
        console.log(this.state.photos);
    }
    render(){
        return(
        <div className="container my-4">
       <h2 className="text-center">FriendOFriends</h2>
        <div className="row my-3">
        
            {this.state.articles.map((element)=>{
                
                console.log("hello")
                
                    return <div key={element.id} className="col-md-4">
                    <div class="card mb-3" style={{maxWidth: "540px"}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src={element.avatar} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{element.first_name} {element.last_name}</h5>
        <p class="card-text">AiOutlineUser {element.username}<br/>Email: {element.email}<br/>Phone no: {element.phone_number}</p>
        <p class="card-text"><small class="text-muted">Last seen online 6 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
                    </div>
                })}
                
        </div>
        </div>
        )
    }
}