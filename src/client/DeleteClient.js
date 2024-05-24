import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DeleteClient = () => {
    const { id } = useParams();
    const [isDeleted, setIsDeleted] = useState(false);

    const handleDelete = async (e) => {
        e.preventDefault();

        try {
            const result = await fetch(`http://localhost:8000/api/Klient/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (result.status === 200) {
                const data = await result.json();
                console.log("Client deleted:", data);
                setIsDeleted(true);
            } else {
                console.error("Failed to delete client. Server returned:", result.status);
            }
        } catch (error) {
            console.error("Błąd fetch:", error);
        }
    };

    return (
        <div className="DeleteClient">
            <div>
                {isDeleted ? (
                    <p>Klient usunięty!</p>
                ) : (
                    <form onSubmit={handleDelete} method="DELETE">
                        <button type="submit">Usuń Klienta</button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default DeleteClient;
