export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <p className="footer-section-title">Restaurante</p>
      </div>
      <div>
        <p className="footer-section-title">Localização</p>
        <p className="footer-section-content">Rua Ipsum, 22</p>
        <p className="footer-section-content">Aliquam id lacus diam</p>
        <p className="footer-section-content">Proin aliquam</p>
        <a className="footer-link" href="www.maps.google.com">
          Google maps
        </a>
      </div>
      <div>
        <p className="footer-section-title">Horário</p>
        <p className="footer-section-content">Seg - Sex: 11h - 23h</p>
        <p className="footer-section-content">Sáb - Dom: 11h - 22h</p>
        <a className="footer-link" href="www.reservas.com">
          Reserve sua mesa
        </a>
      </div>
      <div>
        <p className="footer-section-title">Contato</p>
        <p className="footer-section-content">Email</p>
        <p className="footer-section-content">lorem@ipsum.dolor</p>
        <button className="button button-white">Entrar em contato</button>
      </div>
    </footer>
  );
}
