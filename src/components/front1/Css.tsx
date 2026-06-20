import { useLanguage } from '../../context/LanguageContext';

function Css() {
  const { idioma } = useLanguage();

  return (
    <>
      <h3>CSS</h3>
      <p>
        {idioma === 'pt' ? (
          <>
            O CSS (Cascading Style Sheets) é a linguagem de folhas de estilo usada para 
            descrever a apresentação e o design visual de páginas web estruturadas em HTML. 
            Em sua evolução atual, conhecida como <strong>CSS3</strong>, ele permite criar layouts complexos, 
            animações interativas e designs responsivos que se adaptam perfeitamente a 
            diferentes tamanhos de tela (computadores, tablets e celulares). Saiba mais na{' '}
            <a 
              href="https://developer.mozilla.org/pt-BR/docs/Web/CSS" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              documentação oficial da MDN
            </a>.
          </>
        ) : (
          <>
            CSS (Cascading Style Sheets) is the stylesheet language used to describe 
            the presentation and visual design of web pages structured in HTML. In its 
            current evolution, known as <strong>CSS3</strong>, it allows creating complex layouts, 
            interactive animations, and responsive designs that adapt perfectly to different 
            screen sizes (computers, tablets, and cell phones). Learn more in the{' '}
            <a 
              href="https://developer.mozilla.org/en-US/docs/Web/CSS" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              official MDN documentation
            </a>.
          </>
        )}
      </p>
    </>
  );
}

export default Css;