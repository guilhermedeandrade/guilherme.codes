import { About, Header, Skills, Projects, Contact } from '../components'

function Home(): React.ReactElement {
  return (
    <>
      <Header />
      <About />
      <Skills />
      <Projects />
    </>
  )
}

export default Home
