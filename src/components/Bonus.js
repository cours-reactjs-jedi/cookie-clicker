import { useDispatch } from 'react-redux'
import {buy, extra} from "../store/nbrStore"
function Bonus({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      style={{ width: "50%", height: "100px", fontSize: "25px" }}
    >
      {children}
    </button>
  );
}

function BonusMultiplicateur({
  nom,
  price,
  bonus,
}) {
  const dispatch = useDispatch()
  const handleMultiplicateur = () => {
    dispatch(buy({price, multiplicateur: bonus}))
  };

  return (
    <Bonus onClick={handleMultiplicateur}>
      {nom} - {price} - bonus * {bonus}
    </Bonus>
  );
}

function BonusAutoClick({
  bonus,
  nom,
  price,
}) {
  const dispatch = useDispatch()
  const handleAutoClick = () => {
    dispatch(buy({price, autoClickRate: bonus}))
  };

  return (
    <Bonus onClick={handleAutoClick}>
      {nom} - {price} - {bonus} per seconds
    </Bonus>
  );
}

function BonusExtra({ nom,bonus, time,  }) {
    const dispatch = useDispatch()
  const handleExtra = () => {
    dispatch(extra({extra: bonus}))

  };

  return (
    <Bonus onClick={handleExtra}>
      {nom} - bonus * {bonus} pendant {time} secondes
    </Bonus>
  );
}

export { BonusExtra, BonusAutoClick, BonusMultiplicateur };
