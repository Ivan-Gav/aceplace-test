import type { ApiResponseType } from "@/types/apiResponseType"

const URL = process.env.NEXT_PUBLIC_API_URL || ''
const API_KEY = process.env.NEXT_PUBLIC_API_KEY

export async function fetchData(query: string) {
  const options = {
    method: "POST",
    mode: "cors" as RequestMode,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": "Token " + API_KEY 
    },
    body: JSON.stringify({query, count: 50})
}
  const res = await fetch(URL, options)
  const data = await res.json()
  console.log('data')
  console.log(data)
  return data as unknown as ApiResponseType
}