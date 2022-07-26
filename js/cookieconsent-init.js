// obtain plugin
var cc = initCookieConsent();

// run plugin with your configuration
cc.run({
    current_lang: 'pt-br',
    autoclear_cookies: true,                   // default: false
    page_scripts: true,                        // default: false

    // mode: 'opt-in'                          // default: 'opt-in'; value: 'opt-in' or 'opt-out'
    // delay: 0,                               // default: 0
    // auto_language: null                     // default: null; could also be 'browser' or 'document'
    // autorun: true,                          // default: true
    // force_consent: false,                   // default: false
    // hide_from_bots: false,                  // default: false
    // remove_cookie_tables: false             // default: false
    // cookie_name: 'cc_cookie',               // default: 'cc_cookie'
    // cookie_expiration: 182,                 // default: 182 (days)
    // cookie_necessary_only_expiration: 182   // default: disabled
    // cookie_domain: location.hostname,       // default: current domain
    // cookie_path: '/',                       // default: root
    // cookie_same_site: 'Lax',                // default: 'Lax'
    // use_rfc_cookie: false,                  // default: false
    // revision: 0,                            // default: 0

    onFirstAction: function(user_preferences, cookie){
        // callback triggered only once
    },

    onAccept: function (cookie) {
        // ...
    },

    onChange: function (cookie, changed_preferences) {
        // ...
    },

    languages: {
        'pt-br': {
            consent_modal: {
                title: 'COOKIES E PRIVACIDADE',
                description: 'Utilizamos cookies para coletar alguns dos seus dados e otimizar a sua experiência com a gente. Para saber mais, confira a nossa Política de Privacidade e nossa política de cookies. Você pode escolher ou aceitar a opção padrão. <button type="button" data-cc="c-settings" class="cc-link">Me deixe escolher</button>',
                primary_btn: {
                    text: 'Aceitar Todos',
                    role: 'accept_all'              // 'accept_selected' or 'accept_all'
                },
                secondary_btn: {
                    text: 'Aceitar Necessários',
                    role: 'accept_necessary'        // 'settings' or 'accept_necessary'
                }
            },
            settings_modal: {
                title: 'Definições de Cookies',
                save_settings_btn: 'Salvar setup',
                accept_all_btn: 'Aceitar Todos',
                reject_all_btn: 'Rejeitar Todos',
                close_btn_label: 'Fechar',
                cookie_table_headers: [
                    {col1: 'Name'},
                    {col2: 'Domain'},
                    {col3: 'Expiration'},
                    {col4: 'Description'}
                ],
                blocks: [
                    {
                        title: 'Uso de cookies 📢',
                        description: 'Eu uso cookies para garantir as funcionalidades básicas do site e melhorar sua experiência online. Você pode escolher cada categoria para ativar/desativar sempre que quiser. Para obter mais detalhes relativos a cookies e outros dados confidenciais, leia a política de privacidade completa. <a href="#" class="cc-link">Política de Privacidade</a>.'
                    }, {
                        title: 'Cookies estritamente necessários',
                        description: 'Esses cookies são essenciais para o bom funcionamento do meu site. Sem esses cookies, o site não funcionaria corretamente',
                        toggle: {
                            value: 'necessary',
                            enabled: true,
                            readonly: true          // cookie categories with readonly=true are all treated as "necessary cookies"
                        }
                    }, {
                        title: 'Cookies de desempenho e análise',
                        description: 'Esses cookies permitem que o site se lembre das escolhas que você fez no passado',
                        toggle: {
                            value: 'analytics',     // your cookie category
                            enabled: true,
                            readonly: true
                        },
                        cookie_table: [             // list of all expected cookies
                            {
                                col1: 'Hotjar',       // match all cookies starting with "_ga"
                                col2: 'hotjar.com',
                                col3: '1 years',
                                col4: 'Mapa de calor; páginas visitadas',
                                is_regex: true
                            },
                            {
                                col1: '_gid',
                                col2: 'google.com',
                                col3: '1 day',
                                col4: 'description ...',
                            }
                        ]
                    }, {
                        title: 'Cookies de publicidade e segmentação',
                        description: 'Esses cookies coletam informações sobre como você usa o site, quais páginas você visitou e quais links você clicou. Todos os dados são anonimizados e não podem ser usados para identificá-lo',
                        toggle: {
                            value: 'targeting',
                            enabled: false,
                            readonly: false
                        }
                    }, {
                        title: 'Mais Informações',
                        description: 'Para qualquer dúvida em relação à nossa política de cookies e suas escolhas, por favor <a class="cc-link" href="contato.html">entre em contato conosco</a>.',
                    }
                ]
            }
        }
    }
});