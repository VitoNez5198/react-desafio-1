import './App.css';

import Header from './Components/Header';
import Card from './Components/Card';
import Footer from './Components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header title="Galería de imagenes con React" />
      <div className="row">

        <Card
          title="Gato Azul Ruso"
          description="El azul ruso es una de las razas de gato doméstico más antiguas y populares del mundo. Es reconocida por todas las organizaciones felinológicas internacionales. Son gatos de tamaño medio y pelo corto plateado, fácilmente distinguibles de otras razas. El azul ruso es famoso por ser un gato inteligente y afectuoso, que disfruta del contacto con los humanos y es ideal para la vida en familia"
          photo="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Hembra_Azul_Ruso.jpg/800px-Hembra_Azul_Ruso.jpg" />

        <Card
          title="Gato Angora turco"
          description="El angora turco es una raza de gato doméstico. Los angoras son la raza más antigua, originaria de la región de Anatolia en Turquía.
          Pese a ello, el término angora ha sido aplicado para designar a cualquier gato de pelo largo, negro y lacio, sin importar su origen o raza. Así, muchos gatos comunes de pelo largo, o incluso mayas sin pedigrí, se denominan 'angoras'."
          photo="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Turkse_angora.jpg/800px-Turkse_angora.jpg" />
        <Card
          title="Sphynx"
          description="El sphynx o gato esfinge (también llamado de forma común pero erróneamente gato egipcio) es una raza de gato originaria de Canadá. La característica más llamativa de esta raza es la aparente ausencia de pelaje y su aspecto delgado y esbelto. Aunque los ejemplares de la raza parecen ser gatos sin pelos, hay que destacar que verdaderamente no son gatos pelados, sino que presentan la piel cubierta de una capa de vello muy fino, corto y parejo, casi imperceptible a la vista o al tacto."
          photo="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Sphinx2_July_2006.jpg/320px-Sphinx2_July_2006.jpg" />

      </div>

      <Footer
        text="Galería creada para Desafío Latam ©, 2023 Victor Martinez, todos los derechos reservados." />

    </div>
  )

}

export default App;
