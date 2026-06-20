import { useLanguage } from '../../context/LanguageContext';

function Figma() {
  const { idioma } = useLanguage();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'left', gap: '1rem' }}>
      <h3>Figma</h3>
      <img src="/img/Figma.jpg" alt="Figma Layout" style={{ width: '300px', maxWidth: '100%' }} />
      <a href="https://www.figma.com/" target="_blank" rel="noopener noreferrer">
        Figma
      </a>

      <h4>Figma</h4>
      <p>
        {idioma === 'pt'
          ? 'O Figma é uma plataforma colaborativa baseada em nuvem usada para design de interfaces (UI) e experiência do usuário (UX). Ele permite criar protótipos interativos, wireframes e designs gráficos para sites e aplicativos, além de contar com o FigJam para brainstorming e organização.'
          : 'Figma is a cloud-based collaborative platform used for interface design (UI) and user experience (UX). It allows creating interactive prototypes, wireframes, and graphic designs for websites and applications, as well as featuring FigJam for brainstorming and organization.'}
      </p>
    </div >

  )

}

// Autor: Everson Mayer (https://github.com/everctba)
// Data: 2026-05-29

export default Figma