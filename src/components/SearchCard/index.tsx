import './styles.css';
import Button from "../Button";
import { useState } from 'react';

type FormData = {
    githubUser: string;
}

function SearchCard() {

    const [formData, setFormData] = useState<FormData>({
        githubUser: ''
    });

    function handleInputChange(event: any) {
        const value = event.target.value;
        const name = event.target.name;
        setFormData({...formData, [name]: value})
    }

    function handleFormSubmit(event: any) {
        event.preventDefault();
    }

    return (
        <div className="search-card container">
            <h2>Encontre um perfil Github</h2>
            <div className='form-div'>
                <form onSubmit={handleFormSubmit} className='form'>
                    <input
                        name='githubUser'
                        value={formData.githubUser}
                        type="text"
                        placeholder='Usuário Github'
                        onChange={handleInputChange}
                        className='input'
                    />
                </form>
            </div>
            <Button text="Encontrar" />
        </div>
    );
}

export default SearchCard