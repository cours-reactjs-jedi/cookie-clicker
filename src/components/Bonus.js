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
  setNbr,
  setMultiplicateur,
  nbr,
  multiplicateur,
}) {

  const handleMultiplicateur = () => {
    if (nbr >= price) {
      const tmpMutplicateur = multiplicateur * bonus;
      setMultiplicateur(tmpMutplicateur);
      setNbr(nbr - price);
    }
  }

  return (
    <Bonus onClick={handleMultiplicateur}>
      {nom} - {price} - bonus * {bonus}
    </Bonus>
  );
}


function BonusAutoClick({bonus, nbr, setNbr,nom, price, autoClickRate, setAutoClickRate}) {

  const handleAutoClick = () => {
    if (nbr >= price) {
      const tmpAutoClickRate = autoClickRate + bonus;
      setAutoClickRate(tmpAutoClickRate);
      setNbr(nbr - price);
    }
  }

  return (
    <Bonus onClick={handleAutoClick}>
      {nom} - {price} -  {bonus} per seconds
    </Bonus>
  );
}

export { BonusMultiplicateur, BonusAutoClick };
