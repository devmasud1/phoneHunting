import PhonesCard from "./PhonesCard";

const Phones = ({phones}) => {
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap6 my-10 gap-8">
            {
                phones.map(phone => <PhonesCard key={phone.id} phone={phone}></PhonesCard>)
            }
        </div>
    );
};

export default Phones;