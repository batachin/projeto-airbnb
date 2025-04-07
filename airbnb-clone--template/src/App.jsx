import Card from './components/Card'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import data from './data'

import './styles.css'

function App() {

  const elementData = data.map((elemento) => {
    return (
      <Card
        img={elemento.coverImg}
        rating={elemento.rating}
        reviewCount={elemento.stats.reviewCount}
        country={elemento.country}
        title={elemento.title}
        price={elemento.price}
        rating={elemento.stats.rating}
      />
    );
  });

  return (
    <>
      <div className='App'> 
        <Navbar />
        <Hero />
        <section className='card-list'>
          {elementData}
        </section>
      </div>
    </>
  )
}

export default App;
