import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../stylesheets/EditVisit.css'
const EditVisit = () => {
    const [wizyta, setWizyta] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:8000/api/Wizyta/${id}`)
            .then((res) => res.json())
            .then((data) => setWizyta(data.data))
            .catch((error) => {
                console.error("Błąd fetch:", error);
            });
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        console.log("Input Change:", name, value);

        if (name === "Data_wizyty") {
            setWizyta((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        } else {
            setWizyta((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const result = await fetch(`http://localhost:8000/api/Wizyta/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(wizyta),
            });
            const data = await result.json();
            setWizyta(data);
        } catch (error) {
            console.error("Błąd fetch:", error);
        }
    };

    return (
        <div className="EditVisit">
            <div >
                <form onSubmit={handleSubmit} method="PATCH">

                    <label htmlFor="datev">Data wizyty:</label><br />
                    <input
                        type="date"
                        id="datev"
                        name="Data_wizyty"
                        value={wizyta.Data_wizyty|| ""}
                        onChange={handleInputChange}
                    /><br />

                    <label htmlFor="idclient">ID Klient:</label><br />
                    <input
                        type="text"
                        id="idclient"
                        name="Klient_ID_klient"
                        value={wizyta.Klient_ID_klient|| ""}
                        onChange={handleInputChange}
                    /><br />

                    <label htmlFor="idWorker">ID Pracownik:</label><br />
                    <input
                        type="text"
                        id="idWorker"
                        name="Pracownik_ID_pracownik"
                        value={wizyta.Pracownik_ID_pracownik || ""}
                        onChange={handleInputChange}
                    /><br />
                    <label htmlFor="cena">Cena:</label><br />
                    <input
                        type="text"
                        id="cena"
                        name="Cena"
                        value={wizyta.Cena || ""}
                        onChange={handleInputChange}
                    /><br />
                    <label htmlFor="usluga">Nazwa usługi:</label><br />
                    <input
                        type="text"
                        id="usluga"
                        name="Nazwa_usługi"
                        value={wizyta. Nazwa_usługi || ""}
                        onChange={handleInputChange}
                    /><br />
                    <label htmlFor="czas">Czas trwania :</label><br />
                    <input
                        type="text"
                        id="czas"
                        name="Czas_trwania"
                        value={wizyta. Czas_trwania || ""}
                        onChange={handleInputChange}
                    /><br />


                    <button type="submit">Wyślij zmiany</button>
                </form>
            </div>

        </div>
    );
};

export default EditVisit;
