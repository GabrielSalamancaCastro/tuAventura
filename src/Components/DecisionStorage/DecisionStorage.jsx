import React from 'react'

export default class DecisionStorage extends React.Component{
    
render(){
    
    return(
   
        <div className="decisions">
            <div className="ultima-escogida">
            <h3>ULTIMA OPCION ESCOGIDA:</h3>
            <h3>{this.props.decision}</h3>
            </div>
            
            <div className="storage">
            <h3>STORAGE:</h3>
            <ul id="storage-ul">
                {this.props.storage.map((element, index)=>
                <li id="storage-li" key={index}>{element}</li>
                )}
            </ul>
            </div>

            
 
        </div>

        
    )
}


}