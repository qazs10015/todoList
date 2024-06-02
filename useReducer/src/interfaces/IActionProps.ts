export interface IActionProps {
  count: number;
  clearCompleted: () => void;
  setFilter: React.Dispatch<React.SetStateAction<'All' | 'Active' | 'Completed'>>;
}
