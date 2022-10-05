import classes from './Cart.module.css';

export default function Cart(props) {
    const carItems = <ul className={classes['cart-items']}>{[
        { id: 'c1', name: 'Sushi', amont: 2, price: 12.99 }
    ].map(item => <li>{item.name}</li>)}</ul>;

    return (
        <div>
            {carItems}
            <div>
                <span>Total Amount</span>
                <span>35.62</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </div>
    )
}