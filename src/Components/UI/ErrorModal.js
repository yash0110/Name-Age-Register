import Card from './Card'
import '../../css/ErrorModal.css'
import '../../css/Button.css'

const ErrorModal = (props) => {
    return (
        <div>
            <div className='backdrop' onClick={props.onOkay}/>
            <Card className='modal'>
                <header className='header'>
                    <h2>{props.title}</h2>
                </header>
                <div className='content'>{props.message}</div>
                <footer className='actions'>
                    <button className='button' onClick={props.onOkay}>Okay</button>
                </footer>
            </Card>
        </div>
    );
};

export default ErrorModal;