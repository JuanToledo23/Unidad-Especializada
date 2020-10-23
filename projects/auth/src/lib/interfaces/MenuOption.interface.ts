export interface MenuOption {
  levelCoord: string;
  menuId: string;
  menuName: string;
  parentId: string;
  subMenus: MenuOption[];
  url: string;
}
