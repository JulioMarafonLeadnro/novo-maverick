import { useLanguage } from '../../context/LanguageContext';

function Gsap() {
  const { idioma } = useLanguage();

  return (
    <>
      <h3>GSAP JS</h3>
      <p>
        {idioma === 'pt'
          ? 'GSAP (GreenSock Animation Platform) é uma biblioteca JavaScript utilizada para criar animações de alta performance em elementos HTML, SVG e Canvas.'
          : 'GSAP (GreenSock Animation Platform) is a JavaScript library used to create high-performance animations on HTML, SVG, and Canvas elements.'}
      </p>

      <h4>{idioma === 'pt' ? 'Principais recursos' : 'Key Features'}</h4>
      <ul>
        {idioma === 'pt' ? (
          <>
            <li>Animações suaves e otimizadas.</li>
            <li>Controle avançado de timelines.</li>
            <li>Compatível com React, Vue e outros frameworks.</li>
            <li>Suporte a scroll animations com ScrollTrigger.</li>
            <li>Grande flexibilidade para efeitos visuais.</li>
          </>
        ) : (
          <>
            <li>Smooth and optimized animations.</li>
            <li>Advanced timeline control.</li>
            <li>Compatible with React, Vue, and other frameworks.</li>
            <li>Support for scroll animations with ScrollTrigger.</li>
            <li>High flexibility for visual effects.</li>
          </>
        )}
      </ul>

      <h4>{idioma === 'pt' ? 'Exemplo básico' : 'Basic example'}</h4>
      <pre>
        <code>
          {`gsap.to(".box", {
  x: 200,
  duration: 2,
  rotation: 360
});`}
        </code>
      </pre>
    </>
  )

}

export default Gsap