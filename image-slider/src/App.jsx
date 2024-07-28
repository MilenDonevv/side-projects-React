import ImageSlider from "./index.jsx"

function App() {

  return (
    <div>

      <ImageSlider 
      url={"https://picsum.photos/v2/list"} 
      page={"1"} 
      limit={"4"} />
    </div>
  );
}

export default App
