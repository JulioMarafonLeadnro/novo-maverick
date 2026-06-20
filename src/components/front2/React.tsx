import { useLanguage } from '../../context/LanguageContext';

function React() {
  const { idioma } = useLanguage();

  return(
    <>
      <h3>React JS</h3>
    </>
  )

}

export default React