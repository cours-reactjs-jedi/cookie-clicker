function Bonus({nom, price, bonus, setNbr, setMultiplicateur, nbr, multiplicateur}) {

  function handleMultiplicateur() {
    if (nbr >= price) {
      const tmpMutplicateur = multiplicateur * bonus
      setMultiplicateur(tmpMutplicateur)
      setNbr(nbr - price)
    }
  }

  return (
      <button onClick={handleMultiplicateur} style={{width: "50%", height: "100px", fontSize:"25px"}}>
        {nom} - {price} - bonus * {bonus}
      </button>
  );
}

export default Bonus