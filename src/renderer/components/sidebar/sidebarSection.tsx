import { ChildrenProp } from 'renderer/util/types';

function SidebarSection(props: {
  title?: string;
  disabled?: boolean;
  children?: ChildrenProp;
}) {
  return (
    <div
      className={`flex flex-col items-center md:items-start md:flex-none px-2 mb-10 ${
        props.disabled ? 'opacity-50 pointer-events-none' : ''
      }`}
    >
      <h2 className="italic font-thin opacity-70">{props.title}</h2>
      {props.children}
    </div>
  );
}

export default SidebarSection;
