import { DivProps } from 'src/global';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../shadcn-ui/table';

export type AbbreviationType = { short: string; full: string };

interface Props extends DivProps {
  data: Array<AbbreviationType>;
}

export default function AbbreviationBox({ data, ...props }: Props) {
  return (
    <div {...props}>
      <p className="text-center text-[20px] font-semibold">LIST OF ABBREVIATIONS</p>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="font-bold">Abbreviation</TableHead>
            <TableHead className="font-bold">Full Expression</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item) => {
            return (
              <TableRow key={item.short}>
                <TableCell>{item.short}</TableCell>
                <TableCell>{item.full}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
