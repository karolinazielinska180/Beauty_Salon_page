

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../stylesheets/Visit.css';

const Visit = () => {
    const [wizyty, setWizyty] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/api/Wizyta")
            .then((res) => res.json())
            .then((data) => setWizyty(data.data));
    }, []);

    return (
        <div className="Visit">
            <h1>
                <Link to={`addvisit/`}>
                    <img className="Add" src="/add.png" alt="Logo" width="25" height="25" /> Dodaj wizytę
                </Link>
            </h1>

            <table className="VisitTable">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Data</th>
                    <th>ID klienta</th>
                    <th>ID pracownika</th>
                    <th>Cena [PLN]</th>
                    <th>Usługa</th>
                    <th>Czas trwania [H]</th>
                    <th>Opcje</th>
                </tr>
                </thead>
                <tbody>
                {wizyty.map((wizyta) => (
                    <tr key={wizyta.ID_wizyta}>
                        <td>{wizyta.ID_wizyta}</td>
                        <td>{wizyta.Data_wizyty}</td>
                        <td>{wizyta.Klient_ID_klient}</td>
                        <td>{wizyta.Pracownik_ID_pracownik}</td>
                        <td>{wizyta.Cena}</td>
                        <td>{wizyta.Nazwa_usługi}</td>
                        <td>{wizyta.Czas_trwania}</td>
                        <td>
                            <Link to={`viewonevisit/${wizyta.ID_wizyta}`}>
                                <img className="Search" src="/search.png" alt="Logo" width="25" height="25" />
                            </Link>
                            <Link to={`editvisit/${wizyta.ID_wizyta}`}>
                                <img className="Edit" src="/edit.png" alt="Logo" width="25" height="25" />
                            </Link>
                            <Link to={`deletevisit/${wizyta.ID_wizyta}`}>
                                <img className="Bin" src="/bin.png" alt="Logo" width="25" height="25" />
                            </Link>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default Visit;
