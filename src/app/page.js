        "use client";

    import React, { useState } from 'react';
    import Link from 'next/link';
    import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
    import { db } from '../lib/firebase'; // Ajuste o caminho se necessário
    import { 
      Check, Lock, EyeOff, CloudOff, Home,
            Calendar, Activity, BookOpen, Heart, 
            MessageCircle, Shield, ShieldOff
          } from 'lucide-react';

          // Se for usar o componente Image do Next.js, lembre-se de configurar a tag <Image /> corretamente.
          // Mantive a tag <img> clássica conforme o seu original para não quebrar a estrutura.

          export default function HerCalidaLandingPage() {
            // Estados para controlar a lista de espera
            const [email, setEmail] = useState('');
            const [status, setStatus] = useState('idle'); // 'idle', 'loading', 'success', 'error'

            // Função que envia o dado para o Firebase
            const handleSubscribe = async (e) => {
            e.preventDefault();
            if (!email) return;

              setStatus('loading');
        
              try {
                await addDoc(collection(db, 'lista_espera'), {
                email: email,
                dataCadastro: serverTimestamp(),
                origem: 'landing_page_footer'
              });
              setStatus('success');
              setEmail('');
                } catch (error) {
                    console.error("Erro ao salvar e-mail:", error);
                    setStatus('error');
                  }
              };
            return (
              <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-rose-200">
                
                {/* HEADER */}
                <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                    <div className="flex items-center">
                      <img src="/NovaLogo.png" alt="Logo HerCalida" className="h-8 w-auto object-contain"/>
                    </div>
                    <nav className="hidden lg:flex gap-8 text-sm font-medium text-slate-600">
                      <a href="#" className="text-rose-500 font-semibold">Início</a>
                      <a href="#recursos" className="hover:text-rose-500 transition-colors">Recursos</a>
                      <a href="#planos" className="hover:text-rose-500 transition-colors">Planos</a>
                      <a href="#privacidade" className="hover:text-rose-500 transition-colors">Privacidade</a>
                      <a href="#sobre" className="hover:text-rose-500 transition-colors">Sobre nós</a>
                      <a href="#blog" className="hover:text-rose-500 transition-colors">Blog</a>
                    </nav>
                    <a href="#newsletter" className="inline-block bg-rose-400 text-white px-8 py-3.5 rounded-full font-bold hover:bg-rose-500 transition-colors shadow-sm">
    Quero ser avisada no lançamento
  </a>
                  </div>
                </header>

                {/* HERO SECTION */}
                <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 flex flex-col md:flex-row items-center gap-12 overflow-hidden">
                  {/* Fundo gradiente sutil */}
                  <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-rose-50 rounded-full blur-3xl -z-10 opacity-70 translate-x-1/3 -translate-y-1/4"></div>

                  <div className="flex-1 space-y-8 text-center md:text-left z-10">
                    <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-[1.1] font-serif">
                      Sua saúde.<br />
                      Seu ritmo.<br />
                      <span className="text-rose-400">Sua privacidade.</span>
                    </h1>
                  <p className="text-lg text-slate-600 max-w-lg mx-auto md:mx-0">
            <span className="font-bold text-slate-900">O HerCalida é a plataforma completa para acompanhar sua saúde em todas as fases da vida.</span>
            <br className="hidden md:block" />
            Do ciclo menstrual à gestação, da menopausa ao bem-estar diário. Tudo em um só lugar.
          </p>
                    
                    <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                      <a href="#recursos" className="inline-block bg-rose-400 text-white px-8 py-3.5 rounded-full font-bold hover:bg-rose-500 transition-colors shadow-sm">
                        Quero Conhecer
                      </a>
                    </div>

                    {/* Badges de Confiança */}
                    <div className="flex flex-wrap justify-center md:justify-start gap-6 pt-6 text-sm font-medium text-slate-500">
                      <div className="flex items-center gap-2">
                        <ShieldOff className="w-5 h-5 text-rose-300" /> Sem anúncios
                      </div>
                      <div className="flex items-center gap-2">
                        <Lock className="w-5 h-5 text-rose-300" /> Seus dados no seu celular
                      </div>
                      <div className="flex items-center gap-2">
                        <Shield className="w-5 h-5 text-rose-300" /> Seguro e privado
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 relative w-full h-[500px] md:h-[650px] flex justify-center items-center mt-12 md:mt-0">
                    {/* IMAGEM DE FUNDO */}
                    <img 
                      src="/fundo-identidade.png" 
                      alt="Fundo decorativo HerCalida" 
                      className="absolute inset-0 w-full h-full object-contain md:object-cover -z-10 opacity-90"
                    />
                    <div className="relative w-full max-w-[500px] h-[550px]">
                      <img 
                        src="/celular-calendario.png" 
                        alt="App HerCalida - Calendário" 
                        className="absolute left-0 bottom-12 w-[65%] h-auto object-contain -rotate-[8deg] drop-shadow-2xl z-10 transition-transform duration-500 hover:-translate-y-2"
                      />
                      <img 
                        src="/celular-visao-geral.png" 
                        alt="App HerCalida - Visão Geral" 
                        className="absolute right-0 top-4 w-[70%] h-auto object-contain rotate-[6deg] drop-shadow-2xl z-20 transition-transform duration-500 hover:-translate-y-2"
                      />
                    </div>
                  </div>
                </section>

                {/* FUNCIONALIDADES */}
                <section id="recursos" className="bg-slate-50/50 py-24 border-y border-slate-100">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                      <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
                        Uma plataforma completa<br />para todas as fases da vida
                      </h2>
                      <p className="text-slate-600">
                        Ferramentas inteligentes para acompanhar, entender e cuidar da sua saúde em cada etapa.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {[
                        { icon: Calendar, title: "Ciclo Menstrual", desc: "Acompanhe seu ciclo, sintomas, humor, fluxo, corrimento e muito mais." },
                        { icon: Activity, title: "Gestação", desc: "Acompanhe cada semana da gravidez, exames, consultas e desenvolvimento do bebê." },
                        { icon: Heart, title: "Menopausa", desc: "Registre sintomas, acompanhe sua saúde e tenha conteúdos exclusivos para essa fase." },
                        { icon: Heart, title: "Saúde Sexual", desc: "Registre informações importantes sobre sua saúde íntima e acompanhe mudanças ao longo do tempo." },
                        { icon: Activity, title: "Relatórios Inteligentes", desc: "Transforme seus registros em informações úteis para compartilhar com profissionais de saúde." },
                        { icon: BookOpen, title: "Conteúdo Educativo", desc: "Aprenda com conteúdos desenvolvidos por especialistas para cuidar cada vez melhor de você." }
                      ].map((item, index) => (
                        <div key={index} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all text-center group">
                          <div className="w-16 h-16 mx-auto bg-rose-50 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <item.icon className="w-8 h-8 text-rose-400" strokeWidth={1.5} />
                          </div>
                          <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                          <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* PRIVACIDADE */}
                <section id="privacidade" className="py-24 bg-rose-50/30 overflow-hidden">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center">
                    
                    <div className="relative h-[400px] flex items-center justify-center">
                      <div className="absolute inset-0 bg-rose-100 rounded-full blur-3xl opacity-50 w-3/4 h-3/4 m-auto"></div>
                      <div className="w-64 h-[400px] bg-white rounded-[2.5rem] shadow-2xl border-[8px] border-slate-50 flex items-center justify-center relative z-10">
                        <div className="w-24 h-24 bg-rose-400 rounded-3xl flex items-center justify-center shadow-lg shadow-rose-200">
                          <Lock className="w-10 h-10 text-white" />
                        </div>
                      </div>
                      <div className="absolute top-10 left-10 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center"><Shield className="w-6 h-6 text-rose-300" /></div>
                      <div className="absolute bottom-20 left-4 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center"><CloudOff className="w-6 h-6 text-rose-300" /></div>
                      <div className="absolute top-1/4 right-10 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center"><EyeOff className="w-6 h-6 text-rose-300" /></div>
                      <div className="absolute bottom-10 right-20 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center"><ShieldOff className="w-6 h-6 text-rose-300" /></div>
                    </div>

                    <div className="space-y-6">
                      <div className="inline-flex items-center gap-2 text-rose-500 font-semibold mb-2">
                        <Lock className="w-5 h-5" /> Sua privacidade vem primeiro
                      </div>
                      <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">
                        Seus dados, só seus.
                      </h2>
                      <p className="text-lg text-slate-600 leading-relaxed">
                        No HerCalida, seus dados são armazenados diretamente no seu dispositivo. Isso significa mais privacidade, mais segurança e total controle sobre suas informações.
                      </p>
                      <ul className="space-y-4 pt-4">
                        {[
                          "Seus dados não são compartilhados com terceiros",
                          "Sem coleta para fins de marketing",
                          "Você no controle, sempre"
                        ].map((text, i) => (
                          <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                            <div className="min-w-6 min-h-6 bg-rose-100 rounded-full flex items-center justify-center">
                              <Check className="w-4 h-4 text-rose-500" strokeWidth={3} />
                            </div>
                            {text}
                          </li>
                        ))}
                      </ul>
                      <div className="pt-6">
                        {/* Onde antes estava: <a href="#" ...> */}
        <Link href="/politica-de-privacidade" className="text-fuchsia-700 font-bold hover:underline inline-flex items-center gap-2">
          Saiba mais sobre nossa Política de Privacidade →
        </Link>
                      </div>
                    </div>
                  </div>
                </section>

                {/* PLANOS */}
                <section id="planos" className="py-24 bg-white">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-20">
                      <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
                        Um modelo justo para todas
                      </h2>
                      <p className="text-slate-600">
                        Escolha o plano ideal para o seu momento. Sem anúncios. Sem surpresas.
                      </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 items-start max-w-5xl mx-auto pt-8">
                      
                      {/* Gratuito */}
                      <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm text-center transform md:translate-y-8 transition-all hover:shadow-md">
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">Gratuito</h3>
                        <p className="text-slate-500 text-sm mb-8 h-10">Tudo o essencial para<br/>começar a cuidar de você.</p>
                        
                        <ul className="space-y-4 text-left mb-8 min-h-[220px]">
                          {["Calendário menstrual", "Registro de sintomas", "Fluxo e corrimento", "Humor", "Backup local (no seu celular)"].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-slate-700 text-sm font-medium">
                              <Check className="w-4 h-4 text-slate-300 shrink-0" /> {item}
                            </li>
                          ))}
                        </ul>
                        <div className="text-rose-400 font-bold py-3">Sempre gratuito</div>
                      </div>

                      {/* Premium */}
                      <div className="bg-rose-50/50 border-2 border-rose-200 rounded-3xl p-8 shadow-2xl relative transform md:-translate-y-4 md:scale-105 z-10 text-center">
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-rose-400 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                          Mais indicado
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-2 mt-2">Premium</h3>
                        <div className="flex items-baseline justify-center gap-1 mb-6">
                          <span className="text-sm font-bold text-slate-500">R$</span>
                          <span className="text-4xl font-black text-slate-900">9,90</span>
                          <span className="text-sm text-slate-500">/mês</span>
                        </div>
                        <p className="text-slate-600 text-sm font-medium mb-6">
                          Mais acompanhamento.<br/>Mais estatísticas. Mais organização.
                        </p>
                        
                        <div className="text-sm font-bold text-slate-900 text-left mb-4">Tudo do plano gratuito, mais:</div>
                        <ul className="space-y-4 text-left mb-8 min-h-[220px]">
                          {["Estatísticas completas", "Relatórios personalizados", "Gestação", "Menopausa", "Saúde Sexual", "Insights inteligentes"].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-slate-700 text-sm font-medium">
                              <Check className="w-4 h-4 text-rose-500 shrink-0" /> {item}
                            </li>
                          ))}
                        </ul>
                        <button className="w-full bg-rose-400 text-white font-bold py-3.5 rounded-full hover:bg-rose-500 transition-colors shadow-md">
                          Estamos chegando!
                        </button>
                      </div>

                      {/* Assistente */}
                      <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm text-center relative overflow-hidden transform md:translate-y-8 transition-all hover:shadow-md">
                        <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-slate-100 text-slate-500 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest border border-slate-200">
                          Em breve
                        </div>
                        <h3 className="text-xl font-bold text-rose-600 mb-2 mt-10">HerCalida Assistente</h3>
                        <div className="flex items-baseline justify-center gap-1 mb-6">
                          <span className="text-sm font-bold text-slate-500">R$</span>
                          <span className="text-4xl font-black text-slate-900">15,90</span>
                          <span className="text-sm text-slate-500">/mês</span>
                        </div>
                        <p className="text-slate-500 text-sm mb-8 h-10">
                          A próxima evolução do HerCalida<br/>com inteligência artificial.
                        </p>
                        
                        <div className="text-sm font-bold text-slate-900 text-left mb-4">Tudo do Premium, mais:</div>
                        <ul className="space-y-4 text-left mb-8 min-h-[220px]">
                          {["Assistente inteligente", "Explicações personalizadas", "Interpretação de sintomas", "Resumos para consultas", "Respostas para suas dúvidas"].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-slate-700 text-sm font-medium">
                              <Check className="w-4 h-4 text-rose-400 shrink-0" /> {item}
                            </li>
                          ))}
                        </ul>
                        <button className="w-full bg-white border-2 border-slate-200 text-rose-500 font-bold py-3.5 rounded-full hover:bg-slate-50 transition-colors">
                          Entrar na lista de espera
                        </button>
                      </div>

                    </div>
                  </div>
                </section>

                {/* SESSÃO ASSISTENTE (Mockup Chat) */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                  <div className="bg-rose-50/50 rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 border border-white shadow-sm relative overflow-hidden">
                    <div className="absolute top-10 right-1/4 text-rose-200">✨</div>
                    <div className="absolute bottom-20 left-1/4 text-rose-200 text-2xl">✨</div>

                    <div className="flex-1 space-y-6 z-10">
                      <div className="bg-white border border-slate-200 text-slate-500 text-xs font-bold px-3 py-1 rounded-full w-max uppercase tracking-wider">
                        Em breve
                      </div>
                      <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">
                        Conheça sua futura assistente de saúde
                      </h2>
                      <p className="text-slate-600 text-lg">
                        A HerCalida Assistente será sua parceira para interpretar seus dados, explicar sintomas, tirar dúvidas e te ajudar a entender ainda mais sobre o seu corpo.
                      </p>
                      <a href="#newsletter" className="inline-block bg-rose-400 text-white px-8 py-3.5 rounded-full font-bold hover:bg-rose-500 transition-colors shadow-sm">
    Quero ser avisada no lançamento
  </a>
                    </div>

                    <div className="flex-1 w-full max-w-sm z-10">
                      <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
                        <div className="bg-rose-400 text-white p-4 flex items-center justify-between">
                          <span className="text-lg">←</span>
                          <span className="font-semibold text-sm">HerCalida Assistente</span>
                          <MessageCircle className="w-5 h-5 opacity-50" />
                        </div>
                        <div className="p-6 space-y-4 bg-slate-50 h-[300px] flex flex-col justify-end">
                          <div className="flex items-end gap-2">
                            <div className="w-8 h-8 rounded-full bg-rose-100 flex-shrink-0 border-2 border-white flex items-center justify-center">
                              <Heart className="w-4 h-4 text-rose-400" />
                            </div>
                            <div className="bg-white border border-slate-100 p-4 rounded-2xl rounded-bl-sm text-sm text-slate-700 shadow-sm">
                              Olá! Eu sou a sua assistente Calie.<br/>Como posso te ajudar hoje?
                            </div>
                          </div>
                          <div className="flex items-end justify-end gap-2">
                            <div className="bg-rose-400 text-white p-4 rounded-2xl rounded-br-sm text-sm shadow-sm max-w-[85%]">
                              Por que estou me sentindo tão cansada antes da menstruação?
                            </div>
                          </div>
                          <div className="flex items-center gap-2 pt-2">
                            <div className="w-8 h-8 rounded-full bg-rose-100 flex-shrink-0 border-2 border-white flex items-center justify-center">
                              <Heart className="w-4 h-4 text-rose-400" />
                            </div>
                            <div className="flex gap-1 bg-white border border-slate-100 px-3 py-2 rounded-full">
                              <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce"></div>
                              <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
                              <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* DIFERENCIAIS / TRUST */}
                <section className="border-t border-slate-100 py-12">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="flex gap-4">
                      <ShieldOff className="w-8 h-8 text-rose-300 shrink-0" strokeWidth={1.5} />
                      <div>
                        <h4 className="font-bold text-slate-900 text-sm">Sem anúncios</h4>
                        <p className="text-slate-500 text-xs mt-1 leading-relaxed">Sua experiência sempre focada em você.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <Lock className="w-8 h-8 text-rose-300 shrink-0" strokeWidth={1.5} />
                      <div>
                        <h4 className="font-bold text-slate-900 text-sm">Privacidade total</h4>
                        <p className="text-slate-500 text-xs mt-1 leading-relaxed">Seus dados ficam no seu celular por padrão.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <Home className="w-8 h-8 text-rose-300 shrink-0" strokeWidth={1.5} />
                      <div>
                        <h4 className="font-bold text-slate-900 text-sm">Acessível</h4>
                        <p className="text-slate-500 text-xs mt-1 leading-relaxed">Preço justo e acessível para cuidar da sua saúde.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <Activity className="w-8 h-8 text-rose-300 shrink-0" strokeWidth={1.5} />
                      <div>
                        <h4 className="font-bold text-slate-900 text-sm">Transparência</h4>
                        <p className="text-slate-500 text-xs mt-1 leading-relaxed">Mudanças de preço só com aviso prévio.</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* FOOTER */}
                <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 border-b border-slate-200 pb-12">
                      
                      {/* Coluna 1: Marca */}
                      <div className="md:col-span-4">
                        <div className="flex items-center">
                          <img src="/NovaLogo.png" alt="Logo HerCalida" className="h-15 w-auto object-contain"/>
                        </div>
                        <p className="text-slate-800 font-bold text-sm mb-2 mt-4">Sua saúde. Seu ritmo. Sua privacidade.</p>
                        <p className="text-slate-500 text-xs leading-relaxed max-w-xs">
                          Uma plataforma em constante evolução para acompanhar você em todas as fases da vida.
                        </p>
                      </div>

                      {/* Coluna 2: Newsletter */}
                      <div id="newsletter" className="md:col-span-4">
                        <h4 className="font-bold text-slate-900 mb-4">Fique por dentro das novidades</h4>
                        <p className="text-slate-500 text-sm mb-4">
                          Deixe seu e-mail e seja a primeira a saber quando o HerCalida for lançado.
                        </p>
                        <form className="space-y-3" onSubmit={handleSubscribe}>
    <input 
      type="email" 
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required
      placeholder="Seu melhor e-mail" 
      className="w-full px-4 py-3 rounded-full border border-slate-200 bg-white text-sm focus:outline-none focus:border-rose-300 disabled:bg-slate-50"
      disabled={status === 'loading' || status === 'success'}
    />
    <button 
      type="submit" 
      disabled={status === 'loading' || status === 'success'}
      className="w-full bg-rose-400 text-white font-bold py-3 rounded-full hover:bg-rose-500 transition-colors text-sm disabled:opacity-70 disabled:cursor-not-allowed"
    >
      {status === 'loading' && 'Enviando...'}
      {status === 'success' && 'Inscrita com sucesso! 🎉'}
      {status === 'error' && 'Tentar novamente'}
      {status === 'idle' && 'Quero receber novidades'}
    </button>
  </form>
                      </div>

                      {/* Coluna 3: Links */}
                      <div className="md:col-span-2">
                        <h4 className="font-bold text-slate-900 mb-4 text-sm">Links rápidos</h4>
                        <ul className="space-y-3 text-sm text-slate-500">
                          <li><a href="#recursos" className="hover:text-rose-400 transition-colors">Recursos</a></li>
                          <li><a href="#planos" className="hover:text-rose-400 transition-colors">Planos</a></li>
                          <li><a href="#privacidade" className="hover:text-rose-400 transition-colors">Privacidade</a></li>
                          <li><a href="#sobre" className="hover:text-rose-400 transition-colors">Sobre nós</a></li>
                          <li><a href="#blog" className="hover:text-rose-400 transition-colors">Blog</a></li>
                          <li><a href="#" className="hover:text-rose-400 transition-colors">Contato</a></li>
                        </ul>
                      </div>

                      {/* Coluna 4: Redes Sociais */}
                      <div className="md:col-span-2">
                        <h4 className="font-bold text-slate-900 mb-4 text-sm">Siga-nos</h4>
                        <div className="flex gap-2">
                          <a href="https://www.instagram.com/hercalida_app?igsh=bzJmc3EzeTByaDJv" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-rose-400 hover:border-rose-200 transition-all">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                            </svg>
                          </a>
                          <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-rose-400 hover:border-rose-200 transition-all">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                            </svg>
                          </a>
                          <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-rose-400 hover:border-rose-200 transition-all">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
                      <p>© 2026 HerCalida. Todos os direitos reservados.</p>
                      <div className="flex gap-6">
                        <Link href="/politica-de-privacidade" className="hover:text-slate-600">
        Política de Privacidade
      </Link>
                        <a href="#" className="hover:text-slate-600">Termos de Uso</a>
                      </div>
                    </div>
                  </div>
                </footer>

              </div>
            );
          }