import './App.css';
import Logo from './components/Logo';
import Utils from './Utils';
import SideNavIcon from './components/SideNavIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass,faUser, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faBell, faEnvelope} from '@fortawesome/free-regular-svg-icons'
import CommunitiesFeed from './components/CommunitiesFeed';
import CoverPicture from './Icons/cover-picture.jpg';
import ProfileAvatar from './components/ProfileAvatar';
import ProfilePicCard from './components/ProfilePicCard';
import Headline from './components/Headline';
import About from './components/About';

function App() {
  const NavArray= Utils().NavArray();
  const communitiesFeedArray= Utils().communitiesFeedAarray();
  const footerArray = Utils().footerArray();
  const headlines = Utils().headlines();

  return (
    <div className="App">
      <div className = "navbars">

        <div className='navLogo'>
          <Logo/>
        </div>

        <div className='navbarsIcons'>
          <span><FontAwesomeIcon icon={faMagnifyingGlass} /> <input type = "text"/> </span>
          <span className='navbarsIconsImages' value = "notification"><FontAwesomeIcon icon={faBell}/></span>
          <span className='navbarsIconsImages' value = "email"><FontAwesomeIcon icon={faEnvelope}/></span>
          <span className='navbarsIconsImages navbarProfile' value = "profile"><ProfileAvatar/></span>
        </div>
      </div>

      <div className='mainDiv'>
        <div className='sidebars'>

          <div className='sidenavs'>
            {
              NavArray.map((nav)=>{
                return <SideNavIcon key = {`nav-${nav.id}`} name = {nav.name} id={nav.id - 1}/>
              })
            }
          </div>

          <div className='communitiesFeedMainDiv'>
           <span style={{fontFamily: "sans-serif", fontWeight: "bold"}}>Communities Feed</span>
           {
             communitiesFeedArray.map((feed)=>{
              return <CommunitiesFeed key = {feed.id} name = {feed.name} id = {feed.id - 1} members={feed.memebers}/>
             })
           }
           <span style={{marginLeft: "18%", fontSize: "small", fontFamily: "sans-serif", fontWeight: "bold", color: "grey", paddingTop: "2%", cursor: "pointer"}}>Show 5 more <FontAwesomeIcon icon={faChevronRight}/></span>
          </div>

          <div className='sideFooter'>
           <div className='sideFooterContainer'>
            {
              footerArray.map((arr)=>{
                return <div className='sideFooterKeys' key = {arr.id}>{arr.name}</div>
              })
            }
           </div>
           <div className='sideFooterCopyright'>
            <span style = {{fontWeight: "bold", color: "blueviolet", cursor: "pointer"}}>spehre.io</span>
            <span>&#169; {new Date().getFullYear()}</span>
           </div>
          </div>

        </div>

        <div className='mainBox'>
          <div className='CoverPage'>
            <img className='coverImage' src = {CoverPicture}/>
          </div>
          <div className='profileDiv'>
              <div className='profilePicContainer'>
                <ProfileAvatar/>
              </div>
          </div>
          <div className='mainProfileDiv'>
            <div className='profilePicCardContainer'>
              <ProfilePicCard/>
            </div>
            <div className='headlineMainDiv'>
              <div className='headlineInnerDiv'>
                {
                  headlines.map((headline)=>{
                    return <Headline key = {headline.id} name = {headline.name} id = {headline.id}/>
                  })
                }
              </div>
              <div>
               <About/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
