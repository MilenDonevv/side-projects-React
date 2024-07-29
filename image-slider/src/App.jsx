import ImageSlider from "./index.jsx"

function App() {

  return (
    <div>

      <ImageSlider 
      url={"https://picsum.photos/v2/list"} 
      page={"2"} 
      limit={"10"} />
    </div>
  );
}

export default App
