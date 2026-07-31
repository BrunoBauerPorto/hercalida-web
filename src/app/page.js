"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../lib/firebase'; // Ajuste o caminho se necessário
import { 
  Check, Lock, EyeOff, CloudOff, Home,
  Calendar, Activity, BookOpen, Heart, 
  MessageCircle, Shield, ShieldOff, Menu, X
} from 'lucide-react';

export default function HerCalidaLandingPage() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); 
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Controle do menu mobile

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
            <img src="/NovaLogo.png" alt="Logo HerCalida" className="h-7 md:h-8 w-auto object-contain"/>
          </div>
          
          {/* Menu Desktop */}
          <nav className="hidden lg:flex gap-8 text-sm font-medium text-slate-600">
            <a href="#" className="text-rose-500 font-semibold">Início</a>
            <a href="#recursos" className="hover:text-rose-500 transition-colors">Recursos</a>
            <a href="#planos" className="hover:text-rose-500 transition-colors">Planos</a>
            <a href="#privacidade" className="hover:text-rose-500 transition-colors">Privacidade</a>
            <a href="#sobre" className="hover:text-rose-500 transition-colors">Sobre nós</a>
            <a href="#blog" className="hover:text-rose-500 transition-colors">Blog</a>
          </nav>

          {/* Botão CTA Desktop & Toggle Mobile */}
          <div className="flex items-center gap-4">
            <a href="#newsletter" className="hidden lg:inline-block bg-rose-400 text-white px-8 py-3 rounded-full font-bold hover:bg-rose-500 transition-colors shadow-sm">
              Quero ser avisada
            </a>
            
            {/* Botão Hamburguer Mobile */}
            <button 
              className="lg:hidden p-2 text-slate-600 hover:text-rose-500 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Menu Dropdown Mobile */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl px-4 py-6 flex flex-col gap-4 z-50">
            <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="text-rose-500 font-semibold text-lg">Início</a>
            <a href="#recursos" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-600 font-medium text-lg">Recursos</a>
            <a href="#planos" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-600 font-medium text-lg">Planos</a>
            <a href="#privacidade" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-600 font-medium text-lg">Privacidade</a>
            <a href="#sobre" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-600 font-medium text-lg">Sobre nós</a>
            <hr className="border-slate-100 my-2" />
            <a href="#newsletter" onClick={() => setIsMobileMenuOpen(false)} className="text-center bg-rose-400 text-white px-6 py-3.5 rounded-full font-bold hover:bg-rose-500 transition-colors shadow-sm w-full">
              Quero ser avisada no lançamento
            </a>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
        <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 flex flex-col lg:flex-row items-center gap-8 md:gap-12 overflow-hidden">
          {/* Fundo gradiente sutil */}
          <div className="absolute top-0 right-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-rose-50 rounded-full blur-3xl -z-10 opacity-70 translate-x-1/3 -translate-y-1/4"></div>

          <div className="flex-1 space-y-6 md:space-y-8 text-center lg:text-left z-10 w-full pt-4 md:pt-0">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.15] md:leading-[1.1] font-serif">
              Sua saúde.<br />
              Seu ritmo.<br />
              <span className="text-rose-400">Sua privacidade.</span>
            </h1>
            <p className="text-base md:text-lg text-slate-600 max-w-lg mx-auto lg:mx-0">
              <span className="font-bold text-slate-900">O HerCalida é a plataforma completa para acompanhar sua saúde em todas as fases da vida.</span>
              <br className="hidden md:block" />
              <span className="mt-2 block">Do ciclo menstrual à gestação, da menopausa ao bem-estar diário. Tudo em um só lugar.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4 md:pt-6">
              <a href="#recursos" className="w-full sm:w-auto inline-block bg-rose-400 text-white px-8 py-3.5 rounded-full font-bold hover:bg-rose-500 transition-colors shadow-sm text-center">
                Quero Conhecer
              </a>
            </div>

            {/* Badges de Confiança */}
            <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 pt-6 text-sm font-medium text-slate-500">
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <ShieldOff className="w-5 h-5 text-rose-300" /> Sem anúncios
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <Lock className="w-5 h-5 text-rose-300" /> Seus dados no seu celular
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <Shield className="w-5 h-5 text-rose-300" /> Seguro e privado
              </div>
            </div>
          </div>

          {/* Oculto no celular (hidden), visível a partir de tablets (md:flex) */}
          <div className="hidden md:flex flex-1 relative w-full h-[450px] md:h-[650px] justify-center items-center lg:mt-0">
            {/* IMAGEM DE FUNDO */}
            <img 
              src="/fundo-identidade.png" 
              alt="Fundo decorativo HerCalida" 
              className="absolute inset-0 w-full h-full object-contain -z-10 opacity-90"
            />
            <div className="relative w-full max-w-[500px] h-full flex items-center justify-center">
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
      <section id="recursos" className="bg-slate-50/50 py-16 md:py-24 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
              Uma plataforma completa<br className="hidden md:block"/> para todas as fases da vida
            </h2>
            <p className="text-slate-600 text-sm md:text-base">
              Ferramentas inteligentes para acompanhar, entender e cuidar da sua saúde em cada etapa.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              { icon: Calendar, title: "Ciclo Menstrual", desc: "Acompanhe seu ciclo, sintomas, humor, fluxo, corrimento e muito mais." },
              { icon: Activity, title: "Gestação", desc: "Acompanhe cada semana da gravidez, exames, consultas e desenvolvimento do bebê." },
              { icon: Heart, title: "Menopausa", desc: "Registre sintomas, acompanhe sua saúde e tenha conteúdos exclusivos para essa fase." },
              { icon: Heart, title: "Saúde Sexual", desc: "Registre informações importantes sobre sua saúde íntima e acompanhe mudanças ao longo do tempo." },
              { icon: Activity, title: "Relatórios Inteligentes", desc: "Transforme seus registros em informações úteis para compartilhar com profissionais de saúde." },
              { icon: BookOpen, title: "Conteúdo Educativo", desc: "Aprenda com conteúdos desenvolvidos por especialistas para cuidar cada vez melhor de você." }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 md:p-8 rounded-[2rem] md:rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all text-center group">
                <div className="w-14 h-14 md:w-16 md:h-16 mx-auto bg-rose-50 rounded-full flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform">
                  <item.icon className="w-7 h-7 md:w-8 md:h-8 text-rose-400" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2 md:mb-3">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRIVACIDADE */}
      <section id="privacidade" className="py-16 md:py-24 bg-rose-50/30 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          
          <div className="order-2 md:order-1 relative h-[300px] md:h-[400px] flex items-center justify-center">
            <div className="absolute inset-0 bg-rose-100 rounded-full blur-3xl opacity-50 w-3/4 h-3/4 m-auto"></div>
            <div className="w-56 md:w-64 h-[300px] md:h-[400px] bg-white rounded-[2rem] md:rounded-[2.5rem] shadow-2xl border-[6px] md:border-[8px] border-slate-50 flex items-center justify-center relative z-10">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-rose-400 rounded-3xl flex items-center justify-center shadow-lg shadow-rose-200">
                <Lock className="w-8 h-8 md:w-10 md:h-10 text-white" />
              </div>
            </div>
            <div className="absolute top-4 left-4 md:top-10 md:left-10 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-md flex items-center justify-center"><Shield className="w-5 h-5 md:w-6 md:h-6 text-rose-300" /></div>
            <div className="absolute bottom-10 left-0 md:bottom-20 md:left-4 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-md flex items-center justify-center"><CloudOff className="w-5 h-5 md:w-6 md:h-6 text-rose-300" /></div>
            <div className="absolute top-1/4 right-4 md:right-10 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-md flex items-center justify-center"><EyeOff className="w-5 h-5 md:w-6 md:h-6 text-rose-300" /></div>
            <div className="absolute bottom-4 right-10 md:bottom-10 md:right-20 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-md flex items-center justify-center"><ShieldOff className="w-5 h-5 md:w-6 md:h-6 text-rose-300" /></div>
          </div>

          <div className="order-1 md:order-2 space-y-4 md:space-y-6 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-rose-500 font-semibold text-sm md:text-base">
              <Lock className="w-4 h-4 md:w-5 md:h-5" /> Sua privacidade vem primeiro
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">
              Seus dados, só seus.
            </h2>
            <p className="text-base md:text-lg text-slate-600 leading-relaxed">
              No HerCalida, seus dados são armazenados diretamente no seu dispositivo. Isso significa mais privacidade, mais segurança e total controle sobre suas informações.
            </p>
            <ul className="space-y-3 md:space-y-4 pt-2 md:pt-4 text-left inline-block md:block mx-auto">
              {[
                "Seus dados não são compartilhados com terceiros",
                "Sem coleta para fins de marketing",
                "Você no controle, sempre"
              ].map((text, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 text-sm md:text-base font-medium">
                  <div className="min-w-[20px] min-h-[20px] md:min-w-6 md:min-h-6 bg-rose-100 rounded-full flex items-center justify-center">
                    <Check className="w-3 h-3 md:w-4 md:h-4 text-rose-500" strokeWidth={3} />
                  </div>
                  {text}
                </li>
              ))}
            </ul>
            <div className="pt-4 md:pt-6">
              <Link href="/politica-de-privacidade" className="text-fuchsia-700 font-bold hover:underline inline-flex items-center gap-2 text-sm md:text-base">
                Saiba mais sobre nossa Política de Privacidade →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PLANOS */}
      <section id="planos" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-20">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-3 md:mb-4">
              Um modelo justo para todas
            </h2>
            <p className="text-slate-600 text-sm md:text-base">
              Escolha o plano ideal para o seu momento. Sem anúncios. Sem surpresas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-start max-w-5xl mx-auto md:pt-8">
            
            {/* Gratuito */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-sm text-center transform md:translate-y-8 transition-all hover:shadow-md">
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">Gratuito</h3>
              <p className="text-slate-500 text-sm mb-6 md:mb-8 h-auto md:h-10">Tudo o essencial para<br className="hidden md:block"/> começar a cuidar de você.</p>
              
              <ul className="space-y-3 md:space-y-4 text-left mb-6 md:mb-8 md:min-h-[220px]">
                {["Calendário menstrual", "Registro de sintomas", "Fluxo e corrimento", "Humor", "Backup local (no seu celular)"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 text-sm font-medium">
                    <Check className="w-4 h-4 text-slate-300 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <div className="text-rose-400 font-bold py-3">Sempre gratuito</div>
            </div>

            {/* Premium */}
            <div className="bg-rose-50/50 border-2 border-rose-200 rounded-3xl p-6 md:p-8 shadow-xl md:shadow-2xl relative transform md:-translate-y-4 md:scale-105 z-10 text-center order-first md:order-none">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-rose-400 text-white text-[10px] md:text-xs font-bold px-3 py-1 md:px-4 md:py-1.5 rounded-full uppercase tracking-wider shadow-sm whitespace-nowrap">
                Mais indicado
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2 mt-2">Premium</h3>
              <div className="flex items-baseline justify-center gap-1 mb-4 md:mb-6">
                <span className="text-xs md:text-sm font-bold text-slate-500">R$</span>
                <span className="text-3xl md:text-4xl font-black text-slate-900">9,90</span>
                <span className="text-xs md:text-sm text-slate-500">/mês</span>
              </div>
              <p className="text-slate-600 text-sm font-medium mb-6">
                Mais acompanhamento.<br className="hidden md:block"/> Mais estatísticas. Mais organização.
              </p>
              
              <div className="text-sm font-bold text-slate-900 text-left mb-4">Tudo do plano gratuito, mais:</div>
              <ul className="space-y-3 md:space-y-4 text-left mb-6 md:mb-8 md:min-h-[220px]">
                {["Estatísticas completas", "Relatórios personalizados", "Gestação", "Menopausa", "Saúde Sexual", "Insights inteligentes"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 text-sm font-medium">
                    <Check className="w-4 h-4 text-rose-500 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-rose-400 text-white font-bold py-3.5 rounded-full hover:bg-rose-500 transition-colors shadow-md text-sm md:text-base">
                Estamos chegando!
              </button>
            </div>

            {/* Assistente */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-sm text-center relative overflow-hidden transform md:translate-y-8 transition-all hover:shadow-md mt-6 md:mt-0">
              <div className="absolute top-4 md:top-6 left-1/2 -translate-x-1/2 bg-slate-100 text-slate-500 text-[9px] md:text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest border border-slate-200 whitespace-nowrap">
                Em breve
              </div>
              <h3 className="text-lg md:text-xl font-bold text-rose-600 mb-2 mt-8 md:mt-10">HerCalida Assistente</h3>
              <div className="flex items-baseline justify-center gap-1 mb-4 md:mb-6">
                <span className="text-xs md:text-sm font-bold text-slate-500">R$</span>
                <span className="text-3xl md:text-4xl font-black text-slate-900">15,90</span>
                <span className="text-xs md:text-sm text-slate-500">/mês</span>
              </div>
              <p className="text-slate-500 text-sm mb-6 md:mb-8 h-auto md:h-10">
                A próxima evolução do HerCalida<br className="hidden md:block"/> com inteligência artificial.
              </p>
              
              <div className="text-sm font-bold text-slate-900 text-left mb-4">Tudo do Premium, mais:</div>
              <ul className="space-y-3 md:space-y-4 text-left mb-6 md:mb-8 md:min-h-[220px]">
                {["Assistente inteligente", "Explicações personalizadas", "Interpretação de sintomas", "Resumos para consultas", "Respostas para suas dúvidas"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 text-sm font-medium">
                    <Check className="w-4 h-4 text-rose-400 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-white border-2 border-slate-200 text-rose-500 font-bold py-3.5 rounded-full hover:bg-slate-50 transition-colors text-sm md:text-base">
                Entrar na lista
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* SESSÃO ASSISTENTE (Mockup Chat) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="bg-rose-50/50 rounded-3xl md:rounded-[3rem] p-6 sm:p-8 md:p-16 flex flex-col lg:flex-row items-center gap-8 md:gap-12 border border-white shadow-sm relative overflow-hidden">
          <div className="absolute top-6 md:top-10 right-1/4 text-rose-200 text-lg md:text-2xl">✨</div>
          <div className="absolute bottom-10 md:bottom-20 left-4 md:left-1/4 text-rose-200 text-xl md:text-2xl">✨</div>

          <div className="flex-1 space-y-4 md:space-y-6 z-10 text-center lg:text-left">
            <div className="mx-auto lg:mx-0 bg-white border border-slate-200 text-slate-500 text-[10px] md:text-xs font-bold px-3 py-1 rounded-full w-max uppercase tracking-wider">
              Em breve
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">
              Conheça sua futura assistente de saúde
            </h2>
            <p className="text-slate-600 text-base md:text-lg">
              A HerCalida Assistente será sua parceira para interpretar seus dados, explicar sintomas, tirar dúvidas e te ajudar a entender ainda mais sobre o seu corpo.
            </p>
            <a href="#newsletter" className="inline-block bg-rose-400 text-white px-6 md:px-8 py-3 md:py-3.5 rounded-full font-bold hover:bg-rose-500 transition-colors shadow-sm text-sm md:text-base w-full sm:w-auto">
              Quero ser avisada no lançamento
            </a>
          </div>

          <div className="flex-1 w-full max-w-sm z-10 mt-6 lg:mt-0">
            <div className="bg-white rounded-[1.5rem] shadow-xl overflow-hidden border border-slate-100">
              <div className="bg-rose-400 text-white p-3 md:p-4 flex items-center justify-between">
                <span className="text-lg">←</span>
                <span className="font-semibold text-xs md:text-sm">HerCalida Assistente</span>
                <MessageCircle className="w-4 h-4 md:w-5 md:h-5 opacity-50" />
              </div>
              <div className="p-4 md:p-6 space-y-4 bg-slate-50 h-[250px] md:h-[300px] flex flex-col justify-end">
                <div className="flex items-end gap-2">
                  <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-rose-100 flex-shrink-0 border-2 border-white flex items-center justify-center">
                    <Heart className="w-3.5 h-3.5 md:w-4 md:h-4 text-rose-400" />
                  </div>
                  <div className="bg-white border border-slate-100 p-3 md:p-4 rounded-2xl rounded-bl-sm text-xs md:text-sm text-slate-700 shadow-sm">
                    Olá! Eu sou a sua assistente Calie.<br/>Como posso te ajudar hoje?
                  </div>
                </div>
                <div className="flex items-end justify-end gap-2">
                  <div className="bg-rose-400 text-white p-3 md:p-4 rounded-2xl rounded-br-sm text-xs md:text-sm shadow-sm max-w-[85%]">
                    Por que estou me sentindo tão cansada antes da menstruação?
                  </div>
                </div>
                <div className="flex items-center gap-2 pt-2">
                  <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-rose-100 flex-shrink-0 border-2 border-white flex items-center justify-center">
                    <Heart className="w-3.5 h-3.5 md:w-4 md:h-4 text-rose-400" />
                  </div>
                  <div className="flex gap-1 bg-white border border-slate-100 px-3 py-2 rounded-full">
                    <div className="w-1 md:w-1.5 h-1 md:h-1.5 bg-slate-300 rounded-full animate-bounce"></div>
                    <div className="w-1 md:w-1.5 h-1 md:h-1.5 bg-slate-300 rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
                    <div className="w-1 md:w-1.5 h-1 md:h-1.5 bg-slate-300 rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS / TRUST */}
      <section className="border-t border-slate-100 py-10 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          <div className="flex items-start gap-4">
            <ShieldOff className="w-7 h-7 md:w-8 md:h-8 text-rose-300 shrink-0 mt-1 md:mt-0" strokeWidth={1.5} />
            <div>
              <h4 className="font-bold text-slate-900 text-sm">Sem anúncios</h4>
              <p className="text-slate-500 text-xs mt-1 leading-relaxed">Sua experiência sempre focada em você.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Lock className="w-7 h-7 md:w-8 md:h-8 text-rose-300 shrink-0 mt-1 md:mt-0" strokeWidth={1.5} />
            <div>
              <h4 className="font-bold text-slate-900 text-sm">Privacidade total</h4>
              <p className="text-slate-500 text-xs mt-1 leading-relaxed">Seus dados ficam no seu celular por padrão.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Home className="w-7 h-7 md:w-8 md:h-8 text-rose-300 shrink-0 mt-1 md:mt-0" strokeWidth={1.5} />
            <div>
              <h4 className="font-bold text-slate-900 text-sm">Acessível</h4>
              <p className="text-slate-500 text-xs mt-1 leading-relaxed">Preço justo e acessível para cuidar da sua saúde.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Activity className="w-7 h-7 md:w-8 md:h-8 text-rose-300 shrink-0 mt-1 md:mt-0" strokeWidth={1.5} />
            <div>
              <h4 className="font-bold text-slate-900 text-sm">Transparência</h4>
              <p className="text-slate-500 text-xs mt-1 leading-relaxed">Mudanças de preço só com aviso prévio.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-50 border-t border-slate-200 pt-12 md:pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 border-b border-slate-200 pb-10 md:pb-12">
            
            {/* Coluna 1: Marca */}
            <div className="md:col-span-4 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start">
                <img src="/NovaLogo.png" alt="Logo HerCalida" className="h-10 md:h-15 w-auto object-contain"/>
              </div>
              <p className="text-slate-800 font-bold text-sm mb-2 mt-4">Sua saúde. Seu ritmo. Sua privacidade.</p>
              <p className="text-slate-500 text-xs leading-relaxed max-w-xs mx-auto md:mx-0">
                Uma plataforma em constante evolução para acompanhar você em todas as fases da vida.
              </p>
            </div>

            {/* Coluna 2: Newsletter */}
            <div id="newsletter" className="md:col-span-4">
              <h4 className="font-bold text-slate-900 mb-3 md:mb-4 text-center md:text-left">Fique por dentro das novidades</h4>
              <p className="text-slate-500 text-sm mb-4 text-center md:text-left">
                Deixe seu e-mail e seja a primeira a saber quando o HerCalida for lançado.
              </p>
              <form className="space-y-3" onSubmit={handleSubscribe}>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Seu melhor e-mail" 
                  className="w-full px-4 py-3 rounded-full border border-slate-200 bg-white text-sm focus:outline-none focus:border-rose-300 disabled:bg-slate-50 text-center md:text-left"
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

            {/* Coluna 3 e 4 englobadas juntas no mobile para melhor grid */}
            <div className="md:col-span-4 grid grid-cols-2 gap-8 md:flex md:justify-around">
              {/* Coluna 3: Links */}
              <div>
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
              <div>
                <h4 className="font-bold text-slate-900 mb-4 text-sm">Siga-nos</h4>
                <div className="flex gap-2">
                  <a href="https://www.instagram.com/hercalida_app?igsh=bzJmc3EzeTByaDJv" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-rose-400 hover:border-rose-200 transition-all">
                    {/* SVG Omitido por brevidade */}
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
            <p>© 2026 HerCalida. Todos os direitos reservados.</p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
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