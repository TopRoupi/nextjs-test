import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'
import { Button } from '@nextui-org/react';

const Home = props => {
  return (
    <Layout>
      <div>hello {props.hello.name}</div>
      <Button>Click me</Button>
    </Layout>
  )
}

export const getServerSideProps = async () => {
  const res = await fetch('http://localhost:3000/api/hello')
  const hello = await res.json()
  return {
    props: { hello }
  }
}

export default Home
