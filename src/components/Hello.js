import {useState, useEffect} from "react" 
import { useSelector, useDispatch } from 'react-redux'
import {incremented, autoClick, displayExtra} from "../store/nbrStore"
import {BonusMultiplicateur, BonusAutoClick, BonusExtra} from './Bonus';

function Hello({bonusList}) {

  const infos = useSelector((state) => state)
  const dispatch = useDispatch()

  const [opacity, setOpacity] = useState(0)
  const [size, setSize] = useState("300px")
  const [mousePos, setMousePos] = useState({clientX: 0, clientY: 0})

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(autoClick())
    }, 1000);
    return () => {
      clearInterval(timer)
    }
  }, [dispatch, infos.autoClickRate])
  


  function handleClick (e) {
    dispatch(displayExtra())
    dispatch(incremented())
    console.log("nbr", infos);

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
    <h1 style={{transition: "opacity 0.5s ease-in-out", opacity: opacity , position: "absolute", top: mousePos.clientY, left: mousePos.clientX}}>+ {infos.multiplicateur* infos.extra}</h1>
    <div style={{height: "50vh", display: "flex", justifyContent: "center" }}>
      <img style={{cursor: "pointer", width:size, height: size}}  onClick={handleClick} src="./img/cookie.jpg" />
      </div>
      <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}} >
      <h1>{infos.nbr}</h1>
      <h4>{infos.multiplicateur} cookies par clicks</h4>
      <h4>{infos.autoClickRate} cookies auto par secondes</h4>
      </div>
      <br/>
      {infos.displayExtra ? <BonusExtra nom="bonus extra" bonus={100} time={5} /> : null}
      {bonusList.map((bonus, index) => (
        <BonusMultiplicateur
          key={index}
          nom={bonus.name}
          price={bonus.price}
          bonus={bonus.bonus}
        />
      ))}
      <BonusAutoClick nom="bonus auto" price={5} bonus={2} />
    </>
  );
}

export default Hello;
