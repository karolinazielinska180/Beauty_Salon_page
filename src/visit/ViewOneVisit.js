import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import '../stylesheets/ViewVisit.css'

const ViewOneVisit = () => {
    const [wizyta, setWizyta] = useState([]);
    const {id} = useParams();


    useEffect(() => {
        fetch(`http://localhost:8000/api/Wizyta/${id}`)
            .then((res) => res.json())
            .then((data) => setWizyta(data.data))
            .catch((error) => {
                console.error("Błąd fetch:", error);
            });
    }, [id]);

    return (
        <div className="ViewOneVisit">

            <table>
                <tr>
                    <th>ID</th>
                    <th>Data Wizyty</th>
                    <th>ID klienta</th>
                    <th>ID pracownika</th>
                    <th>Cena [PLN]</th>
                    <th>Nazwa usługi</th>
                    <th>Czas trwania [H]</th>
                </tr>
                <tr>
                    <td>{wizyta.ID_wizyta}</td>
                    <td>{wizyta.Data_wizyty}</td>
                    <td>{wizyta.Klient_ID_klient}</td>
                    <td>{wizyta.Pracownik_ID_pracownik}</td>
                    <td>{wizyta.Cena}</td>
                    <td>{wizyta.Nazwa_usługi}</td>
                    <td>{wizyta.Czas_trwania}</td>
                </tr>
            </table>
        </div>
    );
};

export default ViewOneVisit;