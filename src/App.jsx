
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function App() {
  return (
    <main className="bg-gray-100 min-h-screen p-6 font-sans">
      <section className="text-center mb-10">
        <motion.h1
          className="text-4xl font-bold text-green-700"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Salvador Montenegro
        </motion.h1>
        <p className="text-lg text-gray-600">
          Científico de la Computación | Desarrollador Full Stack | Investigador en IA
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold text-green-700">Datos Personales</h2>
            <ul className="list-disc pl-5 text-gray-700">
              <li>DNI: 48.661.328</li>
              <li>Fecha de Nacimiento: 04/08/2008 (26 años)</li>
              <li>Nacionalidad: San Luis, Argentina</li>
              <li>Teléfono: +54 266 440-7084</li>
              <li>Email: salvadormontenegro08@gmail.com</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold text-green-700">Formación Académica</h2>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Licenciatura en Ciencia de la Computación – UNC (2026 - 2030)</li>
              <li>Máster en IA Aplicada – UBA (2031 - 2033)</li>
              <li>Certificado en Ciberseguridad – Platzi (2029)</li>
              <li>Curso Avanzado de Machine Learning – Coursera (2028)</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold text-green-700">Experiencia Profesional</h2>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Desarrollador Full Stack – Globant (2031 - 2034)</li>
              <li>Investigador en IA – CONICET (2030 - 2031)</li>
              <li>Pasante – Mercado Libre (2029)</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold text-green-700">Proyectos y Publicaciones</h2>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Paper: Modelos Generativos – Congreso LAIA (2033)</li>
              <li>SmartRoute – Hackathon IBM 2032 (1º puesto)</li>
              <li>Fundador de GreenCode – plataforma sostenible (2034)</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold text-green-700">Idiomas y Habilidades</h2>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Inglés: Nivel B2</li>
              <li>Lenguajes: Python, JS, TS, Java</li>
              <li>Frameworks: React, Node, Django, TensorFlow</li>
              <li>DBs: PostgreSQL, MongoDB</li>
              <li>Herramientas: Git, Docker, Figma</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold text-green-700">Otros Intereses</h2>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Voluntario en talleres de programación (Código Abierto)</li>
              <li>Intercambio en Múnich, Alemania (2032)</li>
              <li>Hobbies: Escalada, ciencia ficción, ajedrez</li>
              <li>Viajes: Corea del Sur, Alemania, Chile</li>
            </ul>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
