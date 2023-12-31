import './styles.css';
import { useState } from 'react';
import ResultCard from '../ResultCard';
import axios from 'axios';

type FormData = {
    githubUser: string;
}

type Profile = {
    url: string;
    followers: string;
    location: string;
    name: string;
    avatar_url: string;
}

function SearchCard() {

    const [formData, setFormData] = useState<FormData>({
        githubUser: ''
    });

    const [profile, setProfile] = useState<Profile>();

    const [showResult, setShowResult] = useState(false);

    const [error, setError] = useState<string | undefined>();

    function handleInputChange(event: any) {
        const value = event.target.value;
        const name = event.target.name;
        setFormData({ ...formData, [name]: value })
    }

    function handleFormSubmit(event: any) {
        event.preventDefault();

        axios.get(`https://api.github.com/users/${formData.githubUser}`)
            .then(response => {
                setProfile(response.data);
                setShowResult(true);
                setError(undefined);
            })
            .catch(() => {
                setError("Erro ao buscar usuário");
                setShowResult(false);
            });
    }

    return (
        <>
            <div className="search-card container">
                <h2>Encontre um perfil Github</h2>
                <form onSubmit={handleFormSubmit}>
                    <input
                        name='githubUser'
                        value={formData.githubUser}
                        type="text"
                        placeholder='Usuário Github'
                        onChange={handleInputChange}
                        className='input'
                    />
                    <button type='submit' className='search-btn'>Encontrar</button>
                </form>
            </div>
            <div>
                {showResult && profile &&
                    <ResultCard
                        name={profile.name}
                        location={profile.location}
                        followers={profile.followers}
                        url={profile.url}
                        imgUrl={profile.avatar_url} />
                }
                {error && <h2 className='error-msg'>{error}</h2>}
            </div>
        </>
    );
}

export default SearchCard