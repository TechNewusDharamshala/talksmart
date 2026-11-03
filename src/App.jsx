
import './App.css';

import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Exam from './pages/Exam';
import Contact from './pages/Contact';

function App() {
  const currentPath = window.location.pathname;

  switch (currentPath) {
    case '/about':
      return <About />;

    case '/courses':
      return <Courses />;

    case '/exams':
      return <Exam />;

    case '/contact':
      return <Contact />;

    default:
      return <Home />;
  }
}

export default App;
