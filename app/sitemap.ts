import { MetadataRoute } from "next";
import { getProducts, getBundles } from "@/actions/products";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = "https://17movement.net";

    const staticPages: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 1,
        },
        {
            url: `${baseUrl}/products`,
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/bundles`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/terms`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.3,
        },
        {
            url: `${baseUrl}/privacy-policy`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.3,
        },
        {
            url: `${baseUrl}/refunds`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.3,
        },
    ];

    const products = await getProducts();
    const productPages: MetadataRoute.Sitemap = products.map((product) => ({
        url: `${baseUrl}/products/${product.slug}`,
        lastModified: new Date(product.updatedAt),
        changeFrequency: "weekly",
        priority: 0.8,
    }));

    const bundles = await getBundles();
    const bundlePages: MetadataRoute.Sitemap = bundles.map((bundle) => ({
        url: `${baseUrl}/bundles/${bundle.slug}`,
        lastModified: new Date(bundle.updatedAt),
        changeFrequency: "weekly",
        priority: 0.8,
    }));

    return [...staticPages, ...productPages, ...bundlePages];
}
