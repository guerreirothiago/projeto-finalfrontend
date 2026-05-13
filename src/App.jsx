import { useEffect, useState } from 'react';
import './styles.css';

const asset = (path) => `${import.meta.env.BASE_URL}${path}`;

let slides = [
  {
    title: 'Especial Mês das Mães',
    description: 'Celebre o amor de mãe no coração da Amazônia, com o espetáculo do Encontro das Águas como cenário.',
    buttonText: 'Conheça os pacotes',
    buttonLink: '#maes',
    image: asset('img/hotel-na-amazonia1148x860.jpg'),
  },
  {
    title: 'Descanso e Natureza',
    description: 'Tranquilidade ribeirinha, culinária regional de primeira e o melhor jaraqui frito da região.',
    buttonText: 'Veja nossas suítes',
    buttonLink: '#acomodacoes',
    image: asset('img/hotel-na-amazonia-juma-amazon4.jpg'),
  },
  {
    title: 'Pacotes Exclusivos',
    description: 'Momentos inesquecíveis que ela merece. Conheça nossos mimos e passeios fluviais.',
    buttonText: 'Reserve agora',
    buttonLink: '#contato',
    image: asset('img/hotel-na-amazonia-juma-amazon-1147x860.jpg'),
  },
];

let features = [
  {
    title: 'Gastronomia Amazonense',
    text: 'Pratos feitos com ingredientes frescos da região, como peixe jaraqui, frutas silvestres e temperos típicos.',
    image: asset('img/Jaraqui.webp'),
    gallery: [
      asset('img/gastronomia-manauara-8.webp'),
      asset('img/pesca do pirarucu.jpeg'),
    ],
  },
  {
    title: 'Passeios Personalizados',
    text: 'Rotas de lancha, trilhas na mata e visitas guiadas ao Encontro das Águas e comunidades ribeirinhas.',
    image: asset('img/banho com boto.jpeg'),
  },
  {
    title: 'Ambiente Aconchegante',
    text: 'Suítes arejadas com redes na varanda, decoração em madeira natural e atendimento acolhedor.',
    image: asset('img/passeio-barco-3.jpg.webp'),
  },
];

let packages = [
  {
    title: 'Pacote Vitória-Régia',
    items: ['Fim de semana (Sáb - Dom)', 'Café da manhã com tapioca e frutas regionais', 'Passeio de lancha no Encontro das Águas', 'Cesta de bombons de cupuaçu'],
    buttonText: 'Reservar Vitória-Régia',
  },
  {
    title: 'Pacote Flor de Jaraqui',
    items: ['3 diárias em Suíte Master', 'Almoço especial: Jaraqui recheado', 'Massagem com óleos amazônicos', 'Drink de boas-vindas para a mãe'],
    buttonText: 'Reservar Flor de Jaraqui',
  },
];

let galleryImages = [
  asset('img/img1.jpg'),
  asset('img/img2.jpg'),
  asset('img/hotel-na-amazonia-mirante-gaviao-1-1431x860.jpg'),
  asset('img/hotel-na-amazonia1148x860.jpg'),
  asset('img/encontro das águas.jpeg'),
];

function App() {
  let [currentSlide, setCurrentSlide] = useState(0);
  let [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let interval = setInterval(() => {
      setCurrentSlide((current) => (current + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <nav>
        <div className="logo">
          <img src={asset('img/logo-encantodojaraqui.png')} alt="Logo Pousada" />
          <span className="logo-text">
            Encantos do <span className="jaraqui">Jaraqui</span>
          </span>
        </div>

        <button
          className="menu-toggle"
          aria-label="Abrir menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={menuOpen ? 'active' : ''}>
          <li>
            <a href="#inicio" onClick={() => setMenuOpen(false)}>
              Início
            </a>
          </li>
          <li>
            <a href="#sobre" onClick={() => setMenuOpen(false)}>
              Sobre
            </a>
          </li>
          <li>
            <a href="#maes" onClick={() => setMenuOpen(false)}>
              Especial Mães
            </a>
          </li>
          <li>
            <a href="#acomodacoes" onClick={() => setMenuOpen(false)}>
              Acomodações
            </a>
          </li>
          <li>
            <a href="#contato" onClick={() => setMenuOpen(false)}>
              Contato
            </a>
          </li>
        </ul>
      </nav>

      <header id="inicio">
        {slides.map((slide, index) => (
          <div
            key={slide.title}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url('${slide.image}')` }}
          >
            <div className="hero-content">
              <h1>{slide.title}</h1>
              <p>{slide.description}</p>
              <a href={slide.buttonLink} className="btn hero-btn">
                {slide.buttonText}
              </a>
            </div>
          </div>
        ))}
      </header>

      <main>
        <section id="sobre" className="section-glass">
          <h2>Sobre a Pousada</h2>
          <p>
            A <strong>Pousada Encantos do Jaraqui</strong> une charme ribeirinho, conforto contemporâneo e experiências autênticas na Amazônia. Nosso refúgio fica a poucos minutos do Encontro das Águas, em um ambiente perfeito para relaxar, observar a fauna e conhecer a cultura local.
          </p>

          <div className="feature-cards">
            {features.map((feature) => (
              <div key={feature.title} className="feature-card">
                <img src={feature.image} alt={feature.title} className="feature-img" />
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
                {feature.gallery && (
                  <div className="culinary-gallery">
                    {feature.gallery.map((src) => (
                      <img key={src} src={src} alt="Culinária" className="culinary-img" />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section id="maes" className="section-glass">
          <h2>Homenagem a Quem Nos Deu a Vida</h2>
          <p>
            Neste mês de maio, a <strong>Pousada Encantos do Jaraqui</strong> preparou uma experiência única para você presentear sua mãe. Desfrute da brisa do rio, de um cardápio regional assinado pelas nossas cozinheiras nativas e do contato revigorante com a floresta.
          </p>

          <div className="cards-container">
            {packages.map((pack) => (
              <div key={pack.title} className="card">
                <h3>{pack.title}</h3>
                <ul>
                  {pack.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <a href="#contato" className="btn">
                  {pack.buttonText}
                </a>
              </div>
            ))}
          </div>
        </section>

        <section id="acomodacoes" className="section-glass">
          <h2>Nossas Acomodações</h2>
          <p>
            Chalés rústicos e confortáveis, construídos com madeira de manejo sustentável e projetados para oferecer uma vista deslumbrante do rio. Todas as suítes possuem ar-condicionado, varanda com rede e mosquiteiros, unindo o conforto moderno ao charme ribeirinho.
          </p>

          <div className="gallery">
            {galleryImages.map((src) => (
              <img key={src} src={src} alt="Acomodações" className="gallery-img" />
            ))}
          </div>
        </section>

        <section id="contato" className="section-glass">
          <h2>Contato e Reservas</h2>
          <p>Para garantir sua estadia ou pedir um orçamento especial, fale com nossa equipe de atendimento cordial e treinada.</p>
          <div className="contact-grid">
            <div>
              <p><strong>Telefone:</strong> (92) 90000-0000</p>
              <p><strong>E-mail:</strong> contato@encantosdojaraqui.com.br</p>
              <p><strong>Localização:</strong> Manaus, AM</p>
            </div>
            <div>
              <p>Queremos preparar um pacote sob medida para sua família. Informe a data desejada e o número de hóspedes para receber sua proposta.</p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p><strong>Pousada Encantos do Jaraqui</strong> - Manaus, AM, Brasil</p>
        <p>Reserva e Atendimento: (92) 90000-0000 | contato@encantosdojaraqui.com.br</p>
        <p className="socials">Siga-nos: @encantosdojaraqui</p>
        <p style={{ marginTop: '20px', fontSize: '0.8rem', opacity: 0.7 }}>&copy; 2026 Todos os direitos reservados.</p>
      </footer>
    </>
  );
}

export default App;
