import Link from "next/link";
import {
  ArrowLeft,
  Bot,
  CheckCircle2,
  Database,
  Heart,
  LockKeyhole,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export const metadata = {
  title: "Política de Privacidade",
  description:
    "Saiba como o HerCalida trata, protege e permite controlar dados pessoais e de saúde.",
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

function ExternalLink({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="font-semibold text-fuchsia-700 underline decoration-fuchsia-200 underline-offset-2 hover:text-fuchsia-900"
    >
      {children}
    </a>
  );
}

function PlanCard({ icon: Icon, title, children }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6">
      <div className="mb-3 flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-rose-500 shadow-sm">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <h3 className="text-lg font-bold text-slate-900">{title}</h3>
      </div>
      <div className="text-sm leading-relaxed text-slate-600">{children}</div>
    </article>
  );
}

export default function PoliticaPrivacidade() {
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
              <ShieldCheck className="h-8 w-8 text-rose-500" aria-hidden="true" />
            </div>
            <h1 className="mb-4 font-serif text-3xl font-bold text-slate-900 md:text-5xl">
              Política de Privacidade
            </h1>
            <p className="font-medium text-slate-500">
              Última atualização: 12 de agosto de 2026
            </p>
          </div>
        </section>

        <section className="py-10 md:py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm md:p-12">
              <div className="prose prose-slate max-w-none prose-headings:font-serif prose-headings:text-slate-900 prose-a:text-fuchsia-600">
                <div className="mb-10 rounded-2xl border border-rose-100 bg-rose-50/60 p-6">
                  <p className="mb-3 text-lg font-semibold text-slate-900">
                    Privacidade faz parte do funcionamento do HerCalida.
                  </p>
                  <p className="m-0 leading-relaxed text-slate-600">
                    Seus registros ficam, por padrão, criptografados no seu aparelho. A Calie só
                    processa remotamente os dados descritos nesta Política após uma autorização
                    específica e pode ser desativada a qualquer momento.
                  </p>
                </div>

                <p className={paragraphClass}>
                  Bem-vinda ao HerCalida. Esta Política explica quais dados o aplicativo e o site
                  oficial podem tratar, para quais finalidades, onde eles ficam armazenados, com
                  quem podem ser compartilhados e quais escolhas estão disponíveis à usuária.
                </p>
                <p className={paragraphClass}>
                  O HerCalida apoia o registro e a organização da saúde feminina em diferentes
                  fases da vida, incluindo ciclo menstrual, uso de contraceptivos, gestação,
                  climatério e menopausa. Informações sobre saúde, vida sexual e biometria são
                  dados pessoais sensíveis e recebem proteção especial.
                </p>
                <p className={paragraphClass}>
                  Esta Política tem caráter informativo. Quando a legislação exigir consentimento,
                  ele será solicitado de forma específica, destacada e por uma ação afirmativa
                  dentro do aplicativo. A simples leitura desta Política, a compra de um plano ou
                  o uso geral do app não substituem o consentimento específico para o tratamento
                  remoto de dados pela HerCalida Assistente.
                </p>

                <nav
                  aria-label="Índice da Política de Privacidade"
                  className="my-10 rounded-2xl border border-slate-200 bg-slate-50 p-6"
                >
                  <h2 className="m-0 mb-4 text-lg font-bold text-slate-900">Nesta Política</h2>
                  <div className="grid gap-x-6 gap-y-2 text-sm sm:grid-cols-2">
                    {[
                      ["#responsavel", "Responsável e abrangência"],
                      ["#modalidades", "Gratuito, Premium e Assistente"],
                      ["#dados", "Dados tratados"],
                      ["#finalidades", "Finalidades e bases legais"],
                      ["#seguranca", "Armazenamento e segurança"],
                      ["#ia", "Calie e inteligência artificial"],
                      ["#compartilhamento", "Compartilhamento e transferências"],
                      ["#retencao", "Retenção, exclusão e direitos"],
                    ].map(([href, label]) => (
                      <a key={href} href={href} className="font-medium text-fuchsia-700 hover:underline">
                        {label}
                      </a>
                    ))}
                  </div>
                </nav>

                <Section id="responsavel" number="1" title="Quem é responsável pelo tratamento">
                  <p className={paragraphClass}>
                    Para fins da Lei Geral de Proteção de Dados Pessoais (LGPD), o responsável
                    pelas decisões sobre o tratamento de dados no HerCalida é:
                  </p>
                  <dl className="mb-6 grid gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:grid-cols-[170px_1fr]">
                    <dt className="font-bold text-slate-800">Controlador</dt>
                    <dd className="m-0 text-slate-600">Bruno Bauer Porto Santos</dd>
                    <dt className="font-bold text-slate-800">Produto</dt>
                    <dd className="m-0 text-slate-600">HerCalida</dd>
                    <dt className="font-bold text-slate-800">Privacidade e suporte</dt>
                    <dd className="m-0">
                      <a
                        href="mailto:hersyncapp@gmail.com"
                        className="font-semibold text-fuchsia-700 hover:underline"
                      >
                        hersyncapp@gmail.com
                      </a>
                    </dd>
                  </dl>
                  <p className={paragraphClass}>
                    Esse canal pode ser utilizado para dúvidas, solicitações relacionadas a dados
                    pessoais e exercício dos direitos previstos na LGPD.
                  </p>
                </Section>

                <Section id="abrangencia" number="2" title="A quem e a que esta Política se aplica">
                  <p className={paragraphClass}>
                    Esta Política se aplica ao aplicativo HerCalida para Android, ao site oficial e
                    às modalidades Gratuito, Premium e HerCalida Assistente. Durante testes beta,
                    determinados recursos pagos poderão ser liberados temporariamente e sem
                    cobrança. A liberação para teste não altera as regras de privacidade descritas
                    aqui.
                  </p>
                  <p className={paragraphClass}>
                    O HerCalida não é um dispositivo médico, não realiza diagnóstico, não prescreve
                    tratamento e não substitui avaliação de profissional de saúde habilitado.
                  </p>
                </Section>

                <Section id="modalidades" number="3" title="Modalidades de acesso e privacidade">
                  <div className="not-prose grid gap-4 lg:grid-cols-3">
                    <PlanCard icon={Heart} title="Gratuito">
                      Recursos essenciais de registro, acompanhamento, lembretes, aprendizado local
                      do ciclo e conteúdo educativo. Os registros ficam, por padrão, criptografados
                      no aparelho, sem publicidade comportamental.
                    </PlanCard>
                    <PlanCard icon={Sparkles} title="Premium">
                      Poderá oferecer análises locais, relatórios e outras ferramentas indicadas na
                      contratação. Assinar o Premium não autoriza o envio de registros de saúde para
                      uma inteligência artificial.
                    </PlanCard>
                    <PlanCard icon={Bot} title="HerCalida Assistente">
                      Inclui a Calie e outros recursos de IA identificados no app. É opcional,
                      destinada a maiores de 18 anos e depende de consentimento específico,
                      separado e revogável.
                    </PlanCard>
                  </div>
                  <p className={`${paragraphClass} mt-6`}>
                    A mudança de plano não altera a propriedade dos dados e não permite sua venda
                    ou utilização publicitária. Se a usuária não autorizar ou revogar a autorização
                    da Calie em <strong>Perfil → Segurança e privacidade</strong>, a IA ficará
                    indisponível, mas os recursos locais compatíveis com o plano continuarão
                    funcionando.
                  </p>
                  <p className={paragraphClass}>
                    Quando a cobrança estiver disponível, a loja de aplicativos processará o
                    pagamento. O HerCalida poderá receber apenas informações necessárias para
                    reconhecer e administrar a compra, como produto, situação da assinatura, token
                    da compra e datas da transação. O HerCalida não recebe o número completo do
                    cartão nem os dados bancários utilizados na Google Play.
                  </p>
                </Section>

                <Section id="dados" number="4" title="Quais dados podem ser tratados">
                  <p className={paragraphClass}>
                    O HerCalida trata apenas os dados necessários às funcionalidades escolhidas.
                    Dependendo do uso, isso pode incluir:
                  </p>

                  <Subsection id="perfil" title="4.1 Perfil">
                    <BulletList>
                      <li>nome ou apelido, idade, altura e peso;</li>
                      <li>fase de vida informada;</li>
                      <li>fotografia escolhida na galeria do aparelho;</li>
                      <li>condições ou diagnósticos informados voluntariamente.</li>
                    </BulletList>
                  </Subsection>

                  <Subsection id="ciclo" title="4.2 Ciclo, saúde reprodutiva e contracepção">
                    <BulletList>
                      <li>datas e duração de menstruações;</li>
                      <li>intensidade, aspecto e ocorrências de sangramento ou escape;</li>
                      <li>sintomas, dor, cólicas, emoções e corrimentos;</li>
                      <li>estimativas e padrões calculados a partir do histórico;</li>
                      <li>
                        método contraceptivo, marca, horários, pausas, validade, esquecimentos e
                        efeitos relatados;
                      </li>
                      <li>
                        informações voluntárias relacionadas à vida íntima e sexual, quando a
                        funcionalidade utilizada as solicitar.
                      </li>
                    </BulletList>
                  </Subsection>

                  <Subsection id="fases-vida" title="4.3 Gestação, climatério e menopausa">
                    <BulletList>
                      <li>data provável do parto e idade gestacional;</li>
                      <li>peso, sintomas, contrações e movimentos fetais;</li>
                      <li>consultas, exames, ultrassons e vacinas registrados;</li>
                      <li>
                        ondas de calor, sono, humor, terapia hormonal e demais sintomas ou registros
                        dessas fases.
                      </li>
                    </BulletList>
                  </Subsection>

                  <Subsection id="rotina" title="4.4 Saúde geral e rotina">
                    <BulletList>
                      <li>sono, hidratação, alimentação e atividade física;</li>
                      <li>medicamentos, pressão arterial e observações pessoais;</li>
                      <li>dor, sintomas físicos e emocionais;</li>
                      <li>consultas e compromissos de saúde.</li>
                    </BulletList>
                  </Subsection>

                  <Subsection id="dados-calie" title="4.5 Conteúdo da Calie">
                    <BulletList>
                      <li>perguntas e mensagens digitadas pela usuária;</li>
                      <li>respostas geradas pela Calie;</li>
                      <li>até 10 mensagens anteriores, para manter o contexto da conversa;</li>
                      <li>
                        fase de vida, condições informadas, padrões calculados pelo motor local e um
                        resumo de até 14 dias de registros recentes, como dor, sono, emoções,
                        exercício, alimentação, hidratação e sangramento.
                      </li>
                    </BulletList>
                    <p className={paragraphClass}>
                      O nome ou apelido salvo no perfil não é inserido automaticamente no contexto
                      enviado à Calie. Uma mensagem pode conter dados identificáveis caso a própria
                      usuária os escreva. A versão atual não envia fotografias, documentos, áudio ou
                      vídeo à Calie.
                    </p>
                  </Subsection>

                  <Subsection id="dados-tecnicos" title="4.6 Dados técnicos e de segurança">
                    <BulletList>
                      <li>identificador da instalação e token do Firebase Cloud Messaging;</li>
                      <li>versão do aplicativo e dos componentes utilizados;</li>
                      <li>
                        modelo, marca, sistema operacional e outras características técnicas do
                        aparelho;
                      </li>
                      <li>endereço IP, informações de conexão e registros operacionais;</li>
                      <li>
                        tokens ou sinais de integridade utilizados pelo Firebase App Check e Google
                        Play Integrity;
                      </li>
                      <li>parâmetros técnicos recebidos do Firebase Remote Config.</li>
                    </BulletList>
                    <p className={paragraphClass}>
                      Esses dados são utilizados para segurança, prevenção de abuso, entrega de
                      mensagens técnicas, configuração do app e funcionamento dos serviços. A
                      versão atual não utiliza Firebase Analytics nem Firebase Crashlytics.
                    </p>
                  </Subsection>

                  <Subsection id="dados-pagamento" title="4.7 Dados de pagamento e assinatura">
                    <p className={paragraphClass}>
                      Quando as assinaturas forem implementadas, a Google Play poderá tratar dados
                      de pagamento, faturamento e conta Google. O HerCalida poderá tratar o
                      identificador do produto, token de compra, status da assinatura, datas de
                      início, renovação e cancelamento e metadados necessários para liberar o acesso
                      e prestar suporte.
                    </p>
                  </Subsection>

                  <Subsection id="dados-beta" title="4.8 Lista de interesse no beta">
                    <p className={paragraphClass}>
                      Quando uma pessoa preenche o formulário do site, o HerCalida registra o
                      e-mail informado, a data do cadastro, a origem do formulário, a finalidade
                      da comunicação e a versão da Política de Privacidade vigente. Não são
                      solicitados dados de saúde nesse formulário.
                    </p>
                  </Subsection>
                </Section>

                <Section id="finalidades" number="5" title="Para que os dados são utilizados">
                  <BulletList>
                    <li>salvar e exibir os registros escolhidos pela usuária;</li>
                    <li>
                      calcular localmente histórico, médias, variabilidade e nível de confiança do
                      ciclo;
                    </li>
                    <li>gerar gráficos, relatórios e observações baseadas nos registros;</li>
                    <li>programar lembretes locais de contraceptivos, consultas e rotinas;</li>
                    <li>proteger o acesso com PIN e, quando habilitada, biometria;</li>
                    <li>responder às solicitações feitas à Calie após consentimento específico;</li>
                    <li>disponibilizar artigos educativos armazenados no Cloud Firestore;</li>
                    <li>
                      alterar parâmetros operacionais da Calie por meio do Remote Config;
                    </li>
                    <li>
                      validar a integridade do app e prevenir fraude, abuso e uso não autorizado das
                      APIs;
                    </li>
                    <li>reconhecer compras, assinaturas e direitos de acesso;</li>
                    <li>
                      administrar a lista de interesse, enviar convites para o beta fechado e
                      comunicar novidades relevantes do produto;
                    </li>
                    <li>cumprir obrigações legais e atender solicitações de suporte e de direitos.</li>
                  </BulletList>
                  <p className={paragraphClass}>
                    Os dados não são utilizados para decisões de crédito, emprego, seguro ou
                    seleção de risco, nem para publicidade comportamental.
                  </p>
                </Section>

                <Section id="bases-legais" number="6" title="Bases legais">
                  <p className={paragraphClass}>
                    Conforme a LGPD e de acordo com cada operação, o tratamento poderá se apoiar
                    em:
                  </p>
                  <BulletList>
                    <li>
                      <strong>consentimento específico e destacado</strong>, especialmente para
                      dados sensíveis e envio de contexto à HerCalida Assistente;
                    </li>
                    <li>
                      <strong>execução de contrato ou de procedimentos solicitados</strong>, para
                      disponibilizar planos, recursos e suporte;
                    </li>
                    <li>
                      <strong>cumprimento de obrigação legal ou regulatória</strong>;
                    </li>
                    <li>
                      <strong>prevenção à fraude e segurança</strong>, para identificação,
                      autenticação e proteção do serviço;
                    </li>
                    <li>
                      <strong>legítimo interesse</strong>, quando aplicável a dados não sensíveis e
                      após avaliação de necessidade, proporcionalidade e direitos da titular.
                    </li>
                  </BulletList>
                  <p className={paragraphClass}>
                    O consentimento pode ser revogado gratuitamente. A revogação não torna
                    ilegítimos os tratamentos realizados de forma válida anteriormente e poderá
                    impedir apenas a funcionalidade que dependa daquele tratamento.
                  </p>
                </Section>

                <Section id="seguranca" number="7" title="Armazenamento local e segurança">
                  <div className="not-prose mb-6 grid gap-4 sm:grid-cols-3">
                    {[
                      [Database, "Dados locais", "Registros e resultados ficam, por padrão, no aparelho."],
                      [LockKeyhole, "AES-256", "As bases locais são protegidas por criptografia."],
                      [ShieldCheck, "App Check", "Chamadas remotas recebem proteção contra abuso."],
                    ].map(([Icon, title, description]) => (
                      <div key={title} className="rounded-2xl border border-slate-200 p-5 text-center">
                        <Icon className="mx-auto mb-3 h-6 w-6 text-rose-500" aria-hidden="true" />
                        <p className="mb-1 font-bold text-slate-900">{title}</p>
                        <p className="text-sm leading-relaxed text-slate-600">{description}</p>
                      </div>
                    ))}
                  </div>
                  <p className={paragraphClass}>
                    Por padrão, perfil, saúde, rotina, histórico da Calie e resultados calculados
                    ficam no aparelho. As bases são protegidas com criptografia AES-256, e a chave é
                    mantida no armazenamento seguro do sistema operacional.
                  </p>
                  <BulletList>
                    <li>bloqueio por PIN e autenticação biométrica, quando disponíveis;</li>
                    <li>Firebase App Check e Play Integrity nas chamadas remotas;</li>
                    <li>comunicação HTTPS com Firebase e Google;</li>
                    <li>backup automático do Android desativado para as bases do app.</li>
                  </BulletList>
                  <p className={paragraphClass}>
                    O HerCalida não recebe nem armazena impressão digital, imagem facial ou modelo
                    biométrico. A verificação é feita pelo sistema operacional, que informa apenas
                    se a autenticação foi aprovada. Nenhum sistema é absolutamente seguro; a
                    usuária deve proteger o aparelho e manter o sistema e o app atualizados.
                  </p>
                </Section>

                <Section id="ia" number="8" title="Inteligência artificial e processamento pela Google">
                  <p className={paragraphClass}>
                    A Calie utiliza o <strong>Firebase AI Logic</strong>, conectado à{" "}
                    <strong>Gemini Developer API</strong>, ambos fornecidos pela Google. Segundo a
                    documentação do Firebase, o Firebase AI Logic não armazena por si só as entradas
                    e saídas; a retenção aplicável depende do provedor da Gemini API.
                  </p>
                  <p className={paragraphClass}>
                    O projeto do HerCalida utiliza uma conta de faturamento em nuvem ativa. Segundo
                    os termos vigentes para Serviços Pagos, a Google não utiliza prompts e respostas
                    para melhorar seus produtos. A Google pode, porém, registrá-los por período
                    limitado para segurança, prevenção de violações e cumprimento de obrigações.
                    Dados operacionais, como contagem de tokens, falhas, filtros de segurança,
                    identificadores técnicos e endereço IP, também podem ser tratados para operar e
                    proteger o serviço.
                  </p>
                  <p className={paragraphClass}>
                    Se a configuração de faturamento ou os termos mudarem de forma relevante, o
                    HerCalida deverá desativar a Calie ou informar a alteração e solicitar nova
                    autorização antes de continuar o processamento.
                  </p>
                  <p className={paragraphClass}>
                    A Calie recebe somente o contexto descrito na seção 4.5. Ela é orientada a não
                    diagnosticar, prescrever, ajustar medicamentos, confirmar gravidez, fertilidade
                    ou eficácia contraceptiva, nem substituir atendimento profissional. Como toda IA
                    generativa, ainda pode produzir respostas imprecisas. Em urgências ou diante de
                    sintomas intensos ou persistentes, procure atendimento profissional apropriado.
                  </p>
                  <p className={paragraphClass}>
                    Consulte os{" "}
                    <ExternalLink href="https://ai.google.dev/gemini-api/terms">
                      Termos adicionais da Gemini API
                    </ExternalLink>{" "}
                    e a página de{" "}
                    <ExternalLink href="https://firebase.google.com/support/privacy/">
                      privacidade e segurança do Firebase
                    </ExternalLink>
                    .
                  </p>
                </Section>

                <Section id="notificacoes" number="9" title="Notificações">
                  <p className={paragraphClass}>
                    Os lembretes de pílulas, consultas e rotinas são programados localmente. Seus
                    horários e conteúdos não são enviados ao Firebase Cloud Messaging na versão
                    atual. O sistema operacional poderá exibir a notificação na tela bloqueada; a
                    usuária pode ajustar permissão, som e visibilidade nas configurações do aparelho.
                  </p>
                  <p className={paragraphClass}>
                    O HerCalida usa permissões de notificação, alarme exato, vibração,
                    reinicialização e bloqueio de suspensão somente para entregar os lembretes
                    configurados. O Firebase Cloud Messaging pode manter um token técnico para
                    mensagens remotas ou operacionais. Ao apagar todos os dados, o app tenta excluir
                    esse token, mas a conclusão pode depender da internet e do Firebase.
                  </p>
                </Section>

                <Section id="site" number="10" title="Artigos, fontes e site oficial">
                  <p className={paragraphClass}>
                    Os artigos educativos são consultados no Cloud Firestore. O conteúdo é público,
                    e registros pessoais de saúde não são enviados ao Firestore para essa finalidade.
                  </p>
                  <p className={paragraphClass}>
                    O e-mail fornecido voluntariamente no formulário de interesse do beta é
                    armazenado em uma base Cloud Firestore do site para administrar convites e
                    novidades do HerCalida. Essa lista não recebe os registros de saúde mantidos no
                    aplicativo e não é utilizada para publicidade comportamental.
                  </p>
                  <p className={paragraphClass}>
                    O app poderá obter arquivos tipográficos da infraestrutura Google Fonts, que
                    poderá receber dados técnicos como IP e informações da requisição. O site oficial
                    é hospedado pela Vercel, que poderá tratar IP, agente do navegador e registros de
                    acesso para entregar e proteger a página, mesmo sem cookies de publicidade ou
                    ferramenta própria de analytics do HerCalida.
                  </p>
                  <p className={paragraphClass}>
                    Consulte a{" "}
                    <ExternalLink href="https://policies.google.com/privacy">
                      Política de Privacidade da Google
                    </ExternalLink>{" "}
                    e a{" "}
                    <ExternalLink href="https://vercel.com/legal/privacy-policy">
                      Política de Privacidade da Vercel
                    </ExternalLink>
                    .
                  </p>
                </Section>

                <Section id="compartilhamento" number="11" title="Compartilhamento de dados">
                  <p className={paragraphClass}>
                    O HerCalida não vende, aluga nem comercializa dados pessoais ou de saúde e não
                    compartilha dados de saúde para publicidade comportamental. Dados poderão ser
                    tratados ou compartilhados somente:
                  </p>
                  <BulletList>
                    <li>
                      com a <strong>Google</strong>, para Firebase AI Logic, Gemini Developer API,
                      App Check, Play Integrity, Cloud Messaging, Remote Config, Cloud Firestore,
                      Google Fonts e futuras compras na Google Play;
                    </li>
                    <li>
                      com a <strong>Vercel</strong>, para hospedagem e segurança do site;
                    </li>
                    <li>
                      com fornecedores estritamente necessários, identificados nesta Política antes
                      do tratamento;
                    </li>
                    <li>por escolha da usuária, ao exportar, salvar ou compartilhar dados;</li>
                    <li>para cumprir lei, ordem válida ou exercer direitos em processos.</li>
                  </BulletList>
                  <p className={paragraphClass}>
                    Os fornecedores tratam dados de acordo com suas funções, contratos e políticas
                    aplicáveis. O HerCalida busca limitar cada compartilhamento ao mínimo necessário.
                  </p>
                </Section>

                <Section id="transferencia" number="12" title="Transferência internacional">
                  <p className={paragraphClass}>
                    Google, Firebase e Vercel mantêm infraestrutura e prestadores em diferentes
                    países. Por isso, dados técnicos e, quando a Calie for utilizada, o conteúdo
                    enviado à IA poderão ser processados fora do Brasil. As transferências deverão
                    observar os mecanismos permitidos pela LGPD e salvaguardas contratuais, técnicas
                    e organizacionais adequadas. A localização exata pode variar conforme a
                    infraestrutura do fornecedor.
                  </p>
                </Section>

                <Section id="retencao" number="13" title="Retenção e exclusão">
                  <Subsection id="dados-locais" title="13.1 Dados locais">
                    <p className={paragraphClass}>
                      Os registros locais permanecem no aparelho até serem editados, excluídos, até
                      o uso de <strong>Apagar todos os dados</strong> ou a desinstalação. Como o
                      backup automático está desativado e a chave criptográfica não é exportada, a
                      reinstalação, a troca de assinatura do app ou a perda da chave podem tornar os
                      dados anteriores irrecuperáveis.
                    </p>
                    <p className={paragraphClass}>Ao apagar todos os dados, o app:</p>
                    <BulletList>
                      <li>cancela notificações locais;</li>
                      <li>remove PIN, consentimentos, registros e caches criptografados;</li>
                      <li>tenta excluir o token do Firebase Cloud Messaging;</li>
                      <li>cria novas bases vazias para que o app possa continuar abrindo.</li>
                    </BulletList>
                  </Subsection>

                  <Subsection id="arquivos-exportados" title="13.2 Arquivos exportados">
                    <p className={paragraphClass}>
                      A usuária pode exportar dados em JSON, salvar relatórios ou compartilhá-los.
                      Esses arquivos podem conter dados sensíveis e não ficam protegidos pela
                      criptografia interna. Cópias em Downloads, Google Drive, e-mail ou outros
                      destinos não podem ser apagadas pelo HerCalida e devem ser gerenciadas pela
                      própria usuária. Uma cópia temporária pode permanecer no diretório temporário
                      até que o Android faça sua limpeza.
                    </p>
                  </Subsection>

                  <Subsection id="retencao-calie" title="13.3 Calie e serviços remotos">
                    <p className={paragraphClass}>
                      O histórico visível do chat e as respostas cacheadas ficam localmente e são
                      apagados pelos controles do app. O Firebase AI Logic não mantém uma base própria
                      dessas entradas e saídas. A Google poderá conservar registros por período
                      limitado para segurança, prevenção de abuso e obrigações legais. Solicitações
                      de exclusão serão tratadas dentro das possibilidades técnicas e legais do
                      serviço.
                    </p>
                  </Subsection>

                  <Subsection id="retencao-assinaturas" title="13.4 Assinaturas e obrigações legais">
                    <p className={paragraphClass}>
                      Dados de compra, suporte e transação poderão ser mantidos durante o prazo
                      necessário para prestar o serviço, prevenir fraude, exercer direitos e cumprir
                      obrigações legais. Depois disso, deverão ser excluídos ou anonimizados.
                    </p>
                    <div className="not-prose mb-6 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-relaxed text-amber-950">
                      <strong>Importante:</strong> apagar os dados ou desinstalar o app não cancela
                      uma assinatura. Assinaturas da Google Play devem ser administradas ou
                      canceladas na Central de Assinaturas da loja. Cancelar a assinatura também não
                      apaga automaticamente os registros locais.
                    </div>
                  </Subsection>

                  <Subsection id="retencao-beta" title="13.5 Lista de interesse no beta">
                    <p className={paragraphClass}>
                      O e-mail da lista de interesse será mantido enquanto for necessário para
                      administrar o beta e enviar as novidades solicitadas, ou até que a pessoa peça
                      sua exclusão pelo canal de privacidade. A retirada da lista é gratuita.
                    </p>
                  </Subsection>
                </Section>

                <Section id="direitos" number="14" title="Controle da usuária e direitos previstos na LGPD">
                  <p className={paragraphClass}>Conforme aplicável, a usuária pode:</p>
                  <BulletList>
                    <li>confirmar a existência de tratamento e acessar seus dados;</li>
                    <li>corrigir dados incompletos, inexatos ou desatualizados;</li>
                    <li>
                      solicitar anonimização, bloqueio ou eliminação de dados desnecessários,
                      excessivos ou irregulares;
                    </li>
                    <li>solicitar portabilidade, observadas a regulamentação e limitações técnicas;</li>
                    <li>obter informações sobre compartilhamentos;</li>
                    <li>saber as consequências de não fornecer consentimento;</li>
                    <li>revogar o consentimento e solicitar eliminação, ressalvadas hipóteses legais;</li>
                    <li>
                      apresentar petição à Autoridade Nacional de Proteção de Dados e a órgãos de
                      defesa do consumidor.
                    </li>
                  </BulletList>
                  <p className={paragraphClass}>
                    No app, é possível visualizar e editar registros, exportar dados, revogar o
                    consentimento da Calie e apagar todos os dados locais. Para remover o e-mail da
                    lista de interesse ou fazer solicitações sobre dados técnicos e fornecedores,
                    escreva para{" "}
                    <a
                      href="mailto:hersyncapp@gmail.com"
                      className="font-semibold text-fuchsia-700 hover:underline"
                    >
                      hersyncapp@gmail.com
                    </a>
                    . Poderemos solicitar informações mínimas para verificar a legitimidade do
                    pedido, sem exigir dados desproporcionais.
                  </p>
                </Section>

                <Section id="menores" number="15" title="Crianças e adolescentes">
                  <p className={paragraphClass}>
                    O HerCalida não é direcionado a crianças. A Calie e qualquer processamento
                    remoto pela HerCalida Assistente são bloqueados para menores de 18 anos.
                  </p>
                  <p className={paragraphClass}>
                    Adolescentes podem utilizar recursos locais de acompanhamento menstrual e de
                    saúde conforme a classificação etária e a legislação aplicável. O tratamento
                    deverá observar o melhor interesse da pessoa menor de idade, com acompanhamento
                    de responsável legal quando exigido. Se um responsável acreditar que uma criança
                    forneceu dados indevidamente, deverá usar o canal de privacidade para orientação.
                  </p>
                </Section>

                <Section id="permissoes" number="16" title="Permissões do aparelho">
                  <BulletList>
                    <li><strong>notificações</strong>, para exibir lembretes;</li>
                    <li>
                      <strong>alarme exato, vibração, reinicialização e wake lock</strong>, para
                      entregar lembretes no horário;
                    </li>
                    <li><strong>biometria</strong>, para desbloqueio local;</li>
                    <li>
                      <strong>imagem selecionada</strong>, somente quando a usuária escolher uma foto
                      de perfil;
                    </li>
                    <li>
                      <strong>internet</strong>, para artigos, configuração, segurança, mensagens
                      técnicas, IA e futuras validações de assinatura.
                    </li>
                  </BulletList>
                  <p className={paragraphClass}>
                    A versão atual não solicita localização, contatos, SMS ou microfone.
                  </p>
                </Section>

                <Section id="alteracoes" number="17" title="Alterações desta Política">
                  <p className={paragraphClass}>
                    Esta Política poderá ser atualizada para refletir mudanças legais, novas
                    modalidades, fornecedores, recursos, medidas de segurança ou formas de
                    tratamento. Alterações relevantes serão informadas no app ou nos canais oficiais.
                    Quando uma mudança afetar finalidade baseada em consentimento, a nova versão será
                    apresentada antes do tratamento e, quando necessário, será solicitada nova
                    autorização.
                  </p>
                </Section>

                <Section id="legislacao" number="18" title="Legislação e documentos relacionados">
                  <p className={paragraphClass}>
                    Esta Política deve ser interpretada conforme a legislação brasileira,
                    especialmente a{" "}
                    <ExternalLink href="https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709compilado.htm">
                      Lei nº 13.709/2018 — Lei Geral de Proteção de Dados Pessoais
                    </ExternalLink>
                    .
                  </p>
                  <p className={paragraphClass}>
                    Regras comerciais, preços, renovação, cancelamento, reembolso, testes gratuitos
                    e limites dos planos deverão ser descritos separadamente nos Termos de Uso e nas
                    telas de contratação.
                  </p>
                </Section>

                <Section id="contato" number="19" title="Contato">
                  <p className={paragraphClass}>
                    Para dúvidas sobre privacidade, solicitações ou reclamações, escreva para{" "}
                    <a
                      href="mailto:hersyncapp@gmail.com"
                      className="font-semibold text-fuchsia-700 hover:underline"
                    >
                      hersyncapp@gmail.com
                    </a>
                    .
                  </p>
                </Section>

                <div className="not-prose mt-12 rounded-2xl border border-rose-100 bg-rose-50/60 p-8 text-center">
                  <CheckCircle2 className="mx-auto mb-4 h-8 w-8 text-rose-500" aria-hidden="true" />
                  <h2 className="mb-3 font-serif text-2xl font-bold text-slate-900">
                    Sua saúde. Seu ritmo. Sua privacidade.
                  </h2>
                  <p className="mx-auto max-w-xl leading-relaxed text-slate-600">
                    Tecnologia deve fortalecer sua autonomia. O HerCalida busca acompanhar cada fase
                    respeitando suas escolhas e mantendo você no controle das suas informações.
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
