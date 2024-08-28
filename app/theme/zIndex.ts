// app/theme/zIndex.ts

export const zIndex = {
  base: "0",
  topBar: "1", // top menu/nav bar
  sideBar: "2", // side menu/nav bar
  popover: "9995", // ensure overlays+ are above popovers (but prevents a popover within a dialog)
  overlay: "9996", // background overlays for dialogs, modals, etc.
  overlayContent: "9997", // dialogs, modals, etc.
  dropdowns: "9998", // dropdowns, select menus, etc.
  tooltip: "9999", // allow tooltip to show in a dialog/modal
};
