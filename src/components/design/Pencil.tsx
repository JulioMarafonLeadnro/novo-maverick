import { useLanguage } from '../../context/LanguageContext';

function Pencil() {
  const { idioma } = useLanguage();

  return (
    <>
      <h3>Pencil</h3>

      <img src="/img/Pencil.png" alt="Pencil Layout" style={{ width: '300px', maxWidth: '100%' }} />
      <a href="http://pencil.dev" target="_blank" rel="noopener noreferrer">pencil.dev</a>


    </>
  )

}

export default Pencil