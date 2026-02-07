import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  pl: {
    translation: {
      "seo_title": "Przeprowadzki Międzynarodowe: Japonia, Korea, USA | Universal Express",
      "seo_description": "Specjalistyczne przeprowadzki do Japonii, USA i Europy. Obsługa konsulatów i relokacje biur od 1990 roku. Sprawdź naszą ofertę!",
      "nav_who": "Kim jesteśmy",
      "nav_procedures": "Procedury",
      "nav_gallery": "Galeria",
      "nav_contact-form": "Zapytanie",
      "nav_contact": "Kontakt",
      "about_text": "UNIVERSAL EXPRESS to największy, szerokozakresowy, niezależny polski dostawca międzynarodowych rozwiązań logistycznych i usług relokacyjnych. Universal Express jest prawdziwą alternatywą dla olbrzymich organizacji nazywanych globalnymi markami. Universal Express powstał w 1990 roku jako rozwiązanie logistyczne dla największych zagranicznych inwestorów w Polsce. Obecnie Grupa Universal Express liczy 8 firm i 9 wyspecjalizowanych oddziałów wspólnie i niezmiennie dążących do naszego głównego celu: znalezienia najlepszych rozwiązań logistycznych i relokacyjnych dla specyficznych potrzeb naszych klientów w Polsce. PRZEPROWADZKA - brzmi przerażająco? Nie martw się. Nieważne czy przenosisz się tylko ulicę dalej czy na drugą półkulę - my zorganizujemy tę przeprowadzkę dla Ciebie. Każdą przesyłkę planujemy indywidualnie z Klientem, dostosowując się do jego potrzeb i życzeń. Umów się z nami na bezpłatną wizytę w Twoim domu lub biurze a będziemy w stanie przedstawić Ci kompleksową ofertę na Twoja przeprowadzkę.",
      "main_quote": "'Jakość to nie akt, to nawyk.' - Arystoteles.",
      "contact_button": "SKONTAKTUJ SIĘ Z NAMI",
      services: {
        international: "Przeprowadzki Międzynarodowe",
        domestic: "Przeprowadzki Krajowe",
        storage: "Składowanie / Magazyn",
        office: "Relokacja Biur",
        commercial: "Usługi Komercyjne",
        // Opisy
        desc_international: "Profesjonalne przeprowadzki do dowolnego kraju na świecie z pełnym wsparciem logistycznym.",
        desc_domestic: "Szybkie i bezpieczne transporty na terenie całej Polski.",
        desc_storage: "Bezpieczne magazyny o wysokim standardzie dla Twojego mienia.",
        desc_office: "Planowanie i realizacja przeprowadzek biurowych bez przestojów w pracy.",
        desc_commercial: "Wsparcie logistyczne dla biznesu i nietypowe zlecenia transportowe.",
        click_to_close: "(Kliknij tekst, aby zamknąć)"
      },
      //sectionWrap 
      sections: {
        safety_title: "BEZPIECZEŃSTWO",
        safety_desc: "UNIVERSAL EXPRESS ZABIERZE TWÓJ TRUD I UCZYNI TWOJĄ PRZEPROWADZKĘ BEZSTRESOWĄ",
        comm_title: "KOMUNIKACJA",
        comm_desc: "UNIVERSAL EXPRESS zobowiązuje się aby informować Cię na każdym kroku dotyczącym Twojej wysyłki od początku do zakończenia usługi",
        price_title: "Konkurencyjne ceny oraz atrakcyjny czas realizacji",
        price_desc: "Oferujemy Państwu rozsądne ceny w oparciu o jakość usług aby sprostać Twoim potrzebom i oczekiwaniom dotyczącym usługi dostawy"
      },
      //widgetWrap
      widget: {
        title: "Jakość & Akredytacje",
        description: "Dysponując globalną siecią i szeroką bazą pracowników, wywiązujemy się ze swoich zobowiązań wobec klientów i pracowników, oferując wysokiej jakości programy opracowane w oparciu o najlepsze praktyki wiodących stowarzyszeń branżowych."
      },
      //location
      location: {
        office: "Biuro",
        warehouse: "Magazyn",
        cracow: "Kraków",
        warsaw: "Warszawa"
      },
      //procedures
      procedures: {
        main_title: "Procedury",
        step1_title: "Analiza\ndomu/biura",
        step1_desc: "Twój konsultant dokona inspekcji Twoich towarów, wyjaśni jak je przygotować i omówi kwestie związane z wysyłką.",
        step2_title: "Pakowanie\ndomu/biura",
        step2_desc: "Profesjonalny zespół pakujący zadba o Twoje wartościowe przedmioty w sposób bezpieczny.",
        step3_title: "Wysyłka/relokacja\nmienia",
        step3_desc: "Zapewniamy optymalne usługi transportu morskiego, lotniczego i lądowego w bezpieczny sposób.",
        step4_title: "Dostawa na adres",
        step4_desc: "Po przybyciu przesyłki dokonujemy terminowej odprawy celnej i dostarczamy Twój ładunek na czas."
      },
      //sales form 
      form: {
        contact_us: "SKONTAKTUJ SIĘ Z NAMI",
        sales_inquiry: "ZAPYTANIE OFERTOWE",
        name: "Imię i Nazwisko (Wymagane)",
        company: "Nazwa Firmy",
        phone: "Telefon (Wymagane)",
        email: "Email (Wymagane)",
        shipping_to: "Miejsce docelowe",
        service_question: "Jakiej usługi potrzebujesz?",
        optional: "(Opcjonalnie)",
        submit: "WYŚLIJ",
        weekday: "Dni robocze",
        success: "Formularz wysłany!",
        services: {
          international: "Przeprowadzka międzynarodowa",
          domestic: "Przeprowadzka krajowa",
          vehicle: "Transport pojazdu",
          office: "Relokacja biura"
        },
        error_phone: "Nieprawidłowy format numeru (np. +48 123 456 789)",
        error_required: "To pole jest wymagane",
        message: "Twoja wiadomość",
        message_placeholder: "Napisz nam coś więcej o swojej przeprowadzce...",
      },
      gallery_title: "Nasza Galeria",
      footer: {
        about_title: "O nas",
        about_text: "Jesteśmy ekspertami w międzynarodowych przeprowadzkach i relokacjach biur. Zapewniamy bezpieczeństwo Twojego mienia na każdym etapie podróży.",
        links_title: "Szybkie linki",
        contact_title: "Kontakt",
        rights: "Wszelkie prawa zastrzeżone.",
        home: "Strona główna",
        procedures: "Procedury",
        gallery: "Galeria",
        contact: "Formularz"
      }
    }
  },
  en: {
    translation: {
      "seo_title": "International Removals: Japan, Korea, USA Europe, Asia, America | Universal Express",
      "seo_description": "Specialists in diplomatic and consulate relocations. We serve USA, Europe, and worldwide. Reliable moving solutions since 1990.",
      "nav_who": "About Us",
      "nav_procedures": "Procedures",
      "nav_gallery": "Gallery",
      "nav_contact-form": "Sales Inquiry",
      "nav_contact": "Contact",
      "about_text": "Universal Express. Poland's largest independent provider of worldwide logistics and relocation services. The real alternative to the massive so called Global Brands. Established in 1990 as a one-stop logistics resource for the major foreign investor in Poland, today the group consists of 8 companies and 9 specialist service divisions, focusing on our original mission: To find the best logistics and relocations solutions specific to our customers in Poland. Our best quality check is what our customers say about us, and that's why we measure customer reaction to each and every one of our moves. You're welcome to come and check our results, and see what our customers are saying about us. Just call for a free moving estimate and see why our customers recommend us to their friends. Our service starts with a professional pre-move survey. We come to your home to survey the items to be moved, discuss your needs, and then prepare a customized moving proposal for you.We understand the stress that surrounds a move and that the move is only one part of the relocation. You've got a lot on your mind, so leave the moving to us. It's one less thing to have to worry about.",
      "main_quote": "'Quality is not an act, it's a habit.' - Aristotle.",
      "contact_button": "CONTACT US",
      services: {
        international: "International Moves",
        domestic: "Domestic Moves",
        storage: "Storage / Warehousing",
        office: "Office Relocation",
        commercial: "Commercial Services",
        desc_international: "Professional moves to any country in the world with full logistical support.",
        desc_domestic: "Fast and secure transport across the entire country.",
        desc_storage: "High-standard secure warehouses for your belongings.",
        desc_office: "Planning and execution of office moves without work downtime.",
        desc_commercial: "Logistics support for business and non-standard transport orders.",
        click_to_close: "(Click text to close)"
      },
      //sectionWrap 
      sections: {
        safety_title: "SAFETY",
        safety_desc: "UNIVERSAL EXPRESS WILL TAKE THE BURDEN OFF YOUR SHOULDERS AND MAKE YOUR MOVE STRESS-FREE",
        comm_title: "COMMUNICATION",
        comm_desc: "UNIVERSAL EXPRESS is committed to keeping you informed at every step of your shipment from start to finish",
        price_title: "Competitive prices and attractive delivery times",
        price_desc: "We offer reasonable prices based on quality service to meet your needs and expectations regarding delivery"
      },
      //widgetWrap
      widget: {
        title: "Quality & Accreditations",
        description: "With a global network and a broad employee base, we fulfill our commitments to customers and employees by offering high-quality programs developed based on the best practices of leading industry associations."
      },
      //location
      location: {
        office: "Office",
        warehouse: "Warehouse",
        cracow: "Cracow",
        warsaw: "Warsaw"
      },
      //procedures
      procedures: {
        main_title: "Procedures",
        step1_title: "Home/Office\nSurvey",
        step1_desc: "Your consultant will inspect your goods, explain how to prepare them, and discuss shipping matters.",
        step2_title: "Home/Office\nPacking",
        step2_desc: "A professional packing team will take care of your valuables in a secure manner.",
        step3_title: "Shipping/Relocation\nof Goods",
        step3_desc: "We provide optimal sea, air, and land transport services in a safe way.",
        step4_title: "Delivery to Address",
        step4_desc: "Upon arrival of the shipment, we perform timely customs clearance and deliver your cargo on time."
      },
      //sales form
      form: {
        contact_us: "CONTACT US",
        sales_inquiry: "SALES INQUIRY",
        name: "Name (Required)",
        company: "Company Name",
        phone: "Phone (Required)",
        email: "Email (Required)",
        shipping_to: "Shipping To",
        service_question: "What service do you want?",
        optional: "(Optional)",
        submit: "SUBMIT",
        weekday: "Weekday",
        success: "Form submitted!",
        services: {
          international: "International move",
          domestic: "Domestic move",
          vehicle: "Vehicle shipping",
          office: "Office relocation"
        },
        error_phone: "Invalid phone format (e.g., +48 123 456 789)",
        error_required: "This field is required",
        message: "Your message",
        message_placeholder: "Tell us more about your move...",
        gallery_title: "Our Gallery",
    },
        gallery_title: "Our Gallery",
      footer: {
        about_title: "About Us",
        about_text: "We are experts in international moves and office relocations. We ensure the safety of your property at every stage of the journey.",
        links_title: "Quick Links",
        contact_title: "Contact",
        rights: "All rights reserved.",
        home: "Home",
        procedures: "Procedures",
        gallery: "Gallery",
        contact: "Contact Form"
      }}
  },
  ko: { // Koreański
    translation: {
      "seo_title": "Universal Express | 폴란드발 한국·일본 해외이사 전문",
      "seo_description": "폴란드 최대의 해외이사 및 리로케이션 전문 기업. 한국, 일본 및 전 세계 어디로든 안전한 운송 서비스를 제공합니다. 1990년 설립.",
      "nav_who": "회사 소개",
      "nav_procedures": "진행 절차",
      "nav_gallery": "갤러리",
      "nav_contact-form": "견적 문의",
      "nav_contact": "연락처",
      "about_text": "UNIVERSAL EXPRESS는 폴란드 최대의 독립적인 글로벌 물류 및 리로케이션 서비스 제공업체입니다. 1990년에 설립된 당사는 고객의 요구에 부응하는 최적의 물류 솔루션을 제공합니다. 전 세계 어디로든 안전하고 신뢰할 수 있는 이사 서비스를 약속드립니다. 전문가의 무료 방문 견적을 통해 맞춤형 서비스를 경험해 보세요.",
      "main_quote": "'품질은 행동이 아니라 습관이다.' - 아리스토텔레스",
      "contact_button": "문의하기",
      services: {
        international: "해외 이사",
        domestic: "국내 이사",
        storage: "보관 및 창고",
        office: "사무실 이전",
        commercial: "상업 물류",
        desc_international: "전 세계 모든 국가로의 전문적인 물류 지원 및 해외 이사 서비스.",
        desc_domestic: "폴란드 전역에 걸친 신속하고 안전한 운송 서비스.",
        desc_storage: "귀하의 자산을 위한 안전하고 높은 수준의 보관 시설.",
        desc_office: "업무 공백 없는 체계적인 사무실 이전 계획 및 실행.",
        desc_commercial: "비즈니스를 위한 물류 지원 및 특수 운송 주문 서비스.",
        click_to_close: "(닫으려면 텍스트를 클릭하세요)"
      },
      sections: {
        safety_title: "안전성",
        safety_desc: "UNIVERSAL EXPRESS는 귀하의 짐을 정성껏 운송하여 스트레스 없는 이사를 약속드립니다.",
        comm_title: "커뮤니케이션",
        comm_desc: "UNIVERSAL EXPRESS는 서비스 시작부터 종료까지 모든 진행 과정을 실시간으로 안내해 드립니다.",
        price_title: "경쟁력 있는 가격 및 신속한 서비스",
        price_desc: "품질 중심의 합리적인 가격으로 고객의 요구와 기대에 부응하는 최상의 배송 서비스를 제공합니다."
      },
      widget: {
          title: "품질 및 인증",
          description: "글로벌 네트워크와 폭넓은 인력 기반을 바탕으로, 주요 업계 협회의 모범 사례를 적용한 고품질 프로그램을 제공하며 고객 및 직원과의 약속을 성실히 이행합니다."
        },
      location: {
          office: "사무실",
          warehouse: "창고",
          cracow: "크라쿠프",
          warsaw: "바르샤바"
      },
      procedures: {
        main_title: "진행 절차",
        step1_title: "방문 견적 및 상담",
        step1_desc: "컨설턴트가 물품을 확인하고 포장 및 운송에 관한 모든 사항을 안내해 드립니다.",
        step2_title: "전문 포장 서비스",
        step2_desc: "숙련된 팀이 귀하의 귀중품을 안전하게 포장합니다.",
        step3_title: "운송 및 배송",
        step3_desc: "해상, 항공 및 육상 운송을 통해 목적지까지 안전하게 운송합니다.",
        step4_title: "현지 통관 및 배송",
        step4_desc: "신속한 통관 후 지정하신 장소까지 정시에 배송해 드립니다."
      },
      form: {
        contact_us: "문의하기",
        sales_inquiry: "견적 요청",
        name: "성함 (필수)",
        company: "회사명",
        phone: "전화번호 (필수)",
        email: "이메일 (필수)",
        shipping_to: "목적지",
        service_question: "필요하신 서비스는 무엇입니까?",
        optional: "(선택 사항)",
        submit: "제출하기",
        weekday: "평일",
        success: "문의가 성공적으로 접수되었습니다!",
        services: {
          international: "해외 이사",
          domestic: "국내 이사",
          vehicle: "차량 운송",
          office: "사무실 이전"
        },
        error_phone: "올바른 전화번호 형식이 아닙니다 (예: +48 123 456 789)",
        error_required: "이 필드는 필수입니다",
        message: "메시지",
        message_placeholder: "이사 서비스에 대해 더 자세히 알려주세요...",
      },
      gallery_title: "갤러리",
      footer: {
        about_title: "회사 소개",
        about_text: "당사는 해외 이사 및 사무실 이전 전문가 그룹입니다. 운송의 모든 단계에서 귀하의 소중한 자산을 안전하게 보호할 것을 약속드립니다.",
        links_title: "퀵 링크",
        contact_title: "연락처",
        rights: "모든 권리 보유.",
        home: "홈",
        procedures: "진행 절차",
        gallery: "갤러리",
        contact: "문의 양식"
      }
    }
  },
  ja: { // Japoński
    translation: {
      "seo_title": "Universal Express | ポーランドから日本・韓国への海外引越し",
      "seo_description": "ポーランド最大の国際引越し・リロケーション専門企業。日本、韓国、そして世界中へ安全な輸送サービスを提供いたします。1990年創業。",
      "nav_who": "私たちについて",
      "nav_procedures": "引越しの流れ",
      "nav_gallery": "ギャラリー",
      "nav_contact-form": "お見積り依頼",
      "nav_contact": "お問い合わせ",
      "about_text": "UNIVERSAL EXPRESSは、ポーランド最大の独立系国際物流・リロケーションサービスプロバイダーです。1990年の設立以来、大手外資系企業様向けに高品質なサービスを提供してまいりました。世界中どこへでも、お客様のニーズに合わせた安全な引越しをサポートいたします。無料の下見・お見積りからお気軽にご相談ください。",
      "main_quote": "「品質とは行為ではなく、習慣である」 - アリストテレス",
      "contact_button": "お問い合わせ",
      services: {
        international: "海外引越し",
        domestic: "国内引越し",
        storage: "保管・倉庫サービス",
        office: "オフィス移転",
        commercial: "商業物流",
        desc_international: "世界中あらゆる国への専門的な物流サポートと海外引越しサービス。",
        desc_domestic: "ポーランド国内全域における迅速かつ安全な輸送サービス。",
        desc_storage: "お客様の資産を安全に管理する高水準な倉庫施設。",
        desc_office: "業務を止めることなく計画的に実施するオフィス移転。",
        desc_commercial: "ビジネス向けの物流サポートおよび特殊な輸送オーダーの対応。",
        click_to_close: "(閉じるにはテキストをクリックしてください)"
      },
      sections: {
        safety_title: "安全性",
        safety_desc: "UNIVERSAL EXPRESSは、お客様の負担을軽減し、ストレスのない安心な引越しを実現します。",
        comm_title: "コミュニケーション",
        comm_desc: "UNIVERSAL EXPRESSは、作業開始から完了まで、お荷物の状況を随時ご報告することをお約束します。",
        price_title: "競争力のある価格と迅速な対応",
        price_desc: "高品質なサービスに基づいた適正価格で、お客様のご要望に応じた最適な配送ソリューションを提供いたします。"
      },
      widget: {
        title: "品質と認定",
        description: "グローバルなネットワークと幅広い人材基盤を活かし、主要な業界団体のベストプラクティスに基づいた高品質なプログラムを提供することで、お客様や従業員に対する責任を果たしています。"
      },
      location: {
        office: "事務所",
        warehouse: "倉庫",
        cracow: "クラクフ",
        warsaw: "ワルシャワ"
      },
      procedures: {
        main_title: "引越しの流れ",
        step1_title: "下見・お見積り",
        step1_desc: "コンサルタントが荷物を確認し、梱包や発送方法について詳しくご説明します。",
        step2_title: "梱包作業",
        step2_desc: "プロの梱包チームが、大切な家財を安全に梱包いたします。",
        step3_title: "輸送・配送",
        step3_desc: "海上、航空、陸上輸送を組み合わせ、最適なルートで安全に運びます。",
        step4_title: "通関・現地配送",
        step4_desc: "迅速な通関手続き後、ご指定の場所まで丁寧にお届けいたします。"
      },
      form: {
        contact_us: "お問い合わせ",
        sales_inquiry: "お見積りフォーム",
        name: "お名前 (必須)",
        company: "会社名",
        phone: "電話番号 (必須)",
        email: "メールアドレス (必須)",
        shipping_to: "お届け先",
        service_question: "ご希望のサービスを選択してください",
        optional: "(任意)",
        submit: "送信する",
        weekday: "平日",
        success: "お問い合わせ内容を送信しました！",
        services: {
          international: "海外引越し",
          domestic: "国内引越し",
          vehicle: "車両輸送",
          office: "オフィス移転"
        },
        error_phone: "電話番号の形式が正しくありません (例: +48 123 456 789)",
        error_required: "この項目は必須です",
        message: "メッセージ内容",
        message_placeholder: "引越しの詳細についてご記入ください...",
      },
      gallery_title: "ギャラリー",
      footer: {
        about_title: "私たちについて",
        about_text: "私たちは海外引越しとオフィス移転の専門家です。輸送のすべての段階において、お客様の大切な家財の安全を確保いたします。",
        links_title: "クイックリンク",
        contact_title: "お問い合わせ",
        rights: "All rights reserved.",
        home: "ホーム",
        procedures: "引越しの流れ",
        gallery: "ギャラリー",
        contact: "お問い合わせフォーム"
      }
    }
  }
};

i18n
  .use(LanguageDetector) // Automatycznie wykrywa język przeglądarki
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "pl", // Język domyślny
    interpolation: { escapeValue: false }
  });

export default i18n;
