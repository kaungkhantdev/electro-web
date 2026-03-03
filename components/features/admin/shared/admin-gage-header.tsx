import Link from "next/link"
import { Download, Calendar } from "lucide-react"

interface BreadcrumbItemType {
  label: string
  href?: string
}

interface AdminPageHeaderProps {
  breadcrumbs: BreadcrumbItemType[]
  showActions?: boolean
}

export function AdminPageHeader({ breadcrumbs, showActions = true }: AdminPageHeaderProps) {
  const currentPage = breadcrumbs[breadcrumbs.length - 1]?.label ?? ""
  const breadcrumbPath = breadcrumbs.map((b) => b.label).join(" / ")

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
                  <Link href={item.href} className="hover:text-gray-700 transition-colors">
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
      {showActions && (
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 px-3.5 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <Download className="w-4 h-4" />
            Export
          </button>
          <button className="flex items-center gap-2 px-3.5 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <Calendar className="w-4 h-4" />
            Jan 20, 2025 - Feb 09, 2025
          </button>
        </div>
      )}
    </div>
  )
}
