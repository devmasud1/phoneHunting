import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import PhoneCard from "./PhoneCard";


const Phone = () => {
    const [phone, setPhone] = useState({})
    const phones = useLoaderData();
    const {id} = useParams();
    
    useEffect(() => {
        const curPhone = phones.find(phone => phone.id === id)
        setPhone(curPhone)
    }, [phones,id])
    return (
        <div >
           <PhoneCard phone={phone}></PhoneCard>
        </div>
    );
};

export default Phone;