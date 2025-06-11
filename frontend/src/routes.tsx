import { Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LearnPlayPage from './pages/LearnPlayPage';
import LearnPage from './pages/LearnPage';
import MultiplyPage from './pages/MultiplyPage';
import PlayPage from './pages/PlayPage';
import TrainingPage from './pages/TrainingPage';
import MyProfilePage from './pages/MyProfilePage';
import FixItPage from './pages/FixItPage';
import LeaderboardPage from './pages/LeaderboardPage';
import LoginPage from './pages/LoginPage';

export const RoutesConfig = (
   <>
      <Route path="/" element={<HomePage />} />
      <Route path="/learn-play" element={<LearnPlayPage />} />
      <Route path="/learn-play/learn" element={<LearnPage />} />
      <Route path="/learn-play/learn/:number" element={<MultiplyPage />} />
      <Route path="/learn-play/play" element={<PlayPage />} />
      <Route path="/learn-play/play/:numbers" element={<TrainingPage />} />
      <Route path="/my-profile" element={<MyProfilePage />} />
      <Route path="/fix-it" element={<FixItPage />} />
      <Route path="/leaderboard" element={<LeaderboardPage />} />
      <Route path="/login" element={<LoginPage />} />
   </>
);
