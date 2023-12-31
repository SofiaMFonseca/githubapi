import './styles.css';

type Props = {
    text: string;
}

function Button({ text }: Props) {

    return (
        <button className="button">{text}</button>
    );
}

export default Button