import { useLanguage } from '../../context/LanguageContext';

function Design() {
  const { idioma } = useLanguage();

  return (
    <>
      <h3>{idioma === 'pt' ? 'Design Gráfico' : 'Graphic Design'}</h3>
      <img src="../../public/img/Gimp.png" style={{ width: '300px', maxWidth: '100%' }} />
      <h4>{idioma === 'pt' ? 'Ementa' : 'Syllabus'}</h4>
      <p>
        {idioma === 'pt'
          ? 'Princípios da comunicação visual aplicados ao meio digital. Tipografia. Cor. Imagemdigital: dimensão, resolução e formatos. Construção de imagens e composições. Usodesoftware para design gráfico e edição de imagens digitais.'
          : 'Principles of visual communication applied to the digital medium. Typography. Color. Digital image: dimension, resolution, and formats. Construction of images and compositions. Use of software for graphic design and digital image editing.'}
      </p>
      <h4>{idioma === 'pt' ? 'Duração' : 'Duration'}</h4>
      <p>30h</p>

    </>
  )

}

export default Design