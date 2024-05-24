import React, { useState } from "react";

const AddClient = () => {
    const [klient, setKlient] = useState({
        ID_klient:"",
        Imie_klienta: "",
        Nazwisko_klienta: "",
        Data_rejestracji: "",
        Numer_Telefonu: "",
    });

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
            const result = await fetch("http://localhost:8000/api/Klient/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(klient),
            });

            const data = await result.json();
            console.log("New client added:", data);

            setKlient({
                ID_klient:"",
                Imie_klienta: "",
                Nazwisko_klienta: "",
                Data_rejestracji: "",
                Numer_Telefonu: ""
            });
        } catch (error) {
            console.error("Błąd fetch:", error);
        }
    };

    return (
        <div className="AddClient">
            <div>
                <form onSubmit={handleSubmit} method="POST">
                    <label htmlFor="fname">Imie:</label><br />
                    <input
                        type="text"
                        id="fname"
                        name="Imie_klienta"
                        value={klient.Imie_klienta}
                        onChange={handleInputChange}
                    /><br />

                    <label htmlFor="lname">Nazwisko:</label><br />
                    <input
                        type="text"
                        id="lname"
                        name="Nazwisko_klienta"
                        value={klient.Nazwisko_klienta}
                        onChange={handleInputChange}
                    /><br />

                    <label htmlFor="datee">Data Rejestracji:</label><br />
                    <input
                        type="date"
                        id="datee"
                        name="Data_rejestracji"
                        value={klient.Data_rejestracji}
                        onChange={handleInputChange}
                    /><br />

                    <label htmlFor="phoneNumb">Numer Telefonu:</label><br />
                    <input
                        type="text"
                        id="phoneNumb"
                        name="Numer_Telefonu"
                        value={klient.Numer_Telefonu}
                        onChange={handleInputChange}
                    /><br />

                    <button type="submit">Dodaj klienta</button>
                </form>
            </div>
        </div>
    );
};

export default AddClient;
