import { useEffect, useState } from 'react';

let asset = (path) => `${import.meta.env.BASE_URL}${path}`;

let slides = [
  {
    eyebrow: 'Especial Mês das Mães',
    title: 'Encantos do Jaraqui',
    description:
      'Um refúgio amazônico para celebrar mães com rio, floresta, gastronomia regional e o Encontro das Águas como cenário.',
    image: asset('img/encontro das águas.jpeg'),
    action: 'Ver pacote especial',
    href: '#maes',
  },
  {
    eyebrow: 'Dia das Mães',
    title: 'Mãe e filha na Amazônia',
    description:
      'Um presente cheio de afeto para viver dias de descanso, fotos lindas e memória de família.',
    image: asset('img/Mês das Mães foto mãe e filha.png'),
    action: 'Reservar homenagem',
    href: '#contato',
  },
  {
    eyebrow: 'Promoção de Maio',
    title: 'Minimalista, rosa e especial',
    description:
      'Uma experiência delicada para celebrar mães com conforto, carinho e sabores regionais.',
    image: asset('img/Mês das mães Dia das mães Minimalista Rosa.png'),
    action: 'Ver especial mães',
    href: '#maes',
  },
];

let experiences = [
  {
    title: 'Passeio no Encontro das Águas',
    text: 'Roteiro de barco para contemplar o encontro do Rio Negro com o Solimões, com paradas para fotos e observação da paisagem.',
    image: asset('img/encontro das águas.jpeg'),
  },
  {
    title: 'Café regional na varanda',
    text: 'Tapioca, frutas amazônicas, sucos naturais e aquele começo de manhã calmo que combina com rede e brisa de rio.',
    image: asset('img/café da manhã regional.jpg'),
  },
  {
    title: 'Gastronomia do Jaraqui',
    text: 'Pratos com peixe fresco, temperos locais e acompanhamentos que valorizam a cozinha manauara.',
    image: asset('img/Jaraqui.webp'),
  },
  {
    title: 'Pesca do pirarucu',
    text: 'Vivência guiada para conhecer um dos peixes mais impressionantes da Amazônia, com segurança e acompanhamento local.',
    image: asset('img/pesca do pirarucu.jpeg'),
  },
  {
    title: 'Passeio de barco pela região',
    text: 'Navegação tranquila por paisagens amazônicas, ideal para relaxar, observar a natureza e registrar momentos em família.',
    image: asset('img/passeio-barco-3.jpg.webp'),
  },
  {
    title: 'Banho com boto',
    text: 'Experiência marcante nas águas amazônicas, feita com orientação e cuidado para aproximar visitantes da cultura local.',
    image: asset('img/banho com boto.jpeg'),
  },
];

let rooms = [
  {
    title: 'Suíte Rio Negro',
    description: 'Ideal para casais, com cama queen, ar-condicionado, rede e vista para área verde.',
    image: asset('img/imagens da pousada.jpg'),
  },
  {
    title: 'Chalé Família',
    description: 'Espaço amplo para descanso em grupo, com varanda privativa e atmosfera ribeirinha.',
    image: asset('img/hotel-na-amazonia-juma-amazon4.jpg'),
  },
  {
    title: 'Suíte Mirante',
    description: 'Mais privacidade, madeira natural e vista elevada para aproveitar o fim de tarde.',
    image: asset('img/hotel-na-amazonia-mirante-gaviao-1-1431x860.jpg'),
  },
  {
    title: 'Apartamento Jardim',
    description: 'Opção prática e confortável para quem busca descanso, ar-condicionado e acesso fácil às áreas comuns.',
    image: asset('img/hotel-na-amazonia1148x860.jpg'),
  },
  {
    title: 'Chalé Amazônia',
    description: 'Ambiente acolhedor com clima rústico, varanda para relaxar e espaço pensado para dias de pausa.',
    image: asset('img/hotel-na-amazonia-juma-amazon-1147x860.jpg'),
  },
  {
    title: 'Suíte Jaraqui',
    description: 'Acomodação aconchegante para casal ou pequena família, com decoração regional e conforto para a estadia.',
    image: asset('img/img1.jpg'),
  },
];

let motherPackage = [
  'Duas diárias para mãe e acompanhante',
  'Café regional especial com frutas e tapioca',
  'Almoço amazônico com jaraqui ou pirarucu',
  'Passeio de barco no Encontro das Águas',
  'Mimo floral e sobremesa de cupuaçu',
];

function App() {
  let [currentSlide, setCurrentSlide] = useState(0);
  let [menuOpen, setMenuOpen] = useState(false);
  let [mensagem, setMensagem] = useState('');

  useEffect(() => {
    let timer = setInterval(() => {
      setCurrentSlide((current) => (current + 1) % slides.length);
    }, 5500);

    return () => clearInterval(timer);
  }, []);

  let goToSlide = (index) => {
    setCurrentSlide(index);
  };

  let closeMenu = () => {
    setMenuOpen(false);
  };

  let enviarFormulario = (e) => {
    e.preventDefault();

    setMensagem('Sua mensagem foi enviada com sucesso! Entraremos em contato em breve.');

    setTimeout(() => {
      setMensagem('');
    }, 3000);
  };

  return (
    <div
      className="site-shell"
      style={{ '--waters-bg': `url("${asset('img/encontro das águas.jpeg')}")` }}
    >
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
        <div className="container-fluid">
          <a className="brand navbar-brand" href="#inicio" onClick={closeMenu}>
            <img src={asset('img/logo-encantodojaraqui.png')} alt="Pousada Encantos do Jaraqui" />
            <span>
              <strong>Encantos</strong>
              do Jaraqui
            </span>
          </a>

          <button
            className="menu-button navbar-toggler"
            type="button"
            aria-label="Abrir menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>

          <div className={`nav-links navbar-nav ${menuOpen ? 'is-open' : ''}`}>
            <a className="nav-link" href="#sobre" onClick={closeMenu}>Sobre</a>
            <a className="nav-link" href="#maes" onClick={closeMenu}>Mês das Mães</a>
            <a className="nav-link" href="#experiencias" onClick={closeMenu}>Experiências</a>
            <a className="nav-link" href="#acomodacoes" onClick={closeMenu}>Acomodações</a>
            <a className="nav-link" href="#contato" onClick={closeMenu}>Contato</a>
          </div>
        </div>
      </nav>

      <header className="hero" id="inicio">
        {slides.map((slide, index) => (
          <article
            className={`hero-slide ${index === currentSlide ? 'is-active' : ''}`}
            key={slide.title}
            style={{ backgroundImage: `url("${slide.image}")` }}
            aria-hidden={index !== currentSlide}
          >
            <div className="hero-content">
              <p className="eyebrow">{slide.eyebrow}</p>
              <h1>{slide.title}</h1>
              <p>{slide.description}</p>
              <a className="primary-button btn btn-lg" href={slide.href}>
                {slide.action}
              </a>
            </div>
          </article>
        ))}

        <div className="slide-controls" aria-label="Selecionar slide">
          {slides.map((slide, index) => (
            <button
              className={index === currentSlide ? 'is-active' : ''}
              type="button"
              key={slide.title}
              aria-label={`Ir para ${slide.title}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </header>

      <main>
        <section className="intro-section" id="sobre">
          <div>
            <h2>Um descanso com alma amazônica</h2>
          </div>
          <p>
            A Pousada Encantos do Jaraqui combina hospedagem acolhedora, comida regional e
            experiências de rio para quem deseja viver Manaus com calma, beleza e cuidado.
          </p>
        </section>

        <section className="mothers-section" id="maes">
          <div className="mothers-copy">
            <h2>Mês das Mães no Encontro das Águas</h2>
            <p>
              Uma programação afetiva para presentear quem sempre foi porto seguro. O pacote
              especial une descanso, sabores amazônicos e um passeio inesquecível pelas águas.
            </p>
            <ul>
              {motherPackage.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <a className="primary-button btn" href="#contato">Reservar homenagem</a>
          </div>
          <div className="mothers-card">
            <video
              src={asset('img/Promoção desconto dia das mães presente rosa vídeo story.mp4')}
              title="Promoção do mês das mães"
              autoPlay
              muted
              loop
              playsInline
            />
            <div>
              <span>Maio</span>
              <strong>Momentos para guardar</strong>
            </div>
          </div>
        </section>

        <section className="content-section" id="experiencias">
          <div className="section-heading">
            <h2>Experiências da pousada</h2>
          </div>
          <div className="card-grid">
            {experiences.map((item) => (
              <article className="image-card card h-100 border-0" key={item.title}>
                <img className="card-img-top" src={item.image} alt={item.title} />
                <div className="card-body">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section" id="acomodacoes">
          <div className="section-heading">
            <h2>Acomodações</h2>
          </div>
          <div className="room-grid">
            {rooms.map((room) => (
              <article className="room-card card h-100 border-0" key={room.title}>
                <img className="card-img-top" src={room.image} alt={room.title} />
                <div className="card-body">
                  <h3>{room.title}</h3>
                  <p>{room.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="booking-section" id="contato">
          <div>
            <p className="section-kicker">Reservas</p>
            <h2>Planeje sua estadia</h2><br></br>
            <p>
               Fale com a equipe da pousada para montar uma proposta para casal, família ou
              comemoração especial de Dia das Mães.
            </p>
          </div>
          <div className="contact-panel">
            <form className="contact-form" id="contact-form" onSubmit={enviarFormulario}>
              {mensagem && (
                <div className="alert alert-success">
                  {mensagem}
                </div>
              )}
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Nome</label>
                <input type="text" className="form-control" id="name" required />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" required />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Mensagem</label>
                <textarea className="form-control" id="message" rows="4" required></textarea>
              </div>

              <button type="submit" className="primary-button btn">Enviar mensagem</button>
            </form>
          </div>
        </section>
      </main>

      <footer class="footer">
        <img src="img/logo-encantodojaraqui.png" alt="Pousada Encantos do Jaraqui"/>
          <div>
            <strong>Pousada Encantos do Jaraqui</strong><p>
              Natureza, acolhimento e sabores amazônicos em Manaus.</p>
          </div>
          <span>@encantosdojaraqui</span>
      </footer>

      <footer class="footer2 text-center">
        Todos os direitos reservados - 2026
      </footer>
    </div>
  );
}

export default App;
