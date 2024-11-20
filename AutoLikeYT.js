// ==UserScript==
// @name         Autolike YouTube Melhorado
// @namespace    https://raw.githubusercontent.com/Alimsoftware/ScriptsTM/refs/heads/main/AutoLikeYT.js
// @version      1.0
// @description  Curte automaticamente vídeos do YouTube se você estiver inscrito no canal do autor ou se a opção de curtir todos os vídeos estiver ativada.
// @author       Alimsoftware
// @icon         data:image/png;base64,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
// @match        https://www.youtube.com/*
// @grant        GM_addStyle
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_notification
// @grant        GM_registerMenuCommand
// @grant        GM_unregisterMenuCommand
// @license      CC-BY-NC-SA-4.0
// ==/UserScript==

(function () {
    'use strict';

    const likeSelector = '.YtLikeButtonViewModelHost button';
    const subscribeSelector = '#subscribe-button button';

    // Menu
    const menu = [
        {
            key: 'like_all_videos',
            name: 'Like em todos os vídeos',
            value: true,
            showNotification: true,
            tip: {
                open: '✅',
                close: '❌'
            },
            click: null
        }
    ]

    // Salvar o menu registrado
    const munuRegister = []

    // Configurar o menu padrão
    menu.forEach(v => {
        if (GM_getValue(v.key) === undefined || GM_getValue(v.key) === null) GM_setValue(v.key, v.value)
    })

    // Registrar o menu
    function registerMenuCommand() {
        if (munuRegister.length === menu.length) {
            munuRegister.forEach(v => {
                GM_unregisterMenuCommand(v)
            })
        }
        menu.forEach((v, i) => {
            v.value = GM_getValue(v.key)
            munuRegister[i] = GM_registerMenuCommand(`${v.value ? v.tip.open : v.tip.close} ${v.name}`, () => {
                menuSwitch(v)
            })
        })
    }

    // Alternar o menu
    function menuSwitch(item) {
        // Definir dados
        item.value = !item.value
        GM_setValue(item.key, item.value)
        // Notificação do sistema
        if (item.showNotification) {
            showNotification(`Like em todos os vídeos ${item.value ? `ativado ${item.tip.open}` : `desativado ${item.tip.close}`}`);
        }
        // Se houver evento de clique, execute
        if (item.click) item.click()
        // Re-registrar
        registerMenuCommand()
    }

    // Registrar o menu
    registerMenuCommand()



    // Função para verificar propriedades com segurança
    function getObjectProperty(obj, keyStr) {
        try {
            return keyStr.split('.').reduce((o, k) => (o && k in o ? o[k] : undefined), obj);
        } catch (e) {
            console.error('Erro ao acessar propriedade:', keyStr, e);
            return undefined;
        }
    }

    // Verifica se o vídeo já foi curtido
    function isLiked() {
        const btn = document.querySelector(likeSelector);
        return btn ? btn.getAttribute('aria-pressed') === 'true' : false;
    }

    // Verifica se o usuário está inscrito no canal
    function isSubscribed() {
        const btn = document.querySelector(subscribeSelector);
        return (
            btn?.classList.contains('yt-spec-button-shape-next--tonal') ||
            getObjectProperty(
                window.ytInitialPlayerResponse,
                'annotations.0.playerAnnotationsExpandedRenderer.featuredChannel.subscribeButton.subscribeButtonRenderer.subscribed'
            )
        );
    }

    // Curte automaticamente o vídeo
    function autoLike() {
        const likeAllVideos = GM_getValue('like_all_videos');
        if (isSubscribed() || likeAllVideos) {
            const likeBtn = document.querySelector(likeSelector);

            if (likeBtn && !isLiked()) {
                // Espera o botão carregar completamente antes de clicar
                setTimeout(() => {
                    likeBtn.click();
                    showNotification('Vídeo curtido automaticamente!');
                }, 500); // Ajuste o tempo conforme necessário
                return true;
            }
        }
        return false;
    }


    // Mostra uma notificação no estilo do YouTube
    function showNotification(message) {
        const notification = document.createElement('div');
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: #202124;
            color: #fff;
            padding: 10px 20px;
            border-radius: 8px;
            font-size: 14px;
            z-index: 9999;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        `;
        document.body.appendChild(notification);
        setTimeout(() => notification.remove(), 3000);
    }

    // Observa mudanças no DOM
    function observeChanges() {
        const observer = new MutationObserver(() => {
            if (document.querySelector(subscribeSelector)) {
                if (isLiked() || autoLike()) {
                    observer.disconnect();
                }
            }
        });

        observer.observe(document.body, { childList: true, subtree: true });
    }

    // Inicia a lógica do script
    window.addEventListener('yt-navigate-finish', observeChanges, true);
})();
