import './styles.css';

type Props = {
    text: string;
}

function Button({ text }: Props) {

    return (
        <div>
            <button type='submit' className="button">{text}</button>
        </div>
    );
}

export default Button