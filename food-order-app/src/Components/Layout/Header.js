import {Fragment} from 'react'

import HeaderCartButton from './HeaderCartButton'
import classes from './Header.module.css'
import mealsImage from '../../assets/meals.jpeg'

export default function Header (props){
    return <Fragment>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
           < HeaderCartButton onClick={props.onShowCart} onClose={props.onHideCart}/ >
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt="A table full of delious food!" />
        </div>
    </Fragment>
}