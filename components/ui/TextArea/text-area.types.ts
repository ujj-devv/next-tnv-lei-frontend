export type ShadTextAreaPropTypes = {
  label: string;
  placeholder: string;
  name: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  required?:boolean
};
