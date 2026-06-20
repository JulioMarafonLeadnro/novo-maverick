import { useLanguage } from '../context/LanguageContext';

function Slides() {
  const { idioma } = useLanguage();

  return (
    <>
      <h3>{idioma === 'pt' ? 'Slides das Disciplinas' : 'Course Slides'}</h3>

    
      <a href="http://maverick.td.utfpr.edu.br/slides/sw1" target="_blank">Front 1</a>
      
      <a href="http://maverick.td.utfpr.edu.br/slides/sw2" target="_blank">Front 2</a>
     
      <a href="http://maverick.td.utfpr.edu.br/slides/piw" target="_blank">{idioma === 'pt' ? 'IHC' : 'HCI'}</a>
    </>
  )

}

export default Slides