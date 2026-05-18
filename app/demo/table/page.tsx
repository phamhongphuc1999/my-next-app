import CssBreadcrumbs from 'src/components/CssBreadcrumbs';
import TableView from 'src/views/TableView';

export default function TablePage() {
  return (
    <>
      <CssBreadcrumbs configs={[{ label: 'Table' }]} />
      <TableView />
    </>
  );
}
