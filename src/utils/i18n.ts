import i18next from 'i18next';
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';

i18next.use(I18nextBrowserLanguageDetector).init({
  fallbackLng: 'en',
  debug: false,
  resources: {
    en: {
      translation: {},
    },
    ja: {
      translation: {
        'Pay': '支払う',
        'Failed to load Stripe': 'ライブラリの読み込みに失敗しました。',
        'Add your payment information': '支払情報を追加',
        'Add card': 'カードを追加',
        'Add a card': 'カードを追加',
        'Add': '追加',
        'Card information': 'カード情報',
        'Card Number': 'カード番号',
        'MM / YY': '月 / 年',
        'CVC': 'セキュリティコード(CVC)',
        'Country or region': '地域',
        'Postal Code': '郵便番号',
      },
    },
    'pt-BR': {
      translation: {
        'Pay': 'Pagar',
        'Failed to load Stripe': 'Falha ao ler Stripe',
        'Add your payment information': 'Informações do seu Pagamento',
        'Add card': 'Adicionar Cartão',
        'Add a card': 'Adicionar um Cartão',
        'Add': 'Adicionar',
        'Card information': 'Informações do Cartão',
        'Card Number': 'Número do Cartão',
        'MM / YY': 'MM / AA',
        'CVC': 'Número de Segurança(CVC)',
        'Country or region': 'País ou região',
        'Postal Code': 'Cep',
      },      
    },
  },
});

export const i18n = i18next;
