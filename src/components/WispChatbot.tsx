import { useEffect } from 'react';

const WISP_ORIGIN = 'https://wisp.axtroniz.com';
const WISP_SITE_ID = '6a795001dd23389c8eb1bb5b';

const enableMicrophone = (root: ParentNode = document) => {
  const iframe = root.querySelector<HTMLIFrameElement>('#wisp-chatbot-iframe');

  if (iframe) {
    iframe.allow = 'microphone';
    iframe.title = 'Wisp chatbot';
  }
};

const WispChatbot = () => {
  useEffect(() => {
    // Wisp creates its iframe dynamically. Delegate microphone access as soon as
    // that iframe is mounted, well before the user can press its microphone button.
    const observer = new MutationObserver(() => enableMicrophone());
    observer.observe(document.body, { childList: true, subtree: true });
    enableMicrophone();

    if (!document.getElementById('wisp-chatbot-container')) {
      const existingScript = document.querySelector<HTMLScriptElement>(
        'script[data-wisp-chatbot="true"]',
      );

      if (!existingScript) {
        const script = document.createElement('script');
        script.src = `${WISP_ORIGIN}/widget.js`;
        script.dataset.siteId = WISP_SITE_ID;
        script.dataset.wispChatbot = 'true';
        script.async = true;
        script.onerror = () => script.remove();
        document.body.appendChild(script);
      }
    }

    return () => observer.disconnect();
  }, []);

  return null;
};

export default WispChatbot;
