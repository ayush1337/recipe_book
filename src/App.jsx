import Logo from './components/Logo';
import RecipesList from './components/RecipesList';

function App() {
  return (
    <div className="max-w-[1400px] mx-auto flex flex-col gap-10 p-4">
      <Logo />
      <RecipesList />
    </div>
  );
}

export default App;