import "./styles.css";
import Header from "./components/Header";
import ListItem from "./components/ListItem";

const linkListData = [
  {
    url: "https://kiwify.app/pEkDkxZ?afid=2ehm21Wa",
    imageUrl: "/assets/pug.jpg",
    alt: "link",
    subtitle: "Ir para a página"
  },

];


function App() {
  return (
    <div className="App">
      <Header />
      <main>
          {
            linkListData.map(function (item) {
              return (
                <ListItem
                  url={item.url}
                  imageUrl={item.imageUrl}
                  alt={item.alt}
                  subtitle={item.subtitle}
                /> 
              );
            }) 
          }
      </main>
    </div>
  );
}

export default App;
