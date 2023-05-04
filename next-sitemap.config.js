/** @type {import('next-sitemap').IConfig} */

module.exports = {
    siteUrl: process.env.SITE_URL || 'https://luke256.dev',
    generateRobotsTxt: true,
    sitemapSize: 7000,
}