import { useMemo, useState, type ReactNode } from "react";
import { Button } from "../ui/Button";
import { Section } from "../ui/Section";

export function ContactsSection() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");

  const canSubmit = useMemo(() => {
    return name.trim().length > 1 && contact.trim().length > 3;
  }, [name, contact]);

  return (
    <Section
      id="contacts"
      eyebrow="Контакты"
      title="Давайте соберём ваш комплект"
      description="Оставьте заявку — я подключу ваш фактический канал связи (Telegram/WhatsApp/email) и подставлю реальные данные из структуры."
    >
      <div className="grid gap-6 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <form
            className="rounded-2xl border border-white/10 bg-white/5 p-6 ring-1 ring-white/5"
            onSubmit={(e) => {
              e.preventDefault();
              // временно — без бекенда
              console.log({ name, contact, message });
              alert("Заявка отправлена (демо).");
              setName("");
              setContact("");
              setMessage("");
            }}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Имя">
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="h-11 w-full rounded-xl border border-white/10 bg-[#070a11]/50 px-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-sky-400/70"
                  placeholder="Как к вам обращаться"
                  autoComplete="name"
                />
              </Field>

              <Field label="Телефон / Telegram / Email">
                <input
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  className="h-11 w-full rounded-xl border border-white/10 bg-[#070a11]/50 px-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-sky-400/70"
                  placeholder="@username или +7..."
                  autoComplete="email"
                />
              </Field>
            </div>

            <div className="mt-4">
              <Field label="Сообщение (опционально)">
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="min-h-28 w-full resize-y rounded-xl border border-white/10 bg-[#070a11]/50 px-3 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-sky-400/70"
                  placeholder="Что именно нужно: форма/мерч/экипировка, сроки, примерный объём"
                />
              </Field>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="text-xs text-white/60">
                Нажимая «Отправить», вы соглашаетесь на обработку данных (демо).
              </div>
              <Button disabled={!canSubmit} size="lg" type="submit">
                Отправить
              </Button>
            </div>
          </form>
        </div>

        <div className="lg:col-span-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 ring-1 ring-white/5">
            <div className="text-base font-semibold text-white">
              Быстрые контакты
            </div>
            <p className="mt-2 text-sm leading-relaxed text-white/70">
              Здесь будут ваши реальные ссылки (Telegram/WhatsApp/Email/Адрес).
              Пришли их — подставлю.
            </p>

            <div className="mt-5 grid gap-3 text-sm">
              <ContactRow label="Telegram" value="@erasporta" />
              <ContactRow label="Телефон" value="+7 (000) 000‑00‑00" />
              <ContactRow label="Email" value="hello@erasporta.ru" />
            </div>

            <div className="mt-6 rounded-xl border border-white/10 bg-[#070a11]/40 p-4 text-xs text-white/60">
              Совет: если у тебя есть карта/геолокация — добавлю блок карты и
              кнопку «Маршрут».
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="grid gap-2">
      <span className="text-xs font-medium text-white/70">{label}</span>
      {children}
    </label>
  );
}

function ContactRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-[#070a11]/40 px-3 py-2">
      <div className="text-white/60">{label}</div>
      <div className="font-medium text-white">{value}</div>
    </div>
  );
}

