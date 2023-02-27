export interface FieldConfig {
  key: string;
  type: string;
  props?: {
    label: string;
    rules: any[];
  };
}
