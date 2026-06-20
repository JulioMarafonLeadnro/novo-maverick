import { useLanguage } from '../../context/LanguageContext';

function Front2() {
  const { idioma } = useLanguage();

  return (
    <>
      <h3>
        {idioma === 'pt' ? (
          <>Desenvolvimento <i>Web Front-End</i> 2</>
        ) : (
          <>Web Front-End Development 2</>
        )}
      </h3>

      <h4>{idioma === 'pt' ? 'Ementa' : 'Syllabus'}</h4>
      <p>
        {idioma === 'pt'
          ? 'Desenvolvimento de interfaces de usuário para aplicativos web e móveis. Utilização de frameworks e bibliotecas para otimizar a experiência do usuário.'
          : 'Development of user interfaces for web and mobile applications. Use of frameworks and libraries to optimize user experience.'}
      </p>
      <h4>{idioma === 'pt' ? 'Duração' : 'Duration'}</h4>
      <p>60h</p>

      <h4>{idioma === 'pt' ? 'Objetivos de Aprendizagem' : 'Learning Objectives'}</h4>
      <ul>
        {idioma === 'pt' ? (
          <>
            <li>Compreender os fundamentos da linguagem JavaScript e sua aplicação no desenvolvimento web.</li>
            <li>Manipular o DOM para criar páginas dinâmicas e interativas.</li>
            <li>Desenvolver interfaces componentizadas utilizando o framework React.</li>
            <li>Criar animações e transições de alta performance com a biblioteca GSAP.</li>
            <li>Aplicar boas práticas de organização de código e padrões de projeto no front-end.</li>
          </>
        ) : (
          <>
            <li>Understand the fundamentals of the JavaScript language and its application in web development.</li>
            <li>Manipulate the DOM to create dynamic and interactive pages.</li>
            <li>Develop componentized interfaces using the React framework.</li>
            <li>Create high-performance animations and transitions with the GSAP library.</li>
            <li>Apply good practices of code organization and design patterns in the front-end.</li>
          </>
        )}
      </ul>

      <h4>{idioma === 'pt' ? 'Conteúdos:' : 'Contents:'}</h4>
      <ul>
        {idioma === 'pt' ? (
          <>
            <li>
              <strong>JavaScript:</strong> Variáveis, tipos de dados, operadores,
              estruturas de controle, funções, arrays, objetos, manipulação do DOM,
              eventos e programação assíncrona.
            </li>
            <li>
              <strong>React:</strong> Componentes funcionais, JSX, props, state,
              hooks (useState, useEffect, useRef), roteamento com React Router,
              gerenciamento de estado e ciclo de vida de componentes.
            </li>
            <li>
              <strong>GSAP:</strong> Tweens, timelines, easing, animações de
              propriedades CSS/SVG, ScrollTrigger e integração com React.
            </li>
          </>
        ) : (
          <>
            <li>
              <strong>JavaScript:</strong> Variables, data types, operators,
              control structures, functions, arrays, objects, DOM manipulation,
              events, and asynchronous programming.
            </li>
            <li>
              <strong>React:</strong> Functional components, JSX, props, state,
              hooks (useState, useEffect, useRef), routing with React Router,
              state management, and component lifecycle.
            </li>
            <li>
              <strong>GSAP:</strong> Tweens, timelines, easing, CSS/SVG properties
              animations, ScrollTrigger, and React integration.
            </li>
          </>
        )}
      </ul>

      <h4>{idioma === 'pt' ? 'Ferramentas e Tecnologias' : 'Tools and Technologies'}</h4>
      <ul>
        {idioma === 'pt' ? (
          <>
            <li><strong>JavaScript</strong>: Linguagem base para interatividade no navegador.</li>
            <li><strong>React</strong>: Biblioteca para construção de interfaces componentizadas.</li>
            <li><strong>GSAP</strong>: Plataforma de animações de alta performance.</li>
            <li><strong>Node.js / npm</strong>: Ambiente e gerenciador de pacotes para o ecossistema JavaScript.</li>
          </>
        ) : (
          <>
            <li><strong>JavaScript</strong>: Base language for interactivity in the browser.</li>
            <li><strong>React</strong>: Library for building componentized interfaces.</li>
            <li><strong>GSAP</strong>: High-performance animation platform.</li>
            <li><strong>Node.js / npm</strong>: Environment and package manager for the JavaScript ecosystem.</li>
          </>
        )}
      </ul>
    </>
  )

}

export default Front2