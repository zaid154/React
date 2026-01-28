import UserCard from "./components/UserCard";
import "./App.css";

function App() {
  return (
    <div className="container">
      {Array(4)
        .fill(0)
        .map((_, index) => (
          <UserCard key={index} />
        ))}
    </div>
  );
}

export default App;
