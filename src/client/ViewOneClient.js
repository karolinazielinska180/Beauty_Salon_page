import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import '../stylesheets/ViewClient.css'
const ViewOneClient= () => {
    const [klient, setKlient] = useState([]);
    const {id}=useParams();

    useEffect(() => {
        fetch(`http://localhost:8000/api/Klient/${id}`)
            .then((res) => res.json())
            .then((data) => setKlient(data.data))
            .catch((error) => {
                console.error("Błąd fetch:", error);
            });
    }, [id]);

    return (
        <div className="ViewOneVisit">
            <h1>
                <table>
                    <tr>
                        <th>ID</th>
                        <th>Imie</th>
                        <th>Nazwisko</th>
                        <th>Data Rejestracji</th>
                        <th>Numer Telefonu</th>
                    </tr>
                    <tr>
                        <td>{klient.ID_klient}</td>
                        <td>{klient.Imie_klienta}</td>
                        <td>{klient.Nazwisko_klienta}</td>
                        <td>{klient.Data_rejestracji}</td>
                        <td>{klient.Numer_Telefonu}</td>
                    </tr>
                </table>


            </h1>
        </div>
    );
};

export default ViewOneClient;