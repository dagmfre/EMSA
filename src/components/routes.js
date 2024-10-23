import { lazy } from "react";

const Home = lazy(() => import("./Home"));
const OurStory = lazy(() => import("./OurStory"));
const Committees = lazy(() => import("./Committees"));
const TrainersPool = lazy(() => import("./TrainersPool"));
const Score = lazy(() => import("./committees/Score"));
const Scome = lazy(() => import("./committees/Scome"));
const Scoph = lazy(() => import("./committees/Scoph"));
const Scope = lazy(() => import("./committees/Scope"));
const Scora = lazy(() => import("./committees/Scora"));
const Scorp = lazy(() => import("./committees/Scorp"));
const Lc = lazy(() => import("./Lc"));
const News = lazy(() => import("./News"));
const SignUp = lazy(() => import("./SignUp"));
const SignIn = lazy(() => import("./SignIn"));
const AddNews = lazy(() => import("./NewsForm"));
const CertificateForm = lazy(() => import("./CertificateForm"));
const CertificateView = lazy(() => import("./CertificateView"));
const JoinUs = lazy(() => import("./JoinUs"));
const GetCertificatesForm = lazy(() => import("./GetCertificatesForm"));

const routes = [
  { path: '/', element: Home },
  { path: '/about', element: OurStory },
  { path: '/committees', element: Committees },
  { path: '/trainers-pool', element: TrainersPool },
  { path: '/committees/score', element: Score },
  { path: '/committees/scome', element: Scome },
  { path: '/committees/scoph', element: Scoph },
  { path: '/committees/scope', element: Scope },
  { path: '/committees/scora', element: Scora },
  { path: '/committees/scorp', element: Scorp },
  { path: '/local-chapters', element: Lc },
  { path: '/news', element: News },
  { path: '/signup', element: SignUp },
  { path: '/login', element: SignIn },
  { path: '/news-form', element: AddNews },
  { path: '/certificate-form', element: CertificateForm },
  { path: '/certificate-view', element: CertificateView },
  { path: '/get-certificate', element: GetCertificatesForm },
  { path: '/join-us', element: JoinUs },
  { path: '*', element: () => <h1>404 Not Found</h1> },  
];

export default routes;