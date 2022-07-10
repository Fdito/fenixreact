import AudioAnimation from './components/AudioAnimation/AudioAnimation';
import Settings from './components/Settings/Settings';
import './App.css';

function App() {
  return (
    <>
      <AudioAnimation />
      <div id='settingsmenu' className='displaynone'>
        <Settings />
      </div>
    </>
  );
}

export default App;
