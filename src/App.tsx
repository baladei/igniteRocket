import { useEffect } from "react"
import { gql, useQuery } from "@apollo/client"

const GET_LESSONS_QUERY = gql`
  query {
    lessons{
      id
      title
    }
  }
`

interface Lesson {
  id: string;
  title: string;
}

function App() {
  const { data } = useQuery<{ lessons: Lesson[] }>(GET_LESSONS_QUERY)

 // useEffect(() => {
 //   client.query({
 //     query: GET_LESSONS_QUERY,
 //   }).then(response => {
 //     console.log(response.data)
 //   })
 // }, [])      retorna o mesmo resultado, porem usando o useEffect, não o useQuery

  return (
    <ul>
      {data?.lessons.map(lesson => {
        return <li key={lesson.id}>{lesson.title}</li>
      })}
    </ul>
  )
}

export default App
