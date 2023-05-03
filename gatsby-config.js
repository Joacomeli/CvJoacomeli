module.exports = {
    siteMetadata: {
        siteUrl: "https://www.yourdomain.tld",
        title: "Joaquín Melicchio",
        description: "Awesome Gatsby template",
        author: "Joaquín Melicchio",
        siteLanguage: "es",
        image: "banner.jpg",
        titleTemplate: "Joaquin Melicchio",
        getform_url:
            "https://getform.io/f/da8323a0-7bb8-43bd-8d41-f25c02021218",
        socials: [
            {
                id: 1,
                title: "gmail",
                path: "https://mail.google.com/mail/?view=cm&fs=1&to=joaquinmelicchio@gmail.com",
                icon: "Mail",
            },
            {
                id: 3,
                title: "linkedin",
                path: "https://www.linkedin.com/in/joaquin-melicchio-794a53155/",
                icon: "Linkedin",
            },
        ],
        contact: {
            email: "joaquinmelicchio@gmail.com",
        },
    },
    plugins: [
        {
            resolve: "gatsby-plugin-sass",
            options: {
                useResolveUrlLoader: {
                    options: {
                        sourceMap: true, //default is false
                    },
                },
            },
        },
        "gatsby-plugin-image",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sitemap",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        "gatsby-transformer-json",
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/assets/images`,
                ignore: [`**/\.*`],
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `data`,
                path: `${__dirname}/src/data`,
                ignore: [`**/\.*`],
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 1200,
                        },
                    },
                    "gatsby-remark-reading-time",
                ],
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: "Inbio",
                short_name: "inbio",
                theme_color: "#ff014f",
                background_color: "#ffffff",
                display: "standalone",
                scope: "/",
                start_url: "/",
                icon: "src/assets/images/favicon.png",
            },
        },
    ],
};
