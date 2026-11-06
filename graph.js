// Concept graph for Varoluşun Detaylı İncelemesi — DRAFT for author review
// Load after data.js:  <script src="graph.js"></script>  ->  window.BOOK_GRAPH
window.BOOK_GRAPH = {
 "meta": {
  "book": "Varoluşun Detaylı İncelemesi",
  "generated": "2026-10-20",
  "status": "DRAFT — links and summaries drafted from the full text, awaiting author review",
  "nodes": 76,
  "edges": 142,
  "note": "para / paraEn are 0-based indexes into chapter.paragraphs / chapter.enParagraphs in data.js. origin: crossref = the text cites another chapter; text = stated in the passage; inferred = drafter's reading."
 },
 "groups": {
  "persist": {
   "tr": "Var Kalma ve Seçilim",
   "en": "Persistence & Selection",
   "color": "#e8a33d"
  },
  "math": {
   "tr": "Sayılar, Sonsuzluk, İmkânsızlık",
   "en": "Numbers, Infinity, Impossibility",
   "color": "#4f8fe0"
  },
  "system": {
   "tr": "Sistemler ve Ortaya Çıkış",
   "en": "Systems & Emergence",
   "color": "#3fb58a"
  },
  "society": {
   "tr": "Toplum ve Kolektif Zihin",
   "en": "Society & Collective Mind",
   "color": "#d9618c"
  },
  "physics": {
   "tr": "Fizik, Zaman, Nedensellik",
   "en": "Physics, Time, Causality",
   "color": "#8b6fe0"
  },
  "mind": {
   "tr": "Zihin, Farkındalık, Gerçeklik",
   "en": "Mind, Awareness, Reality",
   "color": "#37b5c9"
  },
  "meta": {
   "tr": "Önsöz",
   "en": "Preface",
   "color": "#9aa3b2"
  }
 },
 "edgeTypes": {
  "builds-on": {
   "tr": "dayanır",
   "en": "builds on",
   "directed": true
  },
  "example-of": {
   "tr": "örneğidir",
   "en": "is an example of",
   "directed": true
  },
  "analogy": {
   "tr": "benzer fikir",
   "en": "analogous to",
   "directed": false
  },
  "contrast": {
   "tr": "karşıt",
   "en": "contrasts with",
   "directed": false
  }
 },
 "nodes": [
  {
   "id": "existence-and-science",
   "group": "meta",
   "tr": "Varoluş ve Bilim",
   "en": "Existence & Science",
   "summaryTr": "Kitabın çıkış noktası: bilim varoluş sorusunda söz sahibi olmalı. Temel kavramlar bağımsız incelemeler olarak ele alınır, bölümler arası atıflarla bağlanır ve sistem bilimi yöntemi öne çıkar.",
   "summaryEn": "The book’s premise: science should have a voice on existence. Key concepts are treated as independent inquiries tied together by cross-references, with systems science as the leading method.",
   "appearances": [
    {
     "ch": "01",
     "para": 0,
     "paraEn": 0,
     "labelTr": "Varoluş ve Bilim",
     "labelEn": "Existence & Science",
     "kind": "concept"
    }
   ],
   "chapters": [
    "01"
   ],
   "degree": 2
  },
  {
   "id": "system-definition",
   "group": "system",
   "tr": "Sistemin Tanımı",
   "en": "What Is a System",
   "summaryTr": "Sistem, parçalarının tek başına yapamadığı işlevleri birlikte yerine getiren bütündür. Hücrelerden makinelere, atmosferden sayı dizilerine uzanır ve her sistem enerji harcayarak varlığını sürdürür.",
   "summaryEn": "A system is an ensemble whose parts together perform functions none could alone. It spans cells, machines, the atmosphere and even number sequences, and every system sustains itself by spending energy.",
   "appearances": [
    {
     "ch": "01",
     "para": 0,
     "paraEn": 0,
     "labelTr": "Sistem Bilimi",
     "labelEn": "Systems Science",
     "kind": "concept"
    },
    {
     "ch": "04",
     "para": 0,
     "paraEn": 0,
     "labelTr": "Sistem Tanımı",
     "labelEn": "Definition of System",
     "kind": "concept"
    }
   ],
   "chapters": [
    "01",
    "04"
   ],
   "degree": 9
  },
  {
   "id": "universal-darwinism",
   "group": "persist",
   "tr": "Evrensel Darwinizm",
   "en": "Universal Darwinism",
   "summaryTr": "Doğal seçilim biyolojiyle sınırlı kalmaz; moleküllere, yapılara ve dillere genelleştirilir. Seçilim temel bir yasa değil, fizik yasalarının doğurduğu ortaya çıkan bir ilkedir.",
   "summaryEn": "Natural selection is extended beyond biology to molecules, structures and even languages. Selection is not a basic law but an emergent principle that physical laws make possible.",
   "appearances": [
    {
     "ch": "01",
     "para": 1,
     "paraEn": 1,
     "labelTr": "Doğal Seçilim",
     "labelEn": "Natural Selection",
     "kind": "concept"
    },
    {
     "ch": "02",
     "para": 5,
     "paraEn": 5,
     "kind": "mention"
    },
    {
     "ch": "14",
     "para": 2,
     "paraEn": 2,
     "labelTr": "Evrensel Darwinizm",
     "labelEn": "Universal Darwinism",
     "kind": "concept"
    },
    {
     "ch": "15",
     "para": 0,
     "paraEn": 0,
     "kind": "mention"
    }
   ],
   "chapters": [
    "01",
    "02",
    "14",
    "15"
   ],
   "degree": 10
  },
  {
   "id": "entropy-persistence",
   "group": "persist",
   "tr": "Entropi ve Var Kalma",
   "en": "Entropy & Persistence",
   "summaryTr": "Çevremizde gördüklerimiz entropi artışına karşı ayakta kalabilmiş yapılardır; dayanamayanlar yok olur. Canlılar bunu enerji alıp entropiyi dışarı vererek, açık sistemler olarak başarır.",
   "summaryEn": "What we see around us are structures that have persisted against rising entropy; whatever cannot persist vanishes. Living things manage it as open systems that import energy and export entropy.",
   "appearances": [
    {
     "ch": "02",
     "para": 0,
     "paraEn": 0,
     "labelTr": "Entropi ve Var Kalma",
     "labelEn": "Entropy & Persistence",
     "kind": "concept"
    }
   ],
   "chapters": [
    "02"
   ],
   "degree": 6
  },
  {
   "id": "passive-durability",
   "group": "persist",
   "tr": "Pasif Sağlamlık",
   "en": "Passive Durability",
   "summaryTr": "İlk var olma stratejisi: taş gibi cansız yapılar güçlü bağları sayesinde enerji harcamadan milyonlarca yıl varlığını korur.",
   "summaryEn": "The first existence strategy: inanimate structures such as stone persist for millions of years through strong bonds, with no energy input.",
   "appearances": [
    {
     "ch": "02",
     "para": 0,
     "paraEn": 0,
     "labelTr": "Pasif Sağlamlık Stratejisi",
     "labelEn": "Passive Durability",
     "kind": "concept"
    }
   ],
   "chapters": [
    "02"
   ],
   "degree": 3
  },
  {
   "id": "life-active-strategy",
   "group": "persist",
   "tr": "Yaşam: Aktif Strateji",
   "en": "Life: The Active Strategy",
   "summaryTr": "İkinci strateji: çok sayıda var ol, kendini kopyala, çevreye uyum sağla. Yaklaşık dört milyar yıl önce başlayan yaşam, değişen koşullarda pasif sağlamlıktan çok daha başarılıdır.",
   "summaryEn": "The second strategy: exist in large numbers, replicate and adapt. Life began about four billion years ago and is far more successful in changing environments than passive durability.",
   "appearances": [
    {
     "ch": "02",
     "para": 1,
     "paraEn": 1,
     "labelTr": "Canlılık: Aktif Strateji",
     "labelEn": "Life: Active Strategy",
     "kind": "concept"
    }
   ],
   "chapters": [
    "02"
   ],
   "degree": 5
  },
  {
   "id": "self-replication",
   "group": "persist",
   "tr": "Öz-Kopyalama ve Geometrik Artış",
   "en": "Self-Replication & Geometric Growth",
   "summaryTr": "Kendini kopyalama geometrik artış sağlar; yavrular aynı davranışı sürdürerek kısa sürede büyük nüfuslara ulaşır. Kendini kopyalayan bir taş çok başarılı olurdu ama cansız kimyada hiç ortaya çıkmadı.",
   "summaryEn": "Replication gives geometric growth: offspring repeat the behaviour and quickly reach vast populations. A self-replicating stone would be hugely successful, but none ever arose in inanimate chemistry.",
   "appearances": [
    {
     "ch": "02",
     "para": 2,
     "paraEn": 2,
     "labelTr": "Öz-Kopyalama ve Geometrik Artış",
     "labelEn": "Self-Replication & Geometric Growth",
     "kind": "concept"
    }
   ],
   "chapters": [
    "02"
   ],
   "degree": 2
  },
  {
   "id": "energy-requirement",
   "group": "persist",
   "tr": "Enerji Gereksinimi",
   "en": "Energy Requirement",
   "summaryTr": "Yaşamın temel kısıtı: canlılar kendilerini kopyalamak ve düzenlerini korumak için sürekli enerji almak zorundadır. Geliştirilen işlevlerin çoğu enerjiyi bulmak, depolamak ya da verimli kullanmak içindir.",
   "summaryEn": "Life’s central constraint: organisms must continually acquire and process energy to replicate and keep their order. Most functions species evolved serve finding, storing or efficiently using energy.",
   "appearances": [
    {
     "ch": "02",
     "para": 3,
     "paraEn": 3,
     "labelTr": "Enerji Gereksinimi",
     "labelEn": "Energy Requirement",
     "kind": "concept"
    },
    {
     "ch": "04",
     "para": 3,
     "paraEn": 3,
     "kind": "mention"
    }
   ],
   "chapters": [
    "02",
    "04"
   ],
   "degree": 4
  },
  {
   "id": "variation-diversity",
   "group": "persist",
   "tr": "Mutasyon ve Çeşitlilik",
   "en": "Variation & Diversity",
   "summaryTr": "Kopyalama hataları (mutasyonlar) çeşitlilik doğurur; çeşitlilik uyum olasılığını artırır. Seçilim çeşitliliği daralttığı için onu sürekli yenileyen bir kaynak gerekir; kitap bu kaynağı rastgelelikle özdeşleştirir.",
   "summaryEn": "Replication errors (mutations) create variety, and variety improves the odds of adapting. Because selection narrows diversity, a source that keeps renewing it is needed, which the book identifies with randomness.",
   "appearances": [
    {
     "ch": "02",
     "para": 4,
     "paraEn": 4,
     "labelTr": "Mutasyonlar ve Çeşitlilik",
     "labelEn": "Mutations & Diversity",
     "kind": "concept"
    },
    {
     "ch": "14",
     "para": 6,
     "paraEn": 6,
     "labelTr": "Rastgelelik: Çeşitlilik Motoru",
     "labelEn": "Randomness: The Diversity Engine",
     "kind": "concept"
    }
   ],
   "chapters": [
    "02",
    "14"
   ],
   "degree": 6
  },
  {
   "id": "energy-efficiency",
   "group": "persist",
   "tr": "Enerji Verimliliği",
   "en": "Energy Efficiency",
   "summaryTr": "Çeşitler yarışmaya başlayınca enerji verimliliği belirleyici olur; bu da canlıları topluluklara iter. Çok hücreli bedenlerden insan toplumlarına, tarihi dönüşümlerin itici gücü enerji ve bilgiyi daha verimli kullanmaktır.",
   "summaryEn": "Once variants compete, energy efficiency becomes decisive and pushes organisms into communities. From multicellular bodies to human societies, historic transformations follow better use of energy and information.",
   "appearances": [
    {
     "ch": "02",
     "para": 5,
     "paraEn": 5,
     "labelTr": "Enerji Verimliliği",
     "labelEn": "Energy Efficiency",
     "kind": "concept"
    },
    {
     "ch": "02",
     "para": 6,
     "paraEn": 6,
     "kind": "mention"
    }
   ],
   "chapters": [
    "02"
   ],
   "degree": 4
  },
  {
   "id": "stability-filter",
   "group": "persist",
   "tr": "Kararlılık Filtresi (Lego)",
   "en": "Stability Filter (Lego)",
   "summaryTr": "Lego benzetmesi: çocuğun önüne saçılan parçalar zamanla birbirine sıkıca kenetlenen, ayrılmaya direnen kümelere dönüşür. Fizik yasaları da bir tasarımcıdan çok, kararlı yapıları süzen bir seçilim filtresi olabilir.",
   "summaryEn": "The Lego analogy: blocks scattered before a child end up as clusters that interlock and resist breaking. Physical laws may likewise be a selection filter for stable structures rather than a designer’s plan.",
   "appearances": [
    {
     "ch": "02",
     "para": 9,
     "paraEn": 9,
     "labelTr": "Lego Benzetmesi",
     "labelEn": "The Lego Analogy",
     "kind": "concept"
    },
    {
     "ch": "07",
     "para": 10,
     "paraEn": 10,
     "kind": "mention"
    }
   ],
   "chapters": [
    "02",
    "07"
   ],
   "degree": 6
  },
  {
   "id": "survivorship-bias",
   "group": "persist",
   "tr": "Hayatta Kalan Yanılgısı",
   "en": "Survivorship Bias",
   "summaryTr": "Güzel eserlerin neden kalıcı olduğunu açıklarken dikkat: yalnızca hayatta kalanları görürüz, görünen nedenin ardında rastlantısal toplumsal etkenler olabilir.",
   "summaryEn": "A caution when explaining why beautiful works last: we only see the survivors, so random social factors may hide behind the apparent cause.",
   "appearances": [
    {
     "ch": "02",
     "para": 12,
     "paraEn": 12,
     "labelTr": "Survivorship Bias",
     "labelEn": "Survivorship Bias",
     "kind": "concept"
    }
   ],
   "chapters": [
    "02"
   ],
   "degree": 1
  },
  {
   "id": "beauty-strategy",
   "group": "persist",
   "tr": "Güzellik ve Var Kalma",
   "en": "Beauty as a Strategy",
   "summaryTr": "Güzellik bir var olma stratejisi olabilir: simetri, düzen ve verimlilik güzel algılanır; kalıcı şarkılar ve yapılar bunu düşündürür. Matematikçiler güzel bir varsayımın doğru olması gerektiğine bile inanır.",
   "summaryEn": "Beauty may be a strategy of existence: symmetry, order and efficiency feel beautiful, and enduring songs and buildings suggest it aids retention. Mathematicians even trust that a beautiful conjecture must be true.",
   "appearances": [
    {
     "ch": "02",
     "para": 12,
     "paraEn": 12,
     "labelTr": "Riemann Hipotezi ve Güzellik",
     "labelEn": "Riemann Hypothesis & Beauty",
     "kind": "concept"
    }
   ],
   "chapters": [
    "02"
   ],
   "degree": 3
  },
  {
   "id": "riemann-hypothesis",
   "group": "math",
   "tr": "Riemann Hipotezi",
   "en": "Riemann Hypothesis",
   "summaryTr": "Zeta fonksiyonunun sıfırlarının tek bir doğru üzerinde olduğu iddiası; asal sayılarda keşfedilebilir bir istatistiksel desen olmadığı biçiminde okunabilir. Kanıtlanmamıştır ve kitapta basitlik ile rastgelelik sembolü olarak tekrar eder.",
   "summaryEn": "The claim that the zeta function’s zeros lie on one line, readable as saying primes have no discoverable statistical pattern. Unproven, it recurs in the book as an emblem of simple-yet-random structure.",
   "appearances": [
    {
     "ch": "02",
     "para": 12,
     "paraEn": 12,
     "labelTr": "Riemann Hipotezi ve Güzellik",
     "labelEn": "Riemann Hypothesis & Beauty",
     "kind": "concept"
    },
    {
     "ch": "03",
     "para": 0,
     "paraEn": 0,
     "labelTr": "Riemann Hipotezi",
     "labelEn": "Riemann Hypothesis",
     "kind": "concept"
    },
    {
     "ch": "09",
     "para": 3,
     "paraEn": 3,
     "labelTr": "Riemann Hipotezi ve Asallar",
     "labelEn": "Riemann Hypothesis & Primes",
     "kind": "concept"
    }
   ],
   "chapters": [
    "02",
    "03",
    "09"
   ],
   "degree": 6
  },
  {
   "id": "number-universe",
   "group": "math",
   "tr": "1’den Kurulan Evren",
   "en": "A Universe Built from 1",
   "summaryTr": "1 sayısından başlayarak kurulan düşünsel evren: toplama sayma, çarpma toplamanın kısayolu olur; bileşik sayılar dışarıda bırakılınca asallar kalır. Yani deterministik kurallardan rastgelelik doğar.",
   "summaryEn": "A thought-built universe starting from the number 1: adding gives counting, multiplication shortcuts addition, and removing composite numbers leaves the primes. Randomness arises from deterministic rules.",
   "appearances": [
    {
     "ch": "03",
     "para": 0,
     "paraEn": 0,
     "labelTr": "Sayı Teorisi ve Rastgelelik",
     "labelEn": "Number Theory & Randomness",
     "kind": "concept"
    },
    {
     "ch": "06",
     "para": 4,
     "paraEn": 4,
     "kind": "mention"
    },
    {
     "ch": "16",
     "para": 1,
     "paraEn": 1,
     "kind": "mention"
    }
   ],
   "chapters": [
    "03",
    "06",
    "16"
   ],
   "degree": 6
  },
  {
   "id": "randomness",
   "group": "math",
   "tr": "Rastgelelik",
   "en": "Randomness",
   "summaryTr": "Rastgelelik, belirli bir örüntüye sahip olmamak ya da öngörülemezlik demektir. Zar atışı klasik fizikte hesap zorluğundan rastgele görünür; modern fizik ise doğuştan rastgelelik getirir.",
   "summaryEn": "Randomness means lacking a set pattern, or being unpredictable. Dice seem random in classical physics only through computational difficulty, while modern physics adds intrinsic randomness.",
   "appearances": [
    {
     "ch": "03",
     "para": 1,
     "paraEn": 1,
     "labelTr": "Rastgeleliğin Tanımı",
     "labelEn": "Definition of Randomness",
     "kind": "concept"
    },
    {
     "ch": "03",
     "para": 3,
     "paraEn": 3,
     "labelTr": "Zar Atma ve Determinizm",
     "labelEn": "Dice Throwing & Determinism",
     "kind": "concept"
    },
    {
     "ch": "14",
     "para": 7,
     "paraEn": 7,
     "kind": "mention"
    }
   ],
   "chapters": [
    "03",
    "14"
   ],
   "degree": 6
  },
  {
   "id": "determinism-dilemma",
   "group": "mind",
   "tr": "Determinizm İkilemi",
   "en": "The Determinism Dilemma",
   "summaryTr": "Fizik yasaları her şeyi belirliyorsa özgür irade bir yanılsama olurdu. Modern fiziğin içsel rastgeleliği ikilemi çözer gibi görünse de tartışma, tanım farklarından sürer.",
   "summaryEn": "If physical laws fix everything, free will would be an illusion. Modern physics’ intrinsic randomness seems to dissolve the dilemma, but the debate persists because of differing definitions.",
   "appearances": [
    {
     "ch": "03",
     "para": 4,
     "paraEn": 4,
     "labelTr": "Özgür İrade Yanılsaması",
     "labelEn": "Illusion of Free Will",
     "kind": "concept"
    }
   ],
   "chapters": [
    "03"
   ],
   "degree": 4
  },
  {
   "id": "falsifiability",
   "group": "mind",
   "tr": "Yanlışlanabilirlik",
   "en": "Falsifiability",
   "summaryTr": "Bilimsel olmanın ölçütü sınanabilirliktir. ‘Geçmiş farklı olsaydı farklı karar verir miydim?’ sınanamaz; bu yüzden geçmişten bağımsız özgür irade bilimsel bir kavram değildir.",
   "summaryEn": "Testability is a mark of science. ‘Would I have decided differently had the past differed?’ cannot be tested, so a past-independent free will is not a scientific notion.",
   "appearances": [
    {
     "ch": "03",
     "para": 6,
     "paraEn": 6,
     "labelTr": "Yanlışlanabilirlik İlkesi",
     "labelEn": "Falsifiability Principle",
     "kind": "concept"
    }
   ],
   "chapters": [
    "03"
   ],
   "degree": 2
  },
  {
   "id": "compatibilism",
   "group": "mind",
   "tr": "Uzlaşmacılık (Compatibilism)",
   "en": "Compatibilism",
   "summaryTr": "Özgür irade, dış olaylar karşısında seçim yapabilme kapasitesi olarak yeniden tanımlanır: sınanabilir (Matrix’teki kırmızı/mavi hap örneği), determinizmle uyumlu ve farklı kod çalıştıran robotlara da uygulanabilir.",
   "summaryEn": "Free will is redefined as the capacity to choose when facing external events: testable (the Matrix red/blue pill example), compatible with determinism, and equally applicable to robots running different code.",
   "appearances": [
    {
     "ch": "03",
     "para": 6,
     "paraEn": 6,
     "labelTr": "Uyumluculuk (Compatibilism)",
     "labelEn": "Compatibilism",
     "kind": "concept"
    },
    {
     "ch": "03",
     "para": 8,
     "paraEn": 8,
     "labelTr": "Robotlar ve Özgür İrade",
     "labelEn": "Robots & Free Will",
     "kind": "concept"
    },
    {
     "ch": "15",
     "para": 7,
     "paraEn": 7,
     "labelTr": "Uyumluculuk ve Özgür İrade",
     "labelEn": "Compatibilism & Free Will",
     "kind": "concept"
    }
   ],
   "chapters": [
    "03",
    "15"
   ],
   "degree": 4
  },
  {
   "id": "second-order-cybernetics",
   "group": "mind",
   "tr": "İkinci Dereceden Sibernetik",
   "en": "Second-Order Cybernetics",
   "summaryTr": "Sistemin kendini incelemesi: özgür irade konusunda ne hissettiğimize bakınca kimse seçimini geçmişten bağımsız hissetmez. Yanılsama olan şey, geçmişten bağımsızlık koşuludur.",
   "summaryEn": "A system inspecting itself: looking at what we feel about free will, nobody feels their choice is independent of the past. The illusion is the independence requirement.",
   "appearances": [
    {
     "ch": "03",
     "para": 7,
     "paraEn": 7,
     "labelTr": "İkinci Derece Sibernetik",
     "labelEn": "Second-Order Cybernetics",
     "kind": "concept"
    }
   ],
   "chapters": [
    "03"
   ],
   "degree": 2
  },
  {
   "id": "llm-self-awareness",
   "group": "mind",
   "tr": "Yapay Zekâ ve Öz-Farkındalık",
   "en": "AI & Self-Awareness",
   "summaryTr": "Dil modelleri öz-farkındaymış gibi davranır ve zor problemleri çözer; ancak ‘öz-farkındayım’ yazması öznel deneyimi kanıtlamaz. Deterministik programların bilinçli olup olamayacağı açık bir sorudur.",
   "summaryEn": "Language models behave as if self-aware and solve hard problems, yet writing ‘I am self-aware’ does not prove subjective experience. Whether a deterministic program can be conscious remains open.",
   "appearances": [
    {
     "ch": "03",
     "para": 9,
     "paraEn": 9,
     "labelTr": "Bilinç ve Yapay Zekâ",
     "labelEn": "Consciousness & AI",
     "kind": "concept"
    },
    {
     "ch": "13",
     "para": 3,
     "paraEn": 3,
     "labelTr": "LLM ve Öz-Farkındalık",
     "labelEn": "LLMs & Self-Awareness",
     "kind": "concept"
    },
    {
     "ch": "16",
     "para": 1,
     "paraEn": 1,
     "kind": "mention"
    }
   ],
   "chapters": [
    "03",
    "13",
    "16"
   ],
   "degree": 6
  },
  {
   "id": "emergence",
   "group": "system",
   "tr": "Ortaya Çıkış (Beliriş)",
   "en": "Emergence",
   "summaryTr": "Parçaların etkileşiminden yeni özellikler doğar. Ortaya çıkış sistem kavramına yakındır ama aynı değildir, çünkü yeni özelliğin bir işlev olması gerekmez. Kitap seçilimi ve zamanın yönünü de bu çerçevede ele alır.",
   "summaryEn": "New properties arise when parts interact. Emergence is close to but distinct from ‘system’, since the new property need not be a function. The book treats selection and time’s direction in this frame too.",
   "appearances": [
    {
     "ch": "04",
     "para": 0,
     "paraEn": 0,
     "labelTr": "Emergence (Beliriş)",
     "labelEn": "Emergence",
     "kind": "concept"
    },
    {
     "ch": "06",
     "para": 0,
     "paraEn": 0,
     "labelTr": "Ortaya Çıkış (Emergence)",
     "labelEn": "Emergence",
     "kind": "concept"
    },
    {
     "ch": "08",
     "para": 4,
     "paraEn": 4,
     "kind": "mention"
    },
    {
     "ch": "14",
     "para": 5,
     "paraEn": 5,
     "kind": "mention"
    },
    {
     "ch": "15",
     "para": 1,
     "paraEn": 1,
     "kind": "mention"
    }
   ],
   "chapters": [
    "04",
    "06",
    "08",
    "14",
    "15"
   ],
   "degree": 8
  },
  {
   "id": "chaos-lorenz",
   "group": "system",
   "tr": "Kaos ve Lorenz Çekeri",
   "en": "Chaos & the Lorenz Attractor",
   "summaryTr": "Başlangıç koşullarındaki küçük değişiklikler büyük sonuçlar doğurur (hava durumu, kelebek etkisi). Lorenz’in üç değişkenli basit modeli, kaosun en az 3 boyutlu bir faz uzayı gerektirdiğini gösterir.",
   "summaryEn": "Small changes in initial conditions cause large changes in outcomes (weather, the butterfly effect). Lorenz’s simple three-variable model shows chaos needs at least a 3-dimensional phase space.",
   "appearances": [
    {
     "ch": "04",
     "para": 2,
     "paraEn": 2,
     "labelTr": "Kaotik Sistemler",
     "labelEn": "Chaotic Systems",
     "kind": "concept"
    },
    {
     "ch": "10",
     "para": 11,
     "paraEn": 11,
     "labelTr": "Lorenz Çekicisi ve Faz Uzayı",
     "labelEn": "Lorenz Attractor & Phase Space",
     "kind": "concept"
    }
   ],
   "chapters": [
    "04",
    "10"
   ],
   "degree": 3
  },
  {
   "id": "self-organization",
   "group": "system",
   "tr": "Kendiliğinden Örgütlenme",
   "en": "Self-Organization",
   "summaryTr": "Yapılar kendiliğinden oluşur: küçük dalgalanmalar pozitif geri besleme ile büyüyüp girdaba dönüşür. Yaşamın başlangıcı da bu kadar basit olmuş olabilir.",
   "summaryEn": "Structures form spontaneously: small ripples grow through positive feedback into a whirlpool. The very beginning of life may have been as simple.",
   "appearances": [
    {
     "ch": "04",
     "para": 4,
     "paraEn": 4,
     "labelTr": "Kendiliğinden Organizasyon",
     "labelEn": "Self-Organization",
     "kind": "concept"
    }
   ],
   "chapters": [
    "04"
   ],
   "degree": 4
  },
  {
   "id": "fractal-systems",
   "group": "system",
   "tr": "Fraktal Sistemler",
   "en": "Fractal Systems",
   "summaryTr": "Sistemler fraktal gibi ölçekler boyunca tekrarlanır: organeller, hücreler, organlar, bireyler, toplumlar, ekosistemler, gezegen. Her düzey, parçalar ile bütün birbirine yarar sağladığı sürece ayakta kalır.",
   "summaryEn": "Systems repeat across scales like a fractal: organelles, cells, organs, individuals, societies, ecosystems, the planet. Each level persists only while parts and whole benefit each other.",
   "appearances": [
    {
     "ch": "04",
     "para": 5,
     "paraEn": 5,
     "labelTr": "Fraktal Hiyerarşi",
     "labelEn": "Fractal Hierarchy",
     "kind": "concept"
    },
    {
     "ch": "15",
     "para": 2,
     "paraEn": 2,
     "labelTr": "Fraktal Sistemler ve Kolektif Zekâ",
     "labelEn": "Fractal Systems & Collective Intelligence",
     "kind": "concept"
    }
   ],
   "chapters": [
    "04",
    "15"
   ],
   "degree": 5
  },
  {
   "id": "feedback-control",
   "group": "system",
   "tr": "Geri Besleme ve Denetim",
   "en": "Feedback & Control",
   "summaryTr": "Pozitif geri besleme değişimi büyütür, negatif geri besleme dengeyi geri getirir (homeostaz). Mühendislikte farkındalık, ölçümlere dayalı olarak tepkileri düzenleyen kapalı döngü denetimdir.",
   "summaryEn": "Positive feedback amplifies change, negative feedback restores balance (homeostasis). In engineering, awareness means regulating responses from measurements, i.e. closed-loop control.",
   "appearances": [
    {
     "ch": "04",
     "para": 9,
     "paraEn": 9,
     "labelTr": "Geri Besleme & Homeostaz",
     "labelEn": "Feedback & Homeostasis",
     "kind": "concept"
    },
    {
     "ch": "13",
     "para": 1,
     "paraEn": 1,
     "labelTr": "Geri-Besleme ve Kontrol",
     "labelEn": "Feedback & Control",
     "kind": "concept"
    }
   ],
   "chapters": [
    "04",
    "13"
   ],
   "degree": 3
  },
  {
   "id": "governance-forms",
   "group": "society",
   "tr": "Hiyerarşi, Demokrasi, Pazar, Toplum",
   "en": "Hierarchy, Democracy, Markets, Society",
   "summaryTr": "Hiyerarşi, demokrasi, pazar ve toplum, insanların yarattığı karar alma ve yürütme mekanizmalarıdır. Demokrasiler çoğunluğa daha yararlıdır; hiyerarşiler ise daha hızlı oldukları için tercih edilmeye devam eder.",
   "summaryEn": "Hierarchy, democracy, markets and societies are human-made decision-making mechanisms. Democracies tend to serve most members better, while hierarchies stay popular because they decide faster.",
   "appearances": [
    {
     "ch": "05",
     "para": 2,
     "paraEn": 2,
     "labelTr": "Hiyerarşik Yapılar",
     "labelEn": "Hierarchical Structures",
     "kind": "concept"
    },
    {
     "ch": "05",
     "para": 6,
     "paraEn": 6,
     "labelTr": "Demokrasi ve Piyasa",
     "labelEn": "Democracy & Markets",
     "kind": "concept"
    }
   ],
   "chapters": [
    "05"
   ],
   "degree": 2
  },
  {
   "id": "collective-intelligence",
   "group": "society",
   "tr": "Kolektif Zekâ",
   "en": "Collective Intelligence",
   "summaryTr": "Grup zekâsı, üyelerin bireysel zekâsına ve birlikte çalışabilme becerisine bağlıdır: sosyal algı, katılım eşitliği ve (sosyal algı üzerinden) gruptaki kadın oranı. Beyne benzer karar mekanizmaları insan topluluklarında ölçekten ölçeğe tekrar eder.",
   "summaryEn": "Group intelligence depends on members’ individual intelligence and how well they work together: social perception, equal participation and (via perception) the share of women. Brain-like decision-making recurs in human collectives at every scale.",
   "appearances": [
    {
     "ch": "05",
     "para": 3,
     "paraEn": 3,
     "labelTr": "Kolektif Zekâ",
     "labelEn": "Collective Intelligence",
     "kind": "concept"
    },
    {
     "ch": "15",
     "para": 2,
     "paraEn": 2,
     "labelTr": "Fraktal Sistemler ve Kolektif Zekâ",
     "labelEn": "Fractal Systems & Collective Intelligence",
     "kind": "concept"
    }
   ],
   "chapters": [
    "05",
    "15"
   ],
   "degree": 3
  },
  {
   "id": "superminds",
   "group": "society",
   "tr": "Süperzihinler",
   "en": "Superminds",
   "summaryTr": "Malone’un Superminds kitabı: insan ve bilgisayar toplulukları, hedefleri üyelerinkinden farklı olsa da, seçilim baskısı ve karşılıklı yarar sayesinde uzun vadede bireylerin iyiliği yönünde davranan zekâlar olarak ele alınır.",
   "summaryEn": "Malone’s Superminds: groups of people and computers act as intelligences whose goals can differ from their members’ yet, through selection pressure and mutual benefit, tend to serve individuals’ long-run well-being.",
   "appearances": [
    {
     "ch": "05",
     "para": 2,
     "paraEn": 2,
     "labelTr": "Süper Akıl (Supermind)",
     "labelEn": "Superminds",
     "kind": "concept"
    }
   ],
   "chapters": [
    "05"
   ],
   "degree": 6
  },
  {
   "id": "blockchain-governance",
   "group": "society",
   "tr": "Blokzincir ve Yönetişim",
   "en": "Blockchain & Governance",
   "summaryTr": "Blokzincir, oyların merkezi bir kurumca sayıldığı sistemlere karşı kurcalanamaz ve şeffaf bir alternatiftir; herkesin kararlara eşit katılmasını sağlar. Enerji tüketimi ve yeni oligarşiler çözülmemiş risklerdir.",
   "summaryEn": "Blockchain is a tamper-proof, transparent alternative to centrally counted votes, letting everyone take part in decisions equally. Energy use and new oligarchies remain unresolved risks.",
   "appearances": [
    {
     "ch": "05",
     "para": 7,
     "paraEn": 7,
     "labelTr": "Blokzincir ve Karar Alma",
     "labelEn": "Blockchain & Governance",
     "kind": "concept"
    }
   ],
   "chapters": [
    "05"
   ],
   "degree": 2
  },
  {
   "id": "weight-volume",
   "group": "system",
   "tr": "Ağırlık ve Hacim",
   "en": "Weight & Volume",
   "summaryTr": "Kütle temel, ağırlık ise kütleçekimiyle etkileşimden doğan ortaya çıkan bir özelliktir; hacim de parçacıkların aynı yerde bulunmaya direnmesinden doğar. Temel parçacıklar sayı kümeleri olduğuna göre gözlediğimiz her şey ortaya çıkan özellik olabilir.",
   "summaryEn": "Mass is fundamental, but weight emerges from interaction with gravity; volume emerges from particles’ resistance to sharing space. Since fundamental particles are just sets of numbers, everything we observe may be emergent.",
   "appearances": [
    {
     "ch": "06",
     "para": 2,
     "paraEn": 2,
     "labelTr": "Kütle ve Hacim",
     "labelEn": "Mass & Volume",
     "kind": "concept"
    }
   ],
   "chapters": [
    "06"
   ],
   "degree": 2
  },
  {
   "id": "flocking-simulation",
   "group": "system",
   "tr": "Sürü Hareketi ve Simülasyon",
   "en": "Flocking & Simulation",
   "summaryTr": "Kuş sürüleri lider olmadan uyumlu hareket eder; komşuya çarpmama ve ortalama yöne gitme gibi basit kurallar simülasyonda bunu yeniden üretir. Simülasyon, matematiğin yetmediği yerlerde temel yöntem olmuştur.",
   "summaryEn": "Bird flocks move in harmony without a leader; simple rules like avoiding neighbours and following the average direction reproduce this in simulation, which became a key method where mathematics falls short.",
   "appearances": [
    {
     "ch": "06",
     "para": 6,
     "paraEn": 6,
     "labelTr": "Kuş Sürüleri ve Simülasyon",
     "labelEn": "Flocking & Simulation",
     "kind": "concept"
    }
   ],
   "chapters": [
    "06"
   ],
   "degree": 3
  },
  {
   "id": "networks-small-world",
   "group": "system",
   "tr": "Ağlar ve Küçük Dünya",
   "en": "Networks & Small World",
   "summaryTr": "Aşağıdan yukarıya örgütlenmeler (açık kaynak projeleri, oylamayla yönetilen ekipler) düğüm ve bağlantılardan oluşan ağlar kurar; işlevsel ağların çoğunda her düğüme 5-6 adımda ulaşılan küçük dünya özelliği görülür.",
   "summaryEn": "Bottom-up organisations (open-source projects, teams run by voting) form networks of nodes and edges; many functional networks show the small-world property, reaching any node in about 5–6 steps.",
   "appearances": [
    {
     "ch": "06",
     "para": 8,
     "paraEn": 8,
     "labelTr": "Ağ Yapıları ve Küçük Dünya",
     "labelEn": "Networks & Small-World",
     "kind": "concept"
    }
   ],
   "chapters": [
    "06"
   ],
   "degree": 3
  },
  {
   "id": "first-emergence",
   "group": "system",
   "tr": "İlk Ortaya Çıkış (0→1)",
   "en": "First Emergence (0→1)",
   "summaryTr": "0’dan 1’e geçiş, yani hiçlikten bir şeye geçiş, 1’den sonra işleyen birleştirme işlemleriyle kurulamaz. İlk ortaya çıkışın açıklanmasının zor mu imkânsız mı olduğu da en az sorunun kendisi kadar ilginçtir.",
   "summaryEn": "The jump from 0 to 1, from nothing to something, cannot be built with the combination operations that work from 1 onward. Whether first emergence is hard or impossible to explain is as interesting as the problem itself.",
   "appearances": [
    {
     "ch": "06",
     "para": 9,
     "paraEn": 9,
     "labelTr": "İlk Ortaya Çıkış: 0'dan 1'e Geçiş",
     "labelEn": "First Emergence: 0 to 1",
     "kind": "concept"
    },
    {
     "ch": "15",
     "para": 5,
     "paraEn": 5,
     "kind": "mention"
    }
   ],
   "chapters": [
    "06",
    "15"
   ],
   "degree": 7
  },
  {
   "id": "speed-of-light",
   "group": "physics",
   "tr": "Işık Hızı ve Görelilik",
   "en": "Speed of Light & Relativity",
   "summaryTr": "Aşılamayan sonlu hız sınırı, farklı hızlardaki gözlemcilerin neden-sonuç sırası üzerinde uzlaşmasını sağlar; Newton yasaları bunu veremez, görelilik verir. Yayılma gecikmesi, zaman sırasıyla nedenselliği belirlemeyi de mümkün kılar.",
   "summaryEn": "A finite, unexceeded speed limit lets observers moving at different speeds agree on cause and effect, which Newtonian laws cannot provide but relativity does. The propagation delay also lets time-order define causation.",
   "appearances": [
    {
     "ch": "07",
     "para": 2,
     "paraEn": 2,
     "labelTr": "Işık Hızı ve Görelilik",
     "labelEn": "Speed of Light & Relativity",
     "kind": "concept"
    },
    {
     "ch": "11",
     "para": 8,
     "paraEn": 8,
     "kind": "mention"
    },
    {
     "ch": "11",
     "para": 10,
     "paraEn": 10,
     "labelTr": "Zaman Gecikmesi ve Işık Hızı",
     "labelEn": "Time Delay & Speed of Light",
     "kind": "concept"
    }
   ],
   "chapters": [
    "07",
    "11"
   ],
   "degree": 4
  },
  {
   "id": "self-reference",
   "group": "math",
   "tr": "Öz-Gönderim ve Karar Verilemezlik",
   "en": "Self-Reference & Undecidability",
   "summaryTr": "Öz-gönderim mantıksal imkânsızlıklar doğurur: berber paradoksu, zamanda yolculuk paradoksları, Turing’in durma problemi ve Gödel’in sonuçları. Sonsuza uzanan iç içe kamera görüntüsünün de arkasında yatar.",
   "summaryEn": "Self-reference produces logical impossibilities: the barber paradox, time-travel paradoxes, Turing’s halting problem and Gödel’s results. It also lies behind the endless nested camera image that leads towards infinity.",
   "appearances": [
    {
     "ch": "07",
     "para": 3,
     "paraEn": 3,
     "labelTr": "Turing ve Durma Problemi",
     "labelEn": "Turing & Halting Problem",
     "kind": "concept"
    }
   ],
   "chapters": [
    "07"
   ],
   "degree": 3
  },
  {
   "id": "p-vs-np",
   "group": "math",
   "tr": "P = NP Problemi",
   "en": "P vs NP",
   "summaryTr": "Bazı problemlerin çözümü çok uzun sürer ama doğrulaması hızlıdır; kolay bir çözüm yolu olup olmadığı (P=NP?) bir Milenyum Ödülü problemidir. Asal çarpanlara ayırma, modern şifrelemenin dayanağı olan örnektir.",
   "summaryEn": "Some problems take very long to solve but are quick to verify; whether an easy solution always exists (P=NP?) is a Millennium Prize problem. Prime factorization is the example underpinning modern encryption.",
   "appearances": [
    {
     "ch": "07",
     "para": 5,
     "paraEn": 5,
     "labelTr": "P = NP Problemi",
     "labelEn": "P = NP Problem",
     "kind": "concept"
    }
   ],
   "chapters": [
    "07"
   ],
   "degree": 3
  },
  {
   "id": "entanglement",
   "group": "physics",
   "tr": "Kuantum Dolaşıklığı",
   "en": "Quantum Entanglement",
   "summaryTr": "Kuantum fiziği, ışıktan hızlı iletişim yasağına dolaşıklıkla karşılık verir: parçacıklar arasında anlık ilişki olabilir ama anlık bilgi aktarımı olmaz, nedensellik korunur.",
   "summaryEn": "Quantum physics answers the no-faster-than-light rule with entanglement: particles can be instantly correlated without any instant transfer of information, so causality is preserved.",
   "appearances": [
    {
     "ch": "07",
     "para": 9,
     "paraEn": 9,
     "labelTr": "Kuantum Dolanıklığı",
     "labelEn": "Quantum Entanglement",
     "kind": "concept"
    }
   ],
   "chapters": [
    "07"
   ],
   "degree": 2
  },
  {
   "id": "quantum-algorithms",
   "group": "physics",
   "tr": "Kuantum Algoritmaları",
   "en": "Quantum Algorithms",
   "summaryTr": "Kuantum bilgisayarlar (aynı anda 0 ve 1 tutan kübitler) klasik olarak imkânsız algoritmaları, örneğin hızlı çarpanlara ayırmayı ve Grover aramasını çalıştırabilir. Grover’ın doğada fotosentezde bile işliyor olabileceği öne sürülür.",
   "summaryEn": "Quantum computers (qubits holding 0 and 1 at once) can run algorithms impossible classically, such as fast factoring and Grover search. Grover’s algorithm is even hypothesised to operate in photosynthesis.",
   "appearances": [
    {
     "ch": "07",
     "para": 8,
     "paraEn": 8,
     "labelTr": "Grover Algoritması",
     "labelEn": "Grover's Algorithm",
     "kind": "concept"
    }
   ],
   "chapters": [
    "07"
   ],
   "degree": 2
  },
  {
   "id": "arrow-of-time",
   "group": "physics",
   "tr": "Zamanın Oku ve İkinci Yasa",
   "en": "Arrow of Time & the Second Law",
   "summaryTr": "Zamanın yönü, termodinamiğin ikinci yasasıdır: ileri yöndeki olaylar yüksek olasılıklı, geri yöndekiler astronomik ölçüde düşük olasılıklıdır; enerji kayıpları bu yüzden geri dönüşsüz görünür. Büyük sayılara özgü istatistiksel bir olgudur.",
   "summaryEn": "Time’s direction is the second law of thermodynamics: forward events are high-probability, reverse ones astronomically unlikely, so energy losses look irreversible. It is a statistical, large-numbers phenomenon.",
   "appearances": [
    {
     "ch": "08",
     "para": 7,
     "paraEn": 7,
     "labelTr": "Zamanın Oku ve Entropi",
     "labelEn": "Arrow of Time & Entropy",
     "kind": "concept"
    }
   ],
   "chapters": [
    "08"
   ],
   "degree": 5
  },
  {
   "id": "time-symmetry",
   "group": "physics",
   "tr": "Zaman Simetrisi",
   "en": "Time Symmetry",
   "summaryTr": "Kütleçekimi ve elektrostatik kuvvet zamanda simetriktir; bu yüzden düşen yaprağın tersten oynatılmasının neden garip göründüğünü açıklayamaz. Moleküler ölçekte çarpışmalar tamamen esnektir ve bir yön görünmez.",
   "summaryEn": "Gravity and the electrostatic force are time-symmetric, so neither explains why a falling leaf looks wrong played backwards. At molecular scale collisions are perfectly elastic and no direction shows.",
   "appearances": [
    {
     "ch": "08",
     "para": 0,
     "paraEn": 0,
     "labelTr": "Zaman Simetrisi",
     "labelEn": "Time Symmetry",
     "kind": "concept"
    },
    {
     "ch": "08",
     "para": 2,
     "paraEn": 2,
     "labelTr": "Moleküler Elastik Çarpışmalar",
     "labelEn": "Molecular Elastic Collisions",
     "kind": "concept"
    }
   ],
   "chapters": [
    "08"
   ],
   "degree": 2
  },
  {
   "id": "low-entropy-start",
   "group": "physics",
   "tr": "Düşük Entropili Başlangıç",
   "en": "Low-Entropy Beginning",
   "summaryTr": "Zamanın oku bu kadar uzun süredir sürebildiyse evren özel, yüksek düzenli, düşük entropili bir durumla başlamış olmalıdır. Bunun nedeni kozmolojinin açık sorusudur.",
   "summaryEn": "Time’s arrow has lasted so long only if the universe began in a special, highly ordered, low-entropy state. Why remains an open question in cosmology.",
   "appearances": [
    {
     "ch": "08",
     "para": 9,
     "paraEn": 9,
     "labelTr": "Düşük Entropili Başlangıç Koşulları",
     "labelEn": "Low-Entropy Initial Conditions",
     "kind": "concept"
    }
   ],
   "chapters": [
    "08"
   ],
   "degree": 2
  },
  {
   "id": "infinity",
   "group": "math",
   "tr": "Sonsuzluk ve Sayılabilirlik",
   "en": "Infinity & Countability",
   "summaryTr": "Sonsuzluk; sonsuz toplamlar (Euler’in Basel sonucu), sonsuz küçükler hesabı, Cantor’un sayılabilir ve sayılamaz sonsuzlukları ve Hilbert’in otel paradoksu üzerinden ele alınır. Evrenin sonlu mu sonsuz mu olduğu açık kalır.",
   "summaryEn": "Infinity is approached through infinite sums (Euler’s Basel result), infinitesimal calculus, Cantor’s countable and uncountable infinities and Hilbert’s hotel paradox. Whether the universe is finite or infinite stays open.",
   "appearances": [
    {
     "ch": "09",
     "para": 6,
     "paraEn": 6,
     "labelTr": "Sonsuzluk ve Sayılabilirlik",
     "labelEn": "Infinity & Countability",
     "kind": "concept"
    },
    {
     "ch": "09",
     "para": 7,
     "paraEn": 7,
     "kind": "mention"
    },
    {
     "ch": "15",
     "para": 5,
     "paraEn": 5,
     "kind": "mention"
    }
   ],
   "chapters": [
    "09",
    "15"
   ],
   "degree": 5
  },
  {
   "id": "euler-zeta",
   "group": "math",
   "tr": "Euler Çarpımı ve Zeta",
   "en": "Euler Product & Zeta",
   "summaryTr": "Zeta fonksiyonunun sayma sayıları üzerindeki sonsuz toplamı, asal sayılar üzerindeki sonsuz çarpıma (Euler çarpımı) eşittir; 2 noktasında Basel toplamı π²/6 çıkar. Sonsuzluk, asallar ve Riemann hipotezi böylece bağlanır.",
   "summaryEn": "The zeta function’s infinite sum over counting numbers equals an infinite product over primes (the Euler product); at 2 it gives the Basel sum π²/6. Infinity, primes and the Riemann hypothesis are tied together.",
   "appearances": [
    {
     "ch": "09",
     "para": 3,
     "paraEn": 3,
     "labelTr": "Euler Çarpım Formülü",
     "labelEn": "Euler Product Formula",
     "kind": "concept"
    }
   ],
   "chapters": [
    "09"
   ],
   "degree": 3
  },
  {
   "id": "platonic-solids",
   "group": "math",
   "tr": "Platonik Katılar",
   "en": "Platonic Solids",
   "summaryTr": "Yalnızca beş düzgün çokyüzlü vardır (4, 6, 8, 12, 20 yüz); bu, Euler formülüyle gösterilir ve sonsuzluğun karşıtı olan sonlu bir dizi örneğidir.",
   "summaryEn": "Only five regular polyhedra exist (4, 6, 8, 12, 20 faces), shown using Euler’s formula: an example of a finite sequence, the opposite of infinity.",
   "appearances": [
    {
     "ch": "09",
     "para": 4,
     "paraEn": 4,
     "labelTr": "Platonik Cisimler",
     "labelEn": "Platonic Solids",
     "kind": "concept"
    }
   ],
   "chapters": [
    "09"
   ],
   "degree": 2
  },
  {
   "id": "dimensions-3d",
   "group": "physics",
   "tr": "3 Boyutlu Uzay",
   "en": "Three-Dimensional Space",
   "summaryTr": "3 ve daha az boyutu kolay anlarız; iki boyutlu varlıklar kendi uzaylarından geçen küreyi büyüyüp küçülen bir daire olarak görürdü. Benzer bir olay bizim uzayımızda olsaydı yüksek boyutlu bir nesneyi düşünmemiz gerekirdi.",
   "summaryEn": "We grasp three dimensions or fewer easily; two-dimensional beings would see a passing sphere only as a circle that grows and shrinks. A similar event in our space would suggest a higher-dimensional object.",
   "appearances": [
    {
     "ch": "10",
     "para": 0,
     "paraEn": 0,
     "labelTr": "3 Boyutlu Uzay ve Boyut Algısı",
     "labelEn": "3D Space & Perception of Dimensions",
     "kind": "concept"
    }
   ],
   "chapters": [
    "10"
   ],
   "degree": 6
  },
  {
   "id": "anthropic-principle",
   "group": "physics",
   "tr": "Antropik İlke ve Çoklu Evren",
   "en": "Anthropic Principle & Multiverse",
   "summaryTr": "Boyut sayısı ya da fizik sabitleri gibi olası görünmeyen rastlantılar, ancak buna uygun evrenlerde var olup soru sorabildiğimiz için böyledir. Kitap bu ilkeye seçilimin kendisini açıklamak için de döner.",
   "summaryEn": "Seemingly unlikely coincidences, like the number of dimensions or the constants of physics, hold because we can only exist and ask in universes where they do. The book returns to it to explain selection itself.",
   "appearances": [
    {
     "ch": "10",
     "para": 1,
     "paraEn": 1,
     "labelTr": "İnsancı İlke ve Çoklu Evrenler",
     "labelEn": "Anthropic Principle & Multiverse",
     "kind": "concept"
    },
    {
     "ch": "14",
     "para": 5,
     "paraEn": 5,
     "kind": "mention"
    },
    {
     "ch": "14",
     "para": 11,
     "paraEn": 11,
     "kind": "mention"
    },
    {
     "ch": "15",
     "para": 6,
     "paraEn": 6,
     "labelTr": "İnsancı İlke ve Çoklu Evrenler",
     "labelEn": "Anthropic Principle & Multiverse",
     "kind": "concept"
    }
   ],
   "chapters": [
    "10",
    "14",
    "15"
   ],
   "degree": 3
  },
  {
   "id": "isomers",
   "group": "physics",
   "tr": "İzomer Sayısı",
   "en": "Isomer Counts",
   "summaryTr": "Moleküllerin izomer sayısı 3 boyuta kadar hızla artar, sonrasında azalır. Çok izomer çok çeşitlilik demektir ve 3 boyutun yaşam için neden özel göründüğünü açıklar.",
   "summaryEn": "The number of isomers of molecules rises quickly up to three dimensions and falls beyond. More isomers means more diversity, one reason 3D space looks special for life.",
   "appearances": [
    {
     "ch": "10",
     "para": 3,
     "paraEn": 3,
     "labelTr": "İzomer Sayıları ve Çeşitlilik",
     "labelEn": "Isomer Counts & Diversity",
     "kind": "concept"
    }
   ],
   "chapters": [
    "10"
   ],
   "degree": 2
  },
  {
   "id": "bertrand-orbits",
   "group": "physics",
   "tr": "Bertrand Teoremi ve Kararlı Yörüngeler",
   "en": "Bertrand’s Theorem & Stable Orbits",
   "summaryTr": "Bertrand, kararlı yörüngelerin yalnızca 1/r² ve orantılı (r) kuvvet yasalarında oluştuğunu gösterdi. Kütleçekimi için yalnızca 3 boyutlu uzay 1/r² verir, böylece 3 yine özel çıkar.",
   "summaryEn": "Bertrand showed stable orbits form only for 1/r² and proportional (r) force laws. Only 3D space gives gravity a 1/r² law, so 3 is special again.",
   "appearances": [
    {
     "ch": "10",
     "para": 5,
     "paraEn": 5,
     "labelTr": "Bertrand Teoremi ve Kararlı Yörüngeler",
     "labelEn": "Bertrand's Theorem & Stable Orbits",
     "kind": "concept"
    }
   ],
   "chapters": [
    "10"
   ],
   "degree": 2
  },
  {
   "id": "string-theory",
   "group": "physics",
   "tr": "Sicim Kuramı ve Ek Boyutlar",
   "en": "String Theory & Extra Dimensions",
   "summaryTr": "Sicim kuramı fizik parametrelerini ortaya çıkan özellikler olarak açıklayabilir ve ancak çok küçük ölçeklerde görülen ek uzay boyutları öngörür; ama henüz sınanamaz ve bazıları onu salt matematiksel yapı sayar.",
   "summaryEn": "String theory might derive physical parameters as emergent properties and predicts extra spatial dimensions visible only at tiny scales, but it cannot yet be tested and some see it as pure mathematics.",
   "appearances": [
    {
     "ch": "10",
     "para": 8,
     "paraEn": 8,
     "labelTr": "Sicim Teorisi ve Ek Boyutlar",
     "labelEn": "String Theory & Extra Dimensions",
     "kind": "concept"
    }
   ],
   "chapters": [
    "10"
   ],
   "degree": 3
  },
  {
   "id": "regular-polytopes",
   "group": "math",
   "tr": "Hiperküp ve Düzgün Şekiller",
   "en": "Hypercube & Regular Shapes",
   "summaryTr": "Her boyuttaki düzgün şekil sayısı ∞, 5, 6, 3, 3, 3… dizisini verir; yalnızca 3 ve 4 boyut zengindir (hiperküp sekiz küpten oluşur). Bu, görelilikteki 3+1 boyutlu geometriyle örtüşür.",
   "summaryEn": "Counting regular shapes per dimension gives ∞, 5, 6, 3, 3, 3…; only dimensions 3 and 4 are rich (the hypercube is built from eight cubes), matching relativity’s 3+1 dimensional geometry.",
   "appearances": [
    {
     "ch": "10",
     "para": 17,
     "paraEn": 17,
     "labelTr": "Hiperküp ve Yüksek Boyutlu Geometri",
     "labelEn": "Hypercube & Higher-Dimensional Geometry",
     "kind": "concept"
    }
   ],
   "chapters": [
    "10"
   ],
   "degree": 2
  },
  {
   "id": "causal-direction",
   "group": "physics",
   "tr": "Eşittir İşareti ve Nedensellik",
   "en": "The Equals Sign & Causality",
   "summaryTr": "f=ma gibi denklemler sayısal eşitliği söyler, neyin neye yol açtığını değil. Kitap, nedenin sonuçtan önce geldiğini ve bu ölçütün denklemlerde yer almadığını vurgular.",
   "summaryEn": "Equations like f=ma state numerical equality, not which side causes which. The book stresses that cause precedes effect in time, a criterion equations do not encode.",
   "appearances": [
    {
     "ch": "11",
     "para": 2,
     "paraEn": 2,
     "labelTr": "Eşittir İşareti ve Nedensellik",
     "labelEn": "The Equals Sign & Causality",
     "kind": "concept"
    },
    {
     "ch": "11",
     "para": 10,
     "paraEn": 10,
     "labelTr": "Zaman Gecikmesi ve Işık Hızı",
     "labelEn": "Time Delay & Speed of Light",
     "kind": "concept"
    }
   ],
   "chapters": [
    "11"
   ],
   "degree": 5
  },
  {
   "id": "correlation-causation",
   "group": "physics",
   "tr": "Korelasyon ve Nedensellik",
   "en": "Correlation vs. Causation",
   "summaryTr": "İstatistik ilişkileri (kuvvet ve ivme dâhil) bulur ama hangisinin neden olduğunu söyleyemez. Pearl ve Mackenzie’nin The Book of Why kitabı, resmi bilimin nedenselliği ihmal ettiğini savunur.",
   "summaryEn": "Statistics finds relations (even between force and acceleration) but cannot say which causes which. Pearl and Mackenzie’s The Book of Why argues that formal science neglects causation.",
   "appearances": [
    {
     "ch": "11",
     "para": 5,
     "paraEn": 5,
     "labelTr": "Korelasyon vs. Nedensellik",
     "labelEn": "Correlation vs. Causality",
     "kind": "concept"
    },
    {
     "ch": "11",
     "para": 11,
     "paraEn": 11,
     "labelTr": "Judea Pearl ve Nedenler Kitabı",
     "labelEn": "Judea Pearl & The Book of Why",
     "kind": "concept"
    }
   ],
   "chapters": [
    "11"
   ],
   "degree": 2
  },
  {
   "id": "quantum-determinism",
   "group": "physics",
   "tr": "Kuantum Belirsizliği ve Determinizm",
   "en": "Quantum Uncertainty & Determinism",
   "summaryTr": "Kuantum kuramında dalga fonksiyonu olasılıkların zamanla değişimini anlatır; nedenleri belirlemek güçleşir, birden çok neden tek sonuca yol açabilir ve nedenler zinciri olarak determinizm sorgulanır.",
   "summaryEn": "In quantum theory the wave function describes evolving probabilities, causes become hard to pin down, several causes can lead to one outcome, and determinism as a chain of causes is called into question.",
   "appearances": [
    {
     "ch": "11",
     "para": 12,
     "paraEn": 12,
     "labelTr": "Kuantumda Belirsizlik ve Determinizm",
     "labelEn": "Quantum Uncertainty & Determinism",
     "kind": "concept"
    }
   ],
   "chapters": [
    "11"
   ],
   "degree": 5
  },
  {
   "id": "descartes-dualism",
   "group": "mind",
   "tr": "Descartes ve İkicilik",
   "en": "Descartes & Dualism",
   "summaryTr": "Descartes’ın ‘düşünüyorum’ çıkarımı, bir oyun karakterinin gözünden bakmaya benzetilir: bedenden ayrı bir gözlemci (ikicilik) fikri, dün başka bir karakteri yönetmiş olabileceğimiz düşüncesini bile makul kılar.",
   "summaryEn": "Descartes’s ‘I think’ is compared to seeing through a game character’s eyes: an observer distinct from the body (dualism) makes even the thought that we controlled a different character yesterday seem plausible.",
   "appearances": [
    {
     "ch": "12",
     "para": 0,
     "paraEn": 0,
     "labelTr": "Descartes ve Düşünen Ben",
     "labelEn": "Descartes & the Thinking Self",
     "kind": "concept"
    },
    {
     "ch": "12",
     "para": 1,
     "paraEn": 1,
     "labelTr": "Kartezyen Düalizm ve Oyun Karakteri",
     "labelEn": "Cartesian Dualism & Video Game Avatars",
     "kind": "concept"
    }
   ],
   "chapters": [
    "12"
   ],
   "degree": 2
  },
  {
   "id": "vr-perception",
   "group": "mind",
   "tr": "Sanal Gerçeklik ve Algı",
   "en": "Virtual Reality & Perception",
   "summaryTr": "Sanal gerçeklik başlığı, göz ve beynin zaten uyguladığı dönüşümlere bir dönüşüm daha ekler; gerçekliği yok etmez. Sanal toplantılar da aynı soruyu gündeme getirir.",
   "summaryEn": "A VR headset adds one more transformation to those the eyes and brain already apply; it does not remove reality. VR meetings raise the same question.",
   "appearances": [
    {
     "ch": "12",
     "para": 3,
     "paraEn": 3,
     "labelTr": "Beden Dışı Deneyim ve VR",
     "labelEn": "Out-of-Body Experience & VR",
     "kind": "concept"
    }
   ],
   "chapters": [
    "12"
   ],
   "degree": 3
  },
  {
   "id": "information-worldview",
   "group": "mind",
   "tr": "Zihin ve Bilgi Temelli Evren",
   "en": "Mind & the Information-Based Universe",
   "summaryTr": "Zihin, gelen sinyallerden dünya modeli kuran bir bilgi işleme merkezidir; gerçekliğin zihnin işlediği bilgi olduğu söylenebilir. Fizikteki bilgi temelli kuramlar ve somut nesnelerin algıdan doğduğu görüşü böylece savunulabilir olur.",
   "summaryEn": "The mind is an information processor that builds a world model from signals, so reality can be said to be the information it processes. Information-based physical theories and objects emerging through perception become tenable.",
   "appearances": [
    {
     "ch": "12",
     "para": 5,
     "paraEn": 5,
     "labelTr": "Zihin Bir Bilgi İşlem Merkezidir",
     "labelEn": "Mind as an Information Processor",
     "kind": "concept"
    },
    {
     "ch": "15",
     "para": 4,
     "paraEn": 4,
     "labelTr": "Enformasyonel Evren Görüşü",
     "labelEn": "Computational Worldview of Information",
     "kind": "concept"
    },
    {
     "ch": "16",
     "para": 3,
     "paraEn": 3,
     "kind": "mention"
    }
   ],
   "chapters": [
    "12",
    "15",
    "16"
   ],
   "degree": 6
  },
  {
   "id": "touch-reality",
   "group": "mind",
   "tr": "Dokunma: Gerçeklik Ölçütü",
   "en": "Touch as the Criterion of Reality",
   "summaryTr": "Dokunma, ‘gerçekten var’ dediğimiz şeyin ölçütüdür: tutamadıklarımızı (rüyalar, görüntüler, soyut kavramlar) gerçek dışı sayarız. Dokunma görsel yanılsamaları da doğrulayarak dünya modelimizin tutarlılığını artırır.",
   "summaryEn": "Touch is our criterion for ‘really existing’: what we cannot grasp (dreams, images, abstract concepts) we call unreal. Touch also checks visual illusions, keeping our world model consistent.",
   "appearances": [
    {
     "ch": "12",
     "para": 7,
     "paraEn": 7,
     "labelTr": "Dokunma Duyusu ve Gerçeklik Kriteri",
     "labelEn": "Touch as the Criterion of Reality",
     "kind": "concept"
    }
   ],
   "chapters": [
    "12"
   ],
   "degree": 2
  },
  {
   "id": "awareness",
   "group": "mind",
   "tr": "Farkındalık",
   "en": "Awareness",
   "summaryTr": "Farkındalık, bir süreç hakkında bilgi sahibi olmak ve bu bilgiyle geri besleme yoluyla düzenleme yapmaktır; öz-farkındalık aynı düzenlemenin sistemin kendi iç durumlarına yönelmesidir. Gizemi birinci şahıs bakış açısından gelir.",
   "summaryEn": "Awareness is knowledge of a process plus active regulation through feedback; self-awareness is the same regulation aimed at the system’s own internal states. Its mystery comes from the first-person perspective.",
   "appearances": [
    {
     "ch": "13",
     "para": 1,
     "paraEn": 0,
     "labelTr": "Farkındalığın Tanımı",
     "labelEn": "Definition of Awareness",
     "kind": "concept"
    },
    {
     "ch": "15",
     "para": 3,
     "paraEn": 3,
     "kind": "mention"
    },
    {
     "ch": "15",
     "para": 7,
     "paraEn": 7,
     "kind": "mention"
    }
   ],
   "chapters": [
    "13",
    "15"
   ],
   "degree": 6
  },
  {
   "id": "qualia",
   "group": "mind",
   "tr": "Qualia (Öznel Deneyim)",
   "en": "Qualia",
   "summaryTr": "Qualia, deneyimin hissedilen öznel niteliğidir. Bir yapay zekâ sertliği ya da soğuğu ölçebilir ama hissedip hissetmediğini bilemeyiz; qualia, yapay zekâ somutluğunun gerçekten ‘hissedilip’ hissedilmediğini belirleyen sınırdır.",
   "summaryEn": "Qualia are the felt, subjective qualities of experience. An AI may measure hardness or cold but we cannot tell whether it feels them, so qualia mark the boundary on whether AI-made concreteness is truly ‘felt’.",
   "appearances": [
    {
     "ch": "13",
     "para": 3,
     "paraEn": 3,
     "labelTr": "Qualia / Öznel Deneyim",
     "labelEn": "Qualia / Subjective Experience",
     "kind": "concept"
    },
    {
     "ch": "16",
     "para": 4,
     "paraEn": 4,
     "labelTr": "Qualia ve Hissedilen Somutluk",
     "labelEn": "Qualia & Felt Concreteness",
     "kind": "concept"
    }
   ],
   "chapters": [
    "13",
    "16"
   ],
   "degree": 4
  },
  {
   "id": "behaviorism",
   "group": "mind",
   "tr": "Davranışçılık",
   "en": "Behaviorism",
   "summaryTr": "Davranışçılık, kusursuz öz-farkındalık davranışının öz-farkındalığın kendisi olduğunu savunur. Öz-farkındaymış gibi davranan dil modelleri, ayna testi gibi davranışsal sınamaların güvenilirliğini azaltır.",
   "summaryEn": "Behaviorism holds that flawless self-aware behaviour is self-awareness. LLMs that act self-aware limit the reliability of behavioural tests such as mirror recognition.",
   "appearances": [
    {
     "ch": "13",
     "para": 3,
     "paraEn": 3,
     "labelTr": "Davranışçılık (Behaviorism)",
     "labelEn": "Behaviorism",
     "kind": "concept"
    }
   ],
   "chapters": [
    "13"
   ],
   "degree": 2
  },
  {
   "id": "intelligence-vs-awareness",
   "group": "mind",
   "tr": "Zekâ ≠ Öz-Farkındalık",
   "en": "Intelligence ≠ Self-Awareness",
   "summaryTr": "Düşünce deneyi: geniş bir evren modeline sahip, yüksek zekâlı ama içsel hissi olmayan bir sistem, zekâ ile öznel farkındalığın birbirinden bağımsız gelişebileceğini gösterir.",
   "summaryEn": "Thought experiment: a highly intelligent system with a vast world model but no inner feeling shows that intelligence and subjective awareness can develop independently.",
   "appearances": [
    {
     "ch": "13",
     "para": 5,
     "paraEn": 5,
     "labelTr": "Zekâ ≠ Öz-Farkındalık",
     "labelEn": "Intelligence ≠ Self-Awareness",
     "kind": "concept"
    }
   ],
   "chapters": [
    "13"
   ],
   "degree": 1
  },
  {
   "id": "planetary-mind",
   "group": "society",
   "tr": "Gezegensel Zihin",
   "en": "Planetary Mind",
   "summaryTr": "Toplumlar, internet, veri merkezleri, sensörler, yapay zekâ ve 8 milyar insan zihni, nöronlardan oluşan bir beyne benzeyen ‘gezegensel sinir ağı’ olarak düşünülebilir. İnsanlar onun makro bilincini algılayamayabilir ama onunla ilk temaslar başlamıştır.",
   "summaryEn": "Societies, the internet, data centres, sensors, AI and 8 billion minds can be seen as a ‘planetary neural network’ like a brain of neurons. Humans may be unable to perceive its macro-consciousness, yet first contacts with it have begun.",
   "appearances": [
    {
     "ch": "02",
     "para": 10,
     "paraEn": 10,
     "kind": "mention"
    },
    {
     "ch": "05",
     "para": 8,
     "paraEn": 8,
     "kind": "mention"
    },
    {
     "ch": "13",
     "para": 7,
     "paraEn": 7,
     "labelTr": "Gezegensel Sinir Ağı",
     "labelEn": "Planetary Neural Network",
     "kind": "concept"
    },
    {
     "ch": "13",
     "para": 11,
     "paraEn": 11,
     "labelTr": "Gezegensel Akıl Ara Yüzü",
     "labelEn": "Planetary Mind Interface",
     "kind": "concept"
    }
   ],
   "chapters": [
    "02",
    "05",
    "13"
   ],
   "degree": 6
  },
  {
   "id": "collective-awareness",
   "group": "society",
   "tr": "Toplumsal Farkındalık",
   "en": "Collective Awareness",
   "summaryTr": "Bir toplumun iç ve dış süreçlere verdiği tepkiler onun farkındalığının ölçüsüdür: iklim krizine kayıtsızlık eksikliği, ortak adımlar ve yasalar aktif farkındalığı gösterir.",
   "summaryEn": "A society’s responses to internal and external processes measure its awareness: apathy toward the climate crisis shows a deficit, collective laws and steps show active awareness.",
   "appearances": [
    {
     "ch": "13",
     "para": 6,
     "paraEn": 6,
     "labelTr": "Kolektif ve Toplumsal Farkındalık",
     "labelEn": "Collective & Societal Awareness",
     "kind": "concept"
    }
   ],
   "chapters": [
    "13"
   ],
   "degree": 2
  },
  {
   "id": "downward-causation",
   "group": "mind",
   "tr": "Aşağı Yönlü Nedensellik",
   "en": "Downward Causation",
   "summaryTr": "Ortaya çıkış aşağıdan yukarıya işler ama bütün de aşağı yönde etkir: beyin hormonlarla nöronları değiştirir, küresel ağ da insanları ve kurumları düzenler.",
   "summaryEn": "Emergence works upward, but the whole also acts downward: the brain alters neurons through hormones, and the global network regulates people and institutions.",
   "appearances": [
    {
     "ch": "13",
     "para": 10,
     "paraEn": 10,
     "labelTr": "Aşağı Yönlü Nedensellik",
     "labelEn": "Downward Causation",
     "kind": "concept"
    }
   ],
   "chapters": [
    "13"
   ],
   "degree": 2
  },
  {
   "id": "binding-dissociation",
   "group": "persist",
   "tr": "Bağlanma ve Ayrışma",
   "en": "Binding & Dissociation",
   "summaryTr": "Seçilimin işleyebilmesi için parçaların birleşip yapı kurmasına ve yapıların yeniden ayrışmasına izin veren yasalar gerekir. Yalnızca bağlanmanın olduğu bir evrende seçilim de düşünen varlıklar da olamazdı.",
   "summaryEn": "Selection needs laws that let parts combine into structures and let structures break apart again. A universe of binding alone would host neither selection nor thinking beings.",
   "appearances": [
    {
     "ch": "14",
     "para": 3,
     "paraEn": 3,
     "labelTr": "Fiziksel Önkoşul: Birleşme ve Parçalanma",
     "labelEn": "Physical Prerequisite: Binding & Dissociation",
     "kind": "concept"
    }
   ],
   "chapters": [
    "14"
   ],
   "degree": 1
  },
  {
   "id": "cooperation",
   "group": "persist",
   "tr": "İşbirliği ve Koalisyonlar",
   "en": "Cooperation & Coalitions",
   "summaryTr": "Canlılardan ulus-devletlere kadar ittifaklar ve koalisyonlar güç kazandırdığı için seçilimin ürünüdür. İttifak, seçilim ve çözülme döngüsü her ölçekte yapıları şekillendirir.",
   "summaryEn": "From organisms to nation-states, alliances and coalitions confer strength and are products of selection. The cycle of alliance, selection and disintegration shapes structures at every scale.",
   "appearances": [
    {
     "ch": "02",
     "para": 6,
     "paraEn": 6,
     "kind": "mention"
    },
    {
     "ch": "14",
     "para": 5,
     "paraEn": 5,
     "labelTr": "İşbirliği ve Koalisyonlar",
     "labelEn": "Cooperation & Coalitions",
     "kind": "concept"
    }
   ],
   "chapters": [
    "02",
    "14"
   ],
   "degree": 3
  },
  {
   "id": "selection-pressure",
   "group": "persist",
   "tr": "Seçilim Baskısı",
   "en": "Selection Pressure",
   "summaryTr": "Seçilim baskısı aşırı güçlüyse erken bir baskın biçim ortaya çıkar, aşırı gevşekse gelişme yavaşlar. Tarihte atılımlar en rahat bölgelerden değil, en uygun baskıya sahip bölgelerden gelmiştir; seçilimin temposu da bir seçilimin ürünüdür.",
   "summaryEn": "Too strong a selection pressure yields a premature winner, too weak slows progress. In history, breakthroughs came not from the most comfortable regions but from those with optimal pressure; the pace of selection is itself selected.",
   "appearances": [
    {
     "ch": "14",
     "para": 9,
     "paraEn": 9,
     "labelTr": "Seçilim Baskısı ve İlerleme Hızı",
     "labelEn": "Selection Pressure & Tempo of Progress",
     "kind": "concept"
    },
    {
     "ch": "14",
     "para": 10,
     "paraEn": 10,
     "kind": "mention"
    }
   ],
   "chapters": [
    "14"
   ],
   "degree": 3
  },
  {
   "id": "genetic-algorithms",
   "group": "persist",
   "tr": "Genetik Algoritmalar",
   "en": "Genetic Algorithms",
   "summaryTr": "İnsan toplulukları arasındaki acımasız rekabet, çözümleri yineleyerek iyileştiren genetik algoritmalara benzer. Seçilimin kendisinin de daha derin bir meta-seçilimle şekillenip şekillenmediği açıktır.",
   "summaryEn": "Ruthless competition among human groups resembles a genetic algorithm that refines solutions iteratively. Whether selection itself was shaped by a deeper meta-selection is open.",
   "appearances": [
    {
     "ch": "14",
     "para": 10,
     "paraEn": 10,
     "labelTr": "Genetik Algoritmalar",
     "labelEn": "Genetic Algorithms",
     "kind": "concept"
    }
   ],
   "chapters": [
    "14"
   ],
   "degree": 2
  },
  {
   "id": "mathematics-nature",
   "group": "math",
   "tr": "Matematik: Varoluşun Doğası",
   "en": "Mathematics as the Nature of Existence",
   "summaryTr": "Fizik yasaları ve ortaya çıkan davranışlar matematikle ifade edilebilir; matematik mümkün ile imkânsızı ayırır. İlk ortaya çıkış gibi sorularda elimizde başka araç yoktur, bu yüzden matematik varoluşun doğası sayılabilir.",
   "summaryEn": "Physical laws and the behaviours they foster can be written in mathematics, which separates the possible from the impossible. For questions like first emergence we have no other tool, so mathematics may be existence’s very nature.",
   "appearances": [
    {
     "ch": "15",
     "para": 5,
     "paraEn": 5,
     "labelTr": "Matematik: Varoluşun Doğası",
     "labelEn": "Mathematics: The Nature of Existence",
     "kind": "concept"
    }
   ],
   "chapters": [
    "15"
   ],
   "degree": 4
  },
  {
   "id": "observer-reality",
   "group": "mind",
   "tr": "Gözlemci ve Katılımcı Evren",
   "en": "Observers & the Participatory Universe",
   "summaryTr": "Kopenhag yorumunda gerçeklik, gözlemle belirli bir duruma çöker; gözlemciler parçacık sayılarından somut nesneleri var ediyor olabilir. Yapay zekâ sistemleri yeni bir gözlemci türü olabilir.",
   "summaryEn": "On the Copenhagen reading, reality collapses to a definite state through observation, so observers may be bringing concrete objects into being from particle numbers. AI systems may become a new kind of observer.",
   "appearances": [
    {
     "ch": "06",
     "para": 4,
     "paraEn": 4,
     "kind": "mention"
    },
    {
     "ch": "15",
     "para": 7,
     "paraEn": 7,
     "labelTr": "Kopenhag Yorumu ve Katılımcı Evren",
     "labelEn": "Copenhagen Interpretation & Participatory Universe",
     "kind": "concept"
    },
    {
     "ch": "16",
     "para": 7,
     "paraEn": 7,
     "labelTr": "Katılımcı Evren ve Yeni Gözlemciler",
     "labelEn": "Participatory Universe & New Observers",
     "kind": "concept"
    }
   ],
   "chapters": [
    "06",
    "15",
    "16"
   ],
   "degree": 5
  },
  {
   "id": "embodied-cognition",
   "group": "mind",
   "tr": "Bedenlenmiş Biliş",
   "en": "Embodied Cognition",
   "summaryTr": "Zihin, beden ve çevre ile kurulan geri besleme döngüsünde oluşur: katılığı direnç olarak, üç boyutluluğu hareket ederken değişen ışık ve gölgeden anlarız. Motor torkunu ölçüp 3B model kuran robot için masa da ‘somut’ hale gelir.",
   "summaryEn": "Mind arises in a feedback loop with body and environment: we know solidity as resistance and three-dimensionality from shifting light and shadow as we move. A robot that measures motor torque and builds a 3D model makes a table ‘concrete’ for itself.",
   "appearances": [
    {
     "ch": "16",
     "para": 2,
     "paraEn": 2,
     "labelTr": "Bedenlenmiş Biliş",
     "labelEn": "Embodied Cognition",
     "kind": "concept"
    }
   ],
   "chapters": [
    "16"
   ],
   "degree": 4
  },
  {
   "id": "interface-theory",
   "group": "mind",
   "tr": "Algının Arayüz Kuramı",
   "en": "Interface Theory of Perception",
   "summaryTr": "Hoffman’ın Arayüz Kuramı: algı gerçekliğin kopyası değil, türe özgü bir kullanıcı arayüzüdür. Kızılötesi, gama ya da manyetik alan sensörlü bir yapay zekâ, taşlar ve masalar yerine alanlardan oluşan bir dünyayı somutlaştırabilir.",
   "summaryEn": "Hoffman’s Interface Theory: perception is a species-specific user interface, not a copy of reality. An AI with infrared, gamma or magnetic sensors could reify a world of fields rather than rocks and tables.",
   "appearances": [
    {
     "ch": "16",
     "para": 5,
     "paraEn": 5,
     "labelTr": "Algının Arayüz Teorisi",
     "labelEn": "Interface Theory of Perception",
     "kind": "concept"
    }
   ],
   "chapters": [
    "16"
   ],
   "degree": 3
  },
  {
   "id": "prime-numbers",
   "group": "math",
   "tr": "Asal Sayılar",
   "en": "Prime Numbers",
   "summaryTr": "Bileşik olmayan sayılar basit bir kuraldan doğan ama rastgele görünen bir dizi oluşturur. Aynı asallar Riemann hipotezinde, Euler çarpımında, çarpanlara ayırmaya dayanan şifrelemede ve P-NP probleminde karşımıza çıkar.",
   "summaryEn": "The non-composite numbers form a sequence that follows a simple rule yet looks random. The same primes appear in the Riemann hypothesis, the Euler product, factoring-based encryption and P vs NP.",
   "appearances": [
    {
     "ch": "03",
     "para": 0,
     "paraEn": 0,
     "kind": "mention"
    },
    {
     "ch": "07",
     "para": 5,
     "paraEn": 5,
     "kind": "mention"
    },
    {
     "ch": "09",
     "para": 3,
     "paraEn": 3,
     "kind": "mention"
    }
   ],
   "chapters": [
    "03",
    "07",
    "09"
   ],
   "degree": 6
  },
  {
   "id": "global-system",
   "group": "system",
   "tr": "Küresel Sistem",
   "en": "The Global System",
   "summaryTr": "Yaşam, atmosfer ve internet gibi insan yapıları tek bir küresel sistem olarak ele alınabilir; bitki-hayvan döngüsü gibi pozitif geri beslemeler ve homeostatik mekanizmalar içerir. Karıncalar gibi, onun işlevlerinin farkında olmayabiliriz.",
   "summaryEn": "Life, the atmosphere and human constructs like the internet can be treated as one global system, with positive feedbacks (plants and animals) and homeostatic mechanisms. Like ants, we may be unaware of its functions.",
   "appearances": [
    {
     "ch": "04",
     "para": 8,
     "paraEn": 8,
     "kind": "mention"
    },
    {
     "ch": "04",
     "para": 9,
     "paraEn": 9,
     "kind": "mention"
    },
    {
     "ch": "04",
     "para": 11,
     "paraEn": 11,
     "kind": "mention"
    }
   ],
   "chapters": [
    "04"
   ],
   "degree": 4
  },
  {
   "id": "why-something",
   "group": "persist",
   "tr": "Neden Hiçlik Değil de Varlık?",
   "en": "Why Something Rather Than Nothing",
   "summaryTr": "‘Neden hiçlik değil de bir şey var?’ sorusu, henüz hiçbir şey yokken bile işleyen bir kararlılık/varlık seçilimiyle açıklanabilir mi diye sorulur. Böylece ayakta kalma mantığı en derin felsefi soruya bağlanır.",
   "summaryEn": "Could ‘Why is there something rather than nothing?’ be explained by a stability or existence selection that operated even before anything existed? Survival logic is tied to the deepest philosophical question.",
   "appearances": [
    {
     "ch": "02",
     "para": 11,
     "paraEn": 11,
     "kind": "mention"
    }
   ],
   "chapters": [
    "02"
   ],
   "degree": 2
  }
 ],
 "edges": [
  {
   "id": "e001",
   "source": "passive-durability",
   "target": "entropy-persistence",
   "type": "example-of",
   "origin": "inferred",
   "whyTr": "Taş gibi cansız yapılar, kalıcı bağlarla entropiye karşı ayakta kalır.",
   "whyEn": "Inanimate structures like stone persist against entropy through durable bonds."
  },
  {
   "id": "e002",
   "source": "life-active-strategy",
   "target": "entropy-persistence",
   "type": "example-of",
   "origin": "text",
   "whyTr": "Canlılar enerji alıp entropiyi dışarı vererek düzenini korur.",
   "whyEn": "Life keeps its order by importing energy and exporting entropy."
  },
  {
   "id": "e003",
   "source": "life-active-strategy",
   "target": "passive-durability",
   "type": "contrast",
   "origin": "text",
   "whyTr": "İki strateji: çoğalıp uyum sağlamak ile dayanıklı olmak.",
   "whyEn": "Two strategies: replicate and adapt versus simply endure."
  },
  {
   "id": "e004",
   "source": "life-active-strategy",
   "target": "self-replication",
   "type": "builds-on",
   "origin": "text",
   "whyTr": "Strateji, kendini kopyalayarak çok sayıda var olmaya dayanır.",
   "whyEn": "The strategy rests on replicating to exist in large numbers."
  },
  {
   "id": "e005",
   "source": "life-active-strategy",
   "target": "energy-requirement",
   "type": "builds-on",
   "origin": "text",
   "whyTr": "Aktif stratejinin bedeli sürekli enerji gereksinimidir.",
   "whyEn": "The price of the active strategy is a continual energy need."
  },
  {
   "id": "e006",
   "source": "energy-requirement",
   "target": "entropy-persistence",
   "type": "builds-on",
   "origin": "text",
   "whyTr": "Entropi karşısında düzeni korumak dışarıdan enerji almayı gerektirir.",
   "whyEn": "Keeping order against entropy requires importing energy."
  },
  {
   "id": "e007",
   "source": "energy-requirement",
   "target": "system-definition",
   "type": "analogy",
   "origin": "text",
   "whyTr": "Sistemler de enerji harcayarak varlığını sürdürür.",
   "whyEn": "Systems too sustain themselves by spending energy."
  },
  {
   "id": "e008",
   "source": "variation-diversity",
   "target": "self-replication",
   "type": "builds-on",
   "origin": "text",
   "whyTr": "Mutasyonlar kopyalama hatalarından doğar.",
   "whyEn": "Mutations arise from copying errors during replication."
  },
  {
   "id": "e009",
   "source": "variation-diversity",
   "target": "randomness",
   "type": "builds-on",
   "origin": "crossref",
   "whyTr": "Çeşitliliği üreten motor rastgelelikle özdeşleştirilir (rastgelelik bölümüne atıf).",
   "whyEn": "Randomness is named the engine that generates diversity (cites the randomness chapter)."
  },
  {
   "id": "e010",
   "source": "variation-diversity",
   "target": "selection-pressure",
   "type": "contrast",
   "origin": "text",
   "whyTr": "Seçilim çeşitliliği daraltır; çeşitlilik sürekli yenilenmelidir.",
   "whyEn": "Selection narrows diversity, so variety must be constantly renewed."
  },
  {
   "id": "e011",
   "source": "energy-efficiency",
   "target": "energy-requirement",
   "type": "builds-on",
   "origin": "text",
   "whyTr": "Enerji kısıtı, verimliliği rekabette belirleyici kılar.",
   "whyEn": "The energy constraint makes efficiency decisive in competition."
  },
  {
   "id": "e012",
   "source": "energy-efficiency",
   "target": "variation-diversity",
   "type": "builds-on",
   "origin": "text",
   "whyTr": "Çeşitler birbiriyle yarışınca verimlilik avantaj sağlar.",
   "whyEn": "Efficiency pays off once variants begin to compete."
  },
  {
   "id": "e013",
   "source": "energy-efficiency",
   "target": "planetary-mind",
   "type": "analogy",
   "origin": "inferred",
   "whyTr": "Verimlilik baskısı gezegeni dev bir hesaplama ağına dönüştürebilir.",
   "whyEn": "Efficiency pressure could turn the planet into a giant computing network."
  },
  {
   "id": "e014",
   "source": "cooperation",
   "target": "energy-efficiency",
   "type": "builds-on",
   "origin": "text",
   "whyTr": "Sosyal yaşam bireyin enerji maliyetini düşürür.",
   "whyEn": "Social living lowers each individual’s energy cost."
  },
  {
   "id": "e015",
   "source": "cooperation",
   "target": "universal-darwinism",
   "type": "example-of",
   "origin": "text",
   "whyTr": "İttifaklar hayatta kalma avantajı sağladığı için seçilir.",
   "whyEn": "Alliances are selected because they improve survival."
  },
  {
   "id": "e016",
   "source": "cooperation",
   "target": "fractal-systems",
   "type": "analogy",
   "origin": "inferred",
   "whyTr": "Parça–bütün karşılıklı yararı hem ittifaklarda hem sistem katmanlarında görülür.",
   "whyEn": "Mutual benefit between part and whole shows in both coalitions and system layers."
  },
  {
   "id": "e017",
   "source": "stability-filter",
   "target": "passive-durability",
   "type": "builds-on",
   "origin": "inferred",
   "whyTr": "Kararlı yapıların kalması, pasif sağlamlık mantığının parçacık ölçeğine taşınmasıdır.",
   "whyEn": "Stable structures lasting is the durability logic carried down to particles."
  },
  {
   "id": "e018",
   "source": "why-something",
   "target": "stability-filter",
   "type": "builds-on",
   "origin": "text",
   "whyTr": "‘Neden bir şey var?’ sorusu kararlılık/varlık seçilimi mantığıyla denenir.",
   "whyEn": "The ‘why something?’ question is tested with stability-selection logic."
  },
  {
   "id": "e019",
   "source": "why-something",
   "target": "first-emergence",
   "type": "analogy",
   "origin": "inferred",
   "whyTr": "İkisi de hiçlikten varlığa geçişin açıklanmasını sorar.",
   "whyEn": "Both ask how something comes out of nothing."
  },
  {
   "id": "e020",
   "source": "universal-darwinism",
   "target": "stability-filter",
   "type": "builds-on",
   "origin": "crossref",
   "whyTr": "Cansız yapıları da kapsayan varoluş mücadelesi ‘Var Olma Stratejileri’ne dayanır.",
   "whyEn": "The struggle for existence among inanimate things builds on the strategies chapter."
  },
  {
   "id": "e021",
   "source": "universal-darwinism",
   "target": "variation-diversity",
   "type": "builds-on",
   "origin": "crossref",
   "whyTr": "Seçilim, yaşamın ardından mutasyonla ortaya çıkan çeşitliliğe dayanır.",
   "whyEn": "Selection rests on the variation that mutation produced."
  },
  {
   "id": "e022",
   "source": "universal-darwinism",
   "target": "binding-dissociation",
   "type": "builds-on",
   "origin": "text",
   "whyTr": "Seçilim için yapıların hem kurulabilmesi hem bozulabilmesi gerekir.",
   "whyEn": "Selection needs structures that can both form and break apart."
  },
  {
   "id": "e023",
   "source": "universal-darwinism",
   "target": "emergence",
   "type": "example-of",
   "origin": "crossref",
   "whyTr": "Seçilim, fizik yasalarından ortaya çıkan bir davranıştır (Ortaya Çıkış bölümü).",
   "whyEn": "Selection is an emergent behaviour of physical laws (cites the emergence chapter)."
  },
  {
   "id": "e024",
   "source": "universal-darwinism",
   "target": "anthropic-principle",
   "type": "builds-on",
   "origin": "crossref",
   "whyTr": "Seçilimin var oluşu antropik ilkeyle açıklanır (3 Boyut bölümü).",
   "whyEn": "The existence of selection itself is explained through the anthropic principle."
  },
  {
   "id": "e025",
   "source": "universal-darwinism",
   "target": "existence-and-science",
   "type": "builds-on",
   "origin": "text",
   "whyTr": "Önsöz doğal seçilimi varoluşu anlamak için temel sayar.",
   "whyEn": "The Preface flags natural selection as paramount for understanding existence."
  },
  {
   "id": "e026",
   "source": "selection-pressure",
   "target": "universal-darwinism",
   "type": "builds-on",
   "origin": "text",
   "whyTr": "Seçilimin temposu da seçilimin bir ürünüdür.",
   "whyEn": "The pace of selection is itself a product of selection."
  },
  {
   "id": "e027",
   "source": "genetic-algorithms",
   "target": "universal-darwinism",
   "type": "example-of",
   "origin": "text",
   "whyTr": "İnsan topluluklarındaki rekabet, seçilimin algoritmik biçimi gibi işler.",
   "whyEn": "Competition among human groups works like selection run as an algorithm."
  },
  {
   "id": "e028",
   "source": "genetic-algorithms",
   "target": "selection-pressure",
   "type": "builds-on",
   "origin": "text",
   "whyTr": "Yineleyerek iyileştirmenin hızı seçilim baskısına bağlıdır.",
   "whyEn": "The speed of iterative refinement depends on selection pressure."
  },
  {
   "id": "e029",
   "source": "survivorship-bias",
   "target": "beauty-strategy",
   "type": "contrast",
   "origin": "text",
   "whyTr": "Eserlerin kalıcılığını yalnızca güzelliğe bağlamak yanılgı olabilir.",
   "whyEn": "Crediting lasting works to beauty alone may be survivorship bias."
  },
  {
   "id": "e030",
   "source": "beauty-strategy",
   "target": "entropy-persistence",
   "type": "builds-on",
   "origin": "inferred",
   "whyTr": "Güzellik, ‘ayakta kalma’ mantığının sanata ve zihne uzantısıdır.",
   "whyEn": "Beauty extends the persistence logic to art and memory."
  },
  {
   "id": "e031",
   "source": "riemann-hypothesis",
   "target": "beauty-strategy",
   "type": "example-of",
   "origin": "text",
   "whyTr": "‘O kadar güzel ki doğru olmalı’ tutumu güzellik ile mantıksal kararlılık bağını gösterir.",
   "whyEn": "The ‘too beautiful not to be true’ attitude shows the link between beauty and logical stability."
  },
  {
   "id": "e032",
   "source": "entropy-persistence",
   "target": "arrow-of-time",
   "type": "analogy",
   "origin": "inferred",
   "whyTr": "Aynı ikinci yasa, hem kalıcılık süzgeci hem zamanın yönü olarak görünür.",
   "whyEn": "The same second law shows up as a persistence filter and as time’s direction."
  },
  {
   "id": "e033",
   "source": "entropy-persistence",
   "target": "low-entropy-start",
   "type": "builds-on",
   "origin": "inferred",
   "whyTr": "Entropiye karşı ayakta kalmak, evrenin düzenli başlangıcı sayesinde mümkündür.",
   "whyEn": "Persisting against entropy is possible thanks to the universe’s ordered start."
  },
  {
   "id": "e034",
   "source": "prime-numbers",
   "target": "number-universe",
   "type": "builds-on",
   "origin": "text",
   "whyTr": "Asallar, 1’den kurulan evrende çarpma ile tanımlanır.",
   "whyEn": "Primes are defined inside the universe built from 1 through multiplication."
  },
  {
   "id": "e035",
   "source": "prime-numbers",
   "target": "randomness",
   "type": "example-of",
   "origin": "text",
   "whyTr": "Basit kuraldan çıkan ama rastgele görünen dizi.",
   "whyEn": "A simple rule yields a sequence that looks random."
  },
  {
   "id": "e036",
   "source": "randomness",
   "target": "number-universe",
   "type": "builds-on",
   "origin": "text",
   "whyTr": "Rastgelelik bu minimal evrende asal dizisi olarak aranır.",
   "whyEn": "Randomness is sought in this minimal universe as the prime sequence."
  },
  {
   "id": "e037",
   "source": "riemann-hypothesis",
   "target": "prime-numbers",
   "type": "builds-on",
   "origin": "text",
   "whyTr": "Hipotez asalların dağılımı hakkındadır.",
   "whyEn": "The hypothesis concerns the distribution of primes."
  },
  {
   "id": "e038",
   "source": "riemann-hypothesis",
   "target": "randomness",
   "type": "builds-on",
   "origin": "crossref",
   "whyTr": "Asalların istatistiksel dağılımı olarak yeniden ifade edilir (rastgelelik bölümü).",
   "whyEn": "Restated as a claim about the statistical distribution of primes."
  },
  {
   "id": "e039",
   "source": "riemann-hypothesis",
   "target": "number-universe",
   "type": "builds-on",
   "origin": "crossref",
   "whyTr": "Rastgelelik bölümü, hipotezi yalnızca tam sayılarla tanımlanan basit bir problem olarak kurar.",
   "whyEn": "The randomness chapter builds the hypothesis from integers alone."
  },
  {
   "id": "e040",
   "source": "riemann-hypothesis",
   "target": "euler-zeta",
   "type": "builds-on",
   "origin": "text",
   "whyTr": "Zeta fonksiyonunun sıfırları üzerine kurulu bir iddiadır.",
   "whyEn": "It is a claim about the zeros of the zeta function."
  },
  {
   "id": "e041",
   "source": "euler-zeta",
   "target": "prime-numbers",
   "type": "builds-on",
   "origin": "text",
   "whyTr": "Sayma sayıları üzerindeki toplam, asallar üzerindeki çarpıma eşittir.",
   "whyEn": "The sum over counting numbers equals a product over primes."
  },
  {
   "id": "e042",
   "source": "euler-zeta",
   "target": "infinity",
   "type": "example-of",
   "origin": "text",
   "whyTr": "Basel toplamı, sonsuz bir seriden sonlu bir sayı çıkarır.",
   "whyEn": "The Basel sum gets a finite number out of an infinite series."
  },
  {
   "id": "e043",
   "source": "infinity",
   "target": "self-reference",
   "type": "builds-on",
   "origin": "crossref",
   "whyTr": "Öz-gönderimli kamera görüntüsü sonsuza uzanır (Mümkün Olanlar bölümü).",
   "whyEn": "The self-referential camera image runs to infinity (cites the possibility chapter)."
  },
  {
   "id": "e044",
   "source": "platonic-solids",
   "target": "infinity",
   "type": "contrast",
   "origin": "text",
   "whyTr": "Sonlu bir dizi, sonsuzluğun karşıtı olarak sunulur.",
   "whyEn": "A finite sequence is presented as the opposite of infinity."
  },
  {
   "id": "e045",
   "source": "regular-polytopes",
   "target": "platonic-solids",
   "type": "builds-on",
   "origin": "crossref",
   "whyTr": "Platonik katılar dizisi yüksek boyutlara uzatılır (Sonsuzluk bölümü).",
   "whyEn": "The Platonic solid sequence is extended to higher dimensions."
  },
  {
   "id": "e046",
   "source": "regular-polytopes",
   "target": "dimensions-3d",
   "type": "example-of",
   "origin": "text",
   "whyTr": "Yalnızca 3. ve 4. boyutun zengin olması 3’ü özel kılar.",
   "whyEn": "Only dimensions 3 and 4 being rich makes 3 special."
  },
  {
   "id": "e047",
   "source": "p-vs-np",
   "target": "prime-numbers",
   "type": "builds-on",
   "origin": "crossref",
   "whyTr": "Asal çarpanlara ayırma, çözümü zor ama doğrulaması kolay problemdir.",
   "whyEn": "Prime factorization is the example of hard to solve, easy to verify."
  },
  {
   "id": "e048",
   "source": "p-vs-np",
   "target": "riemann-hypothesis",
   "type": "analogy",
   "origin": "text",
   "whyTr": "İkisi de Hilbert ve Milenyum listelerinde yer alan çözülmemiş problemlerdir.",
   "whyEn": "Both are famous unsolved problems on the Hilbert and Millennium lists."
  },
  {
   "id": "e049",
   "source": "quantum-algorithms",
   "target": "p-vs-np",
   "type": "builds-on",
   "origin": "text",
   "whyTr": "Kuantum bilgisayarlar çarpanlara ayırmayı hızlandırıp şifrelemeyi tehdit eder.",
   "whyEn": "Quantum computers speed up factoring and threaten the encryption it underpins."
  },
  {
   "id": "e050",
   "source": "speed-of-light",
   "target": "self-reference",
   "type": "builds-on",
   "origin": "inferred",
   "whyTr": "Zaman yolculuğu paradoksları, neden-sonuç tutarlılığı ihtiyacını doğurur.",
   "whyEn": "Time-travel paradoxes motivate the need for consistent cause and effect."
  },
  {
   "id": "e051",
   "source": "mathematics-nature",
   "target": "number-universe",
   "type": "builds-on",
   "origin": "inferred",
   "whyTr": "Sayılardan kurulan evren, matematiğin varoluşun inşasındaki rolünü gösterir.",
   "whyEn": "The number-built universe illustrates mathematics’ role in constructing existence."
  },
  {
   "id": "e052",
   "source": "mathematics-nature",
   "target": "first-emergence",
   "type": "builds-on",
   "origin": "text",
   "whyTr": "İlk ortaya çıkışı ele almak için matematikten başka aracımız yoktur.",
   "whyEn": "For first emergence we have no tool other than mathematics."
  },
  {
   "id": "e053",
   "source": "mathematics-nature",
   "target": "infinity",
   "type": "builds-on",
   "origin": "text",
   "whyTr": "Sonsuzluk, neden-sonuç zincirinin koptuğu noktayı çözmek için kullanılır.",
   "whyEn": "Infinity is used to handle the point where the cause–effect chain breaks."
  },
  {
   "id": "e054",
   "source": "mathematics-nature",
   "target": "self-reference",
   "type": "builds-on",
   "origin": "inferred",
   "whyTr": "Matematik mümkünü imkânsızdan ayırır; paradokslar bu sınırı çizer.",
   "whyEn": "Mathematics separates possible from impossible; paradoxes mark that boundary."
  },
  {
   "id": "e055",
   "source": "determinism-dilemma",
   "target": "randomness",
   "type": "builds-on",
   "origin": "text",
   "whyTr": "Modern fiziğin içsel rastgeleliği ikilemi çözer gibi görünür.",
   "whyEn": "Modern physics’ intrinsic randomness seems to dissolve the dilemma."
  },
  {
   "id": "e056",
   "source": "falsifiability",
   "target": "determinism-dilemma",
   "type": "builds-on",
   "origin": "text",
   "whyTr": "Geçmişten bağımsız irade savı sınanamadığı için sorgulanır.",
   "whyEn": "The past-independent will claim is questioned because it cannot be tested."
  },
  {
   "id": "e057",
   "source": "compatibilism",
   "target": "falsifiability",
   "type": "builds-on",
   "origin": "text",
   "whyTr": "Sınanabilir bir tanım arayışı uzlaşmacılığa götürür.",
   "whyEn": "The search for a testable definition leads to compatibilism."
  },
  {
   "id": "e058",
   "source": "compatibilism",
   "target": "determinism-dilemma",
   "type": "builds-on",
   "origin": "text",
   "whyTr": "Determinizm ile özgür irade uyuşur; ikilem çözülür.",
   "whyEn": "Determinism and free will coexist, resolving the dilemma."
  },
  {
   "id": "e059",
   "source": "second-order-cybernetics",
   "target": "compatibilism",
   "type": "builds-on",
   "origin": "text",
   "whyTr": "Sistemin kendini incelemesi uzlaşmacı tanımı destekler.",
   "whyEn": "A system inspecting itself supports the compatibilist definition."
  },
  {
   "id": "e060",
   "source": "llm-self-awareness",
   "target": "compatibilism",
   "type": "builds-on",
   "origin": "text",
   "whyTr": "Farklı kodlu robotlar da seçim yapabilir; bilinç sorusu açık kalır.",
   "whyEn": "Robots with different code also choose; the consciousness question stays open."
  },
  {
   "id": "e061",
   "source": "quantum-determinism",
   "target": "randomness",
   "type": "builds-on",
   "origin": "inferred",
   "whyTr": "Kuantum kuramındaki olasılık, doğuştan rastgelelik demektir.",
   "whyEn": "Probability in quantum theory means intrinsic randomness."
  },
  {
   "id": "e062",
   "source": "quantum-determinism",
   "target": "determinism-dilemma",
   "type": "analogy",
   "origin": "inferred",
   "whyTr": "Aynı determinizm tartışması nedensellik düzeyinde yeniden açılır.",
   "whyEn": "The same determinism debate reopens at the level of causation."
  },
  {
   "id": "e063",
   "source": "system-definition",
   "target": "existence-and-science",
   "type": "builds-on",
   "origin": "text",
   "whyTr": "Sistem bilimi, kitabın temel yöntemi olarak öne çıkar.",
   "whyEn": "Systems science is highlighted as the book’s main method."
  },
  {
   "id": "e064",
   "source": "emergence",
   "target": "system-definition",
   "type": "builds-on",
   "origin": "crossref",
   "whyTr": "Ortaya çıkış sistem kavramına yakındır ama aynı değildir (Sistemler bölümü).",
   "whyEn": "Emergence is close to but distinct from the system concept."
  },
  {
   "id": "e065",
   "source": "self-organization",
   "target": "system-definition",
   "type": "builds-on",
   "origin": "text",
   "whyTr": "Sistemlerin kendiliğinden nasıl oluştuğunu açıklar.",
   "whyEn": "Explains how systems form on their own."
  },
  {
   "id": "e066",
   "source": "self-organization",
   "target": "feedback-control",
   "type": "builds-on",
   "origin": "text",
   "whyTr": "Küçük dalgalanmalar pozitif geri beslemeyle büyür.",
   "whyEn": "Small fluctuations grow through positive feedback."
  },
  {
   "id": "e067",
   "source": "fractal-systems",
   "target": "self-organization",
   "type": "builds-on",
   "origin": "text",
   "whyTr": "Her ölçekte aynı kendiliğinden örgütlenme ve geri besleme aranır.",
   "whyEn": "The same self-organization and feedback is sought at every scale."
  },
  {
   "id": "e068",
   "source": "fractal-systems",
   "target": "system-definition",
   "type": "example-of",
   "origin": "text",
   "whyTr": "Sistemler katman katman daha büyük sistemler oluşturur.",
   "whyEn": "Systems assemble layer by layer into larger systems."
  },
  {
   "id": "e069",
   "source": "fractal-systems",
   "target": "collective-intelligence",
   "type": "analogy",
   "origin": "text",
   "whyTr": "Merkezî beyne benzer karar mekanizmaları insan topluluklarında kendini tekrar eder.",
   "whyEn": "Brain-like decision-making repeats self-similarly in human collectives."
  },
  {
   "id": "e070",
   "source": "life-active-strategy",
   "target": "system-definition",
   "type": "example-of",
   "origin": "crossref",
   "whyTr": "Hücre, yaşamın basit bir sistem örneğidir (Var Olma Stratejileri’ne atıf).",
   "whyEn": "A cell is a simple example of a system (cites the strategies chapter)."
  },
  {
   "id": "e071",
   "source": "prime-numbers",
   "target": "system-definition",
   "type": "example-of",
   "origin": "crossref",
   "whyTr": "Sayı dizileri parçalarından farklı özellikler sergiler (rastgelelik bölümüne atıf).",
   "whyEn": "Number sequences show properties their parts lack (cites the randomness chapter)."
  },
  {
   "id": "e072",
   "source": "chaos-lorenz",
   "target": "system-definition",
   "type": "example-of",
   "origin": "text",
   "whyTr": "Atmosfer, kaotik bir sistem örneğidir.",
   "whyEn": "The atmosphere is a chaotic system."
  },
  {
   "id": "e073",
   "source": "chaos-lorenz",
   "target": "dimensions-3d",
   "type": "builds-on",
   "origin": "text",
   "whyTr": "Kaos en az 3 boyutlu faz uzayında mümkündür.",
   "whyEn": "Chaos needs a phase space of at least three dimensions."
  },
  {
   "id": "e074",
   "source": "global-system",
   "target": "fractal-systems",
   "type": "builds-on",
   "origin": "text",
   "whyTr": "Yaşam, atmosfer ve internet daha üst bir sistem oluşturur.",
   "whyEn": "Life, atmosphere and the internet form a still higher system."
  },
  {
   "id": "e075",
   "source": "global-system",
   "target": "feedback-control",
   "type": "builds-on",
   "origin": "text",
   "whyTr": "Bitki–hayvan döngüsü pozitif, iklim dengesi negatif geri besleme örneğidir.",
   "whyEn": "The plant–animal cycle is positive feedback; climate balance is negative feedback."
  },
  {
   "id": "e076",
   "source": "flocking-simulation",
   "target": "emergence",
   "type": "example-of",
   "origin": "text",
   "whyTr": "Lidersiz uyumlu sürü hareketi ortaya çıkan bir davranıştır.",
   "whyEn": "Leaderless, coordinated flocking is emergent behaviour."
  },
  {
   "id": "e077",
   "source": "flocking-simulation",
   "target": "self-organization",
   "type": "analogy",
   "origin": "inferred",
   "whyTr": "Basit yerel kurallardan küresel düzen doğar.",
   "whyEn": "Global order arises from simple local rules."
  },
  {
   "id": "e078",
   "source": "weight-volume",
   "target": "emergence",
   "type": "example-of",
   "origin": "text",
   "whyTr": "Ağırlık ve hacim, temel olmayan ortaya çıkan özelliklerdir.",
   "whyEn": "Weight and volume are non-fundamental, emergent properties."
  },
  {
   "id": "e079",
   "source": "networks-small-world",
   "target": "flocking-simulation",
   "type": "analogy",
   "origin": "text",
   "whyTr": "Aşağıdan yukarıya örgütlenmeler ağ yapıları kurar.",
   "whyEn": "Bottom-up organisations form network structures."
  },
  {
   "id": "e080",
   "source": "networks-small-world",
   "target": "planetary-mind",
   "type": "analogy",
   "origin": "inferred",
   "whyTr": "İnternet ve beyin benzeri ağ yapıları küçük dünya özelliği taşır.",
   "whyEn": "Internet-like and brain-like networks share small-world structure."
  },
  {
   "id": "e081",
   "source": "first-emergence",
   "target": "emergence",
   "type": "builds-on",
   "origin": "text",
   "whyTr": "Ortaya çıkış zincirinin en başındaki, açıklanması en zor adımdır.",
   "whyEn": "The hardest and earliest link in the emergence chain."
  },
  {
   "id": "e082",
   "source": "first-emergence",
   "target": "number-universe",
   "type": "analogy",
   "origin": "crossref",
   "whyTr": "1’den başlayan sayı evreni, 0→1 geçişi için benzetme olur (rastgelelik bölümü).",
   "whyEn": "The universe built from 1 serves as the analogy for the 0→1 step."
  },
  {
   "id": "e083",
   "source": "first-emergence",
   "target": "infinity",
   "type": "builds-on",
   "origin": "text",
   "whyTr": "İlk ortaya çıkış için sonsuz niceliklere başvurulur.",
   "whyEn": "Infinite magnitudes are appealed to for first emergence."
  },
  {
   "id": "e084",
   "source": "first-emergence",
   "target": "causal-direction",
   "type": "contrast",
   "origin": "text",
   "whyTr": "İlk ortaya çıkışta neden-sonuç zincirinin çöktüğü düşünülür.",
   "whyEn": "At first emergence the cause–effect chain is thought to break down."
  },
  {
   "id": "e085",
   "source": "arrow-of-time",
   "target": "emergence",
   "type": "example-of",
   "origin": "crossref",
   "whyTr": "Zamanın yönü, çok sayıda molekülün birlikte davrandığı ölçekte ortaya çıkar (Ortaya Çıkış bölümü).",
   "whyEn": "Time’s direction appears only at scales of huge molecule numbers (cites the emergence chapter)."
  },
  {
   "id": "e086",
   "source": "string-theory",
   "target": "emergence",
   "type": "builds-on",
   "origin": "crossref",
   "whyTr": "Sicim kuramı fizik parametrelerini ortaya çıkan özellik olarak açıklamayı hedefler.",
   "whyEn": "String theory aims to explain physical parameters as emergent properties."
  },
  {
   "id": "e087",
   "source": "downward-causation",
   "target": "emergence",
   "type": "builds-on",
   "origin": "text",
   "whyTr": "Aşağı yönlü nedensellik, yukarı yönlü ortaya çıkışın karşılığıdır.",
   "whyEn": "Downward causation is the counterpart of upward emergence."
  },
  {
   "id": "e088",
   "source": "superminds",
   "target": "governance-forms",
   "type": "builds-on",
   "origin": "text",
   "whyTr": "Kitap dört yönetim biçimini süperzihin olarak karşılaştırır.",
   "whyEn": "The book compares the four governance forms as superminds."
  },
  {
   "id": "e089",
   "source": "superminds",
   "target": "collective-intelligence",
   "type": "builds-on",
   "origin": "text",
   "whyTr": "Süperzihinler, kolektif zekânın gözlendiği topluluklardır.",
   "whyEn": "Superminds are the groups in which collective intelligence appears."
  },
  {
   "id": "e090",
   "source": "superminds",
   "target": "system-definition",
   "type": "builds-on",
   "origin": "crossref",
   "whyTr": "Parça–bütün karşılıklı yararı, Sistemler bölümündeki fikre dayanır.",
   "whyEn": "Part–whole mutual benefit relies on the idea from the systems chapter."
  },
  {
   "id": "e091",
   "source": "superminds",
   "target": "global-system",
   "type": "builds-on",
   "origin": "crossref",
   "whyTr": "Gezegen, süperzihin kavramıyla bir sistem olarak ele alınır (Sistemler bölümü).",
   "whyEn": "The planet is treated as a system around the supermind concept."
  },
  {
   "id": "e092",
   "source": "superminds",
   "target": "universal-darwinism",
   "type": "builds-on",
   "origin": "text",
   "whyTr": "Süperzihinler seçilim baskısıyla biçimlenir.",
   "whyEn": "Superminds are shaped by selection pressure."
  },
  {
   "id": "e093",
   "source": "blockchain-governance",
   "target": "governance-forms",
   "type": "builds-on",
   "origin": "text",
   "whyTr": "Merkezi oy sayımına alternatif bir karar mekanizması önerir.",
   "whyEn": "Offers an alternative to centrally counted decisions."
  },
  {
   "id": "e094",
   "source": "blockchain-governance",
   "target": "networks-small-world",
   "type": "analogy",
   "origin": "inferred",
   "whyTr": "Merkezsiz ağ yapıları bu mekanizmanın temelidir.",
   "whyEn": "Decentralised network structure is its foundation."
  },
  {
   "id": "e095",
   "source": "planetary-mind",
   "target": "superminds",
   "type": "analogy",
   "origin": "text",
   "whyTr": "Önceki bölümdeki ‘Küresel Zihin’ fikri burada gezegensel sinir ağı olarak yeniden çıkar.",
   "whyEn": "The earlier ‘Global Mind’ idea reappears here as a planetary neural network."
  },
  {
   "id": "e096",
   "source": "planetary-mind",
   "target": "global-system",
   "type": "builds-on",
   "origin": "inferred",
   "whyTr": "Gezegensel sinir ağı, küresel sistemin bilişsel yüzüdür.",
   "whyEn": "The planetary neural network is the cognitive face of the global system."
  },
  {
   "id": "e097",
   "source": "planetary-mind",
   "target": "awareness",
   "type": "builds-on",
   "origin": "text",
   "whyTr": "Makro öz-farkındalık sorusu bu ağa uygulanır.",
   "whyEn": "The macro self-awareness question is applied to this network."
  },
  {
   "id": "e098",
   "source": "planetary-mind",
   "target": "downward-causation",
   "type": "builds-on",
   "origin": "text",
   "whyTr": "Ağ insanları ve kurumları yukarıdan düzenler.",
   "whyEn": "The network regulates people and institutions from above."
  },
  {
   "id": "e099",
   "source": "collective-awareness",
   "target": "awareness",
   "type": "builds-on",
   "origin": "text",
   "whyTr": "Toplumun tepkileri farkındalığın ölçüsü sayılır.",
   "whyEn": "A society’s responses are taken as the measure of its awareness."
  },
  {
   "id": "e100",
   "source": "collective-awareness",
   "target": "collective-intelligence",
   "type": "builds-on",
   "origin": "inferred",
   "whyTr": "Toplu karar mekanizmasının farkındalık boyutu.",
   "whyEn": "The awareness dimension of collective decision-making."
  },
  {
   "id": "e101",
   "source": "causal-direction",
   "target": "speed-of-light",
   "type": "builds-on",
   "origin": "crossref",
   "whyTr": "Gözlemci uzlaşması ve yayılma gecikmesi nedenselliği belirler (Mümkün Olanlar bölümü).",
   "whyEn": "Observer agreement and propagation delay fix causation (cites the possibility chapter)."
  },
  {
   "id": "e102",
   "source": "causal-direction",
   "target": "arrow-of-time",
   "type": "builds-on",
   "origin": "crossref",
   "whyTr": "Neden-sonuç yönü zaman akışına dayanır (Zamanın Yönü bölümü).",
   "whyEn": "The direction of cause and effect rests on time’s flow (cites the time chapter)."
  },
  {
   "id": "e103",
   "source": "causal-direction",
   "target": "time-symmetry",
   "type": "contrast",
   "origin": "text",
   "whyTr": "Yasalar zamanda simetrik olduğundan ters yön de olasıdır.",
   "whyEn": "Laws are time-symmetric, so the reverse direction is also possible."
  },
  {
   "id": "e104",
   "source": "correlation-causation",
   "target": "causal-direction",
   "type": "contrast",
   "origin": "text",
   "whyTr": "İstatistik ilişkiyi bulur, yönü söyleyemez.",
   "whyEn": "Statistics finds relations but cannot give direction."
  },
  {
   "id": "e105",
   "source": "quantum-determinism",
   "target": "correlation-causation",
   "type": "builds-on",
   "origin": "text",
   "whyTr": "Kuantumda ilişkiler baskın, nedenler belirsizdir.",
   "whyEn": "In quantum theory correlations dominate and causes are murky."
  },
  {
   "id": "e106",
   "source": "quantum-determinism",
   "target": "entanglement",
   "type": "builds-on",
   "origin": "text",
   "whyTr": "Makro ölçekte gözlenemeyen ilişkiler mikro dünyada ortaya çıkar.",
   "whyEn": "Correlations impossible at macro scale appear in the micro world."
  },
  {
   "id": "e107",
   "source": "entanglement",
   "target": "speed-of-light",
   "type": "builds-on",
   "origin": "text",
   "whyTr": "Dolaşıklık, ışık hızı sınırına kuantumun yanıtıdır.",
   "whyEn": "Entanglement is quantum physics’ answer to the speed limit."
  },
  {
   "id": "e108",
   "source": "speed-of-light",
   "target": "stability-filter",
   "type": "builds-on",
   "origin": "crossref",
   "whyTr": "Daha iyi bir fizik kuramı, daha iyi bir var olma stratejisidir (Var Olma Stratejileri bölümü).",
   "whyEn": "A better physical theory is a better existence strategy (cites the strategies chapter)."
  },
  {
   "id": "e109",
   "source": "quantum-algorithms",
   "target": "stability-filter",
   "type": "builds-on",
   "origin": "crossref",
   "whyTr": "Kuantum, doğanın olanaklarını artıran bir ‘strateji’ olarak sunulur.",
   "whyEn": "Quantum physics is presented as a ‘strategy’ that expands what nature can do."
  },
  {
   "id": "e110",
   "source": "arrow-of-time",
   "target": "time-symmetry",
   "type": "builds-on",
   "origin": "text",
   "whyTr": "Yön, simetrik yasalardan istatistik düzeyinde doğar.",
   "whyEn": "Direction emerges statistically from symmetric laws."
  },
  {
   "id": "e111",
   "source": "low-entropy-start",
   "target": "arrow-of-time",
   "type": "builds-on",
   "origin": "text",
   "whyTr": "Zamanın oku, düşük entropili başlangıç sayesinde sürer.",
   "whyEn": "Time’s arrow persists thanks to the low-entropy start."
  },
  {
   "id": "e112",
   "source": "dimensions-3d",
   "target": "anthropic-principle",
   "type": "builds-on",
   "origin": "text",
   "whyTr": "3 boyutlu uzay, ince ayar sorusu ve antropik ilkeyle açıklanmaya çalışılır.",
   "whyEn": "Three-dimensional space is explained through fine-tuning and the anthropic principle."
  },
  {
   "id": "e113",
   "source": "isomers",
   "target": "dimensions-3d",
   "type": "builds-on",
   "origin": "text",
   "whyTr": "İzomer sayısı 3 boyutta en yüksektir.",
   "whyEn": "Isomer counts peak in three dimensions."
  },
  {
   "id": "e114",
   "source": "bertrand-orbits",
   "target": "dimensions-3d",
   "type": "builds-on",
   "origin": "text",
   "whyTr": "1/r² yasası ancak 3 boyutlu uzayda gelir.",
   "whyEn": "The 1/r² law arises only in 3D space."
  },
  {
   "id": "e115",
   "source": "string-theory",
   "target": "anthropic-principle",
   "type": "builds-on",
   "origin": "text",
   "whyTr": "Sicim kuramı antropik ilkenin ötesinde açıklama arar.",
   "whyEn": "String theory seeks explanations beyond the anthropic principle."
  },
  {
   "id": "e116",
   "source": "string-theory",
   "target": "dimensions-3d",
   "type": "builds-on",
   "origin": "text",
   "whyTr": "Ek uzay boyutları öngörür.",
   "whyEn": "It predicts additional spatial dimensions."
  },
  {
   "id": "e117",
   "source": "isomers",
   "target": "variation-diversity",
   "type": "analogy",
   "origin": "inferred",
   "whyTr": "İzomer çeşitliliği, yaşam için gerekli molekül çeşitliliğini artırır.",
   "whyEn": "Isomer variety increases the molecular diversity life needs."
  },
  {
   "id": "e118",
   "source": "bertrand-orbits",
   "target": "stability-filter",
   "type": "analogy",
   "origin": "inferred",
   "whyTr": "Kararlı yörüngeler, kararlı yapıların kalıcı olması mantığının bir örneğidir.",
   "whyEn": "Stable orbits are another case of stability being what persists."
  },
  {
   "id": "e119",
   "source": "descartes-dualism",
   "target": "information-worldview",
   "type": "builds-on",
   "origin": "text",
   "whyTr": "Descartes’ın düşünce temelli varlığı bilgi işleme modeline benzer.",
   "whyEn": "Descartes’s thought-based existence parallels the information-processing model."
  },
  {
   "id": "e120",
   "source": "vr-perception",
   "target": "information-worldview",
   "type": "builds-on",
   "origin": "text",
   "whyTr": "Başlık, beyne giden sinyallere bir dönüşüm daha ekler.",
   "whyEn": "The headset adds one more transformation to signals bound for the brain."
  },
  {
   "id": "e121",
   "source": "vr-perception",
   "target": "descartes-dualism",
   "type": "analogy",
   "origin": "text",
   "whyTr": "Üstten bakış, ikiciliği makul kılan bir algı modelidir.",
   "whyEn": "The overhead view is a perception model that makes dualism plausible."
  },
  {
   "id": "e122",
   "source": "touch-reality",
   "target": "information-worldview",
   "type": "builds-on",
   "origin": "text",
   "whyTr": "Dokunma, zihnin dünya modelini doğrulayan sinyaldir.",
   "whyEn": "Touch is the signal that validates the mind’s world model."
  },
  {
   "id": "e123",
   "source": "touch-reality",
   "target": "embodied-cognition",
   "type": "analogy",
   "origin": "inferred",
   "whyTr": "Katılığı dirençten anlamak, bedenlenmiş biliş fikrini andırır.",
   "whyEn": "Knowing solidity from resistance echoes embodied cognition."
  },
  {
   "id": "e124",
   "source": "embodied-cognition",
   "target": "information-worldview",
   "type": "builds-on",
   "origin": "crossref",
   "whyTr": "Robotun dünya modeli kurması, bilgi işleme çerçevesine dayanır (Var Olmak bölümü).",
   "whyEn": "A robot’s world-building relies on the information-processing framing (cites the existence chapter)."
  },
  {
   "id": "e125",
   "source": "embodied-cognition",
   "target": "vr-perception",
   "type": "builds-on",
   "origin": "crossref",
   "whyTr": "Başlığın gerçekliği yok etmediği fikri robot algısına da uygulanır.",
   "whyEn": "The point that a headset doesn’t destroy reality carries over to robot perception."
  },
  {
   "id": "e126",
   "source": "embodied-cognition",
   "target": "qualia",
   "type": "contrast",
   "origin": "text",
   "whyTr": "Somutluk ölçülebilir; hissedilip hissedilmediği ise ayrı bir sorudur.",
   "whyEn": "Concreteness can be measured; whether it is felt is a separate question."
  },
  {
   "id": "e127",
   "source": "qualia",
   "target": "awareness",
   "type": "builds-on",
   "origin": "crossref",
   "whyTr": "Qualia, farkındalığın öznel yüzüdür (Farkındalık bölümü).",
   "whyEn": "Qualia are the subjective face of awareness (cites the awareness chapter)."
  },
  {
   "id": "e128",
   "source": "llm-self-awareness",
   "target": "qualia",
   "type": "builds-on",
   "origin": "text",
   "whyTr": "‘Öz-farkındayım’ yazan model öznel deneyime sahip olduğunu kanıtlamaz.",
   "whyEn": "A model writing ‘I am self-aware’ doesn’t prove subjective experience."
  },
  {
   "id": "e129",
   "source": "llm-self-awareness",
   "target": "awareness",
   "type": "builds-on",
   "origin": "text",
   "whyTr": "Öz-farkındalık, farkındalığın kendine yönelmiş hâlidir.",
   "whyEn": "Self-awareness is awareness turned on itself."
  },
  {
   "id": "e130",
   "source": "llm-self-awareness",
   "target": "number-universe",
   "type": "analogy",
   "origin": "crossref",
   "whyTr": "Dil modelleri, 1’den kurulan evren gibi bir sembol evreninde yaşar (rastgelelik bölümüne atıf).",
   "whyEn": "LLMs live in a symbol universe like the integer universe built from 1."
  },
  {
   "id": "e131",
   "source": "behaviorism",
   "target": "qualia",
   "type": "contrast",
   "origin": "text",
   "whyTr": "Davranışçılık kusursuz davranışı yeterli sayar; qualia bunu yetersiz bulur.",
   "whyEn": "Behaviorism counts perfect behaviour as enough; qualia say it is not."
  },
  {
   "id": "e132",
   "source": "behaviorism",
   "target": "llm-self-awareness",
   "type": "builds-on",
   "origin": "text",
   "whyTr": "Dil modelleri davranışsal sınamaların güvenilirliğini zayıflatır.",
   "whyEn": "LLMs weaken the reliability of behavioural tests."
  },
  {
   "id": "e133",
   "source": "intelligence-vs-awareness",
   "target": "llm-self-awareness",
   "type": "builds-on",
   "origin": "text",
   "whyTr": "Yapay zekâ, zekânın öz-farkındalık olmadan mümkün olduğunu gösterir.",
   "whyEn": "AI shows intelligence is possible without self-awareness."
  },
  {
   "id": "e134",
   "source": "awareness",
   "target": "feedback-control",
   "type": "builds-on",
   "origin": "text",
   "whyTr": "Farkındalık, geri besleme denetimiyle salt ‘bilmek’ten ayrılır.",
   "whyEn": "Feedback control is what separates awareness from mere knowing."
  },
  {
   "id": "e135",
   "source": "awareness",
   "target": "second-order-cybernetics",
   "type": "analogy",
   "origin": "inferred",
   "whyTr": "Öz-farkındalık, sistemin kendi iç süreçlerini ölçmesidir.",
   "whyEn": "Self-awareness is a system measuring its own internal processes."
  },
  {
   "id": "e136",
   "source": "observer-reality",
   "target": "information-worldview",
   "type": "builds-on",
   "origin": "text",
   "whyTr": "Somut nesnelerin algıdan doğması, bilgi temelli evrende savunulabilir.",
   "whyEn": "Objects emerging from perception is tenable in an information-based universe."
  },
  {
   "id": "e137",
   "source": "observer-reality",
   "target": "first-emergence",
   "type": "builds-on",
   "origin": "text",
   "whyTr": "İlk ortaya çıkışa gözlemci merkezli bakış önerilir.",
   "whyEn": "An observer-centric view is proposed for first emergence."
  },
  {
   "id": "e138",
   "source": "observer-reality",
   "target": "weight-volume",
   "type": "builds-on",
   "origin": "crossref",
   "whyTr": "Parçacıkların sayı kümesi oluşu, somutluğun gözlemciyle ilişkisini doğurur (Ortaya Çıkış bölümü).",
   "whyEn": "Particles being number sets raises how concreteness arises through observers (cites the emergence chapter)."
  },
  {
   "id": "e139",
   "source": "observer-reality",
   "target": "quantum-determinism",
   "type": "builds-on",
   "origin": "inferred",
   "whyTr": "Kopenhag yorumu, dalga fonksiyonu olasılıklarına dayanır.",
   "whyEn": "The Copenhagen reading rests on wave-function probabilities."
  },
  {
   "id": "e140",
   "source": "interface-theory",
   "target": "information-worldview",
   "type": "builds-on",
   "origin": "inferred",
   "whyTr": "Algı, bilgi işleyen zihnin evrimsel olarak şekillenen arayüzüdür.",
   "whyEn": "Perception is the evolved interface of an information-processing mind."
  },
  {
   "id": "e141",
   "source": "interface-theory",
   "target": "chaos-lorenz",
   "type": "analogy",
   "origin": "crossref",
   "whyTr": "Yapay zekâ, faz uzayları gibi çok boyutlu ilişkileri ‘somut’ yaşayabilir (3 Boyut bölümü).",
   "whyEn": "An AI could live multidimensional relations like phase spaces as ‘concrete’ (cites the 3D chapter)."
  },
  {
   "id": "e142",
   "source": "interface-theory",
   "target": "observer-reality",
   "type": "analogy",
   "origin": "inferred",
   "whyTr": "İkisi de algının nesneleri var ettiğini savunur.",
   "whyEn": "Both hold that perception brings objects into being."
  }
 ]
};
