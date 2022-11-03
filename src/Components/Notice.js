import { useEffect, useState } from "react";


const Notice = () => {
    const [notice, setNotice] = useState();

    const handleFetch = async() => {
        const notice = await fetch("/notices");

        if(notice.status !== 200) {
            throw new Error("No data located");
        }

        let data = await notice.json();
        console.log(data);
        setNotice(data);
    }

    useEffect(() => {
        handleFetch();
        console.log(notice);
    }, []);


    return (
        <div>
            {!notice ? <h1> Loading... </h1> : notice.map((event) => {
                return (
                    <h1 key={event.id}>{event.noticeSummary}</h1>
                )
            })}
        </div>
    );
}

export default Notice;