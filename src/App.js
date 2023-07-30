import './App.css';
import './index.css'
import NavBar from './components/NavBar';
import BlogCards from './components/BlogCards';
import data from "./data"
import Welcome from './components/Welcome';
import Footer from './components/Footer';
function App() {
const cards=data.map(item => {
  return (
    <BlogCards
      img={item.coverImg}
      title={item.title}
      likes={item.reviewCount}
      preview={item.description}
      location={item.location}
      author={item.author}
      month={item.date.month}
      year={item.date.year}
      day={item.date.day}
      isFav={item.isFavourite}
    />
  )
})



  return (
    <div className="App">
      <div className="content">
        <NavBar/>
        <Welcome/>
        <h2 className="headlines" >Latest updates from around the globe</h2>
        <div className="card-list">
        {cards}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
