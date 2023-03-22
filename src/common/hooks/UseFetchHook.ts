import { useQuery } from 'react-query'
function UseFetchHook(queryTag: string, url: string, options?:any) {
    const { isLoading, error, data } = useQuery(queryTag, () =>
        fetch(url).then(res => res.json()
        )
    )
    return { isLoading, error, data }
}

export default UseFetchHook