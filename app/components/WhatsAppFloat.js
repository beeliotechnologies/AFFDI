export default function WhatsAppFloat() {
  const phone = "256752764415";
  const message = encodeURIComponent("Hello AFFDI, I would like to get support information.");
  const href = `https://wa.me/${phone}?text=${message}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with AFFDI on WhatsApp"
      title="Chat on WhatsApp"
      className="fixed bottom-20 right-4 z-[70] inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_28px_rgba(0,0,0,0.28)] transition hover:scale-105 hover:brightness-105 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/70 md:bottom-6 md:right-6"
    >
      <svg
        viewBox="0 0 32 32"
        width="26"
        height="26"
        aria-hidden="true"
        focusable="false"
        fill="currentColor"
      >
        <path d="M19.11 17.53c-.27-.13-1.58-.78-1.82-.87-.24-.09-.42-.13-.59.14-.17.27-.68.87-.83 1.05-.15.18-.31.2-.58.07-.27-.13-1.12-.41-2.13-1.31-.79-.7-1.32-1.56-1.48-1.83-.15-.27-.02-.41.11-.54.12-.12.27-.31.41-.47.13-.16.18-.27.27-.45.09-.18.04-.34-.02-.47-.07-.13-.59-1.43-.81-1.95-.21-.5-.43-.43-.59-.44h-.5c-.18 0-.47.07-.72.34-.25.27-.95.93-.95 2.27 0 1.34.97 2.63 1.1 2.81.13.18 1.89 2.88 4.57 4.04.64.28 1.14.44 1.53.56.64.2 1.22.17 1.68.1.51-.08 1.58-.65 1.8-1.28.22-.63.22-1.17.15-1.28-.07-.11-.25-.18-.52-.31z" />
        <path d="M16.01 3.2c-7.07 0-12.8 5.72-12.8 12.79 0 2.25.59 4.46 1.7 6.4L3.1 28.8l6.58-1.72a12.77 12.77 0 0 0 6.33 1.72h.01c7.06 0 12.79-5.73 12.79-12.79 0-3.42-1.33-6.64-3.76-9.06a12.72 12.72 0 0 0-9.04-3.75zm0 23.44h-.01c-1.91 0-3.78-.51-5.42-1.47l-.39-.23-3.9 1.02 1.04-3.8-.25-.39a10.53 10.53 0 0 1-1.62-5.67c0-5.83 4.74-10.57 10.56-10.57 2.82 0 5.47 1.1 7.46 3.09a10.5 10.5 0 0 1 3.1 7.48c0 5.82-4.74 10.56-10.57 10.56z" />
      </svg>
      <span className="sr-only">WhatsApp</span>
    </a>
  );
}
