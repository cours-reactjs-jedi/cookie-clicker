import {useState} from "react" 
import Bonus from './Bonus';

function Hello({bonusList}) {

  const [multiplicateur, setMultiplicateur] = useState(1)
  const [nbr, setNbr] = useState(0)
  const [cout, setCout] = useState(10)
  const [opacity, setOpacity] = useState(0)

  const [size, setSize] = useState("300px")
  const [mousePos, setMousePos] = useState({clientX: 0, clientY: 0})


  function handleClick (e) {
    setNbr(nbr+1*multiplicateur)
    setSize("280px")
    setTimeout(() => {
      setSize("300px");
    }, 80);
    const {clientX, clientY} = e
    setMousePos({clientX, clientY})
    setOpacity(100)
    setTimeout(() => {
      setOpacity(0);
    }, 200);
  }

  return (
    <>
    <h1 style={{transition: "opacity 0.5s ease-in-out", opacity: opacity , position: "absolute", top: mousePos.clientY, left: mousePos.clientX}}>+ {multiplicateur}</h1>
    <div style={{height: "50vh", display: "flex", justifyContent: "center" }}>
      <img style={{cursor: "pointer", width:size, height: size}}  onClick={handleClick} src="./img/cookie.jpg" />
      </div>
      <br/>
      {bonusList.map((bonus, index) => (
        <Bonus
          key={index}
          nom={bonus.name}
          price={bonus.price}
          bonus={bonus.bonus}
          multiplicateur={multiplicateur}
          nbr={nbr}
          setNbr={setNbr}
          setMultiplicateur={setMultiplicateur}
        />
      ))}
      <h1>{nbr}</h1>
      <h4>{multiplicateur} cookies par clicks</h4>
    </>
  );
}

export default Hello;
