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
      <strong>Description:</strong><p>Naruto is a Japanese manga series written and illustrated by Masashi Kishimoto. It tells the story of Naruto Uzumaki, a young ninja who seeks recognition from his peers and dreams of becoming the Hokage, the leader of his village.</p>
      <strong>Rating:</strong>
      <p>10/10</p>
      </div>
      <div className="border">
      <h3>Jujutsu Kaisen</h3>
        <strong>Description:</strong>
        <p>The story follows high school student Yuji Itadori as he joins a secret organization of Jujutsu Sorcerers in order to kill a powerful Curse named Ryomen Sukuna, of whom Yuji becomes the host</p>
      
      <strong>Rating:</strong>
      <p>9/10</p>
      </div>
      <div className="border">
      <h3>One Piece</h3>
      <strong>Description:</strong>
      <p>The series focuses on Monkey D. Luffy, a young man who, inspired by his childhood idol and powerful pirate "Red Haired" Shanks, sets off on a journey from the East Blue Sea to find the titular treasure and proclaim himself the King of the Pirates</p>
      <strong>Rating:</strong>
      <p>9/10</p>
      </div>
    </div>
  );
  const Mystery=(
    <div>
      <div className="border">

      <h3>Death Note</h3>
      <strong>Description:</strong>
      <p>The story follows Light Yagami, a teen genius who discovers a mysterious notebook: the "Death Note", which belonged to the Shinigami Ryuk, and grants the user the supernatural ability to kill anyone whose name is written in its pages.</p>
      <strong>Rating:</strong>
      <p>9/10</p>
      </div>
      <div className="border">
        
      <h3>Psycho pass</h3>
        <strong>Description:</strong>
        <p>Psycho-Pass is seen through the eyes of Akane Tsunemori, a rookie Inspector within Unit One (aka Division One) of the Ministry of Welfare Public Safety Bureau's Criminal Investigation Department. Shinya Kogami is an Enforcer under her watch during her first mission.</p>

      <strong>Rating:</strong>
      <p>8/10</p>
      </div>
      <div className="border">
      <h3>Paranoia agent</h3>
      <strong>Description:</strong>
      <p>Paranoia Agent  is a Japanese anime television series created by director Satoshi Kon and produced by Madhouse about a social phenomenon in Musashino, Tokyo caused by a juvenile serial assailant named Lil' Slugger (the English equivalent to Shōnen Bat, which translates to "Bat Boy").</p>
      <strong>Rating:</strong>
      <p>8/10</p>
      </div>
    </div>
    
  );

  const Sports=(
    <div>
      <div className="border">
      <h3>Haikyu</h3>
      <strong>Description:</strong>
      <p>Haikyu!! is a Japanese manga series written and illustrated by Haruichi Furudate. The story follows Shōyō Hinata, a boy determined to become a great volleyball player despite his small stature. ... Both the manga and anime have been met with positive response.</p>
      <strong>Rating:</strong>
      <p>9/10</p>
      </div>
      <div className="border">
      <h3>Inazuma Eleven</h3>
      <strong>Description:</strong>
      <p>Inazuma Eleven is an association football-themed media franchise created by Level-5. The franchise began with the release of Inazuma Eleven in 2008, with the game series selling over eight million copies worldwide by 2016.[1] In addition to video games, the franchise also has a manga series and a number of other animated television series and films</p>
      <strong>Rating:</strong>
      <p>9/10</p>
      </div>
      <div className="border">

      <h3>Ping Pong</h3>
      <strong>Description:</strong>
      <p>Ping Pong is a Japanese manga series written and illustrated by Taiyō Matsumoto about table tennis. It was serialized in Shogakukan's seinen manga magazine Big Comic Spirits from 1996 to 1997 and collected in five tankōbon volumes.</p>
      <strong>Rating:</strong>
      <p>8/10</p>
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
