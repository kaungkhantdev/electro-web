"use client";
import * as React from "react";
import {
  DndContext,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  closestCenter,
  useSensor,
  useSensors,
  type DragEndEvent,
  type UniqueIdentifier,
} from "@dnd-kit/core";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";
import {
  SortableContext,
  arrayMove,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import {
  type ColumnDef,
  type ColumnFiltersState,
  type Row,
  type SortingState,
  type VisibilityState,
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowLeft01Icon,
  ArrowLeftDoubleIcon,
  ArrowRight01Icon,
  ArrowRightDoubleIcon,
} from "@hugeicons/core-free-icons";
import { Field, FieldLabel } from "@/components/ui/field";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export interface CursorPaginationProps {
  nextCursor: string | null | undefined;
  onCursorChange: (cursor: string | undefined) => void;
  limit: number;
  onLimitChange: (limit: number) => void;
}

function DraggableRow<T extends { id: number | string }>({
  row,
}: {
  row: Row<T>;
}) {
  const { transform, transition, setNodeRef, isDragging } = useSortable({
    id: row.original.id,
  });

  return (
    <TableRow
      data-state={row.getIsSelected() && "selected"}
      data-dragging={isDragging}
      ref={setNodeRef}
      className="relative z-0 data-[dragging=true]:z-10 data-[dragging=true]:opacity-80"
      style={{
        transform: CSS.Transform.toString(transform),
        transition: transition,
      }}
    >
      {row.getVisibleCells().map((cell) => (
        <TableCell key={cell.id}>
          {flexRender(cell.column.columnDef.cell, cell.getContext())}
        </TableCell>
      ))}
    </TableRow>
  );
}

export function ReusableDataTable<T extends { id: number | string }>({
  data: initialData,
  columns,
  showPagination = true,
  cursorPagination,
}: {
  data: T[];
  columns: ColumnDef<T>[];
  showPagination?: boolean;
  cursorPagination?: CursorPaginationProps;
}) {
  "use no memo";
  const [data, setData] = React.useState(() => initialData);
  const [rowSelection, setRowSelection] = React.useState({});
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    [],
  );
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [pagination, setPagination] = React.useState({
    pageIndex: 0,
    pageSize: 10,
  });

  // Cursor pagination state
  const [cursorHistory, setCursorHistory] = React.useState<
    (string | undefined)[]
  >([undefined]);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    setData(initialData);
  }, [initialData]);

  const sortableId = React.useId();
  const sensors = useSensors(
    useSensor(MouseSensor, {}),
    useSensor(TouchSensor, {}),
    useSensor(KeyboardSensor, {}),
  );

  const dataIds = React.useMemo<UniqueIdentifier[]>(
    () => data?.map(({ id }) => id) || [],
    [data],
  );

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnVisibility,
      rowSelection,
      columnFilters,
      pagination,
    },
    getRowId: (row) => row.id.toString(),
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
  });

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (active && over && active.id !== over.id) {
      setData((data) => {
        const oldIndex = dataIds.indexOf(active.id);
        const newIndex = dataIds.indexOf(over.id);
        return arrayMove(data, oldIndex, newIndex);
      });
    }
  }

  function handleCursorNext(e: React.MouseEvent) {
    e.preventDefault();
    if (!cursorPagination?.nextCursor) return;
    const nextIdx = currentIndex + 1;
    let cursorForNextPage: string | undefined;
    if (nextIdx < cursorHistory.length) {
      cursorForNextPage = cursorHistory[nextIdx];
    } else {
      cursorForNextPage = cursorPagination.nextCursor;
      setCursorHistory((prev) => [...prev, cursorPagination.nextCursor!]);
    }
    setCurrentIndex(nextIdx);
    cursorPagination.onCursorChange(cursorForNextPage);
  }

  function handleCursorPrev(e: React.MouseEvent) {
    e.preventDefault();
    if (!cursorPagination || currentIndex <= 0) return;
    const prevIdx = currentIndex - 1;
    setCurrentIndex(prevIdx);
    cursorPagination.onCursorChange(cursorHistory[prevIdx]);
  }

  const hasCursorNext =
    !!cursorPagination?.nextCursor || currentIndex < cursorHistory.length - 1;
  const hasCursorPrev = currentIndex > 0;

  return (
    <div className="relative flex flex-col gap-4 overflow-auto">
      <div className="overflow-hidden">
        <DndContext
          collisionDetection={closestCenter}
          modifiers={[restrictToVerticalAxis]}
          onDragEnd={handleDragEnd}
          sensors={sensors}
          id={sortableId}
        >
          <Table>
            <TableHeader className="sticky top-0 z-10">
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header, index) => {
                    const isLast = index === headerGroup.headers.length - 1;
                    return (
                      <TableHead
                        key={header.id}
                        colSpan={header.colSpan}
                        className={isLast ? "text-right" : ""}
                      >
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext(),
                            )}
                      </TableHead>
                    );
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody className="**:data-[slot=table-cell]:first:w-8">
              {table.getRowModel().rows?.length ? (
                <SortableContext
                  items={dataIds}
                  strategy={verticalListSortingStrategy}
                >
                  {table.getRowModel().rows.map((row) => (
                    <DraggableRow key={row.id} row={row} />
                  ))}
                </SortableContext>
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </DndContext>
      </div>

      {cursorPagination ? (
        <div className="flex items-center justify-between gap-4 px-4 border-t border-gray-200 pt-4 pb-2">
          <Field orientation="horizontal" className="w-fit">
            <FieldLabel htmlFor="cursor-rows-per-page">
              Rows per page
            </FieldLabel>
            <Select
              value={cursorPagination.limit.toString()}
              onValueChange={(val) => {
                setCursorHistory([undefined]);
                setCurrentIndex(0);
                cursorPagination.onCursorChange(undefined);
                cursorPagination.onLimitChange(Number(val));
              }}
            >
              <SelectTrigger
                className="w-20 rounded-full"
                id="cursor-rows-per-page"
              >
                <SelectValue />
              </SelectTrigger>
              <SelectContent align="start" className="rounded-2xl">
                <SelectGroup>
                  <SelectItem className="rounded-xl" value="10">
                    10
                  </SelectItem>
                  <SelectItem className="rounded-xl" value="25">
                    25
                  </SelectItem>
                  <SelectItem className="rounded-xl" value="50">
                    50
                  </SelectItem>
                  <SelectItem className="rounded-xl" value="100">
                    100
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </Field>

          <Pagination className="mx-0 w-auto">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={handleCursorPrev}
                  className={`rounded-full ${!hasCursorPrev ? "pointer-events-none opacity-50" : ""}`}
                  href="#"
                />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext
                  onClick={handleCursorNext}
                  className={`rounded-full ${!hasCursorNext ? "pointer-events-none opacity-50" : ""}`}
                  href="#"
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      ) : showPagination ? (
        <div className="flex items-center justify-between px-4 border-t border-gray-200 pt-6 pb-2">
          <div className="hidden flex-1 text-sm text-muted-foreground lg:flex">
            {table.getFilteredSelectedRowModel().rows.length} of{" "}
            {table.getFilteredRowModel().rows.length} row(s) selected.
          </div>
          <div className="flex w-full items-center gap-8 lg:w-fit">
            <div className="hidden items-center gap-2 lg:flex">
              <Label htmlFor="rows-per-page" className="text-sm font-medium">
                Rows per page
              </Label>
              <Select
                value={`${table.getState().pagination.pageSize}`}
                onValueChange={(value) => {
                  table.setPageSize(Number(value));
                }}
              >
                <SelectTrigger className="w-20" id="rows-per-page">
                  <SelectValue
                    placeholder={table.getState().pagination.pageSize}
                  />
                </SelectTrigger>
                <SelectContent side="top">
                  {[10, 20, 30, 40, 50].map((pageSize) => (
                    <SelectItem key={pageSize} value={`${pageSize}`}>
                      {pageSize}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex w-fit items-center justify-center text-sm font-medium">
              Page {table.getState().pagination.pageIndex + 1} of{" "}
              {table.getPageCount()}
            </div>
            <div className="ml-auto flex items-center gap-2 lg:ml-0">
              <Button
                variant="outline"
                className="hidden h-8 w-8 p-0 lg:flex"
                onClick={() => table.setPageIndex(0)}
                disabled={!table.getCanPreviousPage()}
              >
                <span className="sr-only">Go to first page</span>
                <HugeiconsIcon icon={ArrowLeftDoubleIcon} className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                className="size-8"
                size="icon"
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
              >
                <span className="sr-only">Go to previous page</span>
                <HugeiconsIcon icon={ArrowLeft01Icon} className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                className="size-8"
                size="icon"
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
              >
                <span className="sr-only">Go to next page</span>
                <HugeiconsIcon icon={ArrowRight01Icon} className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                className="hidden size-8 lg:flex"
                size="icon"
                onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                disabled={!table.getCanNextPage()}
              >
                <span className="sr-only">Go to last page</span>
                <HugeiconsIcon
                  icon={ArrowRightDoubleIcon}
                  className="h-4 w-4"
                />
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
