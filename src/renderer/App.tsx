import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';
import { createAgoraRtcEngine } from 'agora-electron-sdk';

function Hello() {
  const rtcEngine = createAgoraRtcEngine();
  console.log(rtcEngine);
  return <div>111</div>;
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
