import Head from 'next/head'
// import Link from 'next/link'
import Layout from '../../components/Layout/layout'

export default function Examples () {
  return (
    <Layout>
      <Head>
        <title>Examples</title>
      </Head>

      <div className='examplesPage'>
        <div>
          <h1>Examples</h1>
        </div>

        <div className='grid'>
          <a href='../../compScience/laptop1.jpg' className='card'>
            <p>From this &#x2192;</p>
            <img src='../../compScience/laptop1.jpg' alt='' />
          </a>

          <a href='../../compScience/laptop2.jpg' className='card'>
            <p>To this &#x2192;</p>
            <img src='../../compScience/laptop2.jpg' alt='' />
          </a>

          <a href='../../compScience/laptop3.jpg' className='card'>
            <p>To this &#x2192;</p>
            <img src='../../compScience/laptop3.jpg' alt='' />
          </a>

          <a href='../../compScience/communication.jpg' className='card'>
            Final Result..
            <img src='../../compScience/communication.jpg' alt='' />
          </a>
        </div>
      </div>

      <style jsx>
        {`
          .examplesPage {
            padding: 1rem;
          }

          .container {
            min-height: 100vh;
            padding: 0 0.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          main {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          h1 {
            text-align: center;
          }

          .whatInspires {
            margin-top: 3rem;
          }

          a {
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            color: inherit;
            text-shadow: 1px 1px 3px black;
            text-decoration: none;
          }

          .lemons {
            color: yellow;
            text-shadow: 1px 1px 3px black;
          }

          .title a {
            color: #0070f3;
            text-decoration: none;
          }

          .title a:hover,
          .title a:focus,
          .title a:active {
            text-decoration: underline;
          }

          .title {
            margin: 0;
            line-height: 1.15;
            font-size: 4rem;
          }

          .title,
          .description {
            text-align: center;
            color: yellow;
            text-shadow: 1px 1px 1px black;
          }

          .description {
            line-height: 1.5;
            font-size: 1.5rem;
          }

           {
            /* code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        } */
          }

          .grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr 1fr;
            max-width: 800px;
            margin-top: 3rem;
          }

          .card {
            height: 12rem;
            margin: 1rem;
            background: #0000006e;
            color: white;
            flex-basis: 45%;
            padding: 1.5rem;
            text-align: left;
            text-decoration: none;
            border: 1px solid #eaeaea;
            transition: color 0.15s ease, border-color 0.15s ease;
          }

          .card:hover,
          .card:focus,
          .card:active {
            color: #0070f3;
            border-color: #0070f3;
          }

          .card h3 {
            margin: 0 0 1rem 0;
            font-size: 1.5rem;
          }

          .card p {
            margin: 0;
            font-size: 1.25rem;
            line-height: 1.5;
          }

          img {
            border: 1px solid white;
          }

          @media (max-width: 600px) {
            {/* .grid {
              width: 100%;
              height: 100%;
              flex-direction: column;
            } */}

            .grid {
              display: grid;
              grid-template-columns: 1fr;
              grid-template-rows: 4fr;
              max-width: 300px;
              margin: 1rem auto 0;
            }
          }
        `}
      </style>
    </Layout>
  )
}
