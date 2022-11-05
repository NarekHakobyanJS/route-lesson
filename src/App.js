import { NavLink, Routes, Route, Navigate } from 'react-router-dom';
//Routes-ը փոխարինումա ին Routes-ի մեջ դրվում են Route-րը
//Route-ը ունի 2 ատրիբուտ path-ցույցա տալիս ճանապարհը,իսկ element -ի
//մեջ դրվումա արդեն են Component-ը որը պետքա Render արվի երբ ճանապարհը համընկնումա
import './App.scss';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import HomePage from './pages/HomePage';
import NotefoundPage from './pages/NotefoundPage';
import Loyout from './components/Loyout';
import SinglePage from './pages/SinglePage';
import CreatePost from './pages/CreatePost';
import EditePost from './pages/EditePost';
import Login from './pages/Login';
import RequreAuth from './հօc/RequreAuth';
import { AuthProvider } from './հօc/AuthProvider';
//Navgiate նախատեսվածա redirec ի համար
function App() {
  return (
    <div className="app">
      <AuthProvider>
        <Routes>
          {/* <Loyout /> Component-ի Route հանդիսանումա ծնող մնացած Route-րի համար 
            Թե ինչի համարա նախատեսված  <Loyout /> Component-ը նկարագրությունը 
            կարդա այդ Component-ի մեջ...
        */}
          <Route path="/" element={<Loyout />}>
            {/* index ատրիբուտը նախատեսվածա նրա համար երբ path-ի ճանապարհը համընկնումա Ծնողինի հետ
          Երեխային տալիսենք index ատրիբուտը որի արդյունքում նա կաշխատի նույն ճանապարհով ինչ Ծնողը
          */}
            <Route index element={<HomePage />} />
            <Route path='/posts' element={<BlogPage />} />
            {/* Դինամիկ Պառամետրները  Route-րում գրվում է հետևյալ կերպ 
              նախ Url ի են հատվածը մեր օրինակում /posts/ որից հետո ։ դնում ու գրում ենք 
              դինամիկ պարամետրի անուն ը մեր օրինակում id
               <Route path='/posts/:id' element={<SinglePage />} />
               <Route path='/posts' element={<BlogPage />} />
          */}
            {/* Իսկ այդ դինամիկ պառամետրը մեր օրինակում :id կարողենք ստանալ <SinglePage /> Component ում 
            թե ինչպես մուտք գործի այդ Component - ը
          */}
            <Route path='/posts/:id' element={<SinglePage />} />
            {/* id ից հետո կարա էլի էջ լինի որը կտանի այլ Component մեր պարագայում <EditPost /> 
              Մանրամասն ուսումնասիրի <SinglePage /> -ը
          */}
            <Route path='/posts/:id/edit' element={<EditePost />} />
            {/* '/posts/new' կապ չունի դինամիկ պառամետրի հետ և նկարումա լրիվ ուրիշ Componnet */}
            <Route path='/posts/new' element={
              <RequreAuth>
                <CreatePost />
              </RequreAuth>
            } />
            <Route path='/login' element={<Login />} />
            <Route path='/about' element={<AboutPage />} />
            {/* <Navigate /> Comonent-ա որը նախատեսվածա Redirect-երի համար */}
            <Route path='/about-us' element={<Navigate to="/about" replace />} />
            {/* Երբ ինչ որ էջ չգտնվի մեր ծրագրում մենք տալիս ենք ունիկալ ատրիբուտ * որը մեզ կուղարկի դեպի <NotefoundPage /> 
          Տես ներքևում
          * - ունիկալ ատրիբուտ
          */}
            <Route path="*" element={<NotefoundPage />} />
          </Route>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
