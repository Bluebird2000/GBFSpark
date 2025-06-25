import colours from "@constants/colours";

export const headerOptions = (
  colourScheme = 'light',
) => ({
  title: '',
  headerShadowVisible: false,
  headerStyle: {
    backgroundColor: colours.neutral100,
  },
});