import './styles.css';

type Props = {
    name: string;
    location: string;
    followers: string;
    url: string;
    imgUrl: string;
}

function ResultCard({ name, location, followers, url, imgUrl }: Props) {

    return (
        <div className='result-container'>
            <div className='img-container'><img src={imgUrl} alt={name} /></div>
            <div className='result-info-container'>
                <h3 className='result-title'>Informações</h3>
                <div className='result-list-container'>
                    <p>Perfil: <span className='url-color'>{url}</span></p>
                    <p>Seguidores: <span>{followers}</span></p>
                    <p>Localidade: <span>{location}</span></p>
                    <p>Nome: <span>{name}</span></p>
                </div>
            </div>
        </div>
    );
}

export default ResultCard