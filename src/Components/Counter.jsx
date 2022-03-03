import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../Store/index';
import classes from './Counter.module.css'

const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector((state) => state.counter.counter);
    const show = useSelector((state) => state.counter.showCounter);

    const incrementHandler = () => {
        dispatch(counterActions.increment())
    }

    const increaseHandler = () => {
        dispatch(counterActions.increase(5))
    }

    const decrementHandler = () => {
        dispatch(counterActions.decrement())
    }

    const toggleCounterHandler = () => {
        dispatch(counterActions.toggle())
    }

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            {show && <div className={classes.value}>{counter}</div>}
            <div className={classes.value}>
                <button className={classes.button} onClick={incrementHandler}>Increment</button>
                <button className={classes.button} onClick={increaseHandler}>Increase By 5</button>
                <button className={classes.button} onClick={decrementHandler}>Decrement</button>
            </div>
            <button className={classes.button} onClick={toggleCounterHandler}>Toggle</button>
        </main>
    )
};

export default Counter