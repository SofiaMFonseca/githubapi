import { Link } from "react-router-dom";
import Button from "../../../components/Button";

function HomeBody() {

    return (
        <main>
            <section>
                <div className="home-body ml41">
                    <h1>Desafio Github API</h1>
                    <h2>DevSuperior - Escola de programação</h2>
                </div>
                <div className="ml41">
                    <Link to="/profile">
                        <Button text="Começar" />
                    </Link>
                </div>
            </section>
        </main>
    );
}

export default HomeBody