import { useLanguage } from '../../context/LanguageContext';

function Tailwind() {
  const { idioma } = useLanguage();

  return (
    <>
      <h3>Tailwind CSS</h3>
      {idioma === 'pt' ? (
        <>
          <p>
            O <strong>Tailwind CSS</strong> é um framework CSS utilitário (utility-first) que permite
            estilizar elementos diretamente no HTML através de classes pré-definidas
            de baixo nível.
            Diferente do Bootstrap, ele não oferece componentes prontos, mas sim utilitários
            granulares para construir interfaces totalmente personalizadas de forma rápida e flexível.
          </p>
          <p>
            Ele é amplamente utilizado no mercado por startups, empresas de tecnologia e
            desenvolvedores freelancers para criar desde landing pages e portfólios até
            dashboards administrativos, e-commerces e aplicações web complexas. Sua popularidade
            cresceu especialmente em projetos que utilizam frameworks como <strong>React</strong>,{' '}
            <strong>Next.js</strong> e <strong>Vue</strong>, pois se integra facilmente ao fluxo
            de desenvolvimento moderno. O Tailwind é ideal para quem busca agilidade na
            estilização sem abrir mão do controle total sobre o design da interface. Saiba mais no{' '}
            <a
              href="https://tailwindcss.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              site oficial
            </a>.
          </p>
        </>
      ) : (
        <>
          <p>
            <strong>Tailwind CSS</strong> is a utility-first CSS framework that allows styling
            elements directly in HTML through low-level pre-defined classes. Unlike Bootstrap,
            it does not offer ready-made components, but rather granular utilities to build
            fully customized interfaces quickly and flexibly.
          </p>
          <p>
            It is widely used in the market by startups, technology companies, and freelance
            developers to create everything from landing pages and portfolios to administrative
            dashboards, e-commerce, and complex web applications. Its popularity grew especially
            in projects using frameworks like <strong>React</strong>, <strong>Next.js</strong>,
            and <strong>Vue</strong>, as it easily integrates into the modern development workflow.
            Tailwind is ideal for those looking for agility in styling without giving up full
            control over the interface design. Learn more on the{' '}
            <a
              href="https://tailwindcss.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              official website
            </a>.
          </p>
        </>
      )}
    </>
  );
}

export default Tailwind;
