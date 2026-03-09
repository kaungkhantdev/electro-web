import Link from "next/link";

interface BreadcrumbItemType {
  label: string;
  href?: string;
}

interface AdminPageHeaderProps {
  breadcrumbs: BreadcrumbItemType[];
  children?: React.ReactNode;
}

export function AdminPageHeader({
  breadcrumbs,
  children,
}: AdminPageHeaderProps) {
  const currentPage = breadcrumbs[breadcrumbs.length - 1]?.label ?? "";
  const breadcrumbPath = breadcrumbs.map((b) => b.label).join(" / ");

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
      <div>
        <h1 className="text-lg font-semibold text-gray-900">{currentPage}</h1>
        <p className="text-sm text-gray-500 mt-0.5">
          {breadcrumbs.length > 1 ? (
            breadcrumbs.map((item, index) => (
              <span key={item.label}>
                {index > 0 && " / "}
                {item.href ? (
                  <Link
                    href={item.href}
                    className="hover:text-gray-700 transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span>{item.label}</span>
                )}
              </span>
            ))
          ) : (
            <span>Dashboards / {currentPage}</span>
          )}
        </p>
      </div>
      {children}
    </div>
  );
}
