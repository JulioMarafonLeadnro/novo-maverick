import { useLanguage } from '../../context/LanguageContext';

function Bootstrap() {
  const { idioma } = useLanguage();

  return (
    <>
      <h3>Bootstrap</h3>
      <p>
        {idioma === 'pt' ? (
          <>
            O Bootstrap é um dos frameworks front-end mais populares do mundo, utilizado 
            para o desenvolvimento rápido de interfaces web responsivas e focadas em 
            dispositivos móveis (mobile-first). Em sua versão mais recente, o <strong>Bootstrap 5</strong>, 
            ele oferece um poderoso sistema de grid e uma vasta biblioteca de componentes 
            pré-estilizados prontas para uso (como botões, barras de navegação e modais), 
            agora utilizando JavaScript puro sem a dependência do jQuery. Saiba mais no{' '}
            <a 
              href="https://getbootstrap.com/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              site oficial
            </a>.
          </>
        ) : (
          <>
            Bootstrap is one of the most popular front-end frameworks in the world, used 
            for rapid development of responsive and mobile-first web interfaces. In its 
            most recent version, <strong>Bootstrap 5</strong>, it offers a powerful grid system 
            and a vast library of pre-styled components ready for use (such as buttons, navigation 
            bars, and modals), now using vanilla JavaScript without the dependency of jQuery. Learn 
            more on the{' '}
            <a 
              href="https://getbootstrap.com/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              official website
            </a>.
          </>
        )}
      </p>
    </>
  );
}

export default Bootstrap;