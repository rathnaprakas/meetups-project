import classes from './Card.module.css';

let Card=(props)=>{
    return <div className={classes.card}>{props.children}</div>
}

export default Card;