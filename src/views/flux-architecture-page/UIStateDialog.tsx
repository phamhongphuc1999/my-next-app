/* eslint-disable react/no-unescaped-entities */
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from 'src/components/shadcn-ui/dialog';

export default function UIStateDialog() {
  return (
    <Dialog>
      <DialogTrigger>
        <span className="cursor-pointer underline">user interface state</span>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>What is user interface state?</DialogTitle>
          <DialogDescription>
            UI state represents the state of the user interface, including how elements are
            displayed and how they respond to user interactions. Simply, whatever developers store
            in special design in the frontend side can be considered as UI state.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
