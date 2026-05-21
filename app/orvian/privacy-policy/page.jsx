export const metadata = {
  title: "Política de Privacidad | Orvian",
  description:
    "Política de Privacidad de Orvian, aplicación de finanzas personales desarrollada por Diego Segovia.",
};

export default function PrivacyPolicyPage() {
  return (
    <main style={styles.page}>
      <article style={styles.container}>
        <header style={styles.header}>
          <p style={styles.kicker}>Orvian</p>
          <h1 style={styles.title}>Política de Privacidad</h1>

          <div style={styles.meta}>
            <p>
              <strong>Fecha de vigencia:</strong> 21/05/2026
            </p>
            <p>
              <strong>Aplicación:</strong> Orvian
            </p>
            <p>
              <strong>Desarrollador:</strong> Diego Segovia
            </p>
            <p>
              <strong>Sitio web del desarrollador:</strong>{" "}
              <a href="https://portfolio-77060.web.app/" style={styles.link}>
                https://portfolio-77060.web.app/
              </a>
            </p>
            <p>
              <strong>Contacto de privacidad:</strong>{" "}
              <a href="mailto:diegofersv@gmail.com" style={styles.link}>
                diegofersv@gmail.com
              </a>
            </p>
          </div>
        </header>

        <section style={styles.section}>
          <h2 style={styles.subtitle}>1. Introducción</h2>
          <p style={styles.paragraph}>
            Esta Política de Privacidad explica cómo Orvian trata la información
            que el usuario registra dentro de la aplicación.
          </p>
          <p style={styles.paragraph}>
            Orvian es una aplicación de finanzas personales diseñada para ayudar
            al usuario a registrar, organizar y analizar información relacionada
            con cuentas, movimientos, presupuestos, transferencias, recordatorios
            y reportes financieros personales.
          </p>
          <p style={styles.paragraph}>
            Orvian <strong>no es una entidad financiera</strong>,{" "}
            <strong>no presta servicios bancarios</strong>,{" "}
            <strong>no administra fondos</strong>,{" "}
            <strong>no realiza pagos</strong>,{" "}
            <strong>no concede créditos</strong>,{" "}
            <strong>no ofrece inversiones</strong> y{" "}
            <strong>
              no custodia dinero, criptomonedas ni activos del usuario
            </strong>
            . La aplicación funciona como una herramienta de registro,
            organización y análisis personal.
          </p>
          <p style={styles.paragraph}>
            Al usar Orvian, el usuario declara haber leído y entendido esta
            Política de Privacidad.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.subtitle}>2. Responsable del tratamiento</h2>
          <p style={styles.paragraph}>
            Para efectos de esta Política de Privacidad, el responsable del
            tratamiento de los datos personales asociados a la aplicación es:
          </p>
          <p style={styles.paragraph}>
            <strong>Diego Segovia</strong>
            <br />
            Sitio web:{" "}
            <a href="https://portfolio-77060.web.app/" style={styles.link}>
              https://portfolio-77060.web.app/
            </a>
            <br />
            Correo de contacto:{" "}
            <a href="mailto:diegofersv@gmail.com" style={styles.link}>
              diegofersv@gmail.com
            </a>
          </p>
          <p style={styles.paragraph}>
            Las solicitudes relacionadas con privacidad, acceso, corrección,
            eliminación u oposición al tratamiento de datos podrán enviarse al
            correo indicado anteriormente.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.subtitle}>
            3. Información que puede registrar el usuario
          </h2>
          <p style={styles.paragraph}>
            Orvian permite que el usuario registre voluntariamente información
            financiera personal dentro de la aplicación. Esta información puede
            incluir:
          </p>
          <ul style={styles.list}>
            <li>
              Nombres de cuentas financieras, billeteras, efectivo, alcancías,
              tarjetas, préstamos u otros registros creados por el usuario.
            </li>
            <li>
              Saldos, monedas, montos, ingresos, egresos y transferencias.
            </li>
            <li>
              Categorías, etiquetas, fechas, estados y notas asociadas a
              movimientos financieros.
            </li>
            <li>
              Presupuestos, recordatorios, frecuencia de recordatorios y montos
              relacionados.
            </li>
            <li>
              Configuraciones de la aplicación, como tema visual, estado de
              onboarding y preferencias locales.
            </li>
            <li>
              Información de suscripción o plan dentro de la aplicación, cuando
              aplique.
            </li>
            <li>Archivos importados por el usuario, como documentos CSV.</li>
            <li>
              Archivos exportados por el usuario, como reportes CSV o Excel.
            </li>
          </ul>
          <p style={styles.paragraph}>
            El usuario decide qué información ingresar. Orvian no exige que se
            registren datos bancarios reales, claves bancarias, contraseñas de
            bancos, números completos de tarjetas, credenciales de exchanges,
            frases semilla, claves privadas ni información de acceso a servicios
            financieros externos.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.subtitle}>4. Información sensible o financiera</h2>
          <p style={styles.paragraph}>
            La información financiera que el usuario registra en Orvian puede
            ser considerada información personal o sensible según la legislación
            aplicable de cada país.
          </p>
          <p style={styles.paragraph}>
            Por esta razón, se recomienda al usuario evitar ingresar información
            innecesariamente detallada, como:
          </p>
          <ul style={styles.list}>
            <li>Contraseñas.</li>
            <li>PIN bancarios.</li>
            <li>Números completos de tarjetas.</li>
            <li>Claves privadas.</li>
            <li>Frases semilla de billeteras cripto.</li>
            <li>Códigos de seguridad.</li>
            <li>Credenciales de bancos, exchanges o billeteras digitales.</li>
          </ul>
          <p style={styles.paragraph}>
            Orvian está diseñada para registrar movimientos, saldos y
            organización financiera personal, no para almacenar credenciales
            financieras.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.subtitle}>5. Finalidades del tratamiento</h2>
          <p style={styles.paragraph}>
            La información registrada en Orvian se utiliza para las siguientes
            finalidades:
          </p>
          <ul style={styles.list}>
            <li>
              Permitir al usuario crear y administrar cuentas financieras
              personales.
            </li>
            <li>Registrar ingresos, egresos, transferencias y movimientos.</li>
            <li>
              Calcular saldos, reportes, estadísticas y resúmenes financieros.
            </li>
            <li>Crear y administrar presupuestos.</li>
            <li>
              Crear recordatorios relacionados con pagos, cobros, suscripciones,
              ahorros u otros eventos financieros.
            </li>
            <li>Permitir importación de archivos CSV seleccionados.</li>
            <li>
              Permitir exportación de reportes en formatos compatibles, como CSV
              o Excel.
            </li>
            <li>Guardar preferencias de configuración de la aplicación.</li>
            <li>Mejorar la experiencia de uso dentro del dispositivo.</li>
          </ul>
          <p style={styles.paragraph}>
            Orvian no utiliza la información financiera del usuario para vender
            datos, crear perfiles publicitarios, otorgar créditos, evaluar
            riesgo financiero, tomar decisiones automatizadas con efectos legales
            ni compartir información con entidades financieras.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.subtitle}>6. Almacenamiento de la información</h2>
          <p style={styles.paragraph}>
            En la versión actual, Orvian funciona principalmente en modo local.
            Esto significa que la información registrada por el usuario se
            guarda en el dispositivo donde se utiliza la aplicación.
          </p>
          <p style={styles.paragraph}>
            La aplicación puede utilizar almacenamiento local del dispositivo
            para guardar cuentas, movimientos, transferencias, presupuestos,
            recordatorios, configuración y datos relacionados con la experiencia
            de uso.
          </p>
          <p style={styles.paragraph}>
            Algunos elementos técnicos o de seguridad, cuando existan, pueden
            almacenarse mediante mecanismos seguros del sistema operativo.
          </p>
          <p style={styles.paragraph}>
            Si en futuras versiones Orvian incorpora sincronización en la nube,
            cuentas de usuario, autenticación remota, copias de seguridad
            online, analítica, publicidad o servicios externos, esta Política de
            Privacidad deberá actualizarse antes de activar dichas funciones.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.subtitle}>7. Permisos del dispositivo</h2>
          <p style={styles.paragraph}>
            Orvian puede solicitar ciertos permisos del dispositivo únicamente
            cuando sean necesarios para funciones específicas.
          </p>

          <h3 style={styles.smallTitle}>Notificaciones</h3>
          <p style={styles.paragraph}>
            La aplicación puede solicitar permiso para enviar notificaciones
            locales relacionadas con recordatorios creados por el usuario. Estas
            notificaciones se utilizan para avisar sobre pagos, cobros,
            suscripciones, ahorros, inversiones, compras u otros eventos
            configurados por el usuario.
          </p>
          <p style={styles.paragraph}>
            El usuario puede aceptar, rechazar o desactivar las notificaciones
            desde la configuración del dispositivo.
          </p>

          <h3 style={styles.smallTitle}>Archivos y documentos</h3>
          <p style={styles.paragraph}>
            Orvian puede permitir que el usuario seleccione archivos CSV desde
            su dispositivo para importar información financiera. La aplicación
            solo accede al archivo que el usuario selecciona voluntariamente.
          </p>

          <h3 style={styles.smallTitle}>Compartir archivos</h3>
          <p style={styles.paragraph}>
            Orvian puede generar archivos de exportación, como reportes CSV o
            Excel, y permitir que el usuario los comparta mediante las opciones
            disponibles en su dispositivo.
          </p>
          <p style={styles.paragraph}>
            Cuando el usuario decide compartir un archivo exportado, el
            tratamiento posterior de ese archivo dependerá de la aplicación,
            servicio o destinatario seleccionado por el usuario.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.subtitle}>8. Compartición de datos con terceros</h2>
          <p style={styles.paragraph}>
            Orvian no vende, alquila ni comercializa los datos personales o
            financieros del usuario.
          </p>
          <p style={styles.paragraph}>
            En la versión actual, la información registrada por el usuario se
            mantiene en el dispositivo, salvo en los siguientes casos:
          </p>
          <ul style={styles.list}>
            <li>Cuando el usuario exporta un archivo y decide compartirlo.</li>
            <li>
              Cuando el usuario selecciona manualmente un archivo para
              importarlo.
            </li>
            <li>
              Cuando el sistema operativo o la tienda de aplicaciones procesan
              información técnica necesaria para instalar, ejecutar o distribuir
              la app.
            </li>
            <li>Cuando sea requerido por una obligación legal aplicable.</li>
          </ul>
          <p style={styles.paragraph}>
            Orvian no comparte información financiera del usuario con bancos,
            cooperativas, exchanges, procesadores de pago, agencias de crédito,
            anunciantes ni redes publicitarias.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.subtitle}>9. Servicios de terceros</h2>
          <p style={styles.paragraph}>
            La aplicación puede depender de servicios técnicos del sistema
            operativo, Google Play, Expo, Android, iOS u otros componentes
            necesarios para su funcionamiento, distribución, notificaciones
            locales, almacenamiento interno o manejo de archivos.
          </p>
          <p style={styles.paragraph}>
            Estos servicios pueden tratar información técnica conforme a sus
            propias políticas de privacidad y condiciones.
          </p>
          <p style={styles.paragraph}>
            Orvian no controla las prácticas de privacidad de servicios externos
            utilizados por el sistema operativo, la tienda de aplicaciones o
            aplicaciones de terceros seleccionadas por el usuario para compartir
            archivos.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.subtitle}>10. Conservación de datos</h2>
          <p style={styles.paragraph}>
            Los datos registrados en Orvian se conservan mientras el usuario
            mantenga la información dentro de la aplicación o mientras la
            aplicación permanezca instalada en el dispositivo.
          </p>
          <p style={styles.paragraph}>
            El usuario puede eliminar información manualmente desde las funciones
            disponibles dentro de la app, o eliminar todos los datos locales
            mediante la opción correspondiente en Ajustes, si está disponible.
          </p>
          <p style={styles.paragraph}>
            También puede eliminar los datos desinstalando la aplicación, sin
            perjuicio de que el sistema operativo conserve ciertos respaldos,
            cachés o copias de seguridad según la configuración del dispositivo.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.subtitle}>11. Eliminación de datos</h2>
          <p style={styles.paragraph}>
            El usuario puede solicitar orientación sobre eliminación de datos
            escribiendo al correo de contacto indicado en esta Política:
          </p>
          <p style={styles.paragraph}>
            <a href="mailto:diegofersv@gmail.com" style={styles.link}>
              diegofersv@gmail.com
            </a>
          </p>
          <p style={styles.paragraph}>
            Cuando los datos estén almacenados únicamente en el dispositivo del
            usuario, el desarrollador no podrá acceder directamente a ellos ni
            eliminarlos remotamente. En ese caso, la eliminación deberá
            realizarse desde la aplicación, desde los ajustes del dispositivo o
            mediante la desinstalación de la app.
          </p>
          <p style={styles.paragraph}>
            Si en futuras versiones se habilita sincronización en la nube o
            cuentas de usuario, se incorporarán mecanismos adicionales para
            solicitar eliminación remota de datos personales.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.subtitle}>12. Seguridad</h2>
          <p style={styles.paragraph}>
            Orvian aplica medidas razonables para proteger la información del
            usuario dentro del contexto de una aplicación móvil de uso personal.
          </p>
          <p style={styles.paragraph}>
            Sin embargo, ningún sistema es completamente seguro. La seguridad
            también depende del dispositivo del usuario, su sistema operativo,
            sus métodos de bloqueo, sus copias de seguridad, las aplicaciones
            instaladas y las prácticas personales de seguridad.
          </p>
          <p style={styles.paragraph}>Se recomienda al usuario:</p>
          <ul style={styles.list}>
            <li>
              Proteger su dispositivo con contraseña, PIN, huella o
              reconocimiento facial.
            </li>
            <li>No compartir archivos exportados con personas no autorizadas.</li>
            <li>
              No registrar claves bancarias, frases semilla, contraseñas o
              códigos de seguridad.
            </li>
            <li>Mantener actualizado el sistema operativo.</li>
            <li>Descargar la aplicación únicamente desde canales oficiales.</li>
          </ul>
        </section>

        <section style={styles.section}>
          <h2 style={styles.subtitle}>13. Derechos del usuario</h2>
          <p style={styles.paragraph}>
            Según la legislación aplicable, el usuario puede tener derechos
            relacionados con sus datos personales, incluyendo:
          </p>
          <ul style={styles.list}>
            <li>Acceder a sus datos.</li>
            <li>Solicitar corrección o actualización.</li>
            <li>Solicitar eliminación.</li>
            <li>Oponerse a determinados tratamientos.</li>
            <li>Solicitar portabilidad cuando aplique.</li>
            <li>
              Retirar consentimiento cuando el tratamiento dependa del
              consentimiento.
            </li>
            <li>Solicitar información sobre el uso de sus datos.</li>
            <li>
              Presentar reclamos ante la autoridad competente de protección de
              datos.
            </li>
          </ul>
          <p style={styles.paragraph}>
            En Ecuador, estos derechos se relacionan con la Ley Orgánica de
            Protección de Datos Personales. En la Unión Europea, pueden derivarse
            del Reglamento General de Protección de Datos. En México, pueden
            corresponder a derechos ARCO. En Colombia, pueden relacionarse con
            habeas data. En Brasil, pueden relacionarse con la LGPD. En Estados
            Unidos, ciertos derechos pueden aplicar según el estado de
            residencia, como California.
          </p>
          <p style={styles.paragraph}>
            Para ejercer derechos o realizar consultas, el usuario puede escribir
            a:
          </p>
          <p style={styles.paragraph}>
            <a href="mailto:diegofersv@gmail.com" style={styles.link}>
              diegofersv@gmail.com
            </a>
          </p>
          <p style={styles.paragraph}>
            La solicitud deberá incluir información suficiente para identificar
            la consulta y responder adecuadamente. No se solicitarán contraseñas,
            claves bancarias, frases semilla ni información financiera sensible
            para atender una solicitud de privacidad.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.subtitle}>14. Usuarios menores de edad</h2>
          <p style={styles.paragraph}>
            Orvian no está dirigida específicamente a menores de edad.
          </p>
          <p style={styles.paragraph}>
            Si un menor de edad utiliza la aplicación, deberá hacerlo bajo
            autorización y supervisión de sus padres, representantes legales o
            tutores, según corresponda.
          </p>
          <p style={styles.paragraph}>
            Orvian no solicita deliberadamente datos de menores de edad ni está
            diseñada para perfilar, contactar o dirigir publicidad a menores.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.subtitle}>15. Decisiones automatizadas</h2>
          <p style={styles.paragraph}>
            Orvian puede generar cálculos, reportes, estadísticas y
            visualizaciones con base en la información ingresada por el usuario.
          </p>
          <p style={styles.paragraph}>
            Estos resultados tienen una finalidad informativa y de organización
            personal. Orvian no toma decisiones automatizadas con efectos legales
            o financieros sobre el usuario, no aprueba créditos, no rechaza
            servicios financieros, no determina solvencia económica y no realiza
            evaluación crediticia.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.subtitle}>16. Transferencias internacionales</h2>
          <p style={styles.paragraph}>
            En la versión actual, Orvian no transfiere intencionalmente la
            información financiera registrada por el usuario a servidores
            internacionales propios.
          </p>
          <p style={styles.paragraph}>
            No obstante, ciertos servicios asociados al sistema operativo, tienda
            de aplicaciones, distribución, soporte, alojamiento del sitio web o
            infraestructura técnica pueden operar desde distintos países conforme
            a sus propias políticas.
          </p>
          <p style={styles.paragraph}>
            Si en el futuro Orvian incorpora sincronización, analítica,
            autenticación, respaldo en la nube, publicidad o servicios externos
            que impliquen transferencias internacionales de datos, esta Política
            será actualizada para informar al usuario antes de implementar dichos
            cambios.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.subtitle}>17. Exactitud de la información</h2>
          <p style={styles.paragraph}>
            El usuario es responsable de la exactitud, actualización y legalidad
            de la información que ingresa en Orvian.
          </p>
          <p style={styles.paragraph}>
            La aplicación no verifica si los saldos, movimientos, cuentas,
            presupuestos, monedas o reportes registrados corresponden a
            información real. Los datos dependen de lo ingresado manualmente por
            el usuario o de los archivos que el usuario decida importar.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.subtitle}>
            18. Limitación sobre asesoría financiera
          </h2>
          <p style={styles.paragraph}>
            Orvian es una herramienta de organización financiera personal.
          </p>
          <p style={styles.paragraph}>
            La información, reportes, gráficos, presupuestos o estadísticas
            generadas por la aplicación no constituyen asesoría financiera,
            contable, tributaria, bancaria, legal ni de inversión.
          </p>
          <p style={styles.paragraph}>
            El usuario debe tomar sus decisiones financieras bajo su propio
            criterio o consultar con profesionales calificados cuando
            corresponda.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.subtitle}>
            19. Cambios en esta Política de Privacidad
          </h2>
          <p style={styles.paragraph}>
            Esta Política de Privacidad puede actualizarse cuando existan cambios
            en la aplicación, en las funcionalidades, en los tratamientos de
            datos, en requisitos de Google Play o en la legislación aplicable.
          </p>
          <p style={styles.paragraph}>
            Cuando los cambios sean relevantes, se procurará informar al usuario
            mediante la aplicación, el sitio web del desarrollador, la ficha de
            Google Play u otros medios razonables.
          </p>
          <p style={styles.paragraph}>
            La fecha de vigencia ubicada al inicio indicará la versión más
            reciente de esta Política.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.subtitle}>20. Contacto</h2>
          <p style={styles.paragraph}>
            Para consultas relacionadas con esta Política de Privacidad,
            tratamiento de datos personales, derechos del usuario o eliminación
            de información, el usuario puede contactar a:
          </p>
          <p style={styles.paragraph}>
            <strong>Diego Segovia</strong>
            <br />
            Sitio web:{" "}
            <a href="https://portfolio-77060.web.app/" style={styles.link}>
              https://portfolio-77060.web.app/
            </a>
            <br />
            Correo:{" "}
            <a href="mailto:diegofersv@gmail.com" style={styles.link}>
              diegofersv@gmail.com
            </a>
          </p>
        </section>
      </article>
    </main>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background:
      "linear-gradient(180deg, #f8fafc 0%, #eef2f7 45%, #ffffff 100%)",
    padding: "48px 20px",
    color: "#111827",
    fontFamily:
      "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  },

  container: {
    width: "100%",
    maxWidth: "920px",
    margin: "0 auto",
    background: "#ffffff",
    border: "1px solid #e5e7eb",
    borderRadius: "28px",
    padding: "48px",
    boxShadow: "0 24px 80px rgba(15, 23, 42, 0.08)",
  },

  header: {
    marginBottom: "40px",
    paddingBottom: "28px",
    borderBottom: "1px solid #e5e7eb",
  },

  kicker: {
    margin: "0 0 8px",
    color: "#2563eb",
    fontWeight: 700,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    fontSize: "13px",
  },

  title: {
    margin: "0 0 20px",
    fontSize: "42px",
    lineHeight: 1.1,
    letterSpacing: "-0.04em",
    color: "#0f172a",
  },

  meta: {
    display: "grid",
    gap: "6px",
    color: "#475569",
    fontSize: "15px",
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

  smallTitle: {
    margin: "24px 0 10px",
    fontSize: "18px",
    color: "#1e293b",
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

  link: {
    color: "#2563eb",
    textDecoration: "none",
    fontWeight: 600,
  },
};