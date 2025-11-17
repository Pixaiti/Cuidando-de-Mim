const swapBtn = document.getElementById('swap');
let isEnglish = false;

const textosPT = {
    botao: "PT-BR",
    nomeSite: "Cuidando de Mim - Início",
    navSobre: "Sobre",
    navIntro: "Introdução",
    navAtiv: "Atividades e Exercícios Práticos",
    titleSobre: "SOBRE",
    textSobre: "Este site foi criado pelos alunos, Gustavo Picheidt Marques e Gustavo Gabriel da Silva Kister, do IFPR - Câmpus Assis Chateaubriand, e tem como objetivos, mostrar os sinais e sintomas de possíveis problemas de saúde mental, mostrar a importância do autocuidado e auxiliar na prática dos exercícios e atividades que podem ajudar o usuário.",
    titleIntrodução: "INTRODUÇÃO",
    titleSS: "Sinais e Sintomas Comuns de Problemas de Saúde Mental",
    liS1: "Alteração no humor",
    li11: "Tristeza persistente, choro frequente",
    li12: "Irritabilidade ou raiva excessiva",
    li13: "Euforia descontrolada ou períodos de excitação extrema",
    liS2: "Mudanças no comportamento",
    li21: "Isolamento social, afastamento de amigos e família",
    li22: "Perda de interesse em atividades antes prazerosas",
    li23: "Dificuldade em realizar tarefas diárias",
    liS3: "Problemas cognitivos",
    li31: "Dificuldade de concentração ou de tomar decisões",
    li32: "Pensamentos confusos ou percepção distorcida da realidade",
    li33: "Esquecimento frequente",
    liS4: "Alterações no sono e apetite",
    li41: "Insônia ou sono excessivo",
    li42: "Perda ou ganho de peso significativo",
    li43: "Falta de energia constante",
    liS5: "Sintomas físicos sem causa aparente",
    li51: "Dores de cabeça, estômago ou musculares persistentes",
    li52: "Fadiga crônica",
    li53: "Palpitações, tonturas",
    liS6: "Sinais de sofrimento emocional intenso",
    li61: "Ansiedade constante, medos exagerados",
    li62: "Ataques de pânico",
    li63: "Sentimento de culpa ou inutilidade",
    liS7: "Ideação suicida ou comportamento autolesivo",
    li71: "Falar sobre morte ou suicídio",
    li72: "Automutilação",
    li73: "Desesperança profunda",
    titleDef: "Definição de Saúde Mental",
    textDef: "De acordo com a Organização Mundial da Saúde, saúde mental é \"um estado de bem-estar no qual o indivíduo se dá conta de suas próprias habilidades, pode lidar com o estresse normal da vida, pode trabalhar de forma produtiva e frutífera e é capaz de fazer uma contribuição para a sua comunidade\". Eles também falam sobre a importância de promover a saúde mental e prevenir doenças mentais.",
    titleImp: "Importância do autocuidado",
    textImp1: "O autocuidado é uma prática essencial para a manutenção da saúde mental e do bem-estar geral. Em um mundo marcado pela pressa, excesso de demandas e cobranças constantes, muitas pessoas negligenciam a própria saúde emocional. No entanto, cuidar de si mesmo é um ato de respeito e amor próprio que impacta diretamente na qualidade de vida.",
    textImp2: "Autocuidar-se vai muito além de manter bons hábitos de alimentação, sono e higiene. Trata-se de um compromisso contínuo com a própria saúde, física e emocional, e envolve reconhecer os próprios limites, saber dizer “não”, buscar momentos de descanso e prazer e, sobretudo, ouvir o que o corpo e a mente estão sinalizando. Pequenas atitudes no cotidiano, como respeitar os próprios horários, manter relações saudáveis e reservar tempo para hobbies ou silêncio, fazem uma grande diferença.",
    textImp3: "O estresse crônico e o esgotamento emocional, como o burnout, são cada vez mais comuns e geralmente surgem em contextos onde o autocuidado é deixado de lado. Nesses casos, a pessoa tende a colocar as necessidades dos outros sempre em primeiro lugar, esquecendo-se de si mesma. O resultado é um desgaste progressivo que afeta tanto o corpo quanto a mente.",
    textImp4: "Outro ponto relevante é o fortalecimento da autoestima. Ao cuidar de si, a pessoa desenvolve uma relação mais positiva consigo mesma, o que a ajuda a enfrentar os desafios da vida com mais segurança e equilíbrio emocional. Isso se reflete em escolhas mais conscientes, relacionamentos mais saudáveis e maior capacidade de lidar com frustrações.",
    textImp5: "A psicoterapia também é destacada como uma ferramenta poderosa no processo de autocuidado. Por meio do acompanhamento profissional, é possível compreender padrões de comportamento prejudiciais, aprender estratégias para lidar com emoções difíceis e fortalecer o autoconhecimento.",
    textImp6: "Portanto, o autocuidado não é luxo nem egoísmo. É uma necessidade básica, uma atitude preventiva e consciente de valorização da própria vida. Incorporá-lo à rotina é um investimento que traz benefícios duradouros para a saúde mental, o bem-estar e a forma como nos relacionamos com o mundo.",
    titleAtiv: "Atividades e Exercícios práticos",
    textAtiv1: "Essa divisão dos site é dedicada a mostrar uma segunda página deste site.",
    textAtiv2: "Terá como objetivo mostrar algumas atividades e exercícios para lidar com o estresse, ansiedade ou apenas para a melhora na qualidade de vida",
    textAtiv3: "Atividades e Exercícios práticos",
    td1: "1. O que exatamente significa autocuidado?",
    td2: "É o conjunto de atitudes que você toma para cuidar do corpo, da mente e das emoções, garantindo bem-estar e equilíbrio.",  
    td3: "2. Qual a diferença entre autocuidado físico e mental?",
    td4: "O físico envolve saúde do corpo (alimentação, sono, exercícios). O mental/emocional envolve cuidar da mente (pausas, terapia, lazer, limites).",    
    td5: "3. Preciso ter muito tempo livre para praticar autocuidado?",
    td6: "Não. Pequenas ações de minutos já contam, como alongar ou beber água.",    
    td7: "4. Quais são exemplos simples de autocuidado no dia a dia?",
    td8: "Dormir bem, se hidratar, se alimentar bem, alongar, caminhar, reservar tempo para algo que gosta.",    
    td9: "5. Autocuidado é o mesmo que estética?",
    td10: "Não. Pode incluir estética, mas vai além: saúde, equilíbrio emocional e mental.",    
    td11: "6. Como incluir autocuidado em uma rotina cheia?",
    td12: "Com pequenas pausas: alongar, respirar fundo, desconectar antes de dormir, tomar sol alguns minutos.",    
    td13: "7. Dormir bem conta como autocuidado?",
    td14: "Sim, e é um dos mais importantes, porque regula energia, humor e saúde.",    
    td15: "8. Autocuidado precisa envolver gastar dinheiro?",
    td16: "Não. Caminhar, meditar, descansar e organizar sua rotina são gratuitos.",    
    td17: "9. Como manter consistência sem desistir depois de alguns dias?",
    td18: "Comece pequeno, com 1 ou 2 hábitos fáceis, e vá aumentando aos poucos.",    
    td19: "10. Existe diferença entre autocuidado e egoísmo?",
    td20: "Sim. Egoísmo é pensar só em si. Autocuidado é se cuidar para poder estar melhor consigo e com os outros.",
    titleFooter1: "Hiper links",
    footerSobre: "Sobre",
    footerIntro: "Introdução",
    footerAtiv: "Atividades e Exercícios Práticos",
    footerAtivS: "Atividades e Exercícios Práticos (site)",
    titleFooter2: "Contate-nos",
    titleFooter3: "Sobre este site",
    text1Footer3: "Código desenvolvido pelos autores.",
    text2Footer3: "Imagens e textos de terceiros, usados apenas para fins educacionais.",
};

const textosEN = {
    botao: "EN",
    nomeSite: "Taking Care of Myself – Home",
    navSobre: "About",
    navIntro: "Introduction",
    navAtiv: "Exercises & Activities",
    titleSobre: "ABOUT",
    textSobre: "This website was created by students Gustavo Picheidt Marques and Gustavo Gabriel da Silva Kister from IFPR – Assis Chateaubriand Campus. Its purpose is to present the signs and symptoms of potential mental health issues, highlight the importance of self-care, and provide guidance on exercises and activities that may help users.",
    titleIntrodução: "INTRODUCTION",
    titleSS: "Common Signs and Symptoms of Mental Health Issues",
    liS1: "Mood changes",
    li11: "Persistent sadness, frequent crying",
    li12: "Irritability or excessive anger",
    li13: "Uncontrolled euphoria or periods of extreme excitement",
    liS2: "Behavioral changes",
    li21: "Social withdrawal, distancing from friends and family",
    li22: "Loss of interest in previously enjoyable activities",
    li23: "Difficulty performing daily tasks",
    liS3: "Cognitive problems",
    li31: "Difficulty concentrating or making decisions",
    li32: "Confused thoughts or distorted perception of reality",
    li33: "Frequent forgetfulness",
    liS4: "Sleep and appetite changes",
    li41: "Insomnia or excessive sleep",
    li42: "Significant weight loss or gain",
    li43: "Constant lack of energy",
    liS5: "Physical symptoms without apparent cause",
    li51: "Persistent headaches, stomach or muscle pains",
    li52: "Chronic fatigue",
    li53: "Palpitations, dizziness",
    liS6: "Signs of intense emotional suffering",
    li61: "Constant anxiety, exaggerated fears",
    li62: "Panic attacks",
    li63: "Feelings of guilt or worthlessness",
    liS7: "Suicidal ideation or self-harm",
    li71: "Talking about death or suicide",
    li72: "Self-harm",
    li73: "Profound hopelessness",
    titleDef: "Definition of Mental Health",
    textDef: "According to the World Health Organization, mental health is \"a state of well-being in which an individual realizes their own abilities, can cope with the normal stresses of life, can work productively and fruitfully, and is able to make a contribution to their community.\"They also emphasize the importance of promoting mental health and preventing mental illnesses.",
    titleImp: "Importance of Self-Care",
    textImp1: "Self-care is an essential practice for maintaining mental health and overall well-being. In a world marked by haste, excessive demands, and constant pressures, many people neglect their emotional health. However, taking care of oneself is an act of respect and self-love that directly impacts quality of life.",
    textImp2: "Self-care goes far beyond maintaining good habits in diet, sleep, and hygiene. It is a continuous commitment to one’s physical and emotional health and involves recognizing personal limits, knowing when to say “no,” seeking moments of rest and pleasure, and, above all, listening to what the body and mind are signaling. Small daily actions, such as respecting your own schedule, maintaining healthy relationships, and reserving time for hobbies or quiet moments, make a significant difference.",
    textImp3: "Chronic stress and emotional exhaustion, such as burnout, are increasingly common and often arise in situations where self-care is neglected. In these cases, a person tends to prioritize others’ needs above their own, forgetting themselves. The result is progressive wear that affects both body and mind.",
    textImp4: "Another important point is the strengthening of self-esteem. By taking care of oneself, a person develops a more positive relationship with themselves, which helps face life’s challenges with greater confidence and emotional balance. This reflects in more conscious choices, healthier relationships, and a greater ability to cope with frustrations.",
    textImp5: "Psychotherapy is also highlighted as a powerful tool in the self-care process. Through professional guidance, it is possible to understand harmful behavior patterns, learn strategies to manage difficult emotions, and strengthen self-knowledge.",
    textImp6: "Therefore, self-care is neither a luxury nor selfishness. It is a basic necessity, a preventive and conscious attitude of valuing one’s own life. Incorporating it into your routine is an investment that brings lasting benefits for mental health, well-being, and the way we relate to the world.",
    titleAtiv: "Activities and Practical Exercises",
    textAtiv1: "This section of the site is dedicated to showcasing a second page of this website.",
    textAtiv2: "Its purpose is to present some activities and exercises to help manage stress and anxiety, or simply to improve overall quality of life.",
    textAtiv3: "Activities and Practical Exercises",
    td1: "1. What exactly does self-care mean?",
    td2: "It is the set of actions you take to care for your body, mind, and emotions, ensuring well-being and balance.",
    td3: "2. What is the difference between physical and mental self-care?",
    td4: "Physical self-care involves taking care of the body (nutrition, sleep, exercise). Mental/emotional self-care involves taking care of the mind (breaks, therapy, leisure, setting boundaries).",
    td5: "3. Do I need a lot of free time to practice self-care?",
    td6: "No. Small actions that take only a few minutes already count, like stretching or drinking water.",
    td7: "4. What are simple examples of self-care in daily life?",
    td8: "Sleeping well, staying hydrated, eating properly, stretching, walking, reserving time for something you enjoy.",
    td9: "5. Is self-care the same as aesthetics?",
    td10: "No. It can include aesthetics, but goes beyond: health, emotional and mental balance.",
    td11: "6. How can I include self-care in a busy routine?",
    td12: "With small breaks: stretch, take deep breaths, disconnect before sleeping, get some sunlight for a few minutes.",
    td13: "7. Does sleeping well count as self-care?",
    td14: "Yes, and it is one of the most important, as it regulates energy, mood, and health.",
    td15: "8. Does self-care require spending money?",
    td16: "No. Walking, meditating, resting, and organizing your routine are free.",
    td17: "9. How can I stay consistent without giving up after a few days?",
    td18: "Start small, with one or two easy habits, and gradually increase them.",
    td19: "10. Is there a difference between self-care and selfishness?",
    td20: "Yes. Selfishness is thinking only about yourself. Self-care is taking care of yourself to be better for yourself and others.",
    titleFooter1: "Hyperlinks",
    footerSobre: "About",
    footerIntro: "Introduction",
    footerAtiv: "Exercises & Activities",
    footerAtivS: "Exercises & Activities (website)",
    titleFooter2: "Contact Us",
    titleFooter3: "About the website",
    text1Footer3: "Code developed by the authors.",
    text2Footer3: "Third-party images and texts, used for educational purposes only.",

};

swapBtn.addEventListener("click", () => {
    isEnglish = !isEnglish;

    const textos = isEnglish ? textosEN : textosPT

    swapBtn.textContent = textos.botao;
    document.getElementById("nome-site").textContent = textos.nomeSite;
    document.getElementById("nav-sobre").textContent = textos.navSobre;
    document.getElementById("nav-intro").textContent = textos.navIntro;
    document.getElementById("nav-ativ").textContent = textos.navAtiv;
    document.getElementById("title-sobre").textContent = textos.titleSobre;
    document.getElementById("text-sobre").textContent = textos.textSobre;
    document.getElementById("title-introdução").textContent = textos.titleIntrodução;
    document.getElementById("title-ss").textContent = textos.titleSS;
    for (let i = 1; i <= 7; i++) {
        document.getElementById(`liS${i}`).textContent = textos[`liS${i}`];
        document.getElementById(`li${i}1`).textContent = textos[`li${i}1`];
        document.getElementById(`li${i}2`).textContent = textos[`li${i}2`];
        document.getElementById(`li${i}3`).textContent = textos[`li${i}3`];
    
}
    document.getElementById("title-def").textContent = textos.titleDef
    document.getElementById("text-def").textContent = textos.textDef
    document.getElementById("title-imp").textContent = textos.titleImp
    for (let i = 1; i <= 6; i++) {
    document.getElementById(`text-imp${i}`).textContent = textos[`textImp${i}`]
}
    document.getElementById(`title-ativ`).textContent = textos.titleAtiv
    for (let i = 1; i <= 3; i++) {
        document.getElementById(`text-ativ${i}`).textContent = textos[`textAtiv${i}`]
        
    }
    for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
        document.getElementById(`td${i}`).innerHTML = `<b>${textos[`td${i}`]}</b>`;
    } else {
        document.getElementById(`td${i}`).textContent = textos[`td${i}`];
    }
}
    document.getElementById("title-footer1").textContent = textos.titleFooter1;
    document.getElementById("footer-sobre").textContent = textos.footerSobre;
    document.getElementById("footer-intro").textContent = textos.footerIntro;
    document.getElementById("footer-ativ").textContent = textos.footerAtiv;
    document.getElementById("footer-ativs").textContent = textos.footerAtivS;
    document.getElementById("title-footer2").textContent = textos.titleFooter2;
    document.getElementById("title-footer3").textContent = textos.titleFooter3;
    for (let i = 1; i <= 2; i++) {
        document.getElementById(`text${i}-footer3`).textContent = textos[`text${i}Footer3`];
        document.getElementById(`text${i}-footer3`).textContent = textos[`text${i}Footer3`];
    }
});



