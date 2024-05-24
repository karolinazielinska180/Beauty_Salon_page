import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import '../stylesheets/ViewWorker.css'
const ViewOneWorker= () => {
    const [pracownik, setPracownik] = useState([]);
    const {id}=useParams();


    useEffect(() => {
        fetch(`http://localhost:8000/api/Pracownik/${id}`)
            .then((res) => res.json())
            .then((data) => setPracownik(data.data))
            .catch((error) => {
                console.error("Błąd fetch:", error);
            });
    }, [id]);

    return (
        <div className="ViewOneVisit">
            <table>
                <tr>
                    <th>ID</th>
                    <th>Imie</th>
                    <th>Nazwisko</th>
                    <th>Pensja</th>
                    <th>Numer Telefonu</th>
                    <th>Adres email</th>
                </tr>
                <tr>
                    <td>{pracownik.ID_pracownik}</td>
                    <td>{pracownik.Imie_pracownik}</td>
                    <td>{pracownik.Nazwisko_pracownik}</td>
                    <td>{pracownik.Pensja}</td>
                    <td>{pracownik.Numer_Telefonu}</td>
                    <td>{pracownik.Adres_email}</td>
                </tr>
            </table>
        </div>
    );
};

export default ViewOneWorker;