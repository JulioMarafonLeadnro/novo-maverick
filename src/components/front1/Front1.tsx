import { useLanguage } from '../../context/LanguageContext';

function Front1() {
  const { idioma } = useLanguage();

  return (
    
    
    <>

        <h3>
          {idioma === 'pt' ? (
            <>Desenvolvimento <i>Web Front-End</i> 1</>
          ) : (
            <>Web Front-End Development 1</>
          )}
        </h3>

        <h4>{idioma === 'pt' ? 'Ementa' : 'Syllabus'}</h4>
        <p>
          {idioma === 'pt'
            ? 'Linguagens de marcação moderna para estruturação de conteúdo para Web. Linguagem de marcação moderna para estilização de conteúdo na Web. Boas práticas e padrões de apresentação, acessibilidade e responsividade dos conteúdos Web.'
            : 'Modern markup languages for web content structuring. Modern markup language for web content styling. Best practices and standards of presentation, accessibility, and responsiveness of Web content.'}
        </p>

        <h4>{idioma === 'pt' ? 'Duração' : 'Duration'}</h4>
        <p>60h</p>

        <a href="https://tsi.td.utfpr.edu.br/sites/default/files/2023-08/PPC_TSI-TD_2022_v1.pdf" target="_blank">
          {idioma === 'pt' ? 'Referência do conteúdo - PPC TSI' : 'Content Reference - PPC TSI'}
        </a>

      
    </>
  );
}

export default Front1;
