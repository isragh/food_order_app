import meals from '../../assets/meals.jpg';
import classes from './Header.module.css';

import HeaderCartButton from './HeaderCartButton';

export default function Header(props) {
    return (
        <>
            <header className={classes.header}>
                <h1>Click And Eat</h1>
                <HeaderCartButton onClick={props.onShowCart} />
            </header>
            <div className={classes['main-image']}>
                <img src={meals} alt="A table full of food!" />
            </div>
        </>
    )
}