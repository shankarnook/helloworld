import logo from './logo.svg';
import './App.css';
import Car from './Car';
import Navbar from './Navbar';
import Myarray from './Myarray';
import Home from './Home';
import About from './About';
import Dashbord from './Dashbord';
import {BrowserRouter,Router,Routes,Route} from 'react-router-dom'
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;


function App() {
  return (
    <div className="App">
    <Layout>
      <Sider>
      <Car />
      </Sider>
      <Layout>
        <Header><BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/Home" exact element={<Home />} />
          <Route path="/About" exact element={<About />} />
          <Route path="/Dashbord" exact element={<Dashbord />} />
        </Routes>
    
      </BrowserRouter></Header>
        <Content><Myarray/></Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
    </div>
  );
}

export default App;
