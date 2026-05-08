export type FAQItem = {
  question: string;
  answer: string;
};

type FAQSectionProps = {
  eyebrow?: string;
  title?: string;
  faqs: FAQItem[];
};

export function FAQSection({
  eyebrow = '// common questions',
  title = 'Questions clients ask before we start.',
  faqs,
}: FAQSectionProps) {
  return (
    <section className="section">
      <div className="container">
        <span className="page-tag">{eyebrow}</span>
        <h2 className="section-headline" style={{ maxWidth: 640, marginBottom: 32 }}>
          {title}
        </h2>
        <div className="faq-list">
          {faqs.map((faq) => (
            <details className="faq-item" key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

