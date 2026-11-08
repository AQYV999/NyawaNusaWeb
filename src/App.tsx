import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MotionConfig, AnimatePresence } from 'framer-motion';
import { lazy, Suspense } from 'react';
import { AppLayout } from './components/AppLayout';
import { Home } from './pages/Home';

const Store = lazy(() => import('./pages/Store').then(m => ({ default: m.Store })));
const Vote = lazy(() => import('./pages/Vote').then(m => ({ default: m.Vote })));
const Leaderboard = lazy(() => import('./pages/Leaderboard').then(m => ({ default: m.Leaderboard })));
const Rules = lazy(() => import('./pages/Rules').then(m => ({ default: m.Rules })));
const News = lazy(() => import('./pages/News').then(m => ({ default: m.News })));
const NewsDetail = lazy(() => import('./pages/NewsDetail').then(m => ({ default: m.NewsDetail })));
const Staff = lazy(() => import('./pages/Staff').then(m => ({ default: m.Staff })));
const Support = lazy(() => import('./pages/Support').then(m => ({ default: m.Support })));
const Wiki = lazy(() => import('./pages/Wiki').then(m => ({ default: m.Wiki })));
const NotFound = lazy(() => import('./pages/NotFound').then(m => ({ default: m.NotFound })));

function RouteFallback() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4" role="status" aria-live="polite">
      <div className="w-10 h-10 rounded-full border-2 border-primary/30 border-t-primary animate-spin" aria-hidden="true" />
      <span className="text-sm text-slate-500 font-medium tracking-wide">Memuat halaman...</span>
    </div>
  );
}

export function App() {
  return (
    <MotionConfig reducedMotion="user">
      <BrowserRouter>
        <AnimatePresence mode="wait">
          <AppLayout>
            <Suspense fallback={<RouteFallback />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/store" element={<Store />} />
                <Route path="/vote" element={<Vote />} />
                <Route path="/leaderboard" element={<Leaderboard />} />
                <Route path="/rules" element={<Rules />} />
                <Route path="/news" element={<News />} />
                <Route path="/news/:id" element={<NewsDetail />} />
                <Route path="/staff" element={<Staff />} />
                <Route path="/support" element={<Support />} />
                <Route path="/wiki" element={<Wiki />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </AppLayout>
        </AnimatePresence>
      </BrowserRouter>
    </MotionConfig>
  );
}
