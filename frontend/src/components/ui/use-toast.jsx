import { useCallback } from 'react';

export function useToast() {
  const toast = useCallback(({ title, variant = "default" }) => {
    const toastElement = document.createElement('div');
    toastElement.innerText = title;

    toastElement.style.position = 'fixed';
    toastElement.style.top = '20px';
    toastElement.style.right = '20px';
    toastElement.style.padding = '12px 20px';
    toastElement.style.backgroundColor = variant === "destructive" ? '#ff4d4d' : '#4CAF50';
    toastElement.style.color = 'white';
    toastElement.style.fontSize = '16px';
    toastElement.style.borderRadius = '8px';
    toastElement.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    toastElement.style.zIndex = 9999;
    toastElement.style.transition = 'all 0.5s ease';

    document.body.appendChild(toastElement);

    setTimeout(() => {
      toastElement.style.opacity = 0;
      toastElement.style.transform = 'translateY(-20px)';
    }, 2000);

    setTimeout(() => {
      document.body.removeChild(toastElement);
    }, 2500);
  }, []);

  return { toast };
}
