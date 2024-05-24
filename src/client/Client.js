
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../stylesheets/Client.css';

const Client = () => {
    const [klienci, setKlienci] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/api/Klient")
            .then((res) => res.json())
            .then((data) => setKlienci(data.data));
    }, []);

    return (
        <div className="Visit">
            <h1>
                <Link to={`addclient/`}>
                    <img className="Add" src="/add.png" alt="Logo" width="25" height="25" /> Dodaj klienta
                </Link>
            </h1>

            <table className="VisitTable">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Imie</th>
                    <th>Nazwisko</th>
                    <th>Data Rejestracji</th>
                    <th>Numer Telefonu</th>
                    <th>Opcje</th>
                </tr>
                </thead>
                <tbody>
                {klienci.map((klient) => (
                    <tr key={klient.ID_klient}>
                        <td>{klient.ID_klient}</td>
                        <td>{klient.Imie_klienta}</td>
                        <td>{klient.Nazwisko_klienta}</td>
                        <td>{klient.Data_rejestracji}</td>
                        <td>{klient.Numer_Telefonu}</td>
                        <td>
                            <Link to={`viewoneclient/${klient.ID_klient}`}>
                                <img className="Search" src="/search.png" alt="Logo" width="25" height="25" />
                            </Link>

                            <Link to={`editclient/${klient.ID_klient}`}>
                                <img className="Edit" src="/edit.png" alt="Logo" width="25" height="25" />
                            </Link>
                            <Link to={`deleteclient/${klient.ID_klient}`}>
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

export default Client;
