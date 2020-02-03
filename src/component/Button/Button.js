import React from 'react'
import './Button.css'


class Button extends React.Component {
	constructor() {
		super()
	}
	render() {
		/*
				const buttonStyle={
					textStyle:{
						color:'black',
						fontSize:'20px'
					}
				}*/
		return (
			<button className="button" >Save</button>

		)

	}
}
export default Button