"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ShieldCheck, Heart } from 'lucide-react';

export default function PoliticaPrivacidade() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-rose-200">
      
      {/* HEADER SIMPLIFICADO COM BOTÃO DE VOLTAR */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-rose-500 transition-colors font-medium text-sm">
            <ArrowLeft className="w-4 h-4" />
            Voltar para o início
          </Link>
          <div className="flex items-center gap-2 text-xl font-black text-rose-500 tracking-tight">
            <Heart className="w-5 h-5 fill-current" />
            HerCalida
          </div>
        </div>
      </header>

      {/* CABEÇALHO DA PÁGINA */}
      <section className="bg-white border-b border-slate-200 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="w-16 h-16 bg-rose-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShieldCheck className="w-8 h-8 text-rose-500" />
          </div>
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-4">
            Política de Privacidade
          </h1>
          <p className="text-slate-500 font-medium">
            Última atualização: 30/07/2026
          </p>
        </div>
      </section>

      {/* CONTEÚDO DO DOCUMENTO */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100">
            
            <div className="prose prose-slate prose-headings:font-serif prose-headings:text-slate-900 prose-a:text-fuchsia-600 max-w-none">
              
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Bem-vinda ao HerCalida.
                <br /><br />
                A sua privacidade é um dos pilares fundamentais do nosso projeto. Desenvolvemos o HerCalida com a convicção de que informações relacionadas à saúde pertencem exclusivamente à própria usuária. Por isso, priorizamos soluções que ofereçam transparência, controle e segurança desde o primeiro acesso ao aplicativo.
                <br /><br />
                <strong>Ao utilizar o HerCalida, você concorda com esta Política de Privacidade.</strong>
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-4">1. Nosso compromisso</h2>
              <p className="text-slate-600 mb-6">
                O HerCalida foi desenvolvido para auxiliar no acompanhamento da saúde feminina durante diferentes fases da vida, incluindo ciclo menstrual, gestação, menopausa e demais funcionalidades disponibilizadas ao longo da evolução do aplicativo.
                Nosso compromisso é fornecer ferramentas de organização e acompanhamento da saúde respeitando integralmente a privacidade das usuárias.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">2. Quais informações podem ser registradas</h2>
              <p className="text-slate-600 mb-4">
                Dependendo das funcionalidades utilizadas, o aplicativo poderá armazenar informações fornecidas voluntariamente pela usuária, como:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h4 className="font-bold text-slate-800 mb-2">Dados do perfil</h4>
                  <ul className="list-disc pl-5 text-slate-600 space-y-1 text-sm">
                    <li>Nome ou apelido</li>
                    <li>Idade</li>
                    <li>Altura</li>
                    <li>Peso</li>
                    <li>Data de nascimento (opcional)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 mb-2">Saúde menstrual</h4>
                  <ul className="list-disc pl-5 text-slate-600 space-y-1 text-sm">
                    <li>Data da menstruação</li>
                    <li>Fluxo menstrual</li>
                    <li>Sintomas, Humor, Cólicas</li>
                    <li>Corrimento e Aspecto do sangue</li>
                    <li>Ovulação e Fertilidade</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 mb-2">Gestação</h4>
                  <ul className="list-disc pl-5 text-slate-600 space-y-1 text-sm">
                    <li>Data provável do parto e Semanas gestacionais</li>
                    <li>Peso e Sintomas</li>
                    <li>Contrações e Movimentos fetais</li>
                    <li>Consultas, Exames e Vacinas</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 mb-2">Menopausa e Saúde íntima</h4>
                  <ul className="list-disc pl-5 text-slate-600 space-y-1 text-sm">
                    <li>Sintomas e Ondas de calor</li>
                    <li>Sono, Humor e Terapia hormonal</li>
                    <li>Consultas e Exames</li>
                  </ul>
                </div>
                <div className="md:col-span-2">
                  <h4 className="font-bold text-slate-800 mb-2">Saúde geral</h4>
                  <ul className="list-disc pl-5 text-slate-600 space-y-1 text-sm">
                    <li>Sono, Hidratação e Exercícios</li>
                    <li>Medicamentos e Pressão arterial</li>
                    <li>Peso e Observações pessoais</li>
                  </ul>
                </div>
              </div>
              <p className="text-slate-600 mb-6">
                Essas informações são registradas exclusivamente para oferecer uma experiência personalizada dentro do aplicativo.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">3. Onde seus dados são armazenados</h2>
              <p className="text-slate-600 mb-6">
                O HerCalida adota, por padrão, um modelo de armazenamento local. Isso significa que os dados registrados permanecem armazenados diretamente no dispositivo da própria usuária. Essas informações não são enviadas automaticamente para servidores do HerCalida. Essa abordagem reduz significativamente o compartilhamento de dados e oferece maior controle sobre as informações pessoais.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">4. Backup e sincronização</h2>
              <p className="text-slate-600 mb-4">
                Caso o HerCalida venha a oferecer recursos de backup ou sincronização em nuvem futuramente:
              </p>
              <ul className="list-disc pl-6 text-slate-600 mb-6 space-y-2">
                <li>a utilização será totalmente opcional;</li>
                <li>a usuária poderá escolher ativar ou não esse recurso;</li>
                <li>as informações transmitidas serão protegidas utilizando protocolos de segurança reconhecidos pela indústria.</li>
              </ul>
              <p className="text-slate-600 mb-6">
                Enquanto essa funcionalidade não estiver disponível, os dados permanecerão exclusivamente armazenados no dispositivo.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">5. Compartilhamento de informações</h2>
              <p className="text-slate-600 mb-4">
                O HerCalida não vende informações pessoais. Também não comercializamos dados relacionados à saúde. Não compartilhamos informações pessoais com terceiros para fins de publicidade comportamental ou monitoramento comercial. O compartilhamento de informações somente poderá ocorrer quando:
              </p>
              <ul className="list-disc pl-6 text-slate-600 mb-6 space-y-2">
                <li>houver autorização expressa da própria usuária;</li>
                <li>for necessário para cumprimento de obrigação legal;</li>
                <li>for exigido por determinação judicial ou autoridade competente.</li>
              </ul>

              <h2 className="text-2xl font-bold mt-10 mb-4">6. Publicidade</h2>
              <p className="text-slate-600 mb-6">
                O plano gratuito do HerCalida foi desenvolvido para oferecer uma experiência livre de anúncios. Não utilizamos publicidade para financiar o acesso às funcionalidades essenciais do aplicativo. Acreditamos que cuidar da saúde também significa oferecer uma experiência tranquila, eficiente e sem distrações.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">7. Inteligência Artificial</h2>
              <p className="text-slate-600 mb-4">
                No futuro, o HerCalida poderá disponibilizar uma assistente baseada em Inteligência Artificial. Caso essa funcionalidade seja utilizada:
              </p>
              <ul className="list-disc pl-6 text-slate-600 mb-6 space-y-2">
                <li>apenas as informações estritamente necessárias para responder à solicitação da usuária poderão ser enviadas ao serviço responsável pelo processamento da IA;</li>
                <li>sempre que possível, os dados serão enviados de forma minimizada, evitando informações que identifiquem diretamente a usuária;</li>
                <li>a IA terá como finalidade fornecer informações educativas, interpretar registros e auxiliar na organização da saúde.</li>
              </ul>
              <p className="text-slate-600 font-medium mb-6">
                A Assistente HerCalida não substitui atendimento médico, diagnóstico ou tratamento profissional.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">8. Segurança</h2>
              <p className="text-slate-600 mb-4">
                Adotamos medidas técnicas e organizacionais para proteger as informações armazenadas pelo aplicativo. Entre elas:
              </p>
              <ul className="list-disc pl-6 text-slate-600 mb-6 space-y-2">
                <li>armazenamento local por padrão;</li>
                <li>proteção contra acessos não autorizados;</li>
                <li>possibilidade de autenticação biométrica (quando suportada pelo dispositivo);</li>
                <li>atualização contínua do aplicativo para correção de vulnerabilidades.</li>
              </ul>
              <p className="text-slate-600 mb-6">
                Apesar dos nossos esforços, nenhum sistema pode garantir segurança absoluta.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">9. Controle dos seus dados</h2>
              <p className="text-slate-600 mb-4">
                A usuária possui controle sobre suas informações. Dependendo das funcionalidades disponíveis, poderá:
              </p>
              <ul className="list-disc pl-6 text-slate-600 mb-6 space-y-2">
                <li>visualizar seus registros;</li>
                <li>editar informações;</li>
                <li>excluir registros;</li>
                <li>apagar todos os dados armazenados;</li>
                <li>exportar relatórios;</li>
                <li>desinstalar o aplicativo.</li>
              </ul>
              <p className="text-slate-600 mb-6">
                Quando os dados estiverem armazenados apenas no dispositivo, sua exclusão será realizada localmente.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">10. Crianças e adolescentes</h2>
              <p className="text-slate-600 mb-6">
                O HerCalida pode ser utilizado por adolescentes que desejem acompanhar sua saúde menstrual. Quando exigido pela legislação aplicável, recomenda-se que menores de idade utilizem o aplicativo com acompanhamento de seus responsáveis legais.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">11. Alterações nesta Política</h2>
              <p className="text-slate-600 mb-4">
                Esta Política de Privacidade poderá ser atualizada periodicamente para refletir:
              </p>
              <ul className="list-disc pl-6 text-slate-600 mb-6 space-y-2">
                <li>novas funcionalidades;</li>
                <li>mudanças legais;</li>
                <li>melhorias de segurança;</li>
                <li>evolução dos serviços oferecidos.</li>
              </ul>
              <p className="text-slate-600 mb-6">
                Sempre que ocorrerem alterações relevantes, as usuárias serão informadas dentro do aplicativo ou pelos canais oficiais.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">12. Legislação aplicável</h2>
              <p className="text-slate-600 mb-6">
                O tratamento de dados realizado pelo HerCalida observará a legislação aplicável, incluindo a Lei Geral de Proteção de Dados Pessoais (LGPD - Lei nº 13.709/2018) e demais normas vigentes relacionadas à privacidade e proteção de dados.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">13. Contato</h2>
              <p className="text-slate-600 mb-12">
                Caso tenha dúvidas sobre esta Política de Privacidade, solicite esclarecimentos ou deseje exercer direitos relacionados aos seus dados, entre em contato pelos canais oficiais do HerCalida.
                <br /><br />
                <strong>E-mail:</strong> <a href="mailto:hersyncapp@gmail.com" className="font-semibold hover:underline">hersyncapp@gmail.com</a>
              </p>

              {/* NOSSA FILOSOFIA */}
              <div className="bg-rose-50/50 p-8 rounded-2xl border border-rose-100 text-center mt-12">
                <Heart className="w-8 h-8 text-rose-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Nossa filosofia</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  No HerCalida, acreditamos que tecnologia deve fortalecer a autonomia das pessoas, e não comprometer sua privacidade. Nossa missão é oferecer uma plataforma que acompanhe mulheres em diferentes fases da vida, respeitando suas escolhas, protegendo suas informações e promovendo um cuidado mais consciente com a saúde.
                </p>
                <p className="text-lg font-bold text-rose-600">
                  HerCalida<br />
                  Sua saúde. Seu ritmo. Sua privacidade.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* FOOTER SIMPLES */}
      <footer className="bg-white border-t border-slate-200 py-8 text-center">
        <p className="text-slate-400 text-sm">
          © 2026 HerCalida. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}