import colours from "@constants/colours";

export const headerOptions = (
  colourScheme = 'light',
  leftButton = {enabled: true},
  rightButton = {},
) => ({
  title: '', // for Android (and iOS)
  headerShadowVisible: false,
  headerStyle: {
    backgroundColor:
      colourScheme === 'dark' ? colours.darkBase200 : colours.neutral100,
  },
});