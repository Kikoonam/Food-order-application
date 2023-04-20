import classes from './MealItem.module.css'
import MealItemForm from './MealItemForm';

export default function MealItem (props){
    const Price = `$${props.price.toFixed(2)}`
     
    return (
    <li className={classes.meal}> 
    <div>
        <h3 className={classes.name}>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{Price}</div>
    </div>
    <div>
        <MealItemForm/>
    </div>
    </li>);
}