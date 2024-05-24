// Worker.jsx

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../stylesheets/Worker.css';

const Worker = () => {
    const [pracownicy, setPracownicy] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/api/Pracownik")
            .then((res) => res.json())
            .then((data) => setPracownicy(data.data));
    }, []);

    return (
        <div className="Worker">
            <h1>
                <Link to={`addworker/`}>
                    <img className="Add" src="/add.png" alt="Logo" width="25" height="25" />Dodaj pracownika
                </Link>
            </h1>

            <table className="WorkerTable">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Imie</th>
                    <th>Nazwisko</th>
                    <th>Pensja [PLN]</th>
                    <th>Numer Telefonu</th>
                    <th>Adres email</th>
                    <th>Opcje</th>
                </tr>
                </thead>
                <tbody>
                {pracownicy.map((pracownik) => (
                    <tr key={pracownik.ID_pracownik}>
                        <td>{pracownik.ID_pracownik}</td>
                        <td>{pracownik.Imie_pracownik}</td>
                        <td>{pracownik.Nazwisko_pracownik}</td>
                        <td>{pracownik.Pensja}</td>
                        <td>{pracownik.Numer_Telefonu}</td>
                        <td>{pracownik.Adres_email}</td>
                        <td>
                            <Link to={`viewoneworker/${pracownik.ID_pracownik}`}>
                                <img className="Search" src="/search.png" alt="Logo" width="25" height="25" />
                            </Link>
                            <Link to={`editworker/${pracownik.ID_pracownik}`}>
                                <img className="Edit" src="/edit.png" alt="Logo" width="25" height="25" />
                            </Link>
                            <Link to={`deleteworker/${pracownik.ID_pracownik}`}>
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

export default Worker;
