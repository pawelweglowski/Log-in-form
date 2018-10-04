import React from 'react';
import ReactDOM from 'react-dom';


class Loginform extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            
        }
    };
    
    
  
    
    
    
    render(){
        const calculeteStrength = function (password) {
            let strength = 0;
             const regExp = [
                /[A-Z]/,
                /[a-z]/,
                /[0-9]/,
                /.{8}/, 
                /.{14}/,
                /[!-//:-@[-`{-ÿ]/
            ];
        }
        
        return (
            <div className="container">
		        <form>		
			        <input type="text" placeholder="login">		
			        <input type="password" placeholder="password" onfocus="this.placeholder" onblur="this.placeholder" id="passwordInput">			
			        <progress id="passwordStrength" value="0"></progress>
			        <input type="submit" value="Sign In">			
		        </form>		
	        </div>
        )
    }
    
};
export default Loginform;


