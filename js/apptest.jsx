import React from 'react';
import ReactDOM from 'react-dom';

module.exports = class Card extends React.Component{


    render(){
        let divStyle ={};
        let textStyle ={};

        if (!this.props.isOpen){
            divStyle ={
                width:'160px',
                height: '160px',
                border:'4px solid orange',
                borderRadius:'5%',
                backgroundImage: "url(./img/spots.jpg)",
                backgroundSize: 'contain',
                backgroundRepeat:'no-repeat',
                margin: '4px',
                '&:hover': {
                    opacity:'0.5'
                },
                cursor:'pointer'
            }
            textStyle = {display:'none'}
        }
        if (this.props.isOpen){
            divStyle ={
                width:'160px',
                height: '160px',
                border:'4px solid red',
                borderRadius:'5%',
                backgroundImage: "url("+this.props.card.src +')',
                backgroundSize: 'contain',
                backgroundRepeat:'no-repeat',
                margin: '4px'

            }
            textStyle ={
            position:'relative',
            top: '120px',
            left:'40px',
            fontWeight:'bold',
            fontSize:'1.5em'
        }
        }
        if (this.props.isRemoved){
            divStyle ={
                width:'160px',
                height: '160px',
                backgroundColor: 'white',
                margin: '4px'
            }
            textStyle = {display:'none'}
        }



        return (<div onClick={this.props.onOpen} >
            <div style={divStyle} className="card">

            <h3 style={textStyle}>{this.props.card.name} </h3>
            </div>

        </div>);
    }
}

