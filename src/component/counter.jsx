import React,{Component}from "react";


class Counter extends Component{
    state={
        value:0
    }
    handleIncrement=()=>{
        
        // console.log(this.state.value++);
        this.setState({value:this.state.value+1});

    }
    handleDelete=()=>{
        
        // console.log(this.state.value++);
        this.setState({value:this.state.value-1});

    }
    
    render(){
        return(
            // console.log('props',this.props) ,
            <div>
                <h1>OnClick</h1>
                <span className={this.selectClasss()} >{this.formatCounter()}</span>
                <button onClick={this.handleIncrement} className="btn btn-dark m-2">Increment</button>
                
                <button onClick={this.handleDelete}className="btn btn-success">Delete</button>
                
            </div>

        );
    


    }
    formatCounter(){
        let value=this.state.value;
        // if(value===0){
        //     return "Zero";
        // }
        // else{
        //     return value;
        // }
        return value===0?"Zero":value;
    }
    selectClasss(){
        let classes= "m-2 p-2 alert-";
        classes+=this.state.value===0?"primary":"danger";
        return classes;


    }

    //
    






}
export default Counter;