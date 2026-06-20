import { useLanguage } from '../../context/LanguageContext';

function Ihc() {
  const { idioma } = useLanguage();

  return (
    <>
      <h3>{idioma === 'pt' ? 'Interface Humano Computador' : 'Human-Computer Interaction'}</h3>

      <h4>{idioma === 'pt' ? 'Ementa' : 'Syllabus'}</h4>
      <p>
        {idioma === 'pt'
          ? 'Design centrado no usuário. Estilos de interface. Projeto e prototipação de interfaceeinteração para múltiplos dispositivos. Definição e métodos para avaliaçãodeusabilidade e acessibilidade.'
          : 'User-centered design. Interface styles. Design and prototyping of interface and interaction for multiple devices. Definition and methods for usability and accessibility evaluation.'}
      </p>
      <h4>{idioma === 'pt' ? 'Duração' : 'Duration'}</h4>
      <p>30h</p>
    </>
  )

}

export default Ihc