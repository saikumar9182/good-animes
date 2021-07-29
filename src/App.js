import logo from './logo.svg';
import{useState} from 'react'
import './App.css';

function App() {
  const [adv,setAdv]=useState(true);
  const [mys,setMys]=useState(false);
  const [spo,setSpo]=useState(false);
  const Adventure=(
    <div>
      <div className="border">
      <h3>Naruto</h3>
      <p>10/10</p>
      </div>
      <div className="border">
      <h3>One Piece</h3>
      <p>9/10</p>
      </div>
    </div>
  );
  const Mystery=(
    <div>
      <div className="border">
      <h3>Death Note</h3>
      <p>9/10</p>
      </div>
      <div className="border">
      <h3>Psycho pass</h3>
      <p>8/10</p>
      </div>
    </div>
  );

  const Sports=(
    <div>
      <div className="border">
      <h3>Haikyu</h3>
      <p>9/10</p>
      </div>
      <div className="border">
      <h3>Inazuma Eleven</h3>
      <p>9/10</p>
      </div>
    </div>
  );

  function buttonHandler(genre)
  {
    if(genre=="Adventure")
    {
      setAdv(true);
      setMys(false);
      setSpo(false);
    }
    else if(genre=="Mystery")
    {
      setAdv(false);
      setMys(true);
      setSpo(false);

    }
    else{
      setAdv(false);
      setMys(false);
      setSpo(true);

    }

    

  }
  return (
    <div className="App">
      <h1><i class="fa fa-video-camera" aria-hidden="true"></i> goodanimes</h1>
      <p>Checkout my favorite animes. Select a genre to get started</p>
      <button onClick={()=>buttonHandler("Adventure")}>Adventure</button>
      <button onClick={()=>buttonHandler("Mystery")} >Mystery</button>
      <button onClick={()=>buttonHandler("Sports")}>Sports</button>

      <hr/>

      {adv&&Adventure}
      {mys&&Mystery}
      {spo&&Sports}


      
    </div>
  );
}

export default App;
