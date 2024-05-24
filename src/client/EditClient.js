import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../stylesheets/EditClient.css'
const EditClient = () => {
    const [klient, setKlient] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:8000/api/Klient/${id}`)
            .then((res) => res.json())
            .then((data) => setKlient(data.data))
            .catch((error) => {
                console.error("Błąd fetch:", error);
            });
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        console.log("Input Change:", name, value);
        setKlient((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Submit Clicked - Klient:", klient);

        try {
            const result = await fetch(`http://localhost:8000/api/Klient/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(klient),
            });
            const data = await result.json();
            setKlient(data);
        } catch (error) {
            console.error("Błąd fetch:", error);
        }
    };

    return (
        <div className="EditWorker">
            <div >
                <form onSubmit={handleSubmit} method="PATCH">
                    <label htmlFor="fname">Imie:</label><br />
                    <input
                        type="text"
                        id="fname"
                        name="Imie_klienta"
                        value={klient.Imie_klienta || ""}
                        onChange={handleInputChange}
                    /><br />

                    <label htmlFor="lname">Nazwisko:</label><br />
                    <input
                        type="text"
                        id="lname"
                        name="Nazwisko_klienta"
                        value={klient.Nazwisko_klienta || ""}
                        onChange={handleInputChange}
                    /><br />

                    <label htmlFor="phoneNumb">Numer Telefonu:</label><br />
                    <input
                        type="text"
                        id="phoneNumb"
                        name="Numer_Telefonu"
                        value={klient.Numer_Telefonu || ""}
                        onChange={handleInputChange}
                    /><br />

                    <button type="submit">Wyślij zmiany</button>
                </form>
            </div>
        </div>
    );
};

export default EditClient;
