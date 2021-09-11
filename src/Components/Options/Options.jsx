import React from 'react';


export default class Options extends React.Component{
    constructor(props){
        super(props);
        this.state={}    
    }

   

    render(){
        return(
            <div className="botones">
               
                <button className="optionA-btn" onClick={this.props.manejadores.a}>(A) {this.props.btn.opciones.a}</button>
              
                <button className="optionB-btn" onClick={this.props.manejadores.b}>(B) {this.props.btn.opciones.b}</button>
            
            </div>
            
        )
    }
}

