import React from 'react';
import './BuildControls.css';
import BuildControl from './Buildcontrol/Buildcontrol';

const controls =[
    {label:'Salad',type:'salad'},
    {label:'Bacon',type:'bacon'},
    {label:'Cheese',type:'cheese'},
    {label:'Meat',type:'meat'},
    
];
const burgerControls = (props) =>(
    <div className="BuildControls">
        <p>Current price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(clr=>(
            <BuildControl key={clr.label} label={clr.label}
            added = {() => props.ingredientAdded(clr.type)}
            removed = {() => props.ingredientRemoved(clr.type)}
            disabled = {props.disabledInfo[clr.type]}/>
        ))}
        <button className="OrderButton" disabled={props.purchaseable} onClick={props.ordered}>ORDER NOW</button>
    </div>
);

export default burgerControls;