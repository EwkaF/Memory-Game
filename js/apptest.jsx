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
            left:'40px'
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
            <div style={divStyle}>
            {/*<audio>*/}
            {/*<source src = {this.props.card.audio}></source>*/}
            {/*</audio>*/}

            <h3 style={textStyle}>{this.props.card.name} </h3>
            </div>

        </div>);
    }
}

// const images =  {name:'blueshell',
//      src:'./img/blueshell.png'};


// document.addEventListener('DOMContentLoaded', function(){
//     ReactDOM.render(
//         <Card blueshell = {images}/>,
//         document.getElementById('app')
//     );
// });;