declare module "tailwindcss/lib/util/flattenColorPalette" {
  export default function flattenColorPalette(
    colors: object,
  ): Record<string, string>;
}
