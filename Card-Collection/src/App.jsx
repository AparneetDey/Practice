import React from 'react'
import Tags from './components/Tags'
import Card from './components/Card';

const tags = ['Profile', 'New York', 'Relaxing', 'Person', 'Fashion' ]

const categoryCards = [
  {
    id: 1,
    title: "People",
    totalImages: 144,
    mainImage: "./people-main.jpg",
    thumbnails: [
      "./people-thumb1.jpg",
      "./people-thumb2.jpg",
      "./people-thumb3.jpg"
    ]
  },
  {
    id: 2,
    title: "Nature",
    totalImages: 7000,
    mainImage: "./nature-main.jpg",
    thumbnails: [
      "./nature-thumb1.jpg",
      "./nature-thumb2.jpg",
      "./nature-thumb3.jpg"
    ]
  },
  {
    id: 3,
    title: "History",
    totalImages: 431,
    mainImage: "./history-main.jpg",
    thumbnails: [
      "./history-thumb1.jpg",
      "./history-thumb2.jpg",
      "./history-thumb3.jpg"
    ]
  }
];


const App = () => {
  return (
    <main>
      <section className='card-collection'>

        <div className='flex flex-col gap-4'>
          <h1>Popular Collections</h1>
          <div className='flex gap-2 flex-wrap'>
            {tags.map((tag)=>(
              <Tags key={tag} tagName={tag} />
            ))}
          </div>
        </div>

        <section className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3'>
          {categoryCards.map( (card) => (
            <Card key={card.id} card={card} />
          ))}
        </section>
      </section>
    </main>
  )
}

export default App