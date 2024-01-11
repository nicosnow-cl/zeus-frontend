export const CSS = {
  Primitives: {
    Buttons: {
      btn: `relative h-auto overflow-hidden rounded-full border px-3 py-1.5 text-base font-normal transition-[background,transform,shadow] duration-200 ease-in-out`,
    },
    Inputs: {
      input: `h-auto rounded-full border border-gray-200 bg-shade-50/60 px-4 py-2 text-base font-normal text-gray-950 
    hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 
    focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-shade-950/60 dark:text-gray-100 
    dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus-visible:ring-gray-300`,
    },
    Dropdowns: {
      btnCombobox: `h-auto w-full justify-between rounded-full bg-shade-50/60 text-base font-normal text-gray-950 
      focus:bg-gray-100 data-[state="open"]:bg-gray-100 dark:bg-shade-950/60 dark:text-gray-100 dark:focus:bg-gray-800 dark:data-[state="open"]:bg-gray-800`,
    },
  },
  Utilities: {
    glassmorphism:
      'border border-shade-300/20 bg-shade-100/60 text-shade-950 backdrop-blur-lg dark:border-shade-900/70 dark:bg-shade-300/20 dark:text-shade-50',
  },
}
