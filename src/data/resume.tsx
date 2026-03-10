import { Icons } from "@/components/icons";

export const DATA = {
  name: "Matheus Garibaldi",
  initials: "MG",
  url: "https://garibaldi.me",
  description: "A única maneira de fazer algo excelente é amar o que você faz.",
  summary:
    "Desenvolvedor back-end em formação, já praticando Node.js, Express e TypeScript. Tenho experiência prática em projetos acadêmicos e pessoais construindo APIs REST e trabalhando com MongoDB e MySQL. Também conheço  Java com Spring Boot, sempre buscando aplicar boas práticas e uma arquitetura bem estruturada. Já tive contato com CI/CD (GitHub Actions), Docker, integração de sistemas e até serviços em nuvem na AWS.",
  avatarUrl: "/me.jpg",

  skills: [
    "Typescript",
    "Node.js",
    "React",
    "Angular",
    "Next.js",
    "VueJS",
    "TailwindCSS",
    "MongoDB",
    "MySQL",
    "Java",
    "Spring",
    "AWS",
    "Docker",
    "RabbitMQ",
    "Prometheus",
    "Grafana",
    "Redis",
    "Eureka Naming Server",
    "Eureka Client",
    "Spring Cloud Config",
    "Keycloak",
    "Python",
    "Terraform"

  ],

  highlights: [
    {
      name: "C1: Inglês Avançado, TOEIC 870/990 Pts",
      image: "/eua.png",
      link: "https://www.linkedin.com/posts/matheus-garibaldi_gostaria-de-compartilhar-que-recebi-uma-nova-activity-7232438985300602884-eXd-?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAC_GqlEB91DQQiFxRmpaCq6pgzhBSBjMw5o"

    },
    {
      name: "AWS Cloud Practitioner",
      image: "/ccp.png",
      link: "https://www.credly.com/badges/79d97225-7015-40e4-9a4c-f42829b434bf/public_url"
    }
  ],

  contact: {
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/garibaldii",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/matheus-garibaldi?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        icon: Icons.linkedin,

        navbar: true,
      },
      Credly: {
        name: "Credly",
        url: "https://www.credly.com/users/matheus-garibaldi/badges",
        icon: Icons.credly,

        navbar: true
      },

      email: {
        name: "Send Email",
        url: "mailto:matheus.garibaldi8@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  academic: [
    {

      company: "(FATEC) Faculdade de Tecnologia do Estado de São Paulo",
      badges: [],
      title: "Técnologo em Desenvolvimento de Software em Multiplataformas",
      logoUrl: "/companies/fatec.png",
      start: "Jan/2023",
      end: "Dez/2026",

    },
    {

      company: "(ETEC) Elias Miguel Júnior",
      badges: [],
      title: "Técnico em Administração",
      logoUrl: "/companies/etec.png",
      start: "Jan/2018",
      end: "Jul/2019",

    },

  ],

  work: [
    {
      company: "GFT Technologies",
      href: "https://www.gft.com/br/pt",
      badges: [],
      location: "Híbrido",
      title: "Estagiário Back-End",
      logoUrl: "/companies/gft.jpg",
      start: "Out/2025",
      end: "atual",
      description:
        "Passei nos quatro primeiros mêses em estudo intensivo de tecnologias back-end, tais como: SpringBoot, arquiteturas de sistemas distribuídos, gerenciamento de microsserviços com Eureka, Api Gateway, RabbitMQ, Observação com Prometheus, Grafana e actuator(spring), Autenticação com provedor terceiro (Keycloak) ,Orquestração de contêiners com Docker, front-end com angular, Análise de Dados(contrução de modelo de ML), CI/CD com Gitlab e Github Actions,IA Generativa com Google IA Studio e Hospedagem de serviços em nuvem com AWS, provisão de ambientes de nuvem com Terraform. Após este prazo, serei direcionado para projetos dentro da empresa.",
    },
    {
      company: "LDS Solar Distribuidora",
      href: "https://www.ldssolar.com.br/",
      badges: [],
      location: "Presencial",
      title: "Assistente Administrativo",
      logoUrl: "/companies/lds.png",
      start: "Out/2020",
      end: "Out/2025",
      description:
        "Automatizei processos internos com planilhas avançadas e scripts, reduzindo erros e aumentando a eficiência logística. Desenvolvi relatórios e dashboards em Power BI para análise de dados e apoio estratégico. Contribuí com melhorias no sistema de orçamentos da empresa, incluindo o desenvolvimento de funcionalidades sob demanda, além da criação de ferramentas específicas, como planilhas para cálculo de painéis em projetos e gerenciador de estoque.",
    },
    {
      company: "Player Drones",
      badges: [],
      href: "https://www.playerdrones.com.br/",
      location: "Remote",
      title: "Freelancer de Design Gráfico",
      logoUrl: "/companies/player-drones.png",
      start: "Fev/2020",
      end: "Out/2020",
      description:
        "Criação de artes para empresas de diferentes setores (automotivo, farmacêutico, varejo e odontológico), utilizando Adobe Photoshop. Atuação em contato direto com o intermediador para ajustes e melhorias, garantindo peças visuais alinhadas às necessidades dos clientes.",
    },

  ],

  projects: [
    {
      title: "Previsão da Nota da Redação (ENEM)",
      href: "https://github.com/garibaldii/ML-IA-challenge",
      dates: "Jan/2026",
      active: true,
      description:
        "Este projeto foi desenvolvido como parte do Challenge de Data Science, com o objetivo de avaliar habilidades práticas em análise exploratória de dados, feature engineering e modelagem preditiva, utilizando dados reais do ENEM.Construir um modelo simples de Machine Learning capaz de prever a nota da redação (NU_NOTA_REDACAO) de um candidato, a partir de informações disponíveis no conjunto de dados.A abordagem adotada neste projeto foi de regressão, com o objetivo de prever a nota numérica da redação (variando de 0 a 1000).A avaliação do modelo foi realizada no conjunto de validação, utilizando métricas padrão de regressão:MAE (Mean Absolute Error): aproximadamente 93 pontos R²: aproximadamente 0,42",
      technologies: [
        "Python",
        "Panda",
        "Matplot",
        "Seaborn"

      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/garibaldii/ML-IA-challenge",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/ML.png",
    },
    {
      title: "API de Gerenciamento Hospitalar",
      href: "https://github.com/garibaldii/ms-hospital-challenge",
      dates: "Nov/2025",
      active: true,
      description:
        "Plataforma de gerenciamento hospitalar baseada em microsserviços, responsável por agendamento de consultas, gestão de pacientes, clínicas, exames laboratoriais, diagnósticos e notificações por e-mail. A arquitetura utiliza Spring Cloud Gateway, Eureka Service Discovery, Observabilidade das aplicaçõe com Prometheus e Grafana,Keycloak para autenticação, RabbitMQ para mensageria e MySQL com bancos isolados por microsserviço.",
      technologies: [
        "Java",
        "Spring Boot",
        "Spring Cloud",
        "Spring Cloud Gateway",
        "Eureka Service Discovery",
        "Keycloak",
        "RabbitMQ",
        "MySQL",
        "Prometheus",
        "Grafana",
        "Docker"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/garibaldii/ms-hospital-challenge",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/ms-hospital.png",
    },
    {
      title: "Prática Curso - Microsserviços 2026 c. Spring Cloud Boot Kubernetes e Docker",
      href: "https://github.com/garibaldii/curso-ms.git",
      dates: "Nov/2025",
      active: true,
      description:
        "Repositório com o conteúdo prático relacionado ao curso. Assuntos praticados: Microsserviços com Feign, Spring Cloud, Netflix Eureka, API Gateway, Circuit Breaker, Resilience4j, Config Server, LoadBalancer",
      technologies: [
        "Java",
        "Spring Boot",
        "Spring Cloud (configuração remota)",
        "Eureka (Server e Client - Gerenciamento de serviços)",
        "Spring API Gateway (porta de entrada da aplicação)",
        "Circuit Breaker",
        "Resilience4j",
        "Load Balancer (Eureka Client)"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/garibaldii/ms-hospital-challenge",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/curso-ms.png",
    },
    {
      title: "Crud AWS",
      href: "https://github.com/garibaldii/front-aws",
      dates: "Mar/2024 - Abr/2024",
      active: true,
      description:
        "CRUD full-stack com frontend em Vite, que consome uma API REST hospedada em EC2 e integra bancos de dados MongoDB (EC2) e MySQL (RDS). Além da lógica de cadastro, listagem, atualização e exclusão de dados, o sistema também utiliza buckets S3 para armazenamento de arquivos, com replicação entre ambientes de homologação e produção. Na parte de monitoramento e infraestrutura, conta com CloudWatch para logs e métricas em tempo real, além de Docker e pipeline de CI/CD no GitHub Actions, garantindo builds, testes e deploys automatizados.",
      technologies: [
        "React.Js",
        "VueJS",
        "JavaScript",
        "MongoDB",
        "MySQL",
        "TailwindCSS",
        "Express",
        "Node.js",
        "AWS"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/garibaldii/front-aws",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/crud-aws.png",
    },
    {
      title: "App Cadastro de Professores e Cursos",
      href: "https://github.com/proj-cadastro/projeto-cadastro-app",
      dates: "Jan/2025 - Jul/2025",
      active: true,
      description:
        "Projeto acadêmico desenvolvido na FATEC Votorantim com base em SCRUM, voltado para a secretaria acadêmica.A aplicação segue a arquitetura MVC e expõe uma API RESTful (CRUD completo), permitindo também a geração de relatórios em PDF. Conta com login seguro via JWT, interface simples e responsiva, e foi projetada para alta disponibilidade e boa performance.",
      technologies: [
        "React Native",
        "TypeScript",
        "MySQL",
        "Node.js",
        "TailwindCSS",
      ],
      links: [

        {
          type: "Source",
          href: "https://github.com/proj-cadastro/projeto-cadastro-app",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/cadastro-professores.png",
    },
    {
      title: "Gerenciador de Estoque",
      href: "https://github.com/garibaldii/front-estoqueLDS",
      dates: "Fev/2025 - Jun/2025",
      active: true,
      description:
        "Sistema de gerenciamento de estoque da LDS Energia Solar, voltado para o controle e rastreio de painéis e inversores fotovoltaicos, com suporte a scanner de código de barras, cadastro técnico de componentes e funcionalidades práticas para uso no dia a dia da operação.",
      technologies: [
        "Typescript",
        "Next.js",
        "React",
        "TailwindCSS",
        "Shadcn UI",
        "Node.Js",
        "Express",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/garibaldii/front-estoqueLDS",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/gerenciador-estoque.png",
    },
  ],

  certifications: [
    {
      title: "TOEIC (Test of English for International Communication)",
      href: "https://www.linkedin.com/posts/matheus-garibaldi_gostaria-de-compartilhar-que-recebi-uma-nova-activity-7232438985300602884-eXd-?utm_source=share&utm_medium=member_android&rcm=ACoAAC_GqlEB91DQQiFxRmpaCq6pgzhBSBjMw5o",
      dates: "Mai/2025 - Mai/2027",
      active: true,
      description:
        "O TOEIC (Test of English for International Communication) é um exame internacional que avalia a proficiência em inglês voltada para o ambiente profissional e corporativo. OBS: 870/990 points",
      image: "/certifications/toeic.jpg",
      organizationName: "ETS TOEIC"
    },
    {
      title: "Terraform for AWS - Begginer to Expert",
      href: "https://www.linkedin.com/posts/matheus-garibaldi_gostaria-de-compartilhar-que-recebi-uma-nova-activity-7232438985300602884-eXd-?utm_source=share&utm_medium=member_android&rcm=ACoAAC_GqlEB91DQQiFxRmpaCq6pgzhBSBjMw5o",
      dates: "Mar/2026",
      active: true,
      description:
        "Curso voltado para noção geral da linguagem Infraestructure as Code (IaaC) Terraform. Noções de como arquitetar ambiente nuvem, este em específico com provedor AWS.",
      image: "/certifications/terraform.jpg",
      organizationName: "Udemy"
    },
    {
      title: "Ultimate AWS Cloud Practitioner CLF-02 2026",
      href: "https://gftbrasil.udemy.com/certificate/UC-bab49b02-1830-4906-b9eb-1fc6f2ca7158/",
      dates: "Fev/2026",
      active: true,
      description:
        "Curso intensivo voltado para prepararação a certificação AWS Certified Cloud Practitioner (CLF-C02). Cobre os principais domínios exigidos pelo exame, como conceitos de nuvem, modelos de cobrança, serviços AWS essenciais, segurança e conformidade com foco em explicações diretas, exemplos práticos e questões de simulado para fixação",
      image: "/certifications/mareek.jpg",
      organizationName: "Udemy"
    },
    {
      title: "Cloud Essentials",
      href: "https://www.credly.com/badges/e6dadc26-48d4-464b-9c95-2eadc73f22a5/public_url",
      dates: "Jan/2026",
      active: true,
      description:
        "Badge digital concedida após a conclusão do curso introdutório Cloud Essentials no AWS Skill Builder. Ela comprova conhecimento fundamental sobre computação em nuvem, principais serviços da AWS, modelo de responsabilidade compartilhada e benefícios financeiros como CAPEX vs OPEX.",
      image: "/certifications/cloud-essentials.png",
      organizationName: "AWS Educate"
    },
    {
      title: "Technical Accredited",
      href: "https://www.credly.com/badges/104b014b-11b1-4fa4-92d8-b55152e2ae09/public_url",
      dates: "Jan/2026",
      active: true,
      description:
        "Credencial concedida a profissionais que demonstram conhecimento técnico sobre soluções AWS em contextos específicos (como vendas técnicas ou arquitetura básica). Ela valida a capacidade de posicionar serviços da AWS, entender casos de uso e explicar benefícios técnicos para clientes.",
      image: "/certifications/technical-accredited.png",
      organizationName: "AWS Educate"
    },
    {
      title: "Getting Stated with Compute",
      href: "https://www.credly.com/badges/7fab2522-fb87-4404-af11-59331c191bba/public_url",
      dates: "Ago/2025",
      active: true,
      description:
        "Fundamentos de computação em nuvem e do Amazon EC2, incluindo tipos de instâncias, configuração, armazenamento e segurança. Aprendi a lançar, gerenciar e configurar instâncias EC2 de acordo com diferentes necessidades de workload.",
      image: "/certifications/c7.png",
      organizationName: "AWS Educate"
    },
    {
      title: "Microsserviços 2025 c. Spring cloud Boot, Kubernetes e Docker",
      href: "https://www.udemy.com/certificate/UC-d17f8a9e-2ee5-4688-b73d-2efe6144c73a/",
      dates: "Nov/2025",
      active: true,
      description:
        "Construir aplicações rápidas, distribuídas e fáceis de manter é uma das habilidades mais procuradas no mercado de tecnologia hoje. Este curso foi criado para ajudar a dominar a construção de microsserviços modernos com Java, utilizando Spring Boot 3.5, Spring Cloud, Docker e Kubernetes.",
      image: "/certifications/curso-ms.jpg",
      organizationName: "Udemy"
    },
    {
      title: "Certificação Intermediária: Desenvolvedor Back-End",
      href: "https://drive.google.com/file/d/1eUlxE4oepdo40Hk2RvX8ezDwEEVKJcIE/view?usp=sharing",
      dates: "Jun/2025",
      active: true,
      description:
        "Atuação em liderança, inovação e transformação digital, identificando oportunidades e projetando soluções com TI. Experiência em banco de dados, modelagem e qualidade da informação. Aplicação de metodologias de desenvolvimento de software e gestão de projetos, garantindo prazos, recursos e resultados.",

      image: "/certifications/c1.png",
      organizationName: "Centro Paula Souza"

    },
    {
      title: "Certificação Intermediária: Desenvolvedor Front-End",
      href: "https://drive.google.com/file/d/1n1j7YfqfHXEeGW3ASTyXLUsE31lzdW3F/view?usp=sharing",
      dates: "Jun/2025",
      active: true,
      description:
        "Atuação no desenvolvimento seguro de software, analisando vulnerabilidades e aplicando boas práticas em banco de dados, back-end e front-end. Experiência em arquitetura da informação, design digital, web, mobile e desktop, garantindo qualidade, usabilidade e segurança. Capacidade de modelar processos de negócio e propor soluções de TI que aumentam a competitividade organizacional.",

      image: "/certifications/c2.png",
      organizationName: "Centro Paula Souza"

    },


    {
      title: "GFT Start #7 - Java",
      href: "https://hermes.dio.me/certificates/MNKKLPQV.pdf",
      dates: "Jul/2025",
      active: true,
      description:
        "O GFT Start #7 Java é um bootcamp focado em desenvolvimento backend com Java, abordando desde os conceitos fundamentais de POO (Programação Orientada a Objetos) até práticas avançadas de desenvolvimento de APIs RESTful, manipulação de bancos de dados e integração de sistemas.",

      image: "/certifications/c4.png",
      organizationName: "DIO - Digital Inovation One"

    },
    {
      title: "GFT Start #6 - Lógica de Programação",
      href: "https://hermes.dio.me/certificates/AOJ6GTVW.pdf",
      dates: "Jul/2025",
      active: true,
      description:
        "Bootcamp voltado para fundamentos de programação e resolução de problemas, abordando conceitos essenciais como variáveis, tipos de dados, estruturas de controle, laços, funções e algoritmos.",

      image: "/certifications/c5.png",
      organizationName: "DIO - Digital Inovation One"

    },
    {
      title: "IA Saúde",
      href: "https://fta-admin.web.app/certificates/6lZk7oW2sOaK2zPRnkS6VUpcUZf1/rZKkZWsrBKYMa9hN2ngG",
      dates: "Mar/2025",
      active: true,
      description:
        "O curso ensina a criar aplicações de Visão Computacional na saúde usando Edge Impulse, incluindo Impulse Design, pré-processamento de imagens, extração de features e Transfer Learning. Também aborda avaliação de modelos com acurácia e matriz de confusão.",

      image: "/certifications/c6.png",
      organizationName: "Fit Tech Academy"

    },
    {
      title: "Certificação Intermediária: Design Patterns Básico",
      href: "https://siga.cps.sp.gov.br/cartorio/autenticador.aspx?e0d8fe3a-a762-450c-837b-cc574ae02944",
      dates: "Abr/2025",
      active: true,
      description:
        "Aplicação de estruturas de dados para diferentes projetos e plataformas. Utilização de linguagens orientadas a objetos e raciocínio lógico na resolução de problemas. Emprego de padrões de projeto no desenvolvimento de aplicações.",

      image: "/certifications/c3.png",
      organizationName: "Centro Paula Souza"

    },
    {
      title: "Certificação Profissional: Desenvolvedor para Dispositivos Móveis",
      href: "https://drive.google.com/file/d/1AJt96mHfL2V_he2OwMzVpLEr3yqsZieg/view?usp=sharing",
      dates: "Set/2025",
      active: true,
      description:
        "Voltada para o desenvolvimento de sistemas interativos para Desktop, Web, Mobile e IoT. Durante o curso, tive contato com práticas de modelagem e implementação de bancos de dados, programação orientada a objetos com uso de padrões de projeto, além de técnicas de armazenamento e tratamento de dados estruturados e não estruturados. ",

      image: "/certifications/c8.png",
      organizationName: "Centro Paula Souza"

    },
  ]
} as const;
