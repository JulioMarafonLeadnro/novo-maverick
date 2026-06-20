import { useLanguage } from '../../context/LanguageContext';

function Html() {
  const { idioma } = useLanguage();

  return (
    <>
      <h3>HTML</h3>
      <p>
        {idioma === 'pt' ? (
          <>
            O HTML (HyperText Markup Language) é a linguagem de marcação padrão usada para 
            estruturar e apresentar conteúdos na web. Em sua versão mais atual, o <strong>HTML5</strong>, 
            ele permite a integração nativa de multimídia (como áudio e vídeo), além de fornecer 
            elementos semânticos que melhoram a acessibilidade e o ranqueamento (SEO) de 
            sites e aplicações web. Saiba mais na{' '}
            <a 
              href="https://developer.mozilla.org/pt-BR/docs/Web/HTML" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              documentação oficial da MDN
            </a>.
          </>
        ) : (
          <>
            HTML (HyperText Markup Language) is the standard markup language used to structure 
            and present content on the web. In its most current version, <strong>HTML5</strong>, 
            it allows native integration of multimedia (such as audio and video), in addition to providing 
            semantic elements that improve accessibility and search engine optimization (SEO) of 
            websites and web applications. Learn more in the{' '}
            <a 
              href="https://developer.mozilla.org/en-US/docs/Web/HTML" 
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

export default Html;