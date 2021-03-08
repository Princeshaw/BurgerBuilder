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
        {controls.map(clr=>(
            <BuildControl key={clr.label} label={clr.label}
            added = {() => props.ingredientAdded(clr.type)}/>
        ))}
    </div>
);

export default burgerControls;