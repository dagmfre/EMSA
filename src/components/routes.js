import Home from "./Home";
import OurStory from "./OurStory";
import Committees from "./Committees";
import TrainersPool from "./TrainersPool";
import Score from "./committees/Score";
import Scome from "./committees/Scome";
import Scoph from "./committees/Scoph";
import Scope from "./committees/Scope";
import Scora from "./committees/Scora";
import Scorp from "./committees/Scorp";
import Lc from "./Lc";
import News from "./News";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import AddNews from "./NewsForm";
import CertificateForm from "./CertificateForm";
import CertificateView from "./CertificateView";

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
  { path: '*', element: () => <h1>404 Not Found</h1> },  
];

export default routes;
