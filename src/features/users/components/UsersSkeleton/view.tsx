import { Skeleton, TableCell, TableRow } from "@mui/material";

export const UsersSkeleton = ({
  columns,
  rows,
}: {
  columns: number;
  rows: number;
}) => {
  return (
    <>
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <TableRow key={rowIndex}>
          {Array.from({ length: columns }).map((_, colIndex) => (
            <TableCell key={colIndex} align="right">
              <Skeleton variant="text" width="100%" />
            </TableCell>
          ))}
        </TableRow>
      ))}
    </>
  );
};
