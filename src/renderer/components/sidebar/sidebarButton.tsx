function SidebarButton(props: {
  icon: string;
  title: string;
  selected?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={() => props.onClick()}
      type="button"
      className="flex flex-row justify-center md:justify-start | text-left text-xl | mx-2 my-2 | items-center hover:scale-110 whitespace-nowrap"
    >
      {/* Add hover tooltip when small */}
      <span className="text-3xl">{props.icon}</span>
      <span
        className={`hidden md:inline | ml-2 | font-light ${
          props.selected ? 'underline' : 'no-underline'
        }`}
      >
        {props.title}
      </span>
    </button>
  );
}

export default SidebarButton;
