import { useEffect, useState } from "react";

const useMockData = (mock) =>{
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);

    // Cargamos el fetch con la promise para traer los datos del mock

    useEffect(() => {
        const callMock = async () => {
            await new Promise(resolve => setTimeout(resolve, 1000))
        }
        const fetchData = async () => {
            await callMock();
            setData(mock);
            setLoading(false);

        }

        fetchData();

    }, [])

    return {data, loading}
}
export default useMockData;