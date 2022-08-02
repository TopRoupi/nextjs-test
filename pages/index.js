import useSWR from 'swr'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'
import { Button } from '@nextui-org/react';

const fetcher = (...args) => fetch(...args).then((res) => res.json())

const Home = props => {
 const { data, error } = useSWR('/api/things', fetcher)
  if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>
    if (data){
      console.log(data)
      return (
        <Layout>
          <Button>Click me</Button>

          {data.map(thing => (
            <div key={thing.id} className="post">
              <p>{thing.name}</p>
              <p>{thing.content}</p>
            </div>
          ))}
          </Layout>
      )
    }
}

// export const getServerSideProps = async () => {
//   console.log("aaaaaaaaaaaaAAA")
//   let a = useSWR('/api/hello', fetcher)
//   console.log(a)
//   const { data, e } = useSWR('/api/hello', fetcher)
//   // const { things, things_e } = useSWR('/api/things', fetcher)
//   // const res = await fetch('/api/hello')
//   // const hello = await res.json()
//   // const res2 = await fetch('/api/things')
//   // const things = await res2.json()
//   return {
//     props: { hello, things }
//   }
// }

export default Home
