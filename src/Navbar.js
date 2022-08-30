import React, { useState } from "react";
function N(){
       const [text,setText]=useState("");
       const handleonclick=(event)=>{
            setText(event.target.value);
            this.props.setValue(setText)
       } 
       return(
<div style={{top:"50%"}}>
<nav className="navbar bg-light">
  <form className="container-fluid">
    <div className="input-group">
      <span className="input-group-text" id="basic-addon1">@</span>
      <input type="text" className="form-control" value={text} placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" onChange={handleonclick}/>
    </div>
  </form>
</nav>
</div>
        )
}
export default N;