import React from 'react';
import Options from '../Options/Options';
import DecisionStorage from '../DecisionStorage/DecisionStorage';



export default class Story extends React.Component{
    
    constructor(props){
        super(props);
        this.state ={
            id: 1,
            idString:"1",
            storage:[]
        };
    }

    componentDidMount(){
        alert("Shall we play?")
        }
 
   
   
    

    // HACEMOS LOS HANDLES:
     HandleOptionA = ()=>{
         const {id} = this.state;    
         if (id<5){ 
            this.setState({
                id: id+1,
                idString: id+1+"a",
                })
            }
        }

    HandleOptionB = ()=>{
            const {id} = this.state;
            if (id<5){
                this.setState({
                    id: id+1,
                    idString: id+1+"b",
                   })
               }
           }

    storageA =()=>{
        this.state.storage.push("A");
    }
    
    storageB =()=>{
        this.state.storage.push("B");
    }

    startAgain= ()=>{
        if(this.state.id ===5){
            alert("Hemos llegado al final :( - ¿Quieres jugar de nuevo?")
        }
    }

    handlerA= ()=>{
        this.storageA()
        this.HandleOptionA()
        this.startAgain()
    }

    handlerB= ()=>{
        this.storageB()
        this.HandleOptionB()
        this.startAgain()
    }

    

       
    render(){

        const handlers={
            a:this.handlerA,
            b:this.handlerB
        }
    

        
        const dataProps=this.props.story.find((element)=>element.id.includes(this.state.idString));
        const decision= this.state.idString.substr(1).toUpperCase();
        
        


        return(
            <div>
                <DecisionStorage decision={decision} storage={this.state.storage}/>   
                <p>
                {dataProps.historia}
                </p>
                <Options manejadores={handlers} btn={dataProps}/>
            

                          
            </div>
            
        )
    }

}
