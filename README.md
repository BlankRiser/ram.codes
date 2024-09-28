# ram.codes

Personal portfolio of Ram Shankar

## TODO

- [ ] Use [imagekit](https://imagekit.io/plans) or [cloudinary](https://cloudinary.com/pricing) to serve images
- [ ] Improve seo using [google search console](https://search.google.com/search-console?resource_id=https%3A%2F%2Fram.codes%2F) and [microsoft webmaster tools](https://www.bing.com/webmasters/sitescan?siteUrl=https://ram.codes/)

### Built using

- NextJS
- TailwindCSS
- Framer Motion
- [content-collections](https://www.content-collections.dev/)
- Syntax highlight using [rehype-pretty-code](https://rehype-pretty-code.netlify.app/) which is a rehype plugin powered by [shiki](https://github.com/shikijs/shiki)


### Attributions

- General Sans font from [fontshare](https://www.fontshare.com/fonts/general-sans)
- icons from [simpleicons.org](https://simpleicons.org/) and [iconoir](https://iconoir.com/)
- analytics from [beam analytics](https://beamanalytics.io/)
- [Tailwind Color Palette Generator](https://www.tints.dev/brand/1FFF5E)

### Inspiration

- [Rauno Craft](https://rauno.me/craft)
- [ibelick Lab](https://www.ibelick.com/lab)
- [Aceternity UI](https://ui.aceternity.com/)
- [Magic UI](https://magicui.design/)

### How to use MDX Components

#### Images

```mdx
<Image
  alt={`React has evolved from a library to also provide an architecture for frameworks.`}
  src={`/images/react-frameworks/evolving.jpg`}
  width={1456 / 2}
  height={819 / 2}
/>
```

#### Full width image with bleed

```mdx
<Bleed full>
  <Image
    alt={`React has evolved from a library to also provide an architecture for frameworks.`}
    src={`/images/react-frameworks/evolving.jpg`}
    width={1456 / 2}
    height={819 / 2}
  />
</Bleed>
```



### Issues

Sometimes the build fails becuase of git cache issues. To fix this run the following command

```bash
git rm -r --cached .
git add .
git commit --allow-empty -m "Fixed git cache issues"
git push
```

Alternatively you can also delete the `hooks` folder from `.git` folder.