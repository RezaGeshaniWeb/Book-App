import Layouts from "./layouts/Layouts"
import Books from "./components/Books"
import Info from "./components/Info"

function App() {
  return (
    <main className="mx-auto max-w-[1200px] min-h-screen p-2.5">
      <Layouts>
        <Books />
        <Info />
      </Layouts>
    </main>
  )
}

export default App