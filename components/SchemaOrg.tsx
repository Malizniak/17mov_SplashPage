export const SchemaOrg = () => {
    const faqItems: { title: string; content: string }[] = [
        {
            title: "How will I receive my purchased assets?",
            content:
                "To ensure a seamless experience, we ask you to sign in with your Cfx.re account before checkout. Once your payment is confirmed, your assets are instantly delivered to your account and available for download via the [cfx.re portal](https://portal.cfx.re/). Our automated delivery system ensures you can start building without a moment's delay.",
        },
        {
            title: "What is your refund policy?",
            content:
                "Your satisfaction comes first. Not happy with your purchase? We offer a 'no-questions-asked' refund within the first 24 hours. Plus, if you run into any technical issues on our end within 7 days, you're fully covered. For more details, check out our Refund Policy.",
        },
        {
            title: "Which payment methods are accepted?",
            content:
                "Through our partnership with Tebex, we provide access to the most secure global payment methods. You can choose from PayPal, Visa, Mastercard, Apple Pay, Google Pay, Paysafecard, and Cryptocurrencies. We also support a wide range of local payment options tailored to your region for your maximum convenience. Check list of available payment methods [here](https://www.tebex.io/payment-methods).",
        },
        {
            title: "How can I manage or cancel my subscription?",
            content:
                "We like to keep things simple. You can cancel your subscription at any time through the Manage Purchases section of your account. If you need a hand, just reach out to us on Discord - our team is happy to process the cancellation for you.",
        },
        {
            title: "How do I install the products?",
            content:
                "We’ve made installation as simple as it gets. Most of our scripts are 'Drag & Drop' and come with our own auto-installer. For anything else, our step-by-step documentation has you covered. And if you ever get stuck? Our support team is always ready to jump in and help you get everything running perfectly.",
        },
        {
            title: "Can I transfer my license to a friend?",
            content:
                "es, you can do a one-time license transfer via the Cfx.re platform. Just log in to the [Cfx.re portal](https://portal.cfx.re/), select the script you want to move, and follow the steps. Keep in mind that this is a permanent change and can only be done once per license."
        }
    ];

    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "17movement",
        url: "https://17movement.net",
        logo: "https://17movement.net/assets/images/mov_opengraph.webp",
        sameAs: [
            "https://discord.gg/17movement",
        ],
        contactPoint: {
            "@type": "ContactPoint",
            contactType: "customer support",
            url: "https://discord.gg/17movement",
        },
    };

    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "17movement",
        url: "https://17movement.net",
        potentialAction: {
            "@type": "SearchAction",
            target: {
                "@type": "EntryPoint",
                urlTemplate: "https://17movement.net/products?search={search_term_string}",
            },
            "query-input": "required name=search_term_string",
        },
    };

    const storeSchema = {
        "@context": "https://schema.org",
        "@type": "Store",
        name: "17movement",
        description: "Premium FiveM Scripts & Resources for GTA 5 roleplay servers",
        url: "https://17movement.net",
        priceRange: "€5 - €100",
        currenciesAccepted: "EUR",
        image: "https://17movement.net/assets/images/mov_opengraph.webp",
        address: {
            "@type": "PostalAddress",
            addressCountry: "PL",
        },
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqItems.map((item) => ({
            "@type": "Question",
            name: item.title,
            acceptedAnswer: {
                "@type": "Answer",
                text: item.content,
            },
        })),
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(organizationSchema),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(websiteSchema),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(storeSchema),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(faqSchema),
                }}
            />
        </>
    );
};
