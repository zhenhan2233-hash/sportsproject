import Footer from './components/Footer.jsx';
import Food from './components/Food.jsx';
import Header from './components/Header.jsx';
import Card from './components/Card.jsx';
import myPic from './assets/pika.png';
import myPic1 from './assets/pikapika.png';

function App() {
  return (
    <body className="bg-blue-100">
      <div>
        <Header />
        <main>
          <Card name="apples" type="fruit" food="healthy" />
          <h2> This is my website! </h2>
          <img src={myPic} width ="100"/>
          <img src={myPic1} width = "100"/>
          <Food />
        </main>
        <Footer />

        <h1
          className="text-4xl font-bold text-blue-600
	bg-yellow-100 p-8 rounded-xl"
        >
          Tailwind is working!
        </h1>
      </div>
    </body>
  );
}

export default App;
