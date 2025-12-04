/*
 * Components
 */
type IconType =
  | "close"
  | "copy"
  | "more"
  | "menu"
  | "search"
  | "stackOverflow"
  | "twitter"
  | "slack"
  | "externalLink"
  | "linkedin"
  | "github"
  | "chevronRight"
  | "chevronLeft"
  | "rss";

/*
 * Menus
 */
interface SingleMenuItem {
  label: string;
  url: string;
  icon?: IconType;
}

interface GroupMenuItem {
  label: string;
  items: SingleMenuItem[];
  icon?: IconType;
}

export type MenuItem = SingleMenuItem | GroupMenuItem;
