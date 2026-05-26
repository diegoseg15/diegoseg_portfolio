export const metadata = {
  title: "Eliminación de cuenta y datos | Rimind",
  description:
    "Página para solicitar la eliminación de cuenta y datos asociados en Rimind.",
};

export default function DeleteAccountPage() {
  return (
    <main style={styles.page}>
      <article style={styles.container}>
        <header style={styles.header}>
          <p style={styles.kicker}>Rimind</p>
          <h1 style={styles.title}>Eliminación de cuenta y datos</h1>
          <p style={styles.description}>
            Rimind permite a los usuarios solicitar la eliminación de su cuenta
            y de los datos asociados.
          </p>
        </header>

        <section style={styles.section}>
          <h2 style={styles.subtitle}>Cómo solicitar la eliminación</h2>

          <p style={styles.paragraph}>
            Para solicitar la eliminación de tu cuenta, envía un correo a:
          </p>

          <p style={styles.contactBox}>
            <a href="mailto:diegofersv@gmail.com" style={styles.link}>
              diegofersv@gmail.com
            </a>
          </p>

          <p style={styles.paragraph}>
            <strong>Asunto recomendado:</strong>
            <br />
            Solicitud de eliminación de cuenta - Rimind
          </p>

          <p style={styles.paragraph}>
            En el mensaje incluye el correo electrónico asociado a tu cuenta de
            Rimind.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.subtitle}>Datos que se eliminarán</h2>

          <p style={styles.paragraph}>
            Una vez recibida la solicitud, se eliminarán los datos asociados a
            la cuenta, incluyendo:
          </p>

          <ul style={styles.list}>
            <li>Cuenta de usuario registrada en Firebase Authentication.</li>
            <li>Correo electrónico asociado a la cuenta.</li>
            <li>Identificador interno de usuario.</li>
            <li>Cumpleaños guardados por el usuario.</li>
            <li>
              Fechas, nombres, notas y recordatorios asociados a la cuenta.
            </li>
          </ul>
        </section>

        <section style={styles.section}>
          <h2 style={styles.subtitle}>Periodo de procesamiento</h2>

          <p style={styles.paragraph}>
            La solicitud será revisada y procesada en un plazo razonable,
            normalmente dentro de 30 días.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.subtitle}>Datos que podrían conservarse</h2>

          <p style={styles.paragraph}>
            Podrían conservarse datos mínimos únicamente si son necesarios por
            motivos legales, seguridad, prevención de abuso o cumplimiento
            normativo.
          </p>

          <p style={styles.paragraph}>
            Si los datos están almacenados únicamente en el dispositivo del
            usuario, pueden eliminarse desde la aplicación, borrando los
            registros guardados o desinstalando la app.
          </p>
        </section>
      </article>
    </main>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    padding: "120px 20px 48px",
    color: "#111827",
    fontFamily:
      "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  },

  container: {
    width: "100%",
    maxWidth: "860px",
    margin: "0 auto",
    border: "1px solid #e5e7eb",
    borderRadius: "28px",
    padding: "48px",
    boxShadow: "0 24px 80px rgba(15, 23, 42, 0.08)",
    background: "rgba(255, 255, 255, 0.94)",
  },

  header: {
    marginBottom: "40px",
    paddingBottom: "28px",
    borderBottom: "1px solid #e5e7eb",
  },

  kicker: {
    margin: "0 0 8px",
    color: "#f97316",
    fontWeight: 700,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    fontSize: "13px",
  },

  title: {
    margin: "0 0 18px",
    fontSize: "42px",
    lineHeight: 1.1,
    letterSpacing: "-0.04em",
    color: "#0f172a",
  },

  description: {
    margin: 0,
    fontSize: "17px",
    lineHeight: 1.7,
    color: "#475569",
  },

  section: {
    marginTop: "32px",
  },

  subtitle: {
    margin: "0 0 14px",
    fontSize: "24px",
    lineHeight: 1.25,
    color: "#0f172a",
    letterSpacing: "-0.02em",
  },

  paragraph: {
    margin: "0 0 14px",
    fontSize: "16px",
    lineHeight: 1.75,
    color: "#334155",
  },

  list: {
    margin: "0 0 18px",
    paddingLeft: "22px",
    color: "#334155",
    fontSize: "16px",
    lineHeight: 1.75,
  },

  contactBox: {
    margin: "16px 0 20px",
    padding: "18px 20px",
    borderRadius: "18px",
    background: "#fff7ed",
    border: "1px solid #fed7aa",
    fontSize: "16px",
  },

  link: {
    color: "#f97316",
    textDecoration: "none",
    fontWeight: 700,
  },
};
