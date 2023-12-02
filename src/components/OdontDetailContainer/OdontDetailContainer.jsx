import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { OdontDetail } from "../odontDetail/OdontDetail";

export const OdontDetailContainer = ({params}) => {

    const { id } = useParams();
    const [odont, setOdont] = useState([]);

    useEffect(() => {
        const getOdont = async () => {
            const url = `https://jsonplaceholder.typicode.com/users/${id}`;
            const resp = await fetch(url);
            const data = await resp.json();
            setOdont(data);
        };
        getOdont();
    }, [id]);

    console.log(odont);

  return (
    <main>
        <OdontDetail odont={odont} />
    </main>
  )
}
