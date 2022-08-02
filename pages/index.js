import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'
import { Button } from '@nextui-org/react';

const Home = props => {
  return (
    <Layout>
      <div>hello {props.hello.name}</div>
      <Button>Click me</Button>

      {props.things.map(thing => (
        <div key={thing.id} className="post">
          <p>{thing.name}</p>
          <p>{thing.content}</p>
        </div>
      ))}
    </Layout>
  )
}

export const getServerSideProps = async () => {
  const res = await fetch('http://localhost:3000/api/hello')
  const hello = await res.json()
  const res2 = await fetch('http://localhost:3000/api/things')
  const things = await res2.json()
  return {
    props: { hello, things }
  }
}

export default Home
