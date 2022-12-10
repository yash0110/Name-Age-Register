import '../../css/Card.css'

const Card = (props) =>{

    console.log(props.class)
    return (
        <div className={'card '+props.class}>
            {props.children}
        </div>
    );
}

export default Card;