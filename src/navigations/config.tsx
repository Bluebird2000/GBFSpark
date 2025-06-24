import colours from "@constants/colours";

export const headerOptions = (
  colourScheme = 'light',
) => ({
  title: '',
  headerShadowVisible: false,
  headerStyle: {
    backgroundColor:
      colourScheme === 'dark' ? colours.darkBase200 : colours.neutral100,
  },
});