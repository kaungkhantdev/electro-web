interface SearchHeaderProps {
  query: string;
  resultCount: number;
}

export function SearchHeader({ query, resultCount }: SearchHeaderProps) {
  return (
    <div className="mb-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-1">
        {resultCount} results for "{query}"
      </h1>
      <p className="text-sm text-gray-500">{query}</p>
    </div>
  );
}
