function App() {
  //javascript
  const sumar = () => {
    const numero = 5;
    if (numero > 10) {
      console.log("GANASTE");
    } else {
      console.log("PERDISTE")
    }
  }

  sumar();
  //Inyeccion , interpolacion de String
  const edad =18;

  return (
    //sdsdsdsd
    <>
      <>
        {/* Un comentario JSX */}
        <h1>Hola A todos!</h1>
        {edad > 18 ? 'Eres mayo de edad':'No es mayor de edad'}
        <h1>{'Quiero Empanada con Speed'.toUpperCase()}</h1>
        {/* 
    Un comentario JSX
    en muchas
    líneas
      */}
      </>
      <>
        <h2>Tengo hambre!</h2>
      </>
    </>


  )
}

export default App
