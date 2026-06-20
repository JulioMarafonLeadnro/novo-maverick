import { useLanguage } from '../../context/LanguageContext';

function Javascript() {
  const { idioma } = useLanguage();

  return (
    <>
      <h3>JavaScript</h3>
      <p style={{ marginTop: '12px', lineHeight: '1.6' }}>
        {idioma === 'pt'
          ? 'O JavaScript (ou simplesmente JS) é a linguagem de programação que roda no navegador do usuário. Ela é responsável por tornar as páginas web dinâmicas e interativas, permitindo responder a cliques, validar formulários, carregar dados em segundo plano e criar comportamentos dinâmicos sem a necessidade de recarregar a página.'
          : 'JavaScript (or simply JS) is the programming language that runs in the user\'s browser. It is responsible for making web pages dynamic and interactive, allowing response to clicks, form validation, background data loading, and creating dynamic behaviors without the need to reload the page.'}
      </p>

      <h4 style={{ marginTop: '20px', marginBottom: '8px' }}>
        {idioma === 'pt' ? 'Características Principais:' : 'Main Characteristics:'}
      </h4>
      <ul style={{ paddingLeft: '20px', lineHeight: '1.8' }}>
        {idioma === 'pt' ? (
          <>
            <li><strong>Linguagem Dinâmica:</strong> Os tipos de dados são flexíveis e a linguagem roda diretamente no navegador.</li>
            <li><strong>Manipulação do DOM:</strong> Permite alterar dinamicamente o HTML e o CSS de uma página web.</li>
            <li><strong>Assincronismo:</strong> Permite fazer requisições a servidores (APIs) e carregar dados dinamicamente usando a API Fetch.</li>
          </>
        ) : (
          <>
            <li><strong>Dynamic Language:</strong> Data types are flexible and the language runs directly in the browser.</li>
            <li><strong>DOM Manipulation:</strong> Allows dynamic alteration of the HTML and CSS of a web page.</li>
            <li><strong>Asynchrony:</strong> Allows making requests to servers (APIs) and loading data dynamically using the Fetch API.</li>
          </>
        )}
      </ul>

    </>
  );
}

export default Javascript;