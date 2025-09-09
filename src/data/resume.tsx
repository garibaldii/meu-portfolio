import { Icons } from "@/components/icons";

export const DATA = {
  name: "Matheus Garibaldi",
  initials: "MG",
  url: "https://garibaldi.me",
  description: "A única maneira de fazer algo excelente é amar o que você faz.",
  summary:
    "Sou desenvolvedor full-stack em formação, já praticando Node.js, Express e TypeScript. Tenho experiência prática em projetos acadêmicos e pessoais construindo APIs REST e trabalhando com MongoDB e MySQL. Também conheço  Java com Spring Boot, sempre buscando aplicar boas práticas e uma arquitetura bem estruturada. Já tive contato com CI/CD (GitHub Actions), Docker, integração de sistemas e até serviços em nuvem na AWS.",
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
    "Git",
    "Docker"
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
      email: {
        name: "Send Email",
        url: "mailto:matheus.garibaldi8@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  languages: [

  ],

  academic: [
    {

      company: "(FATEC) Faculdade de Tecnologia do Estado de São Paulo",
      badges: [],
      title: "Técnologo em Desenvolvimento de Software em Multiplataformas",
      logoUrl: "/fatec.png",
      start: "Jan/2023",
      end: "Dez/2026",
     
    },
    {

      company: "(ETEC) Elias Miguel Júnior",
      badges: [],
      title: "Técnico em Administração",
      logoUrl: "/etec.png",
      start: "Jan/2018",
      end: "Jul/2019",
     
    },

  ],

  work: [
    {
      company: "LDS Solar Distribuidora",
      href: "https://www.ldssolar.com.br/",
      badges: [],
      location: "Presencial",
      title: "Assistente Administrativo",
      logoUrl: "/lds.png",
      start: "Out/2020",
      end: "atual",
      description:
        "Automatizei processos internos com planilhas avançadas e scripts, reduzindo erros e aumentando a eficiência logística. Desenvolvi relatórios e dashboards em Power BI para análise de dados e apoio estratégico. Contribuí com melhorias no sistema de orçamentos da empresa, incluindo o desenvolvimento de funcionalidades sob demanda, além da criação de ferramentas específicas, como planilhas para cálculo de painéis em projetos e gerenciador de estoque.",
    },
    {
      company: "Player Drones",
      badges: [],
      href: "https://www.playerdrones.com.br/",
      location: "Remote",
      title: "Freelancer de Design Gráfico",
      logoUrl: "/player-drones.png",
      start: "Fev/2020",
      end: "Out/2020",
      description:
        "Criação de artes para empresas de diferentes setores (automotivo, farmacêutico, varejo e odontológico), utilizando Adobe Photoshop. Atuação em contato direto com o intermediador para ajustes e melhorias, garantindo peças visuais alinhadas às necessidades dos clientes.",
    },

  ],
  projects: [
    {
      title: "Excel Auto Report",
      href: "https://github.com/garibaldii/api-auto-report",
      dates: "Ago/2025 - atual",
      active: true,
      description:
        "A API Auto Report foi desenvolvida para automatizar a geração de relatórios de vendas de múltiplas empresas, eliminando a morosidade de trabalhar manualmente com planilhas Excel. O sistema centraliza dados de diferentes marketplaces e permite o cálculo rápido do valor total das operações.",
      technologies: [
        "Java",
        "Spring",
        "MySQL",
        "Docker",
        "Angular",
        "Typescript",
      ],
      links: [

        {
          type: "Source",
          href: "https://github.com/garibaldii/api-auto-report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/excel-auto-report.jpg",
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
      image: "/crud-aws.png",
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
      image: "/cadastro-professores.png",
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
      image: "/gerenciador-estoque.png",
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
      image: "/toeic.jpg",
      organizationName: "ETS TOEIC"
    },
    {
      title: "Getting Stated with Compute",
      href: "https://www.credly.com/badges/7fab2522-fb87-4404-af11-59331c191bba/public_url",
      dates: "Ago/2025",
      active: true,
      description:
        "Fundamentos de computação em nuvem e do Amazon EC2, incluindo tipos de instâncias, configuração, armazenamento e segurança. Aprendi a lançar, gerenciar e configurar instâncias EC2 de acordo com diferentes necessidades de workload.",
      image: "/c7.png",
      organizationName: "AWS Educate"
    },
    {
      title: "Certificação Intermediária: Desenvolvedor Back-End",
      href: "https://badge.cps.sp.gov.br/_pdf/87b4de3b50664690a0456770d340f06c.PDF",
      dates: "Jun/2025",
      active: true,
      description:
        "Atuação em liderança, inovação e transformação digital, identificando oportunidades e projetando soluções com TI. Experiência em banco de dados, modelagem e qualidade da informação. Aplicação de metodologias de desenvolvimento de software e gestão de projetos, garantindo prazos, recursos e resultados.",

      image: "/c1.png",
      organizationName: "Centro Paula Souza"

    },
    {
      title: "Certificação Intermediária: Desenvolvedor Front-End",
      href: "https://badge.cps.sp.gov.br/_pdf/13e9c2e94b514cd9aec118c4e0f31f41.PDF",
      dates: "Jun/2025",
      active: true,
      description:
        "Atuação no desenvolvimento seguro de software, analisando vulnerabilidades e aplicando boas práticas em banco de dados, back-end e front-end. Experiência em arquitetura da informação, design digital, web, mobile e desktop, garantindo qualidade, usabilidade e segurança. Capacidade de modelar processos de negócio e propor soluções de TI que aumentam a competitividade organizacional.",

      image: "/c2.png",
      organizationName: "Centro Paula Souza"

    },


    {
      title: "GFT Start #7 - Java",
      href: "https://hermes.dio.me/certificates/MNKKLPQV.pdf",
      dates: "Jul/2025",
      active: true,
      description:
        "O GFT Start #7 Java é um bootcamp focado em desenvolvimento backend com Java, abordando desde os conceitos fundamentais de POO (Programação Orientada a Objetos) até práticas avançadas de desenvolvimento de APIs RESTful, manipulação de bancos de dados e integração de sistemas.",

      image: "/c4.png",
      organizationName: "DIO - Digital Inovation One"

    },
    {
      title: "GFT Start #6 - Lógica de Programação",
      href: "https://hermes.dio.me/certificates/AOJ6GTVW.pdf",
      dates: "Jul/2025",
      active: true,
      description:
        "Bootcamp voltado para fundamentos de programação e resolução de problemas, abordando conceitos essenciais como variáveis, tipos de dados, estruturas de controle, laços, funções e algoritmos.",

      image: "/c5.png",
      organizationName: "DIO - Digital Inovation One"

    },
    {
      title: "IA Saúde",
      href: "https://fta-admin.web.app/certificates/6lZk7oW2sOaK2zPRnkS6VUpcUZf1/rZKkZWsrBKYMa9hN2ngG",
      dates: "Mar/2025",
      active: true,
      description:
        "O curso ensina a criar aplicações de Visão Computacional na saúde usando Edge Impulse, incluindo Impulse Design, pré-processamento de imagens, extração de features e Transfer Learning. Também aborda avaliação de modelos com acurácia e matriz de confusão.",

      image: "/c6.png",
      organizationName: "Fit Tech Academy"

    },
    {
      title: "Certificação Intermediária: Design Patterns Básico",
      href: "https://siga.cps.sp.gov.br/cartorio/autenticador.aspx?e0d8fe3a-a762-450c-837b-cc574ae02944",
      dates: "Abr/2025",
      active: true,
      description:
        "Aplicação de estruturas de dados para diferentes projetos e plataformas. Utilização de linguagens orientadas a objetos e raciocínio lógico na resolução de problemas. Emprego de padrões de projeto no desenvolvimento de aplicações.",

      image: "/c3.png",
      organizationName: "Centro Paula Souza"

    },
  ]
} as const;
