import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What are these AI tools?",
      answer: "These are specialized ChatGPT-based AI assistants focused on Jewish education. Torah GPT specializes in Torah study and traditional Jewish texts, while Pre-Roman Kabbalah GPT focuses on mystical and esoteric Jewish wisdom from the pre-Roman period.",
    },
    {
      question: "Are these tools free to use?",
      answer: "Access to these tools follows OpenAI's ChatGPT pricing structure. You'll need a ChatGPT account to use them. Some features may be available with free ChatGPT access, while advanced features require ChatGPT Plus.",
    },
    {
      question: "How accurate is the information provided?",
      answer: "While these AI tools are trained on extensive Jewish texts and scholarship, they are educational tools meant to supplement, not replace, traditional study with qualified teachers. Always verify important religious or scholarly matters with authoritative sources.",
    },
    {
      question: "Can I use these tools for religious decisions?",
      answer: "No. These tools are for educational, informational, and exploratory purposes only. For religious rulings (halacha) or important spiritual decisions, always consult a qualified rabbi or religious authority.",
    },
    {
      question: "What makes the Kabbalah GPT 'Pre-Roman'?",
      answer: "This tool focuses specifically on Kabbalistic traditions and texts that originated before the Roman period, offering insights into the earliest forms of Jewish mysticism and esoteric teachings.",
    },
    {
      question: "Is this suitable for beginners?",
      answer: "Yes! Both tools are designed to be accessible to learners at all levels, from beginners to advanced scholars. The AI adapts its responses to your level of knowledge and questions.",
    },
    {
      question: "How do I get started?",
      answer: "Simply click on either the Torah GPT or Kabbalah GPT button above. You'll be taken to the ChatGPT interface where you can start asking questions immediately.",
    },
    {
      question: "What kind of questions can I ask?",
      answer: "You can ask about specific texts, concepts, interpretations, historical context, traditional practices, philosophical questions, and much more. The AI is designed to engage in meaningful dialogue about Jewish wisdom.",
    },
  ];

  return (
    <section id="faq" className="py-20 px-4 bg-muted/20">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text-secondary">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about our Jewish AI educational tools
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="elevated-3d bg-card/50 backdrop-blur-sm border-2 border-primary/20 rounded-lg px-6"
            >
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
