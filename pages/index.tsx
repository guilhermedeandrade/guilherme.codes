import { About, Header, Services, Projects } from '../components'

function Home(): React.ReactElement {
  return (
    <>
      <Header />
      <About />
      <Services />
      <Projects />
    </>
  )
}

export default Home
