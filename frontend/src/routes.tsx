import { Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TrainPlayPage from './pages/TrainPlayPage';
import MyProfilePage from './pages/MyProfilePage';
import FixItPage from './pages/FixItPage';
import LeaderboardPage from './pages/LeaderboardPage';
import LoginPage from './pages/LoginPage';

export const RoutesConfig = (
   <>
      <Route path="/" element={<HomePage />} />
      <Route path="/train-play" element={<TrainPlayPage />} />
      <Route path="/my-profile" element={<MyProfilePage />} />
      <Route path="/fix-it" element={<FixItPage />} />
      <Route path="/leaderboard" element={<LeaderboardPage />} />
      <Route path="/login" element={<LoginPage />} />
   </>
);
