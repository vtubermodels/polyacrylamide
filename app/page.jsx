import Link from 'next/link';
import { Card } from 'components/card';
import { ContextAlert } from 'components/context-alert';
import { Markdown } from 'components/markdown';
import { getNetlifyContext } from 'utils';

const contextExplainer = `
The article below introduces **Polyacrylamide**, exploring its types, uses, and key differences between **anionic** and **cationic polyacrylamide**.  
(Source: [anionicpolyacrylamide.com](https://anionicpolyacrylamide.com/) & [cationicpolyacrylamide.com](https://cationicpolyacrylamide.com/))
`;

const articleContent = `
### Understanding Polyacrylamide

Polyacrylamide (PAM) is a high-molecular-weight polymer used widely in water treatment, soil conditioning, and various industrial processes. It plays a crucial role in improving water quality, reducing soil erosion, and enhancing process efficiency in industries ranging from paper manufacturing to oil recovery.

### The Structure and Purpose of PAM

Polyacrylamide is made by polymerizing acrylamide monomers. The result is a water-soluble polymer that can be modified into different ionic forms depending on the required application. The two main types used in industry are **Anionic Polyacrylamide (APAM)** and **Cationic Polyacrylamide (CPAM)**.

### Anionic Polyacrylamide (APAM)

Anionic polyacrylamide carries a negative charge, making it ideal for applications involving positively charged particles. It is commonly used in:

- **Water and wastewater treatment:** Helps remove suspended solids by promoting flocculation.  
- **Mining and metallurgy:** Enhances the sedimentation process and improves solid-liquid separation.  
- **Agriculture:** Stabilizes soil structure and reduces runoff.  

According to [anionicpolyacrylamide.com](https://anionicpolyacrylamide.com/), APAM is valued for its versatility and cost-efficiency, particularly in large-scale water clarification projects.

### Cationic Polyacrylamide (CPAM)

Cationic polyacrylamide carries a positive charge and is effective in treating wastewater that contains organic materials and negatively charged particles. It is often used in:

- **Municipal wastewater treatment:** Captures and removes sludge efficiently.  
- **Paper and pulp industry:** Improves retention and drainage during paper production.  
- **Food and beverage processing:** Helps clarify water and recover valuable solids.  

Insights from [cationicpolyacrylamide.com](https://cationicpolyacrylamide.com/) highlight CPAM’s strong flocculation power, which leads to faster sedimentation and improved water clarity.

### Key Differences Between Anionic and Cationic Polyacrylamide

| Property | Anionic PAM | Cationic PAM |
|-----------|--------------|---------------|
| Charge Type | Negative | Positive |
| Best For | Inorganic particles, clay, and minerals | Organic materials and sludge |
| Main Use | Industrial & agricultural water treatment | Municipal & biological wastewater |
| Common Industries | Mining, construction, irrigation | Food processing, paper, wastewater plants |

### Environmental and Practical Advantages

Both types of polyacrylamide help industries comply with environmental regulations by minimizing waste and improving water reuse. When used correctly, PAM is considered environmentally safe, as it does not release harmful residues in treated water.

### My Personal Insights

I’ve worked with both APAM and CPAM in water treatment projects. APAM tends to perform better in environments with heavy mineral content, while CPAM shines when dealing with organic-rich sludge. Colleagues in the paper industry have also reported higher yield and better filtration rates after switching to cationic formulations.

### Conclusion

Whether you choose **anionic** or **cationic polyacrylamide** depends on your specific treatment goal and the type of particles you’re separating. Both play a crucial role in modern water management, ensuring efficiency, sustainability, and cleaner industrial processes.
`;

export default function Page() {
  const ctx = getNetlifyContext();

  return (
    <main className="flex flex-col gap-12 sm:gap-16 p-8">
      <section>
        <ContextAlert className="mb-6" />
        <h1 className="mb-4 text-2xl font-semibold">
          Polyacrylamide: Anionic & Cationic Types Explained
        </h1>
        <p className="mb-6 text-lg">
          Explore how Polyacrylamide, in its anionic and cationic forms, is transforming industries like water treatment, paper production, and agriculture.
        </p>
        <Link
          href="https://docs.netlify.com/frameworks/next-js/overview/"
          className="btn btn-lg sm:min-w-64"
        >
          Learn More on Netlify Docs
        </Link>
      </section>

      <section className="flex flex-col gap-4">
        <Markdown content={contextExplainer} />
        <Card title="Detailed Article">
          <Markdown content={articleContent} />
        </Card>
      </section>

      <section className="flex flex-col gap-4">
        <Card title="Runtime Context">
          <p>
            {ctx ? `This page was generated in ${ctx} mode.` : 'Runtime context not detected.'}
          </p>
        </Card>
      </section>
    </main>
  );
}
