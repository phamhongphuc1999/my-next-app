import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from 'src/components/shadcn-ui/dialog';

export default function DomainStateDialog() {
  return (
    <Dialog>
      <DialogTrigger>
        <span className="cursor-pointer underline">domain state</span>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>What is domain state?</DialogTitle>
          <DialogDescription>
            Domain state represent the application' state related to business and data, independent
            of user interface state such as: user information, production inventory, order status.
            Domain state often is stored persistently (for example in the database)
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
