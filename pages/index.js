import Layout from '../components/Layout';
import Head from 'next/head'

const Index = () => (
  <div>
    <Head>
      <meta charSet="utf-8" />
      <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
      <title>forgerson.DEV</title>
      <link href="https://fonts.googleapis.com/css2?family=Nunito&display=swap" rel="stylesheet"/>
    </Head>
    <Layout>
      <h1>Hello</h1>
    </Layout>
  </div>  
)

export default Index;
