# ram.codes

Personal portfolio of Ram Shankar

## TODO

- [] Use [imagekit](https://imagekit.io/plans) or [cloudinary](https://cloudinary.com/pricing) to serve images

### Built using

- NextJS
- TailwindCSS
- Framer Motion
- [Contentlayer](https://contentlayer.dev/)
- Syntax highlight using [rehype-pretty-code](https://rehype-pretty-code.netlify.app/) which is a rehype plugin powered by [shiki](https://github.com/shikijs/shiki)

### Attributions

- General Sans font from [fontshare](https://www.fontshare.com/fonts/general-sans)
- icons from [simpleicons.org](https://simpleicons.org/) and [iconoir](https://iconoir.com/)
- analytics from [beam analytics](https://beamanalytics.io/)
- [Tailwind Color Palette Generator](https://www.tints.dev/brand/1FFF5E)

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
