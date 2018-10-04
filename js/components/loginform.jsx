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
             const strengthRules = [
                /[A-Z]/,
                /[a-z]/,
                /[0-9]/,
                /.{8}/, 
                /.{14}/,
                /[!-//:-@[-`{-ÿ]/
            ];
            strengthRules.forEach(function (strengthRules) {
                if (strengthRules.test(password)) {
                    strength++;
                }
            });
            return {
                value: strength,
                max: strengthRules.length
            };
        };
        const checkPasswordStrength = function (password) {
            let progress = document.querySelector('passwordStrength'), strength = calculeteStrength(this.value);
            progress.value = strength.value;
            progress.max = strength.max;
        };
        const showProgress = function() {
            let progress = document.querySelector('progress');
            progress.style.visibility = 'visible';
        };
        const hideProgress = function() {
            let progress = document.querySelector('progress');
            progress.style.visibility = 'hidden';
        };
        let input = document.querySelector('passwordInput');
        input.addEventListener('keyup', checkPasswordStrength);
        input.addEventListener('click', showProgress);
        input.addEventListener('glur', Progress);
        
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


