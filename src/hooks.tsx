import {useEffect, useState} from 'react'
import { server_calls } from './server.ts';

export const useGetData = () => {
    const [ contactData, setData ] = useState <[]>([])

    async function handleDataFetch(){
        const result = await server_calls.get();
        setData(result)
    }

    //useEffect on mount
    useEffect( () => {
        handleDataFetch();
    }, [])
// } nothing occurs on every change, [] occurs on amount

return { contactData, getData:handleDataFetch }
}
