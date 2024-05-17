//somos
export type InfographicsDataType = {
  title: string;
  short: string;
  content: string[];
  displayImage: string;
  expandedImage: string;
  icon: string;
};



//template
export interface Collection {
  id: number;
  name: string;
  src: string;
  description: string;
  exchange: string;
}
