import DropComponent from "./dropComponent";

export default function RootLayout({ children }) {
  return (
    <div
      data-cz-shortcut-listen="ignore"
      suppressHydrationWarning={true}
      className="container mx-auto px-4 py-8"
    >
      <div className="flex flex-col lg:flex-row lg:space-x-4 justify-center">
        <div className="w-full lg:w-1/3  p-4 mb-4 lg:mb-0 dropdown_container">
          <DropComponent />
        </div>
        <div className="w-full lg:w-2/3  p-4 content_container">{children}</div>
      </div>
    </div>
  );
}
