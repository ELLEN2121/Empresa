import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Topo com Título */}
      <header className="flex justify-between items-center px-6 py-4 shadow-md">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-purple-700 rounded-full flex items-center justify-center text-white font-bold text-lg">
            F
          </div>
          <h1 className="text-xl font-bold text-purple-700">Flamejantes</h1>
        </div>
        <button className="bg-purple-700 text-white rounded-xl px-4 py-2">Contato</button>
      </header>

      {/* Hero Section */}
      <section className="text-center max-w-4xl mx-auto py-20 px-6">
        <motion.h2 
          className="text-5xl font-bold text-purple-700"
          initial={{ opacity: 0, y: -30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
        >
          O Bot Inteligente para Casamentos Inesquecíveis
        </motion.h2>
        <motion.p 
          className="mt-6 text-xl text-gray-600" 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.4 }}
        >
          Confirmações, presentes e organização em um só lugar. Tudo automatizado, bonito e prático.
        </motion.p>
        <motion.div 
          className="mt-8"
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.6 }}
        >
          <button className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-3 rounded-2xl shadow-lg">
            Ative seu bot agora
          </button>
        </motion.div>
      </section>

      {/* Features */}
      <section className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto px-6 mt-10">
        {[
          {
            title: "Confirmação de presença",
            desc: "Seus convidados confirmam com um clique, direto do celular.",
          },
          {
            title: "Envio de presentes",
            desc: "Pagamentos via Pix ou cartão com valores simbólicos.",
          },
          {
            title: "Tela de agradecimento",
            desc: "Mensagem automática após o envio de presentes.",
          },
          {
            title: "Relatórios automáticos",
            desc: "Veja quem confirmou em tempo real com dados organizados.",
          },
        ].map((item, idx) => (
          <motion.div 
            key={idx} 
            className="bg-purple-50 p-6 rounded-2xl shadow-xl hover:shadow-2xl"
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <h3 className="text-2xl font-semibold text-purple-700 mb-2">{item.title}</h3>
            <p className="text-gray-600 text-base">{item.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* Formulário de Contato */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center text-purple-700 mb-6">Entre em contato</h2>
        <form className="space-y-6">
          <input type="text" placeholder="Seu nome" className="w-full p-3 border rounded-xl" />
          <input type="email" placeholder="Seu e-mail" className="w-full p-3 border rounded-xl" />
          <textarea placeholder="Mensagem" rows={5} className="w-full p-3 border rounded-xl"></textarea>
          <button type="submit" className="w-full bg-purple-700 text-white py-3 rounded-xl hover:bg-purple-800">
            Enviar mensagem
          </button>
        </form>
      </section>

      {/* Rodapé */}
      <footer className="text-center py-10 text-sm text-gray-500 border-t">
        © {new Date().getFullYear()} Flamejantes. Todos os direitos reservados.
      </footer>
    </div>
  );
}
