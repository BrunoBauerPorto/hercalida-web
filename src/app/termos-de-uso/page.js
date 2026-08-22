import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
  Heart,
  Scale,
} from "lucide-react";

export const metadata = {
  title: "Termos de Uso",
  description:
    "As regras de uso do HerCalida: o que o app é, o que ele não é, como funcionam a assinatura, o cancelamento e o reembolso.",
};

const headingClass = "text-2xl font-bold text-slate-900 mt-12 mb-4 scroll-mt-28";
const subheadingClass = "text-lg font-bold text-slate-800 mt-8 mb-3 scroll-mt-28";
const paragraphClass = "text-slate-600 leading-relaxed mb-5";

function Section({ id, number, title, children }) {
  return (
    <section aria-labelledby={id}>
      <h2 id={id} className={headingClass}>
        {number}. {title}
      </h2>
      {children}
    </section>
  );
}

function Subsection({ id, title, children }) {
  return (
    <section aria-labelledby={id}>
      <h3 id={id} className={subheadingClass}>
        {title}
      </h3>
      {children}
    </section>
  );
}

function BulletList({ children }) {
  return (
    <ul className="list-disc pl-6 text-slate-600 mb-6 space-y-2 marker:text-rose-400">
      {children}
    </ul>
  );
}

function Aviso({ tone = "amber", title, children }) {
  const tones = {
    amber: "border-amber-200 bg-amber-50 text-amber-950",
    emerald: "border-emerald-200 bg-emerald-50 text-emerald-950",
    rose: "border-rose-200 bg-rose-50 text-rose-950",
  };
  return (
    <div
      className={`not-prose mb-6 rounded-2xl border p-5 text-sm leading-relaxed ${tones[tone]}`}
    >
      {title ? <strong>{title}</strong> : null} {children}
    </div>
  );
}

export default function TermosDeUso() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 selection:bg-rose-200">
      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-4 sm:px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-rose-500"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Voltar para o início
          </Link>
          <div className="flex items-center gap-2 text-xl font-black tracking-tight text-rose-500">
            <Heart className="h-5 w-5 fill-current" aria-hidden="true" />
            HerCalida
          </div>
        </div>
      </header>

      <main>
        <section className="border-b border-slate-200 bg-white py-14 md:py-16">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-rose-50">
              <Scale className="h-8 w-8 text-rose-500" aria-hidden="true" />
            </div>
            <h1 className="mb-4 font-serif text-3xl font-bold text-slate-900 md:text-5xl">
              Termos de Uso
            </h1>
            <p className="font-medium text-slate-500">
              Última atualização: 22 de agosto de 2026
            </p>
          </div>
        </section>

        <section className="py-10 md:py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm md:p-12">
              <div className="prose prose-slate max-w-none prose-headings:font-serif prose-headings:text-slate-900 prose-a:text-fuchsia-600">
                <div className="mb-10 rounded-2xl border border-rose-100 bg-rose-50/60 p-6">
                  <p className="mb-3 text-lg font-semibold text-slate-900">
                    O resumo honesto, antes das cláusulas.
                  </p>
                  <p className="mb-0 leading-relaxed text-slate-600">
                    O HerCalida é uma ferramenta de registro e organização em saúde — não faz
                    diagnóstico e não substitui profissional. Seus registros ficam no seu aparelho
                    e você pode exportá-los quando quiser, assinando ou não. A assinatura é
                    opcional. Os planos Premium e HerCalida Assistente são cobrados pelo Google
                    Play, renovam automaticamente e podem ser cancelados a qualquer momento. Você
                    tem 7 dias para desistir da compra, por lei.
                  </p>
                </div>

                <Section id="aceitacao" number="1" title="Aceitação destes Termos">
                  <p className={paragraphClass}>
                    Estes Termos regem o uso do aplicativo HerCalida e do site oficial. Ao instalar,
                    criar um perfil ou usar o aplicativo, você concorda com eles. Se não concordar,
                    basta não utilizar o aplicativo — e, se já o utiliza, desinstalá-lo.
                  </p>
                  <dl className="mb-6 grid gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:grid-cols-[170px_1fr]">
                    <dt className="font-bold text-slate-800">Responsável</dt>
                    <dd className="m-0 text-slate-600">Bruno Bauer Porto Santos</dd>
                    <dt className="font-bold text-slate-800">Produto</dt>
                    <dd className="m-0 text-slate-600">HerCalida</dd>
                    <dt className="font-bold text-slate-800">Contato</dt>
                    <dd className="m-0">
                      <a
                        href="mailto:suporte@hercalida.com"
                        className="font-semibold text-fuchsia-700 hover:underline"
                      >
                        suporte@hercalida.com
                      </a>
                    </dd>
                  </dl>
                  <p className={paragraphClass}>
                    O tratamento de dados pessoais é descrito na{" "}
                    <Link href="/politica-de-privacidade">Política de Privacidade</Link>, que
                    integra estes Termos.
                  </p>
                </Section>

                <Section id="natureza" number="2" title="O que o HerCalida é — e o que não é">
                  <p className={paragraphClass}>
                    O HerCalida é uma ferramenta de registro, organização e educação em saúde. Ele
                    ajuda a acompanhar ciclo, sintomas, rotina, contracepção, gestação e climatério,
                    e a organizar essas informações para você levar a uma consulta.
                  </p>
                  <Aviso tone="rose" title="Não é dispositivo médico.">
                    O HerCalida não realiza diagnóstico, não prescreve tratamento, não é método
                    contraceptivo e não substitui a avaliação de profissional de saúde habilitado.
                    Estimativas de ciclo, janela fértil e datação gestacional são aproximações
                    calculadas a partir do que você registrou, e podem errar. Nenhuma decisão sobre
                    contracepção, gravidez, medicação ou tratamento deve ser tomada com base apenas
                    no aplicativo.
                  </Aviso>
                  <p className={paragraphClass}>
                    Em caso de emergência, procure atendimento médico ou ligue para o SAMU (192).
                  </p>
                </Section>

                <Section id="quem-pode" number="3" title="Quem pode usar">
                  <p className={paragraphClass}>
                    Os recursos locais de acompanhamento podem ser usados por adolescentes com
                    acompanhamento dos responsáveis, quando aplicável. A Calie e qualquer
                    processamento remoto de dados são restritos a maiores de 18 anos e dependem de
                    consentimento específico, separado e revogável dentro do aplicativo.
                  </p>
                  <p className={paragraphClass}>
                    Contratar uma assinatura exige capacidade civil para celebrar contratos.
                  </p>
                </Section>

                <Section id="dados-locais" number="4" title="Seus dados ficam no seu aparelho">
                  <p className={paragraphClass}>
                    O HerCalida não exige cadastro nem cria conta em servidor. Seus registros ficam
                    criptografados no próprio aparelho. Isso tem uma consequência importante, e
                    preferimos escrevê-la do que deixar você descobrir sozinha:
                  </p>
                  <Aviso tone="amber" title="Não temos como recuperar seus dados.">
                    Como não existe cópia em servidor, perder o aparelho, reinstalar o aplicativo ou
                    perder a chave de segurança do Android pode tornar os registros ilegíveis. Por
                    isso o aplicativo insiste em duas proteções: <strong>exportar seus dados</strong>{" "}
                    periodicamente e <strong>criar uma senha de backup</strong>. Ambas são gratuitas
                    e continuam disponíveis em qualquer plano.
                  </Aviso>
                  <p className={paragraphClass}>
                    A exportação dos seus dados não tem limite de vezes e não depende de assinatura,
                    em nenhuma hipótese.
                  </p>
                </Section>

                <Section id="planos" number="5" title="Planos, assinatura e cobrança">
                  <Subsection id="planos-composicao" title="5.1 O que cada plano inclui">
                    <p className={paragraphClass}>
                      O plano <strong>Gratuito</strong> inclui calendário e diário menstrual,
                      registros de rotina e sintomas, aprendizado local do ciclo, gestação,
                      climatério, pós-parto, lembretes, recursos de segurança, acompanhamento
                      observacional Billings, controle financeiro local, conteúdo educativo e a
                      exportação dos seus dados sem limite.
                    </p>
                    <p className={paragraphClass}>
                      O plano <strong>Premium</strong> inclui tudo do Gratuito e acrescenta
                      relatórios completos para consultas, padrões e comparações explicados. Esse
                      nível não inclui conversa generativa com a Calie.
                    </p>
                    <p className={paragraphClass}>
                      O plano <strong>HerCalida Assistente</strong> inclui tudo do Premium e
                      acrescenta a conversa contextual com a Calie, limitada a 200 mensagens por
                      mês e 30 mensagens por dia. Esses limites são cumulativos: atingir qualquer
                      um deles interrompe novas mensagens até o dia seguinte ou o próximo mês,
                      conforme o limite alcançado.
                    </p>
                    <p className={paragraphClass}>
                      Assinar o HerCalida Assistente não autoriza, por si só, o envio de registros
                      de saúde para inteligência artificial. A Calie continua dependendo do
                      consentimento específico descrito na Política de Privacidade, que pode ser
                      revogado a qualquer momento em Perfil → Segurança e privacidade.
                    </p>
                  </Subsection>

                  <Subsection id="planos-preco" title="5.2 Preço, cobrança e renovação automática">
                    <p className={paragraphClass}>
                      As assinaturas Premium e HerCalida Assistente podem ser oferecidas em
                      periodicidade mensal ou anual. Os valores vigentes são exibidos no aplicativo
                      e na ficha da Google Play antes da confirmação da compra, e os valores da loja
                      prevalecem sobre qualquer outra publicação.
                    </p>
                    <Aviso tone="amber" title="A assinatura renova sozinha.">
                      A cobrança é processada pela Google Play e renovada automaticamente ao fim de
                      cada período, na forma de pagamento cadastrada na sua conta Google, até que
                      você cancele. A renovação ocorre pelo valor vigente no momento da renovação.
                    </Aviso>
                    <p className={paragraphClass}>
                      Não recebemos nem armazenamos os dados do seu cartão. O aplicativo apenas
                      consulta a Google Play, no próprio aparelho, para saber se existe assinatura
                      ativa.
                    </p>
                  </Subsection>

                  <Subsection id="planos-teste" title="5.3 Período de teste gratuito">
                    <p className={paragraphClass}>
                      Quando houver oferta de teste gratuito, ela é concedida pela Google Play e
                      destinada a quem nunca assinou o HerCalida. A elegibilidade é verificada pela
                      loja, não por nós — se o aplicativo não exibir a oferta, é porque a conta
                      Google utilizada não está elegível.
                    </p>
                    <p className={paragraphClass}>
                      Ao fim do período de teste, a assinatura passa a ser cobrada automaticamente,
                      salvo cancelamento antes do término. Cancelar durante o teste mantém o acesso
                      até o fim dele, sem cobrança.
                    </p>
                  </Subsection>

                  <Subsection id="planos-cortesia" title="5.4 Cortesia das testadoras">
                    <p className={paragraphClass}>
                      Enquanto a monetização estiver desativada, o acesso ao HerCalida Assistente
                      pode permanecer liberado sem cobrança. Após pelo menos cinco dias distintos
                      com registros, o aplicativo concede uma única cortesia de 365 dias e grava
                      localmente sua data de término.
                    </p>
                    <p className={paragraphClass}>
                      Essa cortesia não é uma assinatura, não se renova automaticamente e não gera
                      cobrança. Depois que a monetização for ativada, novas instalações não recebem
                      automaticamente a cortesia; quem já a recebeu preserva o acesso até a data
                      gravada, conforme as regras da versão instalada.
                    </p>
                  </Subsection>

                  <Subsection id="planos-alteracao" title="5.5 Mudança de plano, preço ou composição">
                    <p className={paragraphClass}>
                      Alterações de preço para assinaturas já em vigor seguem o procedimento da
                      Google Play, com aviso prévio e possibilidade de recusa. Recusar a alteração
                      encerra a renovação, preservando o acesso até o fim do período já pago.
                    </p>
                    <p className={paragraphClass}>
                      Recursos podem ser acrescentados, alterados ou descontinuados. Se um recurso
                      relevante do plano contratado for descontinuado, avisaremos com antecedência
                      razoável pelos canais do aplicativo.
                    </p>
                    <p className={paragraphClass}>
                      Upgrade e downgrade são processados pela Google Play. Quando a mudança for
                      programada para o período seguinte, o plano atual permanece disponível até o
                      fim do período já pago. Os registros locais não são apagados pela troca de
                      nível.
                    </p>
                  </Subsection>
                </Section>

                <Section id="cancelamento" number="6" title="Cancelamento, arrependimento e reembolso">
                  <Subsection id="cancelamento-como" title="6.1 Como cancelar">
                    <p className={paragraphClass}>
                      O cancelamento é feito na Central de Assinaturas da Google Play, a qualquer
                      momento, sem multa e sem precisar falar com ninguém. O aplicativo leva você
                      até lá em Perfil → Seu acesso.
                    </p>
                    <Aviso tone="emerald" title="Cancelar não tira o que você já pagou.">
                      O acesso ao plano pago contratado continua até o fim do período já pago.
                      Depois disso, na ausência de outra assinatura ativa, o aplicativo volta ao
                      plano Gratuito — e todos os seus registros continuam lá, visíveis e
                      exportáveis.
                    </Aviso>
                    <p className={paragraphClass}>
                      Desinstalar o aplicativo ou apagar os dados locais <strong>não</strong> cancela
                      a assinatura. O cancelamento precisa ser feito na loja.
                    </p>
                  </Subsection>

                  <Subsection id="cancelamento-arrependimento" title="6.2 Direito de arrependimento (7 dias)">
                    <p className={paragraphClass}>
                      Por se tratar de contratação fora do estabelecimento comercial, você tem
                      direito de desistir da compra em até <strong>7 dias corridos</strong> contados
                      da contratação, com devolução integral do valor pago, nos termos do art. 49 do
                      Código de Defesa do Consumidor.
                    </p>
                    <p className={paragraphClass}>
                      O pedido pode ser feito diretamente pela Google Play ou, se a loja não
                      permitir, escrevendo para{" "}
                      <a
                        href="mailto:suporte@hercalida.com"
                        className="font-semibold text-fuchsia-700 hover:underline"
                      >
                        suporte@hercalida.com
                      </a>{" "}
                      dentro do prazo. Esse direito vale mesmo quando a política própria da loja
                      previr prazo menor.
                    </p>
                  </Subsection>

                  <Subsection id="cancelamento-reembolso" title="6.3 Outros reembolsos">
                    <p className={paragraphClass}>
                      Fora do prazo de arrependimento, pedidos de reembolso são analisados pela
                      Google Play, que é quem processa o pagamento. Casos de cobrança indevida,
                      falha do serviço ou indisponibilidade prolongada podem ser levados ao nosso
                      suporte, e serão tratados de boa-fé.
                    </p>
                  </Subsection>
                </Section>

                <Section id="calie" number="7" title="Uso da Calie">
                  <p className={paragraphClass}>
                    A Calie é uma camada de linguagem que organiza e explica o contexto dos seus
                    registros e está disponível somente no plano HerCalida Assistente, para maiores
                    de 18 anos que concedam o consentimento específico. Ela pode errar, omitir ou
                    apresentar informação desatualizada, como qualquer sistema desse tipo.
                  </p>
                  <BulletList>
                    <li>ela não faz diagnóstico, não prescreve e não interpreta exames;</li>
                    <li>
                      não deve ser usada em emergência, em situação de risco à vida ou como única
                      fonte para decisão de saúde;
                    </li>
                    <li>
                      o limite atual é de 30 mensagens por dia e 200 por mês, para manter o serviço
                      sustentável;
                    </li>
                    <li>
                      cada resposta pode ser denunciada pelo comando <strong>Denunciar
                      resposta</strong>, e essas denúncias são lidas.
                    </li>
                  </BulletList>
                  <p className={paragraphClass}>
                    Revogar o consentimento da Calie interrompe o processamento remoto e mantém os
                    demais recursos compatíveis com o plano funcionando normalmente.
                  </p>
                </Section>

                <Section id="uso-adequado" number="8" title="Uso adequado">
                  <p className={paragraphClass}>Ao usar o HerCalida, você concorda em não:</p>
                  <BulletList>
                    <li>
                      tentar burlar limites, verificações de assinatura ou proteções técnicas do
                      aplicativo;
                    </li>
                    <li>
                      usar o aplicativo para finalidade ilícita, ou para orientar terceiros de forma
                      que caracterize exercício de profissão de saúde;
                    </li>
                    <li>
                      copiar, redistribuir, descompilar ou criar obra derivada do aplicativo, salvo
                      nas hipóteses permitidas em lei;
                    </li>
                    <li>
                      inserir deliberadamente dados de terceiros sem que essa pessoa saiba e
                      concorde.
                    </li>
                  </BulletList>
                </Section>

                <Section id="propriedade" number="9" title="Propriedade intelectual">
                  <p className={paragraphClass}>
                    O aplicativo, a marca HerCalida, a identidade visual, os textos educativos e o
                    conteúdo produzido pela equipe são protegidos por direitos autorais e de
                    propriedade industrial.
                  </p>
                  <p className={paragraphClass}>
                    <strong>Seus registros são seus.</strong> Não reivindicamos propriedade sobre o
                    que você escreve no aplicativo, não os vendemos e não os usamos para
                    publicidade.
                  </p>
                </Section>

                <Section id="disponibilidade" number="10" title="Disponibilidade e limitação de responsabilidade">
                  <p className={paragraphClass}>
                    Trabalhamos para manter o aplicativo funcionando, mas não é possível garantir
                    operação ininterrupta ou livre de falhas. Serviços de terceiros — a própria
                    Google Play, o provedor da Calie, o sistema de notificações do Android — podem
                    ficar indisponíveis.
                  </p>
                  <p className={paragraphClass}>
                    Nos limites permitidos pelo Código de Defesa do Consumidor, não respondemos por
                    danos decorrentes do uso do aplicativo como substituto de avaliação
                    profissional, de decisões de saúde tomadas apenas com base nele, ou da perda de
                    registros locais quando não houver exportação feita pela usuária. Nenhuma
                    cláusula destes Termos afasta direitos irrenunciáveis do consumidor.
                  </p>
                </Section>

                <Section id="encerramento" number="11" title="Suspensão e encerramento">
                  <p className={paragraphClass}>
                    Você pode parar de usar o aplicativo a qualquer momento. Podemos suspender o
                    acesso em caso de uso que viole estes Termos ou a lei, ou descontinuar o produto
                    — hipótese em que avisaremos com antecedência razoável, interromperemos novas
                    cobranças e manteremos disponível a exportação dos dados durante o aviso.
                  </p>
                </Section>

                <Section id="alteracoes" number="12" title="Alterações destes Termos">
                  <p className={paragraphClass}>
                    Estes Termos podem ser atualizados para refletir mudanças legais, novos recursos
                    ou ajustes de funcionamento. Alterações relevantes, especialmente as que afetem
                    preço, composição dos planos ou direitos da usuária, serão comunicadas no
                    aplicativo antes de entrarem em vigor.
                  </p>
                </Section>

                <Section id="lei" number="13" title="Lei aplicável e foro">
                  <p className={paragraphClass}>
                    Estes Termos são regidos pelas leis brasileiras. Fica eleito o foro do domicílio
                    da consumidora para dirimir controvérsias, conforme o Código de Defesa do
                    Consumidor.
                  </p>
                  <p className={paragraphClass}>
                    Antes de qualquer medida judicial, pedimos que você escreva para o suporte:
                    quase tudo se resolve por e-mail.
                  </p>
                </Section>

                <Section id="contato" number="14" title="Contato">
                  <p className={paragraphClass}>
                    Dúvidas sobre estes Termos, sobre a assinatura ou sobre qualquer cobrança:{" "}
                    <a
                      href="mailto:suporte@hercalida.com"
                      className="font-semibold text-fuchsia-700 hover:underline"
                    >
                      suporte@hercalida.com
                    </a>
                    .
                  </p>
                </Section>

                <div className="not-prose mt-12 rounded-2xl border border-rose-100 bg-rose-50/60 p-8 text-center">
                  <CheckCircle2 className="mx-auto mb-4 h-8 w-8 text-rose-500" aria-hidden="true" />
                  <h2 className="mb-3 font-serif text-2xl font-bold text-slate-900">
                    Sem letra miúda que contradiga o que está na tela.
                  </h2>
                  <p className="mx-auto max-w-xl leading-relaxed text-slate-600">
                    Se algum ponto destes Termos divergir do que o aplicativo faz na prática,
                    escreva para o suporte. O que está errado é o texto, e ele será corrigido.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white py-8 text-center">
        <p className="text-sm text-slate-400">© 2026 HerCalida. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
