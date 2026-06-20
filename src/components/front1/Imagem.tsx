import { useLanguage } from '../../context/LanguageContext';

function Img() {
  const { idioma } = useLanguage();

  return (
    <>
      <h3>{idioma === 'pt' ? 'Edição de Imagens' : 'Image Editing'}</h3>
      <img src="../../public/img/Gimp2.png" style={{ width: '300px', maxWidth: '100%' }} />
      <p>
        {idioma === 'pt' ? (
          <>
            A edição de imagens é o processo de modificar, otimizar e transformar fotografias e gráficos 
            digitais. No contexto do desenvolvimento web e de interfaces, ela é fundamental para ajustar 
            resoluções, tratar imagens e criar ativos gráficos que compõem o design visual de uma aplicação. 
            Para essa finalidade, utilizamos o <strong>GIMP (GNU Image Manipulation Program)</strong>, um 
            editor de gráficos rasterizados gratuito e de código aberto (<strong>open-source</strong>). Ele é 
            amplamente utilizado para retoque de fotos, composição de imagens e criação de texturas, 
            destacando-se na comunidade acadêmica e profissional como uma das principais e mais robustas 
            alternativas ao Adobe Photoshop. Saiba mais no{' '}
            <a 
              href="https://www.gimp.org/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              site oficial do GIMP
            </a>.
          </>
        ) : (
          <>
            Image editing is the process of modifying, optimizing, and transforming digital photographs 
            and graphics. In the context of web and interface development, it is fundamental to adjust 
            resolutions, treat images, and create graphic assets that make up the visual design of an application. 
            For this purpose, we use <strong>GIMP (GNU Image Manipulation Program)</strong>, a free and 
            open-source raster graphics editor. It is widely used for photo retouching, image composition, 
            and texture creation, standing out in the academic and professional community as one of the main 
            and most robust alternatives to Adobe Photoshop. Learn more on the{' '}
            <a 
              href="https://www.gimp.org/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              GIMP official website
            </a>.
          </>
        )}
      </p>
    </>
  );
}

export default Img;