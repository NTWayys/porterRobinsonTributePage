import React from "react"
import profileIMage from "./images/Porter_Robinson_profile_pic.png"
import Data from "./data"
function App() {
  const songArr = Data.data.songs

  const discographyArr = songArr.map(item => {
    return(
      <div className="card">
        <h4><a href={item.url} target="_blank">{item.name}</a></h4>
        <a href={item.url} target="_blank"><img src={item.thumbnail} /></a>
        <p>{item.desc}</p>
      </div>
    )    
  })
  const ReactComment = ({ text }) => {
    return <div dangerouslySetInnerHTML={{ __html: `<!-- ${text} -->` }}/>
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="targetName" >PORTER ROBINSON</h1>
        <ReactComment text={'Background image was found at https://wallpaperaccess.com/shelter-porter-robinson'}/>
      </header>
      <section className="about container">
      <img className="profilePic" src={profileIMage}/>
        <div className="aboutInfo">
          <h2>About</h2>
          <hr />
            <p>Porter Weston Robinson (born July 15, 1992) is an American DJ, record producer, musician, and singer from Chapel Hill, North Carolina. He signed to Skrillex's record label OWSLA at the age of 18, and released the extended play Spitfire in 2010. He appeared on Billboard's 21 Under 21 list in 2012.
            </p><br/><br/>
            <p>
            Robinson's debut full-length studio album, Worlds, was released in 2014 and peaked at number one on Billboard's Top Dance/Electronic Albums.
            He won the 2015 MTVU Artist of the Year, and made DJ Mag's Top 100 DJs list for seven consecutive years. At the inaugural Electronic Music Awards in 2017, he was nominated for Single of the Year and Live Act of the Year, both with Madeon, for the single <span>Shelter</span> and the <span>Shelter Live Tour</span>, respectively. 
            </p><br/><br/>
            <p>
              He began producing music under the alias Virtual Self in 2017, releasing his self-titled EP in the same year.
              <br /><br /><a href="#">I recommend checking out he's Youtube</a>
              <br /><a href="#">or he's wiki</a>
            </p><br/><br/>
          </div>
      </section>
      <section className="discography container">
        <h2>Discography</h2>
          <hr />
          <h3>These are my top 6 favourite songs he has released</h3>
          <div className="cardCaro">
          {discographyArr}
          </div>
      </section>
      <footer className="footer"><span>This site was made on 15-July-22 using React</span></footer>
    </div>
  );
}

export default App;
