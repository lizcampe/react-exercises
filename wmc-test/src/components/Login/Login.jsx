import React from 'react';

/*
function Login(props) {
  return (
    <div> 
  		{props.name}
    </div>
  );
}


const Login=({name})=> (
	<div>
		{name}
	</div>
	);
*/

class Login extends React.Component{
	constructor(props){
		super(props);	
		this.state= { //le agrego a mi objeto una propiedad
			clicked: false,
		};
		this.changeClicked=this.changeClicked.bind(this) //cuando accese a changeclick desde this use esa función que está amarrada al componente
	}
	changeClicked(event) { //se agrega el set de state con modificador y que parte modificará
		console.log(event.target); 
		this.setState({clicked:!this.state.clicked})
	}
	render(){
		return( //amarra la función que se declara a la fuunción del div: props externo datos de fuera, state interno,

		<div onClick={this.changeClicked}> 
	<br/>
			{this.state.name}
			
			{this.state.clicked.toString()}
		</div>
		)
	}
};

export default Login;
