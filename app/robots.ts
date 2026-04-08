import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    const baseUrl = "https://17movement.net";

    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: [
                    "/api/",
                    "/checkout/",
                    "/basket/",
                    "/manage-purchases/",
                    "/admmin/",
                ],
            },
        ],
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}
