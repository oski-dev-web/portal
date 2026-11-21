import { FormEvent, useState } from 'react';
import { CheckCircle2, Mail, MapPin } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';
import { useSeo } from '../hooks/useSeo';

export function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState('Sugestia tematu artykułu');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useSeo({
    title: 'Kontakt',
    description: `Dane kontaktowe i formularz portalu ${SITE_CONFIG.name}.`,
  });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;
    setSubmitted(true);
  };

  return (
    <div className="bg-white">
      <section className="border-b border-[#E6E8EC] bg-[#F7F8FA]">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <p className="text-xs font-medium text-[#7B8494]">Napisz do nas</p>
          <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight text-[#23272E] sm:text-4xl">
            Kontakt
          </h1>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-[#4E5663]">
            Masz sugestię tematu, pytanie do opublikowanego poradnika lub uwagi dotyczące serwisu?
            Napisz do nas bezpośrednio albo skorzystaj z poniższego formularza.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Contact Details */}
          <div className="space-y-5 lg:col-span-5">
            <div className="rounded-xl border border-[#E6E8EC] bg-[#F7F8FA] p-6">
              <div className="flex items-center gap-2.5 text-sm font-semibold text-[#23272E]">
                <Mail className="h-4 w-4 text-[#3B4452]" />
                <span>Adres e-mail</span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-[#4E5663]">
                Propozycje tematów, pytania czytelników oraz uwagi merytoryczne do artykułów.
              </p>
              <a
                href={`mailto:${SITE_CONFIG.contactEmail}`}
                className="mt-3 inline-block text-sm font-medium text-[#23272E] underline-offset-4 hover:underline"
              >
                {SITE_CONFIG.contactEmail}
              </a>
            </div>

            <div className="rounded-xl border border-[#E6E8EC] bg-[#F7F8FA] p-6">
              <div className="flex items-center gap-2.5 text-sm font-semibold text-[#23272E]">
                <MapPin className="h-4 w-4 text-[#3B4452]" />
                <span>Lokalizacja</span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-[#4E5663]">
                {SITE_CONFIG.name} · {SITE_CONFIG.city}
              </p>
              <p className="mt-1 text-xs text-[#7B8494]">
                Odpowiadamy na wiadomości w dni robocze w godzinach 9:00–17:00.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-xl border border-[#E6E8EC] bg-white p-6 sm:p-8">
              <h2 className="font-display text-xl font-semibold text-[#23272E]">
                Formularz kontaktowy
              </h2>

              {submitted ? (
                <div className="mt-6 rounded-xl border border-[#E6E8EC] bg-[#F7F8FA] p-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#3B4452]" />
                    <div>
                      <p className="font-display text-base font-semibold text-[#23272E]">
                        Dziękujemy za wiadomość
                      </p>
                      <p className="mt-1.5 text-sm leading-relaxed text-[#4E5663]">
                        Formularz ma charakter poglądowy — dane pozostają wyłącznie w przeglądarce
                        i nie zostały nigdzie wysłane.
                      </p>
                      <button
                        type="button"
                        onClick={() => {
                          setName('');
                          setEmail('');
                          setMessage('');
                          setSubmitted(false);
                        }}
                        className="mt-4 text-sm font-medium text-[#3B4452] underline-offset-4 hover:underline"
                      >
                        Wyślij kolejną wiadomość
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-medium text-[#4E5663]"
                    >
                      Imię i nazwisko
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      placeholder="Janina Kowalska"
                      className="mt-1.5 w-full rounded-lg border border-[#E6E8EC] bg-white px-3.5 py-2.5 text-sm text-[#23272E] placeholder-[#7B8494] focus:border-[#3B4452] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-medium text-[#4E5663]"
                    >
                      Adres e-mail
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      placeholder="twoj@adres.pl"
                      className="mt-1.5 w-full rounded-lg border border-[#E6E8EC] bg-white px-3.5 py-2.5 text-sm text-[#23272E] placeholder-[#7B8494] focus:border-[#3B4452] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-topic"
                      className="block text-xs font-medium text-[#4E5663]"
                    >
                      Temat wiadomości
                    </label>
                    <select
                      id="contact-topic"
                      value={topic}
                      onChange={(event) => setTopic(event.target.value)}
                      className="mt-1.5 w-full rounded-lg border border-[#E6E8EC] bg-white px-3.5 py-2.5 text-sm text-[#23272E] focus:border-[#3B4452] focus:outline-none"
                    >
                      <option>Sugestia tematu artykułu</option>
                      <option>Pytanie do opublikowanego poradnika</option>
                      <option>Uwagi techniczne do serwisu</option>
                      <option>Inny temat</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-medium text-[#4E5663]"
                    >
                      Wiadomość
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      required
                      value={message}
                      onChange={(event) => setMessage(event.target.value)}
                      placeholder="Napisz, w czym możemy pomóc..."
                      className="mt-1.5 w-full rounded-lg border border-[#E6E8EC] bg-white px-3.5 py-2.5 text-sm text-[#23272E] placeholder-[#7B8494] focus:border-[#3B4452] focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="rounded-lg bg-[#3B4452] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#23272E]"
                  >
                    Wyślij wiadomość
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
