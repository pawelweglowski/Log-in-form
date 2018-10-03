import React from 'react';
import ReactDOM from 'react-dom';


class Loginform extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            
        }
    };
    
    
    
    
    render(){
        
        return (
            <div id="container">
		        <form>		
			        <input type="text" placeholder="login">		
			        <input type="password" placeholder="password" onfocus="this.placeholder" onblur="this.placeholder" id="passwordField">			
			        <progress id="passwordStrength" value="0"></progress>
			        <input type="submit" value="Sign In">			
		        </form>		
	        </div>
        )
    }
    
};
export default Loginform;


