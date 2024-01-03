export const CSS = {
  Primitives: {
    button: `relative h-auto overflow-hidden rounded-full border px-3 py-1.5 text-base font-normal transition-[background,transform,shadow] duration-200 ease-in-out`,
    input: `rounded-full border border-gray-200 bg-shade-50/60 font-normal text-gray-950 hover:bg-gray-100 
    hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 
    disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-shade-950/60 dark:text-gray-100 
    dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300`,
  },
  Utilities: {
    glassmorphism:
      'border border-shade-300/20 bg-shade-100/60 text-shade-950 backdrop-blur-lg dark:border-shade-900/70 dark:bg-shade-300/20 dark:text-shade-50',
  },
}