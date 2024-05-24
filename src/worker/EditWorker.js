import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../stylesheets/EditWorker.css'
const EditWorker = () => {
    const [pracownik, setPracownik] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:8000/api/Pracownik/${id}`)
            .then((res) => res.json())
            .then((data) => setPracownik(data.data))
            .catch((error) => {
                console.error("Błąd fetch:", error);
            });
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        console.log("Input Change:", name, value);
        setPracownik((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Submit Clicked - Klient:", pracownik);

        try {
            const result = await fetch(`http://localhost:8000/api/Pracownik/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(pracownik),
            });
            const data = await result.json();
            setPracownik(data);
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
                        name="Imie_pracownik"
                        value={pracownik.Imie_pracownik|| ""}
                        onChange={handleInputChange}
                    /><br />

                    <label htmlFor="lname">Nazwisko:</label><br />
                    <input
                        type="text"
                        id="lname"
                        name="Nazwisko_pracownik"
                        value={pracownik.Nazwisko_pracownik|| ""}
                        onChange={handleInputChange}
                    /><br />

                    <label htmlFor="phoneNumb">Numer Telefonu:</label><br />
                    <input
                        type="text"
                        id="phoneNumb"
                        name="Numer_Telefonu"
                        value={pracownik.Numer_Telefonu || ""}
                        onChange={handleInputChange}
                    /><br />
                    <label htmlFor="email">Adres e-mail:</label><br />
                    <input
                        type="text"
                        id="email"
                        name="Adres_email"
                        value={pracownik.Adres_email || ""}
                        onChange={handleInputChange}
                    /><br />

                    <button type="submit">Wyślij zmiany</button>
                </form>
            </div>

        </div>
    );
};

export default EditWorker;
